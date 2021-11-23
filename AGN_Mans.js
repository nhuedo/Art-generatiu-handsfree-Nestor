class Linea {
  constructor(x,y,x1,y1){
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
  }
}

//let tri; 
//let lin = new Linea();
let bol; 

var r,g,b;
var iR, iG, iB;
var px1,px2,px3,py1,py2,py3;
var bw;

function setup() {
  createCanvas(600, 300);
  background(100);

  px1 = random(0,300);
  py1 = random(0,300);
  
  px2 = random(0,200);
  py2 = random(0,200);
  
  px3 = random(0,150);
  py3 = random(0,300);

  tri = new Triangle(px1,py1,px2,py2,px3,py3,2,2,3,3,4,4);
  bol = new Bola(tri.x1, tri.y1,20,20);

  
}

function draw() {
  background(iR,iG,iB);;

  lin.x1 = tri.x1;
  lin.y1 = tri.y1;
  lin.x = width/2;
  lin.y = 0;

  /////////////////////// MAIN TRIANGLE //////////////////
  tri.moveTriangle();
  
  ////////////////////////////////////////////////////////////


  
  triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3);
  
  for(let i=0; i<50;i++){
    ellipse(bol.x, bol.y,i,i);
  }
  
  line(bol.x,bol.y,tri.x1,tri.y1);
  line(bol.x,bol.y,tri.x2,tri.y2);
  line(bol.x,bol.y,tri.x3,tri.y3);
    
}

  

function bw(){
  r= random(0,255);
  g=r;
  b=g;
  fill(r,g,b);
}

function colorM(){
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  fill(r,g,b);
}

function inverseColor(){
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  iR = g;
  iG = b;
  iB = r;
}

