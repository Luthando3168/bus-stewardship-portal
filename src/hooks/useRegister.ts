import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { sendNotification, NotificationRecipient } from "@/utils/notificationService";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
          }
        }
      });
      
      if (authError) throw authError;

      console.log("Registration response:", authData);

      if (authData.user) {
        try {
          const { error: welcomeError } = await supabase.functions.invoke('send-welcome', {
            body: { email, fullName }
          });

          if (welcomeError) {
            console.error("Failed to send welcome email:", welcomeError);
          }
        } catch (emailError) {
          console.error("Error calling welcome email function:", emailError);
        }
      }
      
      toast.success("Registration successful! Please check your email to verify your account.");
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
