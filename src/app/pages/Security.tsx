"use client";

import React from 'react';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ShieldCheck, Lock, EyeOff, Server, Key, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[28px] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-600/10 rotate-3">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-navy font-black text-5xl md:text-7xl tracking-tighter mb-8 leading-tight">
            Security by <span className="text-blue-600">Architecture</span>.
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Institutional-grade protocols designed to protect the most sensitive financial datasets in the world.
          </p>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Lock className="w-8 h-8 text-blue-600" />,
                title: "End-to-End Encryption",
                desc: "Data is encrypted at rest (AES-256) and in transit (TLS 1.3) using hardware-backed keys."
              },
              {
                icon: <EyeOff className="w-8 h-8 text-blue-600" />,
                title: "Zero-Knowledge Infrastructure",
                desc: "Lextr never sees your underlying raw data. We process compliance logic via cryptographic proofs."
              },
              {
                icon: <Server className="w-8 h-8 text-blue-600" />,
                title: "Isolated Tenancy",
                desc: "Every Enterprise client receives a physically isolated cloud instance with dedicated resources."
              },
              {
                icon: <Key className="w-8 h-8 text-blue-600" />,
                title: "Bring Your Own Key (BYOK)",
                desc: "Full control over encryption keys via integration with AWS KMS, Azure Key Vault, or Google KMS."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                title: "SOC2 Type II Compliant",
                desc: "Rigorous annual audits ensuring our internal controls meet the highest security standards."
              },
              {
                icon: <ShieldAlert className="w-8 h-8 text-blue-600" />,
                title: "Intrusion Detection",
                desc: "24/7 AI-driven monitoring for unauthorized access attempts with automatic lockdown protocols."
              }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col gap-6 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-navy font-black text-xl mb-3">{pillar.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Certificates */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-navy font-black text-4xl mb-12">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['SOC2', 'ISO 27001', 'HIPAA', 'GDPR'].map((cert) => (
              <div key={cert} className="aspect-square bg-gray-50 rounded-3xl flex items-center justify-center border border-dashed border-gray-200">
                <span className="text-gray-300 font-black text-xl">{cert}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-400 text-sm font-medium italic">
            *Official audit reports are available to Enterprise clients under NDA.
          </p>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-32 px-6 bg-navy text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-10" />
          <h2 className="text-white font-black text-3xl md:text-5xl leading-tight tracking-tight mb-10">
            "Compliance without security is just a checkbox. <br /> At Lextr, we build for the fortress."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full border-2 border-white/20" />
            <div className="text-left">
              <div className="text-white font-bold text-sm">Marcus Vane</div>
              <div className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Chief Information Security Officer</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
