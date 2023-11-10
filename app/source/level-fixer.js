const LevelFixer = {}


String.prototype.matchRequirsive = function (start, end, position = 0) {
  var search = this;
  var total = 0,
    startLen = start.length,
    endLen = end.length;
  var startPoint = -1;
  for (let i = position; i < search.length - endLen + 1; i++) {
    const element = search[i];
    //console.log(i,element,total,startPoint);
    if (search.substr(i, startLen) == start) {
      //console.log("S:",i)
      total++;
      if (startPoint == -1)
        startPoint = i;
      i += startLen - 1;
    }
    if (search.substr(i, endLen) == end) {
      //console.log("E:",i)
      total--;
      if (total == 0 && startPoint != -1) {
        return [
          search.substr(startPoint, i + endLen - startPoint),
          search.substr(startPoint + startLen, i - startPoint - startLen),
          startPoint + startLen,
          i + endLen
        ];
      }
      i += endLen - 1;
    }
  }
  return null;
};

String.prototype.matchSplit = function(start,end,position=0){
  let list = [];
  let str = this;
  let mat = str.matchRequirsive(start,end,position);
  while(mat){
    list.push(str.substr(0,mat[2] - start.length));
    list.push(mat[1]);
    str = str.substring(mat[3]);
    mat = str.matchRequirsive(start,end);
  }
  list.push(str);
  return list;
}

/** 
 * @param {string} codeString 
 * It is converting <<< your code >>> symbol to object
 */
LevelFixer.parseCode = function (codeString) {
  let codeArray = codeString.matchSplit("<<<", ">>>")
  let codeTransformed = []
  for (let i = 0; i < codeArray.length; i++) {
    if (i % 2 == 0) {
      codeTransformed.push({
        type: "readonly",
        code: codeArray[i]
      })
    } else {
      codeTransformed.push({
        type: "editable",
        code: codeArray[i],
        label: parseInt(i / 2)
      })
    }
  }
  return codeTransformed
}



LevelFixer.fix = function (data) {

  // Default /parts/_/tests/_/files={}
  Dion.default(data, "parts/_/tests/_/files", {}, "/");


  for(let index in data.parts){
    let part = data.parts[index];
    // parts/_/files/_/.block
    if (part.files) {
      for (let fileName in part.files) {
        if (part.files[fileName][".block"]) {
          part.files[fileName] = LevelFixer.parseCode(part.files[fileName][".block"]);
        }
      }
    }

    // parts/_/tests/_/.block
    if (part.tests) {
      for(let ti = 0; ti < part.tests.length; ti++){
        for (let fileName in part.tests[ti].files) {
          let file = part.tests[ti].files[fileName];
          if (file[".block"]) {
            file['.block'] = LevelFixer.parseCode(file[".block"]);
          }
        }
      }
    }
  }

  if(data.language=="python"){
    Dion.default(data, "parts/_/tests/_/execute", data.run || "python main.py", "/");
    Dion.default(data, "run", "python main.py", "/");
  }

  
  


  return data;
}