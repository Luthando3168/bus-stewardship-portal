
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "@/hooks/useAuthState";

const BusinessHero = () => {
  const navigate = useNavigate();
  const { user } = useAuthState();
  
  const handleGetStarted = () => {
    if (!user) {
      navigate("/register");
    }
  };
  
  return (
    <div className="relative rounded-xl overflow-hidden h-48 md:h-60 mb-6">
      <div className="absolute inset-0 bg-gradient-to-r from-navyblue to-blue-700 opacity-90"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Professional Business Services</h2>
        <p className="text-sm md:text-base max-w-xl mb-4">
          Connect with expert business professionals across South Africa offering specialized services in consulting, finance, legal, technology, HR, and more
        </p>
        {!user && (
          <Button 
            onClick={handleGetStarted} 
            className="mt-2 bg-gold hover:bg-gold/90 text-navyblue font-semibold"
          >
            Register to Get Started
          </Button>
        )}
      </div>
    </div>
  );
};

export default BusinessHero;
