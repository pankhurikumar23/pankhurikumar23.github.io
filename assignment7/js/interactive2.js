stateLabels = []; aCare= []; noMethod = []; otherMethod = []; femaleSter = []; iud = []; pill = []; condom = []; relStart = [];
textColour = ['#DAD24F', '#FEFEFE', '#DAD24F'];
// barColours = ['#238A6C','#39A073','#51B578','#6DCB7B','#8CE07B','#AEF57B'];
barColours = ['#48546D','#397688','#2B9893','#4CB88D','#8BD47B','#D8EA6A']
finalX = 390; initialX = []; initialY = 600;
finalY = [50, 114, 178, 263, 388, 452, 516];
maxAnim = 40; currAnim = 0; fl = -30;
stateCount = 7;
methodCount = 6;
barStart = 400; barEnd = 1890; barWidth = barEnd - barStart;
stateData = [];

function preload() {
	view2Data = loadTable('assets/View2.csv', 'csv', 'header');
}

function setup() {
	createCanvas(1920, 1080);
	frameRate(20);

	button1 = createButton('Next');
	button1.position(width/2 + 10, 1000);
	button1.mousePressed(nextState);

	button2 = createButton('Back');
	button2.position(width/2 - 70, 1000);
	button2.mousePressed(backState);


  	textFont('Roboto');

	loadData();
}


function backState() {
	window.location.href = "view1.html";
}
function nextState() {
  window.location.href = "view3.html";
}

function draw() {
	background('#3A3A3A');

	textSize(15);

	createAnimation();

	if (fl > 45) {
		drawBars();
		createLegend();
	} 
	push();
	textAlign(CENTER);
	fill('#ff4844');
	textSize(40);
	text('India\'s Case for Women Empowerment', width/2, 950);
	if (fl > 60){
		fill('white');
		textSize(30);
		if (fl < 140) {
			text('The relationship between antenatal care and infant mortality rate is clear', width/2, 670);
			text('... but are there other ways to determine if a mother will get antenatal care?', width/2, 710);
		} else if (fl < 240) {
			text('Awareness about health practices could be one indicator...', width/2, 690);
		} else if (fl < 300) {
			text('Here we compare Family Planning Methods, Antenatal Care and', width/2, 670);
			text('Literacy rates in certain Indian states', width/2, 710);
		} else {
			text('It\'s quite clear that states where women use more birth control', width/2, 670);
			text('are states where women are willing to receive better health care during pregnancy', width/2, 710);
		}
		if (fl > 360) {
			textSize(20);
			text('Hover over the bars to explore the data', width/2, 850);
			text('Click Next when done', width/2, 870);
		}
	}
	pop();
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
	lit = view2Data.getColumn("Literacy");

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
		textSize(20);
		if (i < 3) {
			fill(textColour[0]);
		} else if (i == 3) {
			fill(textColour[1]);
			textSize(30);
		} else {
			fill(textColour[2]);
		}

		if (isAnimating()) {
			x = finalX + (initialX[i] - finalX) * percAnim();
			y = finalY[i] + (initialY - finalY[i]) * percAnim();
			text(stateLabels[i], x, y);
		} else {
			if (fl <= 0) {
				x = map(i, 0, 7, 300, 1820);
				if (i == 4) {
					x -= 20;
				}
				if (i >= 5) {
					x += 60;
				}
				initialX[i] = x;
				text(stateLabels[i], initialX[i], initialY);
			} else {
				noStroke();
				y = finalY[i]+10;
				if (i == 3) y += 20;
				text(stateLabels[i], finalX, y);
				stroke('#ff4844');
				if (i == 3) line(finalX - textWidth(stateLabels[i]) - 10, finalY[i]+5, finalX - textWidth(stateLabels[i]) - 10, finalY[i]+35);
				else line(finalX - textWidth(stateLabels[i]) - 10, finalY[i]-10, finalX - textWidth(stateLabels[i]) - 10, finalY[i]+15);
				noStroke();
				push();
				tx = finalX - textWidth(stateLabels[i]) - 15;
				textSize(15);
				if (i == 3) y -= 5;
				text(aCare[i] + '%', tx, y);
				pop();
				stroke('#ff4844');
				if (i == 3) line(finalX - textWidth(stateLabels[i]) - textWidth(aCare[i]) - 5, finalY[i]+5, finalX - textWidth(stateLabels[i]) - textWidth(aCare[i]) - 5, finalY[i]+35);
				else line(finalX - textWidth(stateLabels[i]) - textWidth(aCare[i]) - 25, finalY[i]-10, finalX - textWidth(stateLabels[i]) - textWidth(aCare[i]) - 25, finalY[i]+15);
				noStroke();
				push();
				tx = finalX - textWidth(stateLabels[i]) - textWidth(aCare[i]) - 30;
				if (i == 3) tx += 18;
				textSize(15);
				text(lit[i] + '%', tx, y);
				pop();
			}
		}
	}
	pop();

	if (fl <= 0) {
		push();
		textSize(20);
		fill('#ff4844');
		noStroke();
		text('States with lowest antenatal care', 320, 700);
		text('States with highest antenatal care', 1230, 700);

		stroke('#ff4844');
		line(250, 610, 250, 690);
		line(680, 610, 680, 690);
		line(490, 610, 490, 680);
		line(250, 690, 310, 690);
		line(680, 690, 630, 690);

		line(1100, 610, 1100, 690);
		line(1300, 610, 1300, 680);
		line(1630, 610, 1630, 690);
		line(1100, 690, 1220, 690);
		line(1630, 690, 1540, 690);
		pop();
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
	stroke('#3A3A3A');
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
			rect(relStart[i][k], finalY[i] - 15, barEnd - relStart[i][k], 70);
		} else {
			rect(relStart[i][k], finalY[i] - 15, barEnd - relStart[i][k], 30);
		}
	}
	checkBubble();
}

function addInfoBar(k, start, info, i) {
	fill(barColours[k]);
	if (i == 3) {
		rect(start, finalY[i] - 15, start + info, 70);
	} else {
		rect(start, finalY[i] - 15, start + info, 30);
	}
}

function addBlackBar(i, start) {
	fill('#3A3A3A');
	if (i == 3) {
		rect(start, finalY[i] - 15, start + 2, 70);
	} else {
		rect(start, finalY[i] - 15, start + 2, 30);
	}
}

function checkBubble() {
	for (var i = 0; i < stateCount; i++) {
		if (i == 3) y = 35;
		else y = 15;
		if (abs(mouseX - relStart[i][0]) < stateData[i][0] && abs(relStart[i][0] + stateData[i][0] - mouseX) < stateData[i][0] && abs(mouseY - (finalY[i])) < y) {
			createBubble('Female Sterilization', femaleSter[i]);
		} else if (abs(mouseX - relStart[i][1]) < stateData[i][1] && abs(relStart[i][1] + stateData[i][1] - mouseX) < stateData[i][1] && abs(mouseY - (finalY[i])) < y) {
			createBubble('IUD/PPIUD', iud[i]);
		} else if (abs(mouseX - relStart[i][2]) < stateData[i][2] && abs(relStart[i][2] + stateData[i][2] - mouseX) < stateData[i][2] && abs(mouseY - (finalY[i])) < y) {
			createBubble('Pill', pill[i]);
		} else if (abs(mouseX - relStart[i][3]) < stateData[i][3] && abs(relStart[i][3] + stateData[i][3] - mouseX) < stateData[i][3] && abs(mouseY - (finalY[i])) < y) {
			createBubble('Condom', condom[i]);
		} else if (abs(mouseX - relStart[i][4]) < stateData[i][4] && abs(relStart[i][4] + stateData[i][4] - mouseX) < stateData[i][4] && abs(mouseY - (finalY[i])) < y) {
			createBubble('Other Methods', otherMethod[i]);
		} else if (abs(mouseX - relStart[i][5]) < stateData[i][5] && abs(relStart[i][k] + stateData[i][5] - mouseX) < stateData[i][5] && abs(mouseY - (finalY[i])) < y) {
			createBubble('No Family Planning', noMethod[i]);
		}
	}
}

function createBubble(textType, info) {
	noStroke();
	fill(255, 255, 255, 204);
	rect(mouseX+5, mouseY-30, textWidth(info + '%') + 5, 20);
	fill(0);
	text(info + '%', mouseX + 7, mouseY - 15);
	stroke('#1A1A1A');
}

function createLegend() {
	defY = 580;
	textSize(20);
	fill(textColour[0]);
	push();
	noStroke();
	textAlign(RIGHT);
	text('States', finalX, defY);
	stroke('#ff4844');
	line(finalX - textWidth('States') - 10, defY-20, finalX - textWidth('States') - 10, defY+5);
	noStroke();
	text('Antenatal Care', finalX - textWidth('States') - 20, defY);
	stroke('#ff4844');
	line(finalX - textWidth('States') - textWidth('Antenatal Care') - 30, defY-20, finalX - textWidth('States') - textWidth('Antenatal Care') - 30, defY+5);
	noStroke();
	text('Literacy Rate', finalX - textWidth('States') - textWidth('Antenatal Care') - 40, defY);
	pop();

	for (var i = 0; i < methodCount; i++) {
		noStroke();
		fill(barColours[i]);
		rect(barStart + (i*barWidth/6) + 2, defY-20, barWidth/6 - 2, 30);
		push();
		noStroke();
		fill('white');
		textFont('Roboto');
		text('Female Sterilization', 450, defY);
		text('IUD/PPID', 750, defY);
		text('Pill', 1000, defY);
		fill('#3A3A3A');
		text('Condom', 1220, defY);
		text('Other Methods', 1450, defY);
		text('No Method', 1700, defY);
		pop();
	}
}