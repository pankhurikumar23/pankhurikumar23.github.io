mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA';
lineCount = 539;
parameterCount = 17;
pcLabels = [];
pcData = [];

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/pankhurikumar/cju1idk3t1c401fs0evoybqre'
});
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "assets/PC_MASTERDATA.csv",
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
    // console.log(pcData);
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
		var pc = map.queryRenderedFeatures(e.point, {layers: ['india-pc-2019-509smk']});
		var flag = getFlag(pc[0].properties.PC_NAME);

		if (flag > -1) {
			document.getElementById('pd').innerHTML = '<h3><strong>' + pc[0].properties.PC_NAME + '</strong></h3>' +
			'<p><strong> IMR: ' + pcData[flag][0] + '</strong></p>' + '<p><strong> Sex ratio (Females per 1,000 males): ' + pcData[flag][1] + '</strong></p>' + 
			'<p><strong> Women with 10 or more years of schooling (In %): ' + pcData[flag][2] + '</strong></p>' + '<p><strong> Average out of pocket expenditure per delivery in public health facility (In Rs): ' + pcData[flag][3] + '</strong></p>' +
			'<p><strong> Institutional births (In %): ' + pcData[flag][4] + '</strong></p>' + '<p><strong> Diarrhoea prevalence (reported) among children aged 0-5 years in the last 2 weeks preceding the survey (In %): ' + pcData[flag][5] + '</strong></p>' +
			'<p><strong> Stunting among children under 5 (In %): ' + pcData[flag][6] + '</strong></p>' + '<p><strong> Wasting among children under  (In %): ' + pcData[flag][7] + '</strong></p>' +
			'<p><strong> Underweight among children under 5 (In %): ' + pcData[flag][8] + '</strong></p>' + '<p><strong> Anaemia prevalence among children aged 6-59 months (In %): ' + pcData[flag][9] + '</strong></p>' +
			'<p><strong> Anaemia prevalence among women (In %): ' + pcData[flag][10] + '</strong></p>' + '<p><strong> Rural_MPCE_URP: ' + pcData[flag][11] + '</strong></p>' +
			'<p><strong> Urban_MPCE_URP: ' + pcData[flag][12] + '</strong></p>' + '<p><strong> Rural_MPCE_MRP: ' + pcData[flag][13] + '</strong></p>' +
			'<p><strong> Urban_MPCE_MRP: ' + pcData[flag][14] + '</strong></p>' + '<p><strong> Rural_LFPR: ' + pcData[flag][15] + '</strong></p>' +
			'<p><strong> Urban_LFPR: ' + pcData[flag][16] + '</strong></p>';
			// displayName(states[0].properties.NAME);
		} else {
			document.getElementById('pd').innerHTML = '<p>Hover over a constituency!</p>';
		}
	});
});