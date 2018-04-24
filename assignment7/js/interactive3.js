stateCount = 30;
paramCount = 6;
maxDisplay = 3;
xParams = [100, 350, 600, 600, 350, 100];
yParams = [180, 80, 180, 480, 600, 480];
rC = [132, 251, 255];
gC = [185, 228, 93];
bC = [239, 201, 93];
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

	loadData();
	createDropdown();
	drawGrid();
}

function loadData() {
	stateLabels = view3data.getColumn('States');

	empowermentData[0] = [];
	empowermentData[0] = view3data.getColumn('Household Decisions');

	empowermentData[1] = [];
	empowermentData[1] = view3data.getColumn('Spousal Violence');

	empowermentData[2] = [];
	empowermentData[2] = view3data.getColumn('Paid in Cash');

	empowermentData[3] = [];
	empowermentData[3] = view3data.getColumn('Property');

	empowermentData[4] = [];
	empowermentData[4] = view3data.getColumn('Bank Account');

	empowermentData[5] = [];
	empowermentData[5] = view3data.getColumn('Menstrual Hygiene');
}

function drawGrid() {
	push();
	stroke('white');
	strokeWeight(2);
	line(100, 180, 600, 480);
	line(100, 480, 600, 180);
	line(350, 80, 350, 600);

	line(840, 270, 1830, 270);
	line(800, 330, 1830, 330);
	line(800, 370, 1830, 370);
	line(800, 410, 1830, 410);
	line(800, 450, 1830, 450);

	line(800, 330, 800, 450);
	line(840, 270, 840, 450);
	line(1040, 270, 1040, 450);
	line(1185, 270, 1185, 450);
	line(1325, 270, 1325, 450);
	line(1440, 270, 1440, 450);
	line(1560, 270, 1560, 450);
	line(1675, 270, 1675, 450);
	line(1830, 270, 1830, 450);

	noStroke();
	fill('white');
	text('Participate in Household', 20, 150);
	text('Decisions', 70, 170);
	text('Experience Spousal', 295, 50);
	text('Violence', 325, 70);
	text('Earned Cash in Last', 550, 150);
	text('12 Months', 575, 170);
	text('Own Property in', 570, 500);
	text('Their Name', 585, 520);
	text('Have Their own', 305, 620);
	text('Bank Account', 310, 640);
	text('Use Hygienic Products', 30, 500);
	text('During Menstruation', 35, 520);

	text('State', 920, 305);
	text('Participate in', 1070, 295);
	text('Household Decisions', 1050, 315);
	text('Experience Spousal', 1195, 295);
	text('Violence', 1225, 315);
	text('Earned Cash in', 1335, 295);
	text('Last 12 Months', 1335, 315);
	text('Own Property in', 1450, 295);
	text('Their Name', 1465, 315);
	text('Have Their Own', 1570, 295);
	text('Bank Account', 1575, 315);
	text('Use Hygienic Products', 1685, 295);
	text('During Menstruation', 1690, 315);
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
	for (var i = 0; i < paramCount; i++) {
		xPoly[displayCount][i] = map(empowermentData[i][stateFlag], 0, 100, 350, xParams[i]);
		yPoly[displayCount][i] = map(empowermentData[i][stateFlag], 0, 100, 330, yParams[i]);
		tableData[displayCount][i + 1] = empowermentData[i][stateFlag];
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
}

function drawPolygon() {
	for (var i = 0; i < currentDisplay; i++) {
		fill(rC[i], gC[i], bC[i], 150);
		stroke(rC[i], gC[i], bC[i], 150);
		beginShape();
		for (var j = 0; j < paramCount; j++) {
			vertex(xPoly[i][j], yPoly[i][j]);
		}
		endShape(CLOSE);
	}
}

function drawTable() {
	for (var i = 0; i < currentDisplay; i++) {
		noStroke();
		fill(rC[i], gC[i], bC[i], 150);
		rect(800, 330 + i*40, 40, 40);
		fill('white');
		text(tableData[i][0], 850, 355 + i*40);
		text(tableData[i][1]+'%', 1090, 355 + i*40);
		text(tableData[i][2]+'%', 1235, 355 + i*40);
		text(tableData[i][3]+'%', 1365, 355 + i*40);
		text(tableData[i][4]+'%', 1485, 355 + i*40);
		text(tableData[i][5]+'%', 1600, 355 + i*40);
		text(tableData[i][6]+'%', 1740, 355 + i*40);
	}
}