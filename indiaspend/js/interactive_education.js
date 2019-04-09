mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA';
lineCount = 543;
parameterCount = 4;
skipCount = 10;
pcLabels = [];
pcData = [];
headers = [];
stateDict = {};

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/pankhurikumar/cjua34vzg756s1flgqry54zwd'
});
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

var geocoder = new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
	mapboxgl: mapboxgl
});
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "assets/Dev Indicators - 543 - FINAL.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    headers = allTextLines[0].split(',');

    for (var i = 0; i < lineCount; i++) {
        var data = allTextLines[i+1].split(',');
        pcLabels[i] = data[0];
        pcData[i] = [];
        for (var k = 0; k < parameterCount; k++) {
        	pcData[i][k] = data[k + 1 + skipCount];
        }
    }
}

function getFlag(name) {
	stateFlag = -1;

	for (var i = 0; i < lineCount; i++) {
		if (pcLabels[i] === name) {
			stateFlag = i;
		}
	}
	return stateFlag;
}

map.on('load', function() {
    map.on('mousemove', function(e) {
		var pc = map.queryRenderedFeatures(e.point, {layers: ['india-pc-20141-74ck9p']});

		if (pc.length > 0) {
			var flag = getFlag(pc[0].properties.PC_NAME);
			displayText = '<h3>' + pc[0].properties.PC_NAME + '</h3>';
			for(i = 0; i < parameterCount; i++) {
				displayText += '<p>' + headers[i + 1 + skipCount] + ': ' + pcData[flag][i] + '</p>';
			}
			document.getElementById('pd').innerHTML = displayText
		} else {
			document.getElementById('pd').innerHTML = '<p>Hover over a constituency!</p>';
		}
	});
});

document.getElementById('zoomButton').addEventListener('click', function () {
	map.flyTo({center: [83.16, 22.27], zoom: 5.01});
});