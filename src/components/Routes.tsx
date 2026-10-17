import { Ship, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { tradeRoutes } from '@/data';

const volumeColor: Record<string, string> = {
  High: 'text-sea-700 bg-sea-100',
  Medium: 'text-amber-600 bg-amber-100',
  Growing: 'text-coral-500 bg-coral-400/15',
};

export default function Routes() {
  return (
    <section id="routes" className="relative bg-cloud-100 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
              Sea Routes
            </span>
            <h2 className="mt-4 font-display text-3xl font-700 text-ink-800 sm:text-4xl lg:text-5xl">
              Sailing the world's busiest lanes
            </h2>
            <p className="mt-5 text-base text-ink-500">
              Fixed schedules across six major corridors. Pick a route and we'll
              slot your container on the next sailing.
            </p>

            <div className="mt-8 space-y-3">
              {tradeRoutes.map((r) => (
                <div
                  key={`${r.from}-${r.to}`}
                  className="card-3d flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sea-500 to-sea-700">
                    <Ship className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex flex-1 items-center gap-2">
                    <span className="font-display text-sm font-700 text-ink-800">
                      {r.from}
                    </span>
                    <ArrowRight className="h-4 w-4 text-sea-500" />
                    <span className="font-display text-sm font-700 text-ink-800">
                      {r.to}
                    </span>
                  </div>
                  <div className="hidden items-center gap-1.5 text-sm text-ink-500 sm:flex">
                    <Clock className="h-4 w-4 text-ink-300" />
                    {r.days} days
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-600 ${volumeColor[r.volume]}`}
                  >
                    {r.volume}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3D globe visual */}
          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-full border border-sea-300/30 animate-spinSlow" />
              <div className="absolute inset-8 rounded-full border border-sea-300/25" />
              <div className="absolute inset-16 rounded-full border border-amber-400/25" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sea-200/40 to-amber-200/30 blur-2xl" />

              <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-sea-500 to-sea-800 shadow-glow">
                <div className="absolute inset-0 grid place-items-center">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
              </div>

              {[
                { x: '50%', y: '0%' },
                { x: '100%', y: '50%' },
                { x: '50%', y: '100%' },
                { x: '0%', y: '50%' },
              ].map((n, i) => (
                <div
                  key={i}
                  className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: n.x, top: n.y }}
                >
                  <div className="h-full w-full animate-pulseGlow rounded-full bg-sea-400 shadow-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
