AFRAME.registerComponent('information',{
    schema:{default:'', type:'string'},
    update: function(){
        this.createBanner()
    },
    createBanner: function(){
      postersInfo = {
        suppandi: {
          url: "./assets/banners/suppandi-banner.jpg",
          title: 'Suppandi',
          description: 'Suppandi is characterised by a surprisingly low level of intelligence, even for a village simpleton, being fired over and over due to being unable to properly understand, much less execute, his various masters various commands. However, he has demonstrated wisdom in certain situations.'
        },
        shikari_shambu: {
          url: "./assets/banners/shikari_shambu-banner.jpg",
          title: 'Shikari Shambu',
          description: 'Shikari Shambu is distinctive and widely known as the lazy, cowardly, and bumbling hunter, whom the world sees as a heroic hunter thanks to his sheer luck.'
        },
        cah1: {
          url: "./assets/banners/cah1-banner.jpg",
          title: 'Calvin and Hobbes',
          description: 'In Calvin and Hobbes book Weirdos From Another Planet!, this power-packed extravaganza of creative energy and imagination feature the childhood fun and fantasy that was a Watterson trademark. Weirdos From Another Planet! is out of this world!'
        },
        cah2: {
          url: "./assets/banners/cah2-banner.jpg",
          title: 'Calvin and Hobbes',
          description: 'The praise and popularity of Calvin and Hobbes continue to escalate as the hottest comic strip around reaches its fifth birthday. With keen insight, Bill Watterson depicts life through the eyes of a child, and the limits of our imaginations are challenged as we accompany Calvin and Hobbes while they stir up trouble, travel through time, transmogrify themselves--and just have fun in everything they do.'
        }
      }
        const { itemId } = this.data;
    const fadeBackgroundEl = document.querySelector("#fadeBg");
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });
    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
    const item = postersInfo[itemId];
    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);
    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);
    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    for(var item in postersInfo){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  }
  },
  createTitleEl: function (item) {
    for(var item in postersInfo){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  }
  },
  createDescriptionEl: function (item) {
    for(item in postersInfo){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  }
  },
})
    // Suppandi is characterised by a surprisingly low level of intelligence, even for a village simpleton, being fired over and over due to being unable to properly understand, much less execute, his various masters' various commands. However, he has demonstrated wisdom in certain situations.
    // Shikari Shambu is distinctive and widely known as the lazy, cowardly, and bumbling hunter, whom the world sees as a heroic hunter thanks to his sheer luck.
    // In Calvin and Hobbes book Weirdos From Another Planet!, this power-packed extravaganza of creative energy and imagination feature the childhood fun and fantasy that was a Watterson trademark. Weirdos From Another Planet! is out of this world!
    // The praise and popularity of Calvin and Hobbes continue to escalate as the hottest comic strip around reaches its fifth birthday. With keen insight, Bill Watterson depicts life through the eyes of a child, and the limits of our imaginations are challenged as we accompany Calvin and Hobbes while they stir up trouble, travel through time, transmogrify themselves--and just have fun in everything they do.