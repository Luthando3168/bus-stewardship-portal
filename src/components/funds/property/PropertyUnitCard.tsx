
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square } from "lucide-react";

interface PropertyUnitProps {
  unit: {
    id: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
    price: string;
    status: "available" | "in-progress" | "sold";
  };
  onSelect: () => void;
}

const PropertyUnitCard: React.FC<PropertyUnitProps> = ({ unit, onSelect }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h3 className="font-semibold text-navyblue mb-2">{unit.type}</h3>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <div className="flex items-center">
              <Bed size={16} className="mr-1" />
              <span>{unit.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-1" />
              <span>{unit.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square size={16} className="mr-1" />
              <span>{unit.size}</span>
            </div>
          </div>
          <div>
            <span className="block text-right font-bold">{unit.price}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className={`inline-block px-2 py-1 rounded text-xs ${
              unit.status === 'available' ? 'bg-green-100 text-green-800' : 
              unit.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'
            }`}>
              {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
            </span>
          </div>
          <Button 
            size="sm"
            onClick={onSelect}
            disabled={unit.status !== 'available'}
          >
            Invest
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyUnitCard;
