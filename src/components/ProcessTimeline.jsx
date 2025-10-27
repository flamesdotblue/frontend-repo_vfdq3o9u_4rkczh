import { motion } from 'framer-motion';
import { Compass, Palette, Code2, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    desc: 'We audit tech, brand, and funnel to align on goals, constraints, and the right strategy.'
  },
  {
    icon: Palette,
    title: 'Design',
    desc: 'Structure, flows, and premium UI. We prototype quickly and validate states early.'
  },
  {
    icon: Code2,
    title: 'Build',
    desc: 'Production‑grade implementation with accessibility, SEO, and performance baked in.'
  },
  {
    icon: BarChart3,
    title: 'Grow',
    desc: 'Content, SEO, and paid media with clear reporting, testing, and iteration.'
  }
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(99,102,241,0.14),transparent_60%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            A clear path from idea to impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-slate-300"
          >
            We keep process simple and outcomes measurable. Fewer meetings, more momentum.
          </motion.p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
