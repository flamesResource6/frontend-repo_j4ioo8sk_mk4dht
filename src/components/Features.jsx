import { motion } from 'framer-motion';
import { Zap, Cube, Cpu } from 'lucide-react';

const items = [
  {
    icon: Zap,
    title: 'Smooth Real‑Time Interaction',
    desc: 'High‑FPS canvas powered by WebGL for fluid orbit, pan, and zoom gestures.'
  },
  {
    icon: Cube,
    title: 'True‑to‑Life Materials',
    desc: 'Physically‑based lighting and reflections for premium, realistic surfaces.'
  },
  {
    icon: Cpu,
    title: 'Lightweight & Fast',
    desc: 'Optimized assets and lazy loading for snappy performance across devices.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-2xl" />
        <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
          style={{ fontFamily: 'Geist, Inter, system-ui, sans-serif' }}
        >
          Designed for immersive shopping
        </motion.h2>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 p-3 text-white shadow-lg shadow-fuchsia-500/20">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
