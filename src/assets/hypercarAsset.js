/**
 * High-precision telemetry data and impact metrics for the ITZ FIZZ
 * scroll-driven hero animation experience.
 */

export const INITIAL_IMPACT_STATS = [
  {
    id: 'stat-satisfaction',
    value: '92%',
    label: 'Customer Satisfaction',
    detail: 'Verified across global autonomous pickup hubs',
    accent: '#45db7d',
    badge: 'NPS +74',
  },
  {
    id: 'stat-performance',
    value: '87%',
    label: 'Performance Improvement',
    detail: 'Sub-millisecond dispatch & route optimization',
    accent: '#def54f',
    badge: '60 FPS',
  },
  {
    id: 'stat-engagement',
    value: '76%',
    label: 'User Engagement',
    detail: 'Interactive real-time telemetry & live tracking',
    accent: '#6ac9ff',
    badge: '+3.4x ROI',
  },
  {
    id: 'stat-pickup',
    value: '58%',
    label: 'Pickup Point Velocity',
    detail: 'Increase in automated smart locker utilization',
    accent: '#fa7328',
    badge: 'PEAK FLOW',
  },
];

export const SCROLL_TELEMETRY_CARDS = [
  {
    id: 'telemetry-box-1',
    value: '58%',
    title: 'Increase in pickup point use',
    subtitle: 'STAGE 01 // AUTONOMOUS ROUTING',
    theme: 'lime',
    bgClass: 'bg-[#def54f] text-[#090b10] border-[#e8fa7a]',
    badgeClass: 'bg-[#090b10]/15 text-[#090b10]',
    positionClass: 'top-[6%] left-[4%] sm:left-[8%] lg:left-[12%]',
  },
  {
    id: 'telemetry-box-2',
    value: '23%',
    title: 'Decreased in customer phone calls',
    subtitle: 'STAGE 02 // PREDICTIVE DISPATCH',
    theme: 'cyan',
    bgClass: 'bg-[#6ac9ff] text-[#090b10] border-[#93daff]',
    badgeClass: 'bg-[#090b10]/15 text-[#090b10]',
    positionClass: 'bottom-[8%] left-[8%] sm:left-[18%] lg:left-[26%]',
  },
  {
    id: 'telemetry-box-3',
    value: '27%',
    title: 'Increase in pickup point efficiency',
    subtitle: 'STAGE 03 // ZERO-LATENCY HANDOFF',
    theme: 'dark',
    bgClass: 'bg-[#151924]/95 text-white border-white/15 backdrop-blur-md',
    badgeClass: 'bg-volt/20 text-volt',
    positionClass: 'top-[6%] right-[4%] sm:right-[10%] lg:right-[16%]',
  },
  {
    id: 'telemetry-box-4',
    value: '40%',
    title: 'Decreased in support resolution time',
    subtitle: 'STAGE 04 // FULL TELEMETRY SYNC',
    theme: 'amber',
    bgClass: 'bg-[#fa7328] text-[#090b10] border-[#ff9254]',
    badgeClass: 'bg-[#090b10]/15 text-[#090b10]',
    positionClass: 'bottom-[8%] right-[4%] sm:right-[8%] lg:right-[12%]',
  },
];

export const SCROLL_STAGES = [
  {
    stage: '01',
    name: 'IGNITION & LAUNCH',
    range: '00% — 25%',
    description: 'Headline & baseline impact metrics lock in as the McLaren 720S Aero-GT initializes on the telemetry runway.',
  },
  {
    stage: '02',
    name: 'KINETIC ACCELERATION',
    range: '25% — 55%',
    description: 'The hypercar banks into the apex, illuminating the W E L C O M E  I T Z  F I Z Z track letters and drawing a high-velocity emerald slipstream.',
  },
  {
    stage: '03',
    name: 'PEAK TELEMETRY FOCUS',
    range: '55% — 85%',
    description: 'Active aero engagement scales the visual to primary focus while sequential impact cards reveal real-world operational gains.',
  },
  {
    stage: '04',
    name: 'APEX HANDOFF',
    range: '85% — 100%',
    description: 'The vehicle stabilizes at terminal velocity and transitions seamlessly into the architecture & engineering breakdown below.',
  },
];
