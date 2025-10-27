export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 justify-between">
        <div>
          <div className="text-white font-semibold">Code Tech Solutions</div>
          <p className="text-sm text-slate-400 mt-2 max-w-sm">
            We’re a digital product and growth studio helping startups and small businesses build momentum online.
          </p>
        </div>
        <div className="text-sm text-slate-400">
          <div className="flex gap-6">
            <a href="#/services" className="hover:text-white">Services</a>
            <a href="#/about" className="hover:text-white">About</a>
            <a href="#/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500 border-t border-white/5">
        © {new Date().getFullYear()} Code Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
}
