const App = {}

/*
App.NextLevelUrl = function (url) {
  let path = location.pathname.replace("/page/editor/","/page/levels/")    
  let list = path.split("/")
  list.pop()
  let parent = list.join("/")
  fetch(parent).then(e => e.text()).then(e => {
    let index = e.indexOf(url)
    
}
*/


// *** USING *** //
const Pager = function () {
  Asenac("./views/editor.js", "./views/levels.js" ).then(e => {
    location.parameters = Object.fromEntries(decodeURIComponent(location.search).substring(1).split("&").map(e => e.split("=")))
    let page = location.parameters.page

    if (1 || location.pathname.startsWith("/page/editor/")) {
      data = Dion.parse(source.data)
      LevelFixer.fix(data)
      data.next = source.next
      console.log(data)
      document.body.append(Views.Create(data).elements.parent)
      //panel.theme = "light"
    }


    if (location.pathname.startsWith("/page/levels/")) {
      if(source.data.html!=null){
        main = Views.Panel({title:"Levels",theme:"dark"})
        main.elements.body.innerHTML = source.data.html
        document.body.append( main.elements.parent  )
        $(".star[href]").toArray().map(e=>{
          var href = location.origin + location.pathname + e.getAttribute('href')
          var level = (new URL(href)).pathname
          // console.log(level, localStorage[level])
          if(localStorage[level]=='true'){
            console.log(level)
            e.classList.add('success')
          }
        })
      }else if(source.data!=null){
        data = source.data
        main = Views.LevelList(location.pathname.substring("/page/levels/".length),data)
        document.body.append( main.elements.parent  )        
      }
    }

  })

}