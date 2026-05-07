'use client';
import { TrendingUp, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24"
      style={{
        background: '#F5F8FF',
      }}>

      {/* ── Background curved sweep ── */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[150%] left-[-50%] top-[-80%] rounded-[100%] bg-white/40" style={{ transform: 'rotate(-10deg)' }} />
        <div className="absolute w-[150%] h-full left-[-20%] top-[-40%] bg-linear-to-br from-[#E0ECFF]/60 to-[#FFFFFF]/0 rounded-full blur-3xl" />
        <div className="absolute w-full h-full right-[-10%] bottom-[-20%] bg-linear-to-tl from-[#E0ECFF]/60 to-[#FFFFFF]/0 rounded-full blur-3xl" />
      </div>

      {/* ── Floating metric card — top-left (Rotated) ── */}
      <div className="absolute top-24 left-1/2 ml-[-340px] md:ml-[-400px] lg:ml-[-460px] xl:ml-[-560px] hidden sm:flex animate-float z-10" style={{ transform: 'rotate(-8deg)' }}>
        <div className="bg-white rounded-xl px-5 py-3.5 flex flex-col items-start gap-1 w-36"
          style={{ boxShadow: '0 12px 40px rgba(13,27,42,0.06)', border: '1px solid rgba(232,241,255,0.8)' }}>
          <span className="text-3xl font-extrabold text-navy">350%</span>
          <span className="text-[9px] text-gray-400 leading-tight">Faster reporting<br />growth</span>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-blue-500" />
            </div>
            <div className="h-1 bg-blue-100 rounded-full w-8"></div>
          </div>
        </div>
      </div>

      {/* ── Floating metric card — right (Rotated) ── */}
      <div className="absolute top-72 right-1/2 mr-[-340px] md:mr-[-400px] lg:mr-[-460px] xl:mr-[-560px] hidden sm:flex animate-float-d z-10" style={{ transform: 'rotate(6deg)' }}>
        <div className="bg-white rounded-xl px-5 py-3.5 flex flex-col items-start gap-1 w-36"
          style={{ boxShadow: '0 12px 40px rgba(13,27,42,0.06)', border: '1px solid rgba(232,241,255,0.8)' }}>
          <div className="flex w-full justify-between items-start mb-1">
            <span className="text-[9px] text-gray-400 leading-tight">ROI in first<br />90 days</span>
            <div className="h-1 bg-blue-100 rounded-full w-4 mt-1"></div>
          </div>
          <div className="flex items-end gap-2 w-full">
            <span className="text-3xl font-extrabold text-navy leading-none">4.2x</span>
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mb-0.5">
              <BarChart3 className="w-3 h-3 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ CENTER CONTENT ═══════════ */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6 pt-10 pb-20">

        <h1 className="animate-fade-up text-navy font-extrabold mb-5 tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', lineHeight: 1.05 }}>
          Simplify Your Compliance <br />
          Program Into <span className="inline-flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-blue-600 mb-1" strokeWidth={3} />
            <span className="text-[#1e3a5f]">Revenue</span>
          </span> <br />
          Growth
        </h1>

        <p className="animate-fade-up-d1 text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-[600px] mx-auto mb-10">
          Turn wasted compliance spend into measurable growth — we help financial institutions convert regulatory requirements into strategic advantage and 3x ROI in just 90 days.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-d2 flex justify-center mb-20">
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-4">
            {/* Decorative Arrow */}
            <div className="absolute -left-20 -top-10 hidden md:block">
              <svg width="80" height="60" viewBox="0 0 100 100" fill="none" className="text-gray-300">
                <path d="M10 10 Q 30 80, 90 90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" strokeLinecap="round" />
                <path d="M80 85 L 90 90 L 85 95" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <button className="bg-navy text-white hover:bg-[#142a3e] px-8 h-[46px] rounded-full text-[13px] font-bold transition-all shadow-xl shadow-navy/10 relative z-10">
              Book Strategy call
            </button>
            <button className="bg-white text-navy border border-blue-soft hover:border-blue-mid px-8 h-[46px] rounded-full text-[13px] font-bold transition-all shadow-sm relative z-10">
              Prices
            </button>
          </div>
        </div>

        {/* Trust section */}
        <div className="animate-fade-up-d3 mt-10 overflow-hidden w-full relative">
          <p className="text-[10px] text-gray-400 font-semibold mb-6 uppercase tracking-wider relative z-10">
            Trusted by Leading Banks
          </p>

          {/* Fades for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#F5F8FF]/80 to-[#F5F8FF]/0 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#F5F8FF]/80 to-[#F5F8FF]/0 z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex items-center gap-16 px-8">
              {['JPMorgan Chase', 'Bank of America', 'Citigroup', 'Wells Fargo', 'Goldman Sachs', 'Morgan Stanley', 'HSBC', 'Barclays', 'Deutsche Bank'].map((bank, i) => (
                <span key={`bank-1-${i}`} className="font-bold text-[#2a303c] text-[15px] opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">
                  {bank}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-16 px-8">
              {['JPMorgan Chase', 'Bank of America', 'Citigroup', 'Wells Fargo', 'Goldman Sachs', 'Morgan Stanley', 'HSBC', 'Barclays', 'Deutsche Bank'].map((bank, i) => (
                <span key={`bank-2-${i}`} className="font-bold text-[#2a303c] text-[15px] opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">
                  {bank}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
