// imr = []; health = []; literacy = [];
// colours = [];
// initialY = []; initialX = 50; finalY = 600; finalX = [];
// maxAnim = 40; currAnim = 0; fl = -10;
// totalCount = 31;
// minAxis = finalY - 20; maxAxis = 40;
// backgroundTransparency = 0; initialTransparency = 50; foregroundTransparency = 255;
// labelX = [1760, 1760, 1760];
// labelY = [230, 260, 290];
// headings = ["IMR", "Health", "Literacy"];

function draw() {
	textSize(15);
	textStyle(BOLD);
	background('#1A1A1A');

	createAnimation();

	if (fl > 45) {
		createLegend();
		drawIMR();
		drawLiteracy();
		drawHealth();
	}
}

function createAnimation() {
	for(var i = 0; i < totalCount; i++) {
		colours[i] = map(imr[i], 5, 67, 100, 255);
		fill(colours[i], 0, 100);
		finalX[i] = map(i, 0, 32, 1680, -80);
		if (stateLabels[i] == 'India') {
			colours[i] = 200;
			fill(colours[i], colours[i], colours[i]);
			finalX[i]-= 10;
		}
		if (isAnimating()) {
			x = finalX[i] + (initialX - finalX[i]) * percAnim();
			y = finalY + (initialY[i] - finalY) * percAnim();
			text(stateLabels[i], x, y);
			text(imr[i], x, y + 20);
		} else {
			if (fl <= 0) {
				y = map(i, 0, 32, 30, 920);
				initialY[i] = y;
				text(stateLabels[i], initialX, y);
				text(imr[i], initialX + 60, y);
			} else {
				noStroke();
				text(stateLabels[i], finalX[i], finalY);
				text(imr[i], finalX[i], finalY + 20);
				stroke(150, 150, 150);
				line(20, finalY - 20, 1710, finalY - 20);
				line(1710, minAxis, 1710, maxAxis - 10);
			}
		}
	}

	if (isAnimating()) {
		currAnim--;
	}

	if (fl == 0) {
		currAnim = maxAnim;
		fl = 1;
	} else {
		fl++;
	}
}

function isAnimating() {
	return (currAnim != 0);
}

function percAnim() {
	return (currAnim / maxAnim);
}

function createLegend() {
	noStroke();
	indicator = -1;

	for (var i = 0; i < 3; i++) {
		if (abs(mouseX - labelX[i]) < textWidth(headings[i]) && abs(mouseY - labelY[i]) < 15 && abs(labelX[i] + textWidth(headings[i]) - mouseX) < textWidth(headings[i])) {
			indicator = i;
		}
	}
	if (indicator == 0){
		drawHealth(backgroundTransparency);
		drawLiteracy(backgroundTransparency);
		drawIMR(foregroundTransparency);
	} else if (indicator == 1) {
		drawIMR(backgroundTransparency);
		drawLiteracy(backgroundTransparency);
		drawHealth(foregroundTransparency);
	} else if (indicator == 2) {
		drawIMR(backgroundTransparency);
		drawHealth(backgroundTransparency);
		drawLiteracy(foregroundTransparency);
	} else {
		drawIMR();
		drawHealth();
		drawLiteracy();
	}
	indicator = -1;
}

function drawIMR(t = initialTransparency) {
	noStroke();
	fill(0, 200, 150);
	text(headings[0], labelX[0], labelY[0]);
	for (var i = 0; i < totalCount; i++) {
		y = map(imr[i], 0, 100, minAxis, maxAxis);
		fill(0, 200, 150, t);
		if (stateLabels[i] == 'N. Avg.') {
			fill(colours[i], colours[i], colours[i], t);
		}
		rect(finalX[i] + 10, y, 10, finalY - 20 - y);
		fill(150,150,150, t);
		text(imr[i], finalX[i], y - 10);
	}
}

function drawHealth(t = initialTransparency) {
	noStroke();
	fill(250, 200, 0);
	text(headings[1], labelX[1], labelY[1]);
	for (var i = 0; i < totalCount; i++) {
		y = map(health[i], 0, 100, minAxis, maxAxis);
		fill(250, 200, 0, t);
		if (stateLabels[i] == 'N. Avg.') {
			fill(colours[i], colours[i], colours[i], t);
		}
		rect(finalX[i] + 10, y, 10, finalY - 20 - y);
		fill(150,150,150, t);
		text(health[i], finalX[i], y - 10);
	}
}

//TODO: Triangles and color
function drawLiteracy(t = initialTransparency) {
	noStroke();
	fill(20, 20, 150);
	text(headings[2], labelX[2], labelY[2]);
	for (var i = 0; i < totalCount; i++) {
		y = map(literacy[i], 0, 100, minAxis, maxAxis);
		fill(20, 20, 150, t);
		if (stateLabels[i] == 'N. Avg.') {
			fill(colours[i], colours[i], colours[i], t);
		}
		rect(finalX[i] + 10, y, 10, finalY - 20 - y);
		fill(150,150,150, t);
		text(literacy[i], finalX[i], y - 10);
	}
}
