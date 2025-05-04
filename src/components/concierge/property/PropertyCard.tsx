
import React from "react";
import { MapPin, BedDouble, Bath, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PropertyProps {
  id: number;
  title: string;
  price: string;
  type: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  image: string;
  featured?: boolean;
}

interface PropertyCardProps {
  property: PropertyProps;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const PropertyCard = ({ property, isSelected, onSelect }: PropertyCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md overflow-hidden ${isSelected ? 'ring-2 ring-navyblue' : ''}`}
      onClick={() => onSelect(property.id)}
    >
      <div 
        className="h-48 bg-gray-200 relative bg-cover bg-center" 
        style={{ backgroundImage: `url(${property.image})` }}
      >
        {property.featured && (
          <Badge className="absolute top-2 right-2 bg-gold text-white">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg">{property.title}</h3>
          <p className="font-bold text-navyblue">{property.price}</p>
        </div>
        
        <p className="text-gray-600 flex items-center text-sm mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </p>
        
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <span className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1" />
            {property.bedrooms} Beds
          </span>
          <span className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {property.bathrooms} Baths
          </span>
          <span>{property.size}</span>
        </div>
        
        {isSelected && (
          <div className="mt-4 flex justify-end">
            <Badge className="bg-navyblue text-white">
              <Check className="h-3 w-3 mr-1" /> Selected
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
