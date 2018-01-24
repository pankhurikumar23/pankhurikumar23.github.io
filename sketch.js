function setup() {
  createCanvas(1500, 700);
}

function draw() {
  background('#F4F4F4');
  fill('#DCD0C0');
  rect(150, 50, 1200, 600);
  fill('#373737');
  ellipse(750, 350, 700, 400);
  fill('#C0B283');
  textSize(45);
  text("Palette borrowed from", 500, 320);
  textFont('Georgia');
  text("The Martin Agency", 535, 380)
}