# AURA // Architectural Furniture Showcase & AERO//01 Sneaker Showcase
### Pixel-Perfect Implementations with GSAP & Tailwind CSS

This project contains pixel-perfect interactive web implementations extracted directly from Google Stitch prototypes (Project ID: `12728817311810952964`), animated with **GSAP 3.12+** and **ScrollTrigger**.

---

## 🌟 Pages Overview

### 1. **AURA // Architectural Furniture Showcase** (`index.html`) — *Primary Requested Page*
- **Design Link**: [Google Stitch Preview (Node: 8bea1f9c1ff04b259985787515713837)](https://stitch.google.com/preview/12728817311810952964?node-id=8bea1f9c1ff04b259985787515713837&raw=1)
- **Palette**: Natural oat paper background (`#fcf9f3`), rich carbon black (`#1c1c18`), warm cognac/terracotta accent (`#94492a`).
- **Typography**: `Newsreader` (Editorial Serif) paired with `Hanken Grotesk` and `Space Grotesk`.
- **Pixel-Perfect Fixes & Features**:
  - **100% Reliable Vector Brandmark**: High-definition architectural vector SVG logo in both header and footer (replacing Google's private internal AIDA URL), ensuring crisp, instant rendering on all devices with zero 403 network errors.
  - **Unobstructed Smooth Mouse Scrolling**: Clean viewport scroll configuration allowing native mouse wheel, trackpad, and keyboard navigation across all browsers with luxury slim scrollbars.
  - **No Header Overlays**: Demo switcher pill is docked at the **bottom-right** of the screen (`bottom: 24px; right: 24px`), completely clear of the top navigation and action buttons.
  - **Curated Spatial Sculptures Complete Layout**: Both the monumental `STELAE 04` Dining Table and the bottom Bento split pair (`LYRA` Bench and `CAELUM` Cast Bronze Table) are 100% visible and beautifully rendered with smooth parallax and entrance triggers.
  - **Clean Materiality Spacing**: Balanced, pixel-perfect spacing below the Architectural Materiality subtitle, followed immediately by the 4 tactile archetype swatches (`SPEC 01 // LEATHER`, `SPEC 02 // MINERAL`, `SPEC 03 // FIBER`, `SPEC 04 // METALLURGY`) and the interactive dynamic spec ledger.
  - **GSAP Load Orchestration**: Header entrance, catalog sub-bar, headline reveal, and floating 3D product card with live dimension counters (`840 MM`, `920 MM`, `18.4 KG`).
  - **Bespoke Commissioning Suite**: Live quota progress bar animation (`18/25 Pieces Allocated`), interactive form selection, and live request registration.

---

### 2. **AERO//01 Sneaker Showcase** (`aero.html`) — *Companion Showcase*
- **Design Link**: [Google Stitch Project (Node: d1792eeee1924a6fa05ebb29ceb6315b)](https://stitch.google.com/projects/12728817311810952964)
- **Palette**: Deep charcoal `#090a09`, electric lime accent `#bef532` / `#c7ff3d`.
- **Typography**: `Barlow Condensed` with `DM Sans`.
- **Pixel-Perfect Fixes & Features**:
  - **100% Reliable Vector Brandmark**: Geometric aerodynamic chevron badge SVG logo in volt lime and crisp white in both header and footer, completely immune to external CDN auth errors.
  - **Unobstructed Smooth Mouse Scrolling**: Fluid native wheel/trackpad scrolling synchronized with GSAP ScrollTrigger reveals.
  - **Prominent Hero Actions**: "Discover AERO ↗" and "Explore the design" buttons are fully visible, beautifully styled with rounded pills, lime shadow glow, and magnetic hover effects.
  - **Continuous Sneaker Float**: Infinite subtle sine-wave floating loop on the flagship sneaker centerpiece.
  - **3-Chapter Product Story**: Bento cards with progress indicator lines.
  - **Engineering Features**: Three technical cards with SVG wireframes and biomechanical grip geometry.
  - **Interactive Colorway Selector**: Real-time switching between Volt/Shadow, Ice/Graphite, and Mono/Bone with animated color ring and filter transitions.
  - **Conversion Module**: Interactive size selector grid (8.0–14.0) with animated active state.

---

## 🚀 How to View the Demo:

### Option A: Via WAMP Server (Localhost)
1. Ensure your **WAMP Server** is running.
2. Open your browser:
   - **AURA Furniture Showcase**: [http://localhost/gasp-demo/](http://localhost/gasp-demo/)
   - **AERO Sneaker Showcase**: [http://localhost/gasp-demo/aero.html](http://localhost/gasp-demo/aero.html)

### Option B: Direct in Browser
Open [index.html](file:///d:/wamp64/www/gasp-demo/index.html) or [aero.html](file:///d:/wamp64/www/gasp-demo/aero.html) directly in Chrome or Edge.

---

## 📁 File Structure

```text
d:\wamp64\www\gasp-demo\
├── index.html          # AURA Architectural Furniture Showcase (Main)
├── aero.html           # AERO//01 Sneaker Showcase (Companion)
├── css/
│   └── styles.css      # Custom scrollbar, cursor follower, text masking, and bottom-right switcher
├── js/
│   ├── aura-gsap.js    # Fail-safe GSAP timeline, ScrollTrigger, HUD transitions & counters
│   └── aero-gsap.js    # GSAP animations, hero floating loop & colorway switcher
└── README.md           # Documentation
```
