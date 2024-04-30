let font, points={};

function preload(){
  font = loadFont("Apricots-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
 points = font.textToPoints("KW", 50, 200, 300)
 print(points);
}

function draw() {
  background(220);
  text('hello', 10, 50);
}
