"use client";

import { X, ShieldCheck, FileText, Lock, Scale } from "lucide-react";
import { useEffect } from "react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'privacy' | 'terms' | 'security' | 'gdpr';
}

const content = {
  privacy: {
    icon: Lock,
    text: `
      ## Privacy Policy
      Last updated: May 2025

      At Lextr, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.

      ### 1. Data Collection
      We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact support.

      ### 2. Data Usage
      Your data is used to provide, maintain, and improve our services, develop new features, and protect Lextr and our users.

      ### 3. Data Security
      We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
    `
  },
  terms: {
    icon: FileText,
    text: `
      ## Terms of Service
      Last updated: May 2025

      By using Lextr, you agree to these terms. Please read them carefully.

      ### 1. Acceptance of Terms
      By accessing our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.

      ### 2. Use License
      Permission is granted to temporarily download one copy of the materials on Lextr's website for personal, non-commercial transitory viewing only.

      ### 3. Limitations
      In no event shall Lextr or its suppliers be liable for any damages arising out of the use or inability to use the materials on Lextr's website.
    `
  },
  security: {
    icon: ShieldCheck,
    text: `
      ## Security Overview
      Enterprise-Grade Protection

      Lextr is built with security at its core. We employ multiple layers of protection to ensure your compliance data remains safe.

      ### 1. Encryption
      All data is encrypted at rest using AES-256 and in transit via TLS 1.3.

      ### 2. Infrastructure
      Our systems are hosted in SOC2 Type II compliant data centers with 24/7 monitoring and physical security.

      ### 3. Compliance
      We undergo regular third-party security audits and penetration testing to maintain our high standards.
    `
  },
  gdpr: {
    icon: Scale,
    text: `
      ## GDPR Compliance
      European Data Protection

      Lextr is fully committed to compliance with the General Data Protection Regulation (GDPR).

      ### 1. Data Processing
      We act as a data processor for the personal data our customers upload to our platform.

      ### 2. User Rights
      We provide tools and processes to help our customers fulfill requests from data subjects (Right to Access, Right to Erasure, etc.).

      ### 3. Data Residency
      Users can specify their preferred data residency region to meet local regulatory requirements.
    `
  }
};

export default function LegalModal({ isOpen, onClose, title, type }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const Icon = content[type].icon;

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/20">
        
        {/* Header */}
        <div className="bg-[#F5F8FF] p-6 md:p-8 flex items-center justify-between border-b border-blue-50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm text-blue-600">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-navy font-black text-xl tracking-tight">{title}</h3>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">Lextr Legal Department</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-navy hover:rotate-90 transition-all duration-300 border border-gray-100 shadow-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="prose prose-sm max-w-none prose-navy">
             {content[type].text.split('\n').map((line, i) => {
               if (line.trim().startsWith('##')) {
                 return <h2 key={i} className="text-2xl font-black text-navy mb-6 mt-2">{line.replace('##', '').trim()}</h2>;
               }
               if (line.trim().startsWith('###')) {
                 return <h3 key={i} className="text-lg font-bold text-navy mb-3 mt-8">{line.replace('###', '').trim()}</h3>;
               }
               if (line.trim().length === 0) return <br key={i} />;
               return <p key={i} className="text-gray-500 leading-relaxed mb-4">{line.trim()}</p>;
             })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 flex justify-center border-t border-gray-100">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-navy text-white rounded-full text-sm font-bold hover:bg-black transition-all cursor-pointer shadow-lg shadow-navy/10"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
}
