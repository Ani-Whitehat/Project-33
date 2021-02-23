var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
PLAY = 1
END = 0
var gameState = PLAY

var plinkos = [];
var divisions = [];
var count;
var divisionHeight=300;
var score = 0;
var particle;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  textSize(30)
  text("500",10,520);
  textSize(30)
  text("500",90,520);
  textSize(30)
  text("500",170,520);
  textSize(30)
  text("500",250,520);
  textSize(30)
  text("100",330,520);
  textSize(30)
  text("100",410,520);
  textSize(30)
  text("100",490,520);
  textSize(30)
  text("200",570,520);
  textSize(30)
  text("200",650,520);
  textSize(30)
  text("200",730,520);

  

  Engine.update(engine);

  if (particle != null){
      particle.display();
      
      
      
    }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
  

}
function mousePressed() {
    if(gameState !== END){
     particle = new Particle(mouseX,10,10);
     //console.log(particle.x);
    }
}
