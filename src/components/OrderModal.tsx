import { useState } from 'react';
import { X, Ship, CheckCircle2, Loader2, Anchor } from 'lucide-react';
import type { Product } from '@/data';

export default function OrderModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [qty, setQty] = useState<number>(product?.minOrder ?? 0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [stage, setStage] = useState<'form' | 'loading' | 'done'>('form');
  const [ref, setRef] = useState('');

  if (!product) return null;

  const total = qty * product.pricePerUnit;
  const valid = qty >= product.minOrder && name && email && company;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setStage('loading');
    setTimeout(() => {
      const num = Math.floor(2000 + Math.random() * 900);
      setRef(`FRE-${num}`);
      setStage('done');
    }, 1600);
  };

  const close = () => {
    setStage('form');
    setName('');
    setEmail('');
    setCompany('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
        onClick={close}
      />
      <div className="relative w-full max-w-lg animate-rise overflow-hidden rounded-t-3xl bg-white shadow-soft sm:rounded-3xl">
        {/* header strip */}
        <div className="relative h-32 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-transparent" />
          <button
            onClick={close}
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-xl bg-white/80 text-ink-700 backdrop-blur hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-5">
            <span className="rounded-full bg-sea-500/90 px-3 py-1 text-xs font-600 text-white">
              {product.category}
            </span>
            <h3 className="mt-2 font-display text-xl font-700 text-white">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6 scrollbar-hide">
          {stage === 'form' && (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-2 rounded-2xl bg-cloud-50 p-4 text-sm">
                <p className="flex items-center gap-2 text-ink-600">
                  <Anchor className="h-4 w-4 text-sea-500" />
                  {product.origin} → {product.destination}
                </p>
                <p className="text-ink-400">
                  Min order:{' '}
                  <span className="font-600 text-ink-700">
                    {product.minOrder.toLocaleString()} {product.unit}s
                  </span>{' '}
                  · ${product.pricePerUnit.toFixed(2)}/{product.unit}
                </p>
              </div>

              <Field label="Full name">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-cloud-200 bg-cloud-50 px-4 py-3 text-ink-800 placeholder:text-ink-300 focus:border-sea-400 focus:outline-none focus:ring-2 focus:ring-sea-400/30"
                  placeholder="Jane Doe"
                  required
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-cloud-200 bg-cloud-50 px-4 py-3 text-ink-800 placeholder:text-ink-300 focus:border-sea-400 focus:outline-none focus:ring-2 focus:ring-sea-400/30"
                    placeholder="jane@company.com"
                    required
                  />
                </Field>
                <Field label="Company">
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-xl border border-cloud-200 bg-cloud-50 px-4 py-3 text-ink-800 placeholder:text-ink-300 focus:border-sea-400 focus:outline-none focus:ring-2 focus:ring-sea-400/30"
                    placeholder="Acme Trading"
                    required
                  />
                </Field>
              </div>

              <Field label={`Quantity (${product.unit}s)`}>
                <input
                  type="number"
                  value={qty || ''}
                  min={product.minOrder}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="w-full rounded-xl border border-cloud-200 bg-cloud-50 px-4 py-3 text-ink-800 placeholder:text-ink-300 focus:border-sea-400 focus:outline-none focus:ring-2 focus:ring-sea-400/30"
                  required
                />
                {qty > 0 && qty < product.minOrder && (
                  <p className="mt-1.5 text-xs text-coral-500">
                    Minimum order is {product.minOrder.toLocaleString()} {product.unit}s.
                  </p>
                )}
              </Field>

              <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-sea-50 to-amber-50 p-4">
                <span className="text-sm text-ink-600">Estimated total</span>
                <span className="font-display text-2xl font-700 text-gradient-sea">
                  ${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>

              <button
                type="submit"
                disabled={!valid}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sea-500 to-sea-700 px-6 py-3.5 text-base font-600 text-white transition-all hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Ship className="h-5 w-5" />
                Confirm Order
              </button>
            </form>
          )}

          {stage === 'loading' && (
            <div className="flex flex-col items-center gap-4 py-12">
              <Loader2 className="h-10 w-10 animate-spin text-sea-600" />
              <p className="text-ink-500">Booking your shipment…</p>
            </div>
          )}

          {stage === 'done' && (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-9 w-9 text-emerald-600" />
              </div>
              <h3 className="font-display text-2xl font-700 text-ink-800">
                Order booked!
              </h3>
              <p className="text-ink-500">
                Your reference is{' '}
                <span className="font-700 text-sea-700">{ref}</span>. Our team
                will email {email} with the bill of lading and sailing schedule.
              </p>
              <button
                onClick={close}
                className="mt-2 rounded-xl bg-cloud-100 px-6 py-3 text-sm font-600 text-ink-600 hover:bg-cloud-200"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-600 text-ink-700">{label}</span>
      {children}
    </label>
  );
}
