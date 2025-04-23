
import { ReactNode, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Users, LayoutDashboard, FileText, 
  Bell, LogOut, FileChartLine, Menu,
  CreditCard, CalendarClock, UserCheck,
  Shield, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { icon: Shield, label: "Share Certificates", path: "/admin/share-certificates" },
    { icon: CreditCard, label: "Bank Accounts", path: "/admin/bank-accounts" },
    { icon: CalendarClock, label: "Consultations", path: "/admin/consultations" },
    { icon: UserCheck, label: "Beneficiaries", path: "/admin/beneficiaries" },
    { icon: Bell, label: "Notifications", path: "/admin/notifications" },
    { icon: FileText, label: "Reports", path: "/admin/reports" },
    { icon: Download, label: "Financial Statements", path: "/admin/financial-statements" },
  ];

  const renderSidebar = (fullWidth = false) => (
    <div
      className={`bg-navyblue text-white h-full ${fullWidth ? "w-full" : isSidebarOpen ? "w-64" : "w-20"}`}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex flex-col items-start mb-8">
          <div className="flex flex-col">
            <span className="font-montserrat font-bold text-lg tracking-tight">
              <span className="text-gold border-b-2 border-gold pb-0.5">Luthando</span>
              <span className="text-white ml-1">Maduna</span>
            </span>
            <span className="font-montserrat text-[10px] text-white tracking-wider mt-1">
              CHARTERED ACCOUNTANTS
            </span>
          </div>
          {!fullWidth && !isSidebarOpen && (
            <div className="font-montserrat font-bold text-lg mt-2">MCA</div>
          )}
          {!fullWidth && (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="absolute right-2 top-4 text-white p-2 rounded hover:bg-blue-900 transition"
            >
              {isSidebarOpen ? "←" : "→"}
            </button>
          )}
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center p-3 rounded hover:bg-blue-900 transition"
                  onClick={isMobile ? () => setMobileMenuOpen(false) : undefined}
                >
                  <item.icon className="h-5 w-5" />
                  {(fullWidth || isSidebarOpen) && <span className="ml-3">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <div className="border-t border-blue-900 pt-4 mb-4">
            {(fullWidth || isSidebarOpen) && (
              <div className="text-sm mb-2">Signed in as {userName}</div>
            )}
            <Button
              variant="outline"
              className="flex items-center justify-center w-full border-white text-white hover:bg-blue-900"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              {(fullWidth || isSidebarOpen) ? "Logout" : ""}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="flex min-h-screen bg-lightgray flex-col">
        <header className="bg-white shadow-sm p-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="mr-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-semibold text-navyblue">
                MCA Direct Admin
              </h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <Link to="/admin/notifications">
                <Bell className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </header>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="w-[80%] max-w-[320px] p-0 bg-navyblue">
            {renderSidebar(true)}
          </SheetContent>
        </Sheet>

        <main className="flex-1 p-3">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-lightgray">
      {renderSidebar()}

      <div className="flex-1 overflow-x-hidden">
        <header className="bg-white shadow-sm p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold text-navyblue">
              MCA Direct Admin
            </h1>
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="border-navyblue text-navyblue"
                asChild
              >
                <Link to="/admin/users">
                  <Users className="h-4 w-4 mr-2" />
                  Search Users
                </Link>
              </Button>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
