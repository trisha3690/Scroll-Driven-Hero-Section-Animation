import React from 'react';
import { INITIAL_STATS } from '../assets/hypercarAsset';

/**
 * Stats Component
 * Displays the initial-load statistics with independent staggered animation
 * (opacity: 0 -> 1, y: 25px -> 0).
 */
const Stats = ({ statsRef }) => {
  return (
    <div
      ref={statsRef}
      className="w-full max-w-6xl mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-between gap-6 sm:gap-10 z-10"
      aria-label="Impact statistics"
    >
      {INITIAL_STATS.map((stat) => (
        <div
          key={stat.id}
          data-initial-stat
          className="reduced-motion-visible flex items-baseline gap-3.5 border-l-2 border-neutral-800 pl-4"
        >
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
            {stat.value}
          </span>
          <span className="text-xs sm:text-sm font-medium text-neutral-600 max-w-[120px] leading-tight">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;