function setup() {
  createCanvas(1907, 957);
}

function draw() {
  background('#F4F4F4');
  noStroke();

  var sec = second();
  var min = minute();
  var hr = hour();
  textSize(45);
  text(hr+":"+min+":"+sec, 20, 45);

  fill('#DCD0C0');
  rect(150, 50, map(hr, 0, 24, 1, 1200), map(min, 0, 60, 0, 600));

  push();
  angleMode(DEGREES);
  rotate(map(min/10, 0, 60, 0, 360));
  fill('#373737');
  ellipse(700, 300, 700, 400); 
  pop(); 

  translate(sec*2, sec*2);
  fill('#C0B283');
  text("The Martin Agency", 510, 350);
}