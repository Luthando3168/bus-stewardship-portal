
import React from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ServiceTypesList from "@/components/concierge/domestic/ServiceTypesList";
import HowItWorksSection from "@/components/concierge/domestic/HowItWorksSection";
import GuaranteeSection from "@/components/concierge/domestic/GuaranteeSection";
import { serviceTypes } from "@/data/concierge/domestic/serviceTypes";

const DomesticService = () => {
  const navigate = useNavigate();

  const handleServiceSelect = (serviceId: string) => {
    toast.success("Service selected", {
      description: "Now you can browse service providers."
    });
    
    // Navigate to the service providers page
    navigate(`/concierge/domestic/${serviceId}`);
  };

  return (
    <ServicePageTemplate
      title="Domestic Staff"
      description="Vetted housekeepers, gardeners, and childcare professionals"
      icon={Users}
      color="text-lime-600"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-navyblue">Select a Service</h2>
        <Button 
          variant="outline" 
          className="text-navyblue"
          onClick={() => navigate('/concierge/domestic/requests')}
        >
          My Service Requests
        </Button>
      </div>
      
      <ServiceTypesList 
        serviceTypes={serviceTypes} 
        onSelect={handleServiceSelect} 
      />
      
      <HowItWorksSection />
      
      <GuaranteeSection />
    </ServicePageTemplate>
  );
};

export default DomesticService;
