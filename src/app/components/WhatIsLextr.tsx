import { ShieldCheck, Zap, Lock } from "lucide-react";

export default function WhatIsLextr() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#FAFBFE]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-16">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-6">
              What is Lextr?
            </h2>
            <button className="bg-navy text-white hover:bg-[#142a3e] px-8 h-[46px] rounded-full text-[13px] font-bold transition-all shadow-xl shadow-navy/10 cursor-pointer">
              Explore now
            </button>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 text-xl leading-relaxed font-medium">
              Lextr is an AI-powered compliance platform that helps your organization 
              stay ahead of regulations while turning compliance workflows into a 
              competitive advantage.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Large Card */}
          <div className="md:col-span-6 bg-linear-to-br from-blue-soft to-blue-mid rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col min-h-[340px] shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-navy z-10 max-w-[280px]">
              Compliance that scales
            </h3>
            
            <p className="text-navy/70 text-sm mt-auto max-w-[280px] z-10">
              Automate policy enforcement as your business grows. Earn back wasted 
              hours as our AI is deployed into high-performing regulatory checks.
            </p>

            {/* Decorative Graphic (resembling the coin/flower) */}
            <div className="absolute right-0 bottom-0 w-64 h-64 translate-x-12 translate-y-12">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl"></div>
              <ShieldCheck className="w-full h-full text-blue-500 opacity-90 drop-shadow-2xl" strokeWidth={1} />
            </div>
          </div>

          {/* Dark Card 1 */}
          <div className="md:col-span-3 bg-navy rounded-3xl p-8 flex flex-col min-h-[340px] shadow-xl shadow-navy/10">
            <h3 className="text-[22px] leading-tight font-bold text-white mb-4">
              Always secure, <br/>always compliant
            </h3>
            <p className="text-white/60 text-sm mt-auto">
              Stay fully audit-ready with instant access to your compliance posture — 
              no blind spots or delays.
            </p>
          </div>

          {/* Dark Card 2 */}
          <div className="md:col-span-3 bg-navy rounded-3xl p-8 flex flex-col min-h-[340px] shadow-xl shadow-navy/10">
            <h3 className="text-[22px] leading-tight font-bold text-white mb-4">
              100% <br/>hands-free
            </h3>
            <p className="text-white/60 text-sm mt-auto">
              No need to manage policies manually. Lextr works entirely in the 
              background for you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
