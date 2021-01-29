
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,200,400,10)
	ball1 = new Ball(200,500)
	ball2 = new Ball(300,500)
	ball3 = new Ball(400,500)
	ball4 = new Ball(500,500)
	ball5 = new Ball(600,500)

Sling1 = new SlingShot(ball1.body,ground.body,-80,0)
Sling2 = new SlingShot(ball2.body,ground.body,-40,0)
Sling3 = new SlingShot(ball3.body,ground.body,0,0)
Sling4 = new SlingShot(ball4.body,ground.body,40,0)
Sling5 = new SlingShot(ball5.body,ground.body,80,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  Sling1.display();
  Sling2.display();
  Sling3.display();
  Sling4.display();
  Sling5.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-55,y:-55});
	}
}




