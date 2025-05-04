
import { Wallet } from "lucide-react";
import { ConciergeService } from "./types";

export const conciergeFinancialServices: ConciergeService[] = [
  {
    title: "Financial Planning",
    description: "Expert financial planning services in partnership with Fedgroup and Verum Capital",
    icon: Wallet,
    color: "text-green-600",
    bgColor: "bg-green-900",
    link: "/concierge/financial",
    ownershipNote: "Premium Partnership",
    isFavorite: false,
    recentlyUsed: false
  }
];
