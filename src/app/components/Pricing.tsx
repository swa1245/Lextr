const plans = [
  {
    name: 'Starter',
    subtitle: 'For small teams',
    price: '$99',
    freq: '/month',
    features: ['Up to 5 team members', 'Real-time monitoring (10 jurisdictions)', 'Monthly compliance reports', 'Email support', 'API access (basic)'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    subtitle: 'Best for growing companies',
    price: '$499',
    freq: '/month',
    badge: 'Most Popular',
    features: ['Unlimited team members', 'All jurisdictions (50+)', 'Real-time compliance reports', 'Weekly regulatory updates', 'Slack & Teams integration', 'Priority email & chat support', 'Advanced analytics'],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For large organizations',
    price: 'Custom',
    freq: 'Contact us',
    features: ['Unlimited users & jurisdictions', 'Real-time compliance reports', 'Custom integrations & APIs', 'Dedicated account manager', 'SLA guarantee (99.9% uptime)', 'On-premise deployment option', 'Custom compliance workflows'],
    cta: 'Contact Sales',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad" style={{ background: '#FAFBFE' }}>
      <div className="container-lg">
        <div className="text-center mb-14 animate-fade-up">
          <div className="flex justify-center mb-4">
            <span className="section-label">Pricing</span>
          </div>
          <h2 className="section-heading mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-sm">Choose the plan that fits your business. No long-term contracts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-center">
          {plans.map((plan, i) => (
            <div key={plan.name}
              className={plan.featured ? 'price-card-featured' : 'price-card'}
              style={{ animationDelay: `${i * 0.1}s` }}>

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="text-white text-[10px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                    style={{ background: 'linear-gradient(135deg, #FCA311, #FF9800)', boxShadow: '0 4px 12px rgba(252,163,17,0.25)' }}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-navy font-bold text-lg mb-0.5">{plan.name}</h3>
                <p className="text-gray-400 text-xs">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-navy font-extrabold"
                  style={{ fontSize: plan.price === 'Custom' ? '1.5rem' : '2.5rem', lineHeight: 1 }}>
                  {plan.price}
                </span>
                <span className="text-gray-400 text-xs ml-1">{plan.freq}</span>
              </div>

              <ul className="space-y-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="text-orange font-bold shrink-0 mt-px">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.featured ? (
                <button className="btn-orange w-full h-11 text-sm cursor-pointer">{plan.cta}</button>
              ) : (
                <button className="btn-secondary w-full h-11 text-sm cursor-pointer">{plan.cta}</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
