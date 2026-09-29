import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollVisual from './ScrollVisual';
import Stats from './Stats';
import { SCROLL_TELEMETRY_CARDS } from '../assets/hypercarAsset';

gsap.registerPlugin(ScrollTrigger);

const HEADLINE_LINE_1 = 'WELCOME'.split('');
const HEADLINE_LINE_2 = 'ITZ FIZZ'.split('');
const TRACK_LETTERS = 'WELCOME ITZFIZZ'.split('');

/**
 * Hero Component
 * Implements the full-viewport pinned scroll-driven hero section with:
 * 1. GSAP initial page-load staggered animations (headline + 4 impact metrics)
 * 2. GSAP ScrollTrigger pinned 4-stage cinematic scroll timeline (scrub: 1)
 * 3. Top-down McLaren 720S / Cyber-GT visual translating, rotating, and scaling
 * 4. Compositor-only (transform & opacity) velocity trail and letter-by-letter illumination
 * 5. Full responsive adaptation via gsap.matchMedia() & prefers-reduced-motion support
 */
const Hero = () => {
  const heroSectionRef = useRef(null);
  const pinnedViewportRef = useRef(null);
  const headerCopyRef = useRef(null);
  const statsContainerRef = useRef(null);
  const trackRoadRef = useRef(null);
  const carVisualRef = useRef(null);
  const trailRibbonRef = useRef(null);
  const ambientGlowRef = useRef(null);
  const parallaxGridRef = useRef(null);

  const speedValueRef = useRef(null);
  const progressValueRef = useRef(null);
  const stageBadgeRef = useRef(null);
  const progressBarFillRef = useRef(null);

  const [reducedMotion, setReducedMotion] = useState(false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: reduce)', () => {
        setReducedMotion(true);
        gsap.set(
          [
            '[data-headline-char]',
            '[data-stat-card]',
            '[data-telemetry-card]',
            '[data-track-letter]',
            carVisualRef.current,
            trailRibbonRef.current,
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            clearProps: 'willChange',
          }
        );
      });

      mm.add(
        {
          isDesktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
          isTablet:
            '(min-width: 768px) and (max-width: 1023px) and (prefers-reduced-motion: no-preference)',
          isMobile: '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
        },
        (context) => {
          setReducedMotion(false);
          const { isDesktop, isTablet } = context.conditions;

          const headlineChars = gsap.utils.toArray('[data-headline-char]');
          const statCards = gsap.utils.toArray('[data-stat-card]');
          const trackLetters = gsap.utils.toArray('[data-track-letter]');
          const telemetryCards = gsap.utils.toArray('[data-telemetry-card]');

          gsap.set(headlineChars, { opacity: 0, y: 40 });
          gsap.set(statCards, { opacity: 0, y: 25 });
          gsap.set(telemetryCards, { opacity: 0, y: 28, scale: 0.92 });
          gsap.set(trailRibbonRef.current, { scaleX: 0.04, opacity: 0.85 });
          gsap.set(trackLetters, {
            opacity: 0.14,
            scale: 0.96,
            color: '#475569',
          });

          const loadTl = gsap.timeline({
            defaults: { ease: 'power3.out' },
          });

          loadTl
            .fromTo(
              '[data-hero-nav]',
              { opacity: 0, y: -18 },
              { opacity: 1, y: 0, duration: 0.75 }
            )
            .to(
              headlineChars,
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.04,
                ease: 'power3.out',
              },
              '-=0.45'
            )
            .fromTo(
              trackRoadRef.current,
              { opacity: 0, scaleY: 0.92 },
              { opacity: 1, scaleY: 1, duration: 0.85 },
              '-=0.6'
            )
            .fromTo(
              carVisualRef.current,
              { opacity: 0, x: -40, scale: 0.9 },
              { opacity: 1, x: 0, scale: 1, duration: 0.95, ease: 'power3.out' },
              '-=0.65'
            )
            .to(
              statCards,
              {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.15,
                ease: 'power3.out',
              },
              '-=0.55'
            );

          const scrollDistance = isDesktop ? 2300 : isTablet ? 1900 : 1550;

          const getMaxCarTravel = () => {
            if (!trackRoadRef.current || !carVisualRef.current) return 600;
            const roadWidth = trackRoadRef.current.clientWidth;
            const carWidth = carVisualRef.current.clientWidth;
            const horizontalPadding = isDesktop ? 48 : 20;
            return Math.max(120, roadWidth - carWidth - horizontalPadding);
          };

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: 'top top',
              end: `+=${scrollDistance}`,
              pin: pinnedViewportRef.current,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const progress = self.progress;
                const pct = Math.round(progress * 100);
                const velocityKmh = Math.round(progress * 342);

                let stageText = 'STAGE 01 // IGNITION';
                if (progress >= 0.82) {
                  stageText = 'STAGE 04 // APEX HANDOFF';
                } else if (progress >= 0.52) {
                  stageText = 'STAGE 03 // PEAK TELEMETRY';
                } else if (progress >= 0.2) {
                  stageText = 'STAGE 02 // ACCELERATION';
                }

                if (speedValueRef.current) {
                  speedValueRef.current.textContent = String(velocityKmh).padStart(3, '0');
                }
                if (progressValueRef.current) {
                  progressValueRef.current.textContent = `${pct}%`;
                }
                if (stageBadgeRef.current) {
                  stageBadgeRef.current.textContent = stageText;
                }
                if (progressBarFillRef.current) {
                  gsap.set(progressBarFillRef.current, {
                    scaleX: Math.max(0.02, progress),
                  });
                }

                const totalLetters = trackLetters.length;
                const activeLetterGate = progress * (totalLetters + 1.5);

                trackLetters.forEach((letterEl, idx) => {
                  if (activeLetterGate >= idx + 0.35) {
                    gsap.set(letterEl, {
                      opacity: 1,
                      scale: 1,
                      color: idx >= 8 ? '#def54f' : '#45db7d',
                      textShadow:
                        idx >= 8
                          ? '0 0 28px rgba(222,245,79,0.55)'
                          : '0 0 28px rgba(69,219,125,0.55)',
                    });
                  } else {
                    gsap.set(letterEl, {
                      opacity: 0.14,
                      scale: 0.96,
                      color: '#475569',
                      textShadow: 'none',
                    });
                  }
                });
              },
            },
          });

          scrollTl
            .to(
              carVisualRef.current,
              {
                x: () => getMaxCarTravel() * 0.26,
                y: isDesktop ? -10 : -5,
                scale: isDesktop ? 1.08 : 1.04,
                rotation: -2.6,
                ease: 'power1.inOut',
                duration: 0.25,
              },
              0
            )
            .to(
              carVisualRef.current,
              {
                x: () => getMaxCarTravel() * 0.66,
                y: isDesktop ? 12 : 6,
                scale: isDesktop ? 1.18 : 1.08,
                rotation: 2.4,
                ease: 'sine.inOut',
                duration: 0.35,
              },
              0.25
            )
            .to(
              carVisualRef.current,
              {
                x: () => getMaxCarTravel(),
                y: 0,
                scale: isDesktop ? 1.05 : 1.0,
                rotation: 0,
                ease: 'power2.out',
                duration: 0.4,
              },
              0.6
            );

          scrollTl.to(
            trailRibbonRef.current,
            {
              scaleX: 1,
              opacity: 1,
              ease: 'none',
              duration: 1,
            },
            0
          );

          scrollTl.to(
            headerCopyRef.current,
            {
              y: isDesktop ? -34 : -18,
              scale: 0.96,
              opacity: 0.28,
              ease: 'power1.inOut',
              duration: 0.55,
            },
            0.05
          );

          scrollTl.to(
            statsContainerRef.current,
            {
              y: isDesktop ? 26 : 14,
              opacity: 0.22,
              scale: 0.97,
              ease: 'power1.inOut',
              duration: 0.55,
            },
            0.08
          );

          scrollTl.to(
            ambientGlowRef.current,
            {
              xPercent: 36,
              yPercent: -12,
              scale: 1.25,
              opacity: 0.95,
              ease: 'none',
              duration: 1,
            },
            0
          );

          scrollTl.to(
            parallaxGridRef.current,
            {
              x: isDesktop ? -90 : -40,
              ease: 'none',
              duration: 1,
            },
            0
          );

          telemetryCards.forEach((card, index) => {
            const startAt = 0.14 + index * 0.18;
            scrollTl.to(
              card,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.16,
                ease: 'back.out(1.4)',
              },
              startAt
            );
          });
        }
      );
    }, heroSectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={heroSectionRef}
      id="hero-experience"
      className="relative w-full bg-obsidian-950 overflow-hidden"
      aria-label="Scroll-driven interactive hero section"
    >
      <div
        ref={pinnedViewportRef}
        className="relative h-screen w-full flex flex-col justify-between py-4 sm:py-6 lg:py-8 overflow-hidden select-none"
      >
        <div
          ref={parallaxGridRef}
          className="telemetry-grid gpu-accelerated pointer-events-none absolute -inset-24 opacity-65"
        />

        <div
          ref={ambientGlowRef}
          className="gpu-accelerated pointer-events-none absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[560px] lg:w-[760px] h-[260px] sm:h-[420px] rounded-full blur-[130px] opacity-60"
          style={{
            background:
              'radial-gradient(circle, rgba(69,219,125,0.26) 0%, rgba(106,201,255,0.16) 45%, rgba(222,245,79,0.06) 75%, transparent 100%)',
          }}
        />

        <header
          data-hero-nav
          className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-volt shadow-[0_0_12px_#45db7d]" />
            <span className="font-display font-bold tracking-[0.28em] text-xs sm:text-sm uppercase text-white">
              ITZ FIZZ <span className="text-volt font-mono font-normal">// KINETIC LAB</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 bg-obsidian-900/90 border border-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-md">
            <span
              ref={stageBadgeRef}
              className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-volt uppercase"
            >
              STAGE 01 // IGNITION
            </span>
            <div className="h-3 w-[1px] bg-white/15 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs">
              <span className="text-slate-400">VEL:</span>
              <span ref={speedValueRef} className="text-white font-semibold tabular-nums">
                000
              </span>
              <span className="text-volt-lime text-[10px]">KM/H</span>
            </div>
            <div className="h-3 w-[1px] bg-white/15" />
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="text-slate-400">SCROLL:</span>
              <span ref={progressValueRef} className="text-volt-cyan font-semibold tabular-nums">
                0%
              </span>
            </div>
          </div>

          <a
            href="#about-experience"
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-300 hover:text-volt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-volt rounded-full px-3 py-1 border border-white/10 hover:border-volt/40"
          >
            Explore Specs
            <span aria-hidden="true">â†“</span>
          </a>
        </header>

        <div
          ref={headerCopyRef}
          className="gpu-accelerated relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-1 sm:mt-2"
        >
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.35em] text-volt mb-1.5 sm:mb-2">
            SCROLL-DRIVEN AUTOMOTIVE TELEMETRY SHOWCASE
          </p>

          <h1
            className="font-display font-extrabold uppercase text-white leading-none select-none"
            aria-label="WELCOME ITZ FIZZ"
          >
            <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.28em] sm:tracking-[0.38em] lg:tracking-[0.44em] pl-[0.28em] sm:pl-[0.38em] lg:pl-[0.44em] text-slate-100">
              {HEADLINE_LINE_1.map((char, index) => (
                <span
                  key={`line1-${index}`}
                  data-headline-char
                  className="reduced-motion-visible inline-block gpu-accelerated"
                >
                  {char}
                </span>
              ))}
            </span>

            <span className="block mt-1.5 sm:mt-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.26em] sm:tracking-[0.36em] lg:tracking-[0.42em] pl-[0.26em] sm:pl-[0.36em] lg:pl-[0.42em] bg-gradient-to-r from-volt via-volt-lime to-volt-cyan bg-clip-text text-transparent">
              {HEADLINE_LINE_2.map((char, index) => (
                <span
                  key={`line2-${index}`}
                  data-headline-char
                  className="reduced-motion-visible inline-block gpu-accelerated"
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>
        </div>

        <div className="relative z-20 w-full flex-1 flex items-center justify-center my-2 sm:my-4">
          <div className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {SCROLL_TELEMETRY_CARDS.map((card) => (
              <div
                key={card.id}
                data-telemetry-card
                className={`reduced-motion-visible gpu-accelerated absolute z-30 ${card.positionClass} ${card.bgClass} border rounded-2xl px-3.5 py-2.5 sm:px-5 sm:py-4 shadow-2xl max-w-[195px] sm:max-w-[265px] transition-shadow`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span
                    className={`font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] uppercase px-2 py-0.5 rounded-md ${card.badgeClass}`}
                  >
                    {card.subtitle}
                  </span>
                </div>
                <div className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-none tracking-tight">
                  {card.value}
                </div>
                <p className="mt-1 text-[11px] sm:text-xs font-semibold leading-snug opacity-90">
                  {card.title}
                </p>
              </div>
            ))}
          </div>

          <div
            ref={trackRoadRef}
            className="track-asphalt relative w-full h-[126px] sm:h-[168px] lg:h-[210px] border-y border-white/10 flex items-center overflow-hidden"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] opacity-25"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to right, #94a3b8 0, #94a3b8 24px, transparent 24px, transparent 48px)',
              }}
            />

            <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-between px-6 font-mono text-[9px] tracking-[0.3em] text-slate-600 uppercase">
              <span>SECTOR 01 // START GRID</span>
              <span className="hidden sm:inline">TELEMETRY LOCK: ACTIVE</span>
              <span>SECTOR 04 // TERMINAL APEX</span>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-between px-6 font-mono text-[9px] tracking-[0.3em] text-slate-600 uppercase">
              <span>00.0M</span>
              <span className="hidden md:inline">DOWNFORCE: 840 KG</span>
              <span>1,500.0M</span>
            </div>

            <div
              ref={trailRibbonRef}
              className="trail-ribbon absolute inset-y-0 left-0 w-full z-10 pointer-events-none"
            />

            <div
              className="relative z-20 w-full px-4 sm:px-10 lg:px-16 flex items-center justify-between pointer-events-none select-none"
              aria-hidden="true"
            >
              {TRACK_LETTERS.map((letter, idx) => (
                <span
                  key={`track-letter-${idx}`}
                  data-track-letter
                  className="gpu-accelerated font-display font-extrabold text-xl sm:text-4xl md:text-5xl lg:text-7xl tracking-wider transition-colors duration-75"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>

            <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30">
              <ScrollVisual ref={carVisualRef} />
            </div>
          </div>
        </div>

        <div className="relative z-20 flex flex-col gap-3">
          <Stats statsContainerRef={statsContainerRef} />

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-volt" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-slate-400">
                {reducedMotion
                  ? 'REDUCED MOTION ACTIVE â€” STATIC TELEMETRY VIEW'
                  : 'SCROLL DOWN TO DRIVE THE TELEMETRY TIMELINE'}
              </span>
            </div>

            <div className="w-32 sm:w-56 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                ref={progressBarFillRef}
                className="h-full w-full bg-gradient-to-r from-volt via-volt-lime to-volt-cyan origin-left scale-x-[0.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
