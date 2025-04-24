
import React, { useState, useEffect } from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";

interface SocialLoginProps {
  onError: (error: string) => void;
}

const SocialLogin = ({ onError }: SocialLoginProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [googleAvailable, setGoogleAvailable] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Check for authentication errors on component mount
  useEffect(() => {
    // Parse URL for error information
    const params = new URLSearchParams(location.search);
    const error = params.get("error") || params.get("error_description");
    
    if (error) {
      console.error("Authentication error from redirect:", error);
      onError(error);
      toast.error(`Login failed: ${error}`);
    }
    
    // Check for successful auth
    const checkForAuth = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error("Error getting session:", error.message);
          return;
        }
        
        if (data?.session) {
          console.log("Session detected after social auth redirect");
          const role = data.session.user?.user_metadata?.role || 'user';
          toast.success("Successfully logged in");
          
          // Ensure we navigate to the dashboard of the current site
          setTimeout(() => {
            if (role === 'admin') {
              navigate('/admin/dashboard');
            } else {
              navigate('/user/dashboard');
            }
          }, 300);
        }
      } catch (error) {
        console.error("Error in checkForAuth:", error);
      }
    };
    
    // Only run this if we detect we might be in a redirect situation
    const hash = window.location.hash;
    if (hash.includes('access_token') || hash.includes('id_token') || location.search.includes('code=')) {
      checkForAuth();
    }
  }, [location, onError, navigate]);

  // Function to test Google domain connectivity
  const testGoogleConnectivity = async () => {
    try {
      // Create a simple fetch request to test connectivity to Google
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      await fetch('https://accounts.google.com/favicon.ico', { 
        mode: 'no-cors', // This is important for cross-origin requests
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      return true;
    } catch (error: any) {
      console.error("Google connectivity test failed:", error.message || "Unknown error");
      return false;
    }
  };

  // Test Google connectivity when component mounts
  useEffect(() => {
    testGoogleConnectivity().then(available => {
      if (!available) {
        console.log("Google services appear to be unavailable");
        setGoogleAvailable(false);
      } else {
        console.log("Google services appear to be available");
      }
    });
  }, []);

  const handleSocialLogin = async (provider: 'google') => {
    try {
      setIsLoading(true);
      
      // Test connectivity before attempting login
      const isConnected = await testGoogleConnectivity();
      if (!isConnected) {
        toast.error("Cannot connect to Google authentication services. Please check your network connection or try email login instead.");
        setGoogleAvailable(false);
        onError("Connection to Google authentication services failed");
        return;
      }
      
      // Get the current window URL for proper redirect handling
      const currentURL = window.location.origin;
      
      // IMPORTANT: Make sure we redirect back to THIS site, not the old one
      // We use the full origin (protocol + hostname) to ensure correct redirection
      const redirectTo = `${currentURL}/login`;
      
      console.log(`Attempting ${provider} login with redirect to:`, redirectTo);

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: redirectTo,
          skipBrowserRedirect: false,
          queryParams: {
            prompt: 'select_account',
            access_type: 'offline' // Request refresh token
          }
        }
      });
      
      if (error) {
        console.error("OAuth error:", error.message);
        
        // Special handling for connection refusal
        if (error.message.includes("refused to connect") || error.message.includes("network error")) {
          setGoogleAvailable(false);
          toast.error("Google authentication is not available. Please check your network connection or try using email login instead.");
        } else {
          toast.error(`Authentication failed: ${error.message}`);
        }
        
        onError(error.message);
        return;
      }
      
      if (data?.url) {
        console.log("Redirecting to OAuth provider URL:", data.url);
        // Use window.location.href for more reliable redirects
        window.location.href = data.url;
      } else {
        toast.error("No redirect URL received from auth provider");
        onError("Authentication failed - no redirect URL received");
      }
    } catch (error: any) {
      console.error("Social login error:", error);
      toast.error(`Authentication failed: ${error.message || "Unknown error"}`);
      onError(error.message || "Authentication failed");
      setGoogleAvailable(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CardContent className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">
            Or continue with
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialLogin('google')}
          disabled={isLoading || !googleAvailable}
          className="w-full"
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
      </div>
      
      <div className="mt-2 text-xs text-center text-gray-500">
        {googleAvailable ? (
          <p>If you're having trouble logging in with Google, please try using the email login option.</p>
        ) : (
          <p className="text-red-500">Google login is currently unavailable. Please use the email login option above.</p>
        )}
      </div>
    </CardContent>
  );
};

export default SocialLogin;
