import { SITE_CONFIG } from '@/lib/constants';
import { AlertCircle, Layers, TrendingUp } from 'lucide-react';

const icons = [AlertCircle, Layers, TrendingUp];

export default function FeatureSection() {
  const { challenge } = SITE_CONFIG.content;
  
  return (
    <section id="challenge" className="bg-gray-50 py-32">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-navy mb-6">{challenge.title}</h2>
          <p className="text-lg text-gray-600">{challenge.description}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {challenge.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={item.title} className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-navy transition-colors">
                  <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
