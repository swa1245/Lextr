"use client";

import { useState, useEffect } from 'react';
import { FileText, Network, Timer, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: FileText,
    title: 'Scattered Documents',
    desc: 'Compliance data spread across dozens of systems with no unified view.',
  },
  {
    icon: Network,
    title: 'Tangled Complexity',
    desc: 'Overlapping jurisdictional requirements create impossible-to-manage webs.',
  },
  {
    icon: Timer,
    title: 'Lost Time & Resources',
    desc: 'Thousands of hours burned on manual processes instead of strategic work.',
  },
];

export default function ChallengeSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setMounted(true);
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  return (
    <section id="challenge" className="py-20 md:py-32 relative overflow-hidden bg-[#FAFBFE]">

      {/* Background Ambience (Light Theme) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="animate-fade-up z-10 relative">
            <div className="flex mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-100 backdrop-blur-sm">
                <AlertTriangle className="w-4 h-4" />
                The Problem
              </span>
            </div>
            <h2 className="text-navy font-extrabold tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1 }}>
              Compliance is <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">Broken & Costly.</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Organizations waste thousands of hours manually tracking requirements. Legacy systems are slow, spreadsheets are error-prone, and fines are devastating.
            </p>
            <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-transparent rounded-full" />
          </div>

          {/* Right: 3D Isometric Stacking Cards (Desktop) / Vertical List (Mobile) */}
          <div className="relative h-auto lg:h-[600px] w-full flex flex-col gap-6 lg:block" style={{ perspective: '1200px' }}>

            {/* Ambient Back Glow for the 3D stack */}
            <div className="absolute w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block" />

            {problems.map((item, i) => (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="lg:absolute lg:top-[38%] lg:-left-2 xl:top-[35%] xl:left-24 w-full lg:w-[380px] xl:w-[400px] cursor-pointer"
                style={{
                  transform: mounted && isDesktop
                    ? (hoveredIndex === i
                      ? `rotateY(0deg) rotateX(0deg) translateZ(280px) translateY(${(i - 1) * 20}px) translateX(20px)`
                      : `rotateY(-25deg) rotateX(15deg) translateZ(${100 - (i * 90)}px) translateY(${i * 90 - 90}px) translateX(${i * 45 - 22}px)`)
                    : 'none',
                  zIndex: hoveredIndex === i ? 50 : 30 - i,
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                {/* The Interactive Card Surface */}
                <div className={`w-full bg-white/95 backdrop-blur-xl border rounded-[1.25rem] p-5 md:p-6 shadow-[-10px_10px_30px_rgba(13,27,42,0.04)] lg:shadow-[-20px_20px_60px_rgba(13,27,42,0.06)] transition-all duration-500 ${hoveredIndex === i ? 'border-blue-500 shadow-[-30px_30px_80px_rgba(37,99,235,0.2)] lg:scale-105' : 'border-blue-soft'
                  }`}>

                  <div className="flex items-start gap-4 md:gap-5 relative z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10"
                      style={{ background: 'linear-gradient(135deg, #E8F1FF, #D4E5FF)' }}>
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-navy text-base md:text-lg mb-0.5 md:mb-1 transition-colors duration-300 ${hoveredIndex === i ? 'text-blue-600' : ''}`}>{item.title}</h3>
                      <p className="text-[13px] md:text-sm text-gray-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
