var car;
var wall;
var speed;
var weight;




function setup() {
  createCanvas(1600,400);

car1 = createSprite(50,200,20,20);
car2 = createSprite(50,100,20,20);
car3 = createSprite(50,300,20,20);

wall = createSprite(1500,200,40,height/2);

speed = random(55,90);

weight = random(400,1500);

}

function draw() {
  background(255,255,255);  

  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;


  console.log(wall.x - car1.x);

if (wall.x - car1.x <(car1.width + wall.width)/2){
car1.velocityX = 0;
 var deformation = 0.5*width*speed*speed/22509;

if(deformation > 180 ){
car1.shapeColor = "red";
}

if(deformation > 180 && deformation < 100 ){
  car1.shapeColor = "yellow";
  }

if(deformation < 100 ){
  car1.shapeColor = "green";
  }

}

if (wall.x - car2.x <(car2.width + wall.width)/2){
  car2.velocityX = 0;
   var deformation = 0.5*width*speed*speed/22509;
  
  if(deformation > 180 ){
  car2.shapeColor = "red";
  }
  
  if(deformation > 180 && deformation < 100 ){
    car2.shapeColor = "yellow";
    }
  
  if(deformation < 100 ){
    car2.shapeColor = "green";
    }
  
  }

  if (wall.x - car1.x <(car3.width + wall.width)/2){
    car3.velocityX = 0;
     var deformation = 0.5*width*speed*speed/22509;
    
     if(deformation > 180 ){
      car3.shapeColor = "red";
      }
    
    if(deformation > 180 && deformation < 100 ){
      car3.shapeColor = "yellow";
      }
    
    if(deformation < 100 ){
      car3.shapeColor = "green";
      }
    
    }
  drawSprites();
}
