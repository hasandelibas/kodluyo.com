
if(!window.maximizeWindow){
  window.maximizeWindow=function(){
    if(document.fullscreenElement) {
      document.exitFullscreen();
    }else {
      document.documentElement.requestFullscreen();
    }
  }
}



let MIN_FONT_SIZE = 18;
let MAX_FONT_SIZE = 28;


let MAIN_FOLDER = "/book/";

let target = location.search.slice(1).split("&")[0].split("=")[1];
if(target){
  // MAIN_FOLDER=target
}

let projectLanguages = ["c","cpp","java","cs","py","js","sh","php"];



const Codes = {}

var HelloWorld = HelloWorld || {};
HelloWorld.LoadingIcon = `<svg style="margin-right:0;font-size:1.6em" class="loading-circle" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.3 193.3">
<circle cx="96.65" cy="96.65" r="90"/>
<polyline points="46.9 101.4 76.9 131.4 146.4 61.9"/></svg>`

// #region Setup Code Editor
function Create8Lang(){
  $(function () {
    document.body.style.setProperty("--max-font-size", MAX_FONT_SIZE+"px");
  
    
    
    for (let key of projectLanguages) {
      let language = HelloWorld.Languages[key];
      let BlockElement = $(`
      <div class="block" id="${language.ext}">
        <div class="title">
          <div class="top-bar">
            <img src="./images/${language.ext}.svg" class="language-image">
            <div class="lang">${language.title}</div>
          </div>
          <div class="files">
            <div class="file">${language.files[0]}</div>
          </div>
          <div class="space"></div>
          <div class="button red-button"></div>
          <div class="button yellow-button"></div>
          <div class="button green-button"></div>
        </div>
        <div class="preview">
          <div class="code"></div>
          <div class="terminal-bar"> <img src="./images/terminal.svg" class="language-image"> Terminal ${HelloWorld.LoadingIcon} </div>
          <div class="terminal-box" tabindex="0"></div>
        </div>
      </div>`).get(0)
  
      $("#codes").append(BlockElement);
  
      Codes[key] = {
        language: key,
        blockElement: $("#" + key).get(0),
        terminalElement: $("#" + key + " .terminal-box").get(0),
        codeElement: $("#" + key + " .code").get(0),
        fileNameElement: $("#" + key + " .file-name").get(0),
        fileName: language.files[0],
        editor: null,
      }
      $("#" + key).get(0).base = Codes[key];
    }
    
  
    console.log(Codes)
  
    
          
  
  
    for (let key of projectLanguages) {
      let code = Codes[key];
      fetch( ("/lessons/"+MAIN_FOLDER + "/" + code.language + "/" + HelloWorld.Languages[key].files[0]).split(/\/+/).join("/") )
        .then(response => response.ok ? response.text() : "")
        .then(text => {
  
          HelloWorld.Editor( Codes[key], Codes[key].codeElement, text ,  Codes[key].fileName, Codes[key].language )
  
        })
    }
  
  
    for (let key in Codes) {
      HelloWorld.Terminal ( Codes[key] , Codes[key].terminalElement, Codes[key].language );
    }
  
  })
}


// #endregion







// #endregion




$(document).on("click", ".block", function () {
  HelloWorld.block = this
})


$(document).on("click", ".button.red-button", function () {
  let $block = $(this).parents(".block")
  HelloWorld.block = $block.get(0);
  if ($block.hasClass("open-terminal")) {
    $block.removeClass("open-terminal")
  } else {
    $block.addClass("open-terminal")
    $block.get(0).base.fitAddon.fit();
    setTimeout(() => {
      $block.get(0).base.fitAddon.fit();
    }, 100);
    setTimeout(() => {
      $block.get(0).base.fitAddon.fit();
    }, 200);
  }
})
$(document).on("dblclick", ".button.red-button", function () {
  let block = $(this).parents(".block").get(0)
  HelloWorld.block = block;
  HelloWorld.block.base.animation();
})

$(document).on("click", ".button.yellow-button", function () {

  if( $(".block").length == 1 ){
    // Toogle FullScreen
    if(document.fullscreenElement) {
      document.exitFullscreen();
    }
    else {
      document.documentElement.requestFullscreen();
    }
    return;
  }


  let block = $(this).parents(".block").get(0)
  HelloWorld.block = block;
  block.classList.toggle("focus")
  block.parentElement.classList.toggle("focus")
  block.style.zIndex = "2"
  setTimeout(() => {
    block.style.zIndex = "1"
    if( block.classList.contains("focus") ){
      block.base.terminal?.setOption('fontSize', MAX_FONT_SIZE);
      block.base.fitAddon?.fit()
    }else{
      block.base.terminal?.setOption('fontSize',  MIN_FONT_SIZE );
      block.base.fitAddon?.fit()
    }
    monaco.editor.remeasureFonts()
  }, 500);
  if( block.classList.contains("focus") ){
    block.base.editor.updateOptions({"fontSize":MAX_FONT_SIZE})
    block.base.terminal?.setOption('fontSize', MAX_FONT_SIZE);
    block.base.fitAddon?.fit()
  }else{
    block.base.editor.updateOptions({"fontSize": MIN_FONT_SIZE })
    block.base.terminal?.setOption('fontSize',  MIN_FONT_SIZE );
    block.base.fitAddon?.fit()
  }
  monaco.editor.remeasureFonts()
  
  
})

$(document).on("dblclick", ".block .top-bar,.block .files", function () {
  let block = $(this).parents(".block").find(".button.yellow-button").click();
})



$(document).on("click", ".button.green-button", function () {
  let block = $(this).parents(".block").get(0);
  HelloWorld.block = block;
  block.base.save().then(function (data) {
    block.base.run();
  });
  if(!block.classList.contains("open-terminal")){
    $(block).find(".button.red-button").click();
  }
})




HelloWorld.ToImage = function(element=document.body.firstElementChild,fileName="image"){

  let style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = ".terminal, .terminal *{overflow:hidden!important}";
  document.getElementsByTagName('head')[0].appendChild(style);

  return domtoimage.toPng(element,{
    style:{
      "overflow":"hidden",
    },
    filter:function(el){
    if(el.tagName == "CANVAS") return false;
    if(el.tagname && el.tagName=="IMG" && el.classList.contains("language-image")==false) return false;
    return true;
  }}).then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = fileName + '.png';
    link.href = dataUrl;
    link.click();
    document.getElementsByTagName('head')[0].removeChild(style);
  }).catch(function (error) {
    console.error('oops, something went wrong!', error);
    //document.getElementsByTagName('head')[0].removeChild(style);
  });

}

HelloWorld.CaptureAllImage = function(){
  let length = $(".block").length;
  if(HelloWorld.block) $(HelloWorld.block).find(".yellow-button").click();
  let i = 0;
  function CaptureNext(){
    if(i>=length)
      return;
    setTimeout(()=>{
      $($(".block").get(i)).find(".yellow-button").click();
      setTimeout( ()=>{
        let fileName = "image-" + i + "-" + $(".block").get(i).base.language
        HelloWorld.ToImage(document.body,fileName).then(()=>{
          $($(".block").get(i)).find(".yellow-button").click();
          i++;
          CaptureNext();
        })
      },1000)
      
    },400)
  }
  CaptureNext();
}



const Settings={};


Settings.UpdateBackgroundImage = function(){
  let input = document.createElement("input")
  input.type = "file"
  input.accept = "image/*"
  input.click()
  input.onchange = function () {
    let file = input.files[0]
    let reader = new FileReader()
    reader.onload = function () {
      document.body.style.backgroundImage = `url(${reader.result})`
    }
    reader.readAsDataURL(file)
  }
}

// On Dom Contente ready
$(document).ready(function () {
  // Update Background Image
  $("#codes").dblclick(function (e) {
    if(e.target.id=="codes"){
      Settings.UpdateBackgroundImage()
    }
  })
})