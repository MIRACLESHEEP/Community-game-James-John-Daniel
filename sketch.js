

var currentScene = 1;

var img;
var img1;
var img2;
var cnv;

function centerCanvas() {
  	var x = (windowWidth - width) / 2;
 	var y = (windowHeight - height) / 0;
  	cnv.position(x, y);
}



function windowResized() {
  	centerCanvas();
}


function setup() {
  	cnv = createCanvas(500, 500);
  	centerCanvas();
  	background(255, 0, 200);
  	img = loadImage("pictures/LogoMakr_0cfjro.png"); 
	  img1 = loadImage("pictures/grassland01a_soruve.png"); 
	  img2 = loadImage("pictures/japan_street01.png"); 
}


var drawScene1 = function() {
    currentScene = 1;
   	background(255);
   	image(img, 200, 200, 250,100);
	text("Press Enter to Start!",200,300);
	text("Made by John Khalife, Daniel Figotin and James Yee",110,480);

};

var drawScene3 = function(){
   	currentScene = 3;
	background(255);
	Health(10,10,150,20);
	Health(340,10,150,20);
	if(Background === 1) {
		image(img2, 0, 0, 500,500);
	}					 					 
	if(Background === 2) {
	image(img1, 0, 0, 500,500);
	}

};

var drawScene4 = function(){
	currentScene = 4;
	background(255, 255, 255);
};
	
var drawScene5 = function(){
	currentScene = 5;
	background(150, 150, 175);
};

var drawScene2 = function(event) {
	
  currentScene = 2;
	

var CITY = new optionButton({


	x: 180 ,
   	y: 150,
    	width: 50,
   	height: 20,
    	color: color(165, 165, 155),
    	label: "City",
	onClick: function() {
	Background = 1;
	console.log("CITY has been clicked" + Background);
}

});
	
var FIELDS = new optionButton({


	x: 360,
    	y: 150,
  	width: 50,
   	height: 20,
    	color: color(219, 226, 13),
    	label: "Fields",
	onClick: function() {
	Background = 2;
	console.log("FIELDS has been clicked" + Background);
}

});
	
var Difficultye = new optionButton({


	x:100  ,
    	y: 360,
   	 width: 70,
    	height: 50,
    	color: color(144, 234, 18),
    	label: "Normal",
	onClick: function() {
	Difficulty = 1;
	console.log("NORMAL has been clicked" + Difficulty);
}

});
	
var Difficultym = new optionButton({


	x: 250,
    	y: 360,
    	width: 70,
    	height: 50,
    	color: color(211, 229, 13),
    	label: "Overkill",
	onClick: function() {
 	Difficulty = 2;
	console.log("OVERKILL has been clicked" + Difficulty);
}

});
	
  
var Difficultyh = new optionButton({


	x: 400,
	y: 360,
	width: 135,
	height: 50,
	color: color(244, 176, 66),
	label: "Death Sentence",
	onClick: function() {
	Difficulty = 3;
	console.log("DEATH has been clicked" + Difficulty);
}
})

var Next = new optionButton({
	x:430,
	y: 460,
	width: 60,
	height: 20,
	color: color(255),
	label: "NEXT",
	onClick: function() {
	  currentScene = 3;
		drawScene3();
//		console.log("NEXT: " + currentScene);
  }
	

});
	
	if( event === "click" ) {
	//	console.log("scene2 click");
		CITY.handleMouseClick();
	  FIELDS.handleMouseClick();
	  Difficultyh.handleMouseClick();
		Difficultym.handleMouseClick();
		Difficultye.handleMouseClick();
		Next.handleMouseClick();
	} else {
	background(0, 0, 0);
	textSize(18);
	fill(250,0,0);
	text("Game Options",190,50);
	text("Arena",50,100);
	text("Difficulty",50,280);
	text("Or",260,150);
	text("Or",165,360);
	text("Or",300,360);
	image(img1, 340, 200,50,50);
	image(img2, 160, 200,50,50);
 	Difficultyh.draw();
	Difficultym.draw();
	Difficultye.draw();
	CITY.draw();
	FIELDS.draw();
	Next.draw();

	}
//	console.log("Scene2 - draw(" + event + ")");

};
	
	


function draw() {
	
if(currentScene === 1){
    drawScene1();
    
  }


if(currentScene === 2){
    drawScene2();
    
  }

if( keyIsPressed && keyCode === 13 ){
      drawScene2();		
  }


}

mouseClicked = function() {
//	  console.log("Mouse was clicked");
	if( currentScene === 2 ) {
	  drawScene2("click");
	}
};
