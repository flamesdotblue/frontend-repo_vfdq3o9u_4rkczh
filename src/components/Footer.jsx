export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="text-white text-lg font-semibold">Code Tech Solutions</div>
          <p className="text-sm text-slate-400 mt-3 max-w-md">
            A digital product and growth studio. We design, build, and scale web experiences with measurable results.
          </p>
          <div className="mt-5 flex items-center gap-3 text-sm">
            <a href="#/contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white shadow hover:shadow-violet-500/30 transition-all">Start a project</a>
            <a href="#/services" className="px-4 py-2 rounded-md border border-white/10 text-slate-100 bg-white/5 hover:bg-white/10">Our services</a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="#/about" className="hover:text-white">About</a></li>
            <li><a href="#/services" className="hover:text-white">Services</a></li>
            <li><a href="#/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Stay in the loop</div>
          <p className="mt-3 text-sm text-slate-400">Monthly insights on web performance and growth.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = new FormData(e.currentTarget).get('email') || '';
              window.location.href = `mailto:hello@codetech.solutions?subject=Subscribe&body=${encodeURIComponent('Please subscribe ' + email)}`;
            }}
            className="mt-3 flex gap-2"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button className="px-4 py-2 rounded-md bg-white/10 border border-white/10 text-white hover:bg-white/20">Join</button>
          </form>
        </div>
      </div>
      <div className="py-5 text-center text-xs text-slate-500 border-t border-white/5">
        © {new Date().getFullYear()} Code Tech Solutions · Privacy · Terms
      </div>
    </footer>
  );
}
