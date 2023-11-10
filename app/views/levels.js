var Views = Views || {};

/**
 * @param {string} episode 
 * @param {string[]} list 
 * */
Views.LevelList = function(episode,list){
  let base = {elements:{}}
  base.elements.parent = <div style="padding: 1em;opacity: 0;transition: .5s;overflow: auto;height: 100%;"></div>
    base.elements.container = <div class="grid-container" id="container"></div>
      for (let i = 0; i < list.length; i++) {
        let level = list[i];
        
        if (level.endsWith(".md")) {
          let target = ("/page/editor/"+episode+"/"+level).split("//").join("/")
          let image = ("/image/levels/"+episode+"/"+level).split("//").join("/")
          let text = level.substring(0, level.length - 3)
          let item = <a href="{target}" style='background-image:url({image});' class="card">{text}</a>
          // item.onclick = () => { location.href = target; }
          // item.href = target;
          base.elements.container.append(item);
        } else {
          let target = ("/page/levels/"+episode+"/"+level).split("//").join("/")+"/"
          let image = ("/image/levels/"+episode+"/"+level).split("//").join("/")
          let text = level
          let item = <a href="{target}" style='background-image:url({image});' class="card">{level}</a>
          // item.onclick = () => { location.href = target; }
          // item.href = target;
          base.elements.container.append(item);
        }
      }

  let panel = Views.Panel({
    title: "Levels",
    theme: "dark",
  });
  panel.elements.body.append(base.elements.container);
  
  setTimeout(() => {
    base.elements.parent.style.opacity = 1;
  }, 100);
  return panel;
}