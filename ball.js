class Ball{
 
    constructor(x,y,r){      
    
    var opti={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,r/2,opti)
    this.image=loadImage("polygon.png");
  World.add(world,this.body)
  
    }
    
    display(){
    var paperpos=this.body.position;
    push();
    rotate(this.body.angle);
    translate(paperpos.x,paperpos.y);
    imageMode(CENTER);
    image(this.image,0,0,70,70)
    pop();
    
    }

    }