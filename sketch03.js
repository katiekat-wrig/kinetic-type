
let font, points=[];

function preload(){
  font = loadFont("Apricots-Regular.ttf");
}

function setup() {
  createCanvas(800, 400);
 points = font.textToPoints("PCC", 50, 300, 300)
 print(points);
}

function draw() {
  background(220);
  //text('hello', 10, 50);
  for(let i = 0; i < points.length; i++){
    rect(points[i].x, points[i].y, 10, 10)
  }
}
