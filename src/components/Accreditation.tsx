import { ShieldCheck, Award, FileBadge, BadgeCheck } from 'lucide-react';
import { accreditations } from '@/data';

const iconMap = { ShieldCheck, Award, Certificate: FileBadge, BadgeCheck };

export default function Accreditation() {
  return (
    <section id="accreditation" className="relative bg-cloud-100 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sea-400/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-600 uppercase tracking-[0.2em] text-sea-600">
            Accreditation
          </span>
          <h2 className="mt-4 font-display text-3xl font-700 text-ink-800 sm:text-4xl lg:text-5xl">
            Certified &amp; trusted worldwide
          </h2>
          <p className="mt-5 text-lg text-ink-500">
            We hold the industry certifications that matter — so your cargo
            moves through customs and across borders without friction.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {accreditations.map((a, i) => {
            const Icon = iconMap[a.icon];
            return (
              <div
                key={a.id}
                className="card-3d relative overflow-hidden rounded-3xl bg-white p-7 shadow-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sea-50" />
                <div className="relative mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-sea-500 to-sea-700 shadow-glow">
                  <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-700 text-amber-600">
                  {a.year}
                </span>
                <h3 className="mt-3 font-display text-lg font-700 text-ink-800">
                  {a.name}
                </h3>
                <p className="mt-1 text-xs font-600 uppercase tracking-wide text-sea-600">
                  {a.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* trust strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-3xl bg-white px-8 py-6 shadow-card">
          {['ISO 9001', 'AEO Certified', 'FIATA Member', 'GDPR Compliant', 'C-TPAT'].map(
            (b) => (
              <span
                key={b}
                className="font-display text-sm font-700 uppercase tracking-wider text-ink-300"
              >
                {b}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
