console.log(gsap);

// Title animation
gsap.from(".title", {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

const magnets = document.querySelectorAll(".magnetic");

magnets.forEach((magnet) => {
  magnet.addEventListener("mousemove", (e) => {
    const rect = magnet.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(magnet, {
      x: x * 0.3,
      y: y * 0.3,
      rotationX: -y / 12,
      rotationY: x / 12,
      transformPerspective: 600,
      scale: 1.1,
      duration: 0.3,
      ease: "power3.out"
    });
  });

  magnet.addEventListener("mouseenter", () => {
    const desc = magnet.querySelector(".desc");
    if (desc) {
      gsap.to(desc, {
        opacity: 1,
        y: 0,
        duration: 0.3
      });
    }
  });

  magnet.addEventListener("mouseleave", () => {
    gsap.to(magnet, {
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)"
    });

    const desc = magnet.querySelector(".desc");
    if (desc) {
      gsap.to(desc, {
        opacity: 0,
        y: 10,
        duration: 0.3
      });
    }
  });
});
