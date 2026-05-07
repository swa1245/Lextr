import { Clock, Users, Zap } from 'lucide-react';

const reasons = [
  {
    title: "20 years of experience.",
    description: "Since 2005, we've delivered 200+ websites across nearly every industry. Deep experience means we've likely solved a challenge similar to yours before.",
    icon: Clock
  },
  {
    title: "A small, senior team.",
    description: "No junior handoffs, no learning on your budget, no unnecessary layers. Every project is staffed with senior specialists who actually do the work.",
    icon: Users
  },
  {
    title: "On time. Always.",
    description: "Fixed timelines, fixed budgets, no surprise invoices, no scope creep. We've never missed a deadline in 20 years. You always know where things stand.",
    icon: Zap
  }
];

export default function ThreeReasons() {
  return (
    <section className="bg-surface py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <span className="section-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              Why Lextr?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tighter">
            Three reasons clients stay with us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="feature-card">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
