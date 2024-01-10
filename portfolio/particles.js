const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Set canvas to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create particle array
const particles = [];

// Particle constructor function
function Particle(x, y, velocityX, velocityY, size, color) {
  this.x = x;
  this.y = y;
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  this.size = size;
  this.color = color;
}

// Add methods to Particle prototype
Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

// Initialize particles
function initParticles() {
  particles.length = 0;
  const numberOfParticles = 1000;
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 5 + 1;
    const x = Math.random() * (canvas.width - size * 2) + size;
    const y = Math.random() * (canvas.height - size * 2) + size;
    const velocityX = (Math.random() - 0.5) * 2;
    const velocityY = (Math.random() - 0.5) * 2;
    const color = "lightgrey";

    particles.push(new Particle(x, y, velocityX, velocityY, size, color));
  }
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }
}

// Handle window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

const mouse = {
  x: null,
  y: null,
  radius: 175, // Adjust the radius of interaction
};

// Event listener for mouse movement
window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

Particle.prototype.update = function () {
  // Check distance between particle and mouse
  let dx = mouse.x - this.x;
  let dy = mouse.y - this.y;
  let distance = Math.sqrt(dx * dx + dy * dy);

  // Direction and strength of the mouse interaction
  let forceDirectionX = dx / distance;
  let forceDirectionY = dy / distance;

  // Max distance that mouse will influence particle movement
  let maxDistance = mouse.radius;
  let force = (maxDistance - distance) / maxDistance;

  // If we're within the mouse influence area, apply the force to the particle
  if (force > 0) {
    let sizeFactor = 1; // Adjust this to make the effect more subtle or pronounced
    let forceX = forceDirectionX * force * sizeFactor;
    let forceY = forceDirectionY * force * sizeFactor;

    this.velocityX -= forceX;
    this.velocityY -= forceY;
  }

  // Move particle
  this.x += this.velocityX;
  this.y += this.velocityY;

  // Bounce particle off the edges
  if (this.x + this.size > canvas.width || this.x - this.size < 0) {
    this.velocityX = -this.velocityX;
  }
  if (this.y + this.size > canvas.height || this.y - this.size < 0) {
    this.velocityY = -this.velocityY;
  }

  // Slow down or speed up the particle over time if desired
  this.velocityX *= 0.75; // Uncomment to add friction
  this.velocityY *= 0.75; // Uncomment to add friction

  // Draw particle
  this.draw();
};

// Initialize and start animation
initParticles();
animate();
