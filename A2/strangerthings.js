function preload(){
  timeFont = loadFont('assets/Benguiat Bk BT.ttf');
  wordFont = loadFont('assets/KGLifeisMessy.ttf');
}

function setup() {
  createCanvas(1907, 957);
  frameRate(1);
}

function draw() {
  noStroke();  
  background('#302720');
  drawGradient();
  drawWords();

  var s = second();
  var m = minute();
  var h = hour();

  textFont(timeFont);
  textSize(60);
  stroke('#FF0D13');
  strokeWeight(7);
  fill('#403025');
  text(+h+':'+m+':'+s, 800, 60);  
}

function drawWords() {
  var x = 120;
  var y = 270;
  for (var i = 1; i < 61; i++) {
    textSize(80);
    fill('#000000');
    textFont(wordFont);
    text(i, x, y);
    x = x + 140;
    if (x > width - 120) {
      x = 120;
      y = y + 170;
    }
  }
}

function drawGradient() {
  var x_radius = width*1.3;
  var y_radius = height*1.3;

  colorMode(RGB);
  var c1 = color(163, 107, 68);
  var c2 = color(48, 39, 32);
  jump = 1;
  var colour = lerpColor(c1, c2, jump);

  while(c1['_array'][0] != colour['_array'][0] && c1['_array'][1] != colour['_array'][1] && c1['_array'][2] != colour['_array'][2]) {
    fill(colour, 50);
    ellipse(953, 478, x_radius, y_radius);
    jump = jump - 0.001;
    colour = lerpColor(c1, c2, jump);
    x_radius = x_radius - (x_radius*0.0025);
    y_radius = y_radius - (y_radius*0.0025);
  }
}
