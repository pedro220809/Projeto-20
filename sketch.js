
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane
var block1
var block2
var block3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options = {
		isStatic : true
	}
    
    var block1_options = {
		restitution : 0.95,
        frictionAir : 0.01
	}

	var block2_options = {
		restitution : 0.96,
        frictionAir : 0.02
	}

	var block3_options = {
		restitution : 0.97,
        frictionAir : 0.03
	}


	Engine.run(engine);
  
	block1 = Bodies.circle(100,30,30,block1_options)
	World.add(world,block1)
  
  block2 = Bodies.rectangle(350,200,400,20,block2_options)
  World.add(world,block2)

  block3 = Bodies.rectangle(250,300,400,20,block3_options)
  World.add(world,block3)

  plane = Bodies.rectangle(400,400,400,20,plane_options)
World.add(world,plane)
}


function draw() {
  rectMode(CENTER);
  background(51);
  
  drawSprites();
 

  
   ellipse(block1.position.x,block1.position.y,30)
   rect(block2.position.x,block2.position.y,400,20);
   rect(block3.position.x,block3.position.y,400,20)
   rect(plane.position.x,plane.position.y,400,20)

}



