mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA';
			
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/pankhurikumar/cjnb7luyx5iu62rrw4fpyyz9f'
});

var zooming = false;
var coords;

map.on('zstart', function(){
	console.log('zoomstart' + zooming);
	zooming = true;
});
map.on('zend', function(){
	zooming = false;
});

map.on('zoomend', function(){
	console.log('first'+zooming);
	if(zooming) {
	    new mapboxgl.Popup()
	            .setLngLat(coords.lngLat)
	            .setHTML(coords.lngLat)
	            .addTo(map);
	    map.fire('zend');
  	}
  	console.log('last'+zooming);
});

// map.on('moveend', function(){
// 	console.log('first'+zooming);
// 	if(zooming) {
// 	    new mapboxgl.Popup()
// 	            .setLngLat(coords.lngLat)
// 	            .setHTML(coords.lngLat)
// 	            .addTo(map);
// 	    map.fire('zend');
//   	}
//   	console.log('last'+zooming);
// });

zoomlevel = 8.1;
map.on('load', function() {
    map.on('click', function(e) {
    	// console.log(e.features[0].geometry.coordinates);
    	if (zoomlevel == 8)
    		zoomlevel = 8.1;
    	else
    		zoomlevel = 8;
    	coords = e;
    	map.setCenter(e.lngLat);
    	console.log(e.lngLat);
    	map.zoomTo(zoomlevel);

    	// new mapboxgl.Popup()
	    //         .setLngLat(coords.lngLat)
	    //         .setHTML(coords.lngLat)
	    //         .addTo(map);

    	map.fire('zstart');
    })
});

document.getElementById('zoomButton').addEventListener('click', function () {
    map.setCenter([12.919578242062556, 38.92232061838632])
    map.zoomTo(1.8);
});