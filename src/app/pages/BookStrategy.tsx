"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ArrowRight, CheckCircle2, Star, MessageSquare, Sparkles, Globe2, ShieldCheck } from "lucide-react";

export default function BookStrategyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FAFBFE] selection:bg-navy selection:text-white">
      <Navbar />

      <main className="pt-40 pb-24 relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-blue-50/50 to-transparent -z-10" />

        {/* ── Header Section ── */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-20 animate-fade-up">
          <div className="section-label mx-auto mb-6">Connect with Intelligence</div>
          <h1 className="text-navy font-black text-5xl md:text-7xl tracking-tight mb-6 leading-[1.1]">
            Get in touch with our team
          </h1>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Whether you're scaling a global bank or launching a new FinTech, our compliance architects are here to help.
          </p>
        </div>

        {/* ── Main Contact Card ── */}
        <div className="max-w-6xl mx-auto px-6 mb-32 animate-fade-up-d1">
          <div className="bg-white rounded-[48px] shadow-[0_32px_100px_rgba(13,27,42,0.08)] border border-blue-50 overflow-hidden">
            <div className="flex flex-col lg:flex-row">

              {/* Left Column: Context & Testimonial */}
              <div className="lg:w-[40%] p-8 md:p-16 bg-surface-alt/40 border-r border-blue-50">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-navy mb-8 border border-blue-50">
                      <MessageSquare size={24} />
                    </div>
                    <p className="text-gray-600 text-xl leading-relaxed mb-12 font-medium">
                      Our team is highly dedicated to help you with your regulatory queries.
                      Just drop a message & we will be in touch with you within 4-6 business hours.
                    </p>
                  </div>

                  {/* Testimonial Block */}
                  <div className="space-y-6 pt-12 border-t border-blue-100">
                    <div className="flex gap-1.5 text-blue-500">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-navy font-bold text-xl italic leading-relaxed">
                      "Lextr transformed our compliance workflow. The strategy call alone gave us a roadmap we hadn't considered."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-navy-mid border-2 border-white shadow-md">
                        <div className="w-full h-full bg-linear-to-br from-navy to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                          SK
                        </div>
                      </div>
                      <div>
                        <div className="font-black text-navy text-sm">Soren Knudsen</div>
                        <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.15em]">Director @ Nordea Capital</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:w-[60%] p-8 md:p-16 relative bg-white">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-reveal py-12">
                    <div className="w-24 h-24 bg-blue-600 rounded-[32px] flex items-center justify-center text-white mb-10 shadow-2xl shadow-blue-600/30 rotate-6">
                      <CheckCircle2 size={40} strokeWidth={3} />
                    </div>
                    <h3 className="text-4xl font-black text-navy mb-4 tracking-tight">Transmission Successful.</h3>
                    <p className="text-gray-500 font-medium text-lg mb-12 max-w-sm">Our architects are reviewing your context and will reach out shortly.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary h-14 px-10"
                    >
                      Send Another Signal
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Jordan Smith"
                          className="w-full bg-surface/50 h-16 px-6 rounded-2xl border border-blue-50 focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-gray-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-1">Organization</label>
                        <input
                          required
                          type="text"
                          placeholder="Financial Entity"
                          className="w-full bg-surface/50 h-16 px-6 rounded-2xl border border-blue-50 focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-1">Work Email</label>
                      <input
                        required
                        type="email"
                        placeholder="j.smith@lextr.intelligence"
                        className="w-full bg-surface/50 h-16 px-6 rounded-2xl border border-blue-50 focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-gray-300"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-1">Your Query</label>
                      <textarea
                        required
                        placeholder="Describe your current compliance challenge..."
                        className="w-full bg-surface/50 px-6 py-6 rounded-2xl border border-blue-50 focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-gray-300 min-h-[160px] resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full btn-primary h-16 rounded-2xl text-base shadow-xl shadow-navy/10 group"
                      >
                        Send Message
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-8 pt-4 opacity-30">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={14} />
                        <span className="text-[9px] font-black uppercase tracking-widest">End-to-End Encryption</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe2 size={14} />
                        <span className="text-[9px] font-black uppercase tracking-widest">Global Data Protocol</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Brand Banner CTA ── */}
        <div className="max-w-7xl mx-auto px-6 mb-24 animate-fade-up-d3">
          <div className="bg-navy rounded-[48px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group shadow-[0_40px_100px_rgba(13,27,42,0.15)]">
            {/* Visual Decor */}
            <div className="absolute top-0 right-0 w-[400px] h-full bg-white/5 -skew-x-12 translate-x-1/2 -z-0" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-0" />

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase text-blue-300 mb-6 border border-white/10">
                Get Started
              </div>
              <h2 className="text-white font-black text-4xl md:text-5xl tracking-tight mb-6 leading-tight">
                Build your compliance <br /> engine with Lextr.
              </h2>
              <p className="text-white/60 text-lg font-medium mb-10 leading-relaxed">
                Our infrastructure is fully dedicated to helping each financial institution scale safely across every stage of their regulatory life-cycle.
              </p>
            </div>

            <div className="relative z-10 hidden xl:block">
              {/* This represents the visual collage in the image */}
              <div className="w-[440px] h-[300px] relative">
                <div className="absolute top-0 left-0 w-64 h-80 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 p-2 shadow-2xl rotate-[-6deg] overflow-hidden">
                  <div className="w-full h-full bg-blue-600/5 rounded-[28px]" />
                </div>
                <div className="absolute top-10 right-0 w-64 h-80 bg-white/10 backdrop-blur-md rounded-[32px] border border-white/20 p-2 shadow-2xl rotate-[6deg] overflow-hidden">
                  <div className="w-full h-full bg-white/5 rounded-[28px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
