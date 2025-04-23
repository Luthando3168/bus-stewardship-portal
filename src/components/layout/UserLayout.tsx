import { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UserSidebar from "./user/UserSidebar";
import UserHeader from "./user/UserHeader";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { supabase } from "@/integrations/supabase/client";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [registrationStatus, setRegistrationStatus] = useState<string | null>(null);
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

  useEffect(() => {
    const checkRegistrationStatus = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          navigate('/login');
          return;
        }

        const { data: client, error } = await supabase
          .from('clients')
          .select('status')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        setRegistrationStatus(client?.status || null);

        if (client?.status === 'pending_registration' && window.location.pathname !== '/complete-registration') {
          navigate('/complete-registration');
        }
      } catch (error) {
        console.error('Error checking registration status:', error);
        toast.error('Error checking registration status');
      } finally {
        setIsLoading(false);
      }
    };

    checkRegistrationStatus();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userSurname");
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  // Get full name from localStorage for user greeting
  const userName = localStorage.getItem("userName") || "User";
  const userSurname = localStorage.getItem("userSurname") || "";
  const fullName = `${userName} ${userSurname}`.trim();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (registrationStatus === 'pending_registration') {
    navigate('/complete-registration');
    return null;
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
