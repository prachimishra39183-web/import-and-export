
import { useEffect, useRef, useState } from 'react';
import {
  Package,
  FileText,
  Ship,
  CheckCircle2,
  ArrowRight,
  Anchor,
  Globe2,
} from 'lucide-react';

const steps = [
  {
    icon: Package,
    number: '01',
    title: 'Place Your Order',
    desc: 'Choose products from our catalog or request a custom quote. We help you finalize quantities, pricing, and ports.',
    color: '#38BDF8',
    glow: 'rgba(56,189,248,.22)',
    label: 'ORDER',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Booking & Documentation',
    desc: 'We coordinate shipping bookings, prepare essential documentation, and guide you through customs requirements.',
    color: '#FBBF65',
    glow: 'rgba(251,191,101,.20)',
    label: 'PREPARATION',
  },
  {
    icon: Ship,
    number: '03',
    title: 'Sailing & Tracking',
    desc: 'Your cargo begins its ocean journey. Follow shipment updates as it moves from the origin port to its destination.',
    color: '#5EEAD4',
    glow: 'rgba(94,234,212,.20)',
    label: 'IN TRANSIT',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Delivery',
    desc: 'We coordinate the final clearance and delivery handoff, helping your shipment reach its destination smoothly.',
    color: '#C4B5FD',
    glow: 'rgba(196,181,253,.22)',
    label: 'COMPLETION',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className={`process-section relative overflow-hidden bg-[#061426] py-24 text-white lg:py-32 ${
        visible ? 'process-visible' : ''
      }`}
    >
      <style>{`
        .process-section {
          isolation: isolate;
        }

        .process-orb {
          animation: processFloat 12s ease-in-out infinite alternate;
        }

        .process-orb-two {
          animation-delay: -5s;
          animation-duration: 15s;
        }

        .process-grid {
          background-image:
            linear-gradient(rgba(56,189,248,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,.045) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }

        .process-heading,
        .process-intro,
        .process-card,
        .process-footer {
          opacity: 0;
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.75,.25,1);
        }

        .process-heading {
          transform: translateY(28px);
        }

        .process-intro {
          transform: translateY(22px);
          transition-delay: .12s;
        }
         
.process-card-inner {
  position: relative;
  height: 100%;
  overflow: hidden;
  border: 1px solid #E4D5B8;
  border-radius: 24px;
  background: linear-gradient(145deg, #FFFCF5 0%, #F4EBDD 100%);
  box-shadow:
    0 5px 12px rgba(42, 32, 18, 0.06),
    0 18px 35px rgba(42, 32, 18, 0.08),
    inset 0 1px 0 rgba(255,255,255,0.95);
  transition:
    box-shadow .45s ease,
    border-color .45s ease,
    background .45s ease;
}

.process-card:hover .process-card-inner {
  border-color: var(--step-color);
  box-shadow:
    0 12px 22px rgba(42, 32, 18, 0.08),
    0 25px 45px rgba(42, 32, 18, 0.13);
}


        .process-footer {
          transform: translateY(20px);
          transition-delay: .7s;
        }

        .process-visible .process-heading,
        .process-visible .process-intro,
        .process-visible .process-card,
        .process-visible .process-footer {
          opacity: 1;
          transform: perspective(1000px) translateY(0) rotateX(0) scale(1);
        }

        .process-card {
          transform-style: preserve-3d;
          isolation: isolate;
        }

        .process-card::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background:
            radial-gradient(
              circle at 50% 0%,
              var(--card-glow),
              transparent 65%
            );
          opacity: .55;
          transition: opacity .45s ease;
        }

        .process-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(
            120deg,
            transparent 20%,
            rgba(255,255,255,.07) 48%,
            transparent 72%
          );
          transform: translateX(-130%);
          transition: transform .8s ease;
        }

        .process-card:hover {
          transform: perspective(1000px) translateY(-10px) rotateX(2deg) rotateY(-2deg) scale(1.015) !important;
          border-color: var(--card-color) !important;
          box-shadow:
            0 24px 60px rgba(0,0,0,.28),
            0 0 28px var(--card-glow);
        }

        .process-card:hover::before {
          opacity: 1;
        }

        .process-card:hover::after {
          transform: translateX(130%);
        }

        
.process-icon {
  position: relative;
  display: grid;
  width: 62px;
  height: 62px;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--step-color) 30%, #E8DCC8);
  border-radius: 20px;
  background: linear-gradient(145deg, #FFFFFF, #F1E6D4);
  box-shadow:
    0 7px 16px rgba(70, 50, 25, 0.09),
    inset 0 1px 0 #FFFFFF;
  transform: translateZ(24px);
  transition: transform .45s ease, box-shadow .45s ease;
}
}

        .process-card:hover .process-icon {
          transform: translateZ(35px) rotate(-7deg) scale(1.08);
          box-shadow: 0 10px 30px var(--card-glow);
        }

        .process-number {
          transform: translateZ(12px);
          transition: transform .45s ease, opacity .45s ease;
        }

        .process-card:hover .process-number {
          transform: translateZ(24px) translateY(-4px);
          opacity: .9;
        }

        .process-arrow {
          transition: transform .35s ease, background .35s ease;
        }

        .process-card:hover .process-arrow {
          transform: translateX(5px);
          background: var(--card-color);
          color: #061426;
        }

        .process-progress {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .8s cubic-bezier(.2,.75,.25,1);
          transition-delay: var(--delay, 0ms);
        }

        .process-visible .process-progress {
          transform: scaleX(1);
        }

        .process-route-dot {
          animation: routePulse 2.4s ease-in-out infinite;
        }

        .process-ship {
          animation: shipFloat 4s ease-in-out infinite;
        }

        .process-footer-icon {
          transition: transform .4s ease;
        }

        .process-footer:hover .process-footer-icon {
          transform: rotate(-12deg) scale(1.1);
        }

        @keyframes processFloat {
          from { transform: translate3d(-10px, -12px, 0) scale(1); }
          to { transform: translate3d(20px, 18px, 0) scale(1.12); }
        }

        @keyframes routePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(94,234,212,.4); }
          50% { box-shadow: 0 0 0 7px rgba(94,234,212,0); }
        }

        @keyframes shipFloat {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-6px) rotate(3deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .process-section *,
          .process-section *::before,
          .process-section *::after {
            animation: none !important;
            transition-duration: .01ms !important;
            transition-delay: 0ms !important;
          }

          .process-heading,
          .process-intro,
          .process-card,
          .process-footer {
            opacity: 1 !important;
            transform: none !important;
          }

          .process-progress {
            transform: scaleX(1) !important;
          }
        }
      `}</style>

      {/* Ambient lighting */}
      <div className="process-orb pointer-events-none absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.09] blur-3xl" />
      <div className="process-orb process-orb-two pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.10] blur-3xl" />
      <div className="process-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="process-heading mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            <Anchor className="h-4 w-4" />
            How It Works
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            From order to ocean,
            <span className="block bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-400 bg-clip-text text-transparent">
              in four simple steps.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A transparent journey from your first order to final delivery.
            We coordinate the details, so you can focus on your business.
          </p>
        </div>

        {/* Route indicator */}
        <div className="process-intro mx-auto mt-12 flex max-w-3xl items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          <Globe2 className="h-4 w-4 text-cyan-300" />
          <span>Origin</span>
          <div className="relative h-px w-16 overflow-hidden bg-white/15 sm:w-28">
            <div className="process-progress absolute inset-y-0 left-0 w-full bg-gradient-to-r from-cyan-400 to-teal-300" />
          </div>
          <Ship className="process-ship h-5 w-5 text-teal-300" />
          <div className="relative h-px w-16 overflow-hidden bg-white/15 sm:w-28">
            <div
              className="process-progress absolute inset-y-0 left-0 w-full bg-gradient-to-r from-teal-300 to-violet-300"
              style={{ '--delay': '250ms' } as React.CSSProperties}
            />
          </div>
          <span>Destination</span>
        </div>

        {/* Process cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="process-card group relative flex min-h-[310px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A1D33]/90 p-6 shadow-xl backdrop-blur-md sm:p-7"
                style={
                  {
                    '--delay': `${180 + i * 150}ms`,
                    '--card-color': step.color,
                    '--card-glow': step.glow,
                  } as React.CSSProperties
                }
              >
                {/* Card top row */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="rounded-full border px-3 py-1.5 text-[10px] font-bold tracking-[0.17em]"
                    style={{
                      color: step.color,
                      borderColor: `${step.color}40`,
                      backgroundColor: `${step.color}10`,
                    }}
                  >
                    {step.label}
                  </span>

                  <span
                    className="process-number font-display text-3xl font-extrabold tracking-tight"
                    style={{ color: `${step.color}65` }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="process-icon relative z-10 mt-8 grid h-16 w-16 place-items-center rounded-2xl border"
                  style={{
                    color: step.color,
                    background: `linear-gradient(145deg, ${step.color}28, ${step.color}08)`,
                    borderColor: `${step.color}45`,
                  }}
                >
                  <Icon className="h-8 w-8" strokeWidth={1.8} />
                </div>

                {/* Text */}
                <h3 className="relative z-10 mt-6 font-display text-lg font-bold leading-snug text-white">
                  {step.title.replace(/^\d+\.\s*/, '')}
                </h3>

                <p className="relative z-10 mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {step.desc}
                </p>

                {/* Bottom line and arrow */}
                <div className="relative z-10 mt-6 flex items-center justify-between">
                  <div className="h-1 w-14 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="process-progress h-full rounded-full"
                      style={{
                        backgroundColor: step.color,
                        '--delay': `${350 + i * 150}ms`,
                      } as React.CSSProperties}
                    />
                  </div>

                  <div
                    className="process-arrow grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04]"
                    style={{ borderColor: `${step.color}35` }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Decorative corner glow */}
                <div
                  className="pointer-events-none absolute -bottom-16 -right-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: step.glow, opacity: 0.45 }}
                />
              </article>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="process-footer group relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0B2037] via-[#0D263E] to-[#10243B] p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-3xl" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="process-footer-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-teal-300/20 bg-teal-300/10">
                <CheckCircle2 className="h-6 w-6 text-teal-300" />
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-white sm:text-lg">
                  Clear steps. Connected shipments.
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  Get in touch with our team to discuss your cargo requirements
                  and find the right shipping solution.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/15 hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)] sm:self-center"
            >
              Discuss Your Shipment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
