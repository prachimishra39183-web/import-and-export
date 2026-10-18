
import { ShieldCheck, Award, FileBadge, BadgeCheck, CheckCircle2 } from 'lucide-react';
import { accreditations } from '@/data';

const iconMap = { ShieldCheck, Award, Certificate: FileBadge, BadgeCheck };

const accents = [
  {
    bg: 'bg-[#102F49]',
    icon: 'from-[#16B8D4] to-[#087CA7]',
    glow: 'bg-[#20C8E8]/10',
    text: 'text-[#55DDF4]',
    border: 'border-[#20C8E8]/20',
  },
  {
    bg: 'bg-[#103B3A]',
    icon: 'from-[#2DD4BF] to-[#0F9488]',
    glow: 'bg-[#2DD4BF]/10',
    text: 'text-[#5EEAD4]',
    border: 'border-[#2DD4BF]/20',
  },
  {
    bg: 'bg-[#3A3023]',
    icon: 'from-[#FBBF24] to-[#D97706]',
    glow: 'bg-[#FBBF24]/10',
    text: 'text-[#FCD34D]',
    border: 'border-[#FBBF24]/20',
  },
  {
    bg: 'bg-[#292744]',
    icon: 'from-[#A78BFA] to-[#7C3AED]',
    glow: 'bg-[#A78BFA]/10',
    text: 'text-[#C4B5FD]',
    border: 'border-[#A78BFA]/20',
  },
];

export default function Accreditation() {
  return (
    <section
      id="accreditation"
      className="relative overflow-hidden bg-[#061426] py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-[#087CA7]/15 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#20C8E8]/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#20C8E8]/25 bg-[#102F49]/70 px-4 py-2">
            <ShieldCheck className="h-4 w-4 text-[#55DDF4]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#55DDF4]">
              Accreditation & Trust
            </span>
          </div>

          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Certified for trust.
            <span className="block text-[#55DDF4]">
              Trusted across borders.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We believe reliable global trade starts with accountability.
            Our certifications and industry affiliations reflect our
            commitment to quality, compliance, and dependable cargo handling.
          </p>
        </div>

        {/* Accreditation cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accreditations.map((a, i) => {
            const Icon = iconMap[a.icon] ?? BadgeCheck;
            const accent = accents[i % accents.length];

            return (
              <div
                key={a.id}
                className={`group card-3d relative overflow-hidden rounded-3xl border ${accent.border} ${accent.bg} p-7 transition-all duration-300 hover:-translate-y-2 hover:border-opacity-60 hover:shadow-2xl`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Decorative glow */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${accent.glow} blur-2xl transition-transform duration-500 group-hover:scale-150`}
                />

                <div className="relative flex items-start justify-between">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accent.icon} shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>

                  <span
                    className={`rounded-full border ${accent.border} bg-black/10 px-3 py-1.5 text-xs font-bold ${accent.text}`}
                  >
                    {a.year}
                  </span>
                </div>

                <div className="relative mt-7">
                  <h3 className="font-display text-lg font-bold leading-snug text-white">
                    {a.name}
                  </h3>

                  <p className={`mt-2 text-xs font-bold uppercase tracking-wider ${accent.text}`}>
                    {a.issuer}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {a.desc}
                  </p>
                </div>

                <div className={`mt-6 h-px w-full ${accent.glow}`} />

                <div className={`mt-4 flex items-center gap-2 text-xs font-semibold ${accent.text}`}>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Commitment to quality</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry trust strip */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0B2037] px-6 py-7 sm:px-8">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#55DDF4]">
                Our Standards
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">
                Built on global trust
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                'ISO 9001',
                'AEO Certified',
                'FIATA Member',
                'GDPR Compliant',
                'C-TPAT',
              ].map((b, i) => (
                <span
                  key={b}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 transition-colors duration-200 hover:border-[#20C8E8]/40 hover:text-[#55DDF4]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
