
import { ShoppingCart, ShoppingBag, Gift, Wine } from "lucide-react";
import { ConciergeService } from './types';

export const conciergeShoppingServices: ConciergeService[] = [
  {
    title: "Food Corner Grocery",
    description: "Order fresh groceries from Food Corner with delivery right to your door",
    icon: ShoppingCart,
    color: "text-white",
    bgColor: "bg-red-600",
    link: "/concierge/grocery",
    ownershipNote: "You own shares in this store",
    isFavorite: true,
    recentlyUsed: true
  },
  {
    title: "Wine & Spirits Delivery",
    description: "Order premium alcoholic beverages delivered to your location",
    icon: Wine,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/wine",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Gift Services",
    description: "Gift selection, wrapping and delivery for all occasions",
    icon: Gift,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/gifts",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  },
  {
    title: "Shopping Assistant",
    description: "Personal shopping services for clothing, accessories and more",
    icon: ShoppingBag,
    color: "text-white",
    bgColor: "bg-navyblue",
    link: "/concierge/shopping",
    ownershipNote: null,
    isFavorite: false,
    recentlyUsed: false
  }
];
