import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2, Ship } from 'lucide-react';
import { contactInfo } from '@/data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [stage, setStage] = useState<'form' | 'loading' | 'done'>('form');

  const valid = name && email && message;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setStage('loading');
    setTimeout(() => setStage('done'), 1500);
  };

  const reset = () => {
    setStage('form');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative bg-cloud-100 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
            Contact Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-700 text-ink-800 sm:text-4xl lg:text-5xl">
            Let's get your cargo sailing
          </h2>
          <p className="mt-5 text-base text-ink-500">
            Questions about an order or route? Our team replies within one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* info cards */}
          <div className="space-y-4">
            <ContactCard
              icon={Mail}
              label="Email"
              value={contactInfo.email}
              hint="We reply within 24 hours"
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value={contactInfo.phone}
              hint="Mon–Fri, 8:00–18:00 CET"
            />
            <ContactCard
              icon={MapPin}
              label="Headquarters"
              value={contactInfo.address}
              hint="Visits by appointment"
            />
            <ContactCard
              icon={Clock}
              label="Business Hours"
              value={contactInfo.hours}
              hint="Closed on public holidays"
            />
            <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sea-500 to-sea-700 p-5 text-white shadow-glow">
              <Ship className="h-6 w-6 shrink-0" />
              <p className="text-sm font-600">
                64 partner ports · 120 active trade routes · 97.4% on-time
              </p>
            </div>
          </div>

          {/* form */}
          <div className="rounded-3xl bg-white p-7 shadow-card lg:p-9">
            {stage === 'form' && (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-600 text-ink-700">
                    Full name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-cloud-200 bg-cloud-50 px-4 py-3 text-ink-800 placeholder:text-ink-300 focus:border-sea-400 focus:outline-none focus:ring-2 focus:ring-sea-400/30"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-600 text-ink-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-cloud-200 bg-cloud-50 px-4 py-3 text-ink-800 placeholder:text-ink-300 focus:border-sea-400 focus:outline-none focus:ring-2 focus:ring-sea-400/30"
                    placeholder="jane@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-600 text-ink-700">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-cloud-200 bg-cloud-50 px-4 py-3 text-ink-800 placeholder:text-ink-300 focus:border-sea-400 focus:outline-none focus:ring-2 focus:ring-sea-400/30"
                    placeholder="Tell us about your shipment — product, quantity, origin, destination…"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={!valid}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sea-500 to-sea-700 px-6 py-3.5 text-base font-600 text-white transition-all hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}

            {stage === 'loading' && (
              <div className="flex flex-col items-center gap-4 py-16">
                <Loader2 className="h-10 w-10 animate-spin text-sea-600" />
                <p className="text-ink-500">Sending your message…</p>
              </div>
            )}

            {stage === 'done' && (
              <div className="flex flex-col items-center gap-4 py-14 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100">
                  <CheckCircle2 className="h-9 w-9 text-emerald-600" />
                </div>
                <h3 className="font-display text-2xl font-700 text-ink-800">
                  Message sent!
                </h3>
                <p className="max-w-sm text-ink-500">
                  Thanks, {name.split(' ')[0]}. Our team will get back to you at{' '}
                  <span className="font-600 text-sea-700">{email}</span> within
                  one business day.
                </p>
                <button
                  onClick={reset}
                  className="mt-2 rounded-xl bg-cloud-100 px-6 py-3 text-sm font-600 text-ink-600 hover:bg-cloud-200"
                >
                  Send another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card transition-all hover:shadow-soft">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sea-50">
        <Icon className="h-6 w-6 text-sea-600" />
      </div>
      <div>
        <p className="text-xs font-600 uppercase tracking-wide text-ink-400">
          {label}
        </p>
        <p className="mt-0.5 font-display text-base font-700 text-ink-800">
          {value}
        </p>
        <p className="mt-0.5 text-xs text-ink-400">{hint}</p>
      </div>
    </div>
  );
}
