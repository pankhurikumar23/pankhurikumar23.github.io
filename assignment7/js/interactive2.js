stateLabels = []; imr= []; noMethod = []; otherMethod = []; femaleSter = []; iud = []; pill = []; condom = []; relStart = [];
textColours = ['#82672A','#8E732F','#9A7F35','#A68C3A','#B29940','#C8C8C8','#BEA646','#C9B44C','#D4C252','#DFD059','#EADE60'];
barColours = ['#1B6055','#287078','#507E98','#8587B0','#BF8CBB','#F590B6'];
finalX = 50; initialX = []; finalY = []; initialY = 600;
maxAnim = 40; currAnim = 0; fl = -10;
totalCount = 11;
barStart = 330; barEnd = 1820; barWidth = barEnd - barStart;

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

}

function loadData() {
	stateLabels = view2Data.getColumn("States");
	imr = view2Data.getColumn("IMR");
	noMethod = view2Data.getColumn("No Method");
	otherMethod = view2Data.getColumn("Other Methods");
	femaleSter = view2Data.getColumn("Female Sterilization");
	iud = view2Data.getColumn("IUD/PPIUD");
	pill = view2Data.getColumn("Pill");
	condom = view2Data.getColumn("Condom");

	for (var i = 0; i < totalCount; i++) {
		noMethod[i] = map(noMethod[i], 0, 100, 0, barWidth - 3);
		otherMethod[i] = map(otherMethod[i], 0, 100, 0, barWidth - 3);
		femaleSter[i] = map(femaleSter[i], 0, 100, 0, barWidth - 3);
		iud[i] = map(iud[i], 0, 100, 0, barWidth - 3);
		pill[i] = map(pill[i], 0, 100, 0, barWidth - 3);
		condom[i] = map(condom[i], 0, 100, 0, barWidth - 3);
	}
}

function createAnimation() {
	for(var i = 0; i < totalCount; i++) {
		fill(textColours[i]);
		finalY[i] = map(i, 0, 11, 50, 600);
		if (isAnimating()) {
			x = finalX + (initialX[i] - finalX) * percAnim();
			y = finalY[i] + (initialY - finalY[i]) * percAnim();
			text(stateLabels[i], x, y);
			text(imr[i], x, y + 20);
		} else {
			if (fl <= 0) {
				x = map(i, 0, 11, 30, 920);
				initialX[i] = x;
				text(stateLabels[i], initialX[i], initialY);
				text(imr[i], initialX[i], initialY + 20);
			} else {
				noStroke();
				text(stateLabels[i], finalX, finalY[i]);
				text(imr[i], finalX, finalY[i] + 20);
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
	for (var i = 0; i < totalCount; i++) {
		k = 0;
		relStart[i] = barStart;
		addInfoBar(k, femaleSter[i], i);
		addBlackBar(i);
		k++;
		addInfoBar(k, iud[i], i);
		addBlackBar(i);
		k++;
		addInfoBar(k, pill[i], i);
		addBlackBar(i);
		k++;
		addInfoBar(k, condom[i], i);
		addBlackBar(i);
		k++;
		addInfoBar(k, otherMethod[i], i);
		addBlackBar(i);
		k++;
		fill(barColours[k]);
		rect(relStart[i], finalY[i] - 15, barEnd - relStart[i], 30, 3);
	}
}

function addInfoBar(k, info, i) {
	fill(barColours[k]);
	rect(relStart[i], finalY[i] - 15, relStart[i] + info, 30, 3);
	relStart[i] += info;
}

function addBlackBar(i) {
	fill('#1A1A1A');
	rect(relStart[i], finalY[i] - 15, relStart[i] + 0.5, 30, 3);
	relStart[i] += 0.5;
}