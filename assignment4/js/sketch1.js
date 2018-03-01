bCount = [946, 222, 349, 249, 96];
mCount = [385, 57, 120, 124, 56];
columns = ['Manhattan', 'Bronx', 'Brooklyn', 'Queens', 'Staten Island'];

// function preload() {
// 	table = loadTable('BoroughMaintain.csv', 'csv', 'header');
// }

function setup() {
	createCanvas(1907, 950);
	background('#000000');
	// noLoop();

	// console.log("Hi");
	// loadData();
}

function draw() {
	fill('white');

	push();
	textSize(45);
	textAlign('CENTER', 'CENTER');
	text("NYC Park Monuments", 700, 60);
	pop();

	x = 450;

	for (var i = 0; i < 5; i++) {
		h = map(bCount[i], 0, 1000, 0, 600);
		fill('white');
		rect(x, 150, 100, h);
		h = map(mCount[i], 0, 1000, 0, 600);
		fill('blue');
		rect(x, 150, 100, h);

		push();
		fill('grey');
		noStroke();
		textSize(25);
		text(columns[i], x, 140);
		pop();

		x += 200;
	}

	stroke('white');
	line(400, 150, 1450, 150);
	line(400, 150, 400, 750);
	for (var i = 0; i < 11; i++) {
		x = map(i, 0, 10, 150, 750);
		line(395, x, 405, x);

		push();
		fill('white');
		noStroke();
		textSize(20);
		text(i*100, 340, x+5);
		pop();
	}

	
}

function loadData() {
	console.log(table);
	b = table.getColumn("borough")
	m = table.getColumn("MaintainedByParks");

	for (var i = 0; i < boroughs.length; i++) {
		if (!(b[i] in bCount)) {
	        bCount[b[i]] = 0;
	        mCount[b[i]] = 0;
	    }
	    bCount[b[i]] += 1;
	    if (m == 'Y') {
	    	mCount[b[i]] += 1;
	    }

	}

	console.log(bCount);
	console.log(mCount);
}