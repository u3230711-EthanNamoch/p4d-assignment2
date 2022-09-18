let cx = 250;
let cy = 250;

let cs = 0;
let circMove = 'big';

let dm = 0;
let designMove = 'up';

let sm = 0;
let studioMove = 'down';

function setup() {
  createCanvas(500, 500);
  frameRate(60);
}

function draw() {
  
  if (circMove == 'small'){
    cs = cs - 30;
    if (cs == 0){
      circMove = 'big';
    }
  } else{
    cs = cs + 2;
    if (cs == 300){
      circMove = 'small';
    }
  }
  
  if (designMove == 'down'){
    dm = dm - 0.5;
    if (dm == 0){
      designMove = 'up';
    }
  } else{
    dm = dm + 0.5;
    if (dm == 50){
      designMove = 'down';
    }
  }
  
  if (studioMove == 'up'){
    sm = sm - 0.5;
    if (sm == 0){
      studioMove = 'down';
    }
  } else{
    sm = sm + 0.5;
    if (sm == 50){
      studioMove = 'up';
    }
  }
  
  background(220);
  logoBG();
  radialGdt(cs); 
  shadowX();
  bigX();
  logoText(dm,sm);
  borderCover();
  
}

function logoBG(){
  fill(40);
  strokeWeight(0);
  rect(25, 25, 450, 450);
}

function radialGdt(addSize){
  let a = 0;
  let cSize = 495;
  let cOp = 0.2;
  while (a < 5)
  {
    strokeWeight(0);
    fill('rgba(207,255,175,'+ cOp +')');
    circle(cx, cy, cSize + addSize);
    cOp = cOp + 0.2;
    cSize = cSize - 90;
    a = a + 1   
  }
}

function shadowX(){
  
  let b;
  let triShadow = [250,230,25,25,475,25,
                   230,250,25,25,25,475,
                   250,270,475,475,25,475,
                   270,250,475,475,475,25];
  
  for (b=0; b<24; b=b+6){
    fill('#ADE25D');
    strokeWeight(0);
    triangle(triShadow[b],
             triShadow[b+1],
             triShadow[b+2],
             triShadow[b+3],
             triShadow[b+4],
             triShadow[b+5]);
  }
  
}

function bigX(){
  
  let c;
  let triMain = [250, 215, 25, 25, 475, 25,
                 215, 250, 25, 25, 25, 475,
                 250, 285, 475, 475, 25, 475,
                 285, 250, 475, 475, 475, 25];
  
  for (c=0; c<24; c=c+6){
    fill(20);
    strokeWeight(0);
    triangle(triMain[c],
             triMain[c+1],
             triMain[c+2],
             triMain[c+3],
             triMain[c+4],
             triMain[c+5]);
  }
}

function logoText(dAnim,sAnim){
  let name = ['DESIGN','STUDIO']
  textAlign(CENTER, CENTER);
  textSize(28);
  fill('#3B7080');
  text(name[0], 110, 253 - dAnim);
  text(name[1], 390, 253 + sAnim);
  textStyle(BOLD);
  fill('#FCEC52');
  text(name[0], 110, 250 - dAnim);
  text(name[1], 390, 250 + sAnim);
}

function borderCover(){
  fill(220);
  strokeWeight(0);
  rect(0, 0, 500, 25);
  rect(0, 0, 25, 500);
  rect(475, 0, 25, 500);
  rect(0, 475, 500, 25);
}