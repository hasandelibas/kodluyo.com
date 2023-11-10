var HelloWorld = HelloWorld || {};

HelloWorld.Languages = {
  "c": {
    ext: "c",
    files: ["main.c"],
    monacoCode: "c",
    title: "C"
  },
  "cpp": {
    ext: "cpp",
    files: ["main.cpp"],
    monacoCode: "cpp",
    title: "C++"
  },
  "cs": {
    ext: "cs",
    files: ["Program.cs"],
    monacoCode: "csharp",
    title: "C#"
  },
  "java": {
    ext: "java",
    files: ["Main.java"],
    monacoCode: "java",
    title: "Java"
  },
  "py": {
    ext: "py",
    files: ["main.py"],
    monacoCode: "python",
    title: "Python"
  },
  "js": {
    ext: "js",
    files: ["main.js"],
    monacoCode: "javascript",
    title: "JavaScript"
  },
  "php": {
    ext: "php",
    files: ["index.php"],
    monacoCode: "php",
    title: "PHP"
  },
  "sh": {
    ext: "sh",
    files: ["main.sh"],
    monacoCode: "shell",
    title: "Shell"
  },
  "html": {
    ext: "html",
    files: ["index.html"],
    monacoCode: "html",
    title: "Html"
  },
}
HelloWorld.Languages.python = HelloWorld.Languages.py;
HelloWorld.Languages.csharp = HelloWorld.Languages.cs;
HelloWorld.Languages.javascript = HelloWorld.Languages.js;

HelloWorld.Languages.find = function (lang) {
  if (HelloWorld.Languages[lang]) return HelloWorld.Languages[lang];
  return {
    ext: "txt",
    monacoCode: "plaintext",
    title: "Text"
  }
}

// require.config({ paths: { 'vs': "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs" } })

require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }});



/*
/// Background Theme
const theme = {
  base: 'vs', 
  inherit: true,
  colors: {
    "editor.background": '#394555'
  }
}
monaco.editor.defineTheme('myTheme', theme);
*/

HelloWorld.Editor = function (panel, element, options) {

  return new Promise(function (resolve, reject) {

    HelloWorld.WriteAnimation(panel);

    let code = options.code;
    let fileName = options.fileName;
    let language = options.language;
    let theme = options.theme;

    if (typeof (code) == "string") {
      code = [{
        type: "editable",
        code: code,
        label: 0
      }]
    }



    require(['vs/editor/editor.main'], function () {


      let editor = monaco.editor.create(element, {
        value: code.map(c => c.code).join(""),
        language: HelloWorld.Languages.find(language).monacoCode,
        fontSize: "18px",
        fontFamily: "var(--monospace-font-family)",
        fontLigatures: true,

        // Show All Spaces
        //renderWhitespace: 'all',
        theme: "vs-" + theme,
        automaticLayout: true,
        'semanticHighlighting.enabled': true,

        // Hide LineNumbers
        lineNumbers: 'off',
        glyphMargin: false,
        folding: false,
        // lineDecorationsWidth: 0,
        // lineNumbersMinChars: 0,


        // Disable MiniMap On Right Side
        minimap: {
          enabled: false
        },
        // Line Hightlight
        renderLineHighlight: "none",
        // Hide Scrollbar
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
        scrollbar: {
          vertical: 'hidden'
        },
        overviewRulerBorder: false,
        // Hide auto complete
        quickSuggestions: false,
      });

      editor.getModel().updateOptions({
        tabSize: 2
      })

      //-- readOnly Statement --//
      if (!(code.length == 1 && code[0].type == "editable")) {
        const model = editor.getModel();
        panel.model = model;
        const constrainedInstance = constrainedEditor(monaco);
        constrainedInstance.initializeIn(editor);

        panel.staticer = constrainedInstance
        let currX = 0;
        let currY = 0;
        let nextX = 0;
        let nextY = 0;
        let currCode = ""
        let staticRanges = []
        let firstEditableRange = null;
        console.log(code)
        if (typeof (code) != "string") {
          for (let i = 0; i < code.length; i++) {
            nextY = (currCode + code[i].code).split("\n").length;
            nextX = (currCode + code[i].code).split("\n").pop().length;
            if (code[i].type == "editable") {
              staticRanges.push({
                range: [currY, currX + 1, nextY, nextX + 1],
                label: 'label_' + code[i].label,
                allowMultiline: true
              });
              if (firstEditableRange == null) {
                //firstEditableRange = [nextY,nextX+1,nextY,nextX+1];
              }
              if (code[i].code.indexOf("❓") > -1 && firstEditableRange == null) {
                firstEditableRange = [currY, currX + 1, nextY, nextX + 1];
              }
            }
            currCode += code[i].code;
            currY = currCode.split("\n").length
            currX = currCode.split("\n").pop().length
          }
        }
        //-- static ranges available --//
        if (staticRanges.length > 0) {
          element.classList.add("editor-with-block");
          if (!(code.length == 1 && code[0].type == "editable")) {
            constrainedInstance.addRestrictionsTo(model, staticRanges);
            panel.model.toggleHighlightOfEditableAreas();
          }
        }
        if (firstEditableRange != null) {
          editor.focus()
          editor.setSelection(new monaco.Range(...firstEditableRange))
        }
      }


      // Line counts
      /*
      let precodeY = preCode.split("\n").length;
      let precodeX = preCode.split("\n").pop().length;
      let aftercodeY = (preCode+code).split("\n").length;
      let aftercodeX = (preCode+code).split("\n").pop().length;    
      console.log(precodeY,precodeX,aftercodeY,aftercodeX);
      constrainedInstance.addRestrictionsTo(model, [{
        // range : [ startLine, startColumn, endLine, endColumn ]
        //range: [precodeY, precodeX+1, precodeY+codeLineCount-1, codeLineLastColumnLength+1], // Range of Util Variable name
        range: [precodeY, precodeX+1, aftercodeY, aftercodeX+1], 
        label: 'editableCode',
        allowMultiline: true,
        //validate: function (currentlyTypedValue, newRange, info) {
        //  console.log(currentlyTypedValue, newRange, info);
        //  const minOneChar = /^.+$/;
        //  return minOneChar.test(currentlyTypedValue);
        //}
      }]);
      

      editor.deltaDecorations([], [{
        range: new monaco.Range(precodeY, precodeX+1, aftercodeY, aftercodeX+1),
        options: {
          //beforeContentClassName:'editor-readonly',
          //afterContentClassName:'editor-readonly',
          //inlineClassName:'editor-readonly',
          //isWholeLine: false,
        }
      }]);
      
      */

      /*
      editor.deltaDecorations([],[
        {
          range: new monaco.Range(1, 1, precodeY, precodeX),
          options: { inlineClassName: 'editor-readonly' }
        },
        {
          range: new monaco.Range(aftercodeY,aftercodeX+2,Infinity, Infinity),
          options: { inlineClassName: 'editor-readonly' }
        }
      ])
      */

      editor.error = function (line,message="") {

        /*


        monaco.editor.setModelMarkers(panel.editor.getModel(), 'jshint', [{
          startLineNumber:1,
          startColumn: 1,
          endLineNumber: 1,
          endColumn: 100,
          message: 'Bla bla',
          severity: monaco.MarkerSeverity.Error
        }])


        */

        var markers = [{
          severity: monaco.MarkerSeverity.Error,
          message: message ? "❌" + message: message,
          startLineNumber: line,
          startColumn: 1,
          endLineNumber: line,
          endColumn: editor.getModel().getLineLength(line) + 1
        }];
        // monaco.editor.setModelMarkers(editor.getModel(), "error", markers);
        


        editor.errorDecoration = editor.errorDecoration || [];
        editor.errorDecoration = editor.deltaDecorations(editor.errorDecoration, [{
          range: new monaco.Range(line, 1, line, 1),
          options: {
            isWholeLine: true,
				    className: 'monaco-editor-background-error',
            glyphMarginClassName: 'monaco-editor-background-error',
            glyphMarginHoverMessage: message ?  {value: message} : null,
          }
        }]);

        editor.revealLine(line);

        setTimeout(function () {
          editor.errorDecoration = editor.deltaDecorations(editor.errorDecoration, []);
          delete markers[0];
        }, 3000);

      }


      editor.parameters = {
        fileName: fileName,
        language: language,
      }

      panel.save = function () {
        return $.post("/save", {
          code: panel.editor.getValue(),
          language: panel.editor.parameters.language,
          fileName: panel.editor.parameters.fileName,
        })
      }

      panel.saveRun = function () {
        return panel.run()
        panel.save().then(function () {
          panel.run();
        });
      }

      editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, function (e) {
        panel.save()
      });

      // F8 Run
      editor.addCommand(monaco.KeyCode.F8, function (e) {
        panel.saveRun()
      });
      // F9 Test
      editor.addCommand(monaco.KeyCode.F9, function (e) {
        panel.test()
      });


      editor.addAction({
        id: 'HELLO_WORLD_SCREENSHOT',
        label: 'Ekran Fotoğrafı Çek',
        run: function (e) {
          HelloWorld.ToImage(panel.elements.parent)
        }
      });
      editor.addAction({
        id: 'HELLO_WORLD_WRITE_ANIMATION',
        label: 'Yazma Animasyonu',
        run: function (e) {
          panel.animation()
        }
      })


      monaco.editor.remeasureFonts()

      editor.getModel().getOptions().insertSpaces = true;

      resolve(editor);

    })
  });
}










// #region Animation
HelloWorld.WriteAnimation = function (panel) {

  panel.animation = function (speed = 1.5, timeout = 0) {
    let editor = panel.editor;
    let code = editor.getValue().split("\r\n").join("\n");
    editor.setValue("");

    editor.updateOptions({
      autoClosingBrackets: false,
      "autoIndent": 'none',
      "autoClosingQuotes": 'none'
    });

    function WriteLetter(letter) {
      editor.trigger('keyboard', 'type', {
        text: letter
      });
    }
    let letterIndex = 0;

    function NextLetter() {
      if (letterIndex < code.length) {
        WriteLetter(code[letterIndex]);

        letterIndex++;
        let delay = Math.random() * 120 + 60;

        if (letterIndex == code.length) {
          return
        }

        // If this is a letter
        if (code[letterIndex].match(/[a-zA-Z]/)) {
          delay = Math.random() * 60 + 60;
        }



        // If is letter or white space
        if (code[letterIndex] == "\n") {
          delay = Math.random() * 180 + 60;
          HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.keyDown);
        } else if (code[letterIndex].trim() != "") {
          HelloWorld.KeyboardSound.PlayKeyboardSound();
        }
        delay = delay * speed;
        setTimeout(NextLetter, delay);

      } else {
        editor.updateOptions({
          autoClosingBrackets: true,
          "autoIndent": 'auto',
          "autoClosingQuotes": null,
        });
      }
    }
    setTimeout(NextLetter, timeout);
  }


}


function LoadKeyboardSound(){

  HelloWorld.KeyboardSound = {}
  HelloWorld.KeyboardSound.context = new AudioContext();
  HelloWorld.KeyboardSound.loadSample = function (url) {
    return fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => HelloWorld.KeyboardSound.context.decodeAudioData(buffer));
  }

  HelloWorld.KeyboardSound.keySamples = [];

  [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    HelloWorld.KeyboardSound.loadSample(`./source/sounds/mechanical/keyboard-${i}.mp3`).then(e => {
      HelloWorld.KeyboardSound.keySamples[i] = e;
    });
  })
  HelloWorld.KeyboardSound.loadSample(`./source/sounds/keyboard-enter.mp3`).then(e => {
    HelloWorld.KeyboardSound.keyEnter = e;
  });

  HelloWorld.KeyboardSound.loadSample(`./source/sounds/keyboard-5.mp3`).then(e => {
    HelloWorld.KeyboardSound.keyLetter = e;
  });

  HelloWorld.KeyboardSound.loadSample(`./source/sounds/keyboard-5-fast.mp3`).then(e => {
    HelloWorld.KeyboardSound.keyFast = e;
  });

  HelloWorld.KeyboardSound.loadSample(`./source/sounds/keyboard-down.mp3`).then(e => {
    HelloWorld.KeyboardSound.keyDown = e;
  });

  HelloWorld.KeyboardSound.loadSample(`./source/sounds/keyboard-up.mp3`).then(e => {
    HelloWorld.KeyboardSound.keyUp = e;
  });

  HelloWorld.KeyboardSound.loadSample(`./source/sounds/success-1.mp3`).then(e => {
    //HelloWorld.KeyboardSound.success =e;
  });

  HelloWorld.KeyboardSound.loadSample(`./source/sounds/win.mp4`).then(e => {
    HelloWorld.KeyboardSound.success = e;
  });

  HelloWorld.KeyboardSound.PlayKeyboardSound = function (sample, rate = null, detune = null, volume = null) {
    if (sample == undefined) {
      //sample = HelloWorld.KeyboardSound.keySamples[2];
      sample = HelloWorld.KeyboardSound.keyLetter;
    }
    const source = HelloWorld.KeyboardSound.context.createBufferSource();
    let rates = [0, 0.122462048309373, 0.2599210498948732, 0.4983070768766815, 0.6817928305074292]
    let _rate = 1
    // _rate = 0.8 + rates[Math.floor(Math.random() * rates.length)] / 6;
    // _rate = 1.45 + Math.random() * 0.1;
    _rate = 0.95 + Math.random() * 0.1;

    let _detune = 0 + Math.random() * 0.1;

    let _volume = 0.5 + Math.random() * 0.1;

    if (rate) _rate = rate;
    if (detune) _detune = detune;
    if (volume) _volume = volume;

    source.buffer = sample;
    source.playbackRate.value = _rate // 0.9 + Math.random() * 0.05;
    source.detune = _detune
    // Volume
    source.gainNode = HelloWorld.KeyboardSound.context.createGain();
    source.gainNode.gain.value = _volume;
    source.connect(source.gainNode);

    source.gainNode.connect(HelloWorld.KeyboardSound.context.destination);
    source.start(0);
  }


  HelloWorld.KeyboardSound.PlayRandomKeyboardSound = function () {
    let randomTime = Math.random() * 200 + 100;
    HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.keyDown);
    setTimeout(function () {
      HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.keyUp);
    }, randomTime);
  }

  document.removeEventListener("keydown",LoadKeyboardSound)
  document.removeEventListener("pointerdown",LoadKeyboardSound)
}

document.addEventListener("keydown",LoadKeyboardSound)
document.addEventListener("pointerdown",LoadKeyboardSound)

  // HelloWorld.KeyboardSounds = ["keyboard-1.mp3"].map(e=> new Audio(`./source/sounds/${e}`) ); 



  /*

  $(window).on("keydown",function(){
    HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.keyDown);
  })
  $(window).on("keyup",function(){
    HelloWorld.KeyboardSound.PlayKeyboardSound(HelloWorld.KeyboardSound.keyUp);
  })

  */








// require.config({ paths: { vs: "/vs" })

require(['vs/editor/editor.main'], function () {



  function detectPythonFunction(text) {
    let lines = text.split("\n");
    let functions = [];
    lines.forEach((line) => {
      let match = line.match(/def\s+([a-zA-Z\ı\İ\ş\Ş\ç\Ç\ü\Ü\ö\Ö\ğ\Ğ_][a-zA-Z\ı\İ\ş\Ş\ç\Ç\ü\Ü\ö\Ö\ğ\Ğ0-9_]*)\s*\(/);
      if (match) {
        functions.push(match[1]);
      }
    });
    return functions;
  }

  function detectPythonFunctionParameters(text, index) {
    let lines = text.split("\n");
    let parameters = [];
    let functionFound = false;

    for ( let i = index; i >= 0; i-- ) {
      let line = lines[i];
      let tabIndent = line.match(/^\t*/)[0].length;
      let spaceIndent = line.match(/^ */)[0].length;
      let indent = tabIndent + spaceIndent/2;
      console.log(tabIndent,spaceIndent,indent)

      let match =  line.match(/def\s+([a-zA-Z\ı\İ\ş\Ş\ç\Ç\ü\Ü\ö\Ö\ğ\Ğ_][a-zA-Z\ı\İ\ş\Ş\ç\Ç\ü\Ü\ö\Ö\ğ\Ğ0-9_]*)\s*\((.*)\)/);
      if (match) {
        parameters.push(...match[2].split(",").map(e=>e.trim().split("*").join("").split("=")[0].trim()));
        break
      }
      // for detect
      match = line.match(/for\s+([a-zA-Z\ı\İ\ş\Ş\ç\Ç\ü\Ü\ö\Ö\ğ\Ğ_][a-zA-Z\ı\İ\ş\Ş\ç\Ç\ü\Ü\ö\Ö\ğ\Ğ0-9_]*)\s+in\s+(.*)\s*:/);
      if (match) {
        parameters.push(...match[1].split(",").map(e=>e.trim().split("*").join("").split("=")[0].trim()));
      }
      if( indent==0 && line.trim()!="" ) break;
      

    }
    console.log(parameters);
    parameters = [...new Set(parameters)];
    return parameters;
  }

  function detectPythonVariables(text) {
    let lines = text.split("\n");
    let variables = [];
    lines.forEach((line) => {
      let match = line.match(/([a-zA-Z\ı\İ\ş\Ş\ç\Ç\ü\Ü\ö\Ö\ğ\Ğ_][a-zA-Z\ı\İ\ş\Ş\ç\Ç\ü\Ü\ö\Ö\ğ\Ğ0-9_]*)\s*=/);
      if (match) {
        variables.push(match[1]);
      }
    });
    // unique variables
    variables = [...new Set(variables)];
    return variables;
  }




  function createDependencyProposals(range, text) {

    let staticFunctions = ["print", "input"]

    let functions = detectPythonFunction(text)
    let variables = detectPythonVariables(text)
    let parameters = detectPythonFunctionParameters(text,range.startLineNumber-1)

    functions = functions.map(e => ({
      label: e,
      insertText: e , // +"()",
      range: range,
      kind: monaco.languages.CompletionItemKind.Function,
      sortText : "3",
      //detail:"Standart giriş çıkış fonksiyonları",
      //unit:"byte"
    }))

    variables = variables.map(e => ({
      label: e,
      insertText: e,
      range: range,
      kind: monaco.languages.CompletionItemKind.Variable,
      sortText : "2",
      //detail:"Standart giriş çıkış fonksiyonları",
      //unit:"byte"
    }))


    parameters = parameters.map(e => ({
      label: e,
      insertText: e,
      range: range,
      kind: monaco.languages.CompletionItemKind.Variable,
      sortText : "1",
      //detail:"Standart giriş çıkış fonksiyonları",
      //unit:"byte"
    }))


    let operators = [
      {
        label:"if",
        insertText : "if [şart] :\n\t",
        kind:monaco.languages.CompletionItemKind.Operator
      }
    ]

    operators = []


    let standartFunction = ["range","print","input","list","int","float","set","dict"]
    standartFunction = standartFunction.map(e=>({
      label:e,
      insertText:e,
      range:range,
      kind: monaco.languages.CompletionItemKind.Function,
      documentaion:"Standart fonksiyonlar",
      sortText:"8"
    }))


    let keywords = ["if","while","pass","break","continue","for","def","return"] //,"import","from","as","class","try","except","finally","with","assert","global","nonlocal","lambda","del","yield","in","is","not","and","or","as","True","False","None"]
    keywords = keywords.map(e=>({
      label:e,
      insertText:e,
      range:range,
      kind: monaco.languages.CompletionItemKind.Keyword,
      documentaion:"Standart anahtar kelimeler",
      sortText:"9"
      //detail:"Standart giriş çıkış fonksiyonları",
      //unit:"byte"
    }))




    return [...functions, ...variables, ...parameters,...operators,...keywords,...standartFunction]

  }

  monaco.languages.registerCompletionItemProvider('python', {
    provideCompletionItems: function (model, position) {

      var word = model.getWordUntilPosition(position);
      var range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
      };
      return {
        suggestions: createDependencyProposals(range, model.getValue())
      };
    }
  });
});