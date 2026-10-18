import { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
  Globe2,
  Anchor,
  ArrowRight,
} from 'lucide-react';
import { contactInfo } from '@/data';

const contactCards = [
  {
    icon: Mail,
    label: 'Email Us',
    value: contactInfo.email,
    hint: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call Our Team',
    value: contactInfo.phone,
    hint: 'Mon–Fri, 8:00–18:00 CET',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: contactInfo.address,
    hint: 'Visits by appointment',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: contactInfo.hours,
    hint: 'Closed on public holidays',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [stage, setStage] = useState<'form' | 'loading' | 'done'>('form');
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  const valid =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) return;

    setStage('loading');

    // Demo only: connect your backend or email service for real delivery.
    window.setTimeout(() => setStage('done'), 1200);
  };

  const reset = () => {
    setStage('form');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`contact-redesign relative overflow-hidden py-24 text-white lg:py-32 ${
        isVisible ? 'contact-visible' : ''
      }`}
    >
      <style>{`
        .contact-redesign {
          isolation: isolate;
          color-scheme: dark;
        }

        /* The section background is intentionally transparent.
           Your website's existing background stays visible. */

        .contact-redesign .contact-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2,.75,.25,1);
          transition-delay: var(--reveal-delay, 0ms);
        }

        .contact-redesign.contact-visible .contact-reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-redesign .contact-title-line {
          transform: scaleX(0);
          transform-origin: center;
          transition: transform .8s ease .3s;
        }

        .contact-redesign.contact-visible .contact-title-line {
          transform: scaleX(1);
        }

        .contact-redesign .contact-card {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,.105),
            rgba(255,255,255,.035)
          );
          border: 1px solid rgba(255,255,255,.15);
          box-shadow:
            0 10px 28px rgba(0,0,0,.09),
            inset 0 1px 0 rgba(255,255,255,.06);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition:
            transform .35s ease,
            border-color .35s ease,
            background .35s ease,
            box-shadow .35s ease;
        }

        .contact-redesign .contact-card::before {
          content: '';
          position: absolute;
          z-index: -1;
          inset: 0;
          opacity: 0;
          background: radial-gradient(
            circle at top left,
            rgba(190,165,104,.17),
            transparent 65%
          );
          transition: opacity .35s ease;
        }

        .contact-redesign .contact-card:hover {
          transform: translateY(-5px);
          border-color: rgba(190,165,104,.55);
          background: linear-gradient(
            135deg,
            rgba(255,255,255,.13),
            rgba(255,255,255,.055)
          );
          box-shadow:
            0 18px 38px rgba(0,0,0,.16),
            0 0 0 1px rgba(190,165,104,.07);
        }

        .contact-redesign .contact-card:hover::before {
          opacity: 1;
        }

        .contact-redesign .contact-card-icon {
          background: rgba(190,165,104,.13);
          border: 1px solid rgba(190,165,104,.3);
          transition:
            transform .35s ease,
            background .35s ease,
            border-color .35s ease;
        }

        .contact-redesign .contact-card:hover .contact-card-icon {
          transform: translateY(-2px) rotate(-4deg);
          background: rgba(190,165,104,.22);
          border-color: rgba(190,165,104,.55);
        }

        .contact-redesign .contact-form-panel {
          position: relative;
          background: linear-gradient(
            145deg,
            rgba(20,31,38,.88),
            rgba(11,20,27,.92)
          );
          border: 1px solid rgba(255,255,255,.14);
          box-shadow:
            0 25px 65px rgba(0,0,0,.22),
            inset 0 1px 0 rgba(255,255,255,.08);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          transition:
            opacity .8s ease .2s,
            transform .8s cubic-bezier(.2,.75,.25,1) .2s,
            border-color .3s ease;
        }

        .contact-redesign .contact-panel {
          transform: translateY(22px);
        }

        .contact-redesign.contact-visible .contact-panel {
          transform: translateY(0);
        }

        .contact-redesign .contact-input {
          width: 100%;
          color: #fff;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 12px;
          transition:
            border-color .25s ease,
            background .25s ease,
            box-shadow .25s ease;
        }

        .contact-redesign .contact-input::placeholder {
          color: rgba(226,232,240,.43);
        }

        .contact-redesign .contact-input:hover {
          border-color: rgba(255,255,255,.25);
        }

        .contact-redesign .contact-input:focus {
          outline: none;
          border-color: #BFA66B;
          background: rgba(255,255,255,.075);
          box-shadow: 0 0 0 4px rgba(191,166,107,.12);
        }

        .contact-redesign .contact-send {
          position: relative;
          overflow: hidden;
          color: #101A1B;
          background: linear-gradient(110deg, #D8C18A, #B99A5B);
          box-shadow: 0 8px 24px rgba(0,0,0,.18);
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            filter .3s ease;
        }

        .contact-redesign .contact-send::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: -110%;
          width: 70%;
          background: linear-gradient(
            100deg,
            transparent,
            rgba(255,255,255,.35),
            transparent
          );
          transition: left .6s ease;
        }

        .contact-redesign .contact-send:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 13px 30px rgba(0,0,0,.25);
          filter: brightness(1.06);
        }

        .contact-redesign .contact-send:hover:not(:disabled)::before {
          left: 140%;
        }

        .contact-redesign .contact-send:disabled {
          opacity: .42;
          cursor: not-allowed;
        }

        .contact-redesign .contact-illustration {
          animation: contactFloat 5s ease-in-out infinite;
        }

        .contact-redesign .contact-badge-dot {
          animation: contactPulse 2s ease-in-out infinite;
        }

        @keyframes contactFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes contactPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(190,165,104,.35); }
          50% { box-shadow: 0 0 0 6px rgba(190,165,104,0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-redesign *,
          .contact-redesign *::before,
          .contact-redesign *::after {
            animation: none !important;
            transition-duration: .01ms !important;
            transition-delay: 0ms !important;
          }

          .contact-redesign .contact-reveal,
          .contact-redesign .contact-panel {
            opacity: 1 !important;
            transform: none !important;
          }

          .contact-redesign .contact-title-line {
            transform: scaleX(1) !important;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div
          className="contact-reveal mx-auto max-w-3xl text-center"
          style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 shadow-lg backdrop-blur-md">
            <Anchor className="h-4 w-4 text-[#D8C18A]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              Let's Connect
            </span>
            <span className="contact-badge-dot h-1.5 w-1.5 rounded-full bg-[#D8C18A]" />
          </div>

          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Let's get your cargo
            <span className="mt-1 block text-[#D8C18A]">
              sailing worldwide.
            </span>
          </h2>

          <div className="contact-title-line mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#D8C18A] to-[#8B9D93]" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            Have a shipment in mind? Need help choosing a route? Tell us what
            you need, and our team will help you navigate your next move.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Contact details */}
          <div>
            <div
              className="contact-reveal mb-6"
              style={{ '--reveal-delay': '100ms' } as React.CSSProperties}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C18A]">
                Get in touch
              </p>

              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                We're here to help
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Real conversations. Clear answers. A smoother shipping journey.
              </p>
            </div>

            <div className="space-y-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.label}
                    className="contact-card contact-reveal group flex items-start gap-4 rounded-2xl p-5"
                    style={
                      {
                        '--reveal-delay': `${180 + index * 100}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="contact-card-icon grid h-12 w-12 shrink-0 place-items-center rounded-xl">
                      <Icon className="h-5 w-5 text-[#D8C18A]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                        {card.label}
                      </p>

                      <p className="mt-1 break-words font-display text-base font-bold leading-6 text-white">
                        {card.value}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/55">
                        {card.hint}
                      </p>
                    </div>

                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/45 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D8C18A]" />
                  </div>
                );
              })}
            </div>

            {/* Shipping note */}
            <div
              className="contact-reveal mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-md"
              style={{ '--reveal-delay': '600ms' } as React.CSSProperties}
            >
              <div className="contact-illustration grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#D8C18A]/25 bg-[#D8C18A]/10 text-[#D8C18A]">
                <Globe2 className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Connections without borders
                </p>
                <p className="mt-1 text-xs leading-5 text-white/55">
                  Let's find the right way forward for your shipment.
                </p>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div
            className={`contact-panel contact-form-panel relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#8B9D93] via-[#D8C18A] to-[#8B9D93]" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D8C18A]/[0.07] blur-3xl" />

            {stage === 'form' && (
              <div className="relative">
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D8C18A]">
                    Send an enquiry
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    Tell us about your shipment
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Share a few details, and let's start planning your next move.
                  </p>
                </div>

                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-white/85"
                    >
                      Full name
                    </label>

                    <input
                      id="contact-name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="contact-input px-4 py-3.5"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-white/85"
                    >
                      Work email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="contact-input px-4 py-3.5"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-semibold text-white/85"
                    >
                      Shipment details
                    </label>

                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="contact-input resize-y px-4 py-3.5"
                      placeholder="Product, quantity, origin, destination, or any questions..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!valid}
                    className="contact-send group flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-bold disabled:shadow-none"
                  >
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    Send Enquiry
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-xs leading-5 text-white/45">
                    By submitting this form, you agree to be contacted about
                    your enquiry.
                  </p>
                </form>
              </div>
            )}

            {stage === 'loading' && (
              <div
                className="relative flex min-h-[480px] flex-col items-center justify-center gap-5 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl border border-[#D8C18A]/30 bg-[#D8C18A]/10">
                  <Loader2 className="h-9 w-9 animate-spin text-[#D8C18A]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Preparing your enquiry
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Please wait a moment...
                  </p>
                </div>
              </div>
            )}

            {stage === 'done' && (
              <div
                className="relative flex min-h-[480px] flex-col items-center justify-center gap-5 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="grid h-20 w-20 place-items-center rounded-full border border-[#D8C18A]/35 bg-[#D8C18A]/10">
                  <CheckCircle2 className="h-11 w-11 text-[#D8C18A]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Thanks, {name.trim().split(/\s+/)[0]}!
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-white/65">
                    Your demo enquiry flow has completed. Your entered email is{' '}
                    <span className="break-all font-semibold text-[#D8C18A]">
                      {email}
                    </span>
                    .
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/45">
                    Connect a backend or email service to deliver this enquiry
                    to your team.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={reset}
                  className="mt-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D8C18A]/50 hover:bg-white/10"
                >
                  Send another enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}