import React, { forwardRef } from 'react';
import mclarenImg from '../assets/mclaren-720s.png';

/**
 * ScrollVisual Component
 * Combines the dark-theme ambient underbody lighting and headlight beam cones
 * with the real top-view McLaren 720S asset from the reference animation.
 */
const ScrollVisual = forwardRef((_props, ref) => {
  return (
    <div
      ref={ref}
      className="gpu-accelerated relative z-30 flex items-center justify-center select-none pointer-events-none"
      style={{
        width: 'clamp(175px, 21vw, 310px)',
        height: 'clamp(90px, 11vw, 160px)',
      }}
      aria-label="Interactive top-view McLaren 720S sports car controlled by page scroll"
      role="img"
    >
      {/* Ambient Underbody Emerald/Cyan Glow */}
      <div
        className="car-underglow absolute inset-x-4 inset-y-3 rounded-full blur-2xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(69,219,125,0.5) 0%, rgba(222,245,79,0.22) 55%, transparent 80%)',
        }}
      />

      {/* Subtle Volumetric Headlight Projection Cones */}
      <svg
        viewBox="0 0 120 140"
        fill="none"
        className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 h-[88%] w-auto pointer-events-none opacity-75"
      >
        <defs>
          <linearGradient id="beamGrad" x1="0" y1="70" x2="120" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DEF54F" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#45DB7D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#45DB7D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="0,26 118,4 118,52 8,44" fill="url(#beamGrad)" />
        <polygon points="0,114 118,88 118,136 8,96" fill="url(#beamGrad)" />
      </svg>

      {/* Real Reference Top-View McLaren 720S Asset */}
      <img
        src={mclarenImg}
        alt="McLaren 720S top view"
        className="relative z-10 w-full h-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.88)]"
        draggable="false"
      />
    </div>
  );
});

ScrollVisual.displayName = 'ScrollVisual';

export default ScrollVisual;