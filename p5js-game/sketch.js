/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(800, 600);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("pink");
  text(
    "Welcome to screen 0. This is the home screen.",
    width / 2,
    height / 2 - 100
  );

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

enterButton.w = 100;
enterButton.h = 50;
enterButton.collider = "k";
enterButton.color = "plum";
enterButton.text = "Enter"
;


  
  // Check enter button
if(enterButton.mouse.presses())
{
  print("Pressed");
  background("paleturquoise")
  text("Welcome to screen 1. Make your first choice.",
  width/2,
  height/2 -100);
  enterButton.pos= {x:-100, y: -100};

    // Add A1 button
  a1Button.pos = {x: width/2-50, y: height/2 +100};
  a1Button.w = 50;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "plum";
  a1Button.text = "A1"


  // Add A2 button
  a2Button.pos = {x: width/2+50, y: height/2 +100};
a2Button.w = 50;
a2Button.h = 50;
a2Button.collider = "k";
a2Button.color = "plum";
a2Button.text = "a2"
screen = 1;

}
if(screen == 1){
  if(a1Button.mouse.presses()){
    background.color = "palegreen";
    
    screen = 2;

  }else if(a2Button.mouse.presses()){
    screen = 5;

  }
}

print("Display screen 2")}

/* FUNCTIONS TO DISPLAY SCREENS */

