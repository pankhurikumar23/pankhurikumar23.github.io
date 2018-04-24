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

stateLabels = [];
stateData = [];
stateCount = 31;
parameterCount = 9;

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "assets/View1.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');

    for (var i = 0; i < stateCount; i++) {
        var data = allTextLines[i+1].split(',');
        stateLabels[i] = data[0];
        stateData[i] = [];
        for (var k = 0; k < parameterCount; k++) {
        	stateData[i][k] = data[k+1];
        }
    }
    // console.log(stateData);
}

// function draw() {
// 	textSize(15);
// 	textStyle(BOLD);
// 	background('#1A1A1A');

// 	createAnimation();

// 	if (fl > 45) {
// 		createLegend();
// 		drawIMR();
// 		drawLiteracy();
// 		drawHealth();
// 	}
// }

// function createAnimation() {
// 	for(var i = 0; i < totalCount; i++) {
// 		colours[i] = map(imr[i], 5, 67, 100, 255);
// 		fill(colours[i], 0, 100);
// 		finalX[i] = map(i, 0, 32, 1680, -80);
// 		if (stateLabels[i] == 'India') {
// 			colours[i] = 200;
// 			fill(colours[i], colours[i], colours[i]);
// 			finalX[i]-= 10;
// 		}
// 		if (isAnimating()) {
// 			x = finalX[i] + (initialX - finalX[i]) * percAnim();
// 			y = finalY + (initialY[i] - finalY) * percAnim();
// 			text(stateLabels[i], x, y);
// 			text(imr[i], x, y + 20);
// 		} else {
// 			if (fl <= 0) {
// 				y = map(i, 0, 32, 30, 920);
// 				initialY[i] = y;
// 				text(stateLabels[i], initialX, y);
// 				text(imr[i], initialX + 60, y);
// 			} else {
// 				noStroke();
// 				text(stateLabels[i], finalX[i], finalY);
// 				text(imr[i], finalX[i], finalY + 20);
// 				stroke(150, 150, 150);
// 				line(20, finalY - 20, 1710, finalY - 20);
// 				line(1710, minAxis, 1710, maxAxis - 10);
// 			}
// 		}
// 	}

// 	if (isAnimating()) {
// 		currAnim--;
// 	}

// 	if (fl == 0) {
// 		currAnim = maxAnim;
// 		fl = 1;
// 	} else {
// 		fl++;
// 	}
// }

// function isAnimating() {
// 	return (currAnim != 0);
// }

// function percAnim() {
// 	return (currAnim / maxAnim);
// }

// function createLegend() {
// 	noStroke();
// 	indicator = -1;

// 	for (var i = 0; i < 3; i++) {
// 		if (abs(mouseX - labelX[i]) < textWidth(headings[i]) && abs(mouseY - labelY[i]) < 15 && abs(labelX[i] + textWidth(headings[i]) - mouseX) < textWidth(headings[i])) {
// 			indicator = i;
// 		}
// 	}
// 	if (indicator == 0){
// 		drawHealth(backgroundTransparency);
// 		drawLiteracy(backgroundTransparency);
// 		drawIMR(foregroundTransparency);
// 	} else if (indicator == 1) {
// 		drawIMR(backgroundTransparency);
// 		drawLiteracy(backgroundTransparency);
// 		drawHealth(foregroundTransparency);
// 	} else if (indicator == 2) {
// 		drawIMR(backgroundTransparency);
// 		drawHealth(backgroundTransparency);
// 		drawLiteracy(foregroundTransparency);
// 	} else {
// 		drawIMR();
// 		drawHealth();
// 		drawLiteracy();
// 	}
// 	indicator = -1;
// }

// function drawIMR(t = initialTransparency) {
// 	noStroke();
// 	fill(0, 200, 150);
// 	text(headings[0], labelX[0], labelY[0]);
// 	for (var i = 0; i < totalCount; i++) {
// 		y = map(imr[i], 0, 100, minAxis, maxAxis);
// 		fill(0, 200, 150, t);
// 		if (stateLabels[i] == 'N. Avg.') {
// 			fill(colours[i], colours[i], colours[i], t);
// 		}
// 		rect(finalX[i] + 10, y, 10, finalY - 20 - y);
// 		fill(150,150,150, t);
// 		text(imr[i], finalX[i], y - 10);
// 	}
// }

// function drawHealth(t = initialTransparency) {
// 	noStroke();
// 	fill(250, 200, 0);
// 	text(headings[1], labelX[1], labelY[1]);
// 	for (var i = 0; i < totalCount; i++) {
// 		y = map(health[i], 0, 100, minAxis, maxAxis);
// 		fill(250, 200, 0, t);
// 		if (stateLabels[i] == 'N. Avg.') {
// 			fill(colours[i], colours[i], colours[i], t);
// 		}
// 		rect(finalX[i] + 10, y, 10, finalY - 20 - y);
// 		fill(150,150,150, t);
// 		text(health[i], finalX[i], y - 10);
// 	}
// }

// //TODO: Triangles and color
// function drawLiteracy(t = initialTransparency) {
// 	noStroke();
// 	fill(20, 20, 150);
// 	text(headings[2], labelX[2], labelY[2]);
// 	for (var i = 0; i < totalCount; i++) {
// 		y = map(literacy[i], 0, 100, minAxis, maxAxis);
// 		fill(20, 20, 150, t);
// 		if (stateLabels[i] == 'N. Avg.') {
// 			fill(colours[i], colours[i], colours[i], t);
// 		}
// 		rect(finalX[i] + 10, y, 10, finalY - 20 - y);
// 		fill(150,150,150, t);
// 		text(literacy[i], finalX[i], y - 10);
// 	}
// }


function displayName(stateName) {
	var item = document.getElementById('stateName');
	if (stateName === "Uttaranchal") {
		stateName = "Uttarakhand";
	}
	item.innerHTML = stateName;

	var price = document.getElementById('price');

	stateFlag = 0;
	for (var i = 0; i < stateCount; i++) {
		if (stateLabels[i] === stateName) {
			stateFlag = i;
		}
	}

	price.innerHTML = "Average Hospital Expenditure: Rs. " + stateData[stateFlag][8];

	changeLiteracy(stateFlag);
	changeHealth(stateFlag);
	changeIMR(stateFlag);
}

function changeLiteracy(stateFlag) {
	labels = ['women', 'men', 'ten', 'women_text', 'men_text', 'ten_text'];

	var literacy = document.getElementById('literacy');
	var svgns = "http://www.w3.org/2000/svg";

	for (var i = 0; i < 6; i++) {
		var element = document.getElementById(labels[i]);
		if (element) {
			element.parentNode.removeChild(element);
		}
	}

	for (var i = 0; i < 3; i++) {
		var rect = document.createElementNS(svgns, 'rect');
		rect.setAttributeNS(null, 'x', 70 + 130*i);
		rect.setAttributeNS(null, 'y', 179 - stateData[stateFlag][i + 2]);
		rect.setAttributeNS(null, 'height', stateData[stateFlag][i + 2]);
		rect.setAttributeNS(null, 'width', '50');
		rect.setAttributeNS(null, 'id', labels[i]);
		rect.setAttributeNS(null, 'style', 'fill:rgb(0,0,255)');

		literacy.appendChild(rect);
	}

	for (var i = 0; i < 3; i++) {
		var t = document.createElementNS(svgns, 'text');
		t.setAttributeNS(null, 'x', 72 + 130*i);
		t.setAttributeNS(null, 'y', 169 - (stateData[stateFlag][i + 2]));
		t.setAttributeNS(null, 'style', 'fill:rgb(255,0,0)');
		t.setAttributeNS(null, 'id', labels[i + 3]);
		t.innerHTML = stateData[stateFlag][i + 2] + '%';

		literacy.appendChild(t);
	}
}

function changeHealth(stateFlag) {
	labels = ['antenatal', 'anemic', 'institutional', 'antenatal_text', 'anemic_text', 'institutional_text'];

	var health = document.getElementById('health');
	var svgns = "http://www.w3.org/2000/svg";

	for (var i = 0; i < 6; i++) {
		var element = document.getElementById(labels[i]);
		if (element) {
			element.parentNode.removeChild(element);
		}
	}

	for (var i = 0; i < 3; i++) {
		var rect = document.createElementNS(svgns, 'rect');
		rect.setAttributeNS(null, 'x', 70 + 130*i);
		rect.setAttributeNS(null, 'y', 179 - stateData[stateFlag][i + 5]);
		rect.setAttributeNS(null, 'height', stateData[stateFlag][i + 5]);
		rect.setAttributeNS(null, 'width', '50');
		rect.setAttributeNS(null, 'id', labels[i]);
		rect.setAttributeNS(null, 'style', 'fill:rgb(0,0,255)');

		health.appendChild(rect);
	}

	for (var i = 0; i < 3; i++) {
		var t = document.createElementNS(svgns, 'text');
		t.setAttributeNS(null, 'x', 72 + 130*i);
		t.setAttributeNS(null, 'y', 169 - (stateData[stateFlag][i + 5]));
		t.setAttributeNS(null, 'style', 'fill:rgb(255,0,0)');
		t.setAttributeNS(null, 'id', labels[i + 3]);
		t.innerHTML = stateData[stateFlag][i + 5] + '%';

		health.appendChild(t);
	}

}

function changeIMR(stateFlag) {
	var imr = document.getElementById('imr');
	var svgns = "http://www.w3.org/2000/svg";

	x = 20;
	y = 25;
	for (var i = 0; i < 1000; i++) {
		var rect = document.createElementNS(svgns, 'rect');
		rect.setAttributeNS(null, 'x', x);
		rect.setAttributeNS(null, 'y', y);
		rect.setAttributeNS(null, 'height', 10);
		rect.setAttributeNS(null, 'width', 10);
		if (i < stateData[stateFlag][0])
			rect.setAttributeNS(null, 'style', 'fill:rgb(255,0,0)');
		else if (i < stateData[stateFlag][1])
			rect.setAttributeNS(null, 'style', 'fill:rgb(0, 0, 255');
		else
			rect.setAttributeNS(null, 'style', 'fill:rgb(20, 60, 45)');

		imr.appendChild(rect);
		x += 15;
		if (x > 760) {	
			y += 15;
			x = 20;
		}
	}
}
