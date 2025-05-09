
import { PlaneTakeoff, Building, Car, Bed } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeTravelServices: ConciergeService[] = [
  {
    title: "Flight Bookings",
    description: "Book domestic and international flights with exclusive member discounts",
    icon: PlaneTakeoff,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/flights",
    ownershipNote: "You own shares in SAA",
    isFavorite: true,
    recentlyUsed: false
  },
  {
    title: "Accommodation",
    description: "Find and book hotels, guesthouses and vacation rentals across the country",
    icon: Bed,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/accommodation",
    ownershipNote: null,
    isFavorite: true,
    recentlyUsed: true
  },
  {
    title: "Auto Services",
    description: "Car rentals and chauffeur services for your transportation needs",
    icon: Car,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/auto-services",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
