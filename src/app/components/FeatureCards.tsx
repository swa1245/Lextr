import Image from 'next/image';

const cards = [
  {
    title: 'Compliance Automation',
    description: 'Convert fragmented regulatory workflows into automated pipelines with measurable accuracy on your AML posture.',
    image: '/card-pipeline.png',
  },
  {
    title: 'Growth Intelligence',
    description: 'Track and optimise key performance indicators across 40+ global markets. Understand risk-adjusted returns in real time.',
    image: '/card-analytics.png',
  },
  {
    title: 'AI Regulatory Mapping',
    description: 'Drive measurable increases in regulatory coverage, reporting traffic, and institutional sign-offs with targeted AI strategies.',
    image: '/card-network.png',
  },
];

export default function FeatureCards() {
  return (
    <section id="solutions" className="bg-surface py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <span className="section-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              Business Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tighter mb-5">
            RegTech That Delivers <br className="hidden md:block" /> Business Results
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            We help financial institutions transform their compliance posture into measurable
            business outcomes that matter to the C-Suite.
          </p>
        </div>

        {/* Cards row */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="feature-card flex flex-col">
              {/* Mini illustration */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-6 bg-linear-to-br from-blue-50 to-indigo-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
