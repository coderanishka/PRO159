AFRAME.registerComponent('cursorlistener',{
    schema : {selectedItemId : {default: '', type: 'string'}},
    init: function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
        this.handleMouseClickEvents() 
    },
    handleComicListState: function(){
        const id = this.el.getAttribute('id')
        const comics = ['cab2', 'cab1', 'tinkle2', 'tinkle1']
        if(comics.includes(id)){
            const comicsContainer = document.querySelector('#comics-container')
            comicsContainer.setAttribute('cursorlistener', {selectedItemId: id})
            this.el.setAttribute('material', {color: 'white', opacity: 1})
        }
    },

    handleMouseEnterEvents: function(){
        this.el.addEventListener('mouseenter', () => {
            this.handleComicListState()
        })
    },
    handleMouseLeaveEvents: function () {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave", () => {
          const { selectedItemId } = this.data;
          if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == selectedItemId) {
              el.setAttribute("material", { color: "#fff" });
            }
          }
        });
      },
    handleMouseClickEvents: function () {
        // Mouse Click Events
        this.el.addEventListener("click", () => {
          const { selectedItemId } = this.data;
    
          const fadeBackgroundEl = document.querySelector("#fadeBg");
          const titleEl = document.querySelector("#app-title");
          const cursorEl = document.querySelector("#camera-cursor");
    
          if (selectedItemId) {
            fadeBackgroundEl.setAttribute("visible", true);
            fadeBackgroundEl.setAttribute("information", {
              itemId: selectedItemId,
            });
            titleEl.setAttribute("visible", false);
            cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
            cursorEl.setAttribute("geometry", {
              radiusInner: 0.03,
              radiusOuter: 0.04,
            });
          } else {
            fadeBackgroundEl.setAttribute("visible", false);
            titleEl.setAttribute("visible", true);
            cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
            cursorEl.setAttribute("geometry", {
              radiusInner: 0.08,
              radiusOuter: 0.12,
            });
          }
        });
      },
})
 