
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNotifications } from "@/hooks/useNotifications";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { sendUserNotification } = useNotifications();

  const validatePassword = (password: string): boolean => {
    // At least 8 characters, with a mix of letters, numbers, and special characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async (
    email: string,
    password: string,
    confirmPassword: string,
    fullName: string,
    isAgreeTerms: boolean
  ) => {
    setErrorMessage("");
    
    if (!fullName.trim()) {
      setErrorMessage("Full name is required");
      toast.error("Full name is required");
      return;
    }
    
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }
    
    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 8 characters and include letters, numbers, and special characters");
      toast.error("Password must be at least 8 characters and include letters, numbers, and special characters");
      return;
    }
    
    if (!isAgreeTerms) {
      setErrorMessage("You must agree to the Terms and Conditions");
      toast.error("You must agree to the Terms and Conditions");
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log("Attempting to register user:", { email, fullName });
      
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
          emailRedirectTo: `${window.location.origin}/login`
        }
      });
      
      if (authError) throw authError;

      console.log("Registration response:", authData);

      if (authData.user) {
        try {
          // First try the direct edge function call with rate limiting
          console.log("Attempting to send welcome email via edge function...");
          
          const { data, error: welcomeError } = await supabase.functions.invoke('send-welcome', {
            body: { fullName, email }
          });

          if (welcomeError) {
            console.error("Failed to send welcome email via edge function:", welcomeError);
            // Fall back to notification service
            console.log("Falling back to notification service...");
            
            await sendUserNotification(
              { 
                fullName, 
                email 
              }, 
              'welcome', 
              ['email']  // Remove WhatsApp to avoid errors if phone is missing
            );
          } else {
            console.log("Welcome email sent successfully via edge function:", data);
          }
        } catch (emailError) {
          console.error("Error sending welcome email:", emailError);
          // Don't show this error to the user as it's not critical to registration
        }
      }
      
      toast.success("Registration successful! Please check your email to verify your account.");
      navigate("/login");
    } catch (error: any) {
      console.error("Registration error:", error);
      
      if (error.message.includes("already registered")) {
        // Generic error to prevent email enumeration
        setErrorMessage("Registration failed. Please try again or contact support.");
        toast.error("Registration failed. Please try again or contact support.");
      } else if (error.message.includes("password")) {
        setErrorMessage("Password does not meet security requirements");
        toast.error("Password does not meet security requirements");
      } else {
        setErrorMessage("Registration failed. Please try again later.");
        toast.error("Registration failed. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    errorMessage,
    handleRegister
  };
};
