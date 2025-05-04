
import { ShoppingCart, ShoppingBag, Gift, Wine } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeShoppingServices: ConciergeService[] = [
  {
    title: "Grocery Shopping",
    description: "Order fresh groceries from our partnered stores with delivery right to your door",
    icon: ShoppingCart,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/grocery",
    ownershipNote: "You own shares in 3 of these stores",
    isFavorite: true,
    recentlyUsed: true
  },
  {
    title: "Wine & Spirits Delivery",
    description: "Order premium alcoholic beverages delivered to your location",
    icon: Wine,
    color: "text-navyblue",
    bgColor: "bg-navyblue/5",
    link: "/concierge/wine",
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
