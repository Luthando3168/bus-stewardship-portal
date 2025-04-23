import { ReactNode, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import UserSidebar from "./user/UserSidebar";
import UserHeader from "./user/UserHeader";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
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
            // Get profile data for name
            const { data: profile } = await supabase
              .from('profiles')
              .select('full_name')
              .eq('id', user.id)
              .single();

            const fullName = profile?.full_name || user.user_metadata?.full_name || 'New User';
            
            // Generate temporary client number
            const tempClientNumber = `TEMP${new Date().getTime().toString().slice(-6)}`;
            
            const { error: insertError } = await supabase
              .from('clients')
              .insert([{ 
                id: user.id, 
                status: 'pending_registration'
              }]);
            
            if (insertError) {
              throw insertError;
            }
            
            setRegistrationStatus('pending_registration');
            
            localStorage.setItem("userName", fullName.split(' ')[0] || "");
            localStorage.setItem("userSurname", fullName.split(' ').slice(1).join(' ') || "");
            localStorage.setItem("tempClientNumber", tempClientNumber);

            // Only show registration prompt if trying to access restricted areas
            if (location.pathname.includes('/new-deals') || 
                location.pathname.includes('/my-investments') || 
                location.pathname.includes('/wallet')) {
              toast.info("Please complete your registration to invest");
              navigate('/complete-registration');
            }
            return;
          } else {
            throw error;
          }
        }

        // Client record exists
        setRegistrationStatus(client?.status || 'pending_registration');
        
        // Get user profile data
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name')
          .eq('id', user.id)
          .single();
          
        if (profile?.full_name) {
          localStorage.setItem("userName", profile.full_name.split(' ')[0] || "");
          localStorage.setItem("userSurname", profile.full_name.split(' ').slice(1).join(' ') || "");
        }

        // Only restrict access to investment-related pages if not fully registered
        if (client?.status === 'pending_registration' && 
            (location.pathname.includes('/new-deals') || 
             location.pathname.includes('/my-investments') || 
             location.pathname.includes('/wallet'))) {
          toast.info("Please complete your registration to invest");
          navigate('/complete-registration');
        }
        
        // If the user isn't approved yet, they shouldn't access investment pages
        if (client?.status !== 'approved' && 
            client?.status !== 'active' && 
            (location.pathname.includes('/new-deals') || 
             location.pathname.includes('/my-investments') || 
             location.pathname.includes('/wallet'))) {
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
  }, [navigate, location.pathname]);

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

  if (registrationStatus === 'pending_registration' && 
      (location.pathname.includes('/new-deals') || 
       location.pathname.includes('/my-investments') || 
       location.pathname.includes('/wallet'))) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-lightgray">
        <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-navyblue mb-4">Complete Registration Required</h2>
          <p className="text-gray-600 mb-6">To access investment features, please complete your registration first.</p>
          <Button onClick={() => navigate('/complete-registration')} className="bg-gold text-white hover:bg-gold/90">
            Complete Registration
          </Button>
        </div>
      </div>
    );
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
