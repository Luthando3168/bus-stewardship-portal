
import { Users, Building, FileText } from "lucide-react";
import { ReactNode } from "react";

export interface BusinessServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  services: BusinessServiceItem[];
}

export interface BusinessServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
}

export const businessCategories: BusinessServiceCategory[] = [
  {
    id: "consulting",
    title: "Business Consulting",
    description: "Professional consulting services for your business needs",
    icon: <Users className="h-10 w-10 text-navyblue" />,
    services: [
      {
        id: "bc1",
        title: "Strategic Business Planning",
        description: "Develop comprehensive business strategies for growth and market positioning",
        price: "From R5,000",
        featured: true
      },
      {
        id: "bc2",
        title: "Market Research & Analysis",
        description: "In-depth market research and competitor analysis to identify opportunities",
        price: "From R3,500"
      },
      {
        id: "bc3",
        title: "Process Optimization",
        description: "Streamline your business processes for maximum efficiency and productivity",
        price: "From R4,000"
      }
    ]
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    description: "Essential legal services for business compliance and protection",
    icon: <Building className="h-10 w-10 text-navyblue" />,
    services: [
      {
        id: "lc1",
        title: "Business Registration",
        description: "Company registration and setup with all necessary legal documentation",
        price: "From R1,800",
        featured: true
      },
      {
        id: "lc2",
        title: "Contract Development",
        description: "Custom contract creation and review for all business requirements",
        price: "From R2,500"
      },
      {
        id: "lc3",
        title: "Regulatory Compliance",
        description: "Ensure your business meets all industry and government regulations",
        price: "From R3,000"
      }
    ]
  },
  {
    id: "accounting",
    title: "Accounting & Finance",
    description: "Professional financial services to keep your business thriving",
    icon: <FileText className="h-10 w-10 text-navyblue" />,
    services: [
      {
        id: "af1",
        title: "Financial Statement Preparation",
        description: "Professional preparation of financial statements and reports",
        price: "From R2,000",
        featured: true
      },
      {
        id: "af2",
        title: "Tax Planning & Filing",
        description: "Strategic tax planning and timely filing of all required tax returns",
        price: "From R1,500"
      },
      {
        id: "af3",
        title: "Financial Forecasting",
        description: "Data-driven financial projections to support decision making",
        price: "From R3,500"
      }
    ]
  }
];
