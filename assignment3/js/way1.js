var response = [];
var topics = {};
var hCount = {};

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

function setup() {
  createCanvas(1907, 950);
  background('#FFFFFF');

  textFont(headFont);
  textAlign(CENTER);
  textSize(90);
  fill('#1A1A1A');
  text("Most Repeated Headlines in New York Times", width/2, 100);
  textSize(20);
  fill('#333333');
  textFont(byFont);
  text("across the Home, Opinion, World, National, and Politics sections", width/2, 150);
  noLoop(); 

  //organize articles into topics and find the top 10 repeated headlines
  extractFeatures();
}

function draw() {
  push();

  textAlign(LEFT, TOP);
  textFont('Georgia');
  textSize(25);
  textStyle(ITALIC);

  x = 50;
  y = 200;
  lines = "";

  for (h in hCount) {
    if ((x + textWidth(h)) > (width - 20)){
      x = 50;
      y += 50;
    }
    setTextSize(hCount[h]);
    text(h, x, y);
    x += textWidth(h) + 40;
  }

  pop();
}

//adjust the size of display based on count of repeat
function setTextSize(count) {
  size = map(count, 2, 5, 20, 35);
  textSize(size);
}

//Rearranging JSON response from API into usable format
function extractFeatures() {
  //store lines and their count
  for (var i = 0; i < response.length; i++) {
    for (var j = 0; j < response[i].results.length; j++) {
      var h = response[i].results[j].title;
      if (!(h in hCount)) {
        hCount[h] = 0;
      }
      hCount[h] += 1;
    }
  }

  //remove all lines with count = 1 i.e. not repeated
  for (h in hCount) {
    if (hCount[h] < 2) {
      delete hCount[h];
    }
  }
  console.log(hCount);
}