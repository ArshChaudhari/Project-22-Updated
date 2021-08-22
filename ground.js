
class Ground {
 constructor(x,y,w,h){

  let groundoptions = {
     isStatic:true,
  };

  this.x = x;
  this.y = y;

  this.w = w;
  this.h = h;

  this.body = Bodies.rectangle(x,y,w,h,groundoptions);
  World.add(world,this.body);
 }

  show(){
  var pos = this.body.position;
  
  push();
   fill("yellow");

   rectMode(CENTER);
   rect(pos.x,pos.y,this.w,this.h);
  pop();
  }
}
