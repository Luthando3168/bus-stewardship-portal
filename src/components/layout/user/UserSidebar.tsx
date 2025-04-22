
import { Link, useLocation } from "react-router-dom";
import { User, LogOut, FileText, Wallet, FileChartLine, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface UserSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  userName: string;
  onLogout: () => void;
}

const menuItems = [
  { icon: FileChartLine, label: "Dashboard", path: "/user/dashboard" },
  { icon: FileText, label: "New Deals", path: "/user/new-deals" },
  { icon: FileText, label: "Current Investments", path: "/user/investments" },
  { icon: FileText, label: "Financial Statements", path: "/user/statements" },
  { icon: Wallet, label: "My Wallet", path: "/user/wallet" },
  { icon: User, label: "My Profile", path: "/user/profile" },
];

const UserSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  userName,
  onLogout,
}: UserSidebarProps) => {
  const location = useLocation();

  return (
    <aside className="bg-navyblue min-h-screen w-64 flex flex-col justify-between py-6 px-3 text-white border-r border-blue-900">
      <div>
        <div className="flex justify-between items-center mb-8 px-2">
          <h2 className="text-lg font-bold">Client Portal</h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white p-1 rounded hover:bg-blue-900 transition md:hidden"
            aria-label="Toggle sidebar"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded hover:bg-blue-900 transition ${
                    location.pathname === item.path ? "bg-blue-900 font-bold" : ""
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="ml-3 text-base">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <div className="border-t border-blue-900 pt-4 mb-2 text-xs text-gray-300 px-2">
          Signed in as {userName}
        </div>
        <Button
          variant="outline"
          className="w-full border-white text-white hover:bg-blue-900 flex items-center justify-center"
          onClick={onLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default UserSidebar;
