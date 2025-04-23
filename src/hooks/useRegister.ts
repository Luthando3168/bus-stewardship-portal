
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

  // Enhanced password validation with detailed feedback
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

  // Enhanced registration handler with security improvements
  const handleRegister = async (
    email: string,
    password: string,
    confirmPassword: string,
    fullName: string,
    isAgreeTerms: boolean
  ) => {
    setErrorMessage("");
    
    // Input validation with clear error messages
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
    
    // Force HTTPS for production environments
    if (window.location.protocol === 'http:' && !window.location.hostname.includes('localhost')) {
      window.location.href = window.location.href.replace('http:', 'https:');
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
        // Create a client record with pending_registration status
        const { error: clientError } = await supabase
          .from('clients')
          .insert([{ 
            id: authData.user.id, 
            status: 'pending_registration',
            full_name: fullName,
            email: email
          }]);
          
        if (clientError) {
          console.error("Error creating client record:", clientError);
          // Continue with the process even if client record creation fails
          // We'll try to create it again when they log in
        }
      
        // Try sending welcome email
        try {
          console.log("Attempting to send welcome email...");
          
          // Call the Supabase edge function directly
          const { error: functionError } = await supabase.functions.invoke('send-registration-email', {
            body: { 
              fullName: fullName,
              email: email,
              confirmationLink: `${window.location.origin}/complete-registration`
            }
          });
          
          if (functionError) {
            console.error("Error from edge function:", functionError);
            throw functionError;
          }
          
          console.log("Welcome email sent via edge function");
          
          // Also try sending through notification service as backup
          const emailResult = await sendUserNotification(
            { fullName, email }, 
            'welcome', 
            ['email']
          );
          
          console.log("Email notification result:", emailResult);
          
          // Show success regardless of the backup email result
          toast.success("Registration successful! Please check your email to verify your account.");
          
          // Add delay before redirecting to ensure toast is seen
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } catch (emailError) {
          console.error("Error sending welcome email:", emailError);
          // Show partial success but note the email issue
          toast.warning("Account created, but we couldn't send a welcome email. Please check your spam folder or contact support if you don't receive a verification email.");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      } else {
        throw new Error("Registration failed: User account was not created");
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      
      if (error.message.includes("already registered")) {
        setErrorMessage("This email is already registered. Please try logging in instead.");
        toast.error("This email is already registered. Please try logging in instead.");
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
