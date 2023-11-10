var HelloWorld = HelloWorld || {};

/**
 * @param {HTMLElement} panel
 * @param {HTMLElement} parent
 * @param {string} language
 */
HelloWorld.Terminal = function (panel,parent,language=null) {
  //let socket = io.connect(location.origin)

  let socket = {
    emit:()=>{},
    on :()=>{}
  }


  let terminal = new Terminal({
    cols: 60,
    rows: 60,
    useStyle: true,
    screenKeys: true,
    fontFamily: `var(--monospace-font-family)`,
    fontSize: 20,
    // fontWeight: "bold",
    rendererType: 'dom', // default is canvas
  });
  panel.terminal = terminal;
  panel.socket = socket;

  terminal.setOption('theme', {
    background: '#222',
    foreground: '#EEE',
  });

  terminal.getValue = function(){
    return Array.from(this.element.querySelectorAll(".xterm-rows>div")) 
      .map(e=>Array.from(e.querySelectorAll("span"))
      .map(e=>e.textContent).join("") ).filter(e=>e!="").join("\n")
  } 

  // Fit Addon Setup
  let fitAddon = new FitAddon.FitAddon();
  terminal.loadAddon(fitAddon);


  terminal.open( parent );
  fitAddon.fit();
  panel.fitAddon = fitAddon;



  let _cols = panel.terminal.cols;
  let _rows = panel.terminal.rows;
  let interval = null;
  function CheckSize(){
    if(parent.isConnected==false){
      clearInterval(interval);
      socket.disconnect();
      return;
    }
    panel.fitAddon.fit();    
    if( _cols != panel.terminal.cols || _rows != panel.terminal.rows){
      _cols = panel.terminal.cols;
      _rows = panel.terminal.rows;
      socket.emit("resize",_cols,_rows);
    }
  }
  interval = setInterval(CheckSize,1000);

  let runState = 0
  let loadingCircle = $(panel.blockElement).find(".loading-circle").get(0)
  // terminal.write('WELCOME!\r\n');
  
  panel.run = function () {
    runState = 1;
    loadingCircle?.classList.remove("run-animation")
    loadingCircle?.classList.add("loading-animation")
    panel.terminal.clear()
    panel.program = Program({
      "main.py" : panel.editor.getValue()
    })
    panel.program.onData = function(data){
      terminal.write(data);
    }
    panel.program.onError = function(data){
      terminal.write( FAIL + data + ENDC );
    }
  }
  
  socket.emit("init",MAIN_FOLDER, language);

  let lastKey = null;
  panel.terminal.textarea.addEventListener("keydown",(e)=>{
    if(lastKey!=e.key){
      HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.keyDown)
    }
    lastKey = e.key;
  },true)

  panel.terminal.textarea.addEventListener("keyup",(e)=>{
    HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.keyUp)
    HelloWorld.KeyboardSound.keyDown.buffer = null;
    lastKey = null;
  },true)

  terminal.onData(function (data) {
    

    socket.emit('input', data);
    /*
    // Dont emit arrow keys
    if (data == '\x1B[A' || data == '\x1B[B' || data == '\x1B[C' || data == '\x1B[D') {
      
    } else {
      socket.emit('input', data);
    }    
    */

  });

  socket.on('compiled',function(exitCode){

  })

  socket.on('output', function (data) {
    let clearText =  "[3J[H[2J"
    terminal.write(data);
    if( data.startsWith( clearText) ){
      loadingCircle?.classList.remove("loading-animation")
      loadingCircle?.classList.add("run-animation")     
      setTimeout(()=>{
        loadingCircle?.classList.remove("run-animation")
      },2000)
    }
  });  
}



HelloWorld.Terminal = function(panel,parent,language){
  let element = document.createElement("pre")
  parent.appendChild(element)
  element.style.width = "100%"
  element.style.whiteSpace =  "pre-wrap";
  panel.terminal = {
    clear : function(){
      element.innerHTML = ""
    },
    write : function(text){
      element.innerHTML += text
    },
    setOption:function(opt,val){
      // TODO write
      if(opt=="theme"){

      }
    }
  }
  


  
  let HEADER = '\033[95m'
  let OKBLUE = '\033[94m'
  let OKCYAN = '\033[96m'
  let OKGREEN = '\033[92m'
  let WARNING = '\033[93m'
  let FAIL = '\033[91m'
  let ENDC = '\033[0m'
  let BOLD = '\033[1m'
  let UNDERLINE = '\033[4m'


  OKGREEN = "<b style='color:#3D3'>";
  FAIL    = "<b style='color:#D33'>";
  ENDC    = "</b>"



  let runState = 0
  let loadingCircle = $(panel.blockElement).find(".loading-circle").get(0)
  panel.run = function () {
    runState = 1;
    loadingCircle?.classList.remove("run-animation")
    loadingCircle?.classList.add("loading-animation")
    panel.terminal.clear()
    panel.program = Program({
      "main.py" : panel.editor.getValue()
    })
    panel.program.onData = function(data){
      panel.terminal.write(data);
    }
    panel.program.onError = function(data){
      console.log(data.toString())
      panel.terminal.write( FAIL + data.toString() + ENDC );
      let line = data.match(/on line (\d+)/)
      if(line){
        panel.editor.error( parseInt( line[1] ), data )
      }
    }
  }


  panel.test = function(){
    
    //let editableCode = panel.editor.getModel().getValueInEditableRanges()
    panel.terminal.clear()
    let successCount = 0;
    let part = panel.options.part;
    function testSingle(i){
      if(i>=part.tests.length) return;
      let test = part.tests[i];
      //-- Configure Files --//
      let files = {}
      let filePaths = [...Object.keys(panel.editors) , ...Object.keys(test.files) ].distinct();
      console.log(filePaths)
      for(let path of filePaths ){
        let editor = panel.editors[path]
        if( test.files && test.files[path] ){
          
          if( test.files[path][".precode"] ){ // Pre Code 
            files[path] = test.files[path][".precode"] + editor.getValue().substring( part.files[path][0].code.length )
          }else if( test.files[path][".block"] ){ // Block Code
            let model = editor.getModel()
            let labels = model.getCurrentEditableRanges()
            let editableBlocks = {}
            for(let i in labels){
              editableBlocks[i] = model.getValueInRange(labels[i].range)
            }
            files[path] = test.files[path][".block"].map((block,i)=>{
              if(block.type=="editable"){
                return editableBlocks["label_"+block.label]
              }else{
                return block.code
              }
            }).join("")
          }else{
            files[path] = test.files[path]
          }
        }else{
          // Use Default Code
          files[path] = editor.getValue();
        }
      }

      let command = {
        execute: test.execute,
        files: files,
        output: test.output.split('&minus;').join('-'),
      }

      console.log(command)

      
      let program = Program(command.files)

      program.onEnd = function(response){
        console.log("%cOutput: ","color:blue");
        console.log(command.output);
        console.log("%cResponse: ","color:blue");
        console.log(response);
        if(command.output==response){
          panel.terminal.write(OKGREEN+(i+1)+". Tamamlandı "+ENDC+" 😃\r\n");
          successCount++;
          if(successCount==part.tests.length){
            panel.terminal.write("🎉  " + OKGREEN+"TEBRİKLER"+ENDC+"   🚀\r\n");
            HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.success,1,0,1);
            panel.nextPart();
          }
        }else{
          panel.terminal.write(FAIL+(i+1)+". Çalışmadı  "+ENDC+" 😞\r\n");
        }
        testSingle(i+1);

      }

      
    }
    testSingle(0);
  }



  panel.nextPart = function(){
    if(panel.elements.content){
      panel.elements.content.querySelectorAll("blockquote").forEach((x)=>x.classList.add("success"))
    }
    
    if(panel.options.partIndex>=panel.options.parts.length-1){
      panel.terminal.write("🎉  " + OKGREEN+"GÖREV TAMAMLANDI"+ENDC+"   🚀\r\n");
      Views.NextLevel(panel)
      panel.options.partIndex++;
      return;
    }
    panel.options.partIndex = panel.options.partIndex+1;
    if(panel.options.part.text && panel.elements.content){
      panel.elements.content.innerHTML = "";
      Views.ContentPart(panel.part.text,panel);
      panel.elements.content.scrollTop = 0;
    }
    if(panel.part.message && panel.elements.content){
      Views.ContentPart(panel.part.message,panel);
    }
    if(panel.options.show_editor == true ){
      let _tempEditor = panel.elements.editor;
      _tempEditor.remove();
      Views.Editor(panel.options,panel,panel.options.part.code)
    }
  }

  

}


