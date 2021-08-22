
/*
  Ma'am sometimes the ball bounces too much and sometimes it flies out of the canvas. 
  I even tried reducing the force. Also sometimes the ball doesn't bounce off the bins and misses the ground.
  I have set the bin to static but still sometimes it misses it when the speed is high.
*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;

var leftbin;
var rightbin;

function setup() {
  createCanvas(900,350);

  engine = Engine.create();
  world = engine.world;

  var balloptions = {
    isStatic:false,
    restitution:0.05,
  }

  fill("white");

  ball = Bodies.circle(100,200,10,balloptions);
  World.add(world,ball)

  ground = new Ground(450,320,900,15);
  leftbin = new Ground(600,275,10,70);
  rightbin = new Ground(750,275,10,70);

  ellipseMode(RADIUS);
  rectMode(CENTER);

  console.error("Maam sometimes the ball bounces too much and sometimes it flies out of the canvas I even tried reducing the force Also sometimes the ball doesnt bounce off the bins and misses the ground I have set the bin to static but still sometimes it misses it when the speed is high");
}

function draw() {
  background(0);
  
  ground.show();
  rightbin.show();
  leftbin.show();
  
  ellipse(ball.position.x,ball.position.y,10)
  forceonball()

  Engine.update(engine);
 
  drawSprites();
}

function forceonball(){
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.5})
  }
}

