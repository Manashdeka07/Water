import React, { useState } from 'react';
import { Droplet, Sparkles, Image as ImageIcon, ClipboardList, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenSampleModal: () => void;
  onOpenTracker: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  onOpenSampleModal,
  onOpenTracker,
  activeTab,
  setActiveTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'gallery', label: 'Photo Gallery', icon: ImageIcon },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => { setActiveTab('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            <Droplet className="w-6 h-6 text-white fill-white/20" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              AquaLabel<span className="text-cyan-400">Pro</span>
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
              Direct Bottle Manufacturers
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
          <button
            onClick={() => {
              setActiveTab('gallery');
              const el = document.getElementById('gallery');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
          >
            <ImageIcon className="w-4 h-4" />
            Photo Gallery View
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenTracker}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
            title="View submitted orders and quotes"
          >
            <ClipboardList className="w-4 h-4 text-cyan-400" />
            My Quotes & Orders
          </button>

          <button
            onClick={onOpenSampleModal}
            className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-800/50 transition-all"
          >
            Request Sample Kit (₹999)
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 transition-all transform hover:scale-[1.02]"
          >
            Get Custom Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenTracker(); }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800"
            >
              <ClipboardList className="w-4 h-4 text-cyan-400" />
              My Quotes & Orders
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSampleModal(); }}
              className="w-full py-3 rounded-xl text-sm font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 text-center"
            >
              Request Sample Kit (₹999)
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
              className="w-full py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 text-center shadow-lg shadow-cyan-500/20"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
