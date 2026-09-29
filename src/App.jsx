import React from 'react';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white antialiased overflow-x-hidden">
      <main>
        <Hero />

        {/* Secondary Section: About the Experience */}
        <section
          id="about"
          className="py-24 sm:py-32 px-5 sm:px-8 bg-[#121212] border-t border-neutral-800"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#45db7d] mb-3">
              About the Experience
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl">
              A modern interactive experience built with React, GSAP and ScrollTrigger.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
              As you scroll through the hero track, the McLaren 720S drives across the viewport,
              revealing the headline trail and surfacing key operational metrics in real time
              with smooth scrub interpolation.
            </p>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-neutral-800">
              <div>
                <div className="text-2xl font-bold text-[#def54f]">58%</div>
                <div className="mt-1 text-sm font-medium text-white">Pickup Point Growth</div>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                  Streamlined hub routing increases self-service pickup adoption across urban zones.
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#6ac9ff]">23%</div>
                <div className="mt-1 text-sm font-medium text-white">Fewer Support Calls</div>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                  Live arrival tracking reduces inbound status inquiries during peak delivery hours.
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#fa7328]">40%</div>
                <div className="mt-1 text-sm font-medium text-white">Faster Turnaround</div>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                  Coordinated curb-to-locker handoffs cut average wait times nearly in half.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg bg-[#45db7d] text-[#111111] font-semibold text-sm hover:bg-[#3bc76f] transition-colors"
              >
                Back to Top ↑
              </button>
              <a
                href="https://github.com/trisha3690/Scroll-Driven-Hero-Section-Animation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-neutral-700 text-neutral-200 hover:border-neutral-500 hover:text-white font-medium text-sm transition-colors"
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-5 sm:px-8 border-t border-neutral-900 bg-[#0d0d0d] text-xs text-neutral-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} ItzFizz — Scroll-Driven Hero Animation</span>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/trisha3690"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              @trisha3690
            </a>
            <a
              href="https://github.com/trisha3690/Scroll-Driven-Hero-Section-Animation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;