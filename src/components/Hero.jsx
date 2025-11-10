import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="relative z-10 col-span-5 flex flex-col items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-left font-extrabold tracking-tight text-transparent"
            style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}
          >
            <span className="text-5xl leading-tight sm:text-6xl">Futuristic 3D Visual Try‑On</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 max-w-xl text-left text-base text-white/70 sm:text-lg"
          >
            Interact, rotate, and explore products in an immersive 3D canvas. Designed with a minimalist, digital aesthetic—fast, fluid, and captivating.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#try"
              className="group rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
            >
              Start Try‑On
            </a>
            <a
              href="#features"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <div className="relative col-span-7 h-[60vh] min-h-[380px] w-full lg:h-[70vh]">
          <Spline
            scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}
