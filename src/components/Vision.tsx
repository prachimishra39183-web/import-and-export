import { Eye, Target, Leaf, Globe2 } from 'lucide-react';
import { visionPillars, visionStatement } from '@/data';

const iconMap = { Eye, Target, Leaf, Globe: Globe2 };

const portImg =
  'https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Vision() {
  return (
    <section id="vision" className="relative section-gradient py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-light opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* statement */}
          <div>
            <span className="text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
              Our Vision
            </span>
            <h2 className="mt-4 font-display text-3xl font-700 leading-tight text-ink-800 sm:text-4xl lg:text-5xl">
              {visionStatement.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-500">
              {visionStatement.body}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              {visionStatement.body2}
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl shadow-card">
              <img
                src={portImg}
                alt="Busy container port at dusk"
                className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* pillars */}
          <div className="grid gap-5 sm:grid-cols-2">
            {visionPillars.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <div
                  key={p.id}
                  className="card-3d rounded-3xl bg-white p-7 shadow-card"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sea-100 to-sea-200">
                    <Icon className="h-7 w-7 text-sea-700" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-lg font-700 text-ink-800">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
