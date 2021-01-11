class Roof {
    constructor() {
      var options = {
        isStatic: true,
      }
      this.body = Bodies.rectangle(500, 50, 400, 30, options);
      this.width = 400;
      this.height = 30;
        
      World.add(world, this.body);
      }
    display(){
      
      rectMode(CENTER);
      fill("grey");
      rect(this.body.position.x, this.body.position.y, this.width, this. height);
      }
    };