const canvas = document.getElementById("networkCanvas");
const ctx = canvas.getContext("2d");

// Ajusta o tamanho do canvas
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const particles = [];
const maxParticles = 100;

// Função para criar partículas
function createParticles() {
  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: 2 + Math.random() * 2,
    });
  }
}

// Função para desenhar partículas
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    // Conecta partículas próximas
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });
}

// Função para atualizar partículas
function updateParticles() {
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;

    // Rebate nas bordas
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  });
}

// Animação
function animate() {
  drawParticles();
  updateParticles();
  requestAnimationFrame(animate);
}

// Inicializa partículas e animação
createParticles();
animate();
