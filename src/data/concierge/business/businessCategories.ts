
import { ReactNode } from "react";
import { 
  Users, 
  Building, 
  FileText, 
  Code, 
  Briefcase, 
  GraduationCap,
  Globe,
  Truck,
  Handshake 
} from "lucide-react";

export interface BusinessServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  services: BusinessServiceItem[];
  regions?: string[]; // To indicate availability across different regions
}

export interface BusinessServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
  regions?: string[]; // Specific regions where this service is available
}

export const businessCategories: BusinessServiceCategory[] = [
  {
    id: "consulting",
    title: "Business Consulting",
    description: "Professional consulting services for your business needs",
    icon: <Users className="h-10 w-10 text-navyblue" />,
    regions: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape"],
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
      },
      {
        id: "bc4",
        title: "Business Transformation",
        description: "Guide your organization through major change initiatives and digital transformation",
        price: "From R7,500"
      },
      {
        id: "bc5",
        title: "Franchise Development",
        description: "Expert assistance in developing and growing franchise operations",
        price: "From R8,000",
        regions: ["Gauteng", "Western Cape"]
      }
    ]
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    description: "Essential legal services for business compliance and protection",
    icon: <Building className="h-10 w-10 text-navyblue" />,
    regions: ["Nationwide", "Remote Services Available"],
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
      },
      {
        id: "lc4",
        title: "Intellectual Property Protection",
        description: "Copyright, trademark, and patent services to protect your business assets",
        price: "From R3,500"
      },
      {
        id: "lc5",
        title: "Labor Law Consultation",
        description: "Expert guidance on employment regulations and workplace compliance",
        price: "From R2,200"
      }
    ]
  },
  {
    id: "accounting",
    title: "Accounting & Finance",
    description: "Professional financial services to keep your business thriving",
    icon: <FileText className="h-10 w-10 text-navyblue" />,
    regions: ["Nationwide", "All Major Cities"],
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
      },
      {
        id: "af4",
        title: "Bookkeeping Services",
        description: "Comprehensive bookkeeping and financial record maintenance",
        price: "From R1,200"
      },
      {
        id: "af5",
        title: "Audit Preparation & Support",
        description: "Expert assistance in preparing for and managing financial audits",
        price: "From R5,000"
      }
    ]
  },
  {
    id: "technology",
    title: "Technology Services",
    description: "IT solutions and digital transformation for modern businesses",
    icon: <Code className="h-10 w-10 text-navyblue" />,
    regions: ["Nationwide", "Remote Services Available"],
    services: [
      {
        id: "ts1",
        title: "IT Infrastructure Setup",
        description: "Design and implementation of secure and scalable IT networks",
        price: "From R8,000",
        featured: true
      },
      {
        id: "ts2",
        title: "Custom Software Development",
        description: "Tailored software solutions to address specific business needs",
        price: "From R15,000"
      },
      {
        id: "ts3",
        title: "Cybersecurity Assessment",
        description: "Evaluate and enhance your business's digital security posture",
        price: "From R6,500"
      },
      {
        id: "ts4",
        title: "Cloud Migration Services",
        description: "Transfer your business operations seamlessly to cloud platforms",
        price: "From R10,000"
      },
      {
        id: "ts5",
        title: "Digital Marketing Technology",
        description: "Implementation of marketing automation and analytics tools",
        price: "From R4,500"
      }
    ]
  },
  {
    id: "hr",
    title: "Human Resources",
    description: "Workforce management and development solutions",
    icon: <Briefcase className="h-10 w-10 text-navyblue" />,
    regions: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Free State"],
    services: [
      {
        id: "hr1",
        title: "Recruitment & Talent Acquisition",
        description: "Source and secure top talent tailored to your business needs",
        price: "From R7,500",
        featured: true
      },
      {
        id: "hr2",
        title: "Employee Development Programs",
        description: "Create structured training and upskilling initiatives for your team",
        price: "From R5,000"
      },
      {
        id: "hr3",
        title: "HR Policy Development",
        description: "Establish compliant and effective workplace policies and procedures",
        price: "From R3,500"
      },
      {
        id: "hr4",
        title: "Performance Management Systems",
        description: "Design and implement effective employee evaluation frameworks",
        price: "From R4,200"
      },
      {
        id: "hr5",
        title: "Employee Relations Management",
        description: "Expert guidance on maintaining positive workplace relationships",
        price: "From R2,800"
      }
    ]
  },
  {
    id: "training",
    title: "Professional Training",
    description: "Skills development and certification programs",
    icon: <GraduationCap className="h-10 w-10 text-navyblue" />,
    regions: ["Major Metropolitan Areas", "Online Programs Available"],
    services: [
      {
        id: "pt1",
        title: "Leadership Development",
        description: "Comprehensive programs to cultivate effective leadership skills",
        price: "From R6,000",
        featured: true
      },
      {
        id: "pt2",
        title: "Sales Mastery Training",
        description: "Practical techniques to boost sales performance and client relationships",
        price: "From R3,800"
      },
      {
        id: "pt3",
        title: "Project Management Certification",
        description: "Industry-recognized certification preparation and coursework",
        price: "From R9,500"
      },
      {
        id: "pt4",
        title: "Digital Literacy Programs",
        description: "Essential technology skills training for the modern workplace",
        price: "From R2,500"
      },
      {
        id: "pt5",
        title: "Public Speaking & Presentation",
        description: "Master the art of effective communication and persuasive presentations",
        price: "From R3,200"
      }
    ]
  },
  {
    id: "international",
    title: "International Business",
    description: "Global expansion and cross-border operations support",
    icon: <Globe className="h-10 w-10 text-navyblue" />,
    regions: ["Johannesburg", "Cape Town", "Durban"],
    services: [
      {
        id: "ib1",
        title: "Export/Import Consulting",
        description: "Navigate international trade regulations and logistics",
        price: "From R8,500",
        featured: true
      },
      {
        id: "ib2",
        title: "Global Market Entry Strategy",
        description: "Tailored plans for expanding your business into foreign markets",
        price: "From R12,000"
      },
      {
        id: "ib3",
        title: "Cross-Cultural Business Training",
        description: "Prepare your team for successful international business interactions",
        price: "From R4,500"
      },
      {
        id: "ib4",
        title: "International Compliance Assistance",
        description: "Navigate regulatory requirements across multiple countries",
        price: "From R7,000"
      },
      {
        id: "ib5",
        title: "Global Supply Chain Optimization",
        description: "Streamline international sourcing, manufacturing and distribution",
        price: "From R9,800"
      }
    ]
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "Optimize business operations and product movement",
    icon: <Truck className="h-10 w-10 text-navyblue" />,
    regions: ["Nationwide", "Major Trade Routes"],
    services: [
      {
        id: "ls1",
        title: "Supply Chain Assessment",
        description: "Comprehensive evaluation and improvement recommendations",
        price: "From R7,200",
        featured: true
      },
      {
        id: "ls2",
        title: "Warehouse Optimization",
        description: "Maximize efficiency in storage and fulfillment operations",
        price: "From R6,500"
      },
      {
        id: "ls3",
        title: "Transportation Management",
        description: "Strategic planning and cost optimization for goods movement",
        price: "From R5,800"
      },
      {
        id: "ls4",
        title: "Inventory Control Systems",
        description: "Implement effective stock management and forecasting solutions",
        price: "From R4,200"
      },
      {
        id: "ls5",
        title: "Last-Mile Delivery Solutions",
        description: "Optimize the final stage of your product delivery process",
        price: "From R3,900"
      }
    ]
  },
  {
    id: "bizdev",
    title: "Business Development",
    description: "Strategic growth and partnership initiatives",
    icon: <Handshake className="h-10 w-10 text-navyblue" />,
    regions: ["All Major Business Centers", "Remote Services Available"],
    services: [
      {
        id: "bd1",
        title: "Partnership Development",
        description: "Identify and establish strategic business alliances and partnerships",
        price: "From R8,000",
        featured: true
      },
      {
        id: "bd2",
        title: "Sales Strategy Optimization",
        description: "Refine your sales approach for maximum market penetration",
        price: "From R6,500"
      },
      {
        id: "bd3",
        title: "Market Expansion Planning",
        description: "Structured approach to entering new markets and segments",
        price: "From R7,500"
      },
      {
        id: "bd4",
        title: "Customer Acquisition Programs",
        description: "Systematic methods to attract and convert new clients",
        price: "From R5,200"
      },
      {
        id: "bd5",
        title: "Account Management Systems",
        description: "Processes to maximize value from existing client relationships",
        price: "From R4,800"
      }
    ]
  }
];
