let font;

function preload(){
  font = loadFont("Apricots-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  fill('purple');
  textSize(36);
  textFont(font);
}

function draw() {
  background(220);
  text('hello', 10, 50);
}
