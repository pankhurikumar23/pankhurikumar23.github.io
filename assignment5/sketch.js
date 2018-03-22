var systems;

function setup() {
  createCanvas(1907, 950);
  systems = [];
  prevX = 200;
  frameRate(120);
}

function draw() {
  background(0);
  stroke('white');

  a = [50, 1850];
  b = [25, 925];

  for(i = 0; i < 7; i++) {
    x = a[0] + i * ((a[1] - a[0]) / 6);
    y = b[0] + i * ((b[1] - b[0]) / 2);
    line(a[0], y, a[1], y);
    line(x, b[0], x, b[1]);
  }

  h = hour();
  X = 200;
  Y = 75;
  if (h > 11) {
    h = h - 12;
  }
  y = (h < 6) ? Y : (Y + 450);
  x = (h < 6) ? X + (h * 300) : X + ((h - 6) * 300);

  if (prevX != x) {
    systems = [];
    this.p = new ParticleSystem(createVector(x, y));
    systems.push(p);
  }

  systems[0].run();
  systems[0].addParticle();
  prevX = x;
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function () {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  // Add either a Particle or CrazyParticle to the system
  if (int(random(0, 2)) == 0) {
    p = new Particle(this.origin);
  }
  else {
    p = new CrazyParticle(this.origin);
  }
  this.particles.push(p);
};

ParticleSystem.prototype.run = function () {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

// A subclass of Particle

function CrazyParticle(origin) {
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
  Particle.call(this, origin);

  // Initialize our added properties
  this.theta = 0.0;
};

// Create a Crazy.prototype object that inherits from Particle.prototype.
// Note: A common error here is to use "new Particle()" to create the
// Crazy.prototype. That's incorrect for several reasons, not least 
// that we don't have anything to give Particle for the "origin" 
// argument. The correct place to call Particle is above, where we call 
// it from Crazy.
CrazyParticle.prototype = Object.create(Particle.prototype); // See note below

// Set the "constructor" property to refer to CrazyParticle
CrazyParticle.prototype.constructor = CrazyParticle;

// Notice we don't have the method run() here; it is inherited from Particle

// This update() method overrides the parent class update() method
CrazyParticle.prototype.update=function() {
  Particle.prototype.update.call(this);
  // Increment rotation based on horizontal velocity
  this.theta += (this.velocity.x * this.velocity.mag()) / 20.0;
}

// This display() method overrides the parent class display() method
CrazyParticle.prototype.display=function() {
  // Render the ellipse just like in a regular particle
  Particle.prototype.display.call(this);
  // Then add a rotating line
  min = minute();
  m = map(min, 0, 60, 0, 4);
  push();
  translate(this.position.x, this.position.y);
  rotate(this.theta);
  stroke(255,this.lifespan);
  line(0, 0, 25, 0);
  if (m > 1) {
    line(0, 0, 0, 25);
  }
  if (m > 3) {
    line(0, 25, 25, 25);
    line(25, 0, 25, 25);
  } else if (m > 2) {
    line(0, 25, 25, 0);
  }  
  pop();
}
