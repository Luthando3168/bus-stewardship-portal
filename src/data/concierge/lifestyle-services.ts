
import { Calendar, Ticket, BookOpen, Utensils, Film } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeLifestyleServices: ConciergeService[] = [
  {
    title: "Event Tickets",
    description: "Access tickets to concerts, sports matches and theater performances",
    icon: Ticket,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/events",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Education Services",
    description: "School placements, tutoring services and educational resources",
    icon: BookOpen,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/education",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Restaurant Takeaways",
    description: "Order from a selection of fine dining and casual restaurants",
    icon: Utensils,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/restaurants",
    ownershipNote: null,
    isFavorite: true,
    recentlyUsed: false
  },
  {
    title: "Entertainment",
    description: "Movie tickets, theme parks, and leisure activity bookings",
    icon: Film,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    link: "/concierge/entertainment",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
