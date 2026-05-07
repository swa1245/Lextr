"use client";

import React from 'react';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Check, ArrowRight, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Growth",
    price: "$2,499",
    description: "Ideal for emerging fintechs scaling their regulatory footprint.",
    features: [
      "Real-time Monitoring",
      "5 Regional Jurisdictions",
      "Automated Reporting",
      "Email Support",
      "Standard Dashboards"
    ],
    buttonText: "Start Free Trial",
    highlight: false
  },
  {
    name: "Enterprise",
    price: "$7,999",
    description: "The gold standard for global financial institutions.",
    features: [
      "Unlimited Jurisdictions",
      "Predictive Risk Analysis",
      "Custom API Access",
      "24/7 Dedicated Support",
      "Custom Data Visualization",
      "Audit-Ready Logs"
    ],
    buttonText: "Contact Sales",
    highlight: true
  },
  {
    name: "Strategic",
    price: "Custom",
    description: "Bespoke compliance architecture for massive global operations.",
    features: [
      "Private Cloud Deployment",
      "Custom LLM Training",
      "Hardware Security Modules",
      "On-site Integration",
      "Strategic Advisory",
      "White-Glove Migration"
    ],
    buttonText: "Schedule Advisory",
    highlight: false
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFE]">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-navy font-black text-5xl md:text-7xl tracking-tighter mb-8 leading-tight">
            Institutional Pricing. <br /> <span className="text-blue-600">Transparent</span> Value.
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Choose the infrastructure level that matches your firm's compliance complexity.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div key={i} className={`relative flex flex-col p-10 rounded-[40px] border transition-all duration-500 animate-fade-up ${
              plan.highlight 
                ? 'bg-navy text-white border-navy shadow-2xl shadow-navy/20 scale-105 z-10' 
                : 'bg-white text-navy border-gray-100 hover:border-blue-200'
            }`} style={{ animationDelay: `${i * 0.1}s` }}>
              
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-black mb-2 ${plan.highlight ? 'text-blue-400' : 'text-navy'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-black">{plan.price}</span>
                  {plan.price !== "Custom" && <span className={`text-sm font-bold ${plan.highlight ? 'text-white/60' : 'text-gray-400'}`}>/month</span>}
                </div>
                <p className={`text-sm leading-relaxed font-medium ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-5 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-blue-600' : 'bg-blue-50'}`}>
                      <Check className={`w-3 h-3 ${plan.highlight ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <span className="text-sm font-bold">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl ${
                plan.highlight
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20'
                  : 'bg-navy text-white hover:bg-black'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-12">Trusted by Institutional Giants</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple placeholders for institutional logos */}
             <div className="text-2xl font-black text-navy italic">GOLDMAN</div>
             <div className="text-2xl font-black text-navy tracking-tighter">BLACKROCK</div>
             <div className="text-2xl font-black text-navy uppercase">Vanguard</div>
             <div className="text-2xl font-black text-navy font-serif">MorganStanley</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
