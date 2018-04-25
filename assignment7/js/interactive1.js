stateLabels = [];
stateData = [];
stateCount = 30;
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
		rect.setAttributeNS(null, 'style', 'fill:#7BD4CC');

		literacy.appendChild(rect);
	}

	for (var i = 0; i < 3; i++) {
		var t = document.createElementNS(svgns, 'text');
		t.setAttributeNS(null, 'x', 72 + 130*i);
		t.setAttributeNS(null, 'y', 169 - (stateData[stateFlag][i + 2]));
		t.setAttributeNS(null, 'style', 'fill:#037367; font-family: Open Sans');
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
		rect.setAttributeNS(null, 'style', 'fill:#7BD4CC');

		health.appendChild(rect);
	}

	for (var i = 0; i < 3; i++) {
		var t = document.createElementNS(svgns, 'text');
		t.setAttributeNS(null, 'x', 72 + 130*i);
		t.setAttributeNS(null, 'y', 169 - (stateData[stateFlag][i + 5]));
		t.setAttributeNS(null, 'style', 'fill:#037367; font-family: Open Sans');
		t.setAttributeNS(null, 'id', labels[i + 3]);
		t.innerHTML = stateData[stateFlag][i + 5] + '%';

		health.appendChild(t);
	}

}

function changeIMR(stateFlag) {
	var imr = document.getElementById('imr');
	var svgns = "http://www.w3.org/2000/svg";

	x = 20;
	y = 35;
	for (var i = 0; i < 1000; i++) {
		var rect = document.createElementNS(svgns, 'rect');
		rect.setAttributeNS(null, 'x', x);
		rect.setAttributeNS(null, 'y', y);
		rect.setAttributeNS(null, 'height', 10);
		rect.setAttributeNS(null, 'width', 10);
		if (i < stateData[stateFlag][0])
			rect.setAttributeNS(null, 'style', 'fill:#7BD4CC');
		else if (i < stateData[stateFlag][1])
			rect.setAttributeNS(null, 'style', 'fill:#037367');
		else
			rect.setAttributeNS(null, 'style', 'fill:#24473a');

		imr.appendChild(rect);
		x += 15;
		if (x > 580) {	
			y += 15;
			x = 20;
		}
	}
}
