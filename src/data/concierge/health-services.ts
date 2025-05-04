
import { HeartPulse, ShieldCheck } from "lucide-react";
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
  },
  {
    title: "MCA Health Shield",
    description: "Premium medical aid with exclusive benefits for MCA members",
    icon: ShieldCheck,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/medical-aid",
    ownershipNote: "Shareholder in 4 MCA Network Hospitals",
    isFavorite: true,
    recentlyUsed: false
  }
];
