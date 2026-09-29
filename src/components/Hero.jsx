import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollVisual from './ScrollVisual';
import Stats from './Stats';
import { ROAD_CALLOUT_BOXES } from '../assets/hypercarAsset';

gsap.registerPlugin(ScrollTrigger);

const ROAD_LETTERS = [
  'W', 'E', 'L', 'C', 'O', 'M', 'E', '\u00A0', 'I', 'T', 'Z', 'F', 'I', 'Z', 'Z'
];

const INTRO_WORDS = ['W E L C O M E', 'I T Z   F I Z Z'];

const Hero = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const roadRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const valueAddRef = useRef(null);
  const introHeaderRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Reduced motion fallback
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(
          [
            '[data-intro-word]',
            '[data-initial-stat]',
            '.value-letter',
            '[data-callout-box]',
          ],
          { opacity: 1, y: 0, scale: 1 }
        );
        if (trailRef.current) {
          gsap.set(trailRef.current, { width: '100%' });
        }
      });

      // Full interactive animation
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const introWords = gsap.utils.toArray('[data-intro-word]');
        const initialStats = gsap.utils.toArray('[data-initial-stat]');
        const letters = gsap.utils.toArray('.value-letter');
        const boxes = gsap.utils.toArray('[data-callout-box]');

        // 1. Initial Page Load Animation (Headline + Staggered Stats)
        gsap.set(introWords, { opacity: 0, y: 40 });
        gsap.set(initialStats, { opacity: 0, y: 25 });
        gsap.set(boxes, { opacity: 0, y: 20, scale: 0.96 });
        gsap.set(letters, { opacity: 0 });

        const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        loadTl
          .to(introWords, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.16,
          })
          .fromTo(
            carRef.current,
            { opacity: 0, x: -60 },
            { opacity: 1, x: 0, duration: 0.9 },
            '-=0.55'
          )
          .to(
            initialStats,
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.15,
            },
            '-=0.55'
          );

        // 2. Scroll-Driven Car & Trail Animation (GSAP ScrollTrigger)
        const getEndX = () => {
          const roadWidth = roadRef.current ? roadRef.current.clientWidth : window.innerWidth;
          const carWidth = carRef.current ? carRef.current.clientWidth : 220;
          return Math.max(120, roadWidth - carWidth - 16);
        };

        // Fade out initial header slightly as scroll begins so callout boxes have room
        gsap.to([introHeaderRef.current, statsRef.current], {
          opacity: 0.12,
          y: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'top+=380 top',
            scrub: 1,
          },
        });

        // Main Car Scroll Timeline
        const carTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: trackRef.current,
            invalidateOnRefresh: true,
            onUpdate: () => {
              if (!carRef.current || !valueAddRef.current || !trailRef.current) return;

              const carX = Number(gsap.getProperty(carRef.current, 'x')) || 0;
              const carWidth = carRef.current.clientWidth || 180;
              const frontEdgeX = carX + carWidth * 0.55;

              // Update green trail width behind the car
              gsap.set(trailRef.current, { width: Math.max(0, frontEdgeX) });

              // Reveal each letter of WELCOME ITZFIZZ as the car passes over it
              const valueLeft = valueAddRef.current.offsetLeft || 0;
              letters.forEach((letter) => {
                const letterCenter = valueLeft + letter.offsetLeft + letter.offsetWidth * 0.35;
                letter.style.opacity = frontEdgeX >= letterCenter ? '1' : '0';
              });
            },
          },
        });

        // Smooth multi-stage movement: translate X across viewport + subtle banking rotation & scale
        carTl
          .to(
            carRef.current,
            {
              x: () => getEndX() * 0.45,
              scale: 1.04,
              rotation: -0.8,
              ease: 'none',
              duration: 0.45,
            },
            0
          )
          .to(
            carRef.current,
            {
              x: () => getEndX(),
              scale: 1,
              rotation: 0,
              ease: 'none',
              duration: 0.55,
            },
            0.45
          );

        // Sequential scroll-driven callout boxes (#box1, #box2, #box3, #box4)
        const boxThresholds = [
          { start: 'top+=260 top', end: 'top+=480 top' },
          { start: 'top+=520 top', end: 'top+=740 top' },
          { start: 'top+=780 top', end: 'top+=1000 top' },
          { start: 'top+=1040 top', end: 'top+=1260 top' },
        ];

        boxes.forEach((boxEl, index) => {
          const range = boxThresholds[index];
          gsap.to(boxEl, {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: range.start,
              end: range.end,
              scrub: 1,
            },
          });
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[240vh] bg-[#121212]"
      aria-label="Scroll-driven car hero section"
    >
      {/* Sticky/Pinned Full-Viewport Track */}
      <div
        ref={trackRef}
        className="relative h-screen w-full bg-[#d1d1d1] text-[#111111] flex flex-col justify-between py-6 sm:py-8 overflow-hidden"
      >
        {/* Top Minimal Brand Header + Initial Load Headline */}
        <div ref={introHeaderRef} className="w-full max-w-6xl mx-auto px-5 sm:px-8 z-10">
          <div className="flex items-center justify-between border-b border-neutral-400/60 pb-3 mb-4 sm:mb-6">
            <span className="font-bold tracking-[0.25em] text-xs sm:text-sm uppercase text-neutral-900">
              ITZFIZZ
            </span>
            <nav className="flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-700">
              <a href="#about" className="hover:text-black transition-colors">
                About
              </a>
              <a
                href="https://github.com/trisha3690/Scroll-Driven-Hero-Section-Animation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                GitHub â†—
              </a>
            </nav>
          </div>

          {/* Initial Load Letter-Spaced Headline */}
          <h1
            className="font-bold uppercase text-neutral-900 leading-tight"
            aria-label="WELCOME ITZ FIZZ"
          >
            <span
              data-intro-word
              className="reduced-motion-visible block text-xl sm:text-3xl md:text-4xl tracking-[0.35em] sm:tracking-[0.45em]"
            >
              {INTRO_WORDS[0]}
            </span>
            <span
              data-intro-word
              className="reduced-motion-visible block mt-1 text-2xl sm:text-4xl md:text-5xl tracking-[0.35em] sm:tracking-[0.45em] text-neutral-800"
            >
              {INTRO_WORDS[1]}
            </span>
          </h1>
        </div>

        {/* Floating Scroll-Triggered Callout Boxes (#box1 - #box4) */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {ROAD_CALLOUT_BOXES.map((box) => (
            <div
              key={box.id}
              id={box.id}
              data-callout-box
              style={{
                backgroundColor: box.bgColor,
                color: box.textColor,
              }}
              className={`reduced-motion-visible absolute ${box.positionClass} rounded-[10px] px-5 py-4 sm:px-[30px] sm:py-[26px] shadow-lg flex flex-col justify-center items-start gap-1 max-w-[200px] sm:max-w-[270px]`}
            >
              <span className="text-3xl sm:text-[52px] font-semibold leading-none tracking-tight">
                {box.value}
              </span>
              <span className="text-xs sm:text-[17px] font-normal leading-snug">
                {box.label}
              </span>
            </div>
          ))}
        </div>

        {/* Full-Width Horizontal Road Track (#road) */}
        <div
          ref={roadRef}
          id="road"
          className="relative w-screen h-[115px] sm:h-[160px] lg:h-[200px] bg-[#1e1e1e] overflow-hidden my-auto flex items-center"
        >
          {/* Green Trail Bar (#trail) */}
          <div
            ref={trailRef}
            id="trail"
            className="absolute top-0 left-0 h-full bg-[#45db7d] z-[1] w-0 pointer-events-none"
          />

          {/* Bold Road Typography (WELCOME ITZFIZZ) revealed by the trail */}
          <div
            ref={valueAddRef}
            id="valueText"
            className="value-add relative z-[5] left-[4%] sm:left-[5%] flex items-center gap-[0.15rem] sm:gap-[0.3rem] font-bold text-[2.1rem] sm:text-[4.6rem] md:text-[6.2rem] lg:text-[7.8rem] leading-none select-none pointer-events-none whitespace-nowrap"
            aria-hidden="true"
          >
            {ROAD_LETTERS.map((char, idx) => (
              <span
                key={idx}
                className="value-letter text-[#111111] opacity-0 transition-opacity duration-75"
              >
                {char}
              </span>
            ))}
          </div>

          {/* Top-View McLaren 720S Car (#car) */}
          <ScrollVisual ref={carRef} />
        </div>

        {/* Bottom Initial-Load Staggered Statistics */}
        <Stats statsRef={statsRef} />
      </div>
    </section>
  );
};

export default Hero;