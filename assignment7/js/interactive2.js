stateLabels = []; aCare= []; noMethod = []; otherMethod = []; femaleSter = []; iud = []; pill = []; condom = []; relStart = [];
textColour = ['#e572b1', '#f7f7f7', '#8fd14d'];
barColours = ['#1A9850','#91CF60','#D9EF8B','#FEE08B','#FC8D59','#D73027'];
finalX = 50; initialX = []; finalY = []; initialY = 600;
maxAnim = 40; currAnim = 0; fl = -10;
stateCount = 11;
methodCount = 6;
barStart = 330; barEnd = 1820; barWidth = barEnd - barStart;
stateData = [];

function preload() {
	view2Data = loadTable('assets/View2.csv', 'csv', 'header');
}

function setup() {
	createCanvas(1907, 950);
	frameRate(20);

	loadData();
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
		} else if (fl < 260) {
			text('Awareness about Health Practices could be one indicator...', 450, 670);
		} else if (fl < 320) {
			text('Here we compare Family Planning Methods and Antenatal Care in rural India', 350, 670);
		} else {
			fill('#C8C8C8');
			text('It\'s quite clear that states where women are more aware about safe sex', 380, 670);
			text('are states where women are willing to receive better health care during pregnancy', 310, 710);
		}
		if (fl > 380) {
			fill('white');
			textSize(20);
			text('Hover over the bars to explore the data', 650, 770);
		}
	}
	if (fl > 400) {
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
		stateData[i][0] = map(femaleSter[i], 0, 100, 0, barWidth - 3);
		stateData[i][1] = map(iud[i], 0, 100, 0, barWidth - 3);
		stateData[i][2] = map(pill[i], 0, 100, 0, barWidth - 3);
		stateData[i][3] = map(condom[i], 0, 100, 0, barWidth - 3);
		stateData[i][4] = map(otherMethod[i], 0, 100, 0, barWidth - 3);
		stateData[i][5] = map(noMethod[i], 0, 100, 0, barWidth - 3);
	}
}

function createAnimation() {
	for(var i = 0; i < stateCount; i++) {
		finalY[i] = map(i, 0, 11, 50, 600);
		if (i < 5) {
			fill(textColour[0]);
		} else if (i == 5) {
			fill(textColour[1]);
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
		relStart[i] = [];
		
		k = 0;
		relStart[i][k] = barStart;
		addInfoBar(k, relStart[i][k], stateData[i][k], i);
		addBlackBar(i, relStart[i][k] + stateData[i][k]);
		
		k++;
		relStart[i][k] = relStart[i][k-1] + stateData[i][k-1];
		relStart[i][k] += 0.5;
		addInfoBar(k, relStart[i][k], stateData[i][k], i);
		addBlackBar(i, relStart[i][k] + stateData[i][k]);

		k++;
		relStart[i][k] = relStart[i][k-1] + stateData[i][k-1];
		relStart[i][k] += 0.5;
		addInfoBar(k, relStart[i][k], stateData[i][k], i);
		addBlackBar(i, relStart[i][k] + stateData[i][k]);

		k++;
		relStart[i][k] = relStart[i][k-1] + stateData[i][k-1];
		relStart[i][k] += 0.5;
		addInfoBar(k, relStart[i][k], stateData[i][k], i);
		addBlackBar(i, relStart[i][k] + stateData[i][k]);

		k++;
		relStart[i][k] = relStart[i][k-1] + stateData[i][k-1];
		relStart[i][k] += 0.5;
		addInfoBar(k, relStart[i][k], stateData[i][k], i);
		addBlackBar(i, relStart[i][k] + stateData[i][k]);
		
		k++;
		relStart[i][k] = relStart[i][k-1] + stateData[i][k-1];
		relStart[i][k] += 0.5;
		fill(barColours[k]);
		rect(relStart[i][k], finalY[i] - 15, barEnd - relStart[i][k], 30, 3);
		relStart[i][k] = relStart[i][k-1] + stateData[i][k-1];
	}

	checkBubble();
}

function addInfoBar(k, start, info, i) {
	fill(barColours[k]);
	rect(start, finalY[i] - 15, start + info, 30, 3);
}

function addBlackBar(i, start) {
	fill('#1A1A1A');
	rect(start, finalY[i] - 15, start + 0.5, 30, 3);
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
	text('States with lowest antenatal care', 450, 800);
	text('% of women that had at least 4 antenatal care visits', 450, 820);
	fill(textColour[2]);
	text('States with highest antenatal care', 920, 800);
	text('% of women that had at least 4 antenatal care visits', 920, 820);
}