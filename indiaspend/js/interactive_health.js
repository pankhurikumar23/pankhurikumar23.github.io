mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA';
lineCount = 543;
parameterCount = 8;
skipCount = 8;
pcLabels = [];
pcData = [];
headers = [];
stateDict = {};

mapDict = {
	'0': 'mapbox://styles/pankhurikumar/cjuavnus01j861fo3ss3mb7s1',
	'1': 'mapbox://styles/pankhurikumar/cjuaw0zfv0mc21flg097789ok',
	'2': 'mapbox://styles/pankhurikumar/cjuaweuvq7dty1fnyqvb3zmqr'
}

map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/pankhurikumar/cjuavnus01j861fo3ss3mb7s1'
});
runMap();

function runMap() {
	var nav = new mapboxgl.NavigationControl();
	map.addControl(nav, 'top-left');

	var geocoder = new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	});
	geo = document.getElementById('geocoder');
	// console.log(geo.childNodes.length);
	if (geo.childNodes.length > 0) {
		geo.removeChild(geo.childNodes[0]);
	}
	document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

	map.on('load', function() {
	    map.on('mousemove', function(e) {
			var pc = map.queryRenderedFeatures(e.point, {layers: ['india_pc_2014_data-2p6jty']});

			if (pc.length > 0) {
				var flag = getFlag(pc[0].properties.PC_NAME);
				displayText = '<h3>' + pc[0].properties.PC_NAME + '</h3>';
				for(i = 0; i < parameterCount; i++) {
					displayText += '<p>' + headers[i + 1 + skipCount] + ': ' + pcData[flag][i] + '</p>';
				}
				document.getElementById('pd').innerHTML = displayText
			} else {
				document.getElementById('pd').innerHTML = '<p>Drag the map to find your constituency!</p>';
			}
		});
	});
}

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

$("#dd-health").change(function() {
	sel = parseInt($(this).val());
	map.remove();
	map = new mapboxgl.Map({
		container: 'map',
		style: mapDict[sel]});
	runMap();
});

document.getElementById('zoomButton').addEventListener('click', function () {
	map.flyTo({center: [83.16, 22.27], zoom: 5.01});
});