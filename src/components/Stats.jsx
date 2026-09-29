import React from 'react';
import { INITIAL_IMPACT_STATS } from '../assets/hypercarAsset';

/**
 * Stats Component
 * Displays the 4 initial impact metrics below the hero track.
 * Each stat card animates independently with a staggered entrance on page load
 * (opacity: 0 -> 1, y: 25px -> 0) and responds to scroll progress.
 */
const Stats = ({ statsContainerRef }) => {
  return (
    <div
      ref={statsContainerRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20"
      aria-label="Key performance and impact statistics"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {INITIAL_IMPACT_STATS.map((stat, index) => (
          <article
            key={stat.id}
            data-stat-card
            className="reduced-motion-visible gpu-accelerated group relative rounded-2xl bg-obsidian-900/80 border border-white/10 hover:border-volt/40 p-3.5 sm:p-5 backdrop-blur-xl transition-colors duration-300 overflow-hidden"
          >
            <div
              className="absolute inset-x-0 top-0 h-[2px] opacity-80"
              style={{
                background: `linear-gradient(90deg, ${stat.accent}, transparent)`,
              }}
            />

            <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">
                0{index + 1} // METRIC
              </span>
              <span
                className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                style={{
                  color: stat.accent,
                  borderColor: `${stat.accent}40`,
                  backgroundColor: `${stat.accent}14`,
                }}
              >
                {stat.badge}
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span
                className="font-display text-2xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white"
                style={{ textShadow: `0 0 28px ${stat.accent}33` }}
              >
                {stat.value}
              </span>
            </div>

            <h2 className="mt-1 text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
              {stat.label}
            </h2>
            <p className="mt-0.5 hidden sm:block text-xs text-slate-400 leading-relaxed">
              {stat.detail}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Stats;
