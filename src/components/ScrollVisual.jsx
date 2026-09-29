import React, { forwardRef } from 'react';

/**
 * ScrollVisual Component
 * Renders the main scroll-driven visual object: a precision-engineered top-down
 * McLaren 720S / Cyber-GT Aero Hypercar with dynamic LED headlight cones,
 * carbon-fiber aero diffusers, panoramic glass canopy, and live telemetry HUD rings.
 */
const ScrollVisual = forwardRef(({ velocity = 0, activeStage = 1 }, ref) => {
  return (
    <div
      ref={ref}
      className="gpu-accelerated relative z-30 flex items-center justify-center select-none pointer-events-none"
      style={{
        width: 'clamp(190px, 24vw, 350px)',
        height: 'clamp(96px, 12vw, 175px)',
      }}
      aria-label="Interactive top-view McLaren 720S Aero-GT sports car controlled by page scroll"
      role="img"
    >
      {/* Ambient Underbody Neon Underglow */}
      <div
        className="car-underglow absolute inset-x-3 inset-y-2 rounded-full blur-2xl transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(69,219,125,0.55) 0%, rgba(106,201,255,0.25) 55%, transparent 80%)',
          opacity: 0.85,
        }}
      />

      {/* Orbital Telemetry Ring around Vehicle */}
      <div className="car-telemetry-ring absolute -inset-4 sm:-inset-6 rounded-full border border-volt/20 pointer-events-none flex items-center justify-between px-2">
        <span className="w-1.5 h-1.5 rounded-full bg-volt shadow-[0_0_8px_#45db7d]" />
        <span className="hidden sm:inline-block font-mono text-[9px] tracking-[0.25em] text-volt/80 uppercase bg-obsidian-950/80 px-2 py-0.5 rounded-full border border-volt/25 -translate-y-10 sm:-translate-y-12">
          AERO-GT // STAGE 0{activeStage} • {velocity} KM/H
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-volt-lime shadow-[0_0_8px_#def54f]" />
      </div>

      {/* High-Detail Top-View McLaren 720S / Cyber-GT SVG */}
      <svg
        viewBox="0 0 520 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
      >
        <defs>
          <linearGradient id="bodyMetallic" x1="40" y1="120" x2="460" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#121824" />
            <stop offset="18%" stopColor="#1E293B" />
            <stop offset="48%" stopColor="#334155" />
            <stop offset="75%" stopColor="#45DB7D" />
            <stop offset="94%" stopColor="#DEF54F" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <linearGradient id="sideSculpt" x1="120" y1="40" x2="380" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#090D16" />
          </linearGradient>

          <linearGradient id="carbonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#090B10" />
            <stop offset="50%" stopColor="#181E2C" />
            <stop offset="100%" stopColor="#05070B" />
          </linearGradient>

          <linearGradient id="canopyGlass" x1="160" y1="75" x2="355" y2="165" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#05070B" />
            <stop offset="40%" stopColor="#0B1324" />
            <stop offset="75%" stopColor="#162B40" />
            <stop offset="100%" stopColor="#070A12" />
          </linearGradient>

          <linearGradient id="headlightCone" x1="430" y1="120" x2="520" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DEF54F" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#45DB7D" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#45DB7D" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="rearExhaust" x1="65" y1="120" x2="0" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FA7328" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#DEF54F" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#45DB7D" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="car-exhaust-flame">
          <polygon points="62,92 4,76 18,105 62,106" fill="url(#rearExhaust)" />
          <polygon points="62,148 4,164 18,135 62,134" fill="url(#rearExhaust)" />
          <ellipse cx="56" cy="120" rx="28" ry="10" fill="url(#rearExhaust)" />
        </g>

        <g className="car-headlight-beams">
          <polygon points="432,62 518,32 518,92 444,82" fill="url(#headlightCone)" />
          <polygon points="432,178 518,148 518,208 444,158" fill="url(#headlightCone)" />
        </g>

        <rect x="96" y="28" width="66" height="24" rx="8" fill="#07090E" stroke="#334155" strokeWidth="1.5" />
        <line x1="112" y1="30" x2="146" y2="30" stroke="#45DB7D" strokeWidth="2" strokeOpacity="0.7" />
        <rect x="96" y="188" width="66" height="24" rx="8" fill="#07090E" stroke="#334155" strokeWidth="1.5" />
        <line x1="112" y1="210" x2="146" y2="210" stroke="#45DB7D" strokeWidth="2" strokeOpacity="0.7" />
        <rect x="342" y="32" width="62" height="22" rx="8" fill="#07090E" stroke="#334155" strokeWidth="1.5" />
        <line x1="356" y1="34" x2="390" y2="34" stroke="#DEF54F" strokeWidth="2" strokeOpacity="0.85" />
        <rect x="342" y="186" width="62" height="22" rx="8" fill="#07090E" stroke="#334155" strokeWidth="1.5" />
        <line x1="356" y1="206" x2="390" y2="206" stroke="#DEF54F" strokeWidth="2" strokeOpacity="0.85" />

        <path
          d="M412 52 C442 56, 462 82, 466 120 C462 158, 442 184, 412 188 L396 176 L396 64 Z"
          fill="url(#carbonGrad)"
          stroke="#45DB7D"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />

        <path
          d="M68 58 L95 48 L95 192 L68 182 C56 160, 56 80, 68 58 Z"
          fill="url(#carbonGrad)"
          stroke="#334155"
          strokeWidth="1.5"
        />
        <line x1="58" y1="84" x2="84" y2="84" stroke="#45DB7D" strokeWidth="2" />
        <line x1="56" y1="108" x2="84" y2="108" stroke="#45DB7D" strokeWidth="2" />
        <line x1="56" y1="132" x2="84" y2="132" stroke="#45DB7D" strokeWidth="2" />
        <line x1="58" y1="156" x2="84" y2="156" stroke="#45DB7D" strokeWidth="2" />

        <path
          d="M76 62
             C96 36, 152 34, 188 46
             C224 58, 266 56, 308 44
             C346 34, 398 38, 434 62
             C454 78, 462 98, 462 120
             C462 142, 454 162, 434 178
             C398 202, 346 206, 308 196
             C266 184, 224 182, 188 194
             C152 206, 96 204, 76 178
             C64 156, 64 84, 76 62 Z"
          fill="url(#bodyMetallic)"
          stroke="#E2E8F0"
          strokeOpacity="0.35"
          strokeWidth="1.75"
        />

        <path
          d="M175 50 C220 66, 278 66, 322 50 L304 72 C266 80, 224 80, 190 70 Z"
          fill="url(#sideSculpt)"
        />
        <path
          d="M175 190 C220 174, 278 174, 322 190 L304 168 C266 160, 224 160, 190 170 Z"
          fill="url(#sideSculpt)"
        />

        <path d="M348 84 L424 72 L434 96 L362 104 Z" fill="#0B101B" opacity="0.75" />
        <path d="M348 156 L424 168 L434 144 L362 136 Z" fill="#0B101B" opacity="0.75" />

        <path
          d="M132 88
             C165 68, 256 64, 336 78
             C358 86, 368 102, 368 120
             C368 138, 358 154, 336 162
             C256 176, 165 172, 132 152
             C114 138, 114 102, 132 88 Z"
          fill="url(#canopyGlass)"
          stroke="#6AC9FF"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />

        <path
          d="M276 76 C318 80, 344 96, 348 120 C344 144, 318 160, 276 164 C296 146, 304 134, 304 120 C304 106, 296 94, 276 76 Z"
          fill="#6AC9FF"
          fillOpacity="0.18"
        />

        <line x1="122" y1="120" x2="228" y2="120" stroke="#45DB7D" strokeWidth="2.5" strokeOpacity="0.8" />
        <path d="M148 96 L204 120 L148 144" stroke="#45DB7D" strokeWidth="1.5" strokeOpacity="0.55" />
        <path d="M178 96 L224 120 L178 144" stroke="#DEF54F" strokeWidth="1.5" strokeOpacity="0.55" />

        <path
          d="M82 54 C74 86, 74 154, 82 186 L98 180 C92 150, 92 90, 98 60 Z"
          fill="#0B0F19"
          stroke="#45DB7D"
          strokeWidth="1.5"
        />

        <path d="M312 66 L326 42 L336 46 L324 70 Z" fill="#45DB7D" />
        <path d="M312 174 L326 198 L336 194 L324 170 Z" fill="#45DB7D" />

        <path d="M424 62 C440 70, 448 80, 450 90" stroke="#DEF54F" strokeWidth="4" strokeLinecap="round" />
        <path d="M424 178 C440 170, 448 160, 450 150" stroke="#DEF54F" strokeWidth="4" strokeLinecap="round" />
        <path d="M72 68 C66 94, 66 146, 72 172" stroke="#FA7328" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>
  );
});

ScrollVisual.displayName = 'ScrollVisual';

export default ScrollVisual;
