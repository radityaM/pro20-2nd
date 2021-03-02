var cat,mouse;
var bg1,bgImg;
var catImg,mouseImg;
var catWalk,catLast;
var mouseSecond,mouseLast;

function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    catImg=loadImage("cat1.png");
    mouseImg=loadImage("mouse1.png");
    catWalkImg=loadAnimation("cat2.png","cat3.png");
    catLast=loadImage("cat4.png");
    mouseSecond=loadAnimation("mouse2.png","mouse3.png");
    mouseLast=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg1=createSprite(500,400,1000,800);
    bg1.addImage(bgImg);
    
    cat=createSprite(750,600);
    cat.addImage(catImg);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addImage(mouseImg);
    mouse.scale=0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){

        cat.velocityX=0;
        cat.addImage("kat",catLast);
        cat.changeImage("kat",catLast);
        cat.x=cat.x+130;
        mouse.addImage("mous",mouseLast);
        mouse.changeImage("mous",mouseLast);

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("kat",catWalkImg);
      cat.changeAnimation("kat",catWalkImg);
      mouse.addAnimation("mous",mouseSecond);
      mouse.changeAnimation("mous",mouseSecond);

  }


}