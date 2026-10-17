import { Package, FileText, Ship, MapPin, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: '1. Place Your Order',
    desc: 'Pick a good from our catalog or request a custom quote. Set quantity and ports.',
    color: 'from-sea-400 to-sea-600',
  },
  {
    icon: FileText,
    title: '2. Booking & Documentation',
    desc: 'Booking confirmed, bill of lading issued, customs handled within 24 hours.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: Ship,
    title: '3. Sailing & Tracking',
    desc: 'Cargo loads and sails. Track progress live from origin to destination.',
    color: 'from-sea-300 to-sea-500',
  },
  {
    icon: CheckCircle2,
    title: '4. Delivery',
    desc: 'We clear customs and arrange handoff. Cargo delivered, sealed and on time.',
    color: 'from-coral-400 to-coral-500',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-cloud-50 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-light opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-700 text-ink-800 sm:text-4xl lg:text-5xl">
            From order to ocean in four steps
          </h2>
          <p className="mt-5 text-base text-ink-500">
            A simple flow built around your order — no subscriptions, no hidden fees.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="card-3d group relative rounded-3xl bg-white p-7 shadow-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.color} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-lg font-700 text-ink-800">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-gradient-to-r from-sea-400/60 to-transparent lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
