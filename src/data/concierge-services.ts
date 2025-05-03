
import { 
  ShoppingCart, 
  PlaneTakeoff, 
  Building, 
  Calendar, 
  Ticket,
  BookOpen, 
  Wine, 
  Utensils, 
  Car, 
  Wrench,
  HeartPulse, 
  Briefcase, 
  HandCoins, 
  Users, 
  Calculator, 
  Film, 
  Laptop, 
  Gift, 
  ShoppingBag 
} from "lucide-react";

export const conciergeServices = [
  {
    title: "Grocery Shopping",
    description: "Order fresh groceries from our partnered stores with delivery right to your door",
    icon: ShoppingCart,
    color: "text-green-600",
    bgColor: "bg-green-50",
    link: "/concierge/grocery",
    ownershipNote: "You own shares in 3 of these stores",
    isFavorite: true,
    recentlyUsed: true
  },
  {
    title: "Flight Bookings",
    description: "Book domestic and international flights with exclusive member discounts",
    icon: PlaneTakeoff,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
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
    title: "Doctor Appointments",
    description: "Book appointments with our network of healthcare providers",
    icon: HeartPulse,
    color: "text-red-600",
    bgColor: "bg-red-50",
    link: "/concierge/doctors",
    ownershipNote: "You own shares in 2 healthcare centers",
    isFavorite: false,
    recentlyUsed: true
  },
  {
    title: "Event Tickets",
    description: "Access tickets to concerts, sports matches and theater performances",
    icon: Ticket,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    link: "/concierge/events",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Education Services",
    description: "School placements, tutoring services and educational resources",
    icon: BookOpen,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    link: "/concierge/education",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Wine & Spirits Delivery",
    description: "Order premium alcoholic beverages delivered to your location",
    icon: Wine,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    link: "/concierge/wine",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Restaurant Takeaways",
    description: "Order from a selection of fine dining and casual restaurants",
    icon: Utensils,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    link: "/concierge/restaurants",
    ownershipNote: null,
    isFavorite: true,
    recentlyUsed: false
  },
  {
    title: "Auto Services",
    description: "Car rentals and chauffeur services for your transportation needs",
    icon: Car,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    link: "/concierge/auto-services",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Auto Repairs",
    description: "Connect with our network of trusted mechanics and service centers",
    icon: Wrench,
    color: "text-gray-600",
    bgColor: "bg-gray-100",
    link: "/concierge/auto-repairs",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Property Listings",
    description: "Exclusive property listings for sale and rental across South Africa",
    icon: Building,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    link: "/concierge/property",
    ownershipNote: "You own shares in 1 property development",
    isFavorite: false,
    recentlyUsed: false
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
  },
  {
    title: "Business Services",
    description: "Accounting, legal and consulting services for your business needs",
    icon: Briefcase,
    color: "text-slate-700",
    bgColor: "bg-slate-50",
    link: "/concierge/business",
    ownershipNote: null,
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
  },
  {
    title: "Financial Planning",
    description: "Personal financial advice and planning services",
    icon: HandCoins,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    link: "/concierge/financial",
    ownershipNote: null,
    isFavorite: false,
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
  },
  {
    title: "Tech Support",
    description: "Home IT setup, tech troubleshooting and equipment procurement",
    icon: Laptop,
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    link: "/concierge/tech",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Gift Services",
    description: "Gift selection, wrapping and delivery for all occasions",
    icon: Gift,
    color: "text-fuchsia-600",
    bgColor: "bg-fuchsia-50",
    link: "/concierge/gifts",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Shopping Assistant",
    description: "Personal shopping services for clothing, accessories and more",
    icon: ShoppingBag,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    link: "/concierge/shopping",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
