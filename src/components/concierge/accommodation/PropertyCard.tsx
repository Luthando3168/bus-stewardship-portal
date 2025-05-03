
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface PropertyProps {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
  tags?: string[];
  imageUrl: string;
}

interface PropertyCardProps {
  property: PropertyProps;
  onAvailabilityClick: (property: PropertyProps) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onAvailabilityClick }) => {
  const { name, location, price, rating, reviewCount, tags, imageUrl } = property;
  
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        {tags && tags.length > 0 && (
          <Badge className="absolute top-2 right-2 bg-gold text-white">
            {tags[0]}
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center gap-1">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navyblue text-white text-xs font-medium">
              {rating}
            </span>
            <span className="text-xs text-gray-500">({reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center mt-1 text-sm text-gray-500">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="mt-3 flex items-end justify-between">
          <div>
            <span className="text-lg font-semibold">R{price}</span>
            <span className="text-sm text-gray-500"> /night</span>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="border-gold text-gold hover:bg-gold hover:text-white"
            onClick={() => onAvailabilityClick(property)}
          >
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
