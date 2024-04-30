
let font, points=[], r=10, angle = 0;

function preload(){
  font = loadFont("Apricots-Regular.ttf");
}

function setup() {
  createCanvas(800, 400);
  frameRate(5);
 points = font.textToPoints("KW", 50, 300, 300,  {sampleFactor: .6}
)
 print(points);
}

function draw() {
  background(203, 195, 227);
  //text('hello', 10, 50);
  stroke(195, 177, 225)
  for(let i = 0; i < points.length; i++){
    //ellipse(points[i].x, points[i].y, 10, 10)
    ellipse(points[i].x + r * sin(angle + i*25), points[i].y, 10, 10)

  }

  angle += 10;
}
