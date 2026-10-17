import { Ship, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { contactInfo } from '@/data';

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 pt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
              Order-based global import &amp; export, shipped by sea freight.
              You place the order, we sail it across the world.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full bg-sea-500/15 px-4 py-2 text-sm text-sea-300">
              <Ship className="h-4 w-4" />
              64 partner ports worldwide
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { label: 'Vision', href: '#vision' },
              { label: 'Products', href: '#catalog' },
              { label: 'Accreditation', href: '#accreditation' },
              { label: 'Journey', href: '#journey' },
              { label: 'Our People', href: '#team' },
              { label: 'Contact Us', href: '#contact' },
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { label: 'Export Shipping', href: '#catalog' },
              { label: 'Import Shipping', href: '#catalog' },
              { label: 'Customs Clearance', href: '#process' },
              { label: 'Cargo Insurance', href: '#process' },
              { label: 'Port Logistics', href: '#routes' },
            ]}
          />

          <div>
            <h4 className="font-display text-sm font-700 uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sea-400" />
                {contactInfo.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sea-400" />
                {contactInfo.phone}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sea-400" />
                {contactInfo.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-7 text-sm text-ink-400 sm:flex-row">
          <p>© 2026 Future Retail Enterprise. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Compliance</a>
          </div>
        </div>
      </div>

      {/* animated ship sailing at bottom */}
      <div className="relative h-16 overflow-hidden border-t border-white/5 bg-ink-950/60">
        <div className="absolute inset-x-0 bottom-0 h-8">
          <svg
            className="absolute bottom-0 left-0 h-full w-[200%] animate-wave text-sea-400/15"
            viewBox="0 0 2880 40"
            preserveAspectRatio="none"
          >
            <path fill="currentColor" d="M0,20 C240,0 480,40 720,20 C960,0 1200,40 1440,20 C1680,0 1920,40 2160,20 C2400,0 2640,40 2880,20 L2880,40 L0,40 Z" />
          </svg>
        </div>
        <div className="absolute top-3 animate-sail">
          <Ship className="h-8 w-8 text-sea-400/60" />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-700 uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="group inline-flex items-center gap-1.5 text-ink-300 transition-colors hover:text-white"
            >
              {l.label}
              <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
