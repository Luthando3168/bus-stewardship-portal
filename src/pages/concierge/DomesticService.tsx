
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Users, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const serviceTypes = [
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Professional home cleaning and organization services",
    features: ["Regular cleaning", "Deep cleaning", "Organizing", "Laundry assistance"],
    rates: "From R220 per session"
  },
  {
    id: "gardening",
    title: "Garden Services",
    description: "Lawn maintenance and garden care",
    features: ["Lawn mowing", "Garden maintenance", "Plant care", "Outdoor cleaning"],
    rates: "From R180 per session"
  },
  {
    id: "childcare",
    title: "Childcare",
    description: "Professional and vetted childcare professionals",
    features: ["Babysitting", "After-school care", "Educational support", "Child development"],
    rates: "From R230 per hour"
  }
];

const DomesticService = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
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
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {serviceTypes.map((service) => (
          <Card 
            key={service.id} 
            className="cursor-pointer transition-all hover:shadow-md"
            onClick={() => handleServiceSelect(service.id)}
          >
            <CardContent className="p-6">
              <h3 className="font-medium text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              
              <ul className="text-sm text-gray-600 mb-3 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-600 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm font-medium text-navyblue">{service.rates}</p>
                <Button 
                  size="sm"
                  variant="ghost"
                  className="text-lime-700 hover:text-lime-800 hover:bg-lime-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceSelect(service.id);
                  }}
                >
                  View Providers
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="border-t pt-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">How It Works</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center mb-4">
                <span className="font-medium">1</span>
              </div>
              <h4 className="font-medium mb-2">Select a Service</h4>
              <p className="text-sm text-gray-600">Choose from our range of domestic services.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center mb-4">
                <span className="font-medium">2</span>
              </div>
              <h4 className="font-medium mb-2">Choose a Provider</h4>
              <p className="text-sm text-gray-600">Browse profiles and select your preferred professional.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center mb-4">
                <span className="font-medium">3</span>
              </div>
              <h4 className="font-medium mb-2">Secure Payment</h4>
              <p className="text-sm text-gray-600">Pay through our secure escrow system - money is only released once you're satisfied.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-b py-6 my-6">
        <h3 className="text-lg font-medium mb-4">Our Guarantee</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
              <Check className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Verified Professionals</h4>
              <p className="text-sm text-gray-600">All service providers undergo rigorous background checks.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
              <Check className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Secure Payments</h4>
              <p className="text-sm text-gray-600">Our escrow system ensures you only pay for satisfactory service.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
              <Check className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Dispute Resolution</h4>
              <p className="text-sm text-gray-600">Our support team helps resolve any issues that may arise.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
              <Check className="h-3.5 w-3.5" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Easy Rescheduling</h4>
              <p className="text-sm text-gray-600">Flexibility to change appointments with 24-hour notice.</p>
            </div>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default DomesticService;
