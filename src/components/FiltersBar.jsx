import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const FiltersBar = ({ filters, onChange }) => {
  const update = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <section className="py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl">
          <div className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
            <SlidersHorizontal size={18} />
            <span className="font-semibold">Filters</span>
          </div>
          <select
            value={filters.category}
            onChange={(e) => update('category', e.target.value)}
            className="px-3 py-2 rounded-lg border bg-white dark:bg-neutral-950 border-black/10 dark:border-white/10"
          >
            <option value="all">All</option>
            <option value="movies">Movies</option>
            <option value="tv">TV</option>
            <option value="books">Books</option>
            <option value="music">Music</option>
            <option value="podcasts">Podcasts</option>
          </select>
          <select
            value={filters.sort}
            onChange={(e) => update('sort', e.target.value)}
            className="px-3 py-2 rounded-lg border bg-white dark:bg-neutral-950 border-black/10 dark:border-white/10"
          >
            <option value="trending">Trending</option>
            <option value="popular">Popularity</option>
            <option value="rating">Rating</option>
            <option value="recent">Recent</option>
            <option value="alpha">A-Z</option>
            <option value="random">Random</option>
          </select>
          <input
            type="text"
            value={filters.query}
            onChange={(e) => update('query', e.target.value)}
            placeholder="Search titles, creators, genres..."
            className="flex-1 min-w-[180px] px-3 py-2 rounded-lg border bg-white dark:bg-neutral-950 border-black/10 dark:border-white/10"
          />
        </div>
      </div>
    </section>
  );
};

export default FiltersBar;
