import React from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface VolumePricingCalculatorProps {
  onOpenQuoteModal: () => void;
}

export const VolumePricingCalculator: React.FC<VolumePricingCalculatorProps> = ({ onOpenQuoteModal }) => {
  const tiers = [
    { qty: '250 - 499 units', price: '$1.45', desc: 'Ideal for boutique events & weekend weddings', popular: false },
    { qty: '500 - 999 units', price: '$1.25', desc: 'Popular for fine dining & boutique hotels', popular: true },
    { qty: '1,000 - 4,999 units', price: '$0.98', desc: 'Great for luxury resorts & corporate galas', popular: false },
    { qty: '5,000+ units', price: '$0.78', desc: 'Enterprise volume with custom pallet shipping', popular: false },
  ];

  return (
    <section id="calculator" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Transparent Volume Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Clear, Competitive Rates
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No hidden setup fees, free digital proofing, and volume discounts that scale with your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t, idx) => (
            <div 
              key={idx}
              className={`rounded-3xl p-6 relative flex flex-col justify-between border transition-all ${
                t.popular 
                  ? 'bg-gradient-to-b from-cyan-950/80 to-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10' 
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-300">{t.qty}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{t.price}</span>
                  <span className="text-xs text-slate-400">/ bottle</span>
                </div>
                <p className="text-xs text-slate-400">{t.desc}</p>

                <ul className="space-y-2 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" /> Free Custom Label Design
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" /> 100% Recyclable rPET
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" /> Pure Spring Water
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={onOpenQuoteModal}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                    t.popular 
                      ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md shadow-cyan-500/20' 
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  Select Tier & Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">100% Satisfaction Guarantee on Every Batch</h4>
              <p className="text-xs text-slate-400 mt-0.5">We send you high-resolution 3D digital proofs and physical sample kits before any bulk production starts.</p>
            </div>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all whitespace-nowrap shadow-lg shadow-cyan-500/20 flex items-center gap-2"
          >
            Start Your Custom Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
