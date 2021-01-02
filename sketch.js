const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score
var backgroundImage;

function preload(){

getTime();

}

function setup(){
    var canvas = createCanvas(10200,1200);
    engine = Engine.create();
    world = engine.world;

ground=new Ground(1000,550,2000,20)
  
//level1
block1=new Level1(730,520,30,40)
block2=new Level1(760,520,30,40)
block3=new Level1(790,520,30,40)
block4=new Level1(820,520,30,40)
block5=new Level1(850,520,30,40)
block6= new Level1(880,520,30,40)

//level2
block7=new Level1(745,480,30,40)
block8=new Level1(775,480,30,40)
block9=new Level1(805,480,30,40)
block10=new Level1(835,480,30,40)
block11=new Level1(865,480,30,40)

//Level3
block12=new Level1(760,440,30,40)
block13=new Level1(790,440,30,40)
block14=new Level1(820,440,30,40)
block15=new Level1(850,440,30,40)

//level4
block16=new Level1(775,400,30,40)
block17=new Level1(805,400,30,40)
block18=new Level1(835,400,30,40)

//level5
block19=new Level1(790,360,30,40);
block20=new Level1(820,360,30,40)

//level6
block21=new Level1(805,320,30,40)

//polygon
ball=new Ball(100,300,80);

slingshot=new SlingShot(ball.body,{x:100,y:200})

score=0;
}
function draw(){

  Engine.update(engine);

if(backgroundImage){
    background(backgroundImage)
}

ball.display();

ground.display();
fill("lightgreen");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
fill("lightyellow");
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
fill("lightpink");
block12.display();
block13.display();
block14.display();
block15.display();
fill("lavender")
block16.display();
block17.display();
block18.display();
fill("lightblue")
block19.display();
block20.display();
fill("red")
block21.display();

slingshot.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();

text("SCORE:"+score,750,40)
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    
    }
    
    function mouseReleased(){
      slingshot.fly();
    }

   async function getTime(){

   var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
   var responseJson= await response.json();
   console.log(responseJson);
   var datetime=responseJson.datetime;
   var hour=datetime.slice(11,13);
   
   if(hour>=05 && hour<17){

    backgroundImage=loadImage("morning.jpg")

   }else{

    backgroundImage=loadImage("evening.png")

   }

   }