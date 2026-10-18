
import { Ship, Anchor, Globe2, ArrowRight } from 'lucide-react';
import { journey } from '@/data';

const themes = [
  {
    color: '#38BDF8',
    bg: '#102F49',
    border: '#235675',
  },
  {
    color: '#5EEAD4',
    bg: '#103B3A',
    border: '#22635D',
  },
  {
    color: '#FBBF65',
    bg: '#3A3023',
    border: '#69502F',
  },
  {
    color: '#C4B5FD',
    bg: '#292744',
    border: '#49446F',
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden section-gradient py-24 lg:py-32"
    >
      {/* Subtle background decoration; section background stays unchanged */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
              <Anchor className="h-4 w-4" />
              Our Journey
            </span>

            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-ink-800 sm:text-4xl lg:text-5xl">
              Every milestone tells
              <span className="block text-gradient-sea">
                a story of progress.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-ink-500">
            Discover the milestones that have shaped our journey across
            markets, oceans, and global connections.
          </p>
        </div>

        {/* Journey route */}
        <div className="relative mt-16">
          {/* Horizontal route line on desktop */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-sky-400/10 via-cyan-400/60 to-violet-400/10 md:block" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {journey.map((m, i) => {
              const theme = themes[i % themes.length];

              return (
                <article
                  key={m.id}
                  className="group relative pt-0 md:pt-0"
                >
                  {/* Route marker */}
                  <div className="relative z-10 mb-5 hidden h-14 items-center md:flex">
                    <div
                      className="grid h-14 w-14 place-items-center rounded-2xl border-4 shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
                      style={{
                        backgroundColor: theme.bg,
                        borderColor: '#061426',
                        boxShadow: `0 0 0 1px ${theme.border}`,
                      }}
                    >
                      {i === journey.length - 1 ? (
                        <Ship
                          className="h-6 w-6"
                          style={{ color: theme.color }}
                        />
                      ) : (
                        <Anchor
                          className="h-6 w-6"
                          style={{ color: theme.color }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Colourful milestone card */}
                  <div
                    className="relative h-full min-h-[255px] overflow-hidden rounded-3xl border p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl sm:p-7"
                    style={{
                      backgroundColor: theme.bg,
                      borderColor: theme.border,
                    }}
                  >
                    {/* Oversized decorative number */}
                    <div
                      className="pointer-events-none absolute -right-2 -top-7 select-none font-display text-8xl font-extrabold opacity-[0.08]"
                      style={{ color: theme.color }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Card header */}
                    <div className="relative flex items-center justify-between gap-3">
                      <span
                        className="rounded-full px-3 py-1.5 text-sm font-bold"
                        style={{
                          backgroundColor: `${theme.color}18`,
                          color: theme.color,
                        }}
                      >
                        {m.year}
                      </span>

                      <ArrowRight
                        className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{ color: theme.color }}
                      />
                    </div>

                    <h3 className="relative mt-8 font-display text-xl font-bold leading-snug text-white">
                      {m.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-slate-300">
                      {m.desc}
                    </p>

                    {/* Bottom accent */}
                    <div
                      className="absolute bottom-0 left-0 h-1 w-1/3 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: theme.color }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-400/10">
              <Globe2 className="h-6 w-6 text-cyan-300" />
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-ink-800">
                The journey continues
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                New horizons. Stronger connections. A world of possibilities.
              </p>
            </div>
          </div>

          <Ship className="hidden h-8 w-8 text-cyan-400 sm:block" />
        </div>
      </div>
    </section>
  );
}
 