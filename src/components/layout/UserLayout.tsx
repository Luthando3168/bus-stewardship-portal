
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UserSidebar from "./user/UserSidebar";
import UserHeader from "./user/UserHeader";

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

  return (
    <div className="flex min-h-screen bg-lightgray">
      <UserSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        userName={userName}
        onLogout={handleLogout}
      />
      <div className="flex-1 overflow-x-hidden">
        <UserHeader notifications={notifications} />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;
