let tri; //AQUI EM DIU QUE JA S'HA DECLARAT ANTERIORMENT, QUAN NO S'HA FET
let lin; //EL MATEIX PASSA AMB LINEA
let bol;
let colorIndex;

//Si es comenten, o bé funciona el meu codi del triangle, o bé la camara de handsfree, pero de moment mai funcionen tots 2 alhora
var px1,px2,px3,py1,py2,py3;

function setup() {
  
  px1 = py1 = random(0,300);
  px2 = py2 = random(0,200);
  px3 = random(0,150);
  py3 = random(0,300);
  tri = new Triangle(px1,py1,px2,py2,px3,py3,2,2,3,3,4,4);
  bol = new Bola(width/2, height/2,20,20);
  lin = new Linea(px1,py1,0,0);
  
  createCanvas(600,300);
  sketch = createCanvas(640, 480);

  //Use capture from p5js
  capture = createCapture(VIDEO);
  capture.hide();


  handsfree = new Handsfree({
    hands: true,
    setup: {
      video: {
        $el: capture.elt,
      },
    },
  });

  
  buttonStart = createButton("Start Webcam");
  buttonStart.class("handsfree-show-when-stopped");
  buttonStart.class("handsfree-hide-when-loading");
  buttonStart.mousePressed(() => handsfree.start());

  // Create a "loading..." button
  buttonLoading = createButton("...loading...");
  buttonLoading.class("handsfree-show-when-loading");

  // Create a stop button
  buttonStop = createButton("Stop Webcam");
  buttonStop.class("handsfree-show-when-started");
  buttonStop.mousePressed(() => handsfree.stop());
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

function changeColor(){
  switch(colorIndex){
    case 1:
      bw();
      break;
      
    case 2:
      colorM();
      break;
      
    case 3:
      inverseColor();
      break;
  }
}

function drawTriangleMove(){ 
  tri.moveTriangle();
  triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3);
  
  for(let i=0; i<50;i++){
    ellipse(bol.x, bol.y,i,i);
  }
  
  line(bol.x,bol.y,tri.x1,tri.y1);
  line(bol.x,bol.y,tri.x2,tri.y2);
  line(bol.x,bol.y,tri.x3,tri.y3);
  
}


function mydrawCaptureCameraEffect(){
  push();
  imageMode(CENTER);
  translate(width, 0);
  scale(-1, 1);
  image(capture, width * 0.5, height * 0.5, width, height);
  stroke(0);
  drawTriangleMove();
  pop();
}


function draw() {
  background(220);
  
  changeColor();
  fingerPaint();
  mydrawCaptureCameraEffect();

}


function fingerPaint() {
  
  // Check for pinches and create dots if something is pinched
  const hands = handsfree.data?.hands;
  
  if (hands?.pinchState) { //same as hands?.pinchState!=null
    
    // Loop through each hand
    hands.pinchState.forEach((hand, handIndex) => {
      // Loop through each finger
      hand.forEach((state, finger) => {
        // Other states are "start" and "released"
        if (state === "held") {
          if(handIndex !==0 && finger==0){
            bol.x = hands.curPinch[handIndex][finger].x * width;
            bol.y = hands.curPinch[handIndex][finger].y * height;
          } else if (handIndex !==0 && finger==0){
            backgr
          }
        } 
        else if (state == "start"){
          if(handIndex !==1 && finger==0){
            colorIndex = 1;
          } else if(handIndex !==1 && finger==1){
            colorIndex = 2;
          } else if(handIndex !==1 && finger==2){
            colorIndex = 3;
          }
        }
      });
    });
  }
}