mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/pankhurikumar/cjfox2e133gle2rn0qjvi48wj'
});

map.on('load', function() {
	// map.addSource("states", {
 //        "type": "geojson",
 //        "data": "assets/india_states.geojson"
 //    });

	// map.addLayer({
 //        "id": "state-fills-hover",
 //        "type": "fill",
 //        "source": "states",
 //        "layout": {},
 //        "paint": {
 //            "fill-color": "#627BC1",
 //            "fill-opacity": 1
 //        },
 //        "filter": ["==", "name", ""]
 //    });

    map.on('mousemove', function(e) {
		var state = map.queryRenderedFeatures(e.point, {layers: ['indianstates']});

		if (states.length > 0) {
			document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.NAME + '</strong></h3><p><strong><em>' + states[0].properties.density + '</strong> people per square kilometre</em></p>';
			displayName(state[0].properties.NAME);
		} else {
			document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
		}
	});

	// map.on("mousemove", "state-fills", function(e) {
	// 	var state = map.queryRenderedFeatures(e.point, {layers: ['indianstates']});
 //        map.setFilter("state-fills-hover", ["==", "name", state[0].properties.name]);
 //    });

 //    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
 //    map.on("mouseleave", "state-fills", function() {
 //        map.setFilter("state-fills-hover", ["==", "name", ""]);
 //    });

	var layers = ['0-100', '100-300', '300-500', '500-1000', '1000-9000', '9000+'];
	var colors = ['#f1eef6','#d0d1e6','#a6bddb','#74a9cf','#2b8cbe','#045a8d'];

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

	