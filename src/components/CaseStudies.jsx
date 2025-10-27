import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'E‑commerce',
    title: 'Headless storefront boosts AOV by 27%',
    copy: 'Replatformed to a fast, flexible stack with optimized PDPs and GA4 tracking.',
  },
  {
    tag: 'SEO',
    title: 'Technical overhaul drives +140% organic',
    copy: 'Fixed crawl issues, improved IA, and shipped a content sprint with internal linking.',
  },
  {
    tag: 'Paid media',
    title: 'Full‑funnel ads hit 4.2x blended ROAS',
    copy: 'Creative testing and budget pacing across Search, Performance Max, and Meta.',
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_80%,rgba(14,165,233,0.14),transparent_60%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Recent wins
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-slate-300"
          >
            A snapshot of the outcomes we ship across web, SEO, e‑commerce, and performance.
          </motion.p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.a
              key={c.title}
              href="#/contact"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 hover:from-slate-900/60 hover:to-slate-900/30 transition-colors"
            >
              <span className="text-[10px] uppercase tracking-wider text-sky-300/90">{c.tag}</span>
              <h3 className="mt-2 text-lg font-semibold text-white group-hover:underline underline-offset-4">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{c.copy}</p>
              <div className="mt-4 text-sm text-slate-200">Read more →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
