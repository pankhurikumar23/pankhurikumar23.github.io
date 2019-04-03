mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA';
lineCount = 539;
parameterCount = 2;
pcLabels = [];
pcData = [];

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/pankhurikumar/cju06wfst03vs1fmtmq3zdtrl'
});

function getStates() {
	var mySource = map.getLayer('p_constituencies');
	console.log(mySource);
	// return mySource;
}

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "assets/NFHS_PC.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');

    for (var i = 0; i < lineCount; i++) {
        var data = allTextLines[i+1].split(',');
        pcLabels[i] = data[0];
        pcData[i] = [];
        for (var k = 0; k < parameterCount; k++) {
        	pcData[i][k] = data[k+1];
        }
    }
    // console.log(pcLabels);
}

function getFlag(name) {
	stateFlag = -1;
	// console.log(name);
	upperName = name.toUpperCase();

	for (var i = 0; i < lineCount; i++) {
		if (pcLabels[i] === upperName) {
			stateFlag = i;
		}
	}
	// console.log(stateFlag);

	return stateFlag;
}

map.on('load', function() {
    map.on('mousemove', function(e) {
		var pc = map.queryRenderedFeatures(e.point, {layers: ['p_constituencies']});
		var flag = getFlag(pc[0].properties.PC_NAME);

		if (flag > -1) {
			document.getElementById('pd').innerHTML = '<h3><strong>' + pc[0].properties.PC_NAME + '</strong></h3><p><strong> IMR: ' + pcData[flag][0] + '</strong></p><p><strong> Sex Ratio: ' + pcData[flag][1] + '</strong></p>';
			// displayName(states[0].properties.NAME);
		} else {
			document.getElementById('pd').innerHTML = '<p>Hover over a constituency!</p>';
		}
	});
});