import { Star, Quote, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  return (
    <section className="relative bg-cloud-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sea-100/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
            Trusted Globally
          </span>
          <h2 className="mt-4 font-display text-3xl font-700 text-ink-800 sm:text-4xl lg:text-5xl">
            What our partners say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className="card-3d relative rounded-3xl bg-white p-7 shadow-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-sea-200" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < t.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-cloud-200'
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-ink-600">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-cloud-200 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-sea-200"
                />
                <div>
                  <p className="font-display text-sm font-700 text-ink-800">
                    {t.name}
                  </p>
                  <p className="text-xs text-ink-400">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-sea-600 to-sea-800 shadow-soft">
          <div className="relative grid gap-8 p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />
            <div>
              <h3 className="font-display text-2xl font-700 text-white sm:text-3xl">
                Ready to ship your next order?
              </h3>
              <p className="mt-3 max-w-lg text-sea-100">
                Place an order today and your cargo sails on the next vessel.
                No subscriptions, no commitments.
              </p>
            </div>
            <a
              href="#catalog"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-7 py-4 text-base font-700 text-ink-900 transition-all hover:shadow-glow hover:brightness-110"
            >
              Start an Order
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
