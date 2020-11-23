class Bob{
constructor(x,y){
  var options={
      isStatic: false,
      restitution: 0.8,
      friction: 1.0,
      density: 1.2
      
  }
  this.x = x;
  this.y = y;
  this.body = Bodies.circle(x,y,5,options);
  World.add(world, this.body);
}
   display(){
    var BobPos=this.body.position;		

			push()
			translate(BobPos.x, BobPos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			fill(255,255,0)
			ellipse(0,0,10,10);
			pop()
			
   }
}

