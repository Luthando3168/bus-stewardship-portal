
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PropertyProps } from "./PropertyCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Check } from "lucide-react";

interface PropertyDialogProps {
  property: PropertyProps | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

const PropertyDialog: React.FC<PropertyDialogProps> = ({ 
  property, 
  isOpen, 
  onClose,
  onBookNow
}) => {
  if (!property) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{property.name}</DialogTitle>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{property.location}</span>
          </div>
        </DialogHeader>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="relative h-60 overflow-hidden rounded-md">
              <img
                src={property.imageUrl}
                alt={property.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-2 right-2 flex items-center gap-1">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navyblue text-white font-medium">
                  {property.rating}
                </span>
                <Badge className="bg-white text-navyblue">
                  {property.reviewCount} reviews
                </Badge>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Amenities</h4>
              <div className="grid grid-cols-2 gap-y-1">
                {property.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="h-3.5 w-3.5 mr-1.5 text-green-600" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Price Details</span>
                <span className="text-lg font-semibold">R{property.price}/night</span>
              </div>
              
              <div className="space-y-3 py-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div className="text-sm">
                    <p className="font-medium">Availability</p>
                    <p className="text-gray-500">Select dates to check availability</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <div className="text-sm">
                    <p className="font-medium">Max Guests</p>
                    <p className="text-gray-500">Up to 4 guests</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full mt-2 bg-gold hover:bg-gold/90 text-white" 
                onClick={onBookNow}
              >
                Book Now
              </Button>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Property Description</h4>
              <p className="text-sm text-gray-600">
                Experience luxury and comfort at {property.name}. This beautiful property offers 
                stunning views, modern amenities, and a perfect location to explore the surrounding 
                area. Ideal for both business and leisure travelers.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDialog;
