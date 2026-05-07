const testimonials = [
  {
    quote: '"Lextr eliminated 70% of our manual compliance work. We went from spending 500 hours per year on regulatory reporting to just 150. It\'s a game-changer."',
    name: 'Sarah Johnson',
    title: 'Chief Compliance Officer, Global FinTech Corp',
    initials: 'SJ',
  },
  {
    quote: '"Managing compliance across 8 jurisdictions used to be a nightmare with spreadsheets. Lextr\'s AI handles all the complexity automatically."',
    name: 'Michael Chen',
    title: 'Head of Regulatory Affairs, International Bank',
    initials: 'MC',
  },
  {
    quote: '"We\'re now compliant with regulations we didn\'t even know applied to us. Lextr\'s real-time monitoring caught 15+ regulatory changes in our first month."',
    name: 'Emma Williams',
    title: 'Risk & Compliance Director, Insurance Group',
    initials: 'EW',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white relative">
      <div className="container-lg">
        <div className="text-center mb-14 animate-fade-up">
          <div className="flex justify-center mb-4">
            <span className="section-label">Social Proof</span>
          </div>
          <h2 className="section-heading">Trusted by Leading Organizations</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className="testimonial-card animate-fade-up"
                 style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} className="text-orange text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-[13px] leading-[1.8] flex-1 mb-6 italic">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-blue-soft/50">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-navy shrink-0"
                     style={{ background: 'linear-gradient(135deg, #E8F1FF, #D4E5FF)' }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-navy font-bold text-xs">{t.name}</p>
                  <p className="text-gray-400 text-[10px]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
