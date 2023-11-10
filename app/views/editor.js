var Views = Views || (Views = {});
window.Views = Views;

// Icons : https://materialdesignicons.com/

var Theme = {
  light:{
    background: '#fff',
    background2: '#e9e9e9',
    text: '#111',
    primary: '#04F',
  },
  dark:{
    background: '#1A1B1A',
    background2: '#23241f',
    text: '#DDD',
    primary: '#ffeb3b',
  }
}

Theme.Css = `body[theme="light"]{
  --background:${Theme.light.background};
  --background2:${Theme.light.background2};
  --text:${Theme.light.text};
  --primary:${Theme.light.primary};
} 
body[theme="dark"]{
  --background:${Theme.dark.background};
  --background2:${Theme.dark.background2};
  --text:${Theme.dark.text};
  --primary:${Theme.dark.primary};
}`
Theme.Element=document.createElement("style");
Theme.Element.innerHTML=Theme.Css;
document.head.appendChild(Theme.Element);



Views.Panel = function (options) {
  let panel = {
    elements:{}
  }



  function toTitle(text){
    return text.split(/\s+/).map((word)=>{return word[0].toUpperCase()+word.slice(1)}).join(" ");
  }

  let zoomLevel = 0;

  panel.elements.parent=<div class="panel panel-window"></div>
    panel.elements.title=<div class="panel-title"></div>
      panel.elements.panelIcon=<img class="panel-title-icon" src="./source/images/kodluyo.com.svg" style="height:1.6em;width:auto;border-radius:4px;"></img>
      // panel.elements.panelName=<div class="panel-title-lang"></div>
      panel.elements.backButton=<div class="panel-title-button" href="{window.location.href}"></div>
        _=<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>
        panel.elements.backButton.onclick=()=>{ history.back() }
      panel.elements.reloadButton=<a class="panel-title-button" href="{window.location.href}"></a>
        _=<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" /></svg>
      panel.elements.zoomInButton=<div class="panel-title-button"></div>
        _=<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z" /></svg>
        panel.elements.zoomInButton.onclick=()=>{ 
          zoomLevel++;
          panel.elements.body.style.zoom = 1+zoomLevel*0.1;
        }
      panel.elements.zoomOutButton=<div class="panel-title-button"></div>
        _=<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z" /></svg>
        panel.elements.zoomOutButton.onclick=()=>{
          zoomLevel--;
          panel.elements.body.style.zoom = 1+zoomLevel*0.1;
        }
      let upLocation = location.href.split("/")
      if(upLocation[upLocation.length-1].trim() == "") upLocation.pop()
      upLocation.pop()
      if( ['@dene','@düzelt','@hatıla','@yaz'].indexOf( upLocation[upLocation.length-1] ) > -1 ){
        upLocation.pop()
      } 
      upLocation = upLocation.join("/")+"/"
      upLocation = upLocation.replace("/page/editor/","/page/levels/")
      window.upLocation = upLocation
      panel.elements.upButton=<a class="panel-title-button" href={upLocation}></a>
        _=<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" /></svg>
      panel.elements.panelTitle=<div class="panel-title-move" style="gap:1em"></div>
        _ = <div>{toTitle(options.title)}</div>
      panel.elements.redButton=<div class="panel-title-button red-button"></div>
        _=<svg style="width:20px;height:20px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
        panel.elements.redButton.onclick=()=>{ window.closeWindow();}
      panel.elements.yellowButton=<div class="panel-title-button yellow-button"></div>
        _=<svg style="width:20px;height:20px" viewBox="0 0 24 24"><path fill="black" d="M19,13H5V11H19V13Z" /></svg>
        panel.elements.yellowButton.onclick=()=>{ window.minimizeWindow();}
      panel.elements.greenButton=<div class="panel-title-button green-button"></div>
        _=<svg style="width:20px;height:20px" viewBox="0 0 24 24"><path fill="currentColor" d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" /></svg>
        panel.elements.greenButton.onclick=()=>{ window.maximizeWindow();}
    panel.elements.body=<div class="panel-body panel-layout-education panel-body-main" show-content="{options.show_content}" show-editor="{options.show_editor}" show-terminal="{options.show_terminal}" show-preview="{options.show_preview}"></div>
  
  
  //-- theme --//
  let panel_theme = "light"
  let panel_timeout = null;
  Object.defineProperty(panel,"theme",{
    get:()=>{return panel_theme},
    set:(value)=>{
      if(window.monaco){
        monaco.editor.setTheme("vs-"+value);
      }else{
        if(panel_timeout) clearTimeout(panel_timeout);
        panel_timeout = setTimeout(()=>{panel.theme=value},100);
      }
      document.body.setAttribute("theme",value);
      panel_theme = value;
      panel?.terminal?.setOption('theme', {
        background: value=='light'? Theme.light.background : Theme.dark.background,
        foreground: value=='light'? Theme.light.text : Theme.dark.text,
      });
    }
  })
  panel.theme = options.theme || "light"
  
  return panel;
}

Views.Terminal = function (options={},panel=null) {
  if(panel==null) panel = Views.Panel(options);

  panel.elements.terminal=<div class="panel panel-terminal"></div>
    panel.elements.terminalTitle=<div class="panel-title"></div>
      panel.elements.terminalIcon=<img class="panel-title-icon" src="./source/images/terminal.svg"></img>
      panel.elements.terminalTitle=<div style="flex:1">Terminal</div>
      panel.elements.openTerminal=<div class="panel-title-button"></div>
        _=<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        panel.elements.openTerminal.onclick=()=>{ panel.elements.parent.classList.toggle("panel-open-terminal"); }
      panel.elements.testCode=<div class="panel-title-button green-button" title="F9"></div>
        _=<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>
        panel.elements.testCode.onclick=()=>{ panel.test(); }
    panel.elements.terminalBody=<div class="panel-body panel-padding"></div>
  HelloWorld.Terminal(panel,panel.elements.terminalBody,options.language);
  panel.elements.parent.classList.add("panel-open-terminal")

  panel.elements.body.appendChild(panel.elements.terminal);

  return panel;
}

Views.Editor = function (options={},panel=null,code="") {
  if(panel==null) panel = Views.Panel(options);

  panel.elements.editor=<div class="panel panel-editor"></div>
    panel.elements.editorTitle=<div class="panel-title" style='position:relative'></div>
      _=<div style='position: absolute;bottom: 0;left: 0;right: 0;height: 0;border-bottom: 1px solid;opacity: .1;z-index:-1;'></div>
      panel.elements.editorIcon=<img class="panel-title-icon" src="./source/images/py.svg"></img>
      panel.elements.editorTitle=<div>Python</div>
      panel.elements.editorFiles=<div style="flex:1;display:flex;"></div>
        for(let path in panel.options.part.files){
          let file = panel.options.part.files[path];
          _=<div path="{path}" class="panel-title-menu-item">{path}</div>  
            that.onclick =()=>{ 
              Array.from(panel.elements.editorBody.querySelectorAll("[path]")).map(e=>e.style.display="none");
              panel.elements.editorBody.querySelector("[path='"+path+"']").style.display="block";

              Array.from(panel.elements.editorFiles.querySelectorAll("[path]")).map(e=>e.removeAttribute("selected"));
              panel.elements.editorFiles.querySelector("[path='"+path+"']").setAttribute("selected","true");

              panel.editor = panel.editors[path];
            }
        }
      panel.elements.openEditor=<div class="panel-title-button"></div>
        _=<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
        panel.elements.openEditor.onclick=()=>{ panel.elements.parent.classList.toggle("panel-open-editor"); }
      panel.elements.runCode=<div class="panel-title-button green-button" title="F8"></div>
        _=<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>
        panel.elements.runCode.onclick=()=>{ panel.saveRun(); }
    panel.elements.editorBody = <div class="panel-body"></div>
      panel.editors = {}
      for(let path in panel.options.part.files){
        let editorElement = <div style="display:none;height:100%;padding-top:2px"></div>
        editorElement.setAttribute("path",path);
        HelloWorld.Editor(panel,editorElement, {
          code: panel.options.part.files[path],
          language: path.split(".").pop(),
          theme: panel.theme,
          fileName: path,
        }).then(editor=>{
          panel.editors[path] = editor;
          console.log(panel.editors[path])
          if(path==Object.keys(panel.options.part.files)[0]){
            panel.editor = editor;
          }
        })
      }


  panel.elements.editorFiles.firstElementChild.click();
  panel.elements.body.appendChild(panel.elements.editor);

  

  //panel.editor = HelloWorld.Editor(panel,panel.elements.editorBody, {code,language:options.language,theme:options.theme,fileName:"main.py"});
  panel.elements.parent.classList.add("panel-open-editor")
  return panel.elements.parent;
}

Views.Content = function (options={},panel=null,text="") {
  if(panel==null) panel = Views.Panel(options);

  panel.elements.content = <div class="panel panel-content panel-padding"></div>
    panel.elements.content.innerHTML = marked.parse(text);
  panel.elements.body.appendChild(panel.elements.content);
  panel.elements.content.querySelectorAll("code").forEach((block) => {
    if(block.className=="") block.className = "language-python";
    hljs.highlightElement(block);
  });
  panel.elements.content.querySelectorAll("code-view").forEach((block) => {
    if(!block.getAttribute("language")) block.setAttribute("language","python");
    let scrollAble = document.createElement("div");
    scrollAble.className = "code-view-scrollable";
    scrollAble.innerHTML = block.innerHTML.trim();
    block.innerHTML = "";
    block.appendChild(scrollAble);
    block.className = "language-"+block.getAttribute("language");
    hljs.highlightElement(scrollAble);
  });

  return panel;
}

Views.ContentPart = function (text,panel) {
  let part=<div style="background:#888;transition:1s"></div>
  part.innerHTML = marked.parse(text);
  panel.elements.content.appendChild(part);
  part.querySelectorAll("code").forEach((block) => {
    if(block.className=="") block.className = "language-python";
    hljs.highlightElement(block);
  });
  part.querySelectorAll("code-view").forEach((block) => {
    if(!block.getAttribute("language")) block.setAttribute("language","python");
    let scrollAble = document.createElement("div");
    scrollAble.className = "code-view-scrollable";
    scrollAble.innerHTML = block.innerHTML.trim();
    block.innerHTML = "";
    block.appendChild(scrollAble);
    block.className = "language-"+block.getAttribute("language");
    hljs.highlightElement(scrollAble);
  });

  setTimeout(()=>{
    part.style.background=null; 
    Array.from(part.children).forEach(element => {
      panel.elements.content.appendChild(element);
    });
  },100);
  // scroll down
  panel.elements.content.scrollTop = panel.elements.content.scrollHeight;
}

Views.NextLevel = function(panel){
  panel.elements.content.innerHTML = "";
  let nextLevel = null;
  let success = <div class="panel-success" ></div>
    _=<h1>✅ Tebrikler</h1>
    _=<div style='opacity:.6;'>Bölümü başarıyla tamamladın.</div>
    if(panel.options.next==null){
      nextLevel = <a href="{window.upLocation}" class="card">Bölümlere Dön</a>
    }else{
      nextLevel = <a href="{panel.options.next}" class="card">Sonraki Bölüm</a>
    }
  panel.elements.content.appendChild(success);
  localStorage['success:/'+decodeURIComponent(location.pathname)] = true;
}


Views.Create = function (options={}) {
  let partIndex = 0;

  options = Object.assign({
    show_terminal:"true",
    show_editor:"true",
    show_content:"true",
    language: "py",
    title: "Teknofest Yolu > 1. Bölüm > 1. Ders",
    fileName: "main.py",
    theme:"dark",
    parts:[
      {
        code: ['print("Dene Yaz")'],   
        text:`# DeneYaz'a Hoşgeldin 🙂 \n Bu uygulama ile python programlama dilini öğrenebilirsin.`,
      }
    ]
  },options);

  // ! Dikkat Sonunda \n olmalı
  // options.precode = options.precode!="" ? options.precode+"\n" : "";
  // ! Dikkat Başında \n olmalı
  // options.aftercode = options.aftercode!="" ? "\n"+options.aftercode : "";
  if(options.code=="") options.code = " ";

  let panel = Views.Panel(options);
  panel.options = options;
  
  Object.defineProperty(options,"part",{
    get: function() { return options.parts[partIndex]; }
  })
  Object.defineProperty(panel,"part",{
    get: function() { return options.parts[partIndex]; }
  })

  Object.defineProperty(options,"partIndex",{
    get: function() { return partIndex; },
    set: function(val){ partIndex=val}
  })


  

  //-- insert modules --//
  if(options.show_editor == true ){ Views.Editor(options,panel,options.parts[0].code); }
  if(options.show_terminal == true ){ Views.Terminal(options,panel); }
  if(options.show_content == true ){ Views.Content(options,panel,options.parts[0].text); }


  
  panel.theme = "dark";

  function startingAnimation(){
    if(window.monaco){
      panel.animation(.8)
    }else{
      setTimeout(startingAnimation,100);
    }
  }
  //startingAnimation();


  //-- terminal test--//
  let terminalTextIndex = -1;
  //panel.terminal.onRender(()=>{
  panel.terminal_onRender=()=>{
    //-- on python error  --//
    if( panel.editor ){
      if (panel.options.language=="python"){
        let syntaxError = /line (\d+).*\n(.*)Error: (.*)\n/gs
        let match = syntaxError.exec(panel.terminal.getValue());
        if( match ){
          var line = parseInt(match[1]);
          var type = match[2];
          var message = match[3];
          if(message=="expected ':'") message="sonuna ':' koyun";
          panel.editor.error(line, type + "Error: " + message);
        }
      }
    }

    if(panel.part && panel.part.terminal && partIndex<panel.options.parts.length){
      if(panel.terminal.getValue().length < terminalTextIndex) terminalTextIndex = -1;

      var text   = panel.part.terminal.trim();
      var buffer = panel.terminal.getValue().split("\n").map((x)=>x.trim()).join("\n");
      let search = buffer.indexOf(text+'\n',terminalTextIndex)
      if(  search>-1 ){
        terminalTextIndex = search+text.length+1;
        // HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.success, ,0,1);
        // let rate = 0.5 + 0.5 * (terminalIndex / panel.part.terminal.length);
        //let rate = 0.4 * Math.pow(2,parseInt((partIndex)/3) + ( [0,3,5][partIndex%3] )/7)
        let rate = 1 / Math.pow(2,partIndex/4)

        HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.success,rate,0,1);
        panel.nextPart();
      }
    }
  }



  //-- opacity animation --//
  panel.elements.body.style.opacity = 0;
  panel.elements.body.style.transition = "opacity 0.5s";
  setTimeout(()=>{
    panel.elements.body.style.opacity = 1;
  },1000)

  //-- education-mode --//
  // document.body.classList.add("education-mode")
  window.panel = panel;
  return panel;
}


$(document).on("click",".panel-content drawing svg, .panel-content img,.fullscreen-media",function(){

  if($(this).hasClass("fullscreen-media")){
    console.log("removing")
    $(this).removeClass("fullscreen-media");
    setTimeout(()=>{
      $(this).remove();
    },500);

  }else{
    var clone = $(this).clone();
    var box = $(this)[0].getBoundingClientRect();
    clone.css({
      position:"absolute",
      top:box.top,
      left:box.left,
      width:box.width,
      height:box.height,
      zIndex:9999,
      transition:"all 0.5s",
    })
    clone.appendTo("body");
    setTimeout(()=>{
      clone.addClass("fullscreen-media");
    },100)
  }
})




Array.prototype.distinct = function() {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};












function ConvertToData(text){
  for(let key in Pratiku.Datas){
    text = text.replace(`{${key}}`,Pratiku.Datas[key]);
  }
  return text;
}

function ConvertToWord(text,language){
  return text.toLocaleLowerCase(language).split(/[\!\?\.\,\;\:\Â¿\ï¼\ã€\ï¼Ÿ\ã€‚]/).join(" ").split(/\ +/).join(" ").trim();
}

var Speak = {
  synth: null,
  languages: {},
  init: function(){
    return new Promise((resolve,reject)=>{
      const synth = this.synth = window.speechSynthesis;
      const loadVoices= () => {
        let voices = synth.getVoices();
        for (let i = 0; i < voices.length; i++) {
          this.languages[voices[i].lang.replace("_","-")] = voices[i];
        }
        resolve(this.languages);
      }
      // in Google Chrome the voices are not ready on page load
      if ('onvoiceschanged' in synth) {
        synth.onvoiceschanged = loadVoices;
      } else {
        loadVoices();
      }
      synth.speak(new SpeechSynthesisUtterance(''));
      synth.pause();
    });
  },
  audio:null,
  speak: function(text,language='en-US',rate=1){
    function encode(content){
      return ConvertToWord(content,language);
      return btoa(unescape(encodeURIComponent(content)))
    }
    
    return new Promise((resolve,reject)=>{
      if(this.audio!=null){
        this.audio.pause();
        this.audio = null;
      }
      var audio = this.audio = new Audio('https://telebord.com/pratiku/speak.php?word='+encodeURIComponent(encode(text))+'&text='+encodeURIComponent(text)+'&lang='+encodeURIComponent(language));

      // rate
      audio.playbackRate = rate;
      audio.defaultPlaybackRate = rate;
      
      audio.play();
      audio.onended = function(){
        resolve();
      }
    });
  },
};




