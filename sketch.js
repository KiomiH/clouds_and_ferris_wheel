var MyArray = [];
var MyArray2 = [];
var MyArray3 = [];
var MyArray4 = [];
var MyArray5 = [];
var MyArray6 = [];
var numOfSeats = 1;
var Cx, Cy;
var Diameter =300;
var Radius =Diameter/2;
var slider;
var song;
var clouds;
var button;
var Counter =0;

function preload() {
	song = loadSound("Waltz_of_the_Carnies.mp3");
	clouds = loadImage("cloud_pic2.gif");
}

function setup() {
	createCanvas(1200, 670);
	background(0);
	frameRate(30);
	cenX = 1200/2
	
	song.loop();
	analyzer = new p5.Amplitude();
	analyzer.setInput(song);
	
	noStroke();
	fill(0,200,255);
	rect(0,0,1200,400);
	fill(0,255,50);
	rect(0,400,1200,270);
	Cx = 1200/2;
	Cy = 670/2;	
	
	for (var i = 0; i < numOfSeats; i++) {
		MyArray[i] = new RotatingObject(700,300,250+i*30);
		MyArray2[i] = new RotatingObject2(700,300,250+i*30);
		MyArray3[i] = new RotatingObject3(700,300,250+i*30);
		MyArray4[i] = new RotatingObject4(700,300,250+i*30);
		MyArray5[i] = new RotatingObject5(700,300,250+i*30);
		MyArray6[i] = new RotatingObject6(700,300,250+i*30);
	}
	angleMode(DEGREES);
	
	pausebutton = createButton("pause");
	pausebutton.position(200,100)
	pausebutton.size(50,35)
	pausebutton.mousePressed(pausesong);
	
	playbutton = createButton("play");
	playbutton.position(200,55)
	playbutton.size(50,35)
	playbutton.mousePressed(playsong);

	slider = createSlider(0,255,120);
	slider.position(340,120);
	slider.size(100,10);
	
}

function draw() {	
	colorMode(RGB,225)
	noStroke();
	fill(0,200,255);
	rect(0,0,1200,400);
	fill(0,255,50);
	rect(0,400,1200,270);
	
Counter = Counter+2;
	if(Counter>1200){
		Counter = cenX-1200;
	}
	
	image(clouds,100+Counter,150,240,200);
	image(clouds,20+Counter,5,200,160);
	image(clouds,450+Counter,5,220,180);
	image(clouds,730+Counter,40,180,140);
	image(clouds,930+Counter,70,240,200);
	
	
	colorMode(HSB,255);	
	stroke(slider.value(),85,255);
	strokeWeight(6);
	line(600,335,670,215); //1 oclock
	line(600,335,730,265); //2 oclock
	line(600,335,750,335); //(0,0) 3
	line(600,335,730,405); //4
	line(600,335,670,455); //5
	line(600,335,600,485); //(0,90) 6
	line(600,335,530,455); //7
	line(600,335,470,405); //8
	line(600,335,450,335); //9
	line(600,335,470,265); //10
	line(600,335,530,215); //11
	line(600,335,600,185); //(0,270) 12
	
	fill(200);
	noStroke();
	ellipse(600,335,40);
	stroke(180);
	strokeWeight(15);
	line(600,340,540,510);
	line(600,340,660,510);
	line(540,510,510,510);
	line(660,510,690,510);

	colorMode(HSB,255);
	strokeWeight(16);
	stroke(slider.value(),85,255);
	noFill();
	ellipse(Cx,Cy,Diameter-10);
	strokeWeight(10);
	ellipse(Cx,Cy,Diameter-120);
		
	for (var i = 0; i < numOfSeats; i++) {
		MyArray[i].UpdateAngle();
		MyArray[i].Move();
		MyArray[i].Display();
		MyArray2[i].UpdateAngle();
		MyArray2[i].Move();
		MyArray2[i].Display();
		MyArray3[i].UpdateAngle();
		MyArray3[i].Move();
		MyArray3[i].Display();
		MyArray4[i].UpdateAngle();
		MyArray4[i].Move();
		MyArray4[i].Display();
		MyArray5[i].UpdateAngle();
		MyArray5[i].Move();
		MyArray5[i].Display();
		MyArray6[i].UpdateAngle();
		MyArray6[i].Move();
		MyArray6[i].Display();
	}	
}
//red cart
function RotatingObject (CentX,CentY,Diam) {
	this.CentX = 600;
	this.CentY = 335;
	this.Ang = 0;
	this.Diam = 150
	this.size = 40;
	this.X = CentX-10;
	this.Y = CentY+15;
	this.X2 = CentX+20;
	this.Y2 = CentY+15;
	this.X3 = CentX+35;
	this.Y3 = CentY-15;
	this.X4 = CentX-25;
	this.Y4 = CentY-15;
	this.Step = .6
	this.Col = color(255,0,0); 
	
	this.UpdateAngle = function() {
		this.Ang = (this.Ang + this.Step)%360	
	}
	
	this.Move = function() {
		angleMode(DEGREES);
		this.X = (this.CentX-10) + this.Diam*cos(this.Ang);
		this.Y = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X2 = (this.CentX+20) + this.Diam*cos(this.Ang);
		this.Y2 = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X3 = (this.CentX+35) + this.Diam*cos(this.Ang);
		this.Y3 = (this.CentY-15) + this.Diam*sin(this.Ang);
		this.X4 = (this.CentX-25) + this.Diam*cos(this.Ang);
		this.Y4 = (this.CentY-15) + this.Diam*sin(this.Ang);
	}
	
	this.Display = function() {
		noStroke();
		fill(this.Col);
		quad(this.X,this.Y,this.X2,this.Y2,this.X3,this.Y3,this.X4,this.Y4);
	}
}
//orange cart
function RotatingObject2 (CentX,CentY,Diam) {
	this.CentX = 600;
	this.CentY = 335;
	this.Ang = 60;
	this.Diam = 150
	this.size = 40;
	this.X = CentX-10;
	this.Y = CentY+15;
	this.X2 = CentX+20;
	this.Y2 = CentY+15;
	this.X3 = CentX+35;
	this.Y3 = CentY-15;
	this.X4 = CentX-25;
	this.Y4 = CentY-15;
	this.Step = .6
	this.Col = color(255,180,0); 
	
	this.UpdateAngle = function() {
		this.Ang = (this.Ang + this.Step)%360	
	}
	
	this.Move = function() {
		angleMode(DEGREES);
		this.X = (this.CentX-10) + this.Diam*cos(this.Ang);
		this.Y = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X2 = (this.CentX+20) + this.Diam*cos(this.Ang);
		this.Y2 = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X3 = (this.CentX+35) + this.Diam*cos(this.Ang);
		this.Y3 = (this.CentY-15) + this.Diam*sin(this.Ang);
		this.X4 = (this.CentX-25) + this.Diam*cos(this.Ang);
		this.Y4 = (this.CentY-15) + this.Diam*sin(this.Ang);
	}
	
	this.Display = function() {
		noStroke();
		fill(this.Col);
		quad(this.X,this.Y,this.X2,this.Y2,this.X3,this.Y3,this.X4,this.Y4);
	}
}
//yellow cart
function RotatingObject3 (CentX,CentY,Diam) {
	this.CentX = 600;
	this.CentY = 335;
	this.Ang = 120;
	this.Diam = 150
	this.size = 40;
	this.X = CentX-10;
	this.Y = CentY+15;
	this.X2 = CentX+20;
	this.Y2 = CentY+15;
	this.X3 = CentX+35;
	this.Y3 = CentY-15;
	this.X4 = CentX-25;
	this.Y4 = CentY-15;
	this.Step = .6
	this.Col = color(255,255,0); 
	
	this.UpdateAngle = function() {
		this.Ang = (this.Ang + this.Step)%360	
	}
	
	this.Move = function() {
		angleMode(DEGREES);
		this.X = (this.CentX-10) + this.Diam*cos(this.Ang);
		this.Y = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X2 = (this.CentX+20) + this.Diam*cos(this.Ang);
		this.Y2 = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X3 = (this.CentX+35) + this.Diam*cos(this.Ang);
		this.Y3 = (this.CentY-15) + this.Diam*sin(this.Ang);
		this.X4 = (this.CentX-25) + this.Diam*cos(this.Ang);
		this.Y4 = (this.CentY-15) + this.Diam*sin(this.Ang);
	}
	
	this.Display = function() {
		noStroke();
		fill(this.Col);
		quad(this.X,this.Y,this.X2,this.Y2,this.X3,this.Y3,this.X4,this.Y4);
	}
}
//green
function RotatingObject4 (CentX,CentY,Diam) {
	this.CentX = 600;
	this.CentY = 335;
	this.Ang = 180;
	this.Diam = 150
	this.size = 40;
	this.X = CentX-10;
	this.Y = CentY+15;
	this.X2 = CentX+20;
	this.Y2 = CentY+15;
	this.X3 = CentX+35;
	this.Y3 = CentY-15;
	this.X4 = CentX-25;
	this.Y4 = CentY-15;
	this.Step = .6
	this.Col = color(0,200,0); 
	
	this.UpdateAngle = function() {
		this.Ang = (this.Ang + this.Step)%360	
	}
	
	this.Move = function() {
		angleMode(DEGREES);
		this.X = (this.CentX-10) + this.Diam*cos(this.Ang);
		this.Y = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X2 = (this.CentX+20) + this.Diam*cos(this.Ang);
		this.Y2 = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X3 = (this.CentX+35) + this.Diam*cos(this.Ang);
		this.Y3 = (this.CentY-15) + this.Diam*sin(this.Ang);
		this.X4 = (this.CentX-25) + this.Diam*cos(this.Ang);
		this.Y4 = (this.CentY-15) + this.Diam*sin(this.Ang);
	}
	
	this.Display = function() {
		noStroke();
		fill(this.Col);
		quad(this.X,this.Y,this.X2,this.Y2,this.X3,this.Y3,this.X4,this.Y4);
	}
}
//blue
function RotatingObject5 (CentX,CentY,Diam) {
	this.CentX = 600;
	this.CentY = 335;
	this.Ang = 240;
	this.Diam = 150
	this.size = 40;
	this.X = CentX-10;
	this.Y = CentY+15;
	this.X2 = CentX+20;
	this.Y2 = CentY+15;
	this.X3 = CentX+35;
	this.Y3 = CentY-15;
	this.X4 = CentX-25;
	this.Y4 = CentY-15;
	this.Step = .6
	this.Col = color(0,0,255); 
	
	this.UpdateAngle = function() {
		this.Ang = (this.Ang + this.Step)%360	
	}
	
	this.Move = function() {
		angleMode(DEGREES);
		this.X = (this.CentX-10) + this.Diam*cos(this.Ang);
		this.Y = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X2 = (this.CentX+20) + this.Diam*cos(this.Ang);
		this.Y2 = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X3 = (this.CentX+35) + this.Diam*cos(this.Ang);
		this.Y3 = (this.CentY-15) + this.Diam*sin(this.Ang);
		this.X4 = (this.CentX-25) + this.Diam*cos(this.Ang);
		this.Y4 = (this.CentY-15) + this.Diam*sin(this.Ang);
	}
	
	this.Display = function() {
		noStroke();
		fill(this.Col);
		quad(this.X,this.Y,this.X2,this.Y2,this.X3,this.Y3,this.X4,this.Y4);
	}
}
//purple
function RotatingObject6 (CentX,CentY,Diam) {
	this.CentX = 600;
	this.CentY = 335;
	this.Ang = 300;
	this.Diam = 150
	this.size = 40;
	this.X = CentX-10;
	this.Y = CentY+15;
	this.X2 = CentX+20;
	this.Y2 = CentY+15;
	this.X3 = CentX+35;
	this.Y3 = CentY-15;
	this.X4 = CentX-25;
	this.Y4 = CentY-15;
	this.Step = .6
	this.Col = color(190,0,225); 
	
	this.UpdateAngle = function() {
		this.Ang = (this.Ang + this.Step)%360	
	}
	
	this.Move = function() {
		angleMode(DEGREES);
		this.X = (this.CentX-10) + this.Diam*cos(this.Ang);
		this.Y = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X2 = (this.CentX+20) + this.Diam*cos(this.Ang);
		this.Y2 = (this.CentY+15) + this.Diam*sin(this.Ang);
		this.X3 = (this.CentX+35) + this.Diam*cos(this.Ang);
		this.Y3 = (this.CentY-15) + this.Diam*sin(this.Ang);
		this.X4 = (this.CentX-25) + this.Diam*cos(this.Ang);
		this.Y4 = (this.CentY-15) + this.Diam*sin(this.Ang);
	}
	
	this.Display = function() {
		noStroke();
		fill(this.Col);
		quad(this.X,this.Y,this.X2,this.Y2,this.X3,this.Y3,this.X4,this.Y4);
	}
}

function pausesong(){
	pausebutton.mousePressed = song.pause();
	}
function playsong(){
	playbutton.mousePressed = song.play();
}
