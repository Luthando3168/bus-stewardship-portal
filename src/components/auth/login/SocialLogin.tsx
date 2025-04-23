
import React, { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { supabase } from "@/integrations/supabase/client";

interface SocialLoginProps {
  onError: (error: string) => void;
}

const SocialLogin = ({ onError }: SocialLoginProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (provider: 'google' | 'apple' | 'facebook') => {
    try {
      setIsLoading(true);
      const redirectTo = `${window.location.origin}/login`;
      console.log(`Attempting ${provider} login with redirect to:`, redirectTo);

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: redirectTo,
          queryParams: {
            prompt: 'select_account'
          }
        }
      });
      
      if (error) throw error;
      
      if (data?.url) {
        console.log("Redirecting to OAuth provider URL:", data.url);
        window.location.href = data.url;
      }
    } catch (error: any) {
      console.error("Social login error:", error);
      onError(error.message);
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
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialLogin('apple')}
          disabled={isLoading}
          className="w-full"
        >
          <Icons.apple className="mr-2 h-4 w-4" />
          Continue with Apple
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => handleSocialLogin('facebook')}
          disabled={isLoading}
          className="w-full"
        >
          <Icons.facebook className="mr-2 h-4 w-4" />
          Continue with Facebook
        </Button>
      </div>
    </CardContent>
  );
};

export default SocialLogin;
