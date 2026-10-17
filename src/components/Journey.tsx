import { Ship, Anchor } from 'lucide-react';
import { journey } from '@/data';

export default function Journey() {
  return (
    <section id="journey" className="relative section-gradient py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sea-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
            Our Journey
          </span>
          <h2 className="mt-4 font-display text-3xl font-700 text-ink-800 sm:text-4xl lg:text-5xl">
            From one container to a global network
          </h2>
          <p className="mt-5 text-base text-ink-500">
            A decade of building sea trade routes, one order at a time.
          </p>
        </div>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-sea-400 via-sea-300 to-amber-400 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {journey.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={m.id}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    left ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-4 top-1 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-sea-500 to-sea-700 shadow-glow ring-4 ring-cloud-100">
                      <Anchor className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* card */}
                  <div className={`ml-12 flex-1 md:ml-0 md:w-1/2 ${left ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="rounded-3xl bg-white p-6 shadow-card transition-all hover:shadow-soft">
                      <span className="inline-block rounded-full bg-sea-50 px-3 py-1 font-display text-sm font-700 text-sea-700">
                        {m.year}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-700 text-ink-800">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  {/* spacer for other half */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

          {/* endpoint */}
          <div className="relative mt-10 flex justify-center">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-glow ring-4 ring-cloud-100">
              <Ship className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="mt-4 text-center font-display text-sm font-600 text-ink-400">
            …and still sailing.
          </p>
        </div>
      </div>
    </section>
  );
}
