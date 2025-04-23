
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

  const validatePassword = (password: string): { isValid: boolean; message: string } => {
    if (password.length < 12) {
      return { isValid: false, message: "Password must be at least 12 characters long" };
    }
    
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return { isValid: false, message: "Password must contain at least one uppercase letter" };
    }
    
    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return { isValid: false, message: "Password must contain at least one lowercase letter" };
    }
    
    // Check for at least one number
    if (!/\d/.test(password)) {
      return { isValid: false, message: "Password must contain at least one number" };
    }
    
    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return { isValid: false, message: "Password must contain at least one special character" };
    }

    return { isValid: true, message: "" };
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
    
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      setErrorMessage(passwordValidation.message);
      toast.error(passwordValidation.message);
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
          const { data: sessionData } = await supabase.auth.getSession();
          const accessToken = sessionData.session?.access_token;
          
          if (accessToken) {
            console.log("Attempting to send welcome email via edge function...");
            
            const { data, error: welcomeError } = await supabase.functions.invoke('send-welcome', {
              body: { fullName, email },
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            });

            if (welcomeError) {
              console.error("Failed to send welcome email via edge function:", welcomeError);
              console.log("Falling back to notification service...");
              await sendUserNotification(
                { fullName, email }, 
                'welcome', 
                ['email']
              );
            } else {
              console.log("Welcome email sent successfully via edge function:", data);
            }
          } else {
            throw new Error("No access token available for authentication");
          }
        } catch (emailError) {
          console.error("Error sending welcome email:", emailError);
        }
      }
      
      toast.success("Registration successful! Please check your email to verify your account.");
      navigate("/login");
    } catch (error: any) {
      console.error("Registration error:", error);
      
      if (error.message.includes("already registered")) {
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
