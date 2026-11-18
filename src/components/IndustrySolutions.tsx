import React from 'react';
import { Building2, Utensils, HeartHandshake, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

interface IndustrySolutionsProps {
  onOpenQuoteModal: () => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onOpenQuoteModal }) => {
  const solutions = [
    {
      icon: Building2,
      title: 'Luxury Hotels & Resorts',
      desc: 'Elevate guest room amenities, VIP welcome baskets, spa lounges, and poolside service with bespoke branded water bottles featuring your hotel crest.',
      badge: 'Most Popular',
      benefits: ['Room amenity compliance', 'Custom QR for concierge & Wi-Fi', 'Daily delivery schedules']
    },
    {
      icon: Utensils,
      title: 'Fine Dining Restaurants & Cafes',
      desc: 'Replace generic bottled water with your signature table water. Perfectly complements high-end gastronomy, private dining events, and wine pairings.',
      badge: 'Culinary Excellence',
      benefits: ['Glass or sleek rPET options', 'Custom label matching interior decor', 'Personalized signature water']
    },
    {
      icon: HeartHandshake,
      title: 'Weddings & Private Celebrations',
      desc: 'Make your special day unforgettable with personalized water bottles featuring your monogram, wedding date, or a QR code linking to your photo gallery.',
      badge: 'Unforgettable Favors',
      benefits: ['Custom monograms & wedding themes', 'Low minimums for parties (250+)', 'On-time event delivery']
    },
    {
      icon: Briefcase,
      title: 'Corporate Galas & Conferences',
      desc: 'Make a powerful statement at product launches, board meetings, and industry conferences. Keep attendees hydrated while showcasing your brand.',
      badge: 'High Impact',
      benefits: ['Bulk volume discounts', 'Sustainable 100% rPET credentials', 'Express turnaround available']
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
            Tailored For Every Venue
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Hospitality & Events
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Discover how leading hotels, Michelin-star restaurants, and event planners leverage custom labeled water to create lasting impressions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-8 transition-all hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-900">
                    {item.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-900/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Custom Labels & Water Included</span>
                  <button
                    onClick={onOpenQuoteModal}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Get Industry Quote <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
