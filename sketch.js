var tom ;
var jerry ;

function preload() {
 jerry2 = loadImage(jerryTwo.png);
 jerry4 = loadAnimation(jerryFour.png);
 garden = loadImage(garden.png);
 tom1=loadImage(tomOne.png);
 tom2 = loadAnimation (tomTwo.png);
 tom4 = loadAnimation (tomFour.png);
}

function setup(){
 createCanvas(1000,800);
 tom = createSprite(200,700,50,50);
 tom.addImage(tomOne);
 jerry = createSprite(350,700,50,50);
 jerry.addImage(jerryTwo);

}

function draw() {
background(255);
background.addImage(garden);

if(tom.x-jerry.x < (tom.width - jerry.width)/2)
{   tom.addAnimation("tomSitting",tom4)
    tom.changeAnimation("tomSitting");
}
    drawSprites();
}


function keyPressed(){
 if(keyCode === LEFT_ARROW){
 tom.velocityX= -5;
 tom.addAnimation("catRunning",tomTwo);
 tom.changeAnimation("catRunning")
 }


}
