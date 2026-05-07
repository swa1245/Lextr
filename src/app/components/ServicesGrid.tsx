import { SITE_CONFIG } from '@/lib/constants';
import { Shield, Database, Cpu, Lock, Globe, Headset } from 'lucide-react';

const services = [
  {
    title: "Strategy",
    description: "We figure out what you need to say before we design anything.",
    icon: Shield,
    bullets: ["Branding", "Competitive analysis", "Audience research", "Goal setting", "Site architecture"]
  },
  {
    title: "Content",
    description: "Words that translate your work into clear value for your audience.",
    icon: Database,
    bullets: ["Copywriting", "Messaging", "Storytelling", "Page by page content", "Brand voice"]
  },
  {
    title: "Design",
    icon: Cpu,
    description: "Custom, brand-aligned design built for your business, not a template.",
    bullets: ["Visual systems", "Custom layouts", "Responsive design", "User experience", "Accessibility"]
  },
  {
    title: "Development",
    icon: Lock,
    description: "Fast, secure, dependable builds from senior developers.",
    bullets: ["Custom development", "CMS integration", "SEO foundations", "Performance optimization", "Security"]
  },
  {
    title: "Ongoing Growth",
    icon: Globe,
    description: "Continuous improvement after launch, driven by real usage data.",
    bullets: ["SEO", "Analytics", "Conversion optimization", "Content updates", "A/B testing"]
  },
  {
    title: "Support",
    icon: Headset,
    description: "Technical and strategic support so your site keeps working as your business evolves.",
    bullets: ["Hosting", "Updates", "Technical help", "Strategic partnership", "Long term collaboration"]
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-32 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <span className="section-label">What We Do</span>
        <h2 className="h2-trajectory">From first idea to long after launch</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-20 text-sm">
          A complete offering, end to end. Every project includes the strategy, content, design, and development needed to launch a great website, plus the ongoing growth and support that keeps it working for years.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card-trajectory">
                <div className="w-10 h-10 bg-blue-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-blue-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 border-t border-gray-50 pt-6">
                  {service.bullets.map(bullet => (
                    <li key={bullet} className="text-xs text-gray-400 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-primary rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
