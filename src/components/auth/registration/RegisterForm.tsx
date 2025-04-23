
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle } from "lucide-react";
import { useRegister } from "@/hooks/useRegister";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);
  const { isLoading, errorMessage, handleRegister } = useRegister();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister(email, password, confirmPassword, fullName, isAgreeTerms);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <span className="text-sm">{errorMessage}</span>
        </div>
      )}
      
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
  );
};

export default RegisterForm;
