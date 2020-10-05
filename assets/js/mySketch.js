// Thanks to Otis Chou for Initial Code

const dots = []
const factor = 0.003
const count = 950
var radius = screen.height * 0.7 / 2
function setup() {
	var canvas = createCanvas(windowWidth /2 , windowWidth / 2);
	canvas.parent('sketch-holder');
	background('#F0F0F0');
	noiseDetail(2)
	colorMode(HSB, 100)
	strokeWeight(0.8)
	stroke(0)
	noFill()
	ellipse(width /2, height /2, radius * 2 + 1)
	
	for (let i = 0; i < count; i++) {		
		dots.push(new Dot(radius, [50,60], 18, 5))
	}

}

function draw() {
	for (let i = 0; i < dots.length; i++) {
		const dot = dots[i];
		n = noise(dot.pos.x * factor, dot.pos.y * factor)
		dot.update(n)
		dot.draw()
		setInterval(draw, 500)
	}
}

class Dot {

	constructor (radius, colorRange, brightness, alpha) {
		const r = random(TWO_PI)
		const x = width / 2 + sin(r) * radius
		const y = height / 2 + cos(r) * radius
		this.pos = createVector(x,y)
		this.prev = createVector(x,y)
		this.color = color(random(255))
		this.deadCount = 0
		this.radius = radius
		this.colorRange = colorRange
		this.alpha = 10
		this.brightness = brightness
	}
	
	update(noize) {
		this.v = p5.Vector.fromAngle(noize * TWO_PI + (this.deadCount * PI))
		this.v.setMag(7.5)
		this.color = color(map(noize, 0, 3, ...this.colorRange), 200, this.brightness, this.alpha)
		this.prev = this.pos.copy()
		this.pos = this.pos.add(this.v)
		
		
		if (dist(width/2, height/2, this.pos.x, this.pos.y) > this.radius + 3) {
			this.deadCount++  
		}
	}
	
	draw() {
		if (
      dist(width / 2, height / 2, this.pos.x, this.pos.y) > this.radius ||
      dist(width / 2, height / 2, this.prev.x, this.prev.y) > this.radius
    ) {
      return
	}
		strokeWeight(1)
		stroke(this.color)
		line(this.prev.x, this.prev.y, this.pos.x, this.pos.y)

	}

}

