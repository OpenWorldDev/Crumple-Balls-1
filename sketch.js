
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	sheet = new Paper(100,100);
	ground = new Ground(700,height,1200,20);
	logBase = new Log()
	rope1 = new Rope(bird.body,littlelog.body)
	rope2 = new Rope(bird.body,littlelog.body)

    ground.display();
	sheet.display();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



