
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServiceTypeProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  rates: string;
  onSelect: (serviceId: string) => void;
}

const ServiceTypeCard = ({
  id,
  title,
  description,
  features,
  rates,
  onSelect,
}: ServiceTypeProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={() => onSelect(id)}
    >
      <CardContent className="p-6">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-600 mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm font-medium text-navyblue">{rates}</p>
          <Button 
            size="sm"
            variant="ghost"
            className="text-lime-700 hover:text-lime-800 hover:bg-lime-50"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(id);
            }}
          >
            View Providers
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceTypeCard;
