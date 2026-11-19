/**
 * AURA // Architectural Furniture Showcase
 * Advanced GSAP & ScrollTrigger Animation Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 1. Refresh ScrollTrigger after all high-res images load
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  // 2. Custom Smooth Cursor Follower (Desktop only)
  const cursorDot = document.querySelector(".custom-cursor-dot");
  const cursorRing = document.querySelector(".custom-cursor-ring");

  if (cursorDot && cursorRing && !prefersReducedMotion && window.innerWidth > 1024) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0.08,
        ease: "power2.out",
      });

      gsap.to(cursorRing, {
        x: mouseX,
        y: mouseY,
        duration: 0.28,
        ease: "power3.out",
      });
    });

    const hoverTargets = document.querySelectorAll("a, button, input, textarea, .cursor-pointer, .material-card");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      target.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  // 3. Magnetic Hover on Buttons
  if (!prefersReducedMotion && window.innerWidth > 768) {
    document.querySelectorAll(".magnetic-btn").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: relX * 0.25,
          y: relY * 0.25,
          duration: 0.25,
          ease: "power2.out",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
        });
      });
    });
  }

  // 4. Hero Section Entrance Animation
  const heroTL = gsap.timeline({
    defaults: { ease: "power3.out" },
    delay: 0.1,
  });

  heroTL.fromTo("header", 
    { y: -60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8 }
  );

  heroTL.fromTo(".catalog-subbar", 
    { y: 15, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.7 }, 
    "-=0.5"
  );

  heroTL.fromTo(".hero-headline", 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.9 }, 
    "-=0.5"
  );

  heroTL.fromTo(".hero-description", 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.7 }, 
    "-=0.6"
  );

  heroTL.fromTo(".hero-hud", 
    { y: 25, opacity: 0 }, 
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8,
      onComplete: () => {
        animateCounter(".counter-width", 0, 840, 1.0, " MM");
        animateCounter(".counter-depth", 0, 920, 1.0, " MM");
        animateCounter(".counter-weight", 0, 18.4, 1.0, " KG", 1);
      }
    }, 
    "-=0.5"
  );

  heroTL.fromTo(".hero-actions", 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.7 }, 
    "-=0.5"
  );

  heroTL.fromTo(".hero-image-card", 
    { scale: 0.95, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 1.0, ease: "power3.out" }, 
    "-=0.8"
  );

  // Subtle 3D Tilt on Hero Image Card
  const heroCard = document.querySelector(".hero-image-card");
  if (heroCard && !prefersReducedMotion && window.innerWidth > 1024) {
    heroCard.addEventListener("mousemove", (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(heroCard.querySelector("img"), {
        x: x * 15,
        y: y * 15,
        scale: 1.03,
        duration: 0.35,
        ease: "power2.out",
      });
    });

    heroCard.addEventListener("mouseleave", () => {
      gsap.to(heroCard.querySelector("img"), {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  }

  // 5. ScrollTrigger: Philosophy Section
  gsap.fromTo(".pillar-card", 
    { y: 40, opacity: 0.3 }, 
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".pillar-grid",
        start: "top 85%",
        once: true,
      },
    }
  );

  // 6. ScrollTrigger: Curated Spatial Sculptures (STELAE + LYRA & CAELUM Bento)
  // Parallax on Monumental Table
  const stelaeImg = document.querySelector(".stelae-image");
  if (stelaeImg && !prefersReducedMotion) {
    gsap.fromTo(
      stelaeImg,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: ".stelae-card",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }

  // Bento Split Cards (LYRA Bench & CAELUM Table) — Guarantee full visibility
  gsap.fromTo(".bento-card", 
    { y: 35, opacity: 0.4 }, 
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.18,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 90%",
        once: true,
      },
    }
  );

  // 7. ScrollTrigger: Materiality Explorer Cards — Guarantee full visibility
  gsap.fromTo(".material-card", 
    { y: 30, opacity: 0.5 }, 
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#material-selector-cards",
        start: "top 90%",
        once: true,
      },
    }
  );

  // 8. ScrollTrigger: Bespoke Commissioning Quota Bar
  const quotaBar = document.querySelector(".quota-progress-bar");
  if (quotaBar) {
    gsap.fromTo(
      quotaBar,
      { width: "0%" },
      {
        width: "72%",
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".quota-progress-bar",
          start: "top 90%",
          once: true,
        },
      }
    );
  }

  // Helper Counter Function
  function animateCounter(selector, start, end, duration, suffix = "", decimals = 0) {
    const el = document.querySelector(selector);
    if (!el) return;
    const obj = { val: start };
    gsap.to(obj, {
      val: end,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = obj.val.toFixed(decimals) + suffix;
      },
    });
  }
});

// 9. Interactive Material Selector with Live GSAP HUD Updates
const materialsData = [
  {
    tag: "SPEC 01 // LEATHER",
    name: "Full-Grain Cognac Saddle Leather",
    desc: "Originating from pasture-grazed Scandinavian cattle, slowly conditioned in oak bark pits for 12 weeks. Retains natural insect scars and fat creases, allowing deep honeyed patination within 18 months of room-climate seasoning.",
    gauge: "3.8 – 4.2 MM",
    origin: "Tärnsjö, Sweden",
    sheen: "6% Specular",
    care: "Biannual Wax Balm"
  },
  {
    tag: "SPEC 02 // MINERAL",
    name: "Roman Silver-Veined Travertine",
    desc: "Excavated from historical geothermal quarries in Tivoli. Cut strictly along sedimentary grain vectors, preserving the organic micro-cavities formed by ancient mineral springs.",
    gauge: "45 – 90 MM",
    origin: "Tivoli, Italy",
    sheen: "Zero Sheen / Raw",
    care: "Stone Soap Sealant"
  },
  {
    tag: "SPEC 03 // FIBER",
    name: "Thermo-Fumed Bog White Oak",
    desc: "Fumed in ammonia vapor enclosures to trigger chemical tannin reaction, deepening heartwood cells into rich espresso charcoals without synthetic stains or surface pigments.",
    gauge: "65 MM Solid Slab",
    origin: "Jutland, Denmark",
    sheen: "12° Deep Matte",
    care: "Cold-Pressed Hardwax"
  },
  {
    tag: "SPEC 04 // METALLURGY",
    name: "Hand-Oxidized Sand Bronze",
    desc: "Cast using traditional lost-wax sand tooling techniques in Kamigyo. Each element displays cooling crystallization veins and is stabilized through flame-applied sulfur liver patination.",
    gauge: "12 MM Wall Density",
    origin: "Kyoto, Japan",
    sheen: "Brushed Iridescent",
    care: "Microcrystalline Wax"
  }
];

window.selectMaterial = function (index) {
  const cards = document.querySelectorAll(".material-card");
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.remove("border-transparent");
      card.classList.add("border-primary");
      const indicator = card.querySelector("span.rounded-full");
      if (indicator) {
        indicator.className = "w-3 h-3 rounded-full bg-secondary";
      }
    } else {
      card.classList.remove("border-primary");
      card.classList.add("border-transparent");
      const indicator = card.querySelector("span.rounded-full");
      if (indicator) {
        indicator.className = "w-3 h-3 rounded-full bg-surface-dim";
      }
    }
  });

  const data = materialsData[index];
  const hud = document.getElementById("material-spec-hud");

  if (hud && typeof gsap !== "undefined") {
    gsap.to(hud, {
      opacity: 0.4,
      y: -4,
      duration: 0.15,
      ease: "power2.in",
      onComplete: () => {
        document.getElementById("mat-hud-tag").textContent = data.tag;
        document.getElementById("mat-hud-name").textContent = data.name;
        document.getElementById("mat-hud-desc").textContent = data.desc;
        document.getElementById("mat-hud-gauge").textContent = data.gauge;
        document.getElementById("mat-hud-origin").textContent = data.origin;
        document.getElementById("mat-hud-sheen").textContent = data.sheen;
        document.getElementById("mat-hud-care").textContent = data.care;

        gsap.to(hud, {
          opacity: 1,
          y: 0,
          duration: 0.25,
          ease: "power2.out",
        });
      },
    });
  } else {
    document.getElementById("mat-hud-tag").textContent = data.tag;
    document.getElementById("mat-hud-name").textContent = data.name;
    document.getElementById("mat-hud-desc").textContent = data.desc;
    document.getElementById("mat-hud-gauge").textContent = data.gauge;
    document.getElementById("mat-hud-origin").textContent = data.origin;
    document.getElementById("mat-hud-sheen").textContent = data.sheen;
    document.getElementById("mat-hud-care").textContent = data.care;
  }
};

// 10. Form Submission
window.handleInquirySubmit = function (event) {
  event.preventDefault();
  const btn = document.getElementById("submit-btn");
  const successBox = document.getElementById("form-success");

  if (!btn) return;

  btn.disabled = true;
  btn.innerHTML = 'Transmitting Dossier...';

  setTimeout(() => {
    btn.innerHTML = '✓ Commission Registered';
    btn.classList.remove("bg-primary", "hover:bg-secondary");
    btn.classList.add("bg-[#2e5939]", "text-white");

    if (successBox) {
      successBox.classList.remove("hidden");
      if (typeof gsap !== "undefined") {
        gsap.fromTo(
          successBox,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      }
    }
  }, 700);
};
