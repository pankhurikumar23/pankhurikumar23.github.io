colors = ["#006834", "#040719"];
var m = L.map('map').setView([22.59, 82.22], 5);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.light',
	accessToken: 'pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA'
}).addTo(m);

function getColor(i) {
    return colors[i];
}

var legend = L.control({position: 'topright'});
legend.onAdd = function (m) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 1],
        labels = ["Protected Land", "Projects"];

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i]) + '"></i> ' + labels[i] + '<br>';
    }
    return div;
};
legend.addTo(m);

var shpfile = new L.Shapefile('data/WDPA_Nov2019_IND-shapefile.zip', {
	onEachFeature: function(feature, layer) {
		if (feature.properties) {
			layer.bindPopup(Object.keys(feature.properties).map(function(k) {
				return k + ": " + feature.properties[k];
			}).join("<br />"), {
				maxHeight: 200
			});
            layer._popup._content = "<strong>PROTECTED LAND</strong><br />" + layer._popup._content;
		}
	},
	style: function() {
        return {
            opacity: 1,
            fillOpacity: 0.7,
            weight: 0,
            color: colors[0]
        }
    },
	pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            opacity: 1,
            fillOpacity: 0.7,
            radius: 5,
            weight: 0,
            color: colors[0]
        });
    }
});
shpfile.addTo(m);
shpfile.once("data:loaded", function() {
	console.log("finished loaded shapefile");
});

var jsonFeatures = [];
$.getJSON("data/data_coords.json", function(data) {
    data.forEach(function(item){
        let feature;
        var t = item.type;
        if (t === 'District' || !item.hasOwnProperty('type')) {
            return
        }

        if (t === 'Point') {
            feature = {type: 'Feature',
                properties: item,
                geometry: {
                    type: t,
                    coordinates: [parseFloat(item.lng), parseFloat(item.lat)]
                }
            };
        } else if (t === 'Polygon') {
            let c1 = L.latLng(parseFloat(item.corner1[1]), parseFloat(item.corner1[0]));
            let c2 = L.latLng(parseFloat(item.corner2[1]), parseFloat(item.corner2[0]));
            let b = L.latLngBounds(c1, c2);
            let arr = [[b.getSouthWest().lat, b.getSouthWest().lng],
                [b.getSouthEast().lat, b.getSouthEast().lng],
                [b.getNorthEast().lat, b.getNorthEast().lng],
                [b.getNorthWest().lat, b.getNorthWest().lng]];
            feature = {
                type: 'Feature',
                properties: item,
                geometry: {
                    type: t,
                    coordinates: [arr]
                }
            };
        }

        jsonFeatures.push(feature);
    });
    const geo = {type: "FeatureCollection", features: jsonFeatures};
    // console.log(geo);
    try {
        var geojsonLayer = L.geoJson(geo, {
            onEachFeature: function (feature, latlng) {
                if (feature.properties) {
                    latlng.bindPopup(Object.keys(feature.properties).map(function (k) {
                        return k + ": " + feature.properties[k];
                    }).join("<br />"), {
                        maxHeight: 200
                    });
                }
                latlng._popup._content = "<strong>PROJECT</strong><br />" + latlng._popup._content;
            },
            style: function () {
                return {
                    opacity: 1,
                    fillOpacity: 0.7,
                    weight: 0,
                    color: colors[1]
                }
            },
            pointToLayer: function (feature, latlng) {
                return new L.CircleMarker(latlng, {
                    radius: 5,
                    fillOpacity: 0.7,
                    color: colors[1]
                });
            }
        });
    } catch (error) {
        console.log(error);
    }
    // console.log(geojsonLayer);
    geojsonLayer.addTo(m);
});