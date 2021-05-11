var containmentzone, containmentImg,containmentzoneGroup;
var Patient,patientImg,patientGroup;
var background,backgroundImg;
var firstaid,firstaidImg,firstaidGroup;
var kadha,kadhaImg,kadhaGroup;
var runner,runnerImg;
var PLAY=0;
var END=0;
var health = 100;
var firstaidkitImg;
var kadhaCounterImg; 
var firstaidkitcounter = 0;
var kadhaCounter = 0;
var survivalTime;
var vaccine;
var vaccineImg;

function preload(

)


{
runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

vaccineImg = loadImage("vaccine.png");
kadhaImg = loadImage("download 2.png");
firstaidImg = loadImage("download.png");
backgroundImg = loadImage("road2.png");
patientImg = loadImage("infected person.png");
containmentImg = loadImage("containment zone.png");
}

function setup() {
createCanvas(600, 600);
background = createSprite(300,300);

runner = createSprite(200,200,60,60);
runner.addAnimation("runner",runnerImg);
runner.scale = 0.07;
firstaidGroup = new Group();
kadhaGroup = new Group();
containmentzoneGroup = new Group();
patientGroup = new Group();

background.addImage(backgroundImg);
background.scale = 0.7;

kadhaCounterImg = createSprite(70,70,30,30);
kadhaCounterImg.addImage(kadhaImg);

firstaidkitImg = createSprite(500,70,30,30);
firstaidkitImg.addImage(firstaidImg);
firstaidkitImg.scale = 0.3;

  
}


function draw() {

containmentZone();
patient();
firstaidkit();
Kadha();
if(keyDown(RIGHT_ARROW)){
	runner.x = runner.x + 6;
  }
  
  if(keyDown(LEFT_ARROW)){
	runner.x = runner.x - 6;
  }

  if(keyDown(UP_ARROW)){
	runner.y = runner.y - 6;
  }
  
  if(keyDown(DOWN_ARROW)){
	runner.y = runner.y + 6;
  }
  
if(firstaidGroup.isTouching(runner)){
	firstaidGroup.destroyEach();
	
	firstaidkitcounter = firstaidkitcounter + 1;
	console.log(firstaidkitcounter);
	
	

	
}
if(kadhaGroup.isTouching(runner)){
	kadhaGroup.destroyEach(); 

	kadhaCounter = kadhaCounter + 1;
	console.log(kadhaCounter);
	
}
	if(containmentzoneGroup.isTouching(runner)){
		containmentzoneGroup.destroyEach();
		health = health - 5;
		console.log(health);
	}
	if(patientGroup.isTouching(runner)){
		health = health - 2;
		patientGroup.destroyEach();
		console.log(health);
		
	}
	if(keyWentDown("f")
	
	){
		firstaidkitcounter = firstaidkitcounter - 1;
		health = health + 5;
		console.log(health);
		

	}
	if(keyWentDown("k")){
		kadhaCounter = kadhaCounter - 1;
		health = health + 2;
		console.log(health);
		

}  
if(health >100){
	health = health - 5;
	
}
survivalTime = Math.ceil(frameCount/frameRate());

if(health <= 0){
	containmentzoneGroup.velocityY = 0;
	patientGroup.velocityY = 0;
	firstaidGroup.velocityY = 0;
	kadhaGroup.velocityY = 0;
	background.velocityY = 0;
	runner.velocityY = 0;
	if(keyDown("r")){
		reset();
	}


}
if(survivalTime === 500){
	kadhaGroup.velocityY =0;
	containmentzoneGroup.velocityY =0;
	firstaidGroup.velocityY = 0;
	patientGroup.velocityY = 0;
	runner.velocityY = 0;
	runner.velocityX = 0;
	text("congratulations you have succesfully reached the vaccine",300,300);
	text("press r to restart");
	vaccine.createSprite(300,300,100,100);
	vaccine.addImage(vaccineImg);
}
drawSprites();
background.velocityY = 3;
if (background.y > 400){


	background.y = 300;
  }
  text("firstaidkitsleft:" + firstaidkitcounter,470,150);
  text("pls dont try to increase health above 100 otherwise u will loose 50",100,20);
  text("kadhas left:" + kadhaCounter,70,150);
  text("health:" + health,300,100);
  
  text("score:" + survivalTime,300,150);
}

function containmentZone (){

	if (frameCount % 500 === 0) {
	containmentzone = createSprite(random(100, 500), 0, 100, 100);
	containmentzone.addImage("conatinment",containmentImg);
	containmentzone.velocityY = 6;
	containmentzone.scale = random(0.1,0.4);
	lifetime = 700;
	containmentzoneGroup.add(containmentzone);
	containmentzone.depth = runner.depth;
	 

	}
}
function patient(){
	if (frameCount % 100 === 0) {
		Patient = createSprite(random(100, 500), 0, 100, 100);
		Patient.addImage("patient",patientImg);
		Patient.velocityY = 6;
		Patient.scale = 0.3;
        lifetime = 700;
	    patientGroup.add(Patient);
	    Patient.depth = runner.depth;
	  
	 
	}
}

function firstaidkit(){
if (frameCount % 700 === 0) {
firstaid = createSprite(random(100, 500), 0, 100, 100);
firstaid.addImage("firstaid",firstaidImg);
firstaid.velocityY = 6;
firstaid.scale = 0.3;
lifetime = 700;
firstaidGroup.add(firstaid);
firstaid.depth = runner.depth;
	  
	  
	}
}

function Kadha(){
	if (frameCount % 500 === 0) {
kadha = createSprite(random(100, 500), 0, 100, 100);
kadha.addImage("kadha",kadhaImg);

kadha.velocityY = 6;
lifetime = 700;
kadhaGroup.add(kadha);
kadha.depth = runner.depth
	  
	 
	}
}
function reset(){
if(keyDown("r")){
firstaidkitcounter = 0;
kadhaCounter = 0;
containmentZone();
Kadha();
firstaidkit();
patient();
	}

}
