'use client';

export default function CTABanner() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('✅ Thank you! We\'ll be in touch within 24 hours.');
  };

  return (
    <section id="waitlist" className="py-24 bg-navy relative overflow-hidden">
      {/* Animated geometric shapes in background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
          Ready to Simplify <span className="text-orange">Compliance?</span>
        </h2>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Stop wasting time on manual regulatory reporting. Join 500+ companies transforming their compliance processes with AI.
        </p>
        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your business email"
            className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 outline-none focus:border-orange transition-all text-sm backdrop-blur-sm"
          />
          <button type="submit" className="btn-orange whitespace-nowrap">
            Start Free Trial
          </button>
        </form>
        
        <div className="mt-6 flex flex-col gap-1">
          <p className="text-gray-400 text-xs">No credit card required</p>
          <p className="text-gray-500 text-[11px]">14-day free trial • Real-time compliance monitoring included • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
