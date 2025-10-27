import { motion } from 'framer-motion';
import { Rocket, Search, ShoppingCart, LineChart, PenTool, Shield } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Website design & development',
    desc: 'Conversion‑led websites built on modern stacks. Blazing fast, SEO‑ready, and easy to manage.',
    points: ['Next.js / React', 'CMS or headless', 'Core Web Vitals A+'],
  },
  {
    icon: Search,
    title: 'SEO & content optimization',
    desc: 'Technical SEO, content strategy, and on‑page optimization that grows qualified traffic.',
    points: ['Audits & fixes', 'Content sprints', 'Link earning'],
  },
  {
    icon: ShoppingCart,
    title: 'E‑commerce store setup',
    desc: 'High‑converting storefronts with optimized UX, fast checkout, and analytics baked in.',
    points: ['Shopify / Headless', 'AOV optimization', 'App integrations'],
  },
  {
    icon: LineChart,
    title: 'Performance marketing',
    desc: 'Full‑funnel ads across Google & Meta with relentless testing and clear ROAS reporting.',
    points: ['Account setup', 'A/B frameworks', 'Weekly insights'],
  },
  {
    icon: PenTool,
    title: 'Branding & UI/UX design',
    desc: 'Clean, modern identities and interfaces that feel premium and convert.',
    points: ['Design systems', 'Prototyping', 'Design handoff'],
  },
  {
    icon: Shield,
    title: 'Analytics, speed & security',
    desc: 'Tracking, performance, and hardening to keep your stack fast, stable, and safe.',
    points: ['GA4 + Tag Manager', 'CDN & caching', 'Security audits'],
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(139,92,246,0.18),transparent_60%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Services engineered to grow your business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-slate-300"
          >
            We combine strategy, design, and engineering to ship experiences that are fast, findable, and built to convert.
          </motion.p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, points }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {points.map((p) => (
                  <li key={p} className="text-xs text-slate-200 px-2 py-1 rounded-md bg-slate-900/60 border border-white/10">
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a href="#/contact" className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all">
            Book a discovery call
          </a>
          <a href="#/about" className="px-6 py-3 rounded-lg text-slate-100 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            See how we work
          </a>
        </div>
      </div>
    </section>
  );
}
