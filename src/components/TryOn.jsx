import { motion } from 'framer-motion';

export default function TryOn() {
  return (
    <section id="try" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Manrope, Inter, system-ui, sans-serif' }}>Try it on in seconds</h3>
            <p className="mt-3 text-white/70">Upload a photo, align the guides, and preview in 3D. Our pipeline maps proportions for a believable fit and feel.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Upload', 'Align', 'Preview', 'Share'].map((step, i) => (
                <div key={step} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80">
                  <div className="text-xs uppercase tracking-wider text-white/50">Step {i + 1}</div>
                  <div className="mt-1 text-sm font-medium">{step}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-white/80">Upload photo</span>
                  <input type="file" accept="image/*" className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 p-2 text-sm text-white file:mr-3 file:rounded-md file:border-0 file:bg-white/20 file:px-3 file:py-2 file:text-white hover:file:bg-white/30" />
                </label>
                <label className="block">
                  <span className="text-sm text-white/80">Select product</span>
                  <select className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 p-2 text-sm text-white">
                    <option>Cyber Shades</option>
                    <option>Neon Hoodie</option>
                    <option>Holo Jacket</option>
                  </select>
                </label>
              </div>

              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110">Generate Preview</button>

              <div className="pointer-events-none mt-6 h-40 w-full rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
