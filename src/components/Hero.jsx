import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Shuffle } from 'lucide-react';

const Hero = ({ onSurprise }) => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-start justify-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 backdrop-blur-md">
          <Sparkles size={16} className="text-purple-300" />
          <span className="text-sm text-white/80">AI‑curated discovery</span>
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Discover what fits your mood
        </h1>
        <p className="mt-3 md:mt-4 text-white/80 max-w-2xl">
          Movies, shows, books, music, and podcasts—personalized to how you feel right now.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={onSurprise}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 text-white px-5 py-3 font-semibold shadow-lg shadow-purple-800/30 hover:opacity-95 active:opacity-90 transition"
          >
            <Shuffle size={18} />
            Surprise Me
          </button>
          <a
            href="#discover"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/20 transition"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
