
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { sendNotification, NotificationRecipient } from "@/utils/notificationService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (!isAgreeTerms) {
      toast.error("You must agree to the Terms and Conditions");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Register with Supabase
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

      if (authData.user) {
        // Send welcome notification
        const recipient: NotificationRecipient = {
          fullName,
          email,
        };
        
        try {
          await sendNotification(
            recipient,
            'welcome',
            ['email'],
            {}
          );
          console.log("Welcome notification sent successfully");
        } catch (notificationError) {
          console.error("Failed to send welcome notification:", notificationError);
          // Don't throw here - we still want to complete registration even if notification fails
        }
      }
      
      toast.success("Registration successful! Please check your email to verify your account.");
      navigate("/login");
    } catch (error: any) {
      console.error("Registration error:", error);
      
      // Provide more specific error messages for common issues
      if (error.message.includes("already registered")) {
        toast.error("This email is already registered. Please use a different email or try logging in.");
      } else if (error.message.includes("password")) {
        toast.error("Password issue: " + error.message);
      } else {
        toast.error(error.message || "Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navyblue to-deepblue px-4">
      <div className="w-full max-w-md">
        <Card className="border-gold shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-navyblue">
              Create an Account
            </CardTitle>
            <CardDescription className="text-gray-500">
              Enter your details to register
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={isAgreeTerms}
                  onCheckedChange={(checked) => setIsAgreeTerms(checked as boolean)}
                />
                <Label 
                  htmlFor="terms" 
                  className="text-sm text-gray-500 cursor-pointer"
                >
                  I agree to the{" "}
                  <a 
                    href="/terms" 
                    className="text-gold hover:text-lightgold underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>
                </Label>
              </div>
              <Button
                className="w-full bg-gold hover:bg-lightgold text-white"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              <span className="text-gray-500">Already have an account?</span>{" "}
              <a 
                href="/login" 
                className="text-gold hover:text-lightgold underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Sign In
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
