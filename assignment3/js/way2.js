var response = [];

function preload() {
  var baseURL = "https://api.nytimes.com/svc/topstories/v2/";
  var apikey = "f7a0f1f8f99d401594f60a00d96c4629";
  var sections = ["home", "opinion", "world", "national", "politics"];

  for (var i = 0; i < sections.length; i++) {
    url = baseURL + sections[i] + ".json?api-key=" + apikey;
    response.push(loadJSON(url));
    // keeping track of number of queries in console - to see progress
    console.log("Querying " + (i+1) + " out of " + (sections.length) + " resources.");
  }
  headFont = loadFont('assets/English.TTF');
  byFont = loadFont('assets/franklin-small-normal-500.ttf')
}