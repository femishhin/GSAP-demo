/**
 * AERO//01 — High-Performance Sneaker Showcase
 * GSAP + ScrollTrigger Implementation
 */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  // 1. Custom Neon Green Cursor Follower (Desktop only)
  const cursorDot = document.querySelector(".custom-cursor-dot");
  const cursorRing = document.querySelector(".custom-cursor-ring");
  if (cursorDot && cursorRing && !prefersReducedMotion && window.innerWidth > 1024) {
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power2.out" });
      gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.28, ease: "power3.out" });
    });

    const hoverTargets = document.querySelectorAll("a, button, input, .cursor-pointer");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      target.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  // 2. Hero Entrance Animation
  const heroTL = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });

  heroTL.fromTo("header", 
    { y: -60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.7 }
  )
  .fromTo("[data-hero-kicker]", 
    { y: 15, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6 }, 
    "-=0.4"
  )
  .fromTo("[data-hero-headline]", 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }, 
    "-=0.4"
  )
  .fromTo("[data-hero-copy]", 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6 }, 
    "-=0.5"
  )
  .fromTo("[data-hero-actions]", 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6 }, 
    "-=0.4"
  )
  .fromTo("[data-hero-meta]", 
    { y: 15, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6 }, 
    "-=0.4"
  )
  .fromTo("[data-hero-visual]", 
    { scale: 0.85, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 1.0, ease: "power3.out" }, 
    "-=0.8"
  );

  // 3. Continuous Floating Loop for Hero Sneaker
  if (!prefersReducedMotion) {
    gsap.to("[data-hero-visual] img", {
      y: -14,
      rotation: 1.5,
      duration: 3.0,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }

  // 4. Feature Section Reveal
  gsap.fromTo("[data-feature-card]", 
    { y: 40, opacity: 0.4 }, 
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#tech",
        start: "top 85%",
        once: true,
      },
    }
  );

  // 5. Story Section Reveal
  gsap.fromTo(".story-panel", 
    { y: 40, opacity: 0.4 }, 
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#story",
        start: "top 85%",
        once: true,
      },
    }
  );

  // 6. Gallery Section Reveal
  gsap.fromTo("[data-gallery-copy]", 
    { x: -30, opacity: 0.5 }, 
    {
      x: 0,
      opacity: 1,
      duration: 0.7,
      scrollTrigger: { 
        trigger: "#colorways", 
        start: "top 85%",
        once: true,
      },
    }
  );

  // 7. Closing CTA Checkout Box Reveal
  gsap.fromTo(".cta-checkout-box", 
    { y: 30, opacity: 0.5 }, 
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { 
        trigger: "#buy", 
        start: "top 85%",
        once: true,
      },
    }
  );
});

// Interactive Colorway Switcher with GSAP
window.selectColorway = function (id) {
  const ring = document.getElementById("cw-ring");
  const img = document.getElementById("showcase-img");
  const cw1 = document.getElementById("cw-1");
  const cw2 = document.getElementById("cw-2");
  const cw3 = document.getElementById("cw-3");

  [cw1, cw2, cw3].forEach((el) => {
    if (!el) return;
    el.classList.remove("bg-surface-container-high", "border", "border-[#bef532]");
    el.classList.add("bg-surface-container");
    const arrow = el.querySelector(".material-symbols-outlined");
    if (arrow) arrow.classList.add("opacity-0");
  });

  const activeEl = document.getElementById("cw-" + id);
  if (activeEl) {
    activeEl.classList.remove("bg-surface-container");
    activeEl.classList.add("bg-surface-container-high", "border", "border-[#bef532]");
    const activeArrow = activeEl.querySelector(".material-symbols-outlined");
    if (activeArrow) activeArrow.classList.remove("opacity-0");
  }

  if (img && typeof gsap !== "undefined") {
    gsap.fromTo(
      img,
      { opacity: 0.5, scale: 0.94, rotation: -3 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: "back.out(1.4)" }
    );
  }

  if (id === 1) {
    ring.className = "absolute w-[380px] h-[380px] rounded-full bg-primary-container/20 blur-3xl transition-all duration-500";
    if (img) img.style.filter = "drop-shadow(0 24px 48px rgba(0,0,0,0.9)) hue-rotate(0deg)";
  } else if (id === 2) {
    ring.className = "absolute w-[380px] h-[380px] rounded-full bg-sky-400/25 blur-3xl transition-all duration-500";
    if (img) img.style.filter = "drop-shadow(0 24px 48px rgba(0,0,0,0.9)) hue-rotate(180deg) brightness(1.1)";
  } else if (id === 3) {
    ring.className = "absolute w-[380px] h-[380px] rounded-full bg-amber-100/20 blur-3xl transition-all duration-500";
    if (img) img.style.filter = "drop-shadow(0 24px 48px rgba(0,0,0,0.9)) grayscale(0.9) brightness(1.2)";
  }
};

// Interactive Size Selector
window.selectSize = function (btn) {
  const buttons = document.querySelectorAll("#size-grid button");
  buttons.forEach((b) => {
    b.className = "h-12 bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center hover:bg-surface-container-highest transition-colors";
  });
  btn.className = "h-12 bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center shadow-[0_0_12px_rgba(190,245,50,0.3)]";
  
  if (typeof gsap !== "undefined") {
    gsap.fromTo(btn, { scale: 0.9 }, { scale: 1, duration: 0.25, ease: "back.out(2)" });
  }
};
