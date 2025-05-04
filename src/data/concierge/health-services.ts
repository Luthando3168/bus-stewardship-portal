
import { HeartPulse } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeHealthServices: ConciergeService[] = [
  {
    title: "Doctor Appointments",
    description: "Book appointments with our network of healthcare providers",
    icon: HeartPulse,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/doctors",
    ownershipNote: "You own shares in 2 healthcare centers",
    isFavorite: false,
    recentlyUsed: true
  },
  {
    title: "Healthcare Services",
    description: "Medical aid assistance, specialist referrals and healthcare advice",
    icon: HeartPulse,
    color: "text-red-500",
    bgColor: "bg-red-50",
    link: "/concierge/healthcare",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
