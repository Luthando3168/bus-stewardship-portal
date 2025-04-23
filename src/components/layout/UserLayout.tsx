
import { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UserSidebar from "./user/UserSidebar";
import UserHeader from "./user/UserHeader";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import { Loader } from "lucide-react";

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

        // Check if client record exists
        const { data: client, error } = await supabase
          .from('clients')
          .select('status')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching client data:', error);
          
          // If no client record, create one with pending_registration status
          if (error.code === 'PGRST116') {
            const fullName = user.user_metadata?.full_name || 'New User';
            const { error: insertError } = await supabase
              .from('clients')
              .insert([{ 
                id: user.id, 
                status: 'pending_registration',
                full_name: fullName
              }]);
            
            if (insertError) {
              throw insertError;
            }
            
            setRegistrationStatus('pending_registration');
            
            // Store the full name in localStorage
            localStorage.setItem("userName", fullName.split(' ')[0] || "");
            localStorage.setItem("userSurname", fullName.split(' ').slice(1).join(' ') || "");
            
            toast.info("Please complete your registration");
            navigate('/complete-registration');
            return;
          } else {
            throw error;
          }
        }

        // Client record exists
        setRegistrationStatus(client?.status || 'pending_registration');
        
        // Get user profile data for name
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name')
          .eq('id', user.id)
          .single();
          
        // Store the full name in localStorage if available
        if (profile?.full_name) {
          const fullName = profile.full_name;
          localStorage.setItem("userName", fullName.split(' ')[0] || "");
          localStorage.setItem("userSurname", fullName.split(' ').slice(1).join(' ') || "");
        } else if (user.user_metadata?.full_name) {
          const fullName = user.user_metadata.full_name;
          localStorage.setItem("userName", fullName.split(' ')[0] || "");
          localStorage.setItem("userSurname", fullName.split(' ').slice(1).join(' ') || "");
        }

        // Force redirect to complete registration if status is pending
        if (client?.status === 'pending_registration' && 
            window.location.pathname !== '/complete-registration') {
          toast.info("Please complete your registration first");
          navigate('/complete-registration');
        }
        
        // If the user isn't approved yet, they shouldn't access the dashboard
        if (client?.status !== 'approved' && 
            client?.status !== 'active' && 
            window.location.pathname !== '/complete-registration') {
          toast.error("Your account is pending approval");
          navigate('/complete-registration');
        }
      } catch (error) {
        console.error('Error checking registration status:', error);
        toast.error('Error checking registration status');
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkRegistrationStatus();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem("userRole");
      localStorage.removeItem("userName");
      localStorage.removeItem("userSurname");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("clientNumber");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Error logging out");
    }
  };

  // Get full name from localStorage for user greeting
  const userName = localStorage.getItem("userName") || "User";
  const userSurname = localStorage.getItem("userSurname") || "";
  const fullName = `${userName} ${userSurname}`.trim();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-lightgray">
        <div className="text-center">
          <Loader className="h-8 w-8 animate-spin text-navyblue mx-auto mb-4" />
          <p className="text-navyblue">Loading your account...</p>
        </div>
      </div>
    );
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
