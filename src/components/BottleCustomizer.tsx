import React, { useState } from 'react';
import { CustomBottleConfig, AIBrandSuggestion } from '../types';
import { Sparkles, Check, RefreshCw, QrCode, Sliders, Palette, Droplet, Package, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

interface BottleCustomizerProps {
  config: CustomBottleConfig;
  setConfig: React.Dispatch<React.SetStateAction<CustomBottleConfig>>;
  onOpenQuoteModal: () => void;
  onOpenSampleModal: () => void;
}

export const BottleCustomizer: React.FC<BottleCustomizerProps> = ({
  config,
  setConfig,
  onOpenQuoteModal,
  onOpenSampleModal
}) => {
  const [activeTab, setActiveTab] = useState<'bottle' | 'label' | 'water' | 'ai'>('bottle');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiIndustry, setAiIndustry] = useState('Luxury Hotel & Resort');
  const [aiVibe, setAiVibe] = useState('Sophisticated minimal gold and deep slate');
  const [aiSuggestion, setAiSuggestion] = useState<AIBrandSuggestion | null>(null);

  // Calculate price per bottle based on quantity and material
  const getUnitPrice = () => {
    let base = 1.25;
    if (config.material === 'glass') base = 2.10;
    if (config.material === 'aluminum') base = 2.50;
    if (config.material === 'stainless') base = 4.20;
    
    // Volume discounts
    if (config.quantity >= 1000) base *= 0.75;
    else if (config.quantity >= 500) base *= 0.85;
    else if (config.quantity >= 250) base *= 0.95;

    return Number(base.toFixed(2));
  };

  const unitPrice = getUnitPrice();
  const totalPrice = (unitPrice * config.quantity).toFixed(2);

  // Run AI Brand Consultant
  const handleRunAiConsultant = async () => {
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: config.brandName,
          industry: aiIndustry,
          eventType: 'Guest Amenities / VIP Welcome',
          vibe: aiVibe,
          primaryColor: config.primaryColor
        })
      });
      const data = await res.json();
      setAiSuggestion(data);
      if (data.tagline) {
        setConfig(prev => ({ ...prev, tagline: data.tagline }));
      }
      if (data.colorRecommendations && data.colorRecommendations[0]) {
        setConfig(prev => ({ ...prev, primaryColor: data.colorRecommendations[0] }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section id="customizer" className="py-16 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Customisation Studio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Design Your Custom Bottle
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Configure every detail from bottle material and cap color to custom labels, waterproof finishes, and AI branding.
          </p>
        </div>

        {/* Customizer Controls Container */}
        <div className="space-y-6">
          {/* Tabs Header */}
          <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto">
            <button
              onClick={() => setActiveTab('bottle')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'bottle' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Package className="w-4 h-4" />
              1. Bottle & Material
            </button>
            <button
              onClick={() => setActiveTab('label')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'label' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Palette className="w-4 h-4" />
              2. Custom Label & QR
            </button>
            <button
              onClick={() => setActiveTab('water')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'water' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Droplet className="w-4 h-4" />
              3. Water & Quantity
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === 'ai' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md' : 'text-purple-300 hover:bg-purple-950/40'
              }`}
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              ✨ AI Designer
            </button>
          </div>

          {/* Tab 1: Bottle & Material */}
          {activeTab === 'bottle' && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-white">Choose Bottle Size</h3>
                <p className="text-xs text-slate-400 mt-1">Select the capacity that fits your venue or event.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  {(['330ml', '500ml', '750ml', '1000ml'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setConfig(prev => ({ ...prev, size: sz }))}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        config.size === sz 
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-500/10 font-bold' 
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-base font-extrabold">{sz}</div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {sz === '330ml' ? 'Compact / Café' : sz === '500ml' ? 'Most Popular' : sz === '750ml' ? 'Fine Dining Table' : 'Conference / VIP'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Bottle Material</h3>
                <p className="text-xs text-slate-400 mt-1">Sustainable 100% rPET, Premium Glass, or Sleek Aluminum.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { id: 'rpet', name: '100% Eco-rPET', desc: 'Lightweight, 100% recycled & recyclable plastic' },
                    { id: 'glass', name: 'Luxury Glass Bottle', desc: 'Heirloom feel for upscale dining & hotels' },
                    { id: 'aluminum', name: 'Sleek Aluminum', desc: 'Infinitely recyclable, ultra-cold holding' },
                    { id: 'stainless', name: 'Insulated Stainless', desc: 'Reusable premium thermal flask' },
                  ].map((mat) => (
                    <div
                      key={mat.id}
                      onClick={() => setConfig(prev => ({ ...prev, material: mat.id as any }))}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        config.material === mat.id 
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-md' 
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{mat.name}</span>
                        {config.material === mat.id && <Check className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{mat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Cap Style & Color</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4">
                  {[
                    { id: 'white-screw', name: 'White Screw' },
                    { id: 'black-matte', name: 'Matte Black' },
                    { id: 'gold-luxury', name: 'Luxury Gold' },
                    { id: 'wooden', name: 'Wooden Finish' },
                    { id: 'sports', name: 'Sports Cap' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setConfig(prev => ({ ...prev, cap: c.id as any }))}
                      className={`p-3 rounded-2xl border text-xs font-semibold transition-all ${
                        config.cap === c.id 
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' 
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setActiveTab('label')}
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all flex items-center gap-2"
                >
                  Next: Custom Label & Design <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Custom Label & QR */}
          {activeTab === 'label' && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Brand / Venue / Event Name
                  </label>
                  <input
                    type="text"
                    value={config.brandName}
                    onChange={(e) => setConfig(prev => ({ ...prev, brandName: e.target.value }))}
                    placeholder="e.g. Rajshekhar Palace"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Tagline / Subtitle
                  </label>
                  <input
                    type="text"
                    value={config.tagline}
                    onChange={(e) => setConfig(prev => ({ ...prev, tagline: e.target.value }))}
                    placeholder="e.g. Royal Rajasthan Heritage Water"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Label Finish */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Label Material & Finish
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'matte-velvet', name: 'Matte Velvet' },
                    { id: 'glossy-metallic', name: 'Glossy Metallic' },
                    { id: 'transparent', name: 'Transparent Crystal' },
                    { id: 'kraft', name: 'Embossed Kraft' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setConfig(prev => ({ ...prev, finish: f.id as any }))}
                      className={`p-3 rounded-2xl border text-xs font-semibold transition-all ${
                        config.finish === f.id 
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' 
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Label Background Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={config.primaryColor}
                      onChange={(e) => setConfig(prev => ({ ...prev, primaryColor: e.target.value }))}
                      className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer p-1"
                    />
                    <div className="flex gap-2">
                      {['#0f172a', '#1e293b', '#065f46', '#1e1b4b', '#7f1d1d', '#111827'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setConfig(prev => ({ ...prev, primaryColor: c }))}
                          className="w-8 h-8 rounded-lg border border-slate-700 hover:scale-110 transition-transform"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Logo Emblem Type
                  </label>
                  <div className="flex gap-2">
                    {[
                      { id: 'crown', label: '👑 Crown' },
                      { id: 'wine', label: '🍷 Dine' },
                      { id: 'hearts', label: '💍 Wed' },
                      { id: 'globe', label: '🌐 Global' },
                    ].map((lg) => (
                      <button
                        key={lg.id}
                        onClick={() => setConfig(prev => ({ ...prev, logoType: lg.id as any }))}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                          config.logoType === lg.id 
                            ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' 
                            : 'bg-slate-950/60 border-slate-800 text-slate-300'
                        }`}
                      >
                        {lg.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* QR Code integration */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-cyan-400" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Smart QR Code on Label</h4>
                      <p className="text-xs text-slate-400">Link guests instantly to your menu, Wi-Fi, RSVP, or website.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.enableQr}
                      onChange={(e) => setConfig(prev => ({ ...prev, enableQr: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                  </label>
                </div>

                {config.enableQr && (
                  <input
                    type="text"
                    value={config.qrUrl}
                    onChange={(e) => setConfig(prev => ({ ...prev, qrUrl: e.target.value }))}
                    placeholder="https://yourhotel.com/menu-wifi"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                )}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setActiveTab('bottle')}
                  className="px-6 py-3 rounded-xl font-semibold text-sm bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setActiveTab('water')}
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all flex items-center gap-2"
                >
                  Next: Water & Quantity <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Tab 3: Water & Quantity */}
          {activeTab === 'water' && (
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-white">Select Pure Water Source</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {[
                    { id: 'spring', name: 'Natural Alpine Spring', desc: 'Sourced from protected mountain aquifers, perfectly balanced minerals.' },
                    { id: 'sparkling', name: 'Crisp Sparkling Water', desc: 'Delicately carbonated for fine dining & refreshing palates.' },
                    { id: 'alkaline', name: 'Alkaline 9.5 pH', desc: 'Ionized pure water with electrolytes for health & wellness.' },
                    { id: 'electrolyte', name: 'Electrolyte Infused', desc: 'Enhanced with magnesium and potassium for peak performance.' },
                  ].map((w) => (
                    <div
                      key={w.id}
                      onClick={() => setConfig(prev => ({ ...prev, water: w.id as any }))}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        config.water === w.id 
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' 
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{w.name}</span>
                        {config.water === w.id && <Check className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-white">Order Quantity (Units)</label>
                  <span className="text-cyan-400 font-mono font-bold text-sm">{config.quantity} bottles</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="10000"
                  step="50"
                  value={config.quantity}
                  onChange={(e) => setConfig(prev => ({ ...prev, quantity: Number(e.target.value) }))}
                  className="w-full accent-cyan-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>250 (Min)</span>
                  <span>1,000</span>
                  <span>5,000</span>
                  <span>10,000+ (Best Value)</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">Estimated Total: <span className="text-cyan-400 text-xl font-extrabold ml-2">${totalPrice}</span></h4>
                  <p className="text-xs text-slate-400 mt-0.5">Unit Price: ${unitPrice.toFixed(2)} per bottle (Volume discount applied)</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={onOpenSampleModal}
                    className="flex-1 sm:flex-none py-3 px-4 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 transition-all text-center"
                  >
                    Request Sample (₹999)
                  </button>
                  <button
                    onClick={onOpenQuoteModal}
                    className="flex-1 sm:flex-none py-3 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    Get Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setActiveTab('label')}
                  className="px-6 py-3 rounded-xl font-semibold text-sm bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all"
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {/* Tab 4: AI Designer */}
          {activeTab === 'ai' && (
            <div className="bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200 shadow-xl shadow-purple-500/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Gemini AI Brand & Label Consultant</h3>
                  <p className="text-xs text-slate-400">Generate professional taglines, color schemes, and packaging descriptions instantly.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Industry / Venue Type
                  </label>
                  <select
                    value={aiIndustry}
                    onChange={(e) => setAiIndustry(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="Luxury Hotel & Palace Resort">Luxury Hotel & Palace Resort</option>
                    <option value="Fine Dining Restaurant">Fine Dining Restaurant</option>
                    <option value="Destination Wedding & Reception">Destination Wedding & Reception</option>
                    <option value="Corporate Conference & Gala">Corporate Conference & Gala</option>
                    <option value="Boutique Café & Spa">Boutique Café & Spa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Desired Vibe & Aesthetic
                  </label>
                  <input
                    type="text"
                    value={aiVibe}
                    onChange={(e) => setAiVibe(e.target.value)}
                    placeholder="e.g. Royal Rajasthani gold and navy"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <button
                onClick={handleRunAiConsultant}
                disabled={aiLoading}
                className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white hover:opacity-95 shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
              >
                {aiLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                {aiLoading ? 'AI is Crafting Your Brand Concept...' : 'Generate AI Brand Concept & Tagline'}
              </button>

              {aiSuggestion && (
                <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-800/50 space-y-3 animate-in fade-in duration-300">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">AI Suggested Tagline</span>
                    <p className="text-sm font-bold text-white mt-0.5">"{aiSuggestion.tagline}"</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">Design Concept Note</span>
                    <p className="text-xs text-slate-300 mt-0.5">{aiSuggestion.labelDescription}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">Smart QR Code Idea</span>
                    <p className="text-xs text-cyan-300 mt-0.5">{aiSuggestion.qrSuggestion}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
