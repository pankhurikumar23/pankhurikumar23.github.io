function mapFunction() {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  BASIC MAP SETUP
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    colors = ["#00A100", "#540B0E", "#ff006e", "#E09F3E", "#FFCA3A", "#FAAE7B", "#0088AA"]
    labels = ["Protected Areas", "Projects Within Protected Areas", "Projects =< 10km away", "Projects =< 50km away", "Projects =< 100km away", "Projects > 100km away"];
    var m = L.map('map').setView([23, 82.72], 4.5);
    // https://api.mapbox.com/styles/v1/pankhurikumar/ck9bwfsbu0b571iqgnudrdsr0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA
    L.tileLayer('https://api.mapbox.com/styles/v1/pankhurikumar/cjuni6e1k2xlm1fo61xw8tdv5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGFua2h1cmlrdW1hciIsImEiOiJjamZwbnV2OTcxdXB1MzBudnViY2p3aDEzIn0.Zf9ZkY05gz_Zsyen1W1FbA', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 14,
            minZoom: 5,
            maxBoundsViscosity: 1.0
        }).addTo(m);
    var southwest = L.latLng(5.36246686553575, 63.71972656250001),
        northeast = L.latLng(37.020098201368114, 102.73437500000001),
        bounds = L.latLngBounds(southwest, northeast);
    m.setMaxBounds(bounds);

    function getColor(i) {
        return colors[i];
    }

    var legend = L.control({position: 'topright'});
    var visibleProjectsCount = 2053;
    legend.onAdd = function (m) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 1, 2, 3, 4, 5];

        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i]) + '"></i><div class="legend-label">' + labels[i] + '</div>';
        }
        div.innerHTML += '<br><div style="font-size:18px;color:#1d3557"><b>' + visibleProjectsCount + ' projects displayed</b></div>';
        return div;
    };
    legend.addTo(m);

    var ghat = new L.marker([14.5, 76], { opacity: 0.0 }); //opacity may be set to zero
    ghat.bindTooltip("Western Ghats Biodiversity Hotspot", {permanent: true, className: "hotspot", offset: [0, 0], direction: "left" });
    ghat.addTo(m);

    var him = new L.marker([28, 80.5], { opacity: 0.0 }); //opacity may be set to zero
    him.bindTooltip("Himalayas Biodiversity Hotspot", {permanent: true, className: "hotspot", offset: [0, 0], direction: "right" });
    him.addTo(m);

    var burma = new L.marker([18, 88.5], { opacity: 0.0 }); //opacity may be set to zero
    burma.bindTooltip("Indo-Burma Biodiversity Hotspot", {permanent: true, className: "hotspot", offset: [0, 0], direction: "right" });
    burma.addTo(m);

    var sun = new L.marker([8.5, 87.5], { opacity: 0.0 }); //opacity may be set to zero
    sun.bindTooltip("Sundaland Biodiversity Hotspot", {permanent: true, className: "hotspot", offset: [0, 0], direction: "right" });
    sun.addTo(m);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  PROTECTED AREAS SHAPEFILE PROCESSING
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var protectedPopupFeatures = ["NAME", "DESIG_ENG", "DESIG_TYPE", "REP_AREA", "STATUS_YR", "WDPAID", "STATUS"]
    var protectedfile = new L.Shapefile('data/WDPA_Nov2019_IND-shapefile.zip', {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    if (protectedPopupFeatures.includes(k)) {
                        return ("<strong>"+ k + "</strong>: " + feature.properties[k]
                            + "<br />");
                    }
                }));
                layer._popup._content = "<strong>PROTECTED AREA</strong><br />" + layer._popup._content;
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
    m.addLayer(protectedfile);

    $.getJSON("data/himalaya.geojson", function(himalaya) {
        L.geoJson(himalaya, {
            onEachFeature: function(feature, layer) {
                layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    if (k == "DisplayName") {
                        return ("<strong>"+ feature.properties[k] + "</strong>");
                    }
                }));
                layer._popup._content = "" + layer._popup._content;
                layer._popup._content = layer._popup._content.replace(/,/g, '');
                m.addLayer(layer);
            },
            style: function() {
                return {
                    opacity: 1,
                    fillOpacity: 0.2,
                    weight: 0,
                    color: colors[6]
                } 
            }
        });
    });

    $.getJSON("data/Biodiversity_Hotspots_2016.geojson", function(ghats) {
        // ensure projects load after hotspots
        loadProjects();
        L.geoJson(ghats, {
            onEachFeature: function(feature, layer) {
                layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    if (k == "NAME") {
                        return ("<strong>"+ feature.properties[k] + "</strong>");
                    }
                }));
                layer._popup._content = "" + layer._popup._content;
                layer._popup._content = layer._popup._content.replace(/,/g, '');
                m.addLayer(layer);
            },
            style: function() {
                return {
                    opacity: 1,
                    fillOpacity: 0.2,
                    weight: 0,
                    color: colors[0]
                } 
            }
        });
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  PROJECTS JSON PROCESSING
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let allProjectLayers = [];
    var state_mid = [];
    var projectPopupFeatures = ["Category", "Proposal Name", "EC Grant Date", "Location", "Company Name", "Project Type", "Closest PP"];
    function loadProjects() {
        $.getJSON("data/states_overlap.geojson", function(geo) {
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
                    layer._popup._content = layer._popup._content.replace('Closest PP', 'Closest Protected Area');
                    allProjectLayers.push(layer);
                    m.addLayer(layer);
                },
                style: function(feature) {
                    return {
                        fillOpacity: 0.8,
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
            createCounts();
        });
    }

    $.getJSON("data/statebounds.json", function(states) {
        state_mid = states;
    }); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  FILTERING LOGIC
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var filters = ['Category', 'State', 'Grant Year', 'colour'];
    var allCounts = {};
    function createCounts() {
        allProjectLayers.forEach(function(layer) {
            var properties = layer.feature.properties;
            for (i = 0; i < 4; i++) {
                if (properties[filters[i]] in allCounts) {
                    allCounts[properties[filters[i]]] += 1;
                } else {
                    allCounts[properties[filters[i]]] = 1;
                }
            }
        });
    }

    function zoomToState() {
        if (selected_features[1].length == 1) {
            state = selected_features[1][0];
            m.fitBounds(state_mid[state]);
        } else {
            m.setView([22.59, 80.22], 5);
        }
    }    

    function showLayer() {
        visibleProjectsCount = 0;
        allProjectLayers.forEach(function(layer) {
            var properties = layer.feature.properties;
            if (selected_features[0].includes(properties[filters[0]]) 
                && selected_features[1].includes(properties[filters[1]])
                && selected_features[2].includes(properties[filters[2]]) 
                && selected_features[3].includes(properties[filters[3]])) {
                    visibleProjectsCount += 1;
                    m.addLayer(layer);
            } else {
                    m.removeLayer(layer);
            }
        });
        legend.addTo(m);
    }

    var categories = ["Coal Mining", "Industrial Projects - 1", "Industrial Projects - 2", "Industrial Projects - 3", 
      "Infrastructure and Miscellaneous Projects + CRZ", "New Construction Projects and Industrial Estates",
      "Non-Coal Mining", "River Valley and Hydroelectric Projects", "Thermal Projects", "Unavailable"];
    var states = ["Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
      "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", 
      "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
      "Meghalaya", "Mizoram", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
      "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]
    var years = ["2014", "2015", "2016", "2017", "2018", "2019", "Unavailable"];
    var colourLabels = ["Within Protected Area", "Less than 10km", "10 - 50km", "50 - 100km", "More than 100km"]
    var colourOptions = [1, 2, 3, 4, 5]
    let selected_features = [categories, states, years, colourOptions];

    $(document).ready(function() {    
        var st = document.getElementById("state");
        for (i in states) {
            st.innerHTML += "<option>" + states[i] + "</option>";
        }

        var cat = document.getElementById("cat");
        for (i in categories) {
            cat.innerHTML += "<option>" + categories[i] + "</option>";
        }

        var yr = document.getElementById("year");
        for (i in years) {
            yr.innerHTML += "<option>" + years[i] + "</option>";
        }

        var c = document.getElementById("colour");
        for (i in colourLabels) {
            c.innerHTML += "<option>" + colourLabels[i] + "</option>";
        }

        $('#cat').on('change', function () {
            selected_features[0] = $(this).val();
            if (!selected_features[0]) {
                selected_features[0] = categories;
            }
            zoomToState();
            showLayer(); 
        });

        $('#state').on('change', function () {
            selected_features[1] = $(this).val();
            if (!selected_features[1]) {
                selected_features[1] = states;
            }
            zoomToState();
            showLayer();
        });

        $('#year').on('change', function () {
            selected_features[2] = $(this).val();
            if (!selected_features[2]) {
                selected_features[2] = years;
            }
            zoomToState();
            showLayer();
        });

        $('#colour').on('change', function () {
            selected_features[3] = []
            if (!$(this).val()) {
                selected_features[3] = colourOptions;
            }
            for (var opt in $(this).val()) {
                var i = colourLabels.indexOf($(this).val()[opt])
                selected_features[3].push(i+1)
            }
            zoomToState();
            showLayer();
        });
    });
}