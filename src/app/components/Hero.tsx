'use client';
import { TrendingUp, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12"
      style={{
        background: '#F5F8FF',
      }}>

      {/* ── Background curved sweep ── */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[150%] left-[-50%] top-[-80%] rounded-[100%] bg-white/40" style={{ transform: 'rotate(-10deg)' }} />
        <div className="absolute w-[150%] h-full left-[-20%] top-[-40%] bg-linear-to-br from-[#E0ECFF]/60 to-[#FFFFFF]/0 rounded-full blur-3xl" />
        <div className="absolute w-full h-full right-[-10%] bottom-[-20%] bg-linear-to-tl from-[#E0ECFF]/60 to-[#FFFFFF]/0 rounded-full blur-3xl" />
      </div>



      {/* ═══════════ CENTER CONTENT ═══════════ */}
      <div className="relative z-20 text-center w-full max-w-4xl mx-auto px-6 mt-12 md:mt-0 overflow-hidden sm:overflow-visible">

        <h1 className="animate-fade-up text-navy font-extrabold mb-6 tracking-tight wrap-break-word"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1 }}>
          Compliance <br />
          Into{' '}
          <span className="inline-flex items-center justify-center gap-2 align-middle -mt-1 md:-mt-2">
            <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-blue-600 shrink-0" strokeWidth={3} />
            <span className="text-[#1e3a5f]">Revenue</span>
          </span> <br />
          Growth
        </h1>

        <p className="animate-fade-up-d1 text-gray-500 text-base md:text-lg leading-relaxed max-w-[600px] mx-auto mb-10 px-4 sm:px-0">
          Turn wasted compliance spend into measurable growth — we help financial institutions convert regulatory requirements into strategic advantage.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-d2 flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 w-full">
          <button className="bg-navy text-white hover:bg-[#142a3e] w-full max-w-[280px] sm:w-auto sm:max-w-none px-8 md:px-10 h-[52px] rounded-full text-sm font-bold transition-all shadow-xl shadow-navy/10 cursor-pointer">
            Book Strategy call
          </button>
          <button className="bg-white text-navy border border-blue-soft hover:border-blue-mid w-full max-w-[280px] sm:w-auto sm:max-w-none px-8 md:px-10 h-[52px] rounded-full text-sm font-bold transition-all shadow-sm cursor-pointer">
            View Prices
          </button>
        </div>

        {/* Trust section */}
        <div className="animate-fade-up-d3 mt-10 overflow-hidden w-full relative pb-10">
          <p className="text-[10px] text-gray-400 font-bold mb-8 uppercase tracking-[0.2em] relative z-10">
            Trusted by Industry Leaders
          </p>

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex items-center gap-12 md:gap-20 px-8">
              {['JPMorgan', 'Goldman Sachs', 'Morgan Stanley', 'Citigroup', 'HSBC', 'Barclays', 'Deutsche Bank'].map((bank, i) => (
                <span key={`bank-1-${i}`} className="font-bold text-[#2a303c] text-lg md:text-xl opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap">
                  {bank}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-12 md:gap-20 px-8">
              {['JPMorgan', 'Goldman Sachs', 'Morgan Stanley', 'Citigroup', 'HSBC', 'Barclays', 'Deutsche Bank'].map((bank, i) => (
                <span key={`bank-2-${i}`} className="font-bold text-[#2a303c] text-lg md:text-xl opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap">
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
