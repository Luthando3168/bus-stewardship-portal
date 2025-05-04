
import { Calendar, Ticket, BookOpen, Utensils, Film } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeLifestyleServices: ConciergeService[] = [
  {
    title: "Event Tickets",
    description: "Access tickets to concerts, sports matches and theater performances",
    icon: Ticket,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/events",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Education Services",
    description: "School placements, tutoring services and educational resources",
    icon: BookOpen,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/education",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Restaurant Takeaways",
    description: "Order from a selection of fine dining and casual restaurants",
    icon: Utensils,
    color: "text-white",
    bgColor: "bg-amber-600",
    link: "/concierge/restaurants",
    ownershipNote: null,
    isFavorite: true,
    recentlyUsed: false
  },
  {
    title: "Entertainment",
    description: "Movie tickets, theme parks, and leisure activity bookings",
    icon: Film,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/entertainment",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
