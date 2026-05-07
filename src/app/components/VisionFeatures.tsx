import { MonitorDot, FileCheck, Globe, TrendingUp, BarChart3, Network } from 'lucide-react';

const features = [
  {
    icon: MonitorDot,
    title: 'Pipeline Acceleration',
    desc: 'Convert compliance monitoring into streamlined workflows with measurable impact on your bottom line.',
    visual: {
      type: 'dashboard',
      items: [
        { label: 'Dashboard Pipeline', value: '94%' },
        { label: 'Smart Analysis', value: 'Active' },
      ],
    },
  },
  {
    icon: BarChart3,
    title: 'Growth Metrics',
    desc: 'Track and optimize key performance indicators that matter to your C-Suite: adoption rates, retention, and revenue impact.',
    visual: {
      type: 'chart',
      value: '$81,355.49',
    },
  },
  {
    icon: Network,
    title: 'Regulatory Network',
    desc: 'Drive measurable increases in compliance coverage, documentation traffic, and regulatory alignment with targeted AI strategies.',
    visual: {
      type: 'network',
    },
  },
];

export default function VisionFeatures() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-100">
              Platform Capabilities
            </span>
          </div>
          <h2 className="text-navy font-extrabold tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Compliance That Delivers<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">Measurable Results.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            We help financial institutions transform their compliance efforts into measurable business outcomes that matter to the C-Suite.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div key={feat.title}
              className="group relative bg-navy rounded-[40px] overflow-hidden transition-all duration-500 animate-fade-up shadow-xl shadow-navy/5"
              style={{ animationDelay: `${i * 0.1}s` }}>

              {/* Visual area (top of card) */}
              <div className="h-56 bg-white/[0.03] p-8 flex items-center justify-center border-b border-white/5 overflow-hidden relative">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                </div>

                {feat.visual.type === 'dashboard' && (
                  <div className="bg-[#0A1620] rounded-2xl p-5 w-full max-w-[220px] shadow-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                        <MonitorDot className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span className="text-[11px] font-bold text-white tracking-tight">System Status</span>
                    </div>
                    {feat.visual.items?.map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                        <span className="text-[10px] text-white/40">{item.label}</span>
                        <span className={`text-[10px] font-bold ${item.value === 'Active' ? 'text-green-400' : 'text-blue-400'}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {feat.visual.type === 'chart' && (
                  <div className="bg-[#0A1620] rounded-2xl p-5 w-full max-w-[220px] shadow-2xl border border-white/10">
                    <div className="text-[10px] text-white/40 font-medium mb-1">Total Impact</div>
                    <div className="text-xl font-extrabold text-white mb-4 tracking-tight">{feat.visual.value}</div>
                    <div className="flex items-end gap-1.5 h-20">
                      {[30, 45, 35, 60, 50, 75, 65, 85, 80, 95].map((h, j) => (
                        <div key={j} className="flex-1 rounded-t-md"
                          style={{
                            height: `${h}%`,
                            background: j >= 7
                              ? 'linear-gradient(to top, #3B82F6, #93C5FD)'
                              : 'linear-gradient(to top, rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
                          }} />
                      ))}
                    </div>
                  </div>
                )}

                {feat.visual.type === 'network' && (
                  <div className="bg-[#0A1620] rounded-2xl p-5 w-full max-w-[220px] shadow-2xl border border-white/10">
                    <div className="text-[10px] text-white/40 font-medium mb-3">Regulatory Sync</div>
                    <svg viewBox="0 0 160 80" className="w-full">
                      {/* Lines */}
                      <line x1="30" y1="20" x2="80" y2="15" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <line x1="80" y1="15" x2="130" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <line x1="30" y1="20" x2="50" y2="55" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <line x1="80" y1="15" x2="50" y2="55" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 2" />
                      <line x1="80" y1="15" x2="110" y2="60" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 2" />
                      <line x1="130" y1="25" x2="110" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      {/* Nodes */}
                      <circle cx="30" cy="20" r="5" fill="rgba(59,130,246,0.1)" stroke="#3B82F6" strokeWidth="1" />
                      <circle cx="80" cy="15" r="7" fill="#3B82F6" stroke="#2563EB" strokeWidth="1" />
                      <circle cx="130" cy="25" r="4" fill="rgba(59,130,246,0.1)" stroke="#3B82F6" strokeWidth="1" />
                      <circle cx="50" cy="55" r="6" fill="rgba(255,255,255,0.05)" stroke="#3B82F6" strokeWidth="1" />
                      <circle cx="110" cy="60" r="5" fill="rgba(59,130,246,0.1)" stroke="#3B82F6" strokeWidth="1" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Text content */}
              <div className="p-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                  <feat.icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-2xl mb-4">{feat.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-medium">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
