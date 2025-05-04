
import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Wallet,
  Users,
  FileText,
  Building,
  HelpCircle,
  CircleDollarSign,
  Coffee
} from "lucide-react";

export interface SidebarLink {
  name: string;
  icon: React.ReactNode;
  path: string;
}

export const getSidebarLinks = (): SidebarLink[] => [
  {
    name: "Dashboard",
    icon: <Home size={20} />,
    path: "/user/dashboard",
  },
  {
    name: "Investments",
    icon: <Building size={20} />,
    path: "/user/investments",
  },
  {
    name: "Financial Statements",
    icon: <FileText size={20} />,
    path: "/user/statements",
  },
  {
    name: "Wallet",
    icon: <Wallet size={20} />,
    path: "/user/wallet",
  },
  {
    name: "Loans",
    icon: <CircleDollarSign size={20} />,
    path: "/user/loans",
  },
  {
    name: "Concierge",
    icon: <Coffee size={20} />,
    path: "/user/concierge",
  },
  {
    name: "Beneficiaries",
    icon: <Users size={20} />,
    path: "/user/beneficiaries",
  },
  {
    name: "How We Work",
    icon: <HelpCircle size={20} />,
    path: "/user/how-we-work",
  },
  {
    name: "Profile",
    icon: <User size={20} />,
    path: "/user/profile",
  },
];

interface SidebarLinksProps {
  isSidebarOpen: boolean;
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({ isSidebarOpen }) => {
  const sidebarLinks = getSidebarLinks();

  return (
    <nav className="flex-1 p-4 space-y-1.5">
      {sidebarLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 p-2.5 rounded-md transition-all",
              isActive
                ? "bg-white/10 text-white"
                : "hover:bg-white/5 text-gray-300"
            )
          }
        >
          <span>{link.icon}</span>
          <span
            className={cn(
              "transition-all whitespace-nowrap",
              isSidebarOpen ? "opacity-100" : "opacity-0 w-0 hidden"
            )}
          >
            {link.name}
          </span>
          {!isSidebarOpen && (
            <span className="sr-only">{link.name}</span>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default SidebarLinks;
