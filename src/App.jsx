import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ServicesGrid from './components/ServicesGrid.jsx';
import ProcessTimeline from './components/ProcessTimeline.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Footer from './components/Footer.jsx';

function useHashRoute() {
  const getRoute = () => (typeof window !== 'undefined' ? window.location.hash.replace('#', '') || '/' : '/');
  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return route;
}

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CaseStudies />
      <ProcessTimeline />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">What we do</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">
            From first commit to first conversion, we’re with you end‑to‑end. Explore our core capabilities below.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <ProcessTimeline />
      <CaseStudies />
    </>
  );
}

function AboutPage() {
  return (
    <section className="pt-28 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h1 className="text-4xl md:text-5xl font-bold text-white">A partner, not a vendor</h1>
          <p className="mt-4 text-slate-300">
            We’re a senior team with a maker mindset. Strategy leads, then design and code move quickly behind it.
            We embed with your team, communicate clearly, and optimize relentlessly.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              ['Founded', '2021'],
              ['Projects shipped', '50+'],
              ['Avg. timeline', '4–8 weeks'],
              ['Based in', 'Remote‑first'],
            ].map(([k, v]) => (
              <div key={k} className="p-4 rounded-xl bg-slate-900/60 border border-white/10">
                <div className="text-xs text-slate-400">{k}</div>
                <div className="text-base font-semibold text-white">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-fuchsia-600/20">
          <h2 className="text-2xl font-semibold text-white">Our approach</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-200">
            <li className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Discover: audit tech, brand, funnels — align on goals and constraints.</li>
            <li className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Design: premium UI with clear information architecture and states.</li>
            <li className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Build: production‑grade implementation with performance baked in.</li>
            <li className="p-3 rounded-lg bg-slate-900/60 border border-white/10">Grow: ship, measure, iterate — content, SEO, and paid media.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const mailto = `mailto:hello@codetech.solutions?subject=Project%20Inquiry%20from%20${encodeURIComponent(
      name || 'Website visitor'
    )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section className="pt-28 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Let’s build something great</h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            Tell us about your goals. We’ll reply within one business day with next steps and ballpark pricing.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">
            Prefer email? Write to <span className="text-white font-medium">hello@codetech.solutions</span>
          </div>
        </div>
        <form onSubmit={onSubmit} className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="jane@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">What do you need?</label>
              <select name="service" className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                <option value="Web design & development">Web design & development</option>
                <option value="SEO & content">SEO & content</option>
                <option value="E-commerce setup">E‑commerce setup</option>
                <option value="Performance marketing">Performance marketing</option>
                <option value="Branding & UI/UX">Branding & UI/UX</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Message</label>
              <textarea name="message" rows="5" className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="A quick summary of your project, goals, and timeline." />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all">
              Request proposal
            </button>
            <a href="#/services" className="text-sm text-slate-300 hover:text-white">See packages</a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  const route = useHashRoute();

  const Page = useMemo(() => {
    switch (route) {
      case '/services':
        return <ServicesPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-600/40">
      <Navbar />
      {Page}
      <Footer />
    </div>
  );
}
