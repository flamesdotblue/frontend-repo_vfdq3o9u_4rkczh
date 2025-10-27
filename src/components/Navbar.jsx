import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const links = [
  { href: '#/', label: 'Home' },
  { href: '#/services', label: 'Services' },
  { href: '#/about', label: 'About' },
  { href: '#/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
              <Rocket className="text-white" size={18} />
            </span>
            <span className="font-semibold tracking-tight text-white">Code Tech Solutions</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-200 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#/contact"
              className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white shadow-md hover:shadow-violet-500/30 transition-all"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/5 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-3 py-2 rounded-md bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white shadow-md"
            >
              Get a Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
