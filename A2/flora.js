function setup() {
  createCanvas(1907, 957);
  frameRate(1);
}

function draw() {
	background('#D8A0AE');
	reset_seconds();
  	reset_minutes();
  	reset_hours();

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

  	if (s == 0) {reset_seconds();}
  	if (m == 0	) {reset_minutes();}
  	if (h == 0) {reset_hours();}

}

function drawTime(i, color, original_max, starting_point, s_dist) {
	stroke(color);
	strokeWeight(5);
  	line(starting_point, (i+1)*s_dist, starting_point+100, (i+1)*s_dist);
}

function reset_seconds() {
  var s_dist = height/60;
  stroke('#E3E2DF');
  strokeWeight(2);
  for (var i = 0; i < 60; i++) {
  	line(800, (i+1)*s_dist, 900, (i+1)*s_dist);
  	// textSize(10);
  	// text(i+1, 190, (i+1)*s_dist);
  }
}

function reset_minutes() {
	var s_dist = height/60;
  	stroke('#E3E2DF');
  	for (var i = 0; i < 60; i++) {
		line(450, (i+1)*s_dist, 550, (i+1)*s_dist);
  		// textSize(10);
  		// text(i+1, 190, (i+1)*s_dist);
  	}
}

function reset_hours() {
	var s_dist = height/24;
  	stroke('#E3E2DF');
  	for (var i = 0; i < 24; i++) {
		line(100, (i+1)*s_dist, 200, (i+1)*s_dist);
  		// textSize(10);
  		// text(i+1, 190, (i+1)*s_dist);
  	}
}