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

  //custom NYT (as close as I can get) fonts
  headFont = loadFont('assets/English.TTF');
  byFont = loadFont('assets/franklin-small-normal-500.ttf')
}

function setup() {
  createCanvas(1907, 950);

  //organize articles into topics and find the repeated headlines
  extractFeatures();
}

function draw() {
  background('#FFFFFF');
  noStroke();

  textFont(headFont);
  textAlign(CENTER);
  textSize(90);
  fill('#1A1A1A');
  text("Most Repeated Headlines in New York Times*", width/2, 100);
  textSize(20);
  fill('#333333');;
  textFont(byFont);
  text("...across the Home, Opinion, World, National, and Politics sections", width/2, 150);

  push();

  textAlign(LEFT, TOP);
  textFont('Georgia');
  textStyle(ITALIC);

  x = 50;
  y = 200;

  for (h in hCount) {
    if ((x + textWidth(h)) > (width - 20)){
      x = 50;
      y += 55;
    }
    s = setTextSize(hCount[h]);
    if (abs(mouseX - x) < textWidth(h) && abs(mouseY - y) < s && abs(x + textWidth(h) - mouseX) < textWidth(h)) {
      fill('#ED225D');
      textSize(s+3);
      text(h, x, y);
      fill(0, 132, 173);
      rect(mouseX+20, mouseY+20, textWidth(topics[h])+2, s+7);
      // console.log(textWidth(topics[h]));
      fill(255);
      text(topics[h].slice(0, -2), mouseX+23, mouseY+23);
    } else {
      textSize(s);
      fill('#333333');
      text(h, x, y);
    }
    x += textWidth(h) + 40;
  }

  pop();

  textAlign(RIGHT);
  textSize(15);
  fill('#ED225D');
  textFont("Georgia");
  text("*Colour Template Borrowed from p5.js Website", 1850, 900);

}

//calculate size based on count
function setTextSize(count) {
  size = map(count, 2, 5, 20, 35);
  textSize(size);
  return size;
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
  }
  console.log(hCount);
}