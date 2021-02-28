
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
ground = new Ground(400, 680, 800, 20);

trash1 = new trashCan(550,620,20,100);
World.add(world, trash1);

trash2 = new trashCan(610,660,100,20);
World.add(world, trash2);

trash3 = new trashCan(670,620,20,100);
World.add(world, trash3);

paper = new Paper(100,600,10);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  ground.display();
  trash1.display();
  trash2.display();
  trash3.display();
  paper.display();  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body, paper.body.position, {x: 15, y: -15})	
}	
}



