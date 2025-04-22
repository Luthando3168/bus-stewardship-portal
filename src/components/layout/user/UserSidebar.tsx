
import { Link } from "react-router-dom";
import { User, LogOut, FileText, Wallet, FileChartLine } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  onLogout 
}: UserSidebarProps) => {
  const menuItems = [
    { icon: FileChartLine, label: "Dashboard", path: "/user/dashboard" },
    { icon: FileText, label: "New Deals", path: "/user/new-deals" },
    { icon: FileText, label: "Current Investments", path: "/user/investments" },
    { icon: FileText, label: "Financial Statements", path: "/user/statements" },
    { icon: Wallet, label: "My Wallet", path: "/user/wallet" },
    { icon: User, label: "My Profile", path: "/user/profile" },
  ];

  return (
    <div
      className="bg-navyblue text-white h-full flex-shrink-0"
      style={{ width: isSidebarOpen ? '100%' : '80px' }}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          {isSidebarOpen ? (
            <h2 className="text-base md:text-lg font-bold">Client Portal</h2>
          ) : (
            <h2 className="text-lg font-bold">CP</h2>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white p-2 rounded hover:bg-blue-900 transition hidden md:block"
          >
            {isSidebarOpen ? "←" : "→"}
          </button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center p-3 rounded hover:bg-blue-900 transition"
                >
                  <item.icon className="h-5 w-5" />
                  {isSidebarOpen && <span className="ml-3 text-sm md:text-base">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <div className="border-t border-blue-900 pt-4 mb-4">
            {isSidebarOpen && (
              <div className="text-sm mb-2">Signed in as {userName}</div>
            )}
            <Button
              variant="outline"
              className="flex items-center justify-center w-full border-white text-white hover:bg-blue-900"
              onClick={onLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              {isSidebarOpen ? "Logout" : ""}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
