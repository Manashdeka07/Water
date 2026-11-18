import React from 'react';
import { Sparkles, Check, ArrowRight, Package, ShieldCheck, Droplet } from 'lucide-react';

interface BottleTypesSectionProps {
  onOpenQuoteModal: () => void;
  onSelectBottleType: (size: any, material: any) => void;
}

export const BottleTypesSection: React.FC<BottleTypesSectionProps> = ({ onOpenQuoteModal, onSelectBottleType }) => {
  const bottleTypes = [
    {
      id: 'rpet-500',
      name: '500ml Eco rPET Bottle',
      subtitle: 'Most Popular for Events & Conferences',
      material: 'rpet',
      size: '500ml',
      desc: 'Made from 100% recycled post-consumer plastic. Lightweight, unbreakable, and infinitely recyclable with crystal-clear finish.',
      features: ['100% Recycled & Recyclable', 'Shatterproof for events', 'Custom matte or metallic labels'],
      badge: 'Best Seller',
      color: 'from-cyan-950 to-slate-900'
    },
    {
      id: 'glass-750',
      name: '750ml Fine Dining Table Glass',
      subtitle: 'For Luxury Hotels & Restaurants',
      material: 'glass',
      size: '750ml',
      desc: 'Heirloom-grade heavy flint glass designed for upscale dining tables, VIP suites, and royal banquets.',
      features: ['Premium heavy glass feel', 'Gold or silver luxury screw caps', 'Elegant Bordeaux silhouette'],
      badge: 'Luxury Choice',
      color: 'from-blue-950 to-slate-900'
    },
    {
      id: 'glass-330',
      name: '330ml Compact Glass Bottle',
      subtitle: 'For Hotel Minibars & Cafe Tables',
      material: 'glass',
      size: '330ml',
      desc: 'Compact, elegant glass bottle tailored for hotel bedside tables, executive minibars, and premium cafes.',
      features: ['Compact premium profile', 'Crystal clear presentation', 'Smart QR code label integration'],
      badge: 'Hotel Favorite',
      color: 'from-indigo-950 to-slate-900'
    },
    {
      id: 'aluminum-500',
      name: '500ml Sleek Aluminum Bottle',
      subtitle: 'For Festivals & VIP Sports Events',
      material: 'aluminum',
      size: '500ml',
      desc: 'Infinite recycling capability with rapid thermal chilling. Keeps water ice-cold for hours under outdoor sunlight.',
      features: ['Rapid thermal chilling', 'Infinitely recyclable aluminum', 'Matte powder-coat finish'],
      badge: 'Eco Innovation',
      color: 'from-slate-900 to-slate-950'
    },
    {
      id: 'rpet-1000',
      name: '1000ml Large Conference Flask',
      subtitle: 'For Boardrooms & Corporate Meetings',
      material: 'rpet',
      size: '1000ml',
      desc: 'Generous 1-liter capacity designed for long board meetings, corporate conferences, and executive dining tables.',
      features: ['1-Liter generous volume', 'Ergonomic grip design', 'Large branding label canvas'],
      badge: 'Corporate',
      color: 'from-slate-900 to-cyan-950'
    },
    {
      id: 'stainless-500',
      name: '500ml Insulated Thermal Flask',
      subtitle: 'Exclusive VIP & Gifting Edition',
      material: 'stainless',
      size: '500ml',
      desc: 'Double-wall vacuum insulated stainless steel bottle with laser engraving or custom wrap label for high-end gifting.',
      features: ['24h cold / 12h hot insulation', 'Laser engraved or printed wrap', 'Heirloom durability'],
      badge: 'VIP Gifting',
      color: 'from-slate-900 to-amber-950'
    }
  ];

  return (
    <section id="bottle-types" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
            <Package className="w-3.5 h-3.5 text-cyan-400" />
            Our Manufacturing Range
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Different Types of Bottles We Manufacture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            As direct bottle makers, we produce a wide spectrum of bottle materials, sizes, and cap configurations in our factory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bottleTypes.map((bt) => (
            <div 
              key={bt.id}
              className={`rounded-3xl border border-slate-800 bg-gradient-to-b ${bt.color} p-6 sm:p-8 flex flex-col justify-between group hover:border-cyan-500/60 transition-all shadow-xl`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/20 font-bold">
                    {bt.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400 font-mono">{bt.size}</span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">{bt.name}</h3>
                  <p className="text-xs text-cyan-400 font-medium mt-1">{bt.subtitle}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{bt.desc}</p>

                <ul className="space-y-2 pt-4 border-t border-slate-800/80">
                  {bt.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    onSelectBottleType(bt.size, bt.material);
                    const el = document.getElementById('customizer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
                >
                  Configure This Bottle <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
