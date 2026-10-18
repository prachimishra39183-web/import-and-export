
import { useState } from 'react';
import {
  Search,
  Ship,
  MapPin,
  Clock,
  CheckCircle2,
  Circle,
  Waves,
  ArrowRight,
  Package,
  Anchor,
  CalendarDays,
  Navigation,
  Sparkles,
} from 'lucide-react';

import { shipments } from '@/data';
import type { Shipment } from '@/data';

const statusColor: Record<Shipment['status'], string> = {
  'Booking Confirmed': 'border-amber-200 bg-amber-50 text-amber-700',
  'In Transit': 'border-blue-200 bg-blue-50 text-blue-700',
  'At Port': 'border-violet-200 bg-violet-50 text-violet-700',
  'Out for Delivery': 'border-cyan-200 bg-cyan-50 text-cyan-700',
  Delivered: 'border-emerald-200 bg-emerald-50 text-emerald-700',
};

const statusDot: Record<Shipment['status'], string> = {
  'Booking Confirmed': 'bg-amber-500',
  'In Transit': 'bg-blue-500',
  'At Port': 'bg-violet-500',
  'Out for Delivery': 'bg-cyan-500',
  Delivered: 'bg-emerald-500',
};

export default function Track() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Shipment | null | 'none'>(null);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const q = query.trim().toUpperCase();

    if (!q) {
      setResult('none');
      return;
    }

    const found = shipments.find(
      (s) =>
        s.orderRef.toUpperCase() === q ||
        s.product.toUpperCase().includes(q),
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
    <section
      id="track"
      className="relative overflow-hidden bg-cloud-50 py-24 lg:py-32"
    >
      {/* Keep the existing background and gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sea-50/40 to-transparent" />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-sea-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Smart Cargo Tracking
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl font-800 tracking-tight text-ink-800 sm:text-5xl lg:text-6xl">
            Every shipment.
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              Every mile. In view.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-500 sm:text-lg">
            Follow your cargo journey with shipment milestones, vessel
            information, and estimated delivery details in one place.
          </p>
        </div>

        {/* Search panel */}
        <div className="mx-auto mt-10 max-w-3xl">
          <form
            onSubmit={onSearch}
            className="rounded-3xl border border-white bg-white/90 p-3 shadow-[0_20px_70px_-25px_rgba(37,99,235,0.25)] backdrop-blur-xl sm:p-4"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 transition-all focus-within:border-blue-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-200">
                  <Search className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1 py-2">
                  <label
                    htmlFor="shipment-search"
                    className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400"
                  >
                    Shipment reference
                  </label>

                  <input
                    id="shipment-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter reference or product name"
                    className="mt-1 w-full bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:font-normal placeholder:text-slate-400 sm:text-base"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-violet-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Track Cargo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 px-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-600">
                Quick search:
              </span>

              {['FRE-2041', 'FRE-2038', 'FRE-2050', 'FRE-2019'].map(
                (ref) => (
                  <button
                    key={ref}
                    type="button"
                    onClick={() => {
                      setQuery(ref);
                      const found = shipments.find(
                        (s) => s.orderRef.toUpperCase() === ref,
                      );
                      setResult(found ?? 'none');
                    }}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    {ref}
                  </button>
                ),
              )}
            </div>
          </form>
        </div>

        {/* Not found */}
        {result === 'none' && (
          <div className="mx-auto mt-8 max-w-3xl animate-rise rounded-2xl border border-rose-100 bg-white p-6 shadow-lg shadow-rose-100/40">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-rose-50 text-rose-500">
                <Search className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-slate-800">
                  No matching shipment found
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Please check the reference number or try searching with a
                  product name from your shipment records.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Shipment details */}
        {result && result !== 'none' && (
          <ShipmentDetail
            s={result}
            stages={stages}
            stageIndex={stageIndex(result)}
          />
        )}

        {/* Default shipment cards */}
        {!result && (
          <div className="mt-12">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Shipment overview
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink-800">
                  Explore your cargo
                </h3>
              </div>

              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-500">
                {shipments.length} records available
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {shipments.slice(0, 4).map((s, index) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setQuery(s.orderRef);
                    setResult(s);
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white bg-white/90 p-5 text-left shadow-[0_10px_35px_-20px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_-20px_rgba(37,99,235,0.3)] sm:p-6"
                >
                  <div
                    className={`absolute left-0 top-0 h-1 w-full ${
                      index % 4 === 0
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                        : index % 4 === 1
                          ? 'bg-gradient-to-r from-violet-500 to-fuchsia-400'
                          : index % 4 === 2
                            ? 'bg-gradient-to-r from-amber-400 to-orange-400'
                            : 'bg-gradient-to-r from-emerald-400 to-teal-400'
                    }`}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-100 text-blue-700 transition-colors group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                        <Package className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="font-display text-base font-bold text-slate-800">
                          {s.orderRef}
                        </p>
                        <p className="mt-1 truncate text-sm text-slate-500">
                          {s.product}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold sm:text-xs ${statusColor[s.status]}`}
                    >
                      {s.status}
                    </span>
                  </div>

                  <div className="my-5 flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Origin
                      </p>
                      <p className="mt-1 truncate text-sm font-semibold text-slate-700">
                        {s.from}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-col items-center gap-1 text-blue-500">
                      <Ship className="h-4 w-4" />
                      <ArrowRight className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1 text-right">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Destination
                      </p>
                      <p className="mt-1 truncate text-sm font-semibold text-slate-700">
                        {s.to}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-4 w-4 text-violet-500" />
                      <span>
                        {s.progress >= 100
                          ? 'Journey completed'
                          : `${s.progress}% journey progress`}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 transition group-hover:gap-2">
                      View details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-700"
                      style={{
                        width: `${Math.min(100, Math.max(0, s.progress))}%`,
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom trust strip */}
        <div className="mt-10 grid gap-4 rounded-3xl border border-white bg-white/70 p-5 shadow-sm backdrop-blur-sm sm:grid-cols-3 sm:p-6">
          <TrustItem
            icon={Navigation}
            title="Route visibility"
            description="View origin and destination details."
            color="text-blue-600"
            bg="bg-blue-50"
          />
          <TrustItem
            icon={CalendarDays}
            title="Delivery estimates"
            description="Check the estimated arrival date."
            color="text-violet-600"
            bg="bg-violet-50"
          />
          <TrustItem
            icon={Sparkles}
            title="Clear milestones"
            description="Understand every shipment stage."
            color="text-cyan-600"
            bg="bg-cyan-50"
          />
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          Shipment information is based on the records currently available in
          this system.
        </p>
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
  const progress = Math.min(100, Math.max(0, s.progress));

  return (
    <div className="mt-10 animate-rise overflow-hidden rounded-3xl border border-white bg-white shadow-[0_25px_80px_-30px_rgba(30,64,175,0.25)]">
      {/* Detail header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-6 text-white sm:p-8">
        <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-2 -top-14 h-44 w-44 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative flex flex-wrap items-start justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300 shadow-inner backdrop-blur">
              <Package className="h-7 w-7" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                Shipment details
              </p>

              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {s.orderRef}
              </h3>

              <p className="mt-1 text-sm text-blue-100/75">{s.product}</p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
            <span
              className={`h-2 w-2 rounded-full ${statusDot[s.status]}`}
            />
            {s.status}
          </span>
        </div>

        <div className="relative mt-8 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <RoutePoint label="ORIGIN" value={s.from} />

          <div className="flex items-center justify-center gap-2 py-2 text-cyan-300 sm:px-4">
            <div className="h-px flex-1 bg-white/20 sm:hidden" />
            <Ship className="h-5 w-5" />
            <ArrowRight className="h-4 w-4" />
            <div className="h-px flex-1 bg-white/20 sm:hidden" />
          </div>

          <RoutePoint label="DESTINATION" value={s.to} align="right" />
        </div>
      </div>

      <div className="p-5 sm:p-8">
        {/* Metric cards */}
        <div className="grid gap-3 sm:grid-cols-3">
          <Info
            icon={MapPin}
            label="Origin port"
            value={s.from}
            color="blue"
          />
          <Info
            icon={Anchor}
            label="Vessel information"
            value={s.vessel}
            color="violet"
          />
          <Info
            icon={Clock}
            label="Estimated arrival"
            value={s.eta}
            color="cyan"
          />
        </div>

        {/* Journey progress */}
        <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50/80 p-5 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Journey milestones
              </p>
              <h4 className="mt-2 text-lg font-bold text-slate-800">
                Shipment progress
              </h4>
            </div>

            <div className="text-right">
              <p className="text-2xl font-extrabold text-blue-700">
                {progress}%
              </p>
              <p className="text-xs text-slate-500">Journey progress</p>
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-500 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Responsive milestone timeline */}
          <div className="relative mt-8 grid grid-cols-5 gap-1">
            <div className="absolute left-[10%] right-[10%] top-4 h-0.5 bg-slate-200" />

            <div
              className="absolute left-[10%] top-4 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-700"
              style={{
                width: `${Math.max(0, stageIndex) * 20}%`,
              }}
            />

            {stages.map((stage, i) => {
              const completed = i <= stageIndex;
              const current = i === stageIndex;

              return (
                <div
                  key={stage}
                  className="relative z-10 flex min-w-0 flex-col items-center text-center"
                >
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-full border-2 transition-all sm:h-9 sm:w-9 ${
                      completed
                        ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200'
                        : 'border-slate-200 bg-white text-slate-300'
                    } ${current ? 'ring-4 ring-blue-100' : ''}`}
                  >
                    {completed ? (
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Circle className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </div>

                  <p
                    className={`mt-3 max-w-full px-0.5 text-[9px] font-bold leading-4 sm:text-xs ${
                      completed ? 'text-blue-800' : 'text-slate-400'
                    }`}
                  >
                    {stage}
                  </p>

                  {current && (
                    <span className="mt-1 text-[9px] font-bold uppercase tracking-wide text-cyan-600 sm:text-[10px]">
                      Current
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Status message */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-r from-blue-50 via-cyan-50 to-violet-50 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-cyan-600 shadow-sm">
              <Waves className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-bold text-slate-800">
                {progress >= 100
                  ? 'Shipment journey completed'
                  : 'Your cargo journey'}
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {progress >= 100
                  ? `The shipment record shows delivery to ${s.to}.`
                  : `The shipment record shows ${progress}% progress on the route from ${s.from} to ${s.to}.`}
              </p>
            </div>

            <span className="hidden rounded-full border border-cyan-100 bg-white/80 px-3 py-1 text-xs font-bold text-cyan-700 sm:inline-flex">
              {progress >= 100 ? 'Complete' : 'In progress'}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
        >
          <Package className="h-4 w-4" />
          Print shipment details
        </button>
      </div>
    </div>
  );
}

function RoutePoint({
  label,
  value,
  align = 'left',
}: {
  label: string;
  value: string;
  align?: 'left' | 'right';
}) {
  return (
    <div className={align === 'right' ? 'sm:text-right' : ''}>
      <p className="text-[10px] font-bold tracking-[0.18em] text-blue-200/70">
        {label}
      </p>
      <p className="mt-1 break-words text-base font-bold text-white sm:text-lg">
        {value}
      </p>
    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: 'blue' | 'violet' | 'cyan';
}) {
  const styles = {
    blue: {
      icon: 'bg-blue-50 text-blue-600',
      border: 'hover:border-blue-200',
    },
    violet: {
      icon: 'bg-violet-50 text-violet-600',
      border: 'hover:border-violet-200',
    },
    cyan: {
      icon: 'bg-cyan-50 text-cyan-600',
      border: 'hover:border-cyan-200',
    },
  };

  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white p-4 transition-all ${styles[color].border}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${styles[color].icon}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
            {label}
          </p>
          <p className="mt-1 break-words text-sm font-bold text-slate-800">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function TrustItem({
  icon: Icon,
  title,
  description,
  color,
  bg,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  bg: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${bg} ${color}`}>
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-sm font-bold text-slate-800">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}