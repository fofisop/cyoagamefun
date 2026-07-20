/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let bgColor = "black";
let dramaColor = "#C62121";
let btnColor = "#4f4537";
let textColor = btnColor;
let btnTextColor = "#F5B937";

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(800, 600);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background(bgColor);
  fill (textColor);
  text(
    "Welcome to the Virtual (and short) Hunger Games! Make decisions, and discover your fate... you can't back out now!",
    
    
    width / 2 -300,
    height / 2 - 200,600
  
);
 ``
showShapes();

  // Create buttons for all screens
enterButton = new Sprite (width/2, height/2 +100);
a1Button = new Sprite (-200,-200);
a2Button = new Sprite (-50, -50);
b1Button = new Sprite (-100,-100);
b2Button = new Sprite (-150,-150);



}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
   fill("#F5B937");
enterButton.w = 100;
enterButton.h = 50;
enterButton.collider = "k";
enterButton.color = btnColor;
enterButton.text = "Enter"
enterButton.textColor = btnTextColor;
;


  
  // Check enter button
if(enterButton.mouse.presses())
{
  print("Pressed");
showScreen1();
screen = 1;

}
if(screen == 1){
  if(a1Button.mouse.presses()){
    showScreen2();
      
    screen = 2;
  }else if(a2Button.mouse.presses()){
    showScreen5();
     screen = 5;
}
}else if(screen == 2) {

  if (b1Button.mouse.presses()){
    showScreen3();
    screen = 3;
  
  }else if (b2Button.mouse.presses()){
    showScreen4();
    screen = 4;

  }
}
print("Display screen 2")}

/* FUNCTIONS TO DISPLAY SCREENS */

function showScreen1(){
background(bgColor)
  text("Welcome to screen 1. Make your first choice.",
  width / 2 -300,
    height / 2 - 200,600);
  enterButton.pos= {x:-100, y: -100};

    // Add A1 button
  a1Button.pos = {x: width/2-50, y: height/2 +100};
  a1Button.w = 50;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = btnColor;
  a1Button.text = "A1"
  a1Button.textColor = btnTextColor;


  // Add A2 button
  a2Button.pos = {x: width/2+50, y: height/2 +100};
a2Button.w = 50;
a2Button.h = 50;
a2Button.collider = "k";
a2Button.color = btnColor;
a2Button.text = "a2"
a2Button.textColor = btnTextColor;

showShapes();
}
function showScreen2(){
  
   background(bgColor);
     text(
    "Welcome to screen 2. Make your second choice.",
    width / 2 -300,
    height / 2 - 200,600
  );
  
  showShapes();
  
  a1Button.pos = { x: -200, y: -200 };
     a2Button.pos = { x: -50, y: -50 };

  b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
     b1Button.w = 50;
     b1Button.h = 50;
     b1Button.collider = "k";
     b1Button.color = btnColor;
     b1Button.text = "B1";
     b1Button.textColor = btnTextColor;

      b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
       b2Button.collider = "k";
     b2Button.color = btnColor;
     b2Button.text = "B2";
     b2Button.w = 50;
     b2Button.h = 50;
     b2Button.textColor = btnTextColor;
     showShapes();
}
function showScreen3(){
  
   background(bgColor);
     text("You hit an end point at Screen 3.", width / 2 -300,
    height / 2 - 200,600);
     showShapes();
     b1Button.pos = { x: -100, y: -100}
     b2Button.pos = {x: -150, y: -150 }
showShapes();
}
function showScreen4(){
   background(dramaColor);
     text("You hit an end point at Screen 4.", width / 2 -300,
    height / 2 - 200,600);
     
     b1Button.pos = { x: -100, y: -100}
     b2Button.pos = {x: -150, y: -150 }
}
function showScreen5(){
 background(dramaColor);
     text("You hit an end point at Screen 5.", width / 2 -300,
    height / 2 - 200,600);
  
   a1Button.pos = { x: -200, y: -200 };
     a2Button.pos = { x: -50, y: -50 };
}
function showShapes(){
  push();
   translate(width / 2, height / 2); 
  noFill();
  stroke(230, 160, 40); 
  strokeWeight(8);
  circle(0, 0, 240);
  strokeWeight(6);
  line(120, -120, -120, 120);
  fill("#F5B937");
  noStroke();
  triangle(-130, 130, -110, 100, -100, 110);
  circle(-35, 25, 25); 
triangle(-42, 18, -30, 32, -60, 45);
 circle(-5, -5, 50);
 triangle(-5, -30, 75, -60, 15, -5); 
 triangle(-25, 5, -75, -75, -15, -15);
 pop();
}