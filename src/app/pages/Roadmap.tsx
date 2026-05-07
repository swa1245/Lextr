"use client";

import React from 'react';
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CheckCircle2, Clock, Sparkles, Rocket, Globe2, ShieldCheck, Zap, ArrowRight, Milestone } from "lucide-react";

const roadmapData = [
  {
    quarter: "Q1 2026",
    status: "Completed",
    title: "Intelligence Foundation",
    percentage: 100,
    items: [
      "Launch of Lextr Core v4 Engine",
      "Multi-jurisdictional Real-time API",
      "Strategic SOC2 Type II Certification",
      "Institutional Dashboard Redesign"
    ],
    color: "bg-green-500",
    glow: "shadow-green-500/20",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    quarter: "Q2 2026",
    status: "In Progress",
    title: "Scale & Automation",
    percentage: 65,
    items: [
      "Automated Regulatory Drift Detection",
      "Expanded APAC Jurisdiction Coverage",
      "White-Glove Migration Suite",
      "Zero-Knowledge Proof Reporting"
    ],
    color: "bg-blue-600",
    glow: "shadow-blue-600/30",
    icon: <Zap className="w-6 h-6 animate-pulse" />
  },
  {
    quarter: "Q3 2026",
    status: "Upcoming",
    title: "Predictive Intelligence",
    percentage: 0,
    items: [
      "ML-driven Risk Forecasting",
      "Advanced Scenario Simulation",
      "Direct Regulatory Sandbox Integration",
      "Institutional SSO & IAM Suite"
    ],
    color: "bg-navy",
    glow: "shadow-navy/10",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    quarter: "Q4 2026",
    status: "Vision",
    percentage: 0,
    title: "Global Compliance Ledger",
    items: [
      "Decentralized Compliance Registry",
      "Inter-bank Regulatory Mapping",
      "Lextr AI Enterprise Mobile App",
      "Private Beta: Autonomous Reporting"
    ],
    color: "bg-purple-600",
    glow: "shadow-purple-600/20",
    icon: <Sparkles className="w-6 h-6" />
  }
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFF] selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <section className="pt-48 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm mb-8 animate-fade-up">
            <Milestone className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] font-black text-navy uppercase tracking-[0.2em]">Platform Evolution</span>
          </div>
          <h1 className="text-navy font-black text-6xl md:text-8xl tracking-tighter mb-8 leading-tight animate-fade-up">
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">Mission</span> Path.
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium animate-fade-up-d1">
            We are building the world's most sophisticated regulatory infrastructure. Follow our journey from intelligence to autonomy.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {roadmapData.map((phase, i) => (
              <div key={i} className="group relative flex flex-col lg:flex-row gap-12 lg:gap-24 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                
                {/* Timeline Connector (Desktop) */}
                {i !== roadmapData.length - 1 && (
                  <div className="absolute left-[196px] top-12 bottom-[-64px] w-0.5 bg-linear-to-b from-blue-200 to-transparent hidden lg:block" />
                )}

                {/* Quarter & Status Side */}
                <div className="lg:w-48 pt-4 shrink-0">
                  <div className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-3 ${
                    phase.status === 'Completed' ? 'bg-green-50 text-green-600' : 
                    phase.status === 'In Progress' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'
                  }`}>
                    {phase.status}
                  </div>
                  <div className="text-4xl font-black text-navy group-hover:text-blue-600 transition-colors duration-500 tracking-tight">
                    {phase.quarter}
                  </div>
                  
                  {/* Progress Bar for 'In Progress' */}
                  {phase.status === 'In Progress' && (
                    <div className="mt-4 w-full h-1 bg-blue-100 rounded-full overflow-hidden hidden lg:block">
                      <div className="h-full bg-blue-600 w-[65%] animate-shimmer bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 bg-size-[200%_100%]" />
                    </div>
                  )}
                </div>

                {/* Central Icon */}
                <div className={`hidden lg:flex w-12 h-12 rounded-2xl ${phase.color} ${phase.glow} items-center justify-center text-white relative z-20 shrink-0 mt-2 group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/20`}>
                   {phase.icon}
                </div>

                {/* Content Card */}
                <div className="flex-1 relative group cursor-pointer">
                  {/* Card Background with Blur */}
                  <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600/0 to-blue-600/0 rounded-[48px] group-hover:from-blue-600/10 group-hover:to-blue-400/10 transition-all duration-700 blur-xl opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative bg-white/70 backdrop-blur-md p-10 lg:p-14 rounded-[40px] border border-gray-100 shadow-2xl shadow-gray-200/20 group-hover:border-blue-200/50 group-hover:-translate-y-2 transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                      <h3 className="text-3xl font-black text-navy leading-tight tracking-tight">
                        {phase.title}
                      </h3>
                      {phase.percentage > 0 && (
                        <div className="text-blue-600 font-black text-sm tracking-widest bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                          {phase.percentage}% DEVELOPED
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                      {phase.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 group/item">
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${
                            phase.status === 'Completed' ? 'bg-green-500' : 'bg-blue-400 group-hover/item:scale-150'
                          }`} />
                          <span className="text-gray-500 font-bold text-sm leading-relaxed group-hover/item:text-navy transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Feature Highlight Decoration */}
                    <div className="mt-12 flex items-center gap-6">
                       <div className="flex -space-x-3">
                          {[1,2,3].map(n => (
                            <div key={n} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white overflow-hidden shadow-sm">
                               <img src={`https://i.pravatar.cc/100?u=dev${n+i}`} alt="Dev" className="w-full h-full object-cover" />
                            </div>
                          ))}
                       </div>
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          Engineering in progress
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision CTA */}
      <section className="py-40 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-navy rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(13,27,42,0.2)]">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 -skew-y-6" />
          <div className="relative z-10">
            <h2 className="text-white font-black text-4xl md:text-6xl mb-8 leading-tight tracking-tight">
              Shape the future <br /> of compliance.
            </h2>
            <p className="text-blue-100/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
              Join our private beta for Q3 features and get a seat at the table with our architecture team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/book" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 group flex items-center gap-3 active:scale-95">
                Join Private Beta <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </main>
  );
}
