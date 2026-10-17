import { ArrowRight, Waves, Globe2, Play } from 'lucide-react';
import { stats } from '@/data';

const heroImg =
  'https://images.pexels.com/photos/9806482/pexels-photo-9806482.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cargo ship at sea"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-cloud-100 via-transparent to-cloud-100/40" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* floating accent orbs */}
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-sea-200/40 blur-3xl animate-pulseGlow" />
      <div className="pointer-events-none absolute right-10 top-60 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl animate-pulseGlow" />

      <div className="relative mx-auto flex max-w-7xl flex-col px-5 pb-24 pt-16 lg:px-8 lg:pt-24">
        <div className="max-w-3xl animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-sea-700 backdrop-blur">
            <Waves className="h-3.5 w-3.5" />
            Ocean Freight Specialists
          </span>

          <h1 className="mt-6 font-display text-4xl font-700 leading-[1.05] text-ink-800 sm:text-5xl lg:text-[64px]">
            Move goods across oceans,
            <span className="block text-gradient-sea">on your order.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            Order-based import &amp; export. You place the order, we sail it across
            the world's busiest sea lanes — tracked port to port.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#catalog"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sea-500 to-sea-700 px-7 py-3.5 text-base font-600 text-white transition-all hover:shadow-glow hover:brightness-110"
            >
              Browse Trade Goods
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3.5 text-base font-600 text-ink-700 backdrop-blur transition-all hover:bg-white"
            >
              <Play className="h-4 w-4 fill-sea-600 text-sea-600" />
              How it works
            </a>
          </div>
        </div>

        {/* stats strip */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-24">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="animate-rise rounded-2xl bg-white/70 px-5 py-4 shadow-card backdrop-blur"
              style={{ animationDelay: `${0.1 * i + 0.3}s` }}
            >
              <p className="font-display text-2xl font-700 text-ink-800 sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-500 text-ink-400">
                <Globe2 className="h-3.5 w-3.5 text-sea-500" />
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* animated wave divider */}
      <div className="absolute inset-x-0 bottom-0 h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 h-full w-[200%] animate-wave text-sea-200/40"
          viewBox="0 0 2880 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 C1680,80 1920,0 2160,40 C2400,80 2640,0 2880,40 L2880,100 L0,100 Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 h-full w-[200%] animate-wave text-cloud-100"
          viewBox="0 0 2880 100"
          preserveAspectRatio="none"
          style={{ animationDelay: '1.2s' }}
        >
          <path
            fill="currentColor"
            d="M0,50 C240,20 480,90 720,50 C960,10 1200,90 1440,50 C1680,10 1920,90 2160,50 C2400,10 2640,90 2880,50 L2880,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}
