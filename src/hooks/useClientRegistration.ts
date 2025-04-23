
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
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const checkRegistrationStatus = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        // First check if we have a cached status to use as fallback
        const cachedStatus = localStorage.getItem("registrationStatus");
        if (cachedStatus) {
          setRegistrationStatus(cachedStatus);
        }

        // Check if client record exists
        const { data: client, error: clientError } = await supabase
          .from('clients')
          .select('status')
          .eq('id', user.id)
          .single();

        if (clientError) {
          // If no client record, create one with pending_registration status
          if (clientError.code === 'PGRST116') {
            try {
              // Get profile data for name
              const { data: profile, error: profileError } = await supabase
                .from('profiles')
                .select('full_name')
                .eq('id', user.id)
                .single();

              // Handle potential infinite recursion error from RLS policies
              if (profileError && profileError.message && 
                  profileError.message.includes('infinite recursion')) {
                console.warn("Policy recursion error detected in profiles table:", profileError);
                throw new Error("Database policy error: " + profileError.message);
              }
              
              if (profileError) {
                console.warn("Error fetching profile:", profileError);
                throw profileError;
              }

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
              localStorage.setItem("registrationStatus", 'pending_registration');
              
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
            } catch (err) {
              console.error("Error creating client record:", err);
              setError(err instanceof Error ? err : new Error(String(err)));
              
              // Still set a default registration status so the app can function
              setRegistrationStatus(cachedStatus || 'pending_registration');
              
              // Store minimal user info in localStorage as fallback
              if (user.user_metadata?.full_name) {
                const fullName = user.user_metadata.full_name;
                localStorage.setItem("userName", fullName.split(' ')[0] || "");
                localStorage.setItem("userSurname", fullName.split(' ').slice(1).join(' ') || "");
              } else if (user.email) {
                localStorage.setItem("userName", user.email.split('@')[0] || "User");
              }
            }
          } else {
            console.error("Error checking client status:", clientError);
            setError(clientError);
            // Set fallback status from cache or default
            setRegistrationStatus(cachedStatus || 'pending_registration');
          }
        } else {
          // Client record exists
          setRegistrationStatus(client?.status || 'pending_registration');
          localStorage.setItem("registrationStatus", client?.status || 'pending_registration');
          
          try {
            // Get user profile data
            const { data: profile, error: profileError } = await supabase
              .from('profiles')
              .select('full_name')
              .eq('id', user.id)
              .single();

            // Handle potential recursive policy error
            if (profileError && profileError.message && 
                profileError.message.includes('infinite recursion')) {
              console.warn("Policy recursion error detected in profiles table:", profileError);
              
              // Use user metadata as fallback
              if (user.user_metadata?.full_name) {
                const fullName = user.user_metadata.full_name;
                localStorage.setItem("userName", fullName.split(' ')[0] || "");
                localStorage.setItem("userSurname", fullName.split(' ').slice(1).join(' ') || "");
              }
            } else if (profileError) {
              console.warn("Error fetching profile:", profileError);
            } else if (profile?.full_name) {
              localStorage.setItem("userName", profile.full_name.split(' ')[0] || "");
              localStorage.setItem("userSurname", profile.full_name.split(' ').slice(1).join(' ') || "");
            }
          } catch (err) {
            console.error("Error fetching profile data:", err);
          }

          // Only restrict access to investment-related pages if not fully registered
          // and there's no error
          if (!error && client?.status === 'pending_registration' && 
              (location.pathname.includes('/new-deals') || 
               location.pathname.includes('/my-investments') || 
               location.pathname.includes('/wallet'))) {
            toast.info("Please complete your registration to invest");
            navigate('/complete-registration');
          }
          
          // If the user isn't approved yet, they shouldn't access investment pages
          else if (!error && client?.status !== 'approved' && 
              client?.status !== 'active' && 
              (location.pathname.includes('/new-deals') || 
               location.pathname.includes('/my-investments') || 
               location.pathname.includes('/wallet'))) {
            toast.error("Your account is pending approval");
            navigate('/complete-registration');
          }
        }
      } catch (err) {
        console.error('Error checking registration status:', err);
        setError(err instanceof Error ? err : new Error(String(err)));
        
        // Use cached status as fallback
        const cachedStatus = localStorage.getItem("registrationStatus");
        if (cachedStatus) {
          setRegistrationStatus(cachedStatus);
        } else {
          setRegistrationStatus('pending_registration');
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkRegistrationStatus();
  }, [user, navigate, location.pathname]);

  return { registrationStatus, isLoading, error };
};
