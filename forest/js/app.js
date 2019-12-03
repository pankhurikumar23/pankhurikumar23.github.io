function mapFunction() {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  BASIC MAP SETUP
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    colors = ["#006834", "#040719"];
    labels = ["Protected Land", "Projects"];
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
            grades = [0, 1];

        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i]) + '"></i> ' + labels[i] + '<br>';
        }
        return div;
    };
    legend.addTo(m);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  PROTECTED AREAS SHAPEFILE PROCESSING
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var protectedPopupFeatures = ["NAME", "DESIG_ENG", "DESIG_TYPE", "REP_AREA", "STATUS_YR", "WDPAID"]
    var shpfile = new L.Shapefile('data/WDPA_Nov2019_IND-shapefile.zip', {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    if (protectedPopupFeatures.includes(k)) {
                        return (k + ": " + feature.properties[k]
                            + "<br />");
                    }
                }));
                layer._popup._content = "<strong>PROTECTED LAND</strong><br />" + layer._popup._content;
                layer._popup._content = layer._popup._content.replace(/,/g, '');
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  PROJECTS JSON PROCESSING
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var filters = ['Category', 'Location: State']; 
    let allLayers = [];
    let jsonFeatures = [];
    // let allCategories = [];
    // let allStates = [];
    $.getJSON("data/dated_data.json", function(data) {
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
                // if (!categories.includes(feature.properties[filters[0]])) {
                //     categories.push(feature.properties[filters[0]]);
                // }
                // if (!allStates.includes(feature.properties[filters[1]])) {
                //     allStates.push(feature.properties[filters[1]]);
                // }
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
                // if (!categories.includes(feature.properties[filters[0]])) {
                //     categories.push(feature.properties[filters[0]]);
                // }
                // if (!allStates.includes(feature.properties[filters[1]])) {
                //     allStates.push(feature.properties[filters[1]]);
                // }
            }

            jsonFeatures.push(feature);
        });

        var projectPopupFeatures = ["Category", "Proposal Name", "EC Grant Date", "Location", "Company Name", "Project Type"];
        const geo = {type: "FeatureCollection", features: jsonFeatures};
        L.geoJson(geo, {
            onEachFeature: function (feature, layer) {
                if (feature.properties) {
                    layer.bindPopup(Object.keys(feature.properties).map(function (k) {
                        if (projectPopupFeatures.includes(k)) {
                            return (k + ": " + feature.properties[k]
                                + "<br />");
                        }
                    }));
                }
                layer._popup._content = "<strong>PROJECT</strong><br />" + layer._popup._content;
                layer._popup._content = layer._popup._content.replace(/,/g, '');
                allLayers.push(layer);
                m.addLayer(layer);
            },
            style: function() {
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
        })
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  FILTERING LOGIC
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function showLayer() {
        allLayers.forEach(function(layer) {
            var properties = layer.feature.properties;
            if (selected_features[0].includes(properties[filters[0]]) && selected_features[1].includes(properties[filters[1]])) {
                m.addLayer(layer);
            } else {
                m.removeLayer(layer);
            }
        });
    }

    var categories = ["Coal Mining", "Industrial Projects - 1", "Industrial Projects - 2", "Industrial Projects - 3", 
      "Infrastructure and Miscellaneous Projects + CRZ", "New Construction Projects and Industrial Estates",
      "Non-Coal Mining", "River Valley and Hydroelectric Projects", "Thermal Projects"];
    var states = ["Jammu and Kashmir", "Tripura", "Rajasthan", "Tamil Nadu", "Telangana", "Maharashtra", "Punjab", "Uttar Pradesh", "Andhra Pradesh", "Delhi",
    "Karnataka", "Himachal Pradesh", "Gujarat", "Orissa", "West Bengal", "Chhattisgarh", "Mizoram", "Jharkhand", "Assam", "Haryana", "Kerala", "Dadar and Nagar Haveli",
    "Jharkhand\n", "Uttar Pradesh\n", "Arunachal Pradesh", "Uttar PradeshDistrict", "Uttarakhand", "Andaman and Nicobar", "MAharashtra", "Goa", "Kerla", "Madhya Pradesh",
    "Bihar", "Meghalaya", "Sikkim"];
    let selected_features = [categories, states];

    $(document).ready(function() {
        m.addLayer(shpfile);
        
        var cat = document.getElementById("cat");
        for (i in categories) {
            cat.innerHTML += "<option>" + categories[i] + "</option>";
        }

        var st = document.getElementById("state");
        for (i in states) {
            st.innerHTML += "<option>" + states[i] + "</option>";
        }

        $('#cat').on('change', function () {
            selected_features[0] = $(this).val();
            if (!selected_features[0]) {
                selected_features[0] = categories;
            }
            showLayer();
        });

        $('#state').on('change', function () {
            selected_features[1] = $(this).val();
            if (!selected_features[1]) {
                selected_features[1] = states;
            }
            showLayer();
        });
    });
}