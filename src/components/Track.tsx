import { useState } from 'react';
import { Search, Ship, MapPin, Clock, CheckCircle2, Circle, Waves } from 'lucide-react';
import { shipments } from '@/data';
import type { Shipment } from '@/data';

const statusColor: Record<Shipment['status'], string> = {
  'Booking Confirmed': 'text-amber-600 bg-amber-100',
  'In Transit': 'text-sea-700 bg-sea-100',
  'At Port': 'text-coral-500 bg-coral-400/15',
  'Out for Delivery': 'text-sea-600 bg-sea-50',
  Delivered: 'text-emerald-600 bg-emerald-100',
};

export default function Track() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Shipment | null | 'none'>(null);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toUpperCase();
    if (!q) {
      setResult('none');
      return;
    }
    const found = shipments.find(
      (s) => s.orderRef.toUpperCase() === q || s.product.toUpperCase().includes(q),
    );
    setResult(found ?? 'none');
  };

  const stages: Shipment['status'][] = [
    'Booking Confirmed',
    'In Transit',
    'At Port',
    'Out for Delivery',
    'Delivered',
  ];

  const stageIndex = (s: Shipment) => stages.indexOf(s.status);

  return (
    <section id="track" className="relative overflow-hidden bg-cloud-50 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sea-50/40 to-transparent" />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-sea-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
            Track Shipment
          </span>
          <h2 className="mt-4 font-display text-3xl font-700 text-ink-800 sm:text-4xl lg:text-5xl">
            Where is my cargo?
          </h2>
          <p className="mt-5 text-base text-ink-500">
            Enter an order reference or product name to see live voyage status.
          </p>
        </div>

        <form onSubmit={onSearch} className="mx-auto mt-10 max-w-xl">
          <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-card">
            <div className="flex flex-1 items-center gap-3 pl-3">
              <Search className="h-5 w-5 text-ink-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. FRE-2041 or Coffee"
                className="w-full bg-transparent py-3 text-ink-800 placeholder:text-ink-300 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-sea-500 to-sea-700 px-6 py-3 text-sm font-600 text-white transition-all hover:shadow-glow"
            >
              Track
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-ink-400">
            Try: FRE-2041, FRE-2038, FRE-2050, FRE-2019
          </p>
        </form>

        {result === 'none' && (
          <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-8 text-center shadow-card">
            <p className="text-ink-500">
              No shipment found. Check your reference and try again.
            </p>
          </div>
        )}

        {result && result !== 'none' && (
          <ShipmentDetail s={result} stages={stages} stageIndex={stageIndex(result)} />
        )}

        {!result && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {shipments.slice(0, 4).map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setQuery(s.orderRef);
                  setResult(s);
                }}
                className="rounded-2xl bg-white p-5 text-left shadow-card transition-all hover:shadow-soft hover:border-sea-400/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-700 text-ink-800">
                    {s.orderRef}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-600 ${statusColor[s.status]}`}
                  >
                    {s.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-500">{s.product}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {s.from} → {s.to}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ShipmentDetail({
  s,
  stages,
  stageIndex,
}: {
  s: Shipment;
  stages: Shipment['status'][];
  stageIndex: number;
}) {
  return (
    <div className="mt-10 animate-rise rounded-3xl bg-white p-7 shadow-card lg:p-9">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-display text-xl font-700 text-ink-800">
            {s.orderRef}
          </p>
          <p className="mt-1 text-ink-500">{s.product}</p>
        </div>
        <span className="rounded-full bg-sea-50 px-4 py-1.5 text-sm font-600 text-sea-700">
          {s.status}
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Info icon={MapPin} label="From" value={s.from} />
        <Info icon={Ship} label="Vessel" value={s.vessel} />
        <Info icon={Clock} label="ETA" value={s.eta} />
      </div>

      {/* progress timeline */}
      <div className="mt-8">
        <div className="relative flex justify-between">
          <div className="absolute left-0 right-0 top-5 h-1 rounded-full bg-cloud-200" />
          <div
            className="absolute left-0 top-5 h-1 rounded-full bg-gradient-to-r from-sea-400 to-amber-400 transition-all duration-700"
            style={{ width: `${(stageIndex / (stages.length - 1)) * 100}%` }}
          />
          {stages.map((stage, i) => (
            <div key={stage} className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={`grid h-10 w-10 place-items-center rounded-full border-2 transition-all ${
                  i <= stageIndex
                    ? 'border-sea-500 bg-sea-500 text-white'
                    : 'border-cloud-200 bg-cloud-50 text-ink-300'
                }`}
              >
                {i <= stageIndex ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Circle className="h-5 w-5" />
                )}
              </div>
              <span
                className={`max-w-[80px] text-center text-[11px] font-500 leading-tight ${
                  i <= stageIndex ? 'text-ink-700' : 'text-ink-300'
                }`}
              >
                {stage}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2 rounded-2xl bg-sea-50 p-4">
        <Waves className="h-5 w-5 animate-pulseGlow text-sea-600" />
        <p className="text-sm text-ink-600">
          {s.progress < 100
            ? `Cargo is ${s.progress}% through the voyage — sailing ${s.from} → ${s.to}.`
            : `Cargo delivered to ${s.to}. Order complete.`}
        </p>
      </div>
    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-cloud-50 p-4">
      <p className="flex items-center gap-1.5 text-xs text-ink-400">
        <Icon className="h-3.5 w-3.5 text-sea-500" />
        {label}
      </p>
      <p className="mt-1.5 text-sm font-600 text-ink-800">{value}</p>
    </div>
  );
}
