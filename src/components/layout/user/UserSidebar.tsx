
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  Wallet,
  Users,
  FileText,
  Settings,
  LogOut,
  Building,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  BarChart3,
} from "lucide-react";

interface UserSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  userName: string;
  onLogout: () => void;
}

const UserSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  userName,
  onLogout,
}: UserSidebarProps) => {
  const location = useLocation();

  // Read the client number from localStorage
  const clientNumber = localStorage.getItem("clientNumber") || "N/A";

  const sidebarLinks = [
    {
      name: "Dashboard",
      icon: <Home size={20} />,
      path: "/user/dashboard",
    },
    {
      name: "Investment Opportunities",
      icon: <ShoppingBag size={20} />,
      path: "/user/investments",
    },
    {
      name: "Pending Deals",
      icon: <BarChart3 size={20} />,
      path: "/user/pending-deals",
    },
    {
      name: "My Investments",
      icon: <Building size={20} />,
      path: "/user/my-investments",
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
      name: "Beneficiaries",
      icon: <Users size={20} />,
      path: "/user/beneficiaries",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/user/profile",
    },
  ];

  return (
    <aside
      className={cn(
        "min-h-screen bg-navyblue text-white transition-all duration-300 ease-in-out flex flex-col relative",
        isSidebarOpen ? "w-64" : "w-20"
      )}
    >
      <button
        className="absolute -right-3 top-10 bg-gold text-navyblue rounded-full p-1 z-10 hidden md:block"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      <div className="p-4 border-b border-navyblue/20">
        <div
          className={cn(
            "font-bold text-xl transition-all",
            isSidebarOpen ? "opacity-100" : "opacity-0"
          )}
        >
          MCA Direct
        </div>
        {/* Show client number under MCA Direct only when expanded */}
        {isSidebarOpen && (
          <div className="text-xs mt-1 text-gray-200 font-mono">
            Client Number: <span className="font-semibold">{clientNumber}</span>
          </div>
        )}
        {!isSidebarOpen && <div className="text-xl font-bold text-center">MCA</div>}
      </div>

      <div className="p-4 border-b border-navyblue/20">
        <div
          className={cn(
            "transition-all",
            isSidebarOpen ? "block" : "hidden"
          )}
        >
          <p className="text-sm text-gray-300">Welcome,</p>
          <p className="font-semibold truncate">{userName}</p>
        </div>
        {!isSidebarOpen && (
          <div className="flex justify-center">
            <div className="h-8 w-8 rounded-full bg-gold text-navyblue flex items-center justify-center font-bold">
              {userName.charAt(0)}
            </div>
          </div>
        )}
      </div>

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

      <div className="p-4 border-t border-navyblue/20">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/5"
          onClick={onLogout}
        >
          <LogOut size={20} />
          <span
            className={cn(
              "ml-2",
              isSidebarOpen ? "inline" : "sr-only"
            )}
          >
            Logout
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default UserSidebar;
