
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(600,300,10,50) 
	ground=new Ground(400,690,1400,10);
	paper=new Paper(300.300,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  ground.display();
  paper.display();
  drawSprites();
 
}



