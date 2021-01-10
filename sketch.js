const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Engine;
var aiWorld;
var paper , dustbin;

function preload()
{	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	paper = new Shelf();
	
	dustbin = new Dustbin();
	
	Engine.run(engine);
  
}


function draw() {
  background("light green");

  engine.Update(Engine);

  paper.display();

  dustbin.display();

  drawSprites();
 
}



