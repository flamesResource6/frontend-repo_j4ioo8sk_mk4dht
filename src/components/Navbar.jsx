import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-white">VibeTryOn</span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#features" className="transition-colors hover:text-white">Features</a>
            <a href="#try" className="transition-colors hover:text-white">Try it</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>

          <button className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20">
            <span>Try Now</span>
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/70 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
          </button>
        </motion.nav>
      </div>
    </div>
  );
}
