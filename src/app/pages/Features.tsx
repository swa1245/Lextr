"use client";

import React from 'react';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Shield, Zap, BarChart3, Lock, Globe, Cpu, Search, CheckCircle2, ArrowRight } from "lucide-react";

const featureList = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Compliance Engine",
    description: "Our proprietary LLM-driven core analyzes regulatory changes in real-time across 150+ jurisdictions.",
    tag: "Core Tech"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Automated Auditing",
    description: "Eliminate manual spot checks. Our system performs 100% data coverage audits automatically.",
    tag: "Efficiency"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Cross-border regulatory mapping that ensures you stay compliant while scaling internationally.",
    tag: "Scale"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Zero-Knowledge Proofs",
    description: "Verify compliance data without ever exposing sensitive underlying customer information.",
    tag: "Security"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Alerts",
    description: "Instant notifications for regulatory drift, allowing for immediate corrective action.",
    tag: "Response"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Predictive Risk Scoring",
    description: "AI-driven risk forecasting that identifies potential issues months before they surface.",
    tag: "Intelligence"
  }
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Capabilities</span>
          </div>
          <h1 className="text-navy font-black text-5xl md:text-7xl tracking-tighter mb-8 leading-[1.05]">
            Engineered for <br /> <span className="text-blue-600">Institutional</span> Grade.
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Discover the infrastructure that powers the next generation of automated compliance and regulatory intelligence.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, i) => (
            <div key={i} className="group p-8 bg-white rounded-[32px] border border-gray-100 hover:border-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-navy mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">{feature.tag}</div>
              <h3 className="text-navy font-black text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-32 px-6 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-white font-black text-4xl md:text-5xl tracking-tight mb-8">
              Why leading firms <br /> choose our stack.
            </h2>
            <div className="space-y-6">
              {[
                "SOC2 Type II & ISO 27001 Certified",
                "99.99% Guaranteed Platform Uptime",
                "Dedicated Private Cloud Deployments",
                "24/7 Strategic Architecture Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
            <button className="mt-12 px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3">
              View Technical Docs <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 shadow-2xl">
            <pre className="text-blue-300 text-xs font-mono leading-relaxed">
              {`{
  "engine": "lextr-core-v4",
  "status": "active",
  "security": {
    "encryption": "AES-256-GCM",
    "verification": "zk-proof"
  },
  "processing": {
    "mode": "real-time",
    "latency": "<120ms"
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
