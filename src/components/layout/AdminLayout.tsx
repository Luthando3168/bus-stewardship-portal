
import { ReactNode, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Users, LayoutDashboard, FileText, 
  Bell, LogOut, FileChartLine
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const userName = localStorage.getItem("userName") || "Admin";

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: FileChartLine, label: "Deals", path: "/admin/deals" },
    { icon: Bell, label: "Notifications", path: "/admin/notifications" },
    { icon: FileText, label: "Reports", path: "/admin/reports" },
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
              <h2 className="text-lg font-bold">Admin Panel</h2>
            ) : (
              <h2 className="text-lg font-bold">AP</h2>
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
          <div className="max-w-7xl mx-auto flex justify-between">
            <h1 className="text-xl font-semibold text-navyblue">
              Admin Dashboard
            </h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
