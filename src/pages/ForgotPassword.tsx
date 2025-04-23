
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Logo from "@/components/ui/Logo";
import { ArrowLeft, AlertCircle } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeoutActive, setTimeoutActive] = useState(false);
  const [timeoutSeconds, setTimeoutSeconds] = useState(0);
  const navigate = useNavigate();

  const startTimeout = () => {
    const timeoutDuration = 60; // 60 seconds timeout
    setTimeoutActive(true);
    setTimeoutSeconds(timeoutDuration);
    
    const intervalId = setInterval(() => {
      setTimeoutSeconds(prev => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setTimeoutActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (timeoutActive) {
      toast.error(`Please wait ${timeoutSeconds} seconds before trying again`);
      return;
    }
    
    if (!email.trim() || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      startTimeout(); // Start cooldown period
      toast.success("Password reset link sent! Please check your email.");
    } catch (error: any) {
      console.error("Password reset error:", error);
      
      // Generic error message to prevent email enumeration
      toast.error("If your email is registered, you will receive a password reset link shortly");
      
      // Still start timeout to prevent email enumeration through timing attacks
      startTimeout();
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
            {isSuccess 
              ? "Check your email for a reset link" 
              : "Enter your email to receive a password reset link"}
          </CardDescription>
        </CardHeader>
        
        {!isSuccess ? (
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
                  disabled={isLoading || timeoutActive}
                  autoComplete="email"
                />
              </div>
              
              {timeoutActive && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 flex items-start">
                  <AlertCircle className="text-amber-500 mt-0.5 mr-2 flex-shrink-0" size={16} />
                  <p className="text-amber-700 text-sm">
                    Please wait {timeoutSeconds} seconds before requesting another reset link
                  </p>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-lightgold text-white"
                disabled={isLoading || timeoutActive}
              >
                {isLoading ? "Sending..." : timeoutActive ? `Wait ${timeoutSeconds}s` : "Send Reset Link"}
              </Button>
            </CardContent>
          </form>
        ) : (
          <CardContent className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-green-700">
                Please check your email for password reset instructions.
              </p>
            </div>
          </CardContent>
        )}
        
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            <Button
              variant="ghost"
              className="text-gold hover:text-lightgold flex items-center"
              onClick={() => navigate("/login")}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Login
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPassword;
