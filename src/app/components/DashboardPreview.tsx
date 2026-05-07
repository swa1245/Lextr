import { BarChart3, ShieldCheck, Activity, Globe } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="bg-surface py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-reveal">
            <span className="section-label text-left">The Platform</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-black">
              Institutional-grade <br /> intelligence.
            </h2>
            <div className="space-y-6">
              {[
                { title: "Real-time Risk Engine", desc: "Monitor exposure across 40+ global jurisdictions simultaneously.", icon: Activity },
                { title: "Military-grade Security", desc: "AES-256 encryption with zero-trust architecture for all financial data.", icon: ShieldCheck },
                { title: "AI Regulatory Mapping", desc: "Automatically map internal policies to changing SEC and EU laws.", icon: Globe },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-blue-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mock Dashboard UI */}
          <div className="relative group animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
               <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400" />
                     <div className="w-3 h-3 rounded-full bg-yellow-400" />
                     <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Lextr Dashboard // v2.0</div>
               </div>
               <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="bg-blue-primary/5 p-4 rounded-xl border border-blue-primary/10">
                        <div className="text-xs font-bold text-blue-primary uppercase mb-2">Compliance Score</div>
                        <div className="text-3xl font-black text-black">99.8%</div>
                     </div>
                     <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <div className="text-xs font-bold text-green-600 uppercase mb-2">Risk Level</div>
                        <div className="text-3xl font-black text-green-600">Low</div>
                     </div>
                  </div>
                  <div className="space-y-4">
                     {[1, 2, 3].map(i => (
                        <div key={i} className="h-4 bg-gray-50 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-primary/20" style={{ width: `${40 + (i * 15)}%` }} />
                        </div>
                     ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
                     <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-primary" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Live Audit Stream...</span>
                     </div>
                     <button className="text-[10px] font-bold text-blue-primary uppercase hover:underline cursor-pointer">View Full Report</button>
                  </div>
               </div>
            </div>
            {/* Background decorative glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-indigo-500 rounded-2xl blur-2xl opacity-10 -z-10 group-hover:opacity-20 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
}
