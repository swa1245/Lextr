"use client";

import React from 'react';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronRight, 
  Briefcase, 
  Search, 
  Wallet, 
  Users, 
  Rocket, 
  FileText,
  BarChart3
} from 'lucide-react';

const CASE_PROJECTS = [
  {
    id: 1,
    title: "Tax Management",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=600",
    icon: Search,
    darkText: "Automating complex tax reporting workflows for multi-national financial entities.",
    lightText: "Increased reporting accuracy by 99% while reducing manual hours by 400+ monthly.",
    bgColor: "bg-white"
  },
  {
    id: 2,
    title: "Business Plan",
    category: "Growth Strategies",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    icon: Briefcase,
    darkText: "Strategic compliance architecture for rapid-scale fintech startups entering new markets.",
    lightText: "Successfully launched across 4 new regulatory zones in less than 90 days.",
    bgColor: "bg-[#F3F0FF]"
  },
  {
    id: 3,
    title: "Company Budget",
    category: "Book Keeping",
    image: "https://images.unsplash.com/photo-1454165833762-02ad50e8958d?auto=format&fit=crop&q=80&w=600",
    icon: Wallet,
    darkText: "Real-time budgetary tracking integrated with compliance-first node architecture.",
    lightText: "Optimized operational spend by 24% through automated ledger audits.",
    bgColor: "bg-white"
  },
  {
    id: 4,
    title: "Consultation",
    category: "Loan Management",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    icon: Users,
    darkText: "Expert guidance on institutional lending protocols and regulatory adherence.",
    lightText: "Processed $1.2B in loan volume with zero compliance friction or audit delays.",
    bgColor: "bg-[#F3F0FF]"
  },
  {
    id: 5,
    title: "Startup Funding",
    category: "Growth Strategies",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
    icon: Rocket,
    darkText: "Facilitating secure capital injection for early-stage fintech ventures globally.",
    lightText: "Raised $400M in Series B funding with a bulletproof regulatory posture.",
    bgColor: "bg-white"
  },
  {
    id: 6,
    title: "Credible Funds",
    category: "Audit & Assurance",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    icon: BarChart3,
    darkText: "Maintaining the highest standard of fund credibility through constant node audit.",
    lightText: "Rated A+ for compliance integrity by 12 independent regulatory bodies.",
    bgColor: "bg-[#F3F0FF]"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-navy selection:text-white">
      <Navbar />

      {/* ── 1. HEADER SECTION ── */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        {/* Soft Wave Decor (Matching Image) */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-[0.03]">
           <svg viewBox="0 0 1000 1000" className="w-full h-full fill-navy">
             <path d="M0,200 Q250,50 500,200 T1000,200 V1000 H0 Z" />
           </svg>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#111] mb-6 tracking-tight">
            Project We Have Done
          </h1>
          
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center bg-[#3D374D] text-white px-6 py-2.5 rounded-full text-xs font-bold gap-2 mb-10 shadow-lg shadow-navy/10">
            <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="opacity-60">Case Study</span>
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of successful institutional deployments and see how we've helped 
            organizations redefine their regulatory reporting through Lextr.
          </p>
        </div>
      </section>

      {/* ── 2. LOGO BAR ── */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
           <div className="bg-[#1C1C1E] rounded-[40px] p-10 flex flex-wrap items-center justify-center gap-12 md:gap-24 shadow-2xl">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-2 opacity-100">
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                     <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                   </div>
                   <span className="text-white font-black text-xl tracking-tighter">Logoipsum</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── 3. CASE STUDY GRID ── */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {CASE_PROJECTS.map((project) => (
              <div key={project.id} className={`rounded-[40px] p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col ${project.bgColor}`}>
                {/* Image Container */}
                <div className="aspect-16/11 rounded-[32px] overflow-hidden mb-8 border border-gray-50">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                {/* Content Header */}
                <div className="px-4 mb-8 flex items-start justify-between">
                   <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-navy">
                        <project.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#111] leading-tight mb-1">{project.title}</h3>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{project.category}</p>
                      </div>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-[#B8A6E3] flex items-center justify-center text-white cursor-pointer hover:bg-navy transition-colors">
                      <ArrowRight size={18} />
                   </div>
                </div>

                {/* Dark Text Box */}
                <div className="bg-[#1C1C1E] rounded-[32px] p-6 mb-4">
                  <p className="text-white text-[13px] font-medium leading-relaxed">
                    {project.darkText}
                  </p>
                </div>

                {/* Light Text Box */}
                <div className="bg-white rounded-[32px] p-6 border border-gray-50 flex-1">
                  <p className="text-gray-400 text-[13px] font-medium leading-relaxed">
                    {project.lightText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
