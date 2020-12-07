
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {  
  createCanvas(600, 600);
  banana();
  obstacle();
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
 
  
  ground = createSprite(400,350,900,10);
  
  // console.log(ground.x);
  
 
  
  
  

  
}


function draw() {  
  background('skyblue');
  banana();

   if (keyDown("k")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  ground.velocityX = -3;
  ground.x = ground.width/2;
  
  monkey.collide(ground);
  drawSprites();
}

function banana(){
if (World.fameCount%80===0){
  var banana = createSprite (200,200);
  banana.addImage("bananaImg",bananaImage);
  banana.scale = 0.1;  
  banana.y=Math.round(random(120,200));
  banana.velocityX= -3;
  banana.setLifetime = 300;
  bananaGroup.add(banana);
  }  
}

function obstacle(){
 var obstacle = createSprite (400,200);
  obstacle.addAnimation("obstacleImg",obstaceImage);
  obstacle.scale = 0.1;  
  
}



