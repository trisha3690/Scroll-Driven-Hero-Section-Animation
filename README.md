# Scroll-Driven Hero Section Animation

An interactive, production-quality **Scroll-Driven Hero Section Animation** inspired by modern creative agency & automotive telemetry experiences, built with **React**, **Vite**, **Tailwind CSS**, **GSAP**, and **GSAP ScrollTrigger**.

## Live Demo

https://trisha3690.github.io/Scroll-Driven-Hero-Section-Animation/

## GitHub Repository

https://github.com/trisha3690/Scroll-Driven-Hero-Section-Animation

---

## Technologies

- **React 18** (`react`, `react-dom`)
- **Vite 6** (Fast ESModule bundler & dev server configured for GitHub Pages)
- **JavaScript (ES6+)**
- **Tailwind CSS 3** (Custom dark obsidian theme, typography, and glow tokens)
- **GSAP 3 (`gsap`)**
- **GSAP ScrollTrigger (`gsap/ScrollTrigger`)**

---

## Features

- **Premium Hero Section**: Dark obsidian architecture with subtle telemetry grid, dynamic ambient glow, and live scroll HUD (`VEL KM/H`, `STAGE 01–04`, `SCROLL %`).
- **Initial Load Animations**: Smooth staggered character reveal (`opacity: 0 → 1`, `y: 40px → 0`) for the `W E L C O M E   I T Z   F I Z Z` headline using `power3.out` easing.
- **Staggered Statistics Animation**: 4 impact metric cards (`92%`, `87%`, `76%`, `58%`) animate sequentially on initial load (`opacity: 0 → 1`, `y: 25px → 0`, `stagger: 0.15s`).
- **Scroll-Driven Visual Animation**: Custom top-view **McLaren 720S / Cyber-GT Aero Hypercar** SVG visual (`ScrollVisual.jsx`) that translates horizontally across the track, banks (`rotation`), and scales (`scale`) in real time with user scroll (`scrub: 1`).
- **Kinetic Track & Slipstream Trail**: Letter-by-letter illumination of `WELCOME ITZFIZZ` along the runway and a GPU-composited (`scaleX`) emerald-to-lime slipstream ribbon.
- **Responsive Design**: Tailored scroll distances and visual scaling across Desktop, Laptop, Tablet, and Mobile via `gsap.matchMedia()`.
- **Reduced-Motion Support**: Full support for `prefers-reduced-motion: reduce` via both CSS media queries and `gsap.matchMedia()`.
- **GitHub Pages Deployment**: Pre-configured `base: "/scroll-driven-hero-animation/"` in `vite.config.js`, automated GitHub Actions workflow (`.github/workflows/deploy.yml`), and `gh-pages` npm script.
