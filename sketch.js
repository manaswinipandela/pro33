const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  bg=loadImage("snow2.jpg");
  //sound1=loadSound("Recording (3).m4a");
  elsaAnimation=loadAnimation("e1.png","e1.png","e1.png","e1.png","e1.png","e2.png","e2.png","e2.png","e2.png","e2.png");
  design=loadImage("snow4.webp");
  giAnimation=loadAnimation("gi1.png","gi1.png","gi3.png","gi3.png","gi2.png","gi2.png","gi4.png","gi4.png");
  note5=loadImage("text5.png");
  boyA=loadAnimation("b1.png","b1.png","b2.png","b2.png","b3.png","b3.png")
  boyB=loadAnimation("r1.png","r1.png","r2.png","r2.png","r3.png","r3.png")
}
function setup() {
  createCanvas(1520,750);
  engine = Engine.create();
  world = engine.world;
 
  boy=createSprite(700,620,20,20);
  boy.addAnimation("boy",boyA);
  boy.addAnimation("boyb",boyB);
  console.log(boy.y);
  boy.scale=0.050;
  boy.velocityX=-5;
  gi=createSprite(300,200+500-100,20,20);
  gi.addAnimation("girl",giAnimation);
  gi.scale=0.35;
  elsa=createSprite(1400-150, 200+500-100, 50, 50);
  elsa.addAnimation("elsa",elsaAnimation)
  elsa.scale=0.50;  
  g2=new Snow(132+100,100-200,60,10)
  g3=new Snow(206+150,100-150,60,10)
  g4=new Snow(290+200,100-160,60,10)
  g5=new Snow(372+250,100-300,60,10)
  g6=new Snow(445+300,100-450,60,10)
  g7=new Snow(524+350,100-400,60,10)
  g8=new Snow(607+400,100-490,60,10)
  g9=new Snow(684+450,100-250,60,10)
  g10=new Snow(764+500,100-700,60,10)
  snowGroup = new Group();
  note= createSprite(1400-450+50,200+500-350,20,20);
  note.addImage(note5);
 
}
function draw() {
  background(bg); 
  //sound1.loop();
  Engine.update(engine);
 g2.display();
 g3.display();
 g4.display();
 g5.display();
 g6.display();
 g7.display();
 g8.display();
 g9.display();
 g10.display();
 //g.display();
 note.setlifetime=50;
 if(boy.x<390){
  boy.changeAnimation("boyb",boyB);
  boy.velocityX=5;
 }
 if(boy.x>1400-450+50){
  boy.changeAnimation("boy",boyA); 
  boy.velocityX=-5;
 }
 spawnsnow();
  drawSprites();
}
function spawnsnow() {
  if (frameCount % 20 === 0) {
   snow = createSprite(200,50);
   snow.x=Math.round(random(20,1520));
   snow.addImage(design);
   //console.log(snow.x);
   snow.scale = 0.1;
   snow.velocityY =8;
   snow.setlifetime = 800;
   note.setlifetime=50;
   snowGroup.add(snow);
  } 
}