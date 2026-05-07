"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, ShieldCheck } from "lucide-react";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<null | 'privacy' | 'terms' | 'security' | 'gdpr'>(null);

  const handleLegalClick = (e: React.MouseEvent, type: any) => {
    e.preventDefault();
    setActiveModal(type);
  };

  return (
    <footer className="bg-[#EBF2FF] pt-32 pb-20 relative overflow-hidden border-t border-blue-soft">

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-100/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Large CTA Section */}
        <div className="flex flex-col items-center text-center mb-32">
          <h2 className="text-navy font-black text-5xl md:text-7xl tracking-tighter mb-12 animate-fade-up">
            Ready to <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">Scale Smart?</span>
          </h2>
          <Link
            href="/book"
            className="group flex items-center bg-[#18181B] hover:bg-black text-white pl-10 pr-3 py-3 rounded-full transition-all duration-300 shadow-2xl shadow-black/20"
          >
            <span className="text-base font-bold tracking-wide mr-4">Book Your Strategy Call</span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
            </div>
          </Link>
        </div>

        {/* Main Footer Content: Restored Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">

          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-8">
              <div className="w-10 h-10 rounded-[12px] bg-[#111] flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                <div className="w-4 h-4 bg-white rounded-sm -rotate-45" />
              </div>
              <span className="text-2xl font-bold text-[#111] tracking-tight ml-1">Lextr</span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-8 font-medium">
              Compliance Reimagined. AI-powered compliance infrastructure for the world's leading financial institutions.
            </p>
            <div className="flex gap-4">
              {[FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-navy mb-8">Product</h4>
            <ul className="space-y-4">
              {[
                { name: 'Features', href: '/features' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Security', href: '/security' },
                { name: 'Roadmap', href: '/roadmap' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-600 font-bold transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-navy mb-8">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-blue-600 font-bold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-navy mb-8">Legal</h4>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', type: 'privacy' },
                { name: 'Terms of Service', type: 'terms' },
                { name: 'Security', type: 'security' },
                { name: 'GDPR Compliance', type: 'gdpr' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => handleLegalClick(e, link.type)}
                    className="text-sm text-gray-500 hover:text-blue-600 font-bold transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-blue-200/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            © 2025 Lextr Platform. Precision Compliance Systems.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-blue-600" />
              Enterprise Secure
            </span>
            <span className="text-blue-100">|</span>
            <span className="flex items-center gap-2">
              <Globe className="w-3 h-3" />
              Global HQ
            </span>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        type="privacy"
      />
      <LegalModal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Service"
        type="terms"
      />
      <LegalModal
        isOpen={activeModal === 'security'}
        onClose={() => setActiveModal(null)}
        title="Security Infrastructure"
        type="security"
      />
      <LegalModal
        isOpen={activeModal === 'gdpr'}
        onClose={() => setActiveModal(null)}
        title="GDPR Compliance"
        type="gdpr"
      />
    </footer>
  );
}
