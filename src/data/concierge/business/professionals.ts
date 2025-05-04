
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
    serviceCategory: "consulting"
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
    serviceCategory: "consulting"
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
    serviceCategory: "consulting"
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
    serviceCategory: "legal"
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
    serviceCategory: "legal"
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
    serviceCategory: "legal"
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
    serviceCategory: "accounting"
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
    serviceCategory: "accounting"
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
    serviceCategory: "accounting"
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
