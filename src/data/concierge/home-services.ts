
import { Wrench, Users, Building } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeHomeServices: ConciergeService[] = [
  {
    title: "Auto Repairs",
    description: "Connect with our network of trusted mechanics and service centers",
    icon: Wrench,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/auto-repairs",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Property Listings",
    description: "Exclusive property listings for sale and rental across South Africa",
    icon: Building,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/property",
    ownershipNote: "You own shares in 1 property development",
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Domestic Staff",
    description: "Vetted housekeepers, gardeners, and childcare professionals",
    icon: Users,
    color: "text-lime-600",
    bgColor: "bg-lime-50",
    link: "/concierge/domestic",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
