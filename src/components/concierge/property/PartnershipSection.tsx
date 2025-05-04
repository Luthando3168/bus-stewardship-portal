
import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PartnershipSectionProps {
  onExternalLinkClick: () => void;
}

const PartnershipSection = ({ onExternalLinkClick }: PartnershipSectionProps) => {
  return (
    <div className="mt-8 pt-6 border-t">
      <div className="flex items-center gap-2 mb-4">
        <ExternalLink className="h-5 w-5 text-gold" />
        <h3 className="font-medium text-navyblue">In partnership with Private Property</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Explore thousands more property listings across South Africa through our partnership with Private Property, 
        South Africa's leading property portal.
      </p>
      <Button 
        onClick={onExternalLinkClick}
        className="bg-gold hover:bg-gold/90 text-white"
      >
        Continue to Private Property
      </Button>
    </div>
  );
};

export default PartnershipSection;
