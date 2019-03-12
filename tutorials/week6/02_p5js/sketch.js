// var font;
//
// function preload() {
//   font = loadFont('yourFontFile.otf');
// }

// More Reference:
// https://p5js.org/reference/#group-Typography

function setup() {
  createCanvas(500, 500);
  textSize(width / 5);
  textAlign(CENTER, CENTER);
  textFont('Futura'); //textFont(font)
}

function draw() {
  // background(200);
  background('rgba(255,255,255, 0.1)');
  color(255,255,255,.9)
  rect(500,500)
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 500, 40));
  fill(0, random(0,255), 153);
  text('wow', 10, 60);
}
