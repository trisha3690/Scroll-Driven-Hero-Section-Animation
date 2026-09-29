import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import { SCROLL_STAGES } from './assets/hypercarAsset';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const aboutSectionRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '[data-about-reveal]',
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: aboutSectionRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, aboutSectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-white selection:bg-volt selection:text-obsidian-950">
      <main>
        <Hero />

        <section
          ref={aboutSectionRef}
          id="about-experience"
          className="relative z-20 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950"
          aria-labelledby="about-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl" data-about-reveal>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-volt px-3 py-1 rounded-full bg-volt/10 border border-volt/30">
                <span className="w-1.5 h-1.5 rounded-full bg-volt" />
                ABOUT THE EXPERIENCE
              </span>

              <h2
                id="about-heading"
                className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
              >
                A modern interactive experience built with{' '}
                <span className="bg-gradient-to-r from-volt via-volt-lime to-volt-cyan bg-clip-text text-transparent">
                  React, GSAP &amp; ScrollTrigger.
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
                Designed as a precision scrollytelling showcase, the hero section locks into the
                viewport while tying every visual transformation—horizontal translation, aerodynamic
                banking rotation, dynamic scaling, slipstream trail expansion, and sequential
                telemetry cards—directly to your scrollbar position with{' '}
                <code className="font-mono text-sm text-volt-lime bg-white/5 px-2 py-0.5 rounded">
                  scrub: 1
                </code>{' '}
                interpolation.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {SCROLL_STAGES.map((item) => (
                <article
                  key={item.stage}
                  data-about-reveal
                  className="reduced-motion-visible rounded-2xl bg-obsidian-800/70 border border-white/10 hover:border-volt/40 p-6 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs font-bold tracking-[0.22em] text-volt">
                        STAGE {item.stage}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                        {item.range}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white tracking-wide">
                      {item.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>COMPOSITOR GPU</span>
                    <span className="text-volt-lime">transform / opacity</span>
                  </div>
                </article>
              ))}
            </div>

            <div
              data-about-reveal
              className="reduced-motion-visible mt-14 rounded-3xl bg-gradient-to-r from-obsidian-800/90 via-obsidian-900/95 to-obsidian-800/90 border border-white/10 p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            >
              <div className="space-y-2 max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-volt-cyan">
                  PERFORMANCE &amp; ACCESSIBILITY VERIFIED
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  60fps GPU-Accelerated Motion &amp; Responsive Breakpoints
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  All animations avoid layout thrashing by exclusively mutating{' '}
                  <code className="font-mono text-xs text-volt">transform</code> (
                  <code className="font-mono text-xs text-slate-200">
                    translate3d, scale, scaleX, rotate
                  </code>
                  ) and <code className="font-mono text-xs text-volt">opacity</code>, while
                  automatically adapting travel distances across desktop, tablet, and mobile screens
                  and honoring <code className="font-mono text-xs text-volt-lime">prefers-reduced-motion</code>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <button
                  type="button"
                  onClick={handleScrollToTop}
                  className="inline-flex items-center gap-2.5 rounded-full bg-volt text-obsidian-950 font-display font-bold text-sm px-6 py-3.5 hover:bg-volt-lime transition-colors shadow-volt-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-volt-lime"
                >
                  Replay Scroll Animation
                  <span aria-hidden="true">↑</span>
                </button>
                <a
                  href="https://github.com/trisha3690/scroll-driven-hero-animation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase tracking-[0.18em] px-5 py-3.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-volt"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-obsidian-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            <span>ITZ FIZZ // SCROLL-DRIVEN HERO ANIMATION</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/trisha3690"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-volt transition-colors"
            >
              GitHub: @trisha3690
            </a>
            <a
              href="https://github.com/trisha3690/scroll-driven-hero-animation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-volt-lime transition-colors"
            >
              Source Code
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
