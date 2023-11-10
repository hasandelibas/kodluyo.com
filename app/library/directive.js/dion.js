(function () {

  window.Dion = {}

  function Path(path,SEPERATOR="/") {
    let index = [-1];
    let wait = false;
    let list = [];
    for(let i = 0; i < path.length; i++){
      if(path[i] == SEPERATOR && wait==false){
        list.push(path.substring(index[index.length-1]+1,i));
        index.push(i);
      }
      if(path[i] == "\""){
        wait = !wait;
      }
    }
    list.push(path.substring(index[index.length-1]+1,path.length));
    list = list.map(e => e.trim()).filter(e=>e!="");
    list = list.map(e => isNaN(e) == false ? parseInt(e) : e);
    return list;
  }

  function Define(obj, path, value,SEPERATOR="/") {
    // -- Calcluate the Index --//
    let list = []
    if(typeof path == "string"){
      list = Path(path,SEPERATOR);
    }else{
      list = path;
    }
    //-- Define Object --//
    let temp = obj;
    for (let i = 0; i < list.length - 1; i++) {
      let key = list[i];
      let nextKey = list[i + 1];
      if (temp[key] == undefined) {
        if (nextKey == parseInt(nextKey)) {
          temp[key] = [];
        } else {
          temp[key] = {};
        }
      }
      if (i != list.length - 1) {
        temp = temp[key];
      }
    }
    let lastKey = list[list.length - 1];
    temp[lastKey] = value;
  }
  Dion.define = Define;

  Dion.parse = function (text, DIRECTIVE="-", SEPERATOR="/" , ASSIGN="="){
    text = text.split("\r").join("");
    // ; /path/to/file.js
    let lines = text.split("\n");
    let result = {};
    let prefix = "";
    let currentPath = "";
    let currentText = "";
    for (let line = 0; line < lines.length+1; line++) {
      // END OF FILE
      if(line == lines.length){
        if(currentPath!=""){
          let variable = currentText.substring(0,currentText.length-1)
          variable = variable.split("&minus;").join("-")
          let absolute_path = currentPath.trim().startsWith("/") ? currentPath : prefix+"/"+currentPath;
          Define(result, absolute_path, variable);
          currentPath = "";
          currentText = "";
        }
        break;
      }

      let row = lines[line];
      if (row.startsWith(DIRECTIVE)) {
        // Close previous path
        if(currentPath!=""){
          let variable = currentText.substring(0,currentText.length-1)
          variable = variable.split("&minus;").join("-")
          let absolute_path = currentPath.trim().startsWith("/") ? currentPath : prefix+"/"+currentPath;
          Define(result, absolute_path, variable);
          currentPath = "";
          currentText = "";
        }

        if(row.trim() == (new Array(row.trim().length)).fill(DIRECTIVE).join("")){
          continue;
        }

        let directive = row.split(DIRECTIVE);
        directive.splice(0, 1);
        directive = directive.join(DIRECTIVE).trim();
        
        // single line define
        if (directive.indexOf(ASSIGN) > -1) {
          let path = directive.split(ASSIGN)[0];
          let value = directive.split(ASSIGN)[1].trim();
          value = JSON.parse(value);
          let absolute_path = path.trim().startsWith("/") ? path : prefix+"/"+path;
          Define(result, absolute_path, value, SEPERATOR);
        }else if(directive.trim().endsWith(":")){ // multi line define
          prefix = directive.trim().substring(0,directive.trim().length-1);
        }else{ // include
          currentPath = directive;
        }
      }else{
        if(currentPath!=""){
          currentText+=row+"\n";
        }
      }
    }
    return result;
  }

  Dion.isDefined = function (obj, path,SEPERATOR="/") {
    let list = []
    if(typeof path == "string"){
      list = Path(path,SEPERATOR);
    }else{
      list = path;
    }
    let temp = obj;
    for (let i = 0; i < list.length; i++) {
      let key = list[i];
      if (temp[key] == undefined) {
        return false;
      }
      temp = temp[key];
    }
    return true;
  }

  Dion.default = function (obj, path, value,SEPERATOR="/") {
    let list = []
    if(typeof path == "string"){
      list = Path(path,SEPERATOR);
    }else{
      list = path;
    }

    let assignList = [];

    function getAssingList(obj,list,path) {
      
      if(list.length == 0){
        assignList.push(path)
        return
      }

      let key = list[0];
      
      if(key=="_"){ // loop
        for(let i in obj){
          if( obj.hasOwnProperty(i) ){
            getAssingList(obj[i],list.slice(1,list.length),[...path,i] );
          }
        }
      }else{ // defined
        if(obj[key] != undefined){
          getAssingList(obj[key],list.slice(1,list.length),[...path,key] );
        }else{
          assignList.push([...path,...list]);
        }
      }
    }

    getAssingList(obj,list,[]);

    for(let i = 0; i < assignList.length; i++){
      let path = assignList[i];
      Dion.isDefined(obj,path) == false ? Dion.define(obj,path,value) : null;
    }
    
  }


})();