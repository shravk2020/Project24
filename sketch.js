
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

	basket1 = new Basket(600, 650, 200, 20);
	basket2 = new Basket(490, 610, 20, 100);
	basket3 = new Basket(710, 610, 20, 100);

	ball = new paper();

	
	ground = Bodies.rectangle(400, 650, 800, 20 , {isStatic:true} );
	World.add(world, ground);
	

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
background('black');
rectMode(CENTER);

rect(ground.position.x, ground.position.y, 800, 20);

  basket1.display();
  basket2.display();
  basket3.display();
  ball.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x : 55, y : -55});
	}
}



