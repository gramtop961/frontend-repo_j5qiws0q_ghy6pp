import React from 'react';
import { Smile, Meh, Frown, Heart, Flame, Brain, Sun, Moon } from 'lucide-react';

const moods = [
  { key: 'happy', label: 'Happy', icon: Sun },
  { key: 'chill', label: 'Relaxed', icon: Moon },
  { key: 'romantic', label: 'Romantic', icon: Heart },
  { key: 'energetic', label: 'Energetic', icon: Flame },
  { key: 'thoughtful', label: 'Thoughtful', icon: Brain },
  { key: 'neutral', label: 'Chill', icon: Meh },
  { key: 'moody', label: 'Moody', icon: Frown },
  { key: 'playful', label: 'Playful', icon: Smile },
];

const MoodSelector = ({ value, onChange }) => {
  return (
    <section id="discover" className="relative -mt-10 z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-2xl p-5 md:p-7 shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold mb-4">How are you feeling?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {moods.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => onChange(key)}
                className={`group flex flex-col items-center gap-2 rounded-xl border p-3 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  value === key
                    ? 'bg-gradient-to-b from-purple-50 to-fuchsia-50 dark:from-purple-900/30 dark:to-fuchsia-900/20 border-purple-300 dark:border-purple-600'
                    : 'bg-white dark:bg-neutral-950 border-black/10 dark:border-white/10'
                }`}
              >
                <span className={`rounded-lg p-2 transition ${value === key ? 'bg-purple-600 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200'}`}>
                  <Icon size={20} />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodSelector;
