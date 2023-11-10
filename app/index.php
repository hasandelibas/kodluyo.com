<?php



function slugify($text) {
  $find    = array('Ç', 'Ş', 'Ğ', 'Ü', 'İ', 'Ö', 'ç', 'ş', 'ş', 'ğ', 'ü', 'ö', 'ı', '+', '#');
  $replace = array('c', 's', 'g', 'u', 'i', 'o', 'c', 's', 's', 'g', 'u', 'o', 'i', 'plus', 'sharp' );
  $text = strtolower(str_replace($find, $replace, $text));
  $text = preg_replace("@[^A-Za-z0-9\-_\.\+]@i", ' ', $text);
  $text = trim(preg_replace('/\s+/', ' ', $text));
  $text = str_replace(' ', '-', $text);
  $text = str_replace('.', '', $text);

  return $text;
}


?>  
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>kodluyo.com</title>




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

    .hljs-string{
      color:#ce9178
    }

    .hljs-built_in{
      color:#569cd6;
    }

    .hljs-keyword{
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
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet" crossorigin="anonymous" >
  
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
    .card:hover{
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


    body .xterm-dom-renderer-owner-1 .xterm-rows:not(.xterm-focus) .xterm-cursor.xterm-cursor-block{
      opacity:0;
    }
  </style>

  <script src="./views/pager.js"></script>
</head>

<body theme="dark">
  
  

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
        iframe.setAttribute("style",`opacity:none`)
        
        

      }else{
        iframe.contentWindow.postMessage(JSON.stringify(files), "*");
      }
      
      window.onmessage = function(event) {
        let response = JSON.parse(event.data)
        if(response.onData)
          program.onData(response.onData)
        if(response.onEnd){
          program.onEnd(response.onEnd)
        }
      };
      
      
      return program
    }


    //var source =  {"data":"- show_content = true\r\n- show_editor = true\r\n- show_terminal = true\r\n- language = \"python\"\r\n- title = \"🔢 Değişkenler int : Tam Sayılar\"\r\n- run = \"py main.py\"\r\n\r\n- parts/0/text\r\n# 🔢 **int** : Tam Sayılar \r\n``int`` yani tam sayıları tanımlamak için ``=`` operatörünü kullanırız.\r\n\r\n<code-view name=\"main.py\" language=\"python\">\r\nyıl = 2023\r\nprint(yıl)\r\n</code-view>\r\n<code-view name=\"Terminal\" language=\"bash\">\r\n2023\r\n</code-view>\r\n\r\n\r\n\r\n\r\n- parts/0/files/main.py/.block\r\n# yıl değişkenini 2023 yapar mısın?\r\nyıl = <<< ❓ >>>\r\nprint(yıl)\r\n---------------------\r\n- parts/0/tests/0/output\r\n2023\r\n\r\n---------------------\r\n\r\n- parts/1/text\r\n\r\n<code-view name=\"main.py\" language=\"python\">\r\nsaat = 24\r\nprint( 'bir günde', saat, 'saat vardır.' )\r\n</code-view>\r\n<code-view name=\"Terminal\" language=\"bash\">\r\nbir günde 24 saat vardır.\r\n</code-view>\r\n\r\n- parts/1/files/main.py/.block\r\n# bir günde kaç saat vardır?\r\n# saat değişkenini tanımlar mısın?\r\n<<< ❓ >>>\r\nprint( 'bir günde', saat, 'saat vardır.' )\r\n---------------------\r\n- parts/1/tests/0/output\r\nbir günde 24 saat vardır.\r\n\r\n---------------------\r\n\r\n\r\n\r\n- parts/2/text\r\n<code-view name=\"main.py\" language=\"python\">\r\nyıl = 1919\r\nprint( yıl, \"yılında Atatürk Samsun'a çıktı.\" )\r\n</code-view>\r\n<code-view name=\"Terminal\" language=\"shell\">\r\n1919 yılında Atatürk Samsun'a çıktı.\r\n</code-view>\r\n\r\n- parts/2/files/main.py/.block\r\n# yıl değişkenini tanımlar mısın?\r\n<<< ❓ >>>\r\nprint( yıl, \"yılında Atatürk Samsun'a çıktı.\" )\r\n---------------------\r\n- parts/2/tests/0/output\r\n1919 yılında Atatürk Samsun'a çıktı.\r\n\r\n---------------------\r\n\r\n\r\n\r\n- parts/3/text\r\n<code-view name=\"main.py\" language=\"python\">\r\nsayı = -5\r\nprint( sayı, \"sayısı ile 5 sayısını toplarsak 0 yapar.\" )\r\n</code-view>\r\n<code-view name=\"Terminal\" language=\"shell\">\r\n&minus;5 sayısı ile 5 sayısını toplarsak 0 yapar.\r\n</code-view>\r\n\r\n- parts/3/files/main.py/.block\r\n# sayı değişkenini tanımlar mısın?\r\n<<< ❓ >>>\r\nprint( sayı, \"sayısı ile 5 sayısını toplarsak 0 yapar.\" )\r\n---------------------\r\n- parts/3/tests/0/output\r\n&minus;5 sayısı ile 5 sayısını toplarsak 0 yapar.\r\n\r\n---------------------\r\n","next":"1011-değişkenler-float.md"};

    // var source =  {"data":"- show_content = true\r\n- show_editor = false\r\n- show_terminal = true\r\n- language = \"python\"\r\n- title = \"🌍 102 Merhaba Dünya! (Terminal)\"\r\n- run = \"py main.py\"\r\n\r\n- parts/0/text\r\n# 🌍 Merhaba Dünya! \r\nPython kodunu çalıştırmak için ``python`` adında derleyiciyi kullanırsın. Bu derleyiciyinin sisteminde kurulu olup olmadığını aşağıdaki komut ile öğrenebilirsin.\r\n```bash\r\npython --version\r\n```\r\n\r\n> Terminale ``python --version`` yaz.\r\n\r\n- parts/0/terminal\r\n> python --version\r\n- parts/1/message\r\n✅ Tebrikler,\r\nPython derleyicisi sisteminde kurulu. Python derleyicisini kullanarak Python kodlarını çalıştırabilirsin. Bunun için aşağıdaki komutu kullanabilirsin.\r\n```bash\r\npython\r\n```\r\n> Görev: Terminale ``python`` yaz.\r\n- parts/1/terminal\r\n> python\r\n- parts/2/message\r\n✅ Tebrikler, \r\nPython derleyicisini başarıyla çalıştırdın. Python derleyicisini kullanarak Python kodlarını çalıştırabilirsin. Bunun için aşağıdaki komutu kullanabilirsin.\r\n```python\r\nprint( \"Merhaba Dünya!\" )\r\n```\r\n> Görev: Terminale ``print( \"Merhaba Dünya!\" )`` yaz.\r\n- parts/2/terminal\r\nMerhaba Dünya!\r\n- parts/3/message\r\n✅ Tebrikler, ilk uygulamanı yazdın.\r\nŞimdi Python derleyicisini kapatmak için aşağıdaki komutu kullanabilirsin.\r\n```python\r\nexit()\r\n```\r\n> Görev: Terminale ``exit()`` yaz.\r\n- parts/3/terminal\r\nexit()\r\n-------------------","next":"1002-merhaba-dünya-uygulama.md"};
    //Pager(source)

    fetch("./@python101/1020-koleksiyonlar-kümeler.md").then(e=>e.text()).then(e=>{
      console.log(e)
      window.source = {data:e}
      Pager(source)
    })

    window.addEventListener('keydown',function(e){
      // F10
      if(e.keyCode == 121){
        e.preventDefault();
        //panel.nextPart()
      }
    })
  </script>
</body>

</html>