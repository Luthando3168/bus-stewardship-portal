
import React from "react";
import { AlertCircle, CreditCard } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { useAuthState } from "@/hooks/useAuthState";

interface PurchaseDisclaimerProps {
  serviceName?: string;
}

const PurchaseDisclaimer = ({ serviceName = "this service" }: PurchaseDisclaimerProps) => {
  const { user } = useAuthState();
  
  if (user) return null;
  
  return (
    <Alert className="mb-6 bg-amber-50 border-amber-200">
      <CreditCard className="h-4 w-4 text-amber-600" />
      <AlertTitle className="text-amber-800">Guest Purchase Information</AlertTitle>
      <AlertDescription className="text-amber-700">
        <p className="mb-2">
          You're browsing {serviceName} as a guest. Payments are processed directly by our service partners 
          and are not held in escrow by MCA Direct.
        </p>
        <p>
          <Link to="/register" className="font-medium text-amber-900 underline">Create an account</Link> to 
          save your preferences, track orders, and access member-only benefits.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default PurchaseDisclaimer;
