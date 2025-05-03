
import React from "react";
import { InfoIcon } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-br from-navyblue/10 to-gold/5 rounded-lg p-6 max-w-2xl mx-auto my-8 border border-navyblue/10 shadow-sm">
      <div className="flex items-center mb-3">
        <InfoIcon className="h-5 w-5 text-gold mr-2" />
        <p className="font-semibold text-navyblue">How it works:</p>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Select business deals that interest you from any impact fund. Your selections are linked to 
        their respective funds and consolidated at checkout. Payment is made through your Standard Bank 
        wallet after you receive a unique order number.
      </p>
    </div>
  );
};

export default HowItWorks;
