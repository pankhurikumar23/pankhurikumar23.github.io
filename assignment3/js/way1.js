var response = [];
var results = [];
var datapoints = {};
var headlines = {};

function preload() {

  var baseURL = "https://api.nytimes.com/svc/topstories/v2/";
  var apikey = "f7a0f1f8f99d401594f60a00d96c4629";
  var sections = ["home", "opinion", "world", "national", "politics", "upshot", "nyregion", "business", "technology", "science", "health", "sports", "arts", "books", "movies", "theater", 
  "sundayreview", "fashion", "tmagazine", "food", "travel", "magazine", "realestate", "automobiles", "obituaries", "insider"];

  for (var i = 0; i < sections.length; i++) {
    url = baseURL + sections[i] + ".json?api-key=" + apikey;
    response.push(loadJSON(url));
    for (var x= 0; x < 1100000000; x++);
    console.log("Querying " + (i+1) + " out of " + (sections.length) + " resources.");
  }
  console.log(response);
}

function setup() {
  createCanvas(1907, 3000);

  background('grey');
  noLoop();

  extractFeatures();
}

function draw() {
  noStroke();
  fill('white');

  console.log(datapoints);
}

function extractFeatures() {

  for (var i = 0; i < response.length; i++) {
    for (var j = 0; j < response[i].num_results; j++) {
      headline = response[i].results[j].title;
      if (headline in headlines) {
        //if a headline is repeated, do not count its stats twice
        headlines[headline] += 1;
      } else {
        // if a new headline is encountered, count its stats
        headlines[headline] = 1;
        facets = response[i].results[j].des_facet;
        if (facets.length > 0) {
          for (var k = 0; k < facets.length; k++) {
            // if the feature exists, add to count
            if (facets[k] in datapoints) {
              datapoints[facets[k]] += 1;
            } else {
              datapoints[facets[k]] = 1;
            }
          }
        }
      }
    }
  }
}