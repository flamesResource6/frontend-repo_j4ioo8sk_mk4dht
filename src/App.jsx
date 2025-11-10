import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TryOn from './components/TryOn';

function Background() {
  useEffect(() => {
    document.documentElement.classList.add('bg-black');
  }, []);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TryOn />
      </main>
      <footer id="contact" className="border-t border-white/10 py-10 text-center text-white/60">
        <p>
          Built for immersive, interactive, and minimalist try‑on experiences. © {new Date().getFullYear()} VibeTryOn
        </p>
      </footer>
    </div>
  );
}
