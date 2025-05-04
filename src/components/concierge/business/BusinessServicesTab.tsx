
import React from "react";
import BusinessCategory from "./BusinessCategory";
import EmptyServicesState from "./EmptyServicesState";

export interface BusinessServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  services: BusinessServiceItem[];
  regions?: string[];
}

export interface BusinessServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
  regions?: string[];
}

interface BusinessServicesTabProps {
  filteredCategories: BusinessServiceCategory[];
  onRequestService: (serviceTitle: string) => void;
  onViewProfessionals: () => void;
  clearSearch?: () => void;
}

const BusinessServicesTab = ({ 
  filteredCategories,
  onRequestService,
  onViewProfessionals,
  clearSearch
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
              regions={category.regions}
              onRequestService={onRequestService}
              onViewProfessionals={onViewProfessionals}
            />
          ))}
        </div>
      ) : (
        <EmptyServicesState onViewAll={clearSearch} />
      )}
    </>
  );
};

export default BusinessServicesTab;
