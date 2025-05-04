
import { Professional } from "@/components/concierge/business/ProfessionalCard";

export const businessProfessionals: Professional[] = [
  // Consulting
  {
    id: "bc1",
    name: "Sarah Johnson",
    title: "Strategic Business Consultant",
    rating: 4.9,
    reviewCount: 47,
    specialties: ["Strategic Planning", "Market Analysis", "Growth Strategy"],
    experience: "15+ years",
    availability: "Available next week",
    image: "/lovable-uploads/697f3367-6bf9-47c7-8610-d21869a0d029.png",
    serviceCategory: "consulting",
    regions: ["Johannesburg", "Pretoria", "Virtual Consulting"]
  },
  {
    id: "bc2",
    name: "David Nhlapo",
    title: "Market Research Specialist",
    rating: 4.7,
    reviewCount: 32,
    specialties: ["Consumer Research", "Competitor Analysis", "Market Trends"],
    experience: "12+ years",
    availability: "Available this week",
    serviceCategory: "consulting",
    regions: ["Cape Town", "Stellenbosch", "Virtual Consulting"]
  },
  {
    id: "bc3",
    name: "Michelle Khumalo",
    title: "Process Optimization Expert",
    rating: 4.8,
    reviewCount: 28,
    specialties: ["Workflow Design", "Efficiency Analysis", "Project Management"],
    experience: "10+ years",
    availability: "Limited availability",
    image: "/lovable-uploads/36f1e3ec-1682-4086-8e11-d7c4e572618b.png",
    serviceCategory: "consulting",
    regions: ["Durban", "Pietermaritzburg", "Virtual Consulting"]
  },

  // Legal & Compliance
  {
    id: "lc1",
    name: "James Mokoena",
    title: "Business Registration Specialist",
    rating: 4.9,
    reviewCount: 56,
    specialties: ["Company Registration", "Legal Documentation", "Business Setup"],
    experience: "18+ years",
    availability: "Available next week",
    serviceCategory: "legal",
    regions: ["Nationwide", "Virtual Services"]
  },
  {
    id: "lc2",
    name: "Patricia Naidoo",
    title: "Contract Law Expert",
    rating: 5.0,
    reviewCount: 41,
    specialties: ["Contract Development", "Legal Review", "Negotiation Support"],
    experience: "15+ years",
    availability: "Available this week",
    image: "/lovable-uploads/4288eeba-c60b-42f1-a156-13a7ef6df992.png",
    serviceCategory: "legal",
    regions: ["Cape Town", "Johannesburg", "Virtual Services"]
  },
  {
    id: "lc3",
    name: "Robert van der Merwe",
    title: "Regulatory Compliance Consultant",
    rating: 4.8,
    reviewCount: 38,
    specialties: ["Industry Regulations", "Compliance Audits", "Risk Management"],
    experience: "14+ years",
    availability: "Limited availability",
    serviceCategory: "legal",
    regions: ["Pretoria", "Johannesburg", "Bloemfontein"]
  },

  // Accounting & Finance
  {
    id: "af1",
    name: "Angela Dlamini",
    title: "Financial Statement Specialist",
    rating: 4.9,
    reviewCount: 52,
    specialties: ["Financial Reporting", "Statement Preparation", "Audit Support"],
    experience: "16+ years",
    availability: "Available next week",
    image: "/lovable-uploads/402c56a2-5e59-41c1-8652-099f61ae559b.png",
    serviceCategory: "accounting",
    regions: ["Johannesburg", "Nationwide Virtual Services"]
  },
  {
    id: "af2",
    name: "Thomas Molepo",
    title: "Tax Planning Expert",
    rating: 4.7,
    reviewCount: 43,
    specialties: ["Tax Strategy", "Filing Services", "Tax Compliance"],
    experience: "12+ years",
    availability: "Available this week",
    serviceCategory: "accounting",
    regions: ["Cape Town", "Stellenbosch", "Virtual Services"]
  },
  {
    id: "af3",
    name: "Linda Botha",
    title: "Financial Forecasting Analyst",
    rating: 4.8,
    reviewCount: 36,
    specialties: ["Cash Flow Projections", "Financial Modeling", "Budget Planning"],
    experience: "10+ years",
    availability: "Available next week",
    serviceCategory: "accounting",
    regions: ["Pretoria", "Nationwide Virtual Services"]
  },
  
  // Technology Services
  {
    id: "ts1",
    name: "Thabo Molefe",
    title: "IT Infrastructure Architect",
    rating: 4.9,
    reviewCount: 39,
    specialties: ["Network Design", "Cloud Infrastructure", "Security Architecture"],
    experience: "13+ years",
    availability: "Available next week",
    serviceCategory: "technology",
    regions: ["Johannesburg", "Pretoria", "Remote Services"]
  },
  {
    id: "ts2",
    name: "Ayesha Ismail",
    title: "Software Development Consultant",
    rating: 5.0,
    reviewCount: 47,
    specialties: ["Custom Applications", "Web Development", "Mobile Solutions"],
    experience: "11+ years",
    availability: "Available in 2 weeks",
    serviceCategory: "technology",
    regions: ["Cape Town", "Remote Services"]
  },
  {
    id: "ts3",
    name: "Brendon Fourie",
    title: "Cybersecurity Specialist",
    rating: 4.8,
    reviewCount: 31,
    specialties: ["Security Assessments", "Penetration Testing", "Compliance"],
    experience: "15+ years",
    availability: "Limited availability",
    serviceCategory: "technology",
    regions: ["Nationwide", "Remote Assessments"]
  },
  
  // Human Resources
  {
    id: "hr1",
    name: "Nomsa Zwane",
    title: "Talent Acquisition Specialist",
    rating: 4.7,
    reviewCount: 28,
    specialties: ["Executive Recruitment", "Talent Assessment", "Compensation Strategy"],
    experience: "14+ years",
    availability: "Available next week",
    serviceCategory: "hr",
    regions: ["Johannesburg", "Pretoria", "Nationwide"]
  },
  {
    id: "hr2",
    name: "Richard Spencer",
    title: "HR Policy Consultant",
    rating: 4.8,
    reviewCount: 36,
    specialties: ["Policy Development", "Compliance", "Employee Relations"],
    experience: "17+ years",
    availability: "Available this week",
    serviceCategory: "hr",
    regions: ["Cape Town", "Western Cape Region"]
  },
  
  // Professional Training
  {
    id: "pt1",
    name: "Felicity Mbatha",
    title: "Leadership Development Coach",
    rating: 5.0,
    reviewCount: 53,
    specialties: ["Executive Coaching", "Team Leadership", "Change Management"],
    experience: "16+ years",
    availability: "Limited availability",
    serviceCategory: "training",
    regions: ["Johannesburg", "Durban", "Virtual Training"]
  },
  {
    id: "pt2",
    name: "Justin Palmer",
    title: "Sales Training Expert",
    rating: 4.9,
    reviewCount: 41,
    specialties: ["B2B Sales Techniques", "Client Relationship Management", "Negotiation Skills"],
    experience: "13+ years",
    availability: "Available next week",
    serviceCategory: "training",
    regions: ["Nationwide", "Virtual Training Programs"]
  },
  
  // International Business
  {
    id: "ib1",
    name: "Chen Wei",
    title: "International Trade Consultant",
    rating: 4.8,
    reviewCount: 37,
    specialties: ["Asia Market Entry", "Cross-border Logistics", "Export Regulations"],
    experience: "19+ years",
    availability: "Available in 2 weeks",
    serviceCategory: "international",
    regions: ["Johannesburg", "Cape Town", "International"]
  },
  {
    id: "ib2",
    name: "Paul Anderson",
    title: "Global Business Strategist",
    rating: 4.7,
    reviewCount: 32,
    specialties: ["European Market Development", "International Partnerships", "Global Expansion"],
    experience: "15+ years",
    availability: "Available next week",
    serviceCategory: "international",
    regions: ["Cape Town", "Johannesburg", "International"]
  },
  
  // Logistics & Supply Chain
  {
    id: "ls1",
    name: "Thabiso Moloi",
    title: "Supply Chain Optimization Expert",
    rating: 4.8,
    reviewCount: 43,
    specialties: ["Distribution Network Design", "Inventory Management", "Cost Reduction"],
    experience: "12+ years",
    availability: "Available next week",
    serviceCategory: "logistics",
    regions: ["Johannesburg", "Durban", "National Supply Routes"]
  },
  {
    id: "ls2",
    name: "Lauren Pieterse",
    title: "Logistics Operations Consultant",
    rating: 4.9,
    reviewCount: 38,
    specialties: ["Transportation Optimization", "Warehouse Design", "Last-mile Solutions"],
    experience: "14+ years",
    availability: "Available in 2 weeks",
    serviceCategory: "logistics",
    regions: ["Cape Town", "Port Elizabeth", "Major Trade Routes"]
  },
  
  // Business Development
  {
    id: "bd1",
    name: "Marcus Pillay",
    title: "Partnership Development Strategist",
    rating: 5.0,
    reviewCount: 45,
    specialties: ["Strategic Alliances", "Channel Development", "Joint Ventures"],
    experience: "16+ years",
    availability: "Limited availability",
    serviceCategory: "bizdev",
    regions: ["Johannesburg", "Cape Town", "Durban", "Virtual Services"]
  },
  {
    id: "bd2",
    name: "Lerato Tshabalala",
    title: "Market Expansion Specialist",
    rating: 4.8,
    reviewCount: 39,
    specialties: ["New Market Entry", "Growth Strategy", "Customer Acquisition"],
    experience: "11+ years",
    availability: "Available next week",
    serviceCategory: "bizdev",
    regions: ["Pretoria", "Johannesburg", "Nationwide"]
  }
];

export const getProfessionalsByCategoryId = (categoryId: string): Professional[] => {
  return businessProfessionals.filter(professional => 
    professional.serviceCategory === categoryId
  );
};

export const getProfessionalById = (id: string): Professional | undefined => {
  return businessProfessionals.find(professional => professional.id === id);
};
