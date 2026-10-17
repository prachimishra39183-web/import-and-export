import { useState } from 'react';
import { Star, ArrowRight, Plus, Ship, Anchor } from 'lucide-react';
import { products } from '@/data';
import type { Product } from '@/data';

type Filter = 'All' | 'Export' | 'Import';

export default function Catalog({ onOrder }: { onOrder: (p: Product) => void }) {
  const [filter, setFilter] = useState<Filter>('All');

  const filtered =
    filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <section id="catalog" className="relative bg-cloud-100 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sea-400/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
              Products
            </span>
            <h2 className="mt-4 font-display text-3xl font-700 text-ink-800 sm:text-4xl lg:text-5xl">
              Ready-to-ship cargo catalog
            </h2>
            <p className="mt-5 text-base text-ink-500">
              Browse goods ready to order. Each listing shows minimum quantity,
              origin, and destination — all by sea.
            </p>
          </div>

          <div className="flex gap-1 rounded-full bg-white p-1 shadow-card">
            {(['All', 'Export', 'Import'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-600 transition-all ${
                  filter === f
                    ? 'bg-gradient-to-r from-sea-500 to-sea-700 text-white shadow-glow'
                    : 'text-ink-500 hover:text-ink-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="card-3d group overflow-hidden rounded-3xl bg-white shadow-card"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-600 text-sea-700 backdrop-blur">
                  {p.tag}
                </span>
                <span
                  className={`absolute right-4 top-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-700 backdrop-blur ${
                    p.category === 'Export'
                      ? 'bg-sea-500/85 text-white'
                      : 'bg-amber-500/85 text-white'
                  }`}
                >
                  <Ship className="h-3 w-3" />
                  {p.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-700 text-ink-800">
                    {p.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span className="text-sm font-600 text-ink-600">
                      {p.rating}
                    </span>
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm text-ink-500">
                  <p className="flex items-center gap-2">
                    <Anchor className="h-4 w-4 text-sea-500" />
                    {p.origin}
                    <ArrowRight className="h-3.5 w-3.5 text-ink-300" />
                    {p.destination}
                  </p>
                  <p className="text-ink-400">
                    Min order:{' '}
                    <span className="font-600 text-ink-600">
                      {p.minOrder.toLocaleString()} {p.unit}s
                    </span>
                  </p>
                </div>

                <div className="mt-5 flex items-end justify-between border-t border-cloud-200 pt-5">
                  <div>
                    <p className="text-xs text-ink-400">Price per {p.unit}</p>
                    <p className="font-display text-2xl font-700 text-gradient-sea">
                      ${p.pricePerUnit.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => onOrder(p)}
                    className="group/btn inline-flex items-center gap-1.5 rounded-full bg-sea-50 px-4 py-2.5 text-sm font-600 text-sea-700 transition-all hover:bg-sea-500 hover:text-white"
                  >
                    <Plus className="h-4 w-4" />
                    Order
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
