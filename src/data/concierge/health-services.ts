
import { HeartPulse } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeHealthServices: ConciergeService[] = [
  {
    title: "Doctor Appointments",
    description: "Book appointments with our network of healthcare providers",
    icon: HeartPulse,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/doctors",
    ownershipNote: "You own shares in 2 healthcare centers",
    isFavorite: false,
    recentlyUsed: true
  },
  {
    title: "Healthcare Services",
    description: "Medical aid assistance, specialist referrals and healthcare advice",
    icon: HeartPulse,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/healthcare",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
