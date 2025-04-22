import { Link, useLocation } from "react-router-dom";
import { User, LogOut, FileText, Wallet, FileChartLine, ArrowLeft, Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { icon: FileText, label: "Beneficiaries", path: "/user/beneficiaries" },
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
          <Link to="/" className="flex flex-col items-start group cursor-pointer">
            <span className="font-montserrat font-bold text-lg tracking-tight group-hover:text-gold transition-colors">
              <span className="text-gold border-b-2 border-gold pb-0.5">Luthando</span>
              <span className="text-white"> Maduna</span>
            </span>
            <span className="font-montserrat text-xs text-white tracking-wider group-hover:text-gold transition-colors">
              CHARTERED ACCOUNTANTS
            </span>
          </Link>
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
            <li className="mt-4">
              <Link
                to="/contact"
                className="flex items-center px-3 py-2 rounded bg-gold hover:bg-lightgold text-white font-semibold transition"
              >
                <span className="ml-0 text-base">Request A Consultation</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="border-t border-blue-900 pt-4 mb-2 text-xs text-gray-300 px-2">
          <div className="mb-2">Signed in as {userName}</div>
          <div className="flex gap-3 mb-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:info@luthandoms.co.za" className="text-white hover:text-gold">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full bg-white text-navyblue hover:bg-gray-100 flex items-center justify-center border-white"
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
