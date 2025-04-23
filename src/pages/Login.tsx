
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";
import Logo from "@/components/ui/Logo";
import LoginForm from "@/components/auth/login/LoginForm";
import SocialLogin from "@/components/auth/login/SocialLogin";

const Login = () => {
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const error = hashParams.get("error_description") || hashParams.get("error");
    
    if (error) {
      console.error("Auth error from redirect:", error);
      setAuthError(error);
      toast.error(`Login failed: ${error}`);
    }
  }, []);

  const handleError = (error: string) => {
    setAuthError(error);
    toast.error(`Login failed: ${error}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4 py-16">
      <Card className="w-[400px] border-gold shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardDescription className="text-gray-600">
            Welcome back! Please sign in to your account
          </CardDescription>
        </CardHeader>

        {authError && (
          <div className="px-6">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              <p className="text-sm">Invalid email or password</p>
            </div>
          </div>
        )}

        <LoginForm onError={handleError} />
        <SocialLogin onError={handleError} />
        
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
