import React, { useMemo } from 'react';
import { Star, BookmarkPlus, Share2 } from 'lucide-react';

const mockData = [
  { id: 1, title: 'Interstellar', type: 'movies', mood: ['thoughtful','adventurous'], rating: 4.8, year: 2014, image: 'https://images.unsplash.com/photo-1732633553684-b18a43a48d3d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcnN0ZWxsYXJ8ZW58MHwwfHx8MTc2MjUxMDM2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Midnight Gospel', type: 'tv', mood: ['thoughtful','trippy'], rating: 4.6, year: 2020, image: 'https://images.unsplash.com/photo-1732633553684-b18a43a48d3d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcnN0ZWxsYXJ8ZW58MHwwfHx8MTc2MjUxMDM2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'The Alchemist', type: 'books', mood: ['romantic','thoughtful'], rating: 4.2, year: 1988, image: 'https://images.unsplash.com/photo-1732633553684-b18a43a48d3d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcnN0ZWxsYXJ8ZW58MHwwfHx8MTc2MjUxMDM2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, title: 'Lo-Fi Chill', type: 'music', mood: ['relaxed'], rating: 4.5, year: 2023, image: 'https://images.unsplash.com/photo-1732633553684-b18a43a48d3d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcnN0ZWxsYXJ8ZW58MHwwfHx8MTc2MjUxMDM2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 5, title: 'Radiolab', type: 'podcasts', mood: ['curious','thoughtful'], rating: 4.7, year: 2022, image: 'https://images.unsplash.com/photo-1732633553684-b18a43a48d3d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcnN0ZWxsYXJ8ZW58MHwwfHx8MTc2MjUxMDM2MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const RecommendationsGrid = ({ mood, filters, onSurprise }) => {
  const items = useMemo(() => {
    let list = mockData;
    if (filters.category !== 'all') list = list.filter((i) => i.type === filters.category);
    if (mood) list = list.filter((i) => i.mood?.includes(mood));
    if (filters.query) list = list.filter((i) => i.title.toLowerCase().includes(filters.query.toLowerCase()));
    if (filters.sort === 'rating') list = [...list].sort((a,b) => b.rating - a.rating);
    if (filters.sort === 'recent') list = [...list].sort((a,b) => b.year - a.year);
    if (filters.sort === 'alpha') list = [...list].sort((a,b) => a.title.localeCompare(b.title));
    if (filters.sort === 'random') list = [...list].sort(() => Math.random() - 0.5);
    return list;
  }, [mood, filters]);

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold">{filters.sort === 'trending' ? 'Trending now' : 'Recommendations'}</h3>
            <p className="text-neutral-600 dark:text-neutral-300">{mood ? `Mood: ${mood}` : 'Pick a mood to personalize'}</p>
          </div>
          <button onClick={onSurprise} className="text-sm font-medium text-purple-600 hover:underline">Surprise Me Again</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <article key={item.id} className="group bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl overflow-hidden shadow transition hover:shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md capitalize">{item.type}</div>
                <div className="absolute top-2 right-2 bg-black/60 text-yellow-300 text-xs px-2 py-1 rounded-md inline-flex items-center gap-1">
                  <Star size={14} fill="currentColor" /> {item.rating}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold line-clamp-1">{item.title}</h4>
                <p className="text-xs text-neutral-500">{item.year}</p>
                <div className="mt-3 flex items-center gap-2">
                  <button className="inline-flex items-center gap-1 text-sm px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"><BookmarkPlus size={16} /> Save</button>
                  <button className="inline-flex items-center gap-1 text-sm px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"><Share2 size={16} /> Share</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsGrid;
