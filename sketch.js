var box 
function setup() {
  createCanvas(600,600);

  box = createSprite(300,300,75,75)
  box.shapeColor="green"


}

function draw() 
{
  background("blue");
  drawSprites();

  if (keyDown(LEFT_ARROW)){
    box.x=box.x-1;
  }

  if(keyDown(RIGHT_ARROW)){
    box.x=box.x+1
  }

  if(keyDown(UP_ARROW)){
    box.y=box.y-1;
  }

  if(keyDown(DOWN_ARROW)){
  box.y=box.y+1;
  }

}



