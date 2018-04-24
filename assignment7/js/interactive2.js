stateLabels = []; aCare= []; noMethod = []; otherMethod = []; femaleSter = []; iud = []; pill = []; condom = []; relStart = [];
textColour = ['#e572b1', '#f7f7f7', '#8fd14d'];
barColours = ['#f7f1e3','#706fd3','#40407a','#2c2c54','#ff5252','#b33939'];
finalX = 310; initialX = []; finalY = []; initialY = 600;
maxAnim = 40; currAnim = 0; fl = -30;
stateCount = 7;
methodCount = 6;
barStart = 330; barEnd = 1820; barWidth = barEnd - barStart;
stateData = [];

function preload() {
	view2Data = loadTable('assets/View2.csv', 'csv', 'header');
}

function setup() {
	createCanvas(1920, 1080);
	frameRate(20);

	button = createButton('Next');
	button.position(960, 980);
	button.mousePressed(changeState);

	loadData();
}

function changeState() {
  window.location.href = "view3.html";
}

function draw() {
	background('#1A1A1A');

	textSize(15);
	textStyle(BOLD);

	createAnimation();

	if (fl > 45) {
		drawBars();
	} 
	if (fl > 60){
		fill('white');
		textSize(30);
		if (fl < 140) {
			text('The relationship between antenatal care and infant mortality rate is clear', 330, 650);
			text('... but what factors determine if a mother will get antenatal care?', 380, 690);
		} else if (fl < 240) {
			text('Awareness about Health Practices could be one indicator...', 450, 670);
		} else if (fl < 300) {
			text('Here we compare Family Planning Methods and Antenatal Care in rural India', 350, 670);
		} else {
			fill('#C8C8C8');
			text('It\'s quite clear that states where women are more aware about safe sex', 380, 670);
			text('are states where women are willing to receive better health care during pregnancy', 310, 710);
		}
		if (fl > 360) {
			fill('white');
			textSize(20);
			text('Hover over the bars to explore the data', 700, 770);
		}
	}
	if (fl > 380) {
		createLegend();
	}
}

function loadData() {
	stateLabels = view2Data.getColumn("States");
	aCare = view2Data.getColumn("Antenatal Care");
	noMethod = view2Data.getColumn("No Method");
	otherMethod = view2Data.getColumn("Other Methods");
	femaleSter = view2Data.getColumn("Female Sterilization");
	iud = view2Data.getColumn("IUD/PPIUD");
	pill = view2Data.getColumn("Pill");
	condom = view2Data.getColumn("Condom");

	for (var i = 0; i < stateCount; i++) {
		stateData[i] = [];
		stateData[i][0] = map(femaleSter[i], 0, 100, 0, barWidth - 10);
		stateData[i][1] = map(iud[i], 0, 100, 0, barWidth - 10);
		stateData[i][2] = map(pill[i], 0, 100, 0, barWidth - 10);
		stateData[i][3] = map(condom[i], 0, 100, 0, barWidth - 10);
		stateData[i][4] = map(otherMethod[i], 0, 100, 0, barWidth - 10);
		stateData[i][5] = map(noMethod[i], 0, 100, 0, barWidth - 10);
	}
}

function createAnimation() {
	push();
	textAlign(RIGHT);
	for(var i = 0; i < stateCount; i++) {
		textSize(15);
		finalY[i] = map(i, 0, 7, 50, 500);
		if (i == 3) { finalY[i] += 19; }
		if (i == 4) { finalY[i] += 40; }
		if (i > 4) { finalY[i] += 40; }
		if (i < 3) {
			fill(textColour[0]);
		} else if (i == 3) {
			fill(textColour[1]);
			textSize(23);
		} else {
			fill(textColour[2]);
		}
		if (isAnimating()) {
			x = finalX + (initialX[i] - finalX) * percAnim();
			y = finalY[i] + (initialY - finalY[i]) * percAnim();
			text(stateLabels[i], x, y);
			text(aCare[i] + '%', x, y + 20);
		} else {
			if (fl <= 0) {
				x = map(i, 0, 11, 30, 1820);
				initialX[i] = x;
				text(stateLabels[i], initialX[i], initialY);
				text(aCare[i] + '%', initialX[i], initialY + 20);
			} else {
				noStroke();
				text(stateLabels[i], finalX, finalY[i]);
				text(aCare[i] + '%', finalX, finalY[i] + 20);
			}
		}
	}
	pop();

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

function drawBars() {
	stroke('#1A1A1A');
	for (var i = 0; i < stateCount; i++) {
		k = 0;
		relStart[i] = [];
		relStart[i][0] = barStart;
		addInfoBar(k, relStart[i][k], stateData[i][k], i);
		addBlackBar(i, relStart[i][k] + stateData[i][k]);
		k++;
		for (; k < methodCount - 1; k++) {
			relStart[i][k] = relStart[i][k-1] + stateData[i][k-1];
			relStart[i][k] += 2;
			addInfoBar(k, relStart[i][k], stateData[i][k], i);
			addBlackBar(i, relStart[i][k] + stateData[i][k]);
		}
		k = methodCount - 1;
		relStart[i][k] = relStart[i][k-1] + stateData[i][k-1];
		relStart[i][k] += 2;
		fill(barColours[k]);
		if (i == 3) {
			rect(relStart[i][k], finalY[i] - 15, barEnd - relStart[i][k], 45);
		} else {
			rect(relStart[i][k], finalY[i] - 15, barEnd - relStart[i][k], 35);
		}
	}
	checkBubble();
}

function addInfoBar(k, start, info, i) {
	fill(barColours[k]);
	if (i == 3) {
		rect(start, finalY[i] - 15, start + info, 45);
	} else {
		rect(start, finalY[i] - 15, start + info, 35);
	}
}

function addBlackBar(i, start) {
	fill('#1A1A1A');
	if (i == 3) {
		rect(start, finalY[i] - 15, start + 2, 45);
	} else {
		rect(start, finalY[i] - 15, start + 2, 35);
	}
}

function checkBubble() {
	for (var i = 0; i < stateCount; i++) {
		if (abs(mouseX - relStart[i][0]) < stateData[i][0] && abs(relStart[i][0] + stateData[i][0] - mouseX) < stateData[i][0] && abs(mouseY - (finalY[i])) < 15) {
			createBubble('Female Sterilization', femaleSter[i]);
		} else if (abs(mouseX - relStart[i][1]) < stateData[i][1] && abs(relStart[i][1] + stateData[i][1] - mouseX) < stateData[i][1] && abs(mouseY - (finalY[i])) < 15) {
			createBubble('IUD/PPIUD', iud[i]);
		} else if (abs(mouseX - relStart[i][2]) < stateData[i][2] && abs(relStart[i][2] + stateData[i][2] - mouseX) < stateData[i][2] && abs(mouseY - (finalY[i])) < 15) {
			createBubble('Pill', pill[i]);
		} else if (abs(mouseX - relStart[i][3]) < stateData[i][3] && abs(relStart[i][3] + stateData[i][3] - mouseX) < stateData[i][3] && abs(mouseY - (finalY[i])) < 15) {
			createBubble('Condom', condom[i]);
		} else if (abs(mouseX - relStart[i][4]) < stateData[i][4] && abs(relStart[i][4] + stateData[i][4] - mouseX) < stateData[i][4] && abs(mouseY - (finalY[i])) < 15) {
			createBubble('Other Methods', otherMethod[i]);
		} else if (abs(mouseX - relStart[i][5]) < stateData[i][5] && abs(relStart[i][k] + stateData[i][5] - mouseX) < stateData[i][5] && abs(mouseY - (finalY[i])) < 15) {
			createBubble('No Family Planning', noMethod[i]);
		}
	}
}

function createBubble(textType, info) {
	noStroke();
	fill(255, 255, 255, 204);
	rect(mouseX+5, mouseY-30, textWidth(textType + ": " + info + '%') + 5, 20);
	fill(0);
	text(textType + ": " + info + '%', mouseX + 7, mouseY - 15);
	stroke('#1A1A1A');
}

function createLegend() {
	textSize(15);
	fill(textColour[0]);
	text('States with lowest antenatal care', finalX, 800);
	text('% of women that had at least 4 antenatal care visits', finalX, 820);
	
	fill(textColour[2]);
	text('States with highest antenatal care', finalX, 860);
	text('% of women that had at least 4 antenatal care visits', finalX, 880);
}