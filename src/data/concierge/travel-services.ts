
import { PlaneTakeoff, Building, Car } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeTravelServices: ConciergeService[] = [
  {
    title: "Flight Bookings",
    description: "Book domestic and international flights with exclusive member discounts",
    icon: PlaneTakeoff,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/flights",
    ownershipNote: "You own shares in SAA",
    isFavorite: true,
    recentlyUsed: false
  },
  {
    title: "Accommodation",
    description: "Find and book hotels, guesthouses and vacation rentals across the country",
    icon: Building,
    color: "text-gold",
    bgColor: "bg-gold/10",
    link: "/accommodation",
    ownershipNote: null,
    isFavorite: true,
    recentlyUsed: true
  },
  {
    title: "Auto Services",
    description: "Car rentals and chauffeur services for your transportation needs",
    icon: Car,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/auto-services",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
