class Particle {
    constructor(x,y,radius) {
      var options = {
          'isStatic': false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.color = color(random(0,225), random(0,225), random(0,225));
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x, pos.y, this.radius);
    }
  };
