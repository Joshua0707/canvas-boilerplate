const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

let mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener("mousemove", (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

function Particle(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;

	this.draw = () => {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.move = () => {

		this.draw();
	}
}

let particles;

const init = () => {
	particles = [];

	for (let i = 0; i < 1; i++) {

		particles.push(new Particle(canvas.width / 2, canvas.height / 2, 30, 'black'));
	}
};

const animate = () => {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	particles.forEach((particle) => {
		particle.move();
	});
}

init();

animate();