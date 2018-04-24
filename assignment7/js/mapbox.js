mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/pankhurikumar/cjfox2e133gle2rn0qjvi48wj'
});

map.on('load', function() {

	var layers = ['0-100', '100-300', '300-500', '500-1000', '1000-9000', '9000+'];
	var colors = ['#feebe2', '#fcc5c0', '#fa9fb5', '#f768a1', '#c51b8a', '#7a0177'];

	for (i = 0; i < layers.length; i++) {
		var layer = layers[i];
		var color = colors[i];
		var item = document.createElement('div');
		var key = document.createElement('span');
		key.className = 'legend-key';
		key.style.backgroundColor = color;

		var value = document.createElement('span');
		value.innerHTML = layer;
		item.appendChild(key);
		item.appendChild(value);
		legend.appendChild(item);
	}
});

map.on('mousemove', function(e) {
	var states = map.queryRenderedFeatures(e.point, {layers: ['indianstates']});

	if (states.length > 0) {
		document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.NAME + '</strong></h3><p><strong><em>' + states[0].properties.density + '</strong> people per square kilometre</em></p>';
		displayName(states[0].properties.NAME);
	} else {
		document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
	}
});