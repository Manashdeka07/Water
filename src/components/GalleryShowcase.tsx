import React from 'react';
import { Image as ImageIcon, Star, Sparkles } from 'lucide-react';
import palaceImg from '../assets/images/palace_hotel_water_bottle_1794654118011.jpg';
import weddingImg from '../assets/images/wedding_banquet_water_bottle_1794654131453.jpg';
import restaurantImg from '../assets/images/restaurant_custom_water_bottle_1794653826661.jpg';
import hotelImg from '../assets/images/luxury_hotel_water_bottle_1794653807813.jpg';

export const GalleryShowcase: React.FC = () => {
  const photos = [
    {
      title: 'Palace Hotel Suites',
      category: 'Heritage Hospitality',
      image: palaceImg,
      desc: 'Custom-labeled 750ml glass bottles with royal crests placed across opulent palace suites.'
    },
    {
      title: 'Destination Wedding Banquets',
      category: 'Grand Weddings & Celebrations',
      image: weddingImg,
      desc: 'Personalised wedding water bottles arranged on festive reception tables with floral centerpieces.'
    },
    {
      title: 'Fine Dining Restaurants',
      category: 'Gastronomy & Table Water',
      image: restaurantImg,
      desc: 'Sleek custom table water bottles set alongside crystal glassware and Michelin-star dishes.'
    },
    {
      title: 'Luxury Hotel Rooms',
      category: '5-Star Bedside Amenities',
      image: hotelImg,
      desc: 'Bespoke bottled water featuring matte navy labels and gold foil typography on marble tables.'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Photo Gallery Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Different Types of Installations in Photos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore professional photography showcasing our custom-manufactured water bottles across diverse venues, events, and luxury hospitality settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((p, idx) => (
            <div 
              key={idx}
              className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl transition-all hover:border-cyan-500/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono bg-slate-950/90 text-cyan-300 px-3.5 py-1 rounded-full border border-slate-800 backdrop-blur-md">
                    {p.category}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="text-xs font-bold text-white">5.0</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
