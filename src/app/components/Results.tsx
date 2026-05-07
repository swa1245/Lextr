import { TrendingUp, Clock, Globe, ArrowUpRight, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function Results() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-white">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/20 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-24 animate-fade-up">
          <div className="flex mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-100">
              <Activity className="w-3 h-3" />
              Consolidated Performance
            </span>
          </div>
          <h2 className="text-navy font-black tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 0.95 }}>
            Quantifiable <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">Platform Impact.</span>
          </h2>
        </div>

        {/* Unified Chart Layout */}
        <div className="bg-[#F8FAFF] rounded-[40px] border border-blue-100/50 p-8 md:p-16 relative overflow-hidden">

          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left: Metric Callouts */}
            <div className="lg:col-span-4 space-y-12 relative z-10">

              <div className="group transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-navy group-hover:text-blue-600 transition-colors">4.2x</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">ROI Growth</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Average return on investment realized by enterprise clients within the first 12 months.
                </p>
              </div>

              <div className="group transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-navy group-hover:text-blue-600 transition-colors">70%</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Faster Reporting</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Organizations reduce compliance reporting time from weeks to days with automated data aggregation.
                </p>
              </div>

              <div className="group transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-navy group-hover:text-blue-600 transition-colors">50+</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Jurisdictions</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Comprehensive real-time coverage across all major regulatory regimes worldwide.
                </p>
              </div>

            </div>

            {/* Right: The Single Massive Chart */}
            <div className="lg:col-span-8 relative h-[400px] md:h-[500px]">

              {/* Chart Legend */}
              <div className="absolute top-0 right-0 flex gap-6 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                  <span className="text-[10px] font-bold text-navy uppercase tracking-wider">Lextr Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Traditional Methods</span>
                </div>
              </div>

              {/* SVG Chart */}
              <svg viewBox="0 0 800 400" className="w-full h-full overflow-visible pt-12">
                {/* Y-Axis Label */}
                <text x="-200" y="-45" transform="rotate(-90)" fill="#94A3B8" className="text-[10px] font-bold uppercase tracking-widest">Performance Index</text>

                {/* Horizontal Grid Lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <g key={i}>
                    <line x1="0" y1={i * 100} x2="800" y2={i * 100} stroke="var(--color-blue-soft)" strokeWidth="1" />
                    <text x="-30" y={i * 100 + 4} fill="#94A3B8" className="text-[10px] font-medium">{100 - (i * 25)}%</text>
                  </g>
                ))}

                {/* Vertical Grid Lines & X-Axis Labels */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <g key={i}>
                    <line x1={i * 200} y1="0" x2={i * 200} y2="400" stroke="var(--color-blue-soft)" strokeWidth="1" />
                    <text x={i * 200} y="425" textAnchor="middle" fill="#94A3B8" className="text-[10px] font-bold uppercase tracking-wider">Phase 0{i + 1}</text>
                  </g>
                ))}

                {/* Traditional Line (Slow/Stagnant) */}
                <path
                  d="M0 350 L 200 340 L 400 330 L 600 325 L 800 315"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                />

                {/* Lextr Area fill */}
                <path
                  d="M0 350 Q 200 330, 400 180 T 800 20 L 800 400 L 0 400 Z"
                  fill="url(#area-grad)"
                  className="opacity-60"
                />

                {/* Lextr Line (Exponential Growth) */}
                <path
                  d="M0 350 Q 200 330, 400 180 T 800 20"
                  fill="none"
                  stroke="url(#chart-grad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Data Points with Data Labels */}
                <g className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
                  <circle cx="200" cy="297.5" r="6" fill="#2563EB" />
                  <text x="215" y="302" fill="#1e293b" className="text-[11px] font-bold">Integration</text>
                </g>

                <g className="animate-fade-up" style={{ animationDelay: '1s' }}>
                  <circle cx="400" cy="180" r="6" fill="#2563EB" />
                  <text x="415" y="185" fill="#1e293b" className="text-[11px] font-bold">70% Speed Peak</text>
                </g>

                <g className="animate-fade-up" style={{ animationDelay: '1.5s' }}>
                  <circle cx="600" cy="65" r="6" fill="#2563EB" />
                  <text x="615" y="70" fill="#1e293b" className="text-[11px] font-bold">ROI Maturity</text>
                </g>

                <g className="animate-fade-up" style={{ animationDelay: '2s' }}>
                  <circle cx="800" cy="20" r="10" fill="#2563EB" className="animate-pulse opacity-20" />
                  <circle cx="800" cy="20" r="6" fill="#2563EB" />
                  <text x="730" y="55" fill="#2563EB" className="text-[12px] font-black uppercase tracking-tighter">Global Scale</text>
                </g>

                {/* Performance Annotation */}
                <g className="animate-[fade-in_1s_ease-out_2.5s_forwards] opacity-0">
                  <path d="M 800 20 L 850 -20 L 920 -20" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 2" />
                  <text x="860" y="-35" fill="#2563EB" className="text-[14px] font-black">+420%</text>
                  <text x="860" y="-20" fill="#94A3B8" className="text-[9px] font-bold uppercase tracking-widest">Performance Spike</text>
                </g>

                <defs>
                  <linearGradient id="chart-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                  <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-20 pt-12 border-t border-blue-100/50 flex justify-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50/50 border border-blue-100/50">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-bold text-navy uppercase tracking-widest">Enterprise-Grade Accuracy: 99.9% Reliable</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
