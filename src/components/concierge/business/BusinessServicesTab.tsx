
import React from "react";
import BusinessCategory from "./BusinessCategory";
import EmptyServicesState from "./EmptyServicesState";

export interface BusinessServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  services: BusinessServiceItem[];
}

export interface BusinessServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
}

interface BusinessServicesTabProps {
  filteredCategories: BusinessServiceCategory[];
  onRequestService: (serviceTitle: string) => void;
  onViewProfessionals: () => void;
}

const BusinessServicesTab = ({ 
  filteredCategories,
  onRequestService,
  onViewProfessionals
}: BusinessServicesTabProps) => {
  return (
    <>
      {filteredCategories.length > 0 ? (
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <BusinessCategory 
              key={category.id}
              icon={category.icon}
              title={category.title}
              description={category.description}
              services={category.services}
              onRequestService={onRequestService}
              onViewProfessionals={onViewProfessionals}
            />
          ))}
        </div>
      ) : (
        <EmptyServicesState />
      )}
    </>
  );
};

export default BusinessServicesTab;
