"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronRight,
  X
} from 'lucide-react';
import { CASE_PROJECTS, TRUSTED_CLIENTS } from '@/app/constants';


export default function CaseStudiesPage() {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);
  const activeStudy = CASE_PROJECTS.find(p => p.id === selectedStudy);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedStudy]);

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
            Case Studies We Have Done
          </h1>
          


          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of successful institutional deployments and see how we've helped 
            organizations redefine their regulatory reporting through Lextr.
          </p>
        </div>
      </section>

      {/* ── 2. TRUSTED CLIENTS BAR ── */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
           <div className="bg-[#1C1C1E] rounded-[40px] p-10 flex flex-wrap items-center justify-center gap-10 md:gap-20 shadow-2xl">
              {TRUSTED_CLIENTS.map((client, i) => (
                <div key={i} className="flex items-center opacity-50 hover:opacity-100 transition-opacity cursor-default">
                   <span className="text-white font-extrabold text-xl md:text-2xl tracking-tight">{client}</span>
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
                   <div 
                      className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
                      onClick={() => setSelectedStudy(project.id)}
                   >
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

      {/* ── 4. CASE STUDY MODAL ── */}
      {selectedStudy && activeStudy && (
        <div className="fixed inset-0 z-2000 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setSelectedStudy(null)}
          />
          
          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl z-10 animate-fade-up flex flex-col max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-20 cursor-pointer"
              onClick={() => setSelectedStudy(null)}
            >
              <X size={20} />
            </button>
            
            {/* Header Image Area */}
            <div className="h-64 sm:h-80 w-full relative shrink-0">
              <img src={activeStudy.image} alt={activeStudy.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-lg border border-white/20">
                  <activeStudy.icon size={28} />
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">{activeStudy.category}</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">{activeStudy.title}</h2>
                </div>
              </div>
            </div>
            
            {/* Scrollable Content Area */}
            <div className="p-8 md:p-10 space-y-6 overflow-y-auto">
              <div className="bg-[#F5F8FF] p-6 rounded-2xl border border-blue-100">
                <h3 className="text-navy font-bold text-lg mb-2">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{activeStudy.darkText}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3 className="text-navy font-bold text-lg mb-2">The Solution & Results</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{activeStudy.lightText}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
