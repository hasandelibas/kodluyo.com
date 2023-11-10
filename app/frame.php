<?php


$file = $_GET['file'];
$content = __DIR__ . "/@" . $file . '/index.html';
$content = file_get_contents($content); 

?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>kodluyo.com @<?= $file ?></title>


  <!-- <base href="https://apps.asenax.com/kodluyo.com/app/"> -->
  <link rel="icon" href="../source/images/kodluyo.com.svg" type="image/svg+xml">

  <!--Directive-->
  <!-- <script src="https://cdn.jsdelivr.net/gh/HasanDelibas/dion@v1.0.2/dion.js"></script> -->

  <script src="../library/directive.js/dion.js"></script>
  <script src="../source/level-fixer.js"></script>

  <script src="../library/jquery.v3.2.1.min.js"></script>
  <script src="../library/socket-io/socket.io.js"></script>

  <!-- XTerm Lib -->
  <link rel="stylesheet" href="../library/xterm/css/xterm.css" />
  <script src="../library/xterm/lib/xterm.js"></script>
  <script src="../library/xterm/lib/xterm-addon-fit.js"></script>


  <!-- MD TO HTML LIBRARY -->
  <script src="../library/marked.min.js"></script>
  <!-- <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>   -->
  <!-- CODE TO HTML LIBRARY -->
  <script src="../library/highlight.min.js"></script>
  <link rel="stylesheet" href="../library/monokai-sublime.min.css">
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
  <script src="../library/constrained-editor-plugin/constrainedEditorPlugin.js"></script>
  <!-- Require JS -->
  <script src="../library/require.js"></script>
  <!-- Code Diff Libs -->

  <link rel="stylesheet" href="../views/init.css">
  <link rel="stylesheet" href="../views/editor.css">
  <script src="../source/editor.js"></script>
  <script src="../source/terminal.js"></script>
  <script src="../source/script.js"></script>



  <!-- google font ubuntu mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet"
    crossorigin="anonymous">

  <link rel="stylesheet" href="../views/init.css">
  <link rel="stylesheet" href="../views/editor.css">

  <!-- DOM TO IMAGE -->
  <script src="../library/dom-to-image.js"></script>
  <!-- Asenac View -->
  <!--
  <script src="../library/asenac-view.js"></script>
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
  </style>


</head>

<body theme="dark">


  <div class="panel panel-window panel-open-editor panel-open-terminal">
    <div class="panel-title"><img class="panel-title-icon" src="../source/images/kodluyo.com.svg" style="height:1.6em;width:auto;border-radius:4px;">
      <div class="panel-title-button" href="https://apps.asenax.com/kodluyo.com/app/"><svg
          style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
        </svg></div><a class="panel-title-button" href="https://apps.asenax.com/kodluyo.com/app/"><svg
          style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z">
          </path>
        </svg></a>
      <div class="panel-title-button"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z">
          </path>
        </svg></div>
      <div class="panel-title-button"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z">
          </path>
        </svg></div><a class="panel-title-button" href="https://apps.asenax.com/kodluyo.com/"><svg
          style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"></path>
        </svg></a>
      <div class="panel-title-move" style="gap:1em">
        <div> @python101 </div>
      </div>
      <div class="panel-title-button red-button"><svg style="width:20px;height:20px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
          </path>
        </svg></div>
      <div class="panel-title-button yellow-button"><svg style="width:20px;height:20px" viewBox="0 0 24 24">
          <path fill="black" d="M19,13H5V11H19V13Z"></path>
        </svg></div>
      <div class="panel-title-button green-button" onclick="maximizeWindow()"><svg style="width:20px;height:20px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z">
          </path>
        </svg></div>
    </div>
    <div class="panel-body" show-content="true" show-editor="true" show-terminal="true" show-preview="undefined" style="opacity: 1; transition: opacity 0.5s ease 0s;">
        <?= isset($content) ? $content : "" ?>
    </div>
  </div>

  <script>
    (function(){
      s = (sel,el=document)=>Array.from(el.querySelectorAll(sel))
      s("a.star").map(e=>{
        if(e.href){
          let pathname = "success:/"+decodeURIComponent( (new URL(e.href)).pathname )
          if(!pathname.endsWith("/")) pathname += "/"
          //console.log(pathname)
          if(localStorage[pathname]==="true"){
            e.classList.add("success")
          }
        }
      })
    })()
  </script>


</body>

</html>