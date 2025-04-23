
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Icons } from "@/components/ui/icons";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Logo from "@/components/ui/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
  };

  const handleSocialLogin = async (provider: 'google' | 'apple' | 'facebook') => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: `${window.location.origin}/login`,
        }
      });
      
      if (error) {
        console.error("Social login error:", error);
        throw error;
      }
      
      // If we have a URL to redirect to, do it
      if (data?.url) {
        console.log("Redirecting to:", data.url);
        window.location.href = data.url;
      }
    } catch (error: any) {
      console.error("Social login error details:", error);
      toast.error(`Login failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4 py-16">
      <Card className="w-[400px] border-gold shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardDescription className="text-gray-600 text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button 
                  variant="link" 
                  className="text-sm text-gold hover:text-lightgold p-0 h-auto font-normal"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/forgot-password");
                  }}
                >
                  Forgot password?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-gray-300"
              />
            </div>
            
            <Button type="submit" className="w-full bg-gold hover:bg-lightgold text-white">
              Sign In
            </Button>

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
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin('apple')}
                disabled={isLoading}
                className="w-full"
              >
                <Icons.apple className="mr-2 h-4 w-4" />
                Apple
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin('facebook')}
                disabled={isLoading}
                className="w-full"
              >
                <Icons.facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </CardContent>
        </form>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            <span className="text-gray-500">Don't have an account?</span>{" "}
            <a 
              href="/register" 
              className="text-gold hover:text-lightgold font-medium"
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Sign Up
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
