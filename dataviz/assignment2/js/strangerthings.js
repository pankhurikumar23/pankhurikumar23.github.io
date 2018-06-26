x_hour = [], y_hour = [];
x_minute = [], y_minute = [];
x_second = [], y_second = [];

function preload(){
  timeFont = loadFont('assets/Benguiat Bk BT.ttf');
  wordFont = loadFont('assets/KGLifeisMessy.ttf');
}

function setup() {
  createCanvas(1907, 957);
  frameRate(1);  
  background('#563E2C');

  //Display text while preload() runs
  textFont(timeFont);
  textSize(60);
  stroke('#FF0D13');
  strokeWeight(7);
  fill('#563E2C');
  text("LOADING...", 780, 450);

  //calculating distance between light bulbs
  x_hour[0] = 110;
  y_hour[0] = 175;

  for (var i = 1; i < 60; i++) {
    x_hour[i] = x_hour[i-1] + 145;
    y_hour[i] = y_hour[i-1];
    if (x_hour[i] > width - 120) {
      x_hour[i] = 110;
      y_hour[i] = y_hour[i-1] + 170;
    }
  }

  for (var i = 0; i < 60; i++) {
    x_minute[i] = x_hour[i] + 25;
    y_minute[i] = y_hour[i];

    x_second[i] = x_hour[i] + 50;
    y_second[i] = y_hour[i];
  }
}

function draw() {
  noStroke();

  var s = second();
  var m = minute();
  var h = hour();

  //setting up background
  drawGradient();
  drawWords();
  drawTime(h, m, s);
  drawLights();

  //adding time animation
  strokeWeight(4);

  stroke('#CBCE40');
  fill('#FFE74F');
  ellipse(x_second[s], y_second[s], 30, 35);

  stroke('#FDD02D');
  fill('#FFBB16');
  ellipse(x_minute[m], y_minute[m], 30, 35);

  fill('#FF7B00');
  stroke('#FF9E00');
  ellipse(x_hour[h], y_hour[h], 30, 35);

}

//The three light bulbs above each number - distance calculated at setup()
function drawLights() {
  stroke('black');
  strokeWeight(1);
  noFill();

  for(var i = 0; i < 24; i++) {
    ellipse(x_hour[i], y_hour[i], 30, 35);
  }

  for (var i = 0; i < 60; i++) {
    // text("H", 110, 175);
    ellipse(x_minute[i], y_minute[i], 30, 35);
    ellipse(x_second[i], y_second[i], 30, 35);
  }
}

//Time on the Top
function drawTime(h, m, s) {
  textFont(timeFont);
  textSize(80);
  stroke('#FF0D13');
  strokeWeight(7);
  fill('#62442F');
  text(+h+':'+m+':'+s, 740, 100);  
}

//Wall Numbers
function drawWords() {
  var x = 120;
  var y = 270;
  for (var i = 0; i < 60; i++) {
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

//Background Gradient Wallpaper
function drawGradient() {
  var x_radius = width*1.3;
  var y_radius = height*1.3;

  colorMode(RGB);
  var c1 = color(163, 107, 68);
  var c2 = color(86, 62, 44);

  //set colour to c2
  jump = 1;
  var colour = lerpColor(c1, c2, jump);

  //loop through all colours till you hit c1, draw ellipses with each colour creating a gradient
  while(c1['_array'][0] != colour['_array'][0] && c1['_array'][1] != colour['_array'][1] && c1['_array'][2] != colour['_array'][2]) {
    fill(colour, 50);
    ellipse(953, 478, x_radius, y_radius);
    jump = jump - 0.001;
    colour = lerpColor(c1, c2, jump);
    x_radius = x_radius - (x_radius*0.0025);
    y_radius = y_radius - (y_radius*0.0025);
  }
}
