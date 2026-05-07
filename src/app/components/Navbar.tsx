"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const navItems = ['Home', 'Case Studies', 'Blog'];

  const isActive = (item: string) => {
    if (item === 'Home') return pathname === '/';
    if (item === 'Blog') return pathname === '/blog';
    if (item === 'Case Studies') return pathname === '/case-studies';
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F5F8FF]/80 backdrop-blur-2xl border-b border-blue-soft">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-[10px] bg-[#111] flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
            <div className="w-3 h-3 bg-white rounded-sm -rotate-45" />
          </div>
          <span className="text-xl font-bold text-[#111] tracking-tight ml-1">Lextr</span>
        </Link>

        {/* Center Pill Nav */}
        <div className="hidden lg:flex items-center bg-gray-100/80 rounded-full p-1.5 border border-gray-200/50 shadow-inner">
          {navItems.map((item) => {
            let href = '#';
            if (item === 'Home') href = '/';
            else if (item === 'Blog') href = '/blog';
            else if (item === 'Case Studies') href = '/case-studies';
            else if (item === 'Services') href = '/#benefits';
            else if (item === 'Pricing') href = '/#pricing';

            const active = isActive(item);

            return (
              <Link
                key={item}
                href={href}
                className={`text-[13px] px-5 py-2 rounded-full transition-all duration-300 ${active
                  ? 'bg-white text-[#111] font-bold shadow-[0_2px_10px_rgba(0,0,0,0.06)]'
                  : 'text-gray-500 font-medium hover:text-[#111] hover:bg-white/50'
                  }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Button */}
        <Link
          href="/book"
          className="group hidden md:flex items-center bg-[#18181B] hover:bg-black text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-xl shadow-black/10"
        >
          <span className="text-[13px] font-semibold tracking-wide mr-3">Book Strategy</span>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
            <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
          </div>
        </Link>

        {/* Mobile menu fallback */}
        <div className="lg:hidden bg-gray-100 p-2 rounded-full cursor-pointer">
          <div className="w-6 h-0.5 bg-black mb-1.5 rounded-full" />
          <div className="w-4 h-0.5 bg-black rounded-full" />
        </div>

      </div>
    </nav>
  );
}
