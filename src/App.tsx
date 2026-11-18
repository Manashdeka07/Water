import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Droplet, Facebook, Instagram, Mail, Phone, X } from 'lucide-react';

import normalPureAquaImg from './assets/images/normal_water_bottle_1794656344790.jpg';
import blueCrestImg from './assets/images/bottle_blue_crest_pet_1795001076068.jpg';
import himalayanMistImg from './assets/images/bottle_himalayan_mist_1795001078715.jpg';
import neerNaturalImg from './assets/images/bottle_neer_spring_1795001080320.jpg';

import rajshekharPalaceImg from './assets/images/palace_hotel_water_bottle_1794654118011.jpg';
import auraHotelImg from './assets/images/luxury_hotel_water_bottle_1794653807813.jpg';
import emeraldBayImg from './assets/images/bottle_emerald_resort_1795001075144.jpg';
import kaveriPalaceImg from './assets/images/bottle_kaveri_palace_1795001079113.jpg';

import maisonBlancheImg from './assets/images/restaurant_custom_water_bottle_1794653826661.jpg';
import saffronBistroImg from './assets/images/bottle_saffron_bistro_1795001074784.jpg';
import lotusHeritageImg from './assets/images/bottle_lotus_heritage_1795001077718.jpg';
import oliveGroveImg from './assets/images/bottle_olive_garden_dine_1795001078686.jpg';

import shreyaVarunImg from './assets/images/wedding_banquet_water_bottle_1794654131453.jpg';
import sarahMichaelImg from './assets/images/wedding_custom_water_bottle_1794653839104.jpg';
import aaravMeeraImg from './assets/images/bottle_aarav_meera_1795001075357.jpg';
import rohanDiyaImg from './assets/images/bottle_rohan_diya_1795001079789.jpg';

import vitaWaterImg from './assets/images/minimalist_glass_bottle_1794655779268.jpg';
import verandaCafeImg from './assets/images/bottle_veranda_cafe_1795001076599.jpg';
import urbanRoastImg from './assets/images/bottle_urban_roast_1795001079964.jpg';
import velvetLoungeImg from './assets/images/bottle_velvet_lounge_1795001075356.jpg';
import techSummitImg from './assets/images/bottle_summit_expo_1795001077652.jpg';

type BottleCategory =
  | 'All'
  | 'Standard PET'
  | 'Hotels'
  | 'Restaurants'
  | 'Weddings'
  | 'Cafes & Events';

interface BottlePhoto {
  id: number;
  labelName: string;
  category: Exclude<BottleCategory, 'All'>;
  bottleSpec: string;
  image: string;
}

const BOTTLE_PHOTOS: BottlePhoto[] = [
  { id: 1, labelName: 'Pure Aqua', category: 'Standard PET', bottleSpec: 'PET · 500ml', image: normalPureAquaImg },
  { id: 2, labelName: 'Rajshekhar Palace', category: 'Hotels', bottleSpec: 'Glass · 750ml', image: rajshekharPalaceImg },
  { id: 3, labelName: 'Blue Crest', category: 'Standard PET', bottleSpec: 'PET · 500ml', image: blueCrestImg },
  { id: 4, labelName: 'Maison Blanche', category: 'Restaurants', bottleSpec: 'Glass · 750ml', image: maisonBlancheImg },
  { id: 5, labelName: 'Shreya & Varun', category: 'Weddings', bottleSpec: 'Glass · 500ml', image: shreyaVarunImg },
  { id: 6, labelName: 'Veranda Cafe', category: 'Cafes & Events', bottleSpec: 'rPET · 330ml', image: verandaCafeImg },
  { id: 7, labelName: 'Himalayan Mist', category: 'Standard PET', bottleSpec: 'PET · 500ml', image: himalayanMistImg },
  { id: 8, labelName: 'Emerald Bay Resort', category: 'Hotels', bottleSpec: 'Glass · 500ml', image: emeraldBayImg },
  { id: 9, labelName: 'Saffron Bistro', category: 'Restaurants', bottleSpec: 'rPET · 500ml', image: saffronBistroImg },
  { id: 10, labelName: 'Aarav & Meera', category: 'Weddings', bottleSpec: 'PET · 500ml', image: aaravMeeraImg },
  { id: 11, labelName: 'Neer Natural', category: 'Standard PET', bottleSpec: 'PET · 1000ml', image: neerNaturalImg },
  { id: 12, labelName: 'Urban Roast', category: 'Cafes & Events', bottleSpec: 'PET · 300ml', image: urbanRoastImg },
  { id: 13, labelName: 'Aura Hotel', category: 'Hotels', bottleSpec: 'Glass · 330ml', image: auraHotelImg },
  { id: 14, labelName: 'Lotus Heritage', category: 'Restaurants', bottleSpec: 'Glass · 750ml', image: lotusHeritageImg },
  { id: 15, labelName: 'Rohan & Diya', category: 'Weddings', bottleSpec: 'rPET · 500ml', image: rohanDiyaImg },
  { id: 16, labelName: 'Vita Water', category: 'Cafes & Events', bottleSpec: 'Glass · 500ml', image: vitaWaterImg },
  { id: 17, labelName: 'Kaveri Palace', category: 'Hotels', bottleSpec: 'Glass · 750ml', image: kaveriPalaceImg },
  { id: 18, labelName: 'Olive Grove', category: 'Restaurants', bottleSpec: 'Glass · 750ml', image: oliveGroveImg },
  { id: 19, labelName: 'Sarah & Michael', category: 'Weddings', bottleSpec: 'Glass · 500ml', image: sarahMichaelImg },
  { id: 20, labelName: 'Velvet Lounge', category: 'Cafes & Events', bottleSpec: 'Frosted Glass · 500ml', image: velvetLoungeImg },
  { id: 21, labelName: 'Tech Summit 2024', category: 'Cafes & Events', bottleSpec: 'PET · 500ml', image: techSummitImg },
];

const CATEGORIES: BottleCategory[] = [
  'All',
  'Standard PET',
  'Hotels',
  'Restaurants',
  'Weddings',
  'Cafes & Events',
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<BottleCategory>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === 'All'
      ? BOTTLE_PHOTOS
      : BOTTLE_PHOTOS.filter((item) => item.category === activeCategory);

  const activePhoto = selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : null
        );
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredPhotos.length]);

  const handleCategoryChange = (category: BottleCategory) => {
    setActiveCategory(category);
    setSelectedIndex(null);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] antialiased">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#gallery"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            <Droplet className="w-5 h-5 text-sky-400" />
            <span>AquaLabel Pro</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a
              href="#gallery"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Main Bottle Photo Gallery */}
      <main id="gallery" className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-xl">
            Custom Labelled Drinking Water Bottles
          </h1>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-sky-400 text-zinc-950 font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className="group text-left rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/70 hover:border-zinc-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={`${item.labelName} custom labelled drinking water bottle`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{item.bottleSpec}</span>
                </div>
                <h2 className="text-sm font-semibold text-white truncate">
                  {item.labelName}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Fullscreen Lightbox */}
      {activePhoto && selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center gap-4"
          >
            <div className="w-full flex items-center justify-between text-white">
              <div>
                <p className="text-xs text-zinc-400">
                  {activePhoto.category} · {activePhoto.bottleSpec}
                </p>
                <h3 className="text-lg font-semibold">{activePhoto.labelName}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close photo preview"
                className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full flex items-center justify-center">
              <button
                type="button"
                aria-label="Previous bottle photo"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                  )
                }
                className="hidden sm:flex absolute left-3 p-2.5 rounded-full bg-zinc-950/80 border border-zinc-700 text-white hover:bg-zinc-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <img
                src={activePhoto.image}
                alt={`${activePhoto.labelName} bottle`}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl border border-zinc-800"
              />

              <button
                type="button"
                aria-label="Next bottle photo"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % filteredPhotos.length)
                }
                className="hidden sm:flex absolute right-3 p-2.5 rounded-full bg-zinc-950/80 border border-zinc-700 text-white hover:bg-zinc-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex sm:hidden items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                  )
                }
                className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-medium text-white"
              >
                Previous
              </button>
              <span className="text-xs text-zinc-400 tabular-nums">
                {selectedIndex + 1} / {filteredPhotos.length}
              </span>
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % filteredPhotos.length)
                }
                className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-medium text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simple Contact Details Section */}
      <footer id="contact" className="border-t border-zinc-800/80 bg-zinc-900/50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Contact Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 text-zinc-200 text-sm font-medium transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
              <span className="truncate">@aqualabelpro</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 text-zinc-200 text-sm font-medium transition-colors"
            >
              <Facebook className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="truncate">AquaLabel Pro</span>
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 text-zinc-200 text-sm font-medium transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              <span>+91 98765 43210</span>
            </a>

            <a
              href="mailto:contact@aqualabelpro.com"
              className="flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 text-zinc-200 text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="truncate">contact@aqualabelpro.com</span>
            </a>
          </div>

          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} AquaLabel Pro. Custom Labelled Drinking Water Bottles.
          </p>
        </div>
      </footer>
    </div>
  );
}
