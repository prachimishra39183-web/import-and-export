
import { useEffect, useState } from 'react';
import {
  Ship,
  Anchor,
  Globe2,
  ArrowRight,
  ArrowLeft,
  Waves,
  Compass,
  CircleDot,
} from 'lucide-react';
import { journey } from '@/data';

const themes = [
  {
    color: '#0284C7',
    soft: '#E0F2FE',
    glow: 'rgba(56,189,248,.24)',
  },
  {
    color: '#0891B2',
    soft: '#CFFAFE',
    glow: 'rgba(34,211,238,.24)',
  },
  {
    color: '#2563EB',
    soft: '#DBEAFE',
    glow: 'rgba(96,165,250,.24)',
  },
  {
    color: '#0D9488',
    soft: '#CCFBF1',
    glow: 'rgba(45,212,191,.24)',
  },
];

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [direction, setDirection] = useState(1);

  const total = journey.length;
  const active = journey[activeIndex];
  const theme = themes[activeIndex % themes.length];

  useEffect(() => {
    const media = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    const updateMotion = () => setReducedMotion(media.matches);

    updateMotion();
    media.addEventListener('change', updateMotion);

    return () => media.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion || total < 2) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % total);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion, total]);

  if (!active || !theme || total === 0) return null;

  const goTo = (index: number) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex((index + total) % total);
  };

  const previous = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  return (
    <section
  id="journey"
  className="journey-section relative overflow-hidden bg-[#061A35] py-24 text-white"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
  onFocusCapture={() => setIsPaused(true)}
  onBlurCapture={(event) => {
    if (
      !event.currentTarget.contains(
        event.relatedTarget as Node | null
      )
    ) {
      setIsPaused(false);
    }
  }}
>
      <style>{`
        .journey-section {
          isolation: isolate;
        }

        .journey-section *,
        .journey-section *::before,
        .journey-section *::after {
          box-sizing: border-box;
        }

        .journey-orb {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
          filter: blur(2px);
          animation: journeyFloat 9s ease-in-out infinite;
        }

        .journey-orb-one {
          width: 290px;
          height: 290px;
          top: 5%;
          right: -100px;
          background: radial-gradient(
            circle,
            rgba(56,189,248,.20),
            transparent 70%
          );
        }

        .journey-orb-two {
          width: 240px;
          height: 240px;
          bottom: 2%;
          left: -90px;
          background: radial-gradient(
            circle,
            rgba(14,165,233,.13),
            transparent 70%
          );
          animation-delay: -4s;
        }

        .journey-wave {
          position: absolute;
          inset: auto -5% 0;
          height: 190px;
          opacity: .42;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 20% 100%,
              rgba(125,211,252,.42),
              transparent 58%
            ),
            radial-gradient(
              ellipse at 80% 100%,
              rgba(186,230,253,.7),
              transparent 58%
            );
        }

        .journey-reveal {
          animation: journeyReveal .75s cubic-bezier(.2,.75,.25,1) both;
        }

        .journey-progress {
          transform-origin: left center;
          animation: journeyProgress 5s linear both;
        }

        .journey-route-dot {
          box-shadow: 0 0 0 5px rgba(255,255,255,.9),
                      0 0 0 7px rgba(56,189,248,.2);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .journey-year-button:hover .journey-route-dot {
          transform: scale(1.18);
        }

        .journey-year-button[aria-current="step"] .journey-route-dot {
          box-shadow: 0 0 0 6px rgba(255,255,255,.95),
                      0 0 0 9px rgba(14,165,233,.22),
                      0 0 24px rgba(14,165,233,.3);
        }

        .journey-ship {
          animation: journeyShip 4s ease-in-out infinite;
        }

        .journey-marquee {
          animation: journeyMarquee 24s linear infinite;
        }

        .journey-section button:focus-visible {
          outline: 3px solid #0284C7;
          outline-offset: 4px;
        }

        @keyframes journeyReveal {
          from {
            opacity: 0;
            transform: translateX(var(--enter-x, 24px)) translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes journeyFloat {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(0,-20px,0); }
        }

        @keyframes journeyShip {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-7px) rotate(2deg); }
        }

        @keyframes journeyProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes journeyMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-section *,
          .journey-section *::before,
          .journey-section *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="journey-orb journey-orb-one" />
      <div className="journey-orb journey-orb-two" />
      <div className="journey-wave" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 grid gap-7 md:grid-cols-[1fr_360px] md:items-end lg:mb-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 shadow-sm">
              <Waves className="h-4 w-4 text-sky-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
                Our Journey
              </span>
              <span className="ml-1 h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
            </div>

           <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
  Built on trust.
  <span className="mt-2 block text-sky-400">
    Driven by the horizon.
  </span>
</h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-sky-100/70 sm:text-lg">
  Every milestone marks another connection made, another
  destination reached, and another step towards a more
  connected world.
</p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-sky-100 bg-white/70 p-5 shadow-[0_12px_40px_rgba(14,116,184,.06)] backdrop-blur-sm">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-100">
              <Compass className="h-6 w-6 text-sky-700" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                Our timeline
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {total} milestones. One continuous journey.
              </p>
            </div>
          </div>
        </div>

        {/* Featured slideshow */}
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white bg-white/75 shadow-[0_28px_90px_rgba(14,116,184,.12)] backdrop-blur-xl sm:rounded-[2.5rem]"
          aria-roledescription="carousel"
          aria-label="Company journey milestones"
        >
          {/* Decorative light-blue panel */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-[340px] w-[340px] rounded-full opacity-70 blur-3xl"
            style={{ background: theme.glow }}
          />

          <div className="relative grid lg:min-h-[430px] lg:grid-cols-[1.1fr_.9fr]">
            {/* Main milestone */}
            <div className="relative overflow-hidden rounded-3xl border border-sky-200/20 bg-gradient-to-br from-[#EAF7FF] via-[#D8F0FF] to-[#B8E4FF] p-8 text-[#082747] shadow-2xl shadow-sky-950/30">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
                  style={{
                    backgroundColor: theme.soft,
                    color: theme.color,
                  }}
                >
                  <CircleDot className="h-4 w-4" />
                  Milestone {String(activeIndex + 1).padStart(2, '0')}
                </span>

                <span className="text-sm font-semibold text-slate-400">
                  Chapter {activeIndex + 1} of {total}
                </span>
              </div>

              <p
                className="mt-8 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
                style={{ color: theme.color }}
              >
                {active.year}
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                {active.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                {active.desc}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={next}
                  className="group inline-flex items-center gap-3 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl"
                >
                  Next milestone
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <span className="text-xs font-medium text-slate-400">
                  {isPaused ? 'Slideshow paused' : 'Auto-exploring our story'}
                </span>
              </div>
            </div>

            {/* Visual storytelling panel */}
            <div
              className="relative flex min-h-[280px] items-center justify-center overflow-hidden p-8 sm:min-h-[330px] lg:min-h-full"
              style={{
                background:
                  'linear-gradient(145deg, #E0F2FE 0%, #BAE6FD 52%, #ECFEFF 100%)',
              }}
            >
              {/* Grid pattern */}
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(2,132,199,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(2,132,199,.10) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />

              <div className="journey-ship relative z-10">
                <div
                  className="relative grid h-44 w-44 place-items-center rounded-full border border-white/80 shadow-[0_20px_70px_rgba(2,132,199,.17)] sm:h-56 sm:w-56"
                  style={{
                    background:
                      'radial-gradient(circle at 35% 25%, rgba(255,255,255,.98), rgba(224,242,254,.75) 52%, rgba(125,211,252,.5))',
                  }}
                >
                  <div className="absolute inset-4 rounded-full border border-sky-300/50" />
                  <div className="absolute inset-8 rounded-full border border-dashed border-sky-400/50" />

                  <div className="relative grid h-24 w-24 place-items-center rounded-3xl border border-white/80 bg-white/80 shadow-xl backdrop-blur sm:h-28 sm:w-28">
                    {activeIndex === total - 1 ? (
                      <Ship
                        className="h-12 w-12 sm:h-14 sm:w-14"
                        style={{ color: theme.color }}
                        strokeWidth={1.5}
                      />
                    ) : activeIndex % 3 === 0 ? (
                      <Anchor
                        className="h-12 w-12 sm:h-14 sm:w-14"
                        style={{ color: theme.color }}
                        strokeWidth={1.5}
                      />
                    ) : (
                      <Globe2
                        className="h-12 w-12 sm:h-14 sm:w-14"
                        style={{ color: theme.color }}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>

                  <span className="absolute -right-1 top-7 h-3 w-3 rounded-full border-2 border-white bg-cyan-500 shadow-[0_0_18px_rgba(6,182,212,.6)]" />
                  <span className="absolute -bottom-1 left-12 h-2.5 w-2.5 rounded-full border-2 border-white bg-sky-500" />
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute left-4 top-5 rounded-xl border border-white/80 bg-white/80 px-3 py-2 shadow-lg backdrop-blur sm:left-8 sm:top-8">
                <p className="text-[9px] font-bold uppercase tracking-[.16em] text-slate-400">
                  Navigation
                </p>
                <p className="mt-1 text-xs font-extrabold text-sky-800">
                  Forward together
                </p>
              </div>

              <div className="absolute bottom-5 right-4 rounded-xl border border-white/80 bg-white/85 px-3 py-2 shadow-lg backdrop-blur sm:bottom-8 sm:right-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
                  <span className="text-xs font-bold text-slate-700">
                    Progress in motion
                  </span>
                </div>
              </div>

              {/* Decorative route */}
              <svg
                viewBox="0 0 400 300"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
                aria-hidden="true"
              >
                <path
                  d="M 15 230 Q 105 40 190 150 T 390 65"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                />
                <circle cx="15" cy="230" r="4" fill="#0284C7" />
                <circle cx="390" cy="65" r="4" fill="#0891B2" />
              </svg>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative h-1.5 overflow-hidden bg-sky-100">
            <div
              key={`progress-${activeIndex}`}
              className="journey-progress h-full rounded-full"
              style={{
                width: `${((activeIndex + 1) / total) * 100}%`,
                background:
                  'linear-gradient(90deg, #38BDF8, #0284C7, #5EEAD4)',
                animationPlayState:
                  isPaused || reducedMotion ? 'paused' : 'running',
              }}
            />
          </div>
        </div>

        {/* Interactive timeline */}
        ```tsx
{/* Interactive timeline */}
<div className="mt-10 sm:mt-14">
  <div className="mb-6 flex items-center justify-between gap-4">
    <div>
      <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-400">
        Explore the timeline
      </p>
      <p className="mt-1 text-sm text-sky-100/80">
        Select a milestone to explore that chapter.
      </p>
    </div>

    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        onClick={previous}
        aria-label="Previous milestone"
        className="grid h-11 w-11 place-items-center rounded-full border border-sky-300/30 bg-[#0B2547] text-sky-300 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-sky-900"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next milestone"
        className="grid h-11 w-11 place-items-center rounded-full border border-sky-300/30 bg-[#0B2547] text-sky-300 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-sky-900"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>

  <div className="relative">
    {/* Connecting line */}
    <div className="absolute left-0 right-0 top-5 h-px bg-sky-300/30" />

    <div className="relative grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 sm:gap-x-5">
      {journey.map((milestone, index) => {
        const itemTheme = themes[index % themes.length];
        const selected = index === activeIndex;

        return (
          <button
            key={milestone.id}
            type="button"
            onClick={() => goTo(index)}
            aria-current={selected ? 'step' : undefined}
            aria-label={`Show milestone ${milestone.year}: ${milestone.title}`}
            className="journey-year-button group relative min-w-0 text-left"
          >
            <div className="mb-4 flex h-10 items-center">
              <span
                className="journey-route-dot relative z-10 block h-3.5 w-3.5 rounded-full border-2 border-[#061A35]"
                style={{
                  backgroundColor: selected ? '#22D3EE' : '#64748B',
                }}
              />
            </div>

            <span
              className={`block text-lg font-extrabold transition-colors sm:text-xl ${
                selected
                  ? 'text-cyan-300'
                  : 'text-sky-100/80 group-hover:text-cyan-200'
              }`}
            >
              {milestone.year}
            </span>

            <span
              className={`mt-1 block text-sm leading-5 transition-colors ${
                selected
                  ? 'font-bold text-white'
                  : 'font-medium text-slate-300 group-hover:text-white'
              }`}
            >
              {milestone.title}
            </span>

            {selected && (
              <span className="mt-3 block h-1 w-10 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.55)]" />
            )}
          </button>
        );
      })}
    </div>
  </div>
</div>

{/* Bottom banner */}
<div className="relative mt-14 overflow-hidden rounded-3xl border border-sky-300/20 bg-gradient-to-br from-[#0B2547] via-[#0A2D50] to-[#063B5B] p-6 shadow-[0_15px_50px_rgba(0,0,0,.2)] sm:mt-20 sm:p-9">
  <div className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

  <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex items-center gap-4">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-sky-300/20 bg-sky-400/10">
        <Globe2 className="h-7 w-7 text-sky-400" />
      </div>

      <div>
        <h3 className="text-xl font-extrabold text-white">
          The journey continues
        </h3>
        <p className="mt-2 text-sm leading-6 text-sky-100/80">
          New horizons. Stronger connections. A world of possibilities.
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3 text-sm font-bold text-cyan-300">
      <span>Always moving forward</span>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-sky-300/20 bg-sky-400/10">
        <Ship className="journey-ship h-5 w-5 text-sky-400" />
      </span>
    </div>
  </div>
</div>

{/* Animated bottom marquee */}
<div className="relative mt-12 overflow-hidden border-y border-sky-400/20 bg-[#082544]/70 py-6">
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-sky-400/5 to-cyan-400/10" />

  <div className="journey-marquee relative inline-flex items-center gap-10 whitespace-nowrap">
    {Array.from({ length: 4 }, (_, index) => (
      <span
        key={index}
        className="inline-flex items-center gap-10 text-sm font-black uppercase tracking-[0.25em] text-cyan-300 sm:text-base"
        style={{
          textShadow: '0 0 12px rgba(34,211,238,0.45)',
        }}
      >
        GLOBAL CONNECTIONS
        <span className="text-sky-400">✦</span>
        OCEANS OF OPPORTUNITY
        <span className="text-cyan-400">✦</span>
        SHIPPING THE FUTURE
        <span className="text-sky-400">✦</span>
      </span>
    ))}
  </div>
</div>

</div>
</section>
);
}
