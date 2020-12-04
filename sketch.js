const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisions;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 0;
var gameState = PLAY;
var PLAY = 1;
var END = 2;

function preload(){

}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  // createing Bodies

  ground = new Ground(10,height,1200,20);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2, 10 ,divisionHeight))
  }

  for (var j = 40;j <= width ;j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15;j <= width - 10 ;j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 5;j <= width - 20 ;j = j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 1;j <= width - 30 ;j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

}

function draw() {
  background(255,255,255);

  frameParticle();

  if(particle != null)
  {
    particle.display();

    if(particle.body.position.y > 760){

      if(particle.body.position.x < 300){

        score = score + 500;
        particle = null;
        if(count >= 5)gameState = "end";
      }
   }
  }


  text("Score = " + score,650,10);

  text("500",10,250);
  text("500",100,250);
  text("500",200,250);
  text("200",300,250);
  text("200",400,250);
  text("200",500,250);
  text("100",600,250);
  text("100",700,250);
  text("100",800,250);

  // displaying Bodies
  ground.display();

  for(var j = 0;j < particles.length;j++){
    particles[j].display();
  }

  for(var j = 0;j < plinkos.length;j++){
    plinkos[j].display();
  }
  
  for(var k = 0;k < particles.length;k++){
    divisions[j].display();
  }

  if(gameState == END){
    textSize(15);
    text("GameOver",400,200)
  }
}


function mousePressed(){
  if(gameState !== END){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}
