"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'Case Studies', 'Blog'];

  const isActive = (item: string) => {
    if (item === 'Home') return pathname === '/';
    if (item === 'Blog') return pathname === '/blog';
    if (item === 'Case Studies') return pathname === '/case-studies';
    return false;
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-1000 bg-[#F5F8FF]/80 backdrop-blur-2xl border-b border-blue-soft transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-1001">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <div className="w-8 h-8 rounded-[10px] bg-[#111] flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
            <div className="w-3 h-3 bg-white rounded-sm -rotate-45" />
          </div>
          <span className="text-xl font-bold text-[#111] tracking-tight ml-1">Lextr</span>
        </Link>

        {/* Center Pill Nav (Desktop) */}
        <div className="hidden lg:flex items-center bg-gray-100/80 rounded-full p-1.5 border border-gray-200/50 shadow-inner">
          {navItems.map((item) => {
            let href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
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

        {/* Right CTA Button (Desktop) */}
        <Link
          href="/book"
          className="group hidden lg:flex items-center bg-[#18181B] hover:bg-black text-white pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-xl shadow-black/10"
        >
          <span className="text-[13px] font-semibold tracking-wide mr-3">Book Strategy</span>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
            <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition-colors relative z-1001"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 top-20 bg-navy/20 backdrop-blur-sm z-985 cursor-pointer transition-opacity duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Side Drawer */}
      <div 
        className={`fixed top-20 right-0 bottom-0 w-[80vw] sm:w-1/2 bg-white z-990 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col shadow-[-20px_0_80px_rgba(13,27,42,0.1)] border-l border-blue-soft ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col px-6 sm:px-8 pt-10 gap-8">
          {navItems.map((item, i) => {
            let href = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
            const active = isActive(item);
            return (
              <Link
                key={item}
                href={href}
                onClick={closeMenu}
                className={`text-3xl sm:text-4xl font-black tracking-tighter transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${
                  active ? 'text-blue-600' : 'text-navy hover:text-blue-600'
                }`}
                style={{ transitionDelay: `${isMobileMenuOpen ? i * 100 : 0}ms` }}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Footer CTA */}
        <div className={`mt-auto p-6 sm:p-8 border-t border-gray-100 bg-gray-50/50 transition-all duration-500 delay-300 transform ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Link
            href="/book"
            onClick={closeMenu}
            className="flex items-center justify-between bg-navy text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl w-full shadow-xl shadow-navy/20 active:scale-[0.98] transition-all"
          >
            <span className="text-base sm:text-lg font-bold">Book Strategy</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 ml-2">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
