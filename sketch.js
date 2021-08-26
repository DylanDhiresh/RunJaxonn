
function preload(){
  //pre-load images
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.scale=1.2;
  leftBoundry = createSprite(0,0,100,800)
  rightBoundry = createSprite(410,0,100,800)
  boy = createSprite(180,340,30,30)
  boy.addAnimation("jakerunning",boyImg)
  boy.scale = 0.08
}


function draw() {
  background(0);
  path.velocityY = 4;
 boy.x=World.mouseX
edges = createEdgeSprites()
 boy.collide(edges[3])
 boy.collide(leftBoundry)
 boy.collide(rightBoundry)
 if(path.y>400){
   path.y = height/2
 }

  drawSprites()
}



