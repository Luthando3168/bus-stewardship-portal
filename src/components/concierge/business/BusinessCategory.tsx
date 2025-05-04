
import React from "react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import BusinessServiceCard, { BusinessServiceItem } from "./BusinessServiceCard";

interface BusinessCategoryProps {
  icon: ReactNode;
  title: string;
  description: string;
  services: BusinessServiceItem[];
  onRequestService: (serviceTitle: string) => void;
  onViewProfessionals: () => void;
}

const BusinessCategory = ({
  icon,
  title,
  description,
  services,
  onRequestService,
  onViewProfessionals
}: BusinessCategoryProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-full bg-blue-50">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-navyblue">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <BusinessServiceCard 
            key={service.id} 
            service={service} 
            onRequestService={onRequestService} 
          />
        ))}
      </div>

      <div className="pt-4 text-right">
        <Button 
          variant="outline" 
          className="border-navyblue text-navyblue"
          onClick={onViewProfessionals}
        >
          View {title} Professionals <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BusinessCategory;
