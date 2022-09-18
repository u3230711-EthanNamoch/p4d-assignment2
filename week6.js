//OBJECT MYTRAIL FOR DRAWING HISTORY
let myTrail = {};
myTrail.history = [];

//STUDNAME STRING FOR KEYCODE INPUT
let studName = "";

//VARIABLE TO MATCH ASCII VALUE WITH KEY ARRAY
let sel;

//KEY ARRAY FOR ASCII CONVERSION
let key = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//STUDTITLE ARRAY FOR STUDIO TITLES
let studTitle = ['DESIGN STUDIO',
                'MEDIA LAB',
                'CREATIVES',
                'PRODUCTIONS',
                'DESIGN LABS',
                'ARTISTRY',
                'DESIGN SOLUTIONS',
                'AD AGENCY',
                'COLLECTIVE',
                'MEDIA AGENCY'];

//TITLE COUNTER FOR ARROW KEY PRESS AND ARRAY SELECTOR
let tCounter = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  background(220);
}

function draw() {
  
  logoBG();
  
  //DRAWING TRAIL USING THE OBJECT MYTRAIL
  for(let i=0; i < myTrail.history.length; i=i+1){
    let curPos = myTrail.history[i];
    fill('rgba(207,255,175,1)');
    circle(curPos.x+5, curPos.y+5, 10);
    fill('#ADE25D');
    circle(curPos.x, curPos.y, 15);
  }
  
  //STUDIO NAME
  textAlign(CENTER, CENTER);
  textSize(60);
  textStyle(BOLD);
  fill('#3B7080');
  text(studName, 250, 193);
  fill('#FCEC52');
  text(studName, 250, 185);
  
  //STUDIO TITLE
  textAlign(CENTER, CENTER);
  textSize(29);
  textStyle(BOLD);
  fill('#3B7080');
  text(studTitle[tCounter], 250, 253);
  fill('#30B2DA');
  text(studTitle[tCounter], 250, 250);
  
  borderCover();
  
  instructionGuide();
  
}

function logoBG(){
  fill(40);
  strokeWeight(0);
  rect(25, 25, 450, 450);
}

function borderCover(){
  fill(220);
  strokeWeight(0);
  rect(0, 0, 500, 75);
  rect(0, 0, 25, 500);
  rect(475, 0, 25, 500);
  rect(0, 325, 500, 200);
}

function instructionGuide(){
  textAlign(CENTER, CENTER);
  textSize(33);
  textStyle(BOLD);
  fill(40);
  text("STUDIO LOGO GENERATOR", 250, 30);
  
  let desc = "Try creating your own Studio Logo with the instructions below!";
  textSize(15);
  textStyle(NORMAL);
  text(desc, 250, 58);
  
  let inst = [];
  let inDes = [];
  
  inst[0] = "DRAW!";
  inst[1] = "TYPE!";
  inst[2] = "SELECT!";
  
  inDes[0] = "Click and Drag your mouse over the canvas to draw some elements.";
  inDes[1] = "Name your design studio by typing letters - max 8 letters. (no spaces)";
  inDes[2] = "Choose a premade title for your studio with the up and down arrow keys.";
  
  let lsp=0;
  for(let a=0; a<3; a=a+1){
    
    textAlign(LEFT, CENTER);
    textSize(29);
    textStyle(BOLD);
    fill('#3B7080');
    text(inst[a], 25, 380 + lsp);
  
    textAlign(LEFT, CENTER);
    textSize(10);
    textStyle(NORMAL);
    fill(40);
    text(inDes[a], 155, 380 + lsp);
    
    lsp = lsp + 30;
  }
}

//INPUT EVENT FUNCTIONS

function mouseDragged(){
  let v = createVector(mouseX,mouseY);
  myTrail.history.push(v);
}

function keyPressed(){
  
  if(keyCode === UP_ARROW){
    if(tCounter == 9){
      tCounter = 0;
    }else{
      tCounter++;
    }
  }else if(keyCode === DOWN_ARROW){
    if(tCounter == 0){
      tCounter = 9;
    }else{
      tCounter--;
    }
  }
  
  //STRING CONCATENATION WHEN LETTER KEYS ARE PRESSED
  if(keyCode >= 65 && keyCode <= 90){
    if(studName.length < 8){
      sel = keyCode - 65;
      studName = studName + key[sel];
    }
  }
  
  //STRING SUBSTRING METHOD FOR BACKSPACE
  if(keyCode == 8){
     studName = studName.substr(0,studName.length-1);
  }
  
}