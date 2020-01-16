function mapFunction() {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  BASIC MAP SETUP
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    colors = ["#fa9fb5", "#C51B8A"];
    labels = ["Protected Land", "Projects"];
    var m = L.map('map').setView([22.59, 82.22], 5);
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 18,
        ext: 'png'
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
    m.addLayer(shpfile);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  PROJECTS JSON PROCESSING
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var filters = ['Category', 'State', 'Grant Year']; 
    let allLayers = [];
    let jsonFeatures = [];
    // let allCategories = [];
    // let allStates = [];
    // let allYears = [];
    $.getJSON("data/final_dated_data.json", function(data) {
        data.forEach(function(item){
            let feature;
            var t = item.type;
            if (t === 'District' || t === null || !item.hasOwnProperty('type')) {
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
                        type: t,
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
            } else if (t === 'Mpoint') {
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
            }

            jsonFeatures.push(feature);
        });
        // console.log(allCategories);
        // console.log(allStates);
        // console.log(allYears);
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
                layer._popup._content = layer._popup._content.replace(/;/g, ',');
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
            if (selected_features[0].includes(properties[filters[0]]) 
                && selected_features[1].includes(properties[filters[1]])
                && selected_features[2].includes(properties[filters[2]])) {
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
      "Arunachal Pradesh", "Uttarakhand", "Andaman and Nicobar", "Goa", "Madhya Pradesh", "Bihar", "Meghalaya", "Sikkim", "Puducherry"];
    var years = ["2006", "2014", "2015", "2016", "2017", "2018", "2019", "Unavailable"];
    let selected_features = [categories, states, years];

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
    });
}