import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[84vh] flex items-center overflow-hidden pt-24 md:pt-28">
      {/* Full-width animated background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient veil for legibility (doesn't block interactions) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90" />
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Smart web, SEO and growth for ambitious teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-slate-200 text-lg md:text-xl leading-relaxed"
          >
            Code Tech Solutions designs, builds, and scales digital experiences that convert. From high‑performance
            websites to data‑driven marketing, we ship outcomes — fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all"
            >
              Start a project
            </a>
            <a
              href="#/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-slate-100 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Explore services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.8 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              ['50+ launches', 'product & marketing'],
              ['A+ vitals', 'speed & stability'],
              ['3.8x avg ROAS', 'paid media'],
              ['42%+ CTR lift', 'creative & copy'],
            ].map(([title, sub]) => (
              <div key={title} className="p-4 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur">
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="text-xs text-slate-300 mt-1">{sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
