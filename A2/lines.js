function setup() {
  createCanvas(1007, 957);
  frameRate(1);
}

function draw() {
	background('#D8A0AE');
	reset(60, 800);
	reset(60, 450);
	reset(24, 100);

	var s = second();
	var m = minute();
	var h = hour();

	fill('#F2F1ED');
	noStroke();
	textSize(45);
	text(s, 720, 45);
	text(m, 330, 45);
	text(h, 20, 45);

	textSize(15);
	text('seconds', 720, 75);
	text('minutes', 330, 75);
	text('hours', 20, 75);

	for (var i = 0; i < s; i++) {
		drawTime(i, '#EE4C7C', 60, 800, height/60);
	}

	for (var i = 0; i < m; i++) {
		drawTime(i, '#9A1750', 60, 450, height/60);
	}

	for (var i = 0; i < h; i++) {
		drawTime(i, '#5D001E', 24, 100, height/24);
	}

	if (s == 0) {reset(60, 800);}
	if (m == 0) {reset(60, 450);}
	if (h == 0) {reset(24, 100);}

}

function drawTime(i, color, original_max, starting_point, s_dist) {
	stroke(color);
	strokeWeight(5);
  line(starting_point, (i+1)*s_dist, starting_point+100, (i+1)*s_dist);
}

function reset(max_value, starting_point) {
  var s_dist = height/max_value;
  stroke('#E3E2DF');
  strokeWeight(2);
  for (var i = 0; i < max_value; i++) {
  	line(starting_point, (i+1)*s_dist, starting_point+100, (i+1)*s_dist);
  }
}