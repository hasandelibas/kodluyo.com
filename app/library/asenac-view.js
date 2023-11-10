function Asena(html){
  var mime = html.indexOf("xmlns=") == -1 ? "text/html" : "image/svg+xml";   
  var parsed= Asena.parser.parseFromString(html, mime);
  return mime=="text/html" ? parsed.body.firstChild : parsed.firstChild;
}
Asena.parser = new DOMParser();

function Asenac(url) {

  /** @param {string} code */
  function Convert(code){

    let out = "";
    // let out = "function(){\n";
    // out += "  let base   = {};\n";
    // out += "  let parent = null;\n";
    code = code.split('\n').map(e=> "  " + e );
  
    function Space(count){
      let out = "";
      for(let i=0;i<count;i++){ out += "  "; }
      return out;
    }
  
    // Convert Tree Block python like
    function ToBlock(code){
      let stack = [];
      for(let i=0;i<code.length;i++){
        let line = code[i];
        // Find Indent
        let indent = 0;
        while(line[indent]==' '){ indent++; }
        indent = indent/2;
        stack.push({
          line:line.substr(indent*2),
          indent:indent
        });
      
      }
      
  
      let close = [];
      let out = "";
      let isParentAdded = false;
      let parentIndent = 0;
      let isParentClosed = false;
      let firstParentIndent = Infinity;
      for(let i=0;i<stack.length;i++){
        let line = stack[i];
        /** @type {string} */ 
        let row = line.line;
        let indent = line.indent;
        let prev = stack[i-1];
        let next = stack[i+1];
  
        
        if(row.trim().startsWith("\/\/")){
          out += row + "\n";
          continue;
        }
  
        if(row.trim()==""){
          out += row + "\n";
          continue;
        }
  
  
        // }  close block
        
        close = close.sort((a,b)=>a-b);
        for(let j=close.length-1;j>-1;j--){
          let closeIndent = close[j];
          if(closeIndent>indent){
            //row = Space(closeIndent) + "}" + row;
            out += Space(closeIndent) + "}\n";
            close.splice(j,1);
            //j++;
          }
          if(firstParentIndent>=indent){
            isParentAdded=false
          }
        }
        
  
  
        let mat = row.match(/<[^\s\=].*/g);
        
        if(mat && row.indexOf("<") < row.indexOf(">") || (mat && row.split(" ").join("").indexOf("=><")>-1 ) ){
          let html = mat[0]
          html = html.split('`').join('\\`')
          html = html.split('{').join('${')
  
          let prefix = row.replace(mat[0],"")
          row  = Space(line.indent) + "{\n";
  
          if(indent>parentIndent && isParentAdded){
            row += Space(line.indent) + "let PARENT = that;{\n";
            close.push(indent);
          }
          row += "\n"
          if(prefix.trim().startsWith("let ") || prefix.trim().startsWith("const ") || prefix.trim().startsWith("var ")){
            row += Space(line.indent+1) + prefix.trim().replace("=","") + ";\n";
            prefix = prefix.substring(prefix.indexOf(" ")).trim();
          }

          if(prefix.trim()=="return"){
            row += Space(line.indent+1) + prefix + 'Asena(`'+html+'`);\n'
          }else if(prefix.trim().endsWith("=>")){
            row += Space(line.indent+1) + prefix + 'Asena(`'+html+'`);\n'
          }else{
            row += Space(line.indent+1) + 'let that=' + (isParentAdded?"":"PARENT=") + prefix + 'Asena(`'+html+'`);\n'
          }

  
          if(isParentAdded==false){
            firstParentIndent = indent;
          }

          if(isParentAdded) row+= Space(line.indent+1) + "PARENT.append(that);\n"
          isParentAdded = true;

          parentIndent = indent;
          close.push(indent);
          out += row;
        }else{
          out += Space(indent) + row + "\n";
        }
      }
  
      close = close.sort((a,b)=>a-b);
      for(let j=close.length-1;j>-1;j--){
        let closeIndent = close[j];
        if(closeIndent>=0){
          //row = Space(closeIndent) + "}" + row;
          out += Space(closeIndent) + "}\n";
          close.splice(j,1);
          //j++;
        }
      }
  
      return out;
    }
  
    let blocks = ToBlock(code);
  
    out += blocks;
    //out += "  return base.parent;\n}";
    return out;
  }

  function Request(url){
    return new Promise((resolve,reject)=>{
      // Fetch without Cache
      fetch(url+"?"+Math.random(),{
        method:"GET",
        headers:{
          "Cache-Control":"no-cache"
        }
      }).then(res=>{
        // css
        if(res.headers.get("content-type").split(";")[0]=="text/css"){
          return new Promise((resolve,reject)=>{
            res.text().then(text=>{
              resolve({
                type: "css",
                text: text
              });
            })
          })
        }
        // js
        if(res.headers.get("content-type").split(";")[0]=="application/javascript"){
          return new Promise((resolve,reject)=>{
            res.text().then(text=>{
              resolve({
                type: "js",
                text: text
              });
            })
          })
        }
      }).then( ({type,text})=>{
        if(type=="css"){
          let style = document.createElement("style");
          style.innerHTML = text;
          document.head.appendChild(style);
          resolve();
        }
        if(type=="js"){
          let code = Convert(text);
          var script = document.createElement('script');
          script.innerHTML = code;
          document.body.appendChild(script);
          resolve();
        }
      });
    })
  }

  // each arguments
  let promises = [];
  for(let i=0;i<arguments.length;i++){
    let url = arguments[i];
    promises.push(Request(url));
  }
  return Promise.all(promises);
}
