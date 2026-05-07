import { 
  Briefcase, 
  Search, 
  Wallet, 
  Users, 
  Rocket, 
  BarChart3
} from 'lucide-react';

export const CASE_PROJECTS = [
  {
    id: 1,
    title: "Tax Management",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=600",
    icon: Search,
    darkText: "Automating complex tax reporting workflows for multi-national financial entities.",
    lightText: "Increased reporting accuracy by 99% while reducing manual hours by 400+ monthly.",
    bgColor: "bg-white"
  },
  {
    id: 2,
    title: "Business Plan",
    category: "Growth Strategies",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    icon: Briefcase,
    darkText: "Strategic compliance architecture for rapid-scale fintech startups entering new markets.",
    lightText: "Successfully launched across 4 new regulatory zones in less than 90 days.",
    bgColor: "bg-[#F5F8FF]"
  },
  {
    id: 3,
    title: "Company Budget",
    category: "Book Keeping",
    image: "https://images.unsplash.com/photo-1454165833762-02ad50e8958d?auto=format&fit=crop&q=80&w=600",
    icon: Wallet,
    darkText: "Real-time budgetary tracking integrated with compliance-first node architecture.",
    lightText: "Optimized operational spend by 24% through automated ledger audits.",
    bgColor: "bg-white"
  },
  {
    id: 4,
    title: "Consultation",
    category: "Loan Management",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    icon: Users,
    darkText: "Expert guidance on institutional lending protocols and regulatory adherence.",
    lightText: "Processed $1.2B in loan volume with zero compliance friction or audit delays.",
    bgColor: "bg-[#F5F8FF]"
  },
  {
    id: 5,
    title: "Startup Funding",
    category: "Growth Strategies",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
    icon: Rocket,
    darkText: "Facilitating secure capital injection for early-stage fintech ventures globally.",
    lightText: "Raised $400M in Series B funding with a bulletproof regulatory posture.",
    bgColor: "bg-white"
  },
  {
    id: 6,
    title: "Credible Funds",
    category: "Audit & Assurance",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    icon: BarChart3,
    darkText: "Maintaining the highest standard of fund credibility through constant node audit.",
    lightText: "Rated A+ for compliance integrity by 12 independent regulatory bodies.",
    bgColor: "bg-[#F5F8FF]"
  }
];

export const TRUSTED_CLIENTS = ['JPMorgan', 'Goldman Sachs', 'Morgan Stanley', 'Citigroup', 'Barclays'];
