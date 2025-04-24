
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
  const location = useLocation();
  const navigate = useNavigate();

  // Check for authentication errors on component mount
  useEffect(() => {
    // Parse URL for error information from auth redirect
    const params = new URLSearchParams(location.search);
    const error = params.get("error") || params.get("error_description");
    
    if (error) {
      console.error("Authentication error from redirect:", error);
      onError(error);
      toast.error(`Login failed: ${error}`);
    }
    
    // Check for successful auth
    const checkForAuth = async () => {
      const { data } = await supabase.auth.getSession();
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
    };
    
    // Only run this if we detect we might be in a redirect situation
    const hash = window.location.hash;
    if (hash.includes('access_token') || hash.includes('id_token') || location.search.includes('code=')) {
      checkForAuth();
    }
  }, [location, onError, navigate]);

  const handleSocialLogin = async (provider: 'google') => {
    try {
      setIsLoading(true);
      
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
        throw error;
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
      toast.error(`Authentication failed: ${error.message}`);
      onError(error.message || "Authentication failed");
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
          disabled={isLoading}
          className="w-full"
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
      </div>
      
      <div className="mt-2 text-xs text-center text-gray-500">
        <p>If you're having trouble logging in with Google, please try using the email login option.</p>
      </div>
    </CardContent>
  );
};

export default SocialLogin;
