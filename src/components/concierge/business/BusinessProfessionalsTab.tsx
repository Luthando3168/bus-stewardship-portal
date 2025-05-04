
import React from "react";
import { BusinessServiceCategory } from "./BusinessServicesTab";
import ProfessionalsGrid from "./ProfessionalsGrid";
import { getProfessionalsByCategoryId } from "@/data/concierge/business/professionals";

interface BusinessProfessionalsTabProps {
  businessCategories: BusinessServiceCategory[];
  searchQuery: string;
}

const BusinessProfessionalsTab = ({ 
  businessCategories,
  searchQuery
}: BusinessProfessionalsTabProps) => {
  return (
    <div className="space-y-12">
      {businessCategories.map((category) => {
        const professionals = getProfessionalsByCategoryId(category.id);
        
        if (professionals.length === 0) return null;
        
        return (
          <div key={`prof-${category.id}`} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-blue-50">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-navyblue">{category.title} Professionals</h3>
                <p className="text-gray-600">Expert consultants specializing in {category.title.toLowerCase()}</p>
              </div>
            </div>
            
            <ProfessionalsGrid 
              professionals={professionals}
              searchQuery={searchQuery}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BusinessProfessionalsTab;
