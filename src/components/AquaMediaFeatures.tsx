import React from 'react';
import { Sparkles, Megaphone, Building2, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';

interface AquaMediaFeaturesProps {
  onOpenQuoteModal: () => void;
  onOpenSampleModal: () => void;
}

export const AquaMediaFeatures: React.FC<AquaMediaFeaturesProps> = ({ onOpenQuoteModal, onOpenSampleModal }) => {
  return (
    <section id="aquamedia-models" className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Inspired by AquaMedia.in
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Two Ways to Partner With Us
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Choose between our custom-branded **Vanity Model** for your venue or our revolutionary **Ad-Subsidized Model** for free venue water.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Model 1: Vanity Model */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-all">
            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
              <Building2 className="w-32 h-32 text-cyan-400" />
            </div>

            <div className="space-y-6 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest bg-cyan-500/10 text-cyan-400 px-3.5 py-1.5 rounded-full border border-cyan-500/20 font-bold">
                Model 01 • The Vanity Model
              </span>

              <h3 className="text-2xl font-extrabold text-white">Custom Branded Bottles for Venues</h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Designed for luxury hotels, fine dining restaurants, cafes, corporate offices, weddings, and private events. Elevate your guest experience with your own private label spring water.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  Sizes: 250ml, 500ml, and 1 Litre bottles
                </li>
                <li className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  Eco-friendly rPET or Premium Glass options
                </li>
                <li className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  FSSAI & BIS Certified Pure Spring / Mineral Water
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-900 relative z-10 flex items-center justify-between">
              <span className="text-xs text-slate-400">MOQ starts at 250–500 bottles</span>
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                Get Custom Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Model 2: Ad-Subsidized Model */}
          <div className="bg-gradient-to-b from-slate-950 to-indigo-950/40 border border-indigo-900/60 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
              <Megaphone className="w-32 h-32 text-indigo-400" />
            </div>

            <div className="space-y-6 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest bg-indigo-500/10 text-indigo-400 px-3.5 py-1.5 rounded-full border border-indigo-500/20 font-bold">
                Model 02 • The Ad-Subsidized Model
              </span>

              <h3 className="text-2xl font-extrabold text-white">Sponsored Bottle Advertising</h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Are you a cafe, restaurant, or gym? Partner with us to receive **Free or Subsidized Bottled Water** supplied to your venue, funded by premier brand advertisers placing ads on the bottles.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  Zero or minimal cost water supply for partner venues
                </li>
                <li className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  High-engagement physical marketing medium for brands
                </li>
                <li className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  Pan-India distribution across Mumbai, Delhi, Bangalore & more
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-indigo-900/60 relative z-10 flex items-center justify-between">
              <span className="text-xs text-slate-400">For Venue Partners & Advertisers</span>
              <button
                onClick={onOpenSampleModal}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25"
              >
                Apply for Venue Partner <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
