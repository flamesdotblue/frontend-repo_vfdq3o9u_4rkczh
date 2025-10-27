import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.25),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Build. Rank. Scale.
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400">
              Code Tech Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-slate-300 text-lg leading-relaxed"
          >
            A next‑gen digital partner for startups and small businesses. We craft premium websites,
            SEO that moves the needle, e‑commerce that converts, and performance marketing that scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all"
            >
              Get a proposal
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
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              ['50+ projects', 'shipped with care'],
              ['Avg. +42% CTR', 'on paid campaigns'],
              ['Core Web Vitals', 'optimized sites'],
              ['E‑commerce', 'conversion focus'],
            ].map(([title, sub]) => (
              <div key={title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="text-xs text-slate-300 mt-1">{sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative order-1 lg:order-2 h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
