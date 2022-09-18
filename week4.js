let cx = 250;
let cy = 250;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(220);
  logoBG();
  radialGdt();
  shadowX();
  bigX();
  logoText("DESIGN","STUDIO")
}

function logoBG(){
  fill(40);
  strokeWeight(0);
  rect(25, 25, 450, 450);
}

function radialGdt(){
  strokeWeight(0);
  fill('rgba(207,255,175,0.2)');
  circle(cx, cy, 450);
  circle(cx, cy, 315);
  circle(cx, cy, 225);
  fill('rgba(207,255,175,1)');
  circle(cx, cy, 135);
}

function shadowX(){
  fill('#ADE25D');
  strokeWeight(0);
  triangle(250, 230, 25, 25, 475, 25);
  triangle(230, 250, 25, 25, 25, 475);
  triangle(250, 270, 475, 475, 25, 475);
  triangle(270, 250, 475, 475, 475, 25);
}

function bigX(){
  fill(20);
  strokeWeight(0);
  triangle(250, 215, 25, 25, 475, 25);
  triangle(215, 250, 25, 25, 25, 475);
  triangle(250, 285, 475, 475, 25, 475);
  triangle(285, 250, 475, 475, 475, 25);
}

function logoText(name1,name2){
  textAlign(CENTER, CENTER);
  textSize(28);
  fill('#3B7080');
  text(name1, 110, 253);
  text(name2, 390, 253);
  textStyle(BOLD);
  fill('#FCEC52');
  text(name1, 110, 250);
  text(name2, 390, 250);
}