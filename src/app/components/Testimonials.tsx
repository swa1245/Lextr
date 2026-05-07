import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-white py-28 border-y border-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="section-label">Testimonials</span>
        <h2 className="h2-trajectory">Don't just take our word for it</h2>
        
        <div className="relative mt-20 px-12 group">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-blue-primary shadow-sm hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-blue-primary shadow-sm hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="animate-reveal">
            <div className="text-3xl font-serif font-black italic mb-10 text-gray-800">LEXTR.</div>
            <blockquote className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
              "Lextr was an exceptional partner in building our compliance infrastructure. They quickly understood our business and turned our multiple, fragmented reporting streams into one clear, user-friendly experience."
            </blockquote>
            <cite className="not-italic">
              <span className="block font-bold text-blue-primary text-sm uppercase tracking-wider mb-1">AJC Ads / Cox Enterprises</span>
              <span className="text-xs text-gray-400">Project Partner</span>
            </cite>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
