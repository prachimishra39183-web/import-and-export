
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import {
  Eye,
  Target,
  Leaf,
  Globe2,
  ArrowUpRight,
} from 'lucide-react';
import { visionPillars, visionStatement } from '@/data';

/* -------------------- TYPES & ICONS -------------------- */

const iconMap = {
  Eye,
  Target,
  Leaf,
  Globe: Globe2,
} as const;

type VisionIconName = keyof typeof iconMap;

const pillarThemes = [
  { color: '#38BDF8', bg: '#102F49', border: '#235675' },
  { color: '#5EEAD4', bg: '#103B3A', border: '#22635D' },
  { color: '#FBBF65', bg: '#3A3023', border: '#69502F' },
  { color: '#C4B5FD', bg: '#292744', border: '#49446F' },
];

const ports = [
  { name: 'Mumbai', x: 315, y: 155, color: '#5EEAD4' },
  { name: 'Dubai', x: 292, y: 140, color: '#FBBF65' },
  { name: 'Singapore', x: 360, y: 188, color: '#38BDF8' },
  { name: 'Rotterdam', x: 255, y: 98, color: '#5EEAD4' },
  { name: 'New York', x: 155, y: 115, color: '#FBBF65' },
  { name: 'Shanghai', x: 385, y: 120, color: '#C4B5FD' },
];

/* -------------------- ANIMATED SVG GLOBE -------------------- */

function GlobeIllustration() {
  return (
    <svg
      viewBox="0 0 520 400"
      className="vision-globe-svg"
      role="img"
      aria-label="Illustrated globe showing international shipping routes and ports"
    >
      <defs>
        <radialGradient id="vision-ocean" cx="35%" cy="28%" r="75%">
          <stop offset="0%" stopColor="#17657A" />
          <stop offset="55%" stopColor="#0B4051" />
          <stop offset="100%" stopColor="#061927" />
        </radialGradient>

        <linearGradient id="vision-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#83F5DE" stopOpacity=".9" />
          <stop offset="50%" stopColor="#38BDF8" stopOpacity=".35" />
          <stop offset="100%" stopColor="#83F5DE" stopOpacity=".7" />
        </linearGradient>

        <clipPath id="vision-globe-clip">
          <circle cx="260" cy="180" r="145" />
        </clipPath>

        <filter id="vision-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <path
          id="vision-shipping-path"
          d="M 315 155 Q 290 104 255 98 Q 205 75 155 115 Q 250 185 360 188"
          fill="none"
        />
      </defs>

      {/* Globe atmosphere */}
      <circle
        cx="260"
        cy="180"
        r="160"
        fill="#38BDF8"
        opacity=".035"
      />

      <circle
        cx="260"
        cy="180"
        r="151"
        fill="none"
        stroke="#5EEAD4"
        strokeWidth="1"
        opacity=".2"
      />

      {/* Rotating globe */}
      <g className="vision-globe-spin" clipPath="url(#vision-globe-clip)">
        <circle
          cx="260"
          cy="180"
          r="145"
          fill="url(#vision-ocean)"
        />

        {/* Longitude lines */}
        {[35, 70, 105, 140].map((width) => (
          <ellipse
            key={`lon-${width}`}
            cx="260"
            cy="180"
            rx={width}
            ry="145"
            fill="none"
            stroke="#8BE0D1"
            strokeWidth=".7"
            opacity=".22"
          />
        ))}

        {/* Latitude lines */}
        {[55, 95, 125].map((height) => (
          <ellipse
            key={`lat-${height}`}
            cx="260"
            cy="180"
            rx="145"
            ry={height}
            fill="none"
            stroke="#8BE0D1"
            strokeWidth=".7"
            opacity=".22"
          />
        ))}

        {/* Simplified continents */}
        <g
          fill="#32796F"
          stroke="#91DAB6"
          strokeWidth=".8"
          strokeOpacity=".48"
        >
          <path d="M120 85 L145 62 180 66 199 82 218 87 214 108 194 119 183 145 163 151 151 128 131 119Z" />
          <path d="M184 151 L204 157 217 178 210 205 199 232 186 249 176 224 180 201 169 179Z" />
          <path d="M236 75 L254 63 280 70 294 87 282 102 265 105 256 126 238 117 227 97Z" />
          <path d="M245 121 L269 112 290 125 302 152 292 180 277 207 260 231 246 212 240 181 228 158Z" />
          <path d="M282 78 L310 61 350 66 385 83 408 104 391 122 367 119 351 137 331 127 312 140 297 115 276 103Z" />
          <path d="M328 144 L352 147 373 165 365 180 343 178 330 165Z" />
          <path d="M360 209 L385 202 405 217 397 238 375 246 357 230Z" />
          <path d="M112 64 L130 51 148 57 142 74 124 78Z" />
        </g>

        {/* Shipping routes */}
        <g
          fill="none"
          strokeWidth="1.6"
          strokeDasharray="5 5"
          opacity=".85"
        >
          <path
            d="M315 155 Q285 115 255 98"
            stroke="#5EEAD4"
          />
          <path
            d="M255 98 Q205 80 155 115"
            stroke="#FBBF65"
          />
          <path
            d="M360 188 Q380 147 385 120"
            stroke="#38BDF8"
          />
          <path
            d="M255 98 Q320 90 385 120"
            stroke="#C4B5FD"
          />
          <path
            d="M315 155 Q340 182 360 188"
            stroke="#5EEAD4"
          />
        </g>

        {/* Port markers */}
        {ports.map((port) => (
          <g key={port.name}>
            <circle
              cx={port.x}
              cy={port.y}
              r="9"
              fill={port.color}
              opacity=".13"
            />
            <circle
              cx={port.x}
              cy={port.y}
              r="4"
              fill={port.color}
              filter="url(#vision-glow)"
            />
            <circle
              cx={port.x}
              cy={port.y}
              r="2"
              fill="#FFFFFF"
            />
          </g>
        ))}
      </g>

      {/* Globe rim */}
      <circle
        cx="260"
        cy="180"
        r="145"
        fill="none"
        stroke="url(#vision-rim)"
        strokeWidth="1.6"
      />

      {/* Moving cargo ship */}
      <g className="vision-ship">
        <animateMotion
          dur="12s"
          repeatCount="indefinite"
          rotate="auto"
          path="M 315 155 Q 290 104 255 98 Q 205 75 155 115 Q 250 185 360 188"
        />
        <g transform="translate(-8 -5)">
          <path
            d="M-12 2 L12 2 L7 9 L-8 9 Z"
            fill="#F4A765"
          />
          <rect
            x="-5"
            y="-5"
            width="12"
            height="7"
            rx="1"
            fill="#F4D198"
          />
          <rect
            x="-3"
            y="-9"
            width="7"
            height="4"
            rx=".5"
            fill="#5EEAD4"
          />
          <circle
            cx="0"
            cy="2"
            r="14"
            fill="#FBBF65"
            opacity=".13"
          />
        </g>
      </g>

      {/* Orbiting decorative ring */}
      <ellipse
        cx="260"
        cy="180"
        rx="178"
        ry="57"
        transform="rotate(-24 260 180)"
        fill="none"
        stroke="#5EEAD4"
        strokeWidth=".8"
        strokeDasharray="3 8"
        opacity=".3"
      />

      <circle cx="94" cy="111" r="2" fill="#5EEAD4">
        <animate
          attributeName="opacity"
          values=".3;1;.3"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="410" cy="226" r="2" fill="#FBBF65">
        <animate
          attributeName="opacity"
          values="1;.25;1"
          dur="2.7s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

/* -------------------- VISION SECTION -------------------- */

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    const updateMotion = () => {
      setReducedMotion(motionPreference.matches);
    };

    updateMotion();

    motionPreference.addEventListener('change', updateMotion);

    const section = sectionRef.current;

    if (!section) {
      return () => {
        motionPreference.removeEventListener('change', updateMotion);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener('change', updateMotion);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className={`vision-section relative overflow-hidden section-gradient py-24 lg:py-32 ${
        isVisible ? 'vision-visible' : ''
      } ${reducedMotion ? 'vision-reduced-motion' : ''}`}
    >
      <style>{`
        .vision-section {
          isolation: isolate;
        }

        .vision-heading,
        .vision-world-panel,
        .vision-card,
        .vision-support {
          opacity: 0;
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.75,.25,1);
        }

        .vision-heading {
          transform: translateY(30px);
        }

        .vision-world-panel {
          transform: translateY(24px) scale(.985);
          transition-delay: .12s;
          box-shadow: 0 24px 70px rgba(0,0,0,.24);
        }

        .vision-card {
          transform: translateY(28px);
          transition-delay: var(--delay, 0ms);
          transform-style: preserve-3d;
        }

        .vision-support {
          transform: translateY(20px);
          transition-delay: .5s;
        }

        .vision-visible .vision-heading,
        .vision-visible .vision-world-panel,
        .vision-visible .vision-card,
        .vision-visible .vision-support {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .vision-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            circle at 50% 0%,
            var(--glow-color),
            transparent 68%
          );
          transition: opacity .35s ease;
        }

        .vision-card:hover {
          transform: translateY(-7px) !important;
          border-color: var(--glow-color) !important;
        }

        .vision-card:hover::before {
          opacity: 1;
        }

        .vision-card-icon {
          transition: transform .4s ease, box-shadow .4s ease;
        }

        .vision-card:hover .vision-card-icon {
          transform: translateY(-3px) rotate(-5deg);
          box-shadow: 0 0 22px var(--glow-color);
        }

        .vision-card-number {
          transition: transform .45s ease, opacity .45s ease;
        }

        .vision-card:hover .vision-card-number {
          transform: translate(-5px, 4px);
          opacity: .16;
        }

        .vision-card-arrow {
          transition: transform .3s ease;
        }

        .vision-card:hover .vision-card-arrow {
          transform: translate(4px, -4px);
        }

        .vision-card-accent {
          width: 24%;
          transition: width .45s cubic-bezier(.2,.75,.25,1);
        }

        .vision-card:hover .vision-card-accent {
          width: 100%;
        }

        .vision-pulse-dot {
          animation: visionPulse 2s ease-in-out infinite;
        }

        .vision-world-kicker {
          animation: visionBreathe 4s ease-in-out infinite;
        }

        .vision-globe-svg {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .vision-globe-spin {
          transform-origin: 260px 180px;
          animation: visionGlobeSpin 48s linear infinite;
        }

        .vision-ship {
          filter: drop-shadow(0 0 5px rgba(251,191,101,.7));
        }

        @keyframes visionGlobeSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes visionPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(94,234,212,.35);
          }
          50% {
            box-shadow: 0 0 0 7px rgba(94,234,212,0);
          }
        }

        @keyframes visionBreathe {
          0%, 100% { opacity: .75; }
          50% { opacity: 1; }
        }

        .vision-reduced-motion .vision-globe-spin,
        .vision-reduced-motion .vision-pulse-dot,
        .vision-reduced-motion .vision-world-kicker {
          animation: none !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .vision-section *,
          .vision-section *::before,
          .vision-section *::after {
            animation: none !important;
            transition-duration: .01ms !important;
            transition-delay: 0ms !important;
          }

          .vision-heading,
          .vision-world-panel,
          .vision-card,
          .vision-support {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="vision-heading mb-10 max-w-3xl lg:mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            <Eye className="h-4 w-4" />
            <span>Our Vision</span>
            <span className="vision-pulse-dot ml-1 h-1.5 w-1.5 rounded-full bg-teal-300" />
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink-800 sm:text-4xl lg:text-5xl">
            {visionStatement.heading}
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* Animated globe */}
          <div className="vision-world-panel relative min-h-[440px] overflow-hidden rounded-3xl border border-white/10 bg-[#071927] sm:min-h-[500px]">
            <div className="absolute inset-0">
              <GlobeIllustration />
            </div>

            {/* Top overlay */}
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5 sm:p-7">
              <div>
                <div className="vision-world-kicker text-[10px] font-semibold uppercase tracking-[0.24em] text-teal-200/80">
                  Shared horizon · connected future
                </div>

                <div className="mt-2 flex items-center gap-2 text-xs font-medium text-white/75">
                  <Globe2 className="h-4 w-4 text-cyan-300" />
                  Worldwide, by design
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/35 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-100/90 backdrop-blur-sm">
                <span className="vision-pulse-dot h-1.5 w-1.5 rounded-full bg-teal-300" />
                One connected world
              </div>
            </div>

            {/* Bottom overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061522] via-[#061522]/90 to-transparent px-6 pb-6 pt-24 sm:px-8 sm:pb-8">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200">
                <span className="h-px w-7 bg-cyan-300/80" />
                GLOBAL REACH. LASTING IMPACT.
              </div>

              <h3 className="max-w-md font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                A bigger vision.
                <span className="block text-cyan-300">
                  A world without limits.
                </span>
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                {visionStatement.body}
              </p>
            </div>
          </div>

          {/* Vision cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {visionPillars.map((pillar, index) => {
              const iconName = pillar.icon as VisionIconName;
              const Icon = iconMap[iconName];
              const theme = pillarThemes[index % pillarThemes.length];

              if (!Icon || !theme) return null;

              return (
                <article
                  key={pillar.id}
                  className="vision-card group relative overflow-hidden rounded-3xl border p-6 sm:p-7"
                  style={
                    {
                      backgroundColor: theme.bg,
                      borderColor: theme.border,
                      '--delay': `${180 + index * 120}ms`,
                      '--glow-color': `${theme.color}35`,
                    } as CSSProperties
                  }
                >
                  <span
                    className="vision-card-number pointer-events-none absolute -right-1 -top-5 font-display text-7xl font-extrabold opacity-[0.08]"
                    style={{ color: theme.color }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative flex items-start justify-between gap-3">
                    <div
                      className="vision-card-icon grid h-14 w-14 place-items-center rounded-2xl border"
                      style={
                        {
                          backgroundColor: `${theme.color}15`,
                          borderColor: `${theme.color}35`,
                          '--glow-color': `${theme.color}30`,
                        } as CSSProperties
                      }
                    >
                      <Icon
                        className="h-7 w-7"
                        style={{ color: theme.color }}
                        strokeWidth={2}
                      />
                    </div>

                    <ArrowUpRight
                      className="vision-card-arrow h-5 w-5"
                      style={{ color: theme.color }}
                    />
                  </div>

                  <h3 className="relative mt-7 font-display text-lg font-bold text-white">
                    {pillar.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-300">
                    {pillar.desc}
                  </p>

                  <div
                    className="vision-card-accent absolute bottom-0 left-0 h-1"
                    style={{ backgroundColor: theme.color }}
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Supporting statement */}
        <div className="vision-support group relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/[0.06] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-300/10 bg-cyan-400/10">
              <Target className="h-6 w-6 text-cyan-300" />
            </div>

            <p className="text-sm leading-7 text-ink-500">
              {visionStatement.body2}
            </p>
          </div>

          <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400/60 via-blue-400/40 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
        </div>
      </div>
    </section>
  );
}
