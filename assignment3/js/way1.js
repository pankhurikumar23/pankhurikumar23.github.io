var response = [];
var datapoints = {};
var headlines = {};
var topK = {};

var defaultTextSize = 10;
var maxTextSize = 95;
var maxValue;

function preload() {

  var baseURL = "https://api.nytimes.com/svc/topstories/v2/";
  var apikey = "f7a0f1f8f99d401594f60a00d96c4629";
  var sections = ["opinion", "world", "politics", "upshot", "business", "technology", "science", "health", "sports", "arts", 
   "fashion", "food", "travel", "magazine", "insider"];

  for (var i = 0; i < sections.length; i++) {
    url = baseURL + sections[i] + ".json?api-key=" + apikey;
    response.push(loadJSON(url));
    // time loop to prevent hitting API rate limits
    for (var x= 0; x < 2000000000; x++);
    // keeping track of number of queries in console
    console.log("Querying " + (i+1) + " out of " + (sections.length) + " resources.");
  }
  // console.log(response);
}

function setup() {
  createCanvas(1907, 950);
  background('#282726');

  textSize(defaultTextSize);
  textAlign(CENTER);
  noLoop(); 

  //organize articles into topics and find the top K topics
  extractFeatures();
  findMaxK(8);
  console.log(topK);
  datapoints = {};
}

function draw() {
  x = width/2;
  y = 170;
  var i = 0;

  textSize(30);
  fill('white');
  text("Top 8 Topics Showing up on NY Times Today", width/2, 50);

  for (key in topK) {
    rem = i % 4;
    switch(rem) {
      case 0: fill('#6A8A82'); break;
      case 1: fill('#A37C27'); break;
      case 2: fill('#A7414A'); break;
      case 3: fill('#563838'); break;
    }
    setTextSize(topK[key]);
    text(key, x, y);
    y += 100;
    i++;
  }


}

function setTextSize(count) {
  size = map(count, 0, maxValue, defaultTextSize, maxTextSize);
  textSize(size);
}

//Returns topic associated to the given article count - returns the first one that matches the value
//Source: https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
function getKeyByValue(value) {
  return Object.keys(datapoints).find(key => datapoints[key] === value);
}

function findMaxK(k = 10) {
  var arr = Object.values(datapoints);
  maxValue = Math.max(...arr);
  while (k > 0) {
    //find max count
    var max = Math.max(...arr);

    //find topic with max article count
    x = getKeyByValue(max);

    //keep track of max count and associated topics for drawing
    topK[x] = max;

    //delete the max, helps to find next max
    //Deleting from array: https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
    var index = arr.indexOf(max);
    if (index !== -1) arr.splice(index, 1);
    delete datapoints[x];
    k--;
  }
}

//Rearranging JSON response from API into usable format
//Extracting topics of articles from response and counting them
var repeated = 0;
function extractFeatures() {

  for (var i = 0; i < response.length; i++) {
    for (var j = 0; j < response[i].num_results; j++) {
      headline = response[i].results[j].title;
      if (headline in headlines) {
        //if a headline is repeated, do not count its stats twice
        headlines[headline] += 1;
        repeated++;
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
  min_count = 5;
  for (key in datapoints) {
    if (datapoints[key] < min_count)
      delete datapoints[key];
  }
}