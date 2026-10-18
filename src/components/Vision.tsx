
import { useEffect, useRef, useState } from 'react';
import { Eye, Target, Leaf, Globe2, ArrowUpRight } from 'lucide-react';
import { visionPillars, visionStatement } from '@/data';

const iconMap = { Eye, Target, Leaf, Globe: Globe2 };

const pillarThemes = [
  { color: '#38BDF8', bg: '#102F49', border: '#235675' },
  { color: '#5EEAD4', bg: '#103B3A', border: '#22635D' },
  { color: '#FBBF65', bg: '#3A3023', border: '#69502F' },
  { color: '#C4B5FD', bg: '#292744', border: '#49446F' },
];

const portImg =
  'https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="vision"
      className={`vision-section relative overflow-hidden section-gradient py-24 lg:py-32 ${
        isVisible ? 'vision-visible' : ''
      }`}
    >
      <style>{`
        .vision-section {
          isolation: isolate;
        }

        .vision-orb {
          animation: visionOrb 12s ease-in-out infinite alternate;
          will-change: transform;
        }

        .vision-orb-two {
          animation-delay: -5s;
          animation-duration: 15s;
        }

        .vision-grid {
          background-size: 46px 46px;
          background-image:
            linear-gradient(rgba(56,189,248,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,.035) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }

        .vision-heading,
        .vision-image-panel,
        .vision-card,
        .vision-support {
          opacity: 0;
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.75,.25,1);
        }

        .vision-heading {
          transform: translateY(32px);
        }

        .vision-image-panel {
          transform: translateX(-38px) scale(.98);
          transition-delay: .15s;
        }

        .vision-card {
          transform: translateY(34px) scale(.97);
          transition-delay: var(--delay, 0ms);
        }

        .vision-support {
          transform: translateY(24px);
          transition-delay: .5s;
        }

        .vision-visible .vision-heading,
        .vision-visible .vision-image-panel,
        .vision-visible .vision-card,
        .vision-visible .vision-support {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }

        .vision-title-line {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1s cubic-bezier(.2,.75,.25,1) .45s;
        }

        .vision-visible .vision-title-line {
          transform: scaleX(1);
        }

        .vision-image {
          transform: scale(1.08);
          transition: transform 1.5s cubic-bezier(.2,.75,.25,1);
        }

        .vision-visible .vision-image {
          transform: scale(1);
        }

        .vision-image-panel:hover .vision-image {
          transform: scale(1.07);
        }

        .vision-image-panel::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            115deg,
            transparent 25%,
            rgba(255,255,255,.10) 48%,
            transparent 68%
          );
          transform: translateX(-120%);
          transition: transform 1s ease;
        }

        .vision-image-panel:hover::after {
          transform: translateX(120%);
        }

        .vision-card {
          transform-style: preserve-3d;
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
            var(--glow-color, rgba(56,189,248,.15)),
            transparent 68%
          );
          transition: opacity .4s ease;
        }

        .vision-card:hover {
          transform: translateY(-8px) !important;
          border-color: var(--glow-color, #38BDF8) !important;
          box-shadow: 0 18px 45px rgba(0,0,0,.2);
        }

        .vision-card:hover::before {
          opacity: 1;
        }

        .vision-card-icon {
          transition:
            transform .45s cubic-bezier(.2,.8,.2,1),
            box-shadow .45s ease;
        }

        .vision-card:hover .vision-card-icon {
          transform: translateY(-3px) rotate(-6deg) scale(1.07);
          box-shadow: 0 0 24px var(--glow-color, rgba(56,189,248,.18));
        }

        .vision-card-number {
          transition: transform .5s ease, opacity .5s ease;
        }

        .vision-card:hover .vision-card-number {
          transform: translate(-5px, 4px);
          opacity: .16;
        }

        .vision-card-arrow {
          transition: transform .35s ease;
        }

        .vision-card:hover .vision-card-arrow {
          transform: translate(4px, -4px);
        }

        .vision-card-accent {
          width: 25%;
          transition: width .5s cubic-bezier(.2,.75,.25,1);
        }

        .vision-card:hover .vision-card-accent {
          width: 100%;
        }

        .vision-ship-badge {
          animation: visionFloat 4s ease-in-out infinite;
        }

        .vision-pulse-dot {
          animation: visionPulse 2s ease-in-out infinite;
        }

        .vision-support-icon {
          transition: transform .4s ease;
        }

        .vision-support:hover .vision-support-icon {
          transform: rotate(8deg) scale(1.08);
        }

        @keyframes visionOrb {
          from { transform: translate3d(-10px, -12px, 0) scale(1); }
          to { transform: translate3d(24px, 20px, 0) scale(1.12); }
        }

        @keyframes visionFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes visionPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(94,234,212,.35); }
          50% { box-shadow: 0 0 0 7px rgba(94,234,212,0); }
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
          .vision-image-panel,
          .vision-card,
          .vision-support {
            opacity: 1 !important;
            transform: none !important;
          }

          .vision-title-line {
            transform: scaleX(1) !important;
          }

          .vision-image {
            transform: none !important;
          }
        }
      `}</style>

      {/* Animated ambient lighting */}
      <div className="vision-orb pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-3xl" />
      <div className="vision-orb vision-orb-two pointer-events-none absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-3xl" />
      <div className="vision-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Animated heading */}
        <div className="vision-heading mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            <Eye className="h-4 w-4" />
            <span>Our Vision</span>
            <span className="vision-pulse-dot ml-1 h-1.5 w-1.5 rounded-full bg-teal-300" />
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink-800 sm:text-4xl lg:text-5xl">
            {visionStatement.heading}
          </h2>

          <div className="vision-title-line mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Cinematic port image */}
          <div className="vision-image-panel group relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#0A1D33] shadow-2xl sm:min-h-[480px]">
            <img
              src={portImg}
              alt="Container port representing global shipping and trade"
              loading="lazy"
              className="vision-image absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-[#061426]/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/20 to-transparent" />

            {/* Floating image badge */}
            <div className="vision-ship-badge absolute right-5 top-5 rounded-2xl border border-white/20 bg-[#061426]/70 p-3 shadow-lg backdrop-blur-md">
              <ShipIcon />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#061426]/65 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                <Globe2 className="h-4 w-4 text-cyan-300" />
                Connecting Businesses Worldwide
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

              <div className="mt-6 flex items-center gap-2 text-xs font-medium tracking-wide text-cyan-200/90">
                <span className="h-px w-8 bg-cyan-300/70" />
                GLOBAL REACH. LASTING IMPACT.
              </div>
            </div>
          </div>

          {/* Animated vision cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {visionPillars.map((p, i) => {
              const Icon = iconMap[p.icon as keyof typeof iconMap];
              const theme = pillarThemes[i % pillarThemes.length];

              return (
                <article
                  key={p.id}
                  className="vision-card group relative overflow-hidden rounded-3xl border p-6 sm:p-7"
                  style={{
                    backgroundColor: theme.bg,
                    borderColor: theme.border,
                    '--delay': `${250 + i * 140}ms`,
                    '--glow-color': `${theme.color}35`,
                  } as React.CSSProperties}
                >
                  {/* Large decorative number */}
                  <span
                    className="vision-card-number pointer-events-none absolute -right-1 -top-5 font-display text-7xl font-extrabold opacity-[0.08]"
                    style={{ color: theme.color }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative flex items-start justify-between gap-3">
                    <div
                      className="vision-card-icon grid h-14 w-14 place-items-center rounded-2xl border"
                      style={{
                        backgroundColor: `${theme.color}15`,
                        borderColor: `${theme.color}35`,
                        '--glow-color': `${theme.color}30`,
                      } as React.CSSProperties}
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
                    {p.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-300">
                    {p.desc}
                  </p>

                  {/* Animated colored accent */}
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
            <div className="vision-support-icon grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-300/10 bg-cyan-400/10">
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

function ShipIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5EEAD4"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M3 17l2 3h14l2-3" />
      <path d="M5 17l2-8h10l2 8" />
      <path d="M10 9V4h4v5" />
      <path d="M2 14h20" />
    </svg>
  );
}
