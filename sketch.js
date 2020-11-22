
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,ground;
var FoodGroup, obstacleGroup;
var survivalTime=0;
function preload(){
monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
 
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");

}



function setup() {
createCanvas(600, 600);
 monkey = createSprite(80,315,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1;

ground = createSprite(400,350,900,10);  
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  
}


function draw() {
background(220);
if(ground.x>0){
ground.x=300; 
 } 
if(keyDown("space")){
monkey.velocityY=-4;

}  
  
monkey.velocityY = monkey.velocityY+0.8;
monkey.collide(ground);
spawnobstacle();
spawnbanana();
drawSprites();
}

function spawnobstacle(){
if(frameCount%300===0){
var obstacle = createSprite(600,330,20,20)
obstacle.addImage(obstaceImage)
obstacle.velocityX = -4;
obstacle.scale =0.1;
obstacle.lifetime=150; 
}  
}

function spawnbanana(){
if(frameCount%80===0){
var banana= createSprite(600,300,20,20);
banana.addImage(bananaImage)
banana.velocityX = -4;  
banana.scale = 0.1;
banana.y = Math.round(random(200,100))
banana.lifetime=150;
}
}




