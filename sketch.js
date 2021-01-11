
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5; 
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	bobDiameter = 30;

	roof = new Roof();
	
	bob1 = new Bob(380, 350, bobDiameter);
	bob2 = new Bob(440, 350, bobDiameter);
	bob3 = new Bob(500, 350, bobDiameter);
	bob4 = new Bob(560, 350, bobDiameter);
	bob5 = new Bob(620, 350, bobDiameter);
	
	rope1 = new Rope(bob1.body, {x:380, y:50});
	rope2 = new Rope(bob2.body, {x:440, y:50});
	rope3 = new Rope(bob3.body, {x:500, y:50});
	rope4 = new Rope(bob4.body, {x:560, y:50});
	rope5 = new Rope(bob5.body, {x:620, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  textSize(20);
  fill("black");
  text("press the UP arrow key to move the left bob", 298, 420);
  text("press the DOWN arrow key to move the right bob", 276, 450);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -100, y: -50});
	}

	else if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:100, y: 50});
	}
}


