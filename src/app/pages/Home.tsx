"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import WhatIsLextr from "@/app/components/WhatIsLextr";
import ChallengeSection from "@/app/components/ChallengeSection";
import VisionFeatures from "@/app/components/VisionFeatures";
import HowItWorks from "@/app/components/HowItWorks";
import Results from "@/app/components/Results";
import Footer from "@/app/components/Footer";
import Chatbot from "@/app/components/Chatbot";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhatIsLextr />
      <ChallengeSection />
      <VisionFeatures />
      <HowItWorks />
      <Results />
      <Footer />
      <Chatbot />
    </main>
  );
}
