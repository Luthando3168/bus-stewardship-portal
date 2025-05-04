
import React from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface BusinessServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
}

interface BusinessServiceCardProps {
  service: BusinessServiceItem;
  onRequestService: (serviceTitle: string) => void;
}

const BusinessServiceCard = ({ service, onRequestService }: BusinessServiceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-bold text-lg">{service.title}</h4>
          {service.featured && (
            <Badge className="bg-gold text-navyblue">Popular</Badge>
          )}
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center justify-between mt-4">
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
