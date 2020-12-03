var car , wall;
var speed , weight;



function setup() {

  createCanvas(1600,400);
 car = createSprite(50, 200, 50, 50);
 car.debug = "false";
 wall = createSprite(1500,200,60,200);
 wall.shapeColor = color(80,80,80);
 wall.debug = "false";

speed = random(55,90);
weight = random(400,1500);


}

function draw() {
  background(0);  
 
 car.velocityX = speed;

if( wall.x - car.x < wall.width/2 + car.width/2 ) {

  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed / 22500 
  if ( deformation > 180) {

    car.shapeColor = "red";
  }
  if(deformation < 180 && deformation > 100){

    car.shapeColor = "yellow";
  }
  if(deformation< 180){

    car.shapeColor = "green";
  }
  
}
  drawSprites();
}