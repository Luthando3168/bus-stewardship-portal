
import React from "react";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyServicesStateProps {
  onViewAll?: () => void;
}

const EmptyServicesState = ({ onViewAll }: EmptyServicesStateProps) => {
  return (
    <div className="text-center py-12 border rounded-lg bg-gray-50">
      <div className="text-gray-400 mb-4">
        <Briefcase className="mx-auto h-12 w-12" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No services found</h3>
      <p className="text-gray-500 mb-4">Try adjusting your search query or browse all categories</p>
      
      {onViewAll && (
        <Button 
          variant="outline" 
          className="mt-2 border-navyblue text-navyblue"
          onClick={onViewAll}
        >
          View All Services
        </Button>
      )}
    </div>
  );
};

export default EmptyServicesState;
