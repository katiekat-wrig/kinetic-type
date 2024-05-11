//Kat Wright
//DMA 062
//Spring 2024

let font, points = [],
  r = 10,
  angle = 0;
let colorMap = {
  'r': [237, 104, 104], // Red
  'o': [243, 164, 112], // Orange
  'y': [241, 220, 101], // Yellow
  'g': [107, 241, 101], // Green
  'b': [101, 111, 241], // Blue
  'p': [196, 140, 243] // Purple
};
let currentColor = [255, 0, 0]; // Initial color

function preload() {
  font = loadFont("Apricots-Regular.ttf");
}

function setup() {
  createCanvas(800, 400);
  frameRate(5);
  points = font.textToPoints("KW", 175, 300, 300, {
    sampleFactor: .6
  });
  print(points);
}

function draw() {
  //background(203, 195, 227);
  background(33, 33, 33);
  stroke(currentColor);
  for (let i = 0; i < points.length; i++) {
    ellipse(points[i].x + r * sin(angle + i * 25), points[i].y, 10, 10);
  }
  angle += 10;
}

function keyPressed() {
  if (key in colorMap) {
    currentColor = colorMap[key];
  }
}
