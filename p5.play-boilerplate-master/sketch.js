var blue,red,blueImg,redImg,bg

function preload(){
  bg = loadImage("battlefield.png")
  blueImg = loadImage("blue.png")
  redImg = loadImage("red.png")

}

function setup() {
  createCanvas(800,400);
  blue = createSprite(100,200,10,10)
  blue.addImage("blue",blueImg)
  blue.scale=0.1
  red = createSprite(700,200,10,10)
  red.addImage("red",redImg)
  red.scale=0.1
}

function draw() {
  background(bg);  
  drawSprites();
}