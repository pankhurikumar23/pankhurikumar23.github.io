function setup() {
  createCanvas(1007, 957);
  frameRate(1);
}

function draw() {
	background('#1A1A1D');
	reset(60, 800);
	reset(60, 450);
	reset(24, 100);

	var s = second();
	var m = minute();
	var h = hour();

	// display time next to lines
	fill('#6B6B6D');
	noStroke();
	textSize(45);
	text(s, 720, 45);
	text(m, 330, 45);
	text(h, 20, 45);

	textSize(15);
	text('seconds', 720, 75);
	text('minutes', 330, 75);
	text('hours', 20, 75);

	// re-draw lines with colour based on time
	for (var i = 0; i < s; i++) {
		drawTime(i, '#C3073F', 60, 800, height/60);
	}

	for (var i = 0; i < m; i++) {
		drawTime(i, '#950740', 60, 450, height/60);
	}

	for (var i = 0; i < h; i++) {
		drawTime(i, '#6F2232', 24, 100, height/24);
	}

	//re-draw white lines for boundary conditions
	if (s == 0) {reset(60, 800);}
	if (m == 0) {reset(60, 450);}
	if (h == 0) {reset(24, 100);}

}

//draws coloured lines based on time
function drawTime(i, color, original_max, starting_point, s_dist) {
	stroke(color);
	strokeWeight(5);
  	line(starting_point, (i+1)*s_dist, starting_point+100, (i+1)*s_dist);
}

//redraw white lines if s, m or h is zero
function reset(max_value, starting_point) {
  var s_dist = height/max_value;
  stroke('#6B6B6D');
  strokeWeight(2);
  for (var i = 0; i < max_value; i++) {
  	line(starting_point, (i+1)*s_dist, starting_point+100, (i+1)*s_dist);
  }
}