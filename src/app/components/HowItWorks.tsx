import { Plug, Brain, Bell, CheckSquare, Shield } from 'lucide-react';

const steps = [
  { num: '1', icon: Plug, title: 'Connect Your Data', desc: 'Integrate with your existing systems in minutes.' },
  { num: '2', icon: Brain, title: 'AI Analyzes', desc: 'Our AI scans the regulatory landscape across jurisdictions.' },
  { num: '3', icon: Bell, title: 'Smart Alerts', desc: 'Receive personalized notifications for changes that matter.' },
  { num: '4', icon: CheckSquare, title: 'Report Ready', desc: 'Auto-generated compliance reports, always audit-ready.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden bg-white">

      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-linear-to-bl from-blue-soft/50 to-transparent rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-[#E0ECFF]/40 to-transparent rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-100">
              How It Works
            </span>
          </div>
          <h2 className="text-navy font-extrabold tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            Automate Compliance in <br />
            <span className="text-blue-600">Four Simple Steps</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Deploy our AI in minutes, not months. Experience a seamless transition to hands-free compliance operations.
          </p>
        </div>

        {/* Desktop Orbital Layout */}
        <div className="hidden lg:flex relative w-[600px] h-[600px] mx-auto items-center justify-center mt-48 mb-32 z-10">

          {/* Massive Central Rings */}
          <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-blue-200 animate-[spin_60s_linear_infinite] z-0" />
          <div className="absolute inset-0 m-auto w-[450px] h-[450px] rounded-full border border-blue-100 animate-[spin_40s_linear_infinite_reverse] z-0" />

          {/* Center Hub */}
          <div className="relative w-40 h-40 bg-linear-to-br from-blue-500 to-blue-700 rounded-full flex flex-col items-center justify-center shadow-[0_0_80px_rgba(37,99,235,0.3)] z-10">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-50 animate-pulse" />
            <Shield className="w-12 h-12 text-white mb-1 relative z-10" strokeWidth={1.5} />
            <span className="text-white font-bold tracking-widest text-xs relative z-10">LEXTR AI</span>
          </div>

          {/* Node 1: Top Left */}
          {/* Anchor point at 14.65% */}
          <div className="absolute top-[14.65%] left-[14.65%] w-0 h-0 flex items-end justify-end z-20 group">
            {/* Connection Dot */}
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-[0_0_10px_rgba(37,99,235,0.3)] z-50 translate-x-1/2 translate-y-1/2" />
            {/* Card pointing bottom-right to dot */}
            <div className="w-[340px] min-w-[340px] shrink-0 mr-8 mb-8 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-[0_20px_60px_rgba(13,27,42,0.06)] border border-blue-soft hover:border-blue-300 transition-all text-right relative">
              {/* Connecting Line */}
              <div className="absolute -bottom-8 -right-8 w-12 h-px bg-linear-to-r from-transparent to-blue-200 rotate-45 origin-bottom-right" />

              <div className="flex flex-col items-end mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                  <Plug className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy whitespace-nowrap">Connect Your Data</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Integrate with your existing systems in minutes.</p>
              <div className="absolute top-4 left-4 text-4xl font-black text-[#F5F8FF]">01</div>
            </div>
          </div>

          {/* Node 2: Top Right */}
          <div className="absolute top-[14.65%] right-[14.65%] w-0 h-0 flex items-end justify-start z-20 group">
            {/* Connection Dot */}
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-[0_0_10px_rgba(37,99,235,0.3)] z-50 -translate-x-1/2 translate-y-1/2" />
            {/* Card pointing bottom-left to dot */}
            <div className="w-[340px] min-w-[340px] shrink-0 ml-8 mb-8 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-[0_20px_60px_rgba(13,27,42,0.06)] border border-blue-soft hover:border-blue-300 transition-all text-left relative">
              {/* Connecting Line */}
              <div className="absolute -bottom-8 -left-8 w-12 h-px bg-linear-to-l from-transparent to-blue-200 -rotate-45 origin-bottom-left" />

              <div className="flex flex-col items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy whitespace-nowrap">AI Analyzes</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Our AI scans the regulatory landscape across jurisdictions.</p>
              <div className="absolute top-4 right-4 text-4xl font-black text-[#F5F8FF]">02</div>
            </div>
          </div>

          {/* Node 3: Bottom Left */}
          <div className="absolute bottom-[14.65%] left-[14.65%] w-0 h-0 flex items-start justify-end z-20 group">
            {/* Connection Dot */}
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-[0_0_10px_rgba(37,99,235,0.3)] z-50 translate-x-1/2 -translate-y-1/2" />
            {/* Card pointing top-right to dot */}
            <div className="w-[340px] min-w-[340px] shrink-0 mr-8 mt-8 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-[0_20px_60px_rgba(13,27,42,0.06)] border border-blue-soft hover:border-blue-300 transition-all text-right relative">
              {/* Connecting Line */}
              <div className="absolute -top-8 -right-8 w-12 h-px bg-linear-to-r from-transparent to-blue-200 -rotate-45 origin-top-right" />

              <div className="flex flex-col items-end mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy whitespace-nowrap">Smart Alerts</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Receive personalized notifications for changes that matter.</p>
              <div className="absolute top-4 left-4 text-4xl font-black text-[#F5F8FF]">03</div>
            </div>
          </div>

          {/* Node 4: Bottom Right */}
          <div className="absolute bottom-[14.65%] right-[14.65%] w-0 h-0 flex items-start justify-start z-20 group">
            {/* Connection Dot */}
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-[0_0_10px_rgba(37,99,235,0.3)] z-50 -translate-x-1/2 -translate-y-1/2" />
            {/* Card pointing top-left to dot */}
            <div className="w-[340px] min-w-[340px] shrink-0 ml-8 mt-8 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-[0_20px_60px_rgba(13,27,42,0.06)] border border-blue-soft hover:border-blue-300 transition-all text-left relative">
              {/* Connecting Line */}
              <div className="absolute -top-8 -left-8 w-12 h-px bg-linear-to-l from-transparent to-blue-200 rotate-45 origin-top-left" />

              <div className="flex flex-col items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy whitespace-nowrap">Report Ready</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Auto-generated compliance reports, always audit-ready.</p>
              <div className="absolute top-4 right-4 text-4xl font-black text-[#F5F8FF]">04</div>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Fallback (Grid) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 relative z-10">
          {steps.map((step) => (
            <div key={step.num} className="bg-white border border-blue-soft rounded-4xl p-8 shadow-[0_12px_40px_rgba(13,27,42,0.04)] relative">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-5xl font-black text-[#F5F8FF]">0{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
