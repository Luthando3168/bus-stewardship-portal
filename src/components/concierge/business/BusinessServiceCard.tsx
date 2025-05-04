
import React from "react";
import { ChevronRight, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface BusinessServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
  regions?: string[];
}

interface BusinessServiceCardProps {
  service: BusinessServiceItem;
  onRequestService: (serviceTitle: string) => void;
}

const BusinessServiceCard = ({ service, onRequestService }: BusinessServiceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-bold text-lg">{service.title}</h4>
          {service.featured && (
            <Badge className="bg-gold text-navyblue">Popular</Badge>
          )}
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
        
        {service.regions && service.regions.length > 0 && (
          <div className="flex items-center text-gray-500 text-xs mb-4">
            <MapPin className="h-3 w-3 mr-1" />
            <span>
              {service.regions.length > 2 
                ? `${service.regions[0]}, ${service.regions[1]}, +${service.regions.length - 2} more`
                : service.regions.join(", ")
              }
            </span>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-navyblue font-semibold">{service.price}</span>
          <Button 
            onClick={() => onRequestService(service.title)}
            className="bg-navyblue hover:bg-blue-900"
          >
            Request <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessServiceCard;
