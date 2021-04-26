var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var v = 0; v <=width; v = v + 80) {
     divisions.push(new Divisions(v, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var s = 75; s <=width; s=s+50) 
    {
    
       plinkos.push(new Plinko(s,75));
    }

    for (var r = 50; r <=width-10; r=r+50) 
    {
    
       plinkos.push(new Plinko(r,175));
    }

     for (var f = 75; f <=width; f=f+50) 
    {
    
       plinkos.push(new Plinko(f,275));
    }

     for (var g = 50; g <=width-10; g=g+50) 
    {
    
       plinkos.push(new Plinko(g,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var a = 0; a < plinkos.length; a++) {
     
     plinkos[a].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var t = 0; t < particles.length; t++) {
   
     particles[t].display();
   }
   for (var w = 0; w < divisions.length; w++) {
     
     divisions[w].display();
   }
}