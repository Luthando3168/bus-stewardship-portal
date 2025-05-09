
import { Wrench, Users, Building } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeHomeServices: ConciergeService[] = [
  {
    title: "Auto Repairs",
    description: "Connect with our network of trusted mechanics and service centers",
    icon: Wrench,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/auto-repairs",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Property Listings",
    description: "Exclusive property listings in partnership with Private Property",
    icon: Building,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/property",
    ownershipNote: "You own shares in 1 property development",
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Domestic Staff",
    description: "Vetted housekeepers, gardeners, and childcare professionals",
    icon: Users,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/domestic",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
