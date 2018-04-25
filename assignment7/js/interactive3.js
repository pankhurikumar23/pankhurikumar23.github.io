stateCount = 30;
paramCount = 7;
maxDisplay = 3;
xParams = [100, 350, 600, 600, 350, 100];
yParams = [180, 80, 180, 480, 600, 480];
rC = [8, 255, 234];
gC = [217, 46, 234];
bC = [214, 99, 234];
displayCount = 0;
currentDisplay = 0;
stateLabels = [];
empowermentData = [];
xPoly = [];
yPoly = [];
tableData = [];
var stateDrop;

function preload() {
	view3data = loadTable('assets/View3.csv', 'csv', 'header');
}

function setup() {
	createCanvas(1920, 1080);
	background('#1A1A1A');
	noLoop();

	button2 = createButton('Back');
	button2.position(width/2 - 30, 1010);
	button2.mousePressed(backState);

	loadData();
	createDropdown();
	drawGrid();

	createContent();
}

function backState() {
	window.location.href = "view2.html";
}

function loadData() {
	stateLabels = view3data.getColumn('States');

	empowermentData[0] = [];
	empowermentData[0] = view3data.getColumn('IMR');

	empowermentData[1] = [];
	empowermentData[1] = view3data.getColumn('Household Decisions');

	empowermentData[2] = [];
	empowermentData[2] = view3data.getColumn('Spousal Violence');

	empowermentData[3] = [];
	empowermentData[3] = view3data.getColumn('Mobile Phone');

	empowermentData[4] = [];
	empowermentData[4] = view3data.getColumn('Property');

	empowermentData[5] = [];
	empowermentData[5] = view3data.getColumn('Bank Account');

	empowermentData[6] = [];
	empowermentData[6] = view3data.getColumn('Menstrual Hygiene');
}

function drawGrid() {
	push();
	fill('#494646');
	rect(840, 270, 1040, 60);
	stroke('white');
	strokeWeight(2);
	line(100, 180, 600, 480);
	line(100, 480, 600, 180);
	line(350, 80, 350, 600);

	line(840, 270, 1880, 270);
	line(800, 330, 1880, 330);
	line(800, 370, 1880, 370);
	line(800, 410, 1880, 410);
	line(800, 450, 1880, 450);

	line(800, 330, 800, 450);
	line(840, 270, 840, 450);
	line(1040, 270, 1040, 450);
	line(1090, 270, 1090, 450);
	line(1235, 270, 1235, 450);
	line(1375, 270, 1375, 450);
	line(1490, 270, 1490, 450);
	line(1610, 270, 1610, 450);
	line(1725, 270, 1725, 450);
	line(1880, 270, 1880, 450);

	noStroke();
	fill('white');
	text('Participate in Household', 20, 150);
	text('Decisions', 70, 170);
	text('Experience Spousal', 295, 50);
	text('Violence', 325, 70);
	text('Own and Use', 580, 150);
	text('a Mobile Phone', 575, 170);
	text('Own Property in', 570, 500);
	text('Their Name', 585, 520);
	text('Have Their own', 305, 620);
	text('Bank Account', 310, 640);
	text('Use Hygienic Products', 30, 500);
	text('During Menstruation', 35, 520);

	text('State', 920, 305);
	text('IMR', 1055, 305);
	text('Participate in', 1120, 295);
	text('Household Decisions', 1100, 315);
	text('Experience Spousal', 1245, 295);
	text('Violence', 1275, 315);
	text('Own and Use', 1390, 295);
	text('a Mobile Phone', 1385, 315);
	text('Own Property in', 1500, 295);
	text('Their Name', 1515, 315);
	text('Have Their Own', 1620, 295);
	text('Bank Account', 1625, 315);
	text('Use Hygienic Products', 1735, 295);
	text('During Menstruation', 1740, 315);
	pop();
}

function createDropdown() {
	stateDrop = createSelect();
	stateDrop.position(1100, 180);
	stateDrop.option('Select a state');
	for(var i = 0; i < stateCount; i++) {
		stateDrop.option(stateLabels[i]);
	}
	stateDrop.changed(displayState);
}

function displayState() {
	var state = stateDrop.value();

	stateFlag = -1;
	for (var i = 0; i < stateCount; i++) {
		if (state == stateLabels[i]) {
			stateFlag = i;
		}
	}
	calculateDisplay(stateFlag);
	draw();
}

function calculateDisplay(stateFlag) {
	if (displayCount == maxDisplay) {
		mid = [rC[0], gC[0], bC[0]];
		for (var i = 0; i < displayCount - 1; i++) {
			xPoly[i] = xPoly[i+1];
			yPoly[i] = yPoly[i+1];
			tableData[i] = tableData[i+1];
			rC[i] = rC[i+1];
			gC[i] = gC[i+1];
			bC[i] = bC[i+1];
		}
		displayCount -= 1;
		rC[maxDisplay - 1] = mid[0];
		gC[maxDisplay - 1] = mid[1];
		bC[maxDisplay - 1] = mid[2];
	}

	xPoly[displayCount] = [];
	yPoly[displayCount] = [];
	tableData[displayCount] = [];
	for (var i = 0; i < paramCount - 1; i++) {
		xPoly[displayCount][i] = map(empowermentData[i + 1][stateFlag], 0, 100, 350, xParams[i]);
		yPoly[displayCount][i] = map(empowermentData[i + 1][stateFlag], 0, 100, 330, yParams[i]);
	}
	for (var i = 1; i < paramCount + 1; i++) {
		tableData[displayCount][i] = empowermentData[i - 1][stateFlag];
	}
	tableData[displayCount][0] = stateLabels[stateFlag];

	displayCount += 1;
	currentDisplay += 1;
	currentDisplay = min(currentDisplay, maxDisplay);
}

function draw() {
	background('#1A1A1A');
	drawGrid();

	drawPolygon();
	drawTable();
	createContent();
}

function drawPolygon() {
	for (var i = 0; i < currentDisplay; i++) {
		fill(rC[i], gC[i], bC[i], 200);
		stroke(rC[i], gC[i], bC[i], 200);
		beginShape();
		for (var j = 1; j < paramCount; j++) {
			vertex(xPoly[i][j - 1], yPoly[i][j - 1]);
		}
		endShape(CLOSE);
	}
}

function drawTable() {
	for (var i = 0; i < currentDisplay; i++) {
		noStroke();
		fill(rC[i], gC[i], bC[i], 200);
		rect(801, 331 + i*40, 38, 38);
		fill('white');
		text(tableData[i][0], 850, 355 + i*40);
		text(tableData[i][1], 1050, 355 + i*40);
		text(tableData[i][2]+'%', 1140, 355 + i*40);
		text(tableData[i][3]+'%', 1285, 355 + i*40);
		text(tableData[i][4]+'%', 1415, 355 + i*40);
		text(tableData[i][5]+'%', 1535, 355 + i*40);
		text(tableData[i][6]+'%', 1650, 355 + i*40);
		text(tableData[i][7]+'%', 1790, 355 + i*40);
	}
}

function createContent() {
	defY = 760;
	defY2 = defY + 120;
	push();
	textFont('Roboto');
	textSize(20);
	fill('white');
	textAlign(CENTER);
	text("Access to healthcare has increased tremendously in the last decade, but in many states, cultural practices and corruption still prevent mothers from reaching", width/2, defY);
	text("out to hospitals. The NFHS also surveys women on factors that it terms 'Women Empowerment' - ways that allow women to make autonomous decisions about their", width/2, defY + 25);
	text("lives. Here, by visualizing some of these factors, and weighing them against the IMR rates in those states, it's easy to see that when we enable women in", width/2, defY + 50);
	text("tangible ways, they choose to make decisions that will improve their health, and the health of their families.", width/2, defY + 75);
	fill('#ff4844');
	textSize(40);
	text("India's Case for Women Empowerment", width/2, 960);
	pop();
}