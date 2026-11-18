import React from 'react';
import { Droplet, ShieldCheck, Leaf, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                <Droplet className="w-5 h-5 fill-white/20" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                AquaLabel<span className="text-cyan-400">Pro</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The premier custom-labeled water bottle platform for luxury hotels, fine dining restaurants, weddings, and high-end corporate events.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="flex items-center gap-1"><Leaf className="w-3.5 h-3.5 text-emerald-400" /> 100% Recyclable</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> FDA Certified</span>
            </div>
          </div>

          {/* Links 1 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Solutions</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Luxury Hotels</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Fine Dining</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Weddings</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Corporate Events</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Studio & Pricing</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#customizer" className="hover:text-cyan-400 transition-colors">3D Customizer</a></li>
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">Volume Pricing</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">Success Gallery</a></li>
              <li><a href="#customizer" className="hover:text-cyan-400 transition-colors">AI Brand Consultant</a></li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Priority Concierge</h4>
            <p className="text-xs text-slate-400">Have questions or custom Pantone color matching requests? Our packaging experts are on standby.</p>
            <div className="pt-2">
              <span className="text-xs font-mono text-cyan-400 font-bold block">concierge@aqualabelpro.com</span>
              <span className="text-xs text-slate-400 mt-0.5 block">Mon - Fri: 8:00 AM - 6:00 PM EST</span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} AquaLabel Pro Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Sustainability Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
