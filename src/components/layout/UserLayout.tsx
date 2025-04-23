
import { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import UserSidebar from "./user/UserSidebar";
import UserHeader from "./user/UserHeader";
import LoadingScreen from "@/components/ui/LoadingScreen";
import RegistrationRequired from "@/components/auth/RegistrationRequired";
import { useAuthState } from "@/hooks/useAuthState";
import { useClientRegistration } from "@/hooks/useClientRegistration";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const { isLoading: authLoading, user, handleLogout } = useAuthState();
  const { isLoading: registrationLoading, registrationStatus, error: registrationError } = useClientRegistration(user);

  const userName = localStorage.getItem("userName") || "User";
  const userSurname = localStorage.getItem("userSurname") || "";
  const fullName = `${userName} ${userSurname}`.trim();

  // Handle loading state
  if (authLoading || (registrationLoading && !registrationError)) {
    return <LoadingScreen />;
  }

  // If there was an error checking registration but we have a user,
  // just proceed to show the dashboard with limited features
  if (registrationError) {
    console.warn("Error checking registration status:", registrationError);
  }

  // Only block access to certain pages if we successfully determined registration status
  if (!registrationError && registrationStatus === 'pending_registration' && 
      (location.pathname.includes('/new-deals') || 
       location.pathname.includes('/my-investments') || 
       location.pathname.includes('/wallet'))) {
    return <RegistrationRequired />;
  }

  return (
    <div className="flex min-h-screen bg-lightgray">
      {isMobile ? (
        <>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetContent side="left" className="w-[80%] max-w-[320px] p-0 bg-navyblue">
              <UserSidebar
                isSidebarOpen={true}
                setIsSidebarOpen={() => {}}
                userName={fullName}
                onLogout={handleLogout}
              />
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
