
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Logo from "@/components/ui/Logo";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      toast.success("Password reset link sent! Please check your email.");
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast.error(error.message || "Failed to send password reset link");
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
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-lightgold text-white"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
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
