var response = [];
var topics = {};
var hCount = {};
var diameter = 130;
var roman = ["0", "I", "II", "III", "IV", "V"];

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

  //custom NYT (as close as I can get) fonts
  headFont = loadFont('assets/English.TTF');
  byFont = loadFont('assets/franklin-small-normal-500.ttf')
}

function setup() {
  createCanvas(1907, 950);
  // noLoop(); 

  //organize articles into topics and find the repeated headlines
  extractFeatures();
}

function draw() {
  noStroke(); 

  background('#1A1A1A');
  textFont(headFont);
  textAlign(CENTER);
  textSize(90);
  fill('#515151');
  text("Most Repeated Headlines in New York Times", width/2, 100);
  textSize(20);
  fill('#999999');
  textFont(byFont);
  text("...across the Home, Opinion, World, National, and Politics sections", width/2, 150);


  x = 200;
  y = 300;
  for (h in hCount) {
    if ((x + diameter) > (width - 200 + diameter)) {
      x = 200;
      y += 150;
    }
    if (dist(mouseX, mouseY, x, y) < diameter/2) {
      drawEllipse(hCount[h], 1);
      fill('#999999');
      textFont('Georgia');
      textSize(25);
      text("\"" + h + "\"", width/2, 750);
      text(topics[h].slice(0, -2), width/2, 785);
    } else {
      drawEllipse(hCount[h]);

    }
    fill(255, 200, 40);
    textSize(20);
    textFont("Times New Roman");
    text(roman[hCount[h]], x, y+10);
    x += 150;
  }
}

//caculating colour transparency based on count
function drawEllipse(count, factor = 2) {
  transparency = map(count, 2, 5, 100, 255);
  if (factor == 1) {
    fill(0, 0, transparency);
  } else {
    fill(transparency, 0, 0);
  }
  ellipse(x, y, diameter, diameter);
}

//Rearranging JSON response from API into usable format
function extractFeatures() {
  var sections = ["Home", "Opinion", "World", "National", "Politics"];
  //store headline and no. of times repeated, also note the section where it repeats
  for (var i = 0; i < response.length; i++) {
    for (var j = 0; j < response[i].results.length; j++) {
      var h = response[i].results[j].title;
      if (!(h in hCount)) {
        hCount[h] = 0;
        topics[h] = "Repeats in ";
      }
      hCount[h] += 1;
      topics[h] += sections[i] + ", ";
    }
  }

  //remove all lines with count = 1 i.e. not repeated
  for (h in hCount) {
    if (hCount[h] < 2) {
      delete hCount[h];
      delete topics[h];
  }
  console.log(hCount);
}