import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award, Leaf, Star, Factory } from 'lucide-react';
import palaceImg from '../assets/images/palace_hotel_water_bottle_1794654118011.jpg';

interface HeroProps {
  onStartCustomizing: () => void;
  onOpenSampleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCustomizing, onOpenSampleModal }) => {
  return (
    <div className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-slate-950">
      {/* Background Glow & Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold shadow-inner">
              <Factory className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>Direct Bottle Manufacturers • In-House Bottling & Label Printing Plant</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              We Manufacture Custom Branded Water Bottles for <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">Hotels & Events</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              As direct bottle makers, we craft premium custom-labelled water bottles for luxury palace hotels, fine dining restaurants, grand weddings, and corporate events with direct factory pricing and pan-India dispatch.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onStartCustomizing}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base"
              >
                <Sparkles className="w-5 h-5" />
                Customise Your Bottle Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center justify-center gap-2 text-base shadow-lg"
              >
                Request Sample Kit (₹999)
              </button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Factory className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Direct Factory</h4>
                  <p className="text-[10px] text-slate-400">Zero Middleman Markup</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">FSSAI Certified</h4>
                  <p className="text-[10px] text-slate-400">Pure Spring Water</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Bulk Enquiries</h4>
                  <p className="text-[10px] text-slate-400">Pan-India Dispatch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual / Real Palace Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse" />
            <div className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-4 shadow-2xl backdrop-blur-xl overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-2xl">
                <img 
                  src={palaceImg} 
                  alt="Custom bottle manufacturing for palace hotel" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <span className="text-[10px] font-mono bg-cyan-500 text-slate-950 font-bold px-2 py-0.5 rounded">
                      In-House Bottle Manufacturing
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1">Rajshekhar Palace Heritage Water Production</h3>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Custom Glass Bottle & Label Press</span>
                  <span className="text-cyan-400 font-semibold">Directly From Our Plant</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs text-slate-300 ml-1 font-medium">4.9 / 5.0 (Hotel & Event Reviews)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-1">
                <span>Direct Factory Pricing</span>
                <span className="text-cyan-400 font-semibold">Order Direct &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
