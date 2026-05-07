"use client";

import { X, Code2, Cpu, Terminal, Zap, BookOpen } from "lucide-react";
import { useEffect } from "react";

interface TechnicalDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechnicalDocsModal({ isOpen, onClose }: TechnicalDocsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10000 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-navy-dark rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 border border-white/10">
        
        {/* Header */}
        <div className="bg-navy/50 p-8 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 text-white">
              <Code2 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-white font-black text-2xl tracking-tight">API Documentation <span className="text-blue-400 ml-2">v4.2-beta</span></h3>
              <p className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.2em] mt-1">Institutional Integration Layer</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:rotate-90 transition-all duration-300 border border-white/10 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row h-[60vh]">
          {/* Sidebar */}
          <div className="w-full lg:w-64 bg-black/20 p-6 border-r border-white/5 space-y-2 overflow-y-auto">
            {['Introduction', 'Authentication', 'Webhooks', 'Real-time SDK', 'Rate Limits', 'Security Protocols'].map((item) => (
              <button key={item} className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-white/60 hover:text-white hover:bg-white/5 transition-all">
                {item}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-black/10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <Terminal className="w-3 h-3 text-blue-400" />
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Endpoint Status: Operational</span>
              </div>
              
              <h2 className="text-3xl font-black text-white mb-6">Real-time Compliance Stream</h2>
              <p className="text-white/60 leading-relaxed mb-8 font-medium">
                The Lextr Core API allows institutions to stream regulatory updates directly into their existing infrastructure via WebSocket Secure (WSS) or high-frequency REST polling.
              </p>

              <div className="space-y-10">
                <section>
                  <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Quick Integration
                  </h4>
                  <div className="bg-black/40 rounded-2xl p-6 font-mono text-xs text-blue-300 border border-white/5">
                    <p className="opacity-40 mb-2">// Initialize Lextr SDK</p>
                    <p><span className="text-purple-400">const</span> lextr = <span className="text-purple-400">new</span> LextrClient({`{`}</p>
                    <p className="pl-4">apiKey: <span className="text-orange-400">'LEXTR_PROD_8842'</span>,</p>
                    <p className="pl-4">environment: <span className="text-orange-400">'institutional'</span></p>
                    <p>{`}`});</p>
                    <br />
                    <p className="opacity-40 mb-2">// Subscribe to global regulatory drift</p>
                    <p>lextr.onComplianceUpdate((drift) ={`>`} {`{`}</p>
                    <p className="pl-4">console.log(<span className="text-orange-400">'Alert Triggered:'</span>, drift.severity);</p>
                    <p>{`}`});</p>
                  </div>
                </section>

                <section>
                  <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> Hardware Acceleration
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Our API utilizes FPGA-accelerated nodes to ensure processing latency remains under 120ms, even during peak market volatility or large-scale regulatory releases.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-navy/30 flex items-center justify-between border-t border-white/5">
          <div className="flex items-center gap-3 text-white/40 text-xs font-bold">
            <BookOpen className="w-4 h-4" />
            Full documentation available for verified partners.
          </div>
          <button 
            onClick={onClose}
            className="px-10 py-4 bg-white text-navy rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all cursor-pointer shadow-xl"
          >
            Access Sandbox
          </button>
        </div>

      </div>
    </div>
  );
}
