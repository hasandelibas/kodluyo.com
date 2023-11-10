<?php


$content = './python.md';
$content = file_get_contents($content); 

?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>kodluyo.com @<?= $file ?></title>

  <base href="https://kodluyo.com/app/">

  <!-- <base href="https://apps.asenax.com/kodluyo.com/app/"> -->
  <link rel="icon" href="./source/images/kodluyo.com.svg" type="image/svg+xml">

  <!--Directive-->
  <!-- <script src="https://cdn.jsdelivr.net/gh/HasanDelibas/dion@v1.0.2/dion.js"></script> -->

  <script src="./library/directive.js/dion.js"></script>
  <script src="./source/level-fixer.js"></script>

  <script src="./library/jquery.v3.2.1.min.js"></script>
  <script src="./library/socket-io/socket.io.js"></script>

  <!-- XTerm Lib -->
  <link rel="stylesheet" href="./library/xterm/css/xterm.css" />
  <script src="./library/xterm/lib/xterm.js"></script>
  <script src="./library/xterm/lib/xterm-addon-fit.js"></script>


  <!-- MD TO HTML LIBRARY -->
  <script src="./library/marked.min.js"></script>
  <!-- <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>   -->
  <!-- CODE TO HTML LIBRARY -->
  <script src="./library/highlight.min.js"></script>
  <link rel="stylesheet" href="./library/monokai-sublime.min.css">
  <style>
    .hljs-string {
      color: #ce9178
    }

    .hljs-built_in {
      color: #569cd6;
    }

    .hljs-keyword {
      color: #569cd6;
    }
  </style>
  <!-- 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"
    integrity="sha512-IaaKO80nPNs5j+VLxd42eK/7sYuXQmr+fyywCNA0e+C6gtQnuCXNtORe9xR4LqGPz5U9VpH+ff41wKs/ZmC3iA=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/monokai-sublime.min.css"
    integrity="sha512-ade8vHOXH67Cm9z/U2vBpckPD1Enhdxl3N05ChXyFx5xikfqggrK4RrEele+VWY/iaZyfk7Bhk6CyZvlh7+5JQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  -->



  <!-- READONLY MONACO EDITOR PLUGIN  -->
  <script src="./library/constrained-editor-plugin/constrainedEditorPlugin.js"></script>
  <!-- Require JS -->
  <script src="./library/require.js"></script>
  <!-- Code Diff Libs -->

  <link rel="stylesheet" href="./views/init.css">
  <link rel="stylesheet" href="./views/editor.css">
  <script src="./source/editor.js"></script>
  <script src="./source/terminal.js"></script>
  <script src="./source/script.js"></script>



  <!-- google font ubuntu mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet"
    crossorigin="anonymous">

  <link rel="stylesheet" href="./views/init.css">
  <link rel="stylesheet" href="./views/editor.css">

  <!-- DOM TO IMAGE -->
  <script src="./library/dom-to-image.js"></script>
  <!-- Asenac View -->
  <!--
  <script src="./library/asenac-view.js"></script>
  -->
  <script src="https://cdn.jsdelivr.net/gh/HasanDelibas/asenac-view@v1.0.1/asenac.js"></script>


  <style>
    .card {
      background-color: #0002;
      backdrop-filter: blur(2px);
      color: white;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      box-shadow: inset 0 0 0px 1px #FFF8;
      color: white;
      font-size: 24px;
      text-decoration: none;
      cursor: pointer;
      background-size: 100%;
      background-position: center;
      transition: .2s;
      display: inline-block;
    }

    .card:hover {
      background-color: #0004;
      background-size: 120%;
    }

    .grid-container {
      /**
      * User input values.
      */
      --grid-layout-gap: 10px;
      --grid-column-count: 4;
      --grid-item--min-width: 400px;

      /**
      * Calculated values.
      */
      --gap-count: calc(var(--grid-column-count) - 1);
      --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
      --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

      padding: .5em;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
      grid-gap: var(--grid-layout-gap);
    }


    body .xterm-dom-renderer-owner-1 .xterm-rows:not(.xterm-focus) .xterm-cursor.xterm-cursor-block {
      opacity: 0;
    }


    a.panel-title-button,div.panel-title-button{
      xdisplay:none;
    }
    .panel-title-button.green-button{
      display:inline-flex;
    }
    
    .xpanel-body{
      display: flex;
      flex-direction: column;
    }
    .xpanel-content {
      display:none;
    }

  </style>


</head>

<body theme="dark">



  <script src="./views/pager.js"></script>
  <script>
   
    function Program(files,options){
      let program = {
        response: "",
        onData  : function(e){console.log("PROGRAM::onData(" +JSON.stringify(e)+")")} ,
        onError : function(e){console.log("PROGRAM::onError("+JSON.stringify(e)+")")} ,
        onEnd   : function(e){console.log("PROGRAM::onEnd("  +JSON.stringify(e)+")")} ,
      }

      let iframe = Program.iframe
      if(!Program.iframe){
        iframe = Program.iframe = document.createElement("iframe")
        iframe.src="api-python-skulpt.html"
        iframe.onload = function(e){
          iframe.contentWindow.postMessage(JSON.stringify(files), "*");
        }
        document.body.append(iframe)
        iframe.style.display = "none";
        //iframe.setAttribute("style",`opacity:none`)
        
        

      }else{
        iframe.contentWindow.postMessage(JSON.stringify(files), "*");
      }
      
      window.onmessage = function(event) {
        let response = JSON.parse(event.data)
        if(response.onData !== undefined){
          program.onData(response.onData)
        }
        if(response.onEnd !== undefined){
          program.onEnd(response.onEnd)
        }
        if(response.onError !== undefined){
          program.onError(response.onError)
        }
      };
      
      
      return program
    }


    source = {"data": <?= json_encode($content) ?> }

    data = Dion.parse(source.data)
    LevelFixer.fix(data)
    Asenac("./views/editor.js", "./views/levels.js" ).then(e => {
      location.parameters = Object.fromEntries(decodeURIComponent(location.search).substring(1).split("&").map(e => e.split("=")))
      let page = location.parameters.page
      panel = Views.Create(data)
      let body = document.getElementById("panel-body")
      
      panel.elements.panelTitle.innerHTML="kodluyo.com ~ python"
      panel.elements.upButton.remove()
      document.body.appendChild(panel.elements.parent)
    });
    
  </script>


</body>

</html>