(() => {
  const canvas = document.getElementById("smokeCanvas");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  let width = 0;
  let height = 0;

  const smoke = [];
  const mouseSmoke = [];

  let mouseX = -1000;
  let mouseY = -1000;

  // =========================
  // Canvas
  // =========================

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();

  window.addEventListener("resize", resize);


  // =========================
  // Create Large Smoke
  // =========================

  function createSmoke(random = false) {

    return {
      x: Math.random() * width,

      y: random
        ? Math.random() * height
        : height + 100,

      size: 100 + Math.random() * 180,

      vx: (Math.random() - 0.5) * 0.25,

      vy: -(0.15 + Math.random() * 0.35),

      opacity: 0.025 + Math.random() * 0.035,

      life: 0,

      maxLife: 700 + Math.random() * 700,

      angle: Math.random() * Math.PI * 2
    };
  }


  // =========================
  // Initial Full Page Smoke
  // =========================

  for (let i = 0; i < 25; i++) {
    smoke.push(createSmoke(true));
  }


  // =========================
  // Mouse Smoke
  // =========================

  window.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    for (let i = 0; i < 2; i++) {

      mouseSmoke.push({
        x: mouseX + (Math.random() - 0.5) * 35,

        y: mouseY + (Math.random() - 0.5) * 35,

        size: 25 + Math.random() * 55,

        vx: (Math.random() - 0.5) * 0.7,

        vy: -(0.2 + Math.random() * 0.5),

        opacity: 0.06 + Math.random() * 0.07,

        life: 0,

        maxLife: 100 + Math.random() * 100
      });

    }
  });


  // =========================
  // Draw Smoke
  // =========================

  function drawSmoke(p) {

    const gradient = ctx.createRadialGradient(
      p.x,
      p.y,
      0,

      p.x,
      p.y,
      p.size
    );

    gradient.addColorStop(
      0,
      `rgba(255,255,255,${p.opacity})`
    );

    gradient.addColorStop(
      0.25,
      `rgba(255,255,255,${p.opacity * 0.65})`
    );

    gradient.addColorStop(
      0.55,
      `rgba(255,255,255,${p.opacity * 0.25})`
    );

    gradient.addColorStop(
      1,
      "rgba(255,255,255,0)"
    );

    ctx.fillStyle = gradient;

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.size,
      0,
      Math.PI * 2
    );

    ctx.fill();
  }


  // =========================
  // Ambient Smoke Animation
  // =========================

  function updateSmoke() {

    for (let i = 0; i < smoke.length; i++) {

      const p = smoke[i];

      p.life++;

      p.x += p.vx;

      p.y += p.vy;

      // Natural movement
      p.x += Math.sin(p.life * 0.008) * 0.15;

      const progress = p.life / p.maxLife;

      let alpha = p.opacity;

      // Fade in
      if (progress < 0.15) {
        alpha *= progress / 0.15;
      }

      // Fade out
      if (progress > 0.7) {
        alpha *= (1 - progress) / 0.3;
      }

      p.opacity = alpha;

      drawSmoke(p);

      // Reset
      if (
        p.life >= p.maxLife ||
        p.y < -p.size
      ) {
        smoke[i] = createSmoke(false);
      }
    }
  }


  // =========================
  // Mouse Smoke Animation
  // =========================

  function updateMouseSmoke() {

    for (let i = mouseSmoke.length - 1; i >= 0; i--) {

      const p = mouseSmoke[i];

      p.life++;

      p.x += p.vx;

      p.y += p.vy;

      p.size += 0.3;

      const progress = p.life / p.maxLife;

      p.opacity *= 0.97;

      drawSmoke(p);

      if (
        p.life >= p.maxLife ||
        progress >= 1
      ) {
        mouseSmoke.splice(i, 1);
      }
    }
  }


  // =========================
  // Animation
  // =========================

  function animate() {

    // IMPORTANT:
    // Clear with TRANSPARENT background
    ctx.clearRect(
      0,
      0,
      width,
      height
    );

    updateSmoke();

    updateMouseSmoke();

    requestAnimationFrame(animate);
  }

  animate();

})();