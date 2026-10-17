import { Users } from 'lucide-react';
import { team, teamGallery } from '@/data';

export default function Team() {
  return (
    <section id="team" className="relative bg-cloud-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sea-400/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
            <Users className="h-4 w-4" />
            Our People
          </span>
          <h2 className="mt-4 font-display text-3xl font-700 text-ink-800 sm:text-4xl lg:text-5xl">
            The team behind every shipment
          </h2>
          <p className="mt-5 text-base text-ink-500">
            From port coordinators to logistics directors — we move your cargo with care.
          </p>
        </div>

        {/* team cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <div
              key={m.id}
              className="card-3d group overflow-hidden rounded-3xl bg-white shadow-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-display text-lg font-700 text-white">
                    {m.name}
                  </h3>
                  <p className="text-sm font-500 text-sea-200">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* gallery strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {teamGallery.map((img, i) => (
            <div
              key={i}
              className="group relative h-40 overflow-hidden rounded-2xl shadow-card"
            >
              <img
                src={img}
                alt="Team at work"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
