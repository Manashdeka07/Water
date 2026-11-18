import React, { useEffect, useState } from 'react';
import { X, ClipboardList, Package, Clock, CheckCircle2, RefreshCw } from 'lucide-react';

interface AdminTrackerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminTracker: React.FC<AdminTrackerProps> = ({ isOpen, onClose }) => {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [samples, setSamples] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/quotes');
      const data = await res.json();
      setQuotes(data.quotes || []);
      setSamples(data.sampleOrders || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchOrders();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <ClipboardList className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Your Quotes & Sample Orders</h3>
              <p className="text-xs text-slate-400">Track status of your custom water bottle quote inquiries and sample kits.</p>
            </div>
          </div>
          <button
            onClick={fetchOrders}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        <div className="py-6 space-y-6">
          {/* Quotes Section */}
          <div>
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">Custom Bottle Quotes ({quotes.length})</h4>
            {quotes.length === 0 ? (
              <p className="text-xs text-slate-500 italic bg-slate-950 p-4 rounded-2xl border border-slate-800">No quote requests submitted yet.</p>
            ) : (
              <div className="space-y-3">
                {quotes.map((q) => (
                  <div key={q.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-cyan-400 text-xs font-bold">{q.id}</span>
                        <span className="bg-amber-500/10 text-amber-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-amber-500/20">{q.status}</span>
                      </div>
                      <h5 className="text-sm font-bold text-white">{q.companyName} ({q.customerName})</h5>
                      <p className="text-xs text-slate-400">
                        {q.config.quantity} units • {q.config.size} • {q.config.material.toUpperCase()} • {q.config.brandName}
                      </p>
                    </div>
                    <div className="text-right text-xs text-slate-400">
                      <span>{new Date(q.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sample Orders Section */}
          <div className="pt-4 border-t border-slate-800">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">Sample Kits ({samples.length})</h4>
            {samples.length === 0 ? (
              <p className="text-xs text-slate-500 italic bg-slate-950 p-4 rounded-2xl border border-slate-800">No sample kits requested yet.</p>
            ) : (
              <div className="space-y-3">
                {samples.map((s) => (
                  <div key={s.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-cyan-400 text-xs font-bold">{s.id}</span>
                        <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-cyan-500/20">{s.status}</span>
                      </div>
                      <h5 className="text-sm font-bold text-white">{s.name} ({s.venueType})</h5>
                      <p className="text-xs text-slate-400">Shipping to: {s.shippingAddress}, {s.city}</p>
                    </div>
                    <div className="text-right text-xs text-slate-400">
                      <span>{new Date(s.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
