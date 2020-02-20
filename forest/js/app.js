function mapFunction() {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  BASIC MAP SETUP
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // colors = ["#8CC739", "#192B5E", "#99B3CC"];
    // pointColors = ["#EE4540", "#C72C41", "#801336", "#510A32", "#2D142C"]
    colors = ["#00E600", "#FF0000", "#FF5A00", "#FF9A00", "#FFCE00"]
    labels = ["Protected Land", "Projects <= 10km away", "Projects <= 50km away", "Projects <= 100km away", "Projects > 100km away"];
    var m = L.map('map').setView([22.59, 80.22], 4.6);
    L.tileLayer('https://api.mapbox.com/styles/v1/pankhurikumar/cjuni6e1k2xlm1fo61xw8tdv5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 12,
            minZoom: 4.6
        }).addTo(m);

    function getColor(i) {
        return colors[i];
    }

    var legend = L.control({position: 'topright'});
    legend.onAdd = function (m) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 1, 2, 3, 4];

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
    var protectedPopupFeatures = ["NAME", "DESIG_ENG", "DESIG_TYPE", "REP_AREA", "STATUS_YR", "WDPAID", "STATUS"]
    var shpfile = new L.Shapefile('data/WDPA_Nov2019_IND-shapefile.zip', {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    if (protectedPopupFeatures.includes(k)) {
                        return ("<strong>"+ k + "</strong>: " + feature.properties[k]
                            + "<br />");
                    }
                }));
                layer._popup._content = "<strong>PROTECTED LAND</strong><br />" + layer._popup._content;
                layer._popup._content = layer._popup._content.replace(/,/g, '');
                layer._popup._content = layer._popup._content.replace('WDPAID', 'WDPA ID');
                layer._popup._content = layer._popup._content.replace('NAME', 'Name');
                layer._popup._content = layer._popup._content.replace('DESIG_ENG', 'Designation');
                layer._popup._content = layer._popup._content.replace('DESIG_TYPE', 'Level');
                layer._popup._content = layer._popup._content.replace('REP_AREA', 'Reported Area (sq. km)');
                layer._popup._content = layer._popup._content.replace('STATUS', 'Status');
                layer._popup._content = layer._popup._content.replace('STATUS_YR', 'Status Grant Year');
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
                radius: 5
            });
        }
    });
    m.addLayer(shpfile);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  PROJECTS JSON PROCESSING
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var filters = ['Category', 'State', 'Grant Year', 'colour']; 
    let allProjectLayers = [];
    let jsonFeatures = [];
    let count = [0, 0];
    // let allCategories = [];
    // let allStates = [];
    // let allYears = [];
    $.getJSON("data/AmAustColour.json", function(data) {
        data.forEach(function(item){
            let feature;
            var t = item.type;
            if (t === 'None') {
                // || t === 'Point' || t === 'Polygon') {
                count[0] = count[0] + 1;
                return
            }
            if (t === 'Resolve') {
                count[1] = count[1] + 1;
                return
            }

            if (t === 'Point') {
                feature = {type: 'Feature',
                    properties: item,
                    geometry: {
                        type: 'Point',
                        coordinates: [parseFloat(item.lng), parseFloat(item.lat)]
                    }
                };
                // if (!allCategories.includes(feature.properties[filters[0]])) {
                //     allCategories.push(feature.properties[filters[0]]);
                // }
                // if (!allStates.includes(feature.properties[filters[1]])) {
                //     allStates.push(feature.properties[filters[1]]);
                // }
                // if (!allYears.includes(feature.properties[filters[2]])) {
                //     allYears.push(feature.properties[filters[2]]);
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
                        type: 'Polygon',
                        coordinates: [arr]
                    }
                };
                // if (!allCategories.includes(feature.properties[filters[0]])) {
                //     allCategories.push(feature.properties[filters[0]]);
                // }
                // if (!allStates.includes(feature.properties[filters[1]])) {
                //     allStates.push(feature.properties[filters[1]]);
                // }
                // if (!allYears.includes(feature.properties[filters[2]])) {
                //     allYears.push(feature.properties[filters[2]]);
                // }
            }
            jsonFeatures.push(feature);
        });
        // console.log(allCategories);
        // console.log(allStates);
        // console.log(allYears);
        console.log(count);
        var projectPopupFeatures = ["Category", "Proposal Name", "EC Grant Date", "Location", "Company Name", "Project Type"];
        const geo = {type: "FeatureCollection", features: jsonFeatures};
        L.geoJson(geo, {
            onEachFeature: function (feature, layer) {
                if (feature.properties) {
                    layer.bindPopup(Object.keys(feature.properties).map(function (k) {
                        if (projectPopupFeatures.includes(k)) {
                            return ("<strong>" + k + "</strong>: " + feature.properties[k]
                                + "<br />");
                        }
                    }));
                }
                layer._popup._content = "<strong>PROJECT</strong><br />" + layer._popup._content;
                layer._popup._content = layer._popup._content.replace(/,/g, '');
                layer._popup._content = layer._popup._content.replace(/;/g, ',');
                allProjectLayers.push(layer);
                m.addLayer(layer);
            },
            style: function(feature) {
                return {
                    opacity: 1,
                    fillOpacity: 0.7,
                    weight: 0,
                    color: colors[feature.properties['colour']]
                }
            },
            pointToLayer: function (feature, latlng) {
                return new L.CircleMarker(latlng, {
                    radius: 5
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
        allProjectLayers.forEach(function(layer) {
            var properties = layer.feature.properties;
            if (selected_features[0].includes(properties[filters[0]]) 
                && selected_features[1].includes(properties[filters[1]])
                && selected_features[2].includes(properties[filters[2]])
                && selected_features[3].includes(properties[filters[3]])) {
                    m.addLayer(layer);
            } else {
                    m.removeLayer(layer);
            }
        });
    }

    var categories = ["Coal Mining", "Industrial Projects - 1", "Industrial Projects - 2", "Industrial Projects - 3", 
      "Infrastructure and Miscellaneous Projects + CRZ", "New Construction Projects and Industrial Estates",
      "Non-Coal Mining", "River Valley and Hydroelectric Projects", "Thermal Projects"];
    var states = ["Jammu and Kashmir", "Tripura", "Rajasthan", "Tamil Nadu", "Telangana", "Maharashtra", "Himachal Pradesh", "Kerala", 
      "Punjab", "Orissa", "Uttar Pradesh", "Andhra Pradesh", "Delhi", "Karnataka", "Gujarat", "West Bengal", "Chhattisgarh", "Mizoram",
      "Jharkhand", "Assam", "Haryana", "Madhya Pradesh", "Manipur", "Bihar", "Andaman and Nicobar", "Dadra and Nagar Haveli", "Arunachal Pradesh",
      "Puducherry", "Uttarakhand", "Goa", "Daman and Diu", "Meghalaya", "Sikkim"];
    var years = ["2004", "2006", "2014", "2015", "2016", "2017", "2018", "2019", "Unavailable"];
    var colourLabels = ["Less than 10km", "10 - 50km", "50 - 100km", "More than 100km"]
    var colourOptions = [1, 2, 3, 4]
    let selected_features = [categories, states, years, colourOptions];

    $(document).ready(function() {  
        var cat = document.getElementById("cat");
        for (i in categories) {
            cat.innerHTML += "<option>" + categories[i] + "</option>";
        }

        var st = document.getElementById("state");
        for (i in states) {
            st.innerHTML += "<option>" + states[i] + "</option>";
        }

        var yr = document.getElementById("year");
        for (i in years) {
            yr.innerHTML += "<option>" + years[i] + "</option>";
        }

        var c = document.getElementById("colour");
        for (i in years) {
            c.innerHTML += "<option>" + colourLabels[i] + "</option>";
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

        $('#year').on('change', function () {
            selected_features[2] = $(this).val();
            if (!selected_features[2]) {
                selected_features[2] = years;
            }
            showLayer();
        });

        $('#colour').on('change', function () {
            selected_features[3] = []
            if (!$(this).val()) {
                selected_features[3] = [1, 2, 3, 4];
            }
            for (var opt in $(this).val()) {
                var i = colourLabels.indexOf($(this).val()[opt])
                selected_features[3].push(i+1)
            }
            showLayer();
        });
    });
}