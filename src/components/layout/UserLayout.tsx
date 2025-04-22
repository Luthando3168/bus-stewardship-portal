
import { ReactNode, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  User, LogOut, FileText, 
  Wallet, FileChartLine, Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications] = useState([
    {
      id: 1,
      title: "New Investment Opportunity",
      message: "A new deal is available in the Property Impact Fund",
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "Statement Available",
      message: "Your March 2024 statement is ready to view",
      time: "1 day ago"
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const userName = localStorage.getItem("userName") || "User";

  const menuItems = [
    { icon: FileChartLine, label: "Dashboard", path: "/user/dashboard" },
    { icon: FileText, label: "New Deals", path: "/user/new-deals" },
    { icon: FileText, label: "Current Investments", path: "/user/investments" },
    { icon: FileText, label: "Financial Statements", path: "/user/statements" },
    { icon: Wallet, label: "My Wallet", path: "/user/wallet" },
    { icon: User, label: "My Profile", path: "/user/profile" },
  ];

  return (
    <div className="flex min-h-screen bg-lightgray">
      {/* Sidebar */}
      <div
        className={`bg-navyblue text-white transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            {isSidebarOpen ? (
              <h2 className="text-lg font-bold">Client Portal</h2>
            ) : (
              <h2 className="text-lg font-bold">CP</h2>
            )}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-white p-2 rounded hover:bg-blue-900 transition"
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
                    {isSidebarOpen && <span className="ml-3">{item.label}</span>}
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
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {isSidebarOpen ? "Logout" : ""}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden">
        <header className="bg-white shadow-sm p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold text-navyblue">
              Client Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {notifications.length > 0 && (
                      <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[300px]">
                  {notifications.map((notification) => (
                    <DropdownMenuItem key={notification.id} className="p-3">
                      <div className="flex flex-col gap-1">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {notification.message}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {notification.time}
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;

