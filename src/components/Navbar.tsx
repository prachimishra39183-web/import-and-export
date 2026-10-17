import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Vision', href: '#vision' },
  { label: 'Products', href: '#catalog' },
  { label: 'Accreditation', href: '#accreditation' },
  { label: 'Journey', href: '#journey' },
  { label: 'Track', href: '#track' },
  { label: 'Team', href: '#team' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-500 text-ink-600 transition-colors hover:bg-sea-50 hover:text-sea-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="#catalog"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sea-500 to-sea-700 px-5 py-2.5 text-sm font-600 text-white transition-all hover:shadow-glow hover:brightness-110"
          >
            Place an Order
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl glass-light text-ink-700 xl:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sea-100 bg-white/95 px-5 pb-6 pt-2 backdrop-blur xl:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base text-ink-700 hover:bg-sea-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#catalog"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-gradient-to-r from-sea-500 to-sea-700 px-4 py-3 text-center text-base font-600 text-white"
              >
                Place an Order
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
