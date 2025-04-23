
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { User } from "@supabase/supabase-js";

export const useClientRegistration = (user: User | null) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [registrationStatus, setRegistrationStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkRegistrationStatus = async () => {
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        // Check if client record exists
        const { data: client, error } = await supabase
          .from('clients')
          .select('status')
          .eq('id', user.id)
          .single();

        if (error) {
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
              return;
            }
          } else {
            throw error;
          }
        } else {
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
            return;
          }
          
          // If the user isn't approved yet, they shouldn't access investment pages
          if (client?.status !== 'approved' && 
              client?.status !== 'active' && 
              (location.pathname.includes('/new-deals') || 
               location.pathname.includes('/my-investments') || 
               location.pathname.includes('/wallet'))) {
            toast.error("Your account is pending approval");
            navigate('/complete-registration');
            return;
          }
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
  }, [user, navigate, location.pathname]);

  return { registrationStatus, isLoading };
};
