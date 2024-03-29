function setup() {
  createCanvas(1257, 957);
  frameRate(1);
}

function draw() {
	background('#F5E6CC');

	var s = second();
	var m = minute();
	var h = hour();

	//add Time
	drawArc(s, '#17E9E0', 60, 0.25);
	drawArc(m, '#A64AC9', 60, 0.5); 
	drawArc(h, '#FCCD04', 24, 0.75);

	drawText(h, m, s);
}

// draw arc based on current time
function drawArc(unit, colour, max_value, scale) {
	//map current time to length of arc - divided by two since arc increases from two sides
	var halfmap = map(unit, 0, max_value, 0, 2*PI)/2;
	fill(colour);
	noStroke();
	if (unit != 0) {
		//subtract PI/2 to shift to vertical axis
		arc(width*scale, height*scale - 40, 175, 175, -halfmap - PI/2, halfmap - PI/2);
	}
	fill('#F5E6CC');
	//to create a hollow arc
	ellipse(width*scale, height*scale - 40, 130, 130);
}

// display the current time next to each arc
function drawText(h, m, s) {
	// noFill();
	textSize(25);
	fill('#FFB48F');

	text(s, 240, 300);
	text(m, 550, 540);
	text(h, 860, 770);
}
