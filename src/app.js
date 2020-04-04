const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

let mouse = {
	x: undefined,
	y: undefined
}

const maxRadius = 50;

window.addEventListener("mousemove", (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

function Circle(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;
	this.minRadius = radius;

	this.draw = () => {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.move = () => {

		// hit the border of the screen
		if (this.x + this.radius >= innerWidth || this.x - radius <= 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius >= innerHeight || this.y -radius <= 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

let circles = [];

const init = () => {
	circles = [];
	for (let i = 0; i < 100; i++) {
		let radius = (Math.random() * 5) + 1;
		let x = Math.random() * (innerWidth - radius * 2) + radius;
		let y = Math.random() * (innerHeight - radius * 2) + radius;
		let dx = (Math.random() - 0.5) * 2;
		let dy = (Math.random() - 0.5) * 2;
		circles.push(new Circle(x, y, dx, dy, radius, 'black'));
	}
};

const animate = () => {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (let i = 0; i < circles.length; i++) {
		circles[i].move();
	}
}

init();

animate();