import React, { forwardRef } from 'react';
import mclarenImg from '../assets/mclaren-720s.png';

/**
 * ScrollVisual Component
 * Renders the top-view McLaren 720S sports car that drives across the track
 * in response to user scroll progress.
 */
const ScrollVisual = forwardRef((_props, ref) => {
  return (
    <div
      ref={ref}
      className="gpu-accelerated absolute top-0 left-0 z-20 h-[115px] sm:h-[160px] lg:h-[200px] w-auto flex items-center pointer-events-none select-none"
    >
      <img
        src={mclarenImg}
        alt="McLaren 720S top view"
        className="h-full w-auto object-contain block drop-shadow-[0_14px_20px_rgba(0,0,0,0.55)]"
        draggable="false"
      />
    </div>
  );
});

ScrollVisual.displayName = 'ScrollVisual';

export default ScrollVisual;