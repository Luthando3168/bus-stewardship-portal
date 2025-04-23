
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNotifications } from "@/hooks/useNotifications"; // Import the notifications hook

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { sendUserNotification } = useNotifications(); // Use the notifications hook

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
          emailRedirectTo: undefined
        }
      });
      
      if (authError) throw authError;

      console.log("Registration response:", authData);

      if (authData.user) {
        try {
          // First try the direct edge function call
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
          toast.error("There was an issue sending your welcome email, but your account was created successfully.");
        }
      }
      
      toast.success("Registration successful! Please check your email.");
      navigate("/login");
    } catch (error: any) {
      console.error("Registration error:", error);
      
      if (error.message.includes("already registered")) {
        setErrorMessage("This email is already registered. Please use a different email or try logging in.");
        toast.error("This email is already registered. Please use a different email or try logging in.");
      } else if (error.message.includes("password")) {
        setErrorMessage("Password issue: " + error.message);
        toast.error("Password issue: " + error.message);
      } else {
        setErrorMessage(error.message || "Registration failed. Please try again.");
        toast.error(error.message || "Registration failed. Please try again.");
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
