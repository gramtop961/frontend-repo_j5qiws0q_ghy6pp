import React, { useCallback, useState } from 'react';
import Hero from './components/Hero';
import MoodSelector from './components/MoodSelector';
import FiltersBar from './components/FiltersBar';
import RecommendationsGrid from './components/RecommendationsGrid';

function App() {
  const [mood, setMood] = useState('');
  const [filters, setFilters] = useState({ category: 'all', sort: 'trending', query: '' });

  const handleSurprise = useCallback(() => {
    const moods = ['happy','chill','romantic','energetic','thoughtful','neutral','moody','playful'];
    const pick = moods[Math.floor(Math.random() * moods.length)];
    setMood(pick);
    setFilters((f) => ({ ...f, sort: 'random' }));
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero onSurprise={handleSurprise} />
      <main className="relative z-20 -mt-8 space-y-4">
        <MoodSelector value={mood} onChange={setMood} />
        <FiltersBar filters={filters} onChange={setFilters} />
        <RecommendationsGrid mood={mood} filters={filters} onSurprise={handleSurprise} />
      </main>
      <footer className="py-10 text-center text-white/60">
        Built with cosmic vibes • Interests
      </footer>
    </div>
  );
}

export default App;
