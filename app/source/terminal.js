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



/**
 * Ders dosyasindaki "language" degerini sadelestirir.
 * "py" ve "python" ayni motora, "js"/"javascript"/"node" ayni motora gider.
 */
HelloWorld.NormalizeLanguage = function (language) {
  language = String(language || "python").toLowerCase();
  if (language == "js" || language == "javascript" || language == "node" || language == "nodejs") return "javascript";
  if (language == "py" || language == "python" || language == "python3") return "python";
  return language;
}

/** Calistirilacak ana dosyanin adi. */
HelloWorld.EntryFile = function (language) {
  return HelloWorld.NormalizeLanguage(language) == "javascript" ? "main.js" : "main.py";
}

/**
 * Bir part'in dosyalarini, Monaco editoru hazir olmasa bile calistirilabilir
 * kaynak metnine cevirir. Boylece bir bolum gecildikten hemen sonra F8/F9'a
 * basildiginda ONCEKI bolumun kodu degil, o anki bolumun kodu kullanilir.
 */
HelloWorld.PartFiles = function (part) {
  let files = {};
  if (!part || !part.files) return files;
  for (let path in part.files) {
    let file = part.files[path];
    if (typeof file === "string") {
      files[path] = file;
    } else if (Array.isArray(file)) {
      files[path] = file.map(function (piece) {
        return piece.code == null ? "" : piece.code;
      }).join("");
    }
  }
  return files;
}

/**
 * Editordeki tum dosyalari Program()'a gonderilecek bicime cevirir.
 * Coklu dosya derslerinde (ornegin require / fs) butun dosyalar gonderilir.
 */
HelloWorld.SourceFiles = function (panel) {
  let files = {};
  if (panel.editors) {
    for (let path in panel.editors) {
      if (panel.editors[path]) files[path] = panel.editors[path].getValue();
    }
  }
  if (Object.keys(files).length == 0) {
    // Editorler henuz olusmadiysa part'in kendi kodu kullanilir (eski kod degil).
    files = HelloWorld.PartFiles(panel.options.part);
  }
  if (Object.keys(files).length == 0 && panel.editor) {
    files[HelloWorld.EntryFile(panel.options.language)] = panel.editor.getValue();
  }
  return files;
}

/** Test/calistirma icin ust sinir (ms). Sonsuz donguye giren kodu keser. */
HelloWorld.RunTimeout = 8000;

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
    let program = Program(HelloWorld.SourceFiles(panel), {
      language: panel.options.language
    })
    panel.program = program

    let settled = false
    let timeout = { value: null }
    function done() {
      settled = true
      clearTimeout(timeout.value)
      loadingCircle?.classList.remove("loading-animation")
    }

    timeout.value = setTimeout(function () {
      if (settled) return
      settled = true
      // Kilitlenen calistiriciyi at; bir sonraki calistirma temiz iframe acar.
      try { program.abort() } catch (e) { }
      panel.terminal.write(FAIL + "⏱️ Program " + (HelloWorld.RunTimeout / 1000) + " saniyede bitmedi." + ENDC + "\r\n")
      panel.terminal.write("   Sonsuz döngü olabilir: döngü sayacının her turda değiştiğinden ve koşulun biteceğinden emin ol.\r\n")
      loadingCircle?.classList.remove("loading-animation")
    }, HelloWorld.RunTimeout)

    program.onData = function (data) {
      if (settled) return
      panel.terminal.write(data);
    }
    program.onError = function (data) {
      if (settled) return
      done()
      console.log(data.toString())
      panel.terminal.write(FAIL + data.toString() + ENDC);
      let line = data.match(/on line (\d+)/)
      if (line && panel.editor) {
        panel.editor.error(parseInt(line[1]), data)
      }
    }
    program.onEnd = function () {
      if (settled) return
      done()
    }
  }


  panel.test = function () {

    // Test zaten calisiyorsa yenisini baslatma: F9'a art arda basmak
    // bolumun iki kez atlanmasina yol acmasin.
    if (panel.testing) return

    let successCount = 0;
    let part = panel.options.part;
    // Testi olmayan bir bolumde F9'a basmak hata vermesin.
    if (!part || !part.tests || part.tests.length == 0) return

    panel.testing = true
    panel.terminal.clear()
    let stopped = false;

    function stop() {
      stopped = true;
      panel.testing = false;
    }

    function escapeHtml(text) {
      return String(text)
        .split("&").join("&amp;")
        .split("<").join("&lt;")
        .split(">").join("&gt;");
    }

    // Beklenen cikti ile ogrencinin ciktisi arasindaki ILK farkli satiri bulur.
    // Ogrenci nerede yanlis yaptigini (buyuk/kucuk harf, bosluk, noktalama)
    // boylece gorebilir.
    function firstDifference(expected, actual) {
      let expectedLines = String(expected).replace(/\n+$/, "").split("\n");
      let actualLines = String(actual).replace(/\n+$/, "").split("\n");
      let count = Math.max(expectedLines.length, actualLines.length);
      for (let index = 0; index < count; index++) {
        if (expectedLines[index] !== actualLines[index]) {
          return {
            line: index + 1,
            expected: expectedLines[index],
            actual: actualLines[index]
          };
        }
      }
      return null;
    }

    function failTest(i, hint) {
      panel.terminal.write(FAIL + (i + 1) + ". Çalışmadı  " + ENDC + " 😞\r\n");
      if (hint) panel.terminal.write("   ↳ " + hint + "\r\n");
    }

    function failTestDifference(i, expected, actual) {
      let diff = firstDifference(expected, actual);
      if (!diff) {
        failTest(i);
        return;
      }
      failTest(i);
      let expectedText = diff.expected === undefined ? "(satır yok)" : '"' + diff.expected + '"';
      let actualText = diff.actual === undefined ? "(satır yok)" : '"' + diff.actual + '"';
      if (diff.expected !== undefined && diff.actual !== undefined) {
        if (diff.expected.trim().toLowerCase() === diff.actual.trim().toLowerCase()) {
          // Yalnizca buyuk/kucuk harf farki: en sik yapilan hata.
          panel.terminal.write("   ↳ " + diff.line + ". satırda BÜYÜK/küçük harf farkı var.\r\n");
        } else {
          panel.terminal.write("   ↳ " + diff.line + ". satır farklı.\r\n");
        }
      }
      panel.terminal.write("     beklenen: " + escapeHtml(expectedText) + "\r\n");
      panel.terminal.write("     aldığın : " + escapeHtml(actualText) + "\r\n");
    }

    // `require` kurali: cevabin icinde gecmesi ZORUNLU olan metin(ler).
    // Boylece ciktisi ayni gorunen ama istenen yontemi kullanmayan cevaplar gecmez.
    function missingRequirements(test, answerText) {
      let required = test.require;
      if (required === undefined || required === null) return [];
      let list = Array.isArray(required) ? required : [required];
      return list
        .map(function (item) { return String(item) })
        .filter(function (item) { return item.length > 0 })
        .filter(function (item) { return answerText.indexOf(item) === -1 });
    }

    function requirementHint(test) {
      let required = test.require;
      let list = Array.isArray(required) ? required : [required];
      list = list.filter(function (item) { return String(item).length > 0 });
      return "Cevabında şunu kullanmalısın: " + list.map(function (item) { return "`" + item + "`" }).join(" ve ");
    }

    function testSingle(i) {
      if (stopped) return;
      if (i >= part.tests.length) { stop(); return; }
      let test = part.tests[i];
      //-- Configure Files --//
      let files = {}
      // Ogencin gercekten yazdigi kisim (require kurali bunu denetler).
      let answers = []
      let filePaths = [...Object.keys(panel.editors), ...Object.keys(test.files)].distinct();
      let fallbackFiles = HelloWorld.PartFiles(part);
      for (let path of filePaths) {
        let editor = panel.editors[path]
        if (test.files && test.files[path]) {

          if (test.files[path][".precode"]) { // Pre Code 
            let studentCode = editor ? editor.getValue().substring(part.files[path][0].code.length) : "";
            files[path] = test.files[path][".precode"] + studentCode
            answers.push(studentCode)
          } else if (test.files[path][".block"]) { // Block Code
            let model = editor.getModel()
            let labels = model.getCurrentEditableRanges()
            let editableBlocks = {}
            for (let label in labels) {
              editableBlocks[label] = model.getValueInRange(labels[label].range)
            }
            files[path] = test.files[path][".block"].map((block, blockIndex) => {
              if (block.type == "editable") {
                return editableBlocks["label_" + block.label]
              } else {
                return block.code
              }
            }).join("")
            for (let label in editableBlocks) answers.push(editableBlocks[label])
          } else {
            files[path] = test.files[path]
          }
        } else {
          // Use Default Code (editor hazir degilse part'in kendi kodu)
          if (editor) {
            files[path] = editor.getValue();
            // `require` kurali yalnizca ogrencinin yazdigi kisimda aranmali:
            // sabit (readonly) metin kurali kendiliginden saglamasin.
            let editableRanges = null
            try {
              let model = editor.getModel()
              editableRanges = model.getCurrentEditableRanges ? model.getCurrentEditableRanges() : null
            } catch (error) { editableRanges = null }
            if (editableRanges && Object.keys(editableRanges).length > 0) {
              for (let label in editableRanges) {
                answers.push(editor.getModel().getValueInRange(editableRanges[label].range))
              }
            } else {
              answers.push(files[path])
            }
          } else if (fallbackFiles[path] !== undefined) {
            files[path] = fallbackFiles[path];
            answers.push(files[path])
          }
        }
      }

      let answerText = answers.join("\n")
      let missing = missingRequirements(test, answerText)
      if (missing.length > 0) {
        failTest(i, requirementHint(test))
        testSingle(i + 1);
        return
      }

      let command = {
        execute: test.execute,
        files: files,
        output: test.output.split('&minus;').join('-'),
      }

      console.log(command)

      let program = Program(command.files, {
        language: panel.options.language
      })

      let settled = false
      let timer = setTimeout(function () {
        if (settled || stopped) return
        settled = true
        // Sonsuz dongu: kilitlenen iframe'i at ki ders donmasin.
        try { program.abort() } catch (e) { }
        panel.terminal.write(FAIL + (i + 1) + ". Çalışmadı  " + ENDC + " 😞\r\n");
        panel.terminal.write("   ↳ Program " + (HelloWorld.RunTimeout / 1000) + " saniyede bitmedi; sonsuz döngü olabilir.\r\n");
        panel.terminal.write("   Döngü sayacının her turda değiştiğinden emin ol.\r\n");
        stop()
      }, HelloWorld.RunTimeout)

      program.onEnd = function (response) {
        if (settled) return
        settled = true
        clearTimeout(timer)
        if (stopped) return
        console.log("%cOutput: ", "color:blue");
        console.log(command.output);
        console.log("%cResponse: ", "color:blue");
        console.log(response);
        if (command.output == response) {
          panel.terminal.write(OKGREEN + (i + 1) + ". Tamamlandı " + ENDC + " 😃\r\n");
          successCount++;
          if (successCount == part.tests.length) {
            panel.terminal.write("🎉  " + OKGREEN + "TEBRİKLER" + ENDC + "   🚀\r\n");
            HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.success, 1, 0, 1);
            stop()
            panel.nextPart();
            return
          }
        } else {
          failTestDifference(i, command.output, response)
        }
        testSingle(i + 1);

      }

      program.onError = function (message) {
        if (settled) return
        settled = true
        clearTimeout(timer)
        if (stopped) return
        failTest(i, message)
        testSingle(i + 1)
      }

    }
    testSingle(0);
  }



  panel.nextPart = function () {
    // Ayni bolum icin iki kez ilerlemeyi engelle.
    if (panel.completedPart === panel.options.partIndex) return;
    panel.completedPart = panel.options.partIndex;

    if (panel.elements.content) {
      panel.elements.content.querySelectorAll("blockquote").forEach((x) => x.classList.add("success"))
    }

    if (panel.options.partIndex >= panel.options.parts.length - 1) {
      panel.terminal.write("🎉  " + OKGREEN + "GÖREV TAMAMLANDI" + ENDC + "   🚀\r\n");
      Views.NextLevel(panel)
      panel.options.partIndex++;
      return;
    }
    panel.options.partIndex = panel.options.partIndex + 1;
    if (panel.options.part.text && panel.elements.content) {
      panel.elements.content.innerHTML = "";
      Views.ContentPart(panel.part.text, panel);
      panel.elements.content.scrollTop = 0;
    }
    if (panel.part.message && panel.elements.content) {
      Views.ContentPart(panel.part.message, panel);
    }
    if (panel.options.show_editor == true) {
      // Onceki bolumun editorlerini kapat ki eski kod ne gorünsün ne de
      // arka planda gereksiz yer kaplasin.
      for (let path in panel.editors) {
        try { panel.editors[path].dispose() } catch (e) { }
      }
      panel.editors = {}
      panel.editor = null
      panel.model = null
      panel.staticer = null
      let _tempEditor = panel.elements.editor;
      if (_tempEditor) _tempEditor.remove();
      Views.Editor(panel.options, panel, panel.options.part.code)
    }
  }

  

}


