
import { Briefcase, HandCoins, Laptop, Calculator } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeBusinessServices: ConciergeService[] = [
  {
    title: "Business Services",
    description: "Accounting, legal and consulting services for your business needs",
    icon: Briefcase,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/business",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Financial Planning",
    description: "Personal financial advice and planning services",
    icon: HandCoins,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/financial",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Tech Support",
    description: "Home IT setup, tech troubleshooting and equipment procurement",
    icon: Laptop,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/tech",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
