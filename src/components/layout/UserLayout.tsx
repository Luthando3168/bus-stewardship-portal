
import { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import UserSidebar from "./user/UserSidebar";
import UserHeader from "./user/UserHeader";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuthState } from "@/hooks/useAuthState";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleLogout } = useAuthState();
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

  // Use a demo name for users who aren't logged in
  const userName = localStorage.getItem("userName") || "Demo User";
  const userSurname = localStorage.getItem("userSurname") || "";
  const fullName = `${userName} ${userSurname}`.trim();

  return (
    <div className="flex min-h-screen bg-lightgray">
      {isMobile ? (
        <>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetContent side="left" className="w-[80%] max-w-[320px] p-0 bg-navyblue">
              <div className="flex flex-col h-full">
                <UserSidebar
                  isSidebarOpen={true}
                  setIsSidebarOpen={() => {}}
                  userName={fullName}
                  onLogout={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                />
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex-1 overflow-x-hidden">
            <UserHeader 
              notifications={notifications} 
              isMobile={true}
              onMenuClick={() => setMobileMenuOpen(true)}
              userName={fullName}
            />
            <main className="px-4 py-3 mx-auto">{children}</main>
          </div>
        </>
      ) : (
        <>
          <UserSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            userName={fullName}
            onLogout={handleLogout}
          />
          <div className="flex-1 overflow-x-hidden">
            <UserHeader notifications={notifications} userName={fullName} />
            <main className="max-w-7xl mx-auto p-4">{children}</main>
          </div>
        </>
      )}
    </div>
  );
};

export default UserLayout;
