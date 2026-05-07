export const SITE_CONFIG = {
  name: "Lextr",
  tagline: "Compliance Reimagined",
  description: "Redefining regulatory reporting with AI-powered, agile, and seamless compliance solutions.",
  navLinks: [
    { label: "Our Vision", href: "#vision" },
    { label: "The Challenge", href: "#challenge" },
    { label: "Solutions", href: "#solutions" },
  ],
  content: {
    hero: {
      badge: "FinTech Regulatory Intelligence",
      title: "Compliance Reimagined for Modern Finance.",
      subtitle: "Automate SEC, AML, and Basel III reporting with AI-driven precision. Lextr provides the high-performance infrastructure for global financial institutions.",
      cta: "Start Scaling Securely",
    },
    challenge: {
      title: "The Capital Compliance Crisis",
      description: "Financial regulatory reporting is legacy, slow, and expensive. Lextr automates the complex so you can focus on capital growth.",
      items: [
        {
          title: "Real-time Auditing",
          description: "Move from quarterly snapshots to continuous compliance monitoring and risk assessment.",
        },
        {
          title: "AML & KYC Automation",
          description: "Scale your onboarding without increasing risk. Our AI flags anomalies with 99.9% accuracy.",
        },
        {
          title: "Global Interoperability",
          description: "Seamlessly navigate diverse regulatory frameworks across North America, EU, and APAC.",
        },
      ],
    },
    vision: {
      title: "The Future of Financial Logic",
      description: "We are bridging the gap between legacy banking and modern AI. Our infrastructure doesn't just report—it predicts regulatory shifts before they impact your balance sheet.",
    },
  },
  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Solutions", href: "#solutions" },
          { label: "Vision", href: "#vision" },
          { label: "Infrastructure", href: "#" },
          { label: "Security", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Newsroom", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Cookie Policy", href: "#" },
          { label: "Compliance", href: "#" },
        ],
      },
    ],
    contact: {
      email: "hello@lextr.intelligence",
      address: "Silicon Valley, CA",
    },
  },
};

export const BLOG_CATEGORIES = ['All', 'Regulatory Tech', 'AI & Machine Learning', 'Compliance Strategy', 'Financial Security', 'Company News'];

export const BLOG_POSTS = [
  {
    id: 1,
    category: 'Regulatory Tech',
    title: 'The Future of SEC Reporting: Navigating New AI Mandates',
    excerpt: 'As the SEC introduces new guidelines for AI transparency, financial institutions must adapt their reporting frameworks to ensure compliance without sacrificing innovation.',
    date: 'May 12, 2024',
    readTime: '8 min read',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: 2,
    category: 'Compliance Strategy',
    title: 'Scale Safely: How to Build a Robust Compliance Engine',
    excerpt: 'Building a compliance engine that scales with your growth is critical for modern fintechs. Learn the key pillars of scalable infrastructure.',
    date: 'May 10, 2024',
    readTime: '6 min read',
    author: 'Michael Ross',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 3,
    category: 'AI & Machine Learning',
    title: 'Eliminating False Positives in AML Monitoring with LLMs',
    excerpt: 'Large Language Models are transforming how we handle Anti-Money Laundering alerts. Discover how Lextr reduces false positives by 85%.',
    date: 'May 8, 2024',
    readTime: '10 min read',
    author: 'Dr. James Wilson',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 4,
    category: 'Financial Security',
    title: 'Basel III and the Next Decade of Capital Adequacy',
    excerpt: 'A deep dive into the evolving landscape of global banking regulations and what the next phase of Basel III means for your institution.',
    date: 'May 5, 2024',
    readTime: '12 min read',
    author: 'Elena Rodriguez',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    featured: false
  }
];

export const CASE_STUDIES = [
  {
    client: "Global Fintech Corp",
    impact: "Reduced audit cycle by 70%",
    desc: "Lextr's automated node tracking allowed Global Fintech to monitor 50,000+ daily transactions with real-time compliance flags.",
    metrics: [
      { label: "Compliance Score", value: "99.9%" },
      { label: "Audit Latency", value: "1.2s" }
    ],
    gradient: "from-blue-50 to-indigo-50",
    modules: ["Vault", "Nodes", "Audit", "Sync"]
  },
  {
    client: "Institutional Bank Group",
    impact: "Zero breaches in 12 months",
    desc: "Implementing the Lextr intelligence layer provided the security needed to scale cross-border operations without risk.",
    metrics: [
      { label: "Security Rating", value: "A+" },
      { label: "Operational Savings", value: "$3.1M" }
    ],
    gradient: "from-amber-50 to-orange-50",
    modules: ["Security", "Global Sync", "Node Tracking"]
  },
  {
    client: "Regulatory Systems Inc",
    impact: "100% automated reporting",
    desc: "By deploying Lextr's auto-reporting engine, Regulatory Systems Inc eliminated manual document verification entirely.",
    metrics: [
      { label: "Reporting Speed", value: "Instant" },
      { label: "Efficiency Gain", value: "400%" }
    ],
    gradient: "from-green-50 to-emerald-50",
    modules: ["Auto-Report", "Analytics", "Vault"]
  }
];
