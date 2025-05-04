
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Building, MapPin, Home, ArrowUpDown, BedDouble, Bath, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment in Sandton",
    price: "R2,850,000",
    type: "sale",
    location: "Sandton, Johannesburg",
    bedrooms: 2,
    bathrooms: 2,
    size: "115m²",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Luxury+Apartment",
    featured: true
  },
  {
    id: 2,
    title: "Modern Family Home",
    price: "R4,500,000",
    type: "sale",
    location: "Bryanston, Johannesburg",
    bedrooms: 4,
    bathrooms: 3,
    size: "280m²",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Family+Home"
  },
  {
    id: 3,
    title: "Waterfront Apartment",
    price: "R18,500 /month",
    type: "rental",
    location: "V&A Waterfront, Cape Town",
    bedrooms: 2,
    bathrooms: 2,
    size: "95m²",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Waterfront+Apartment",
    featured: true
  },
  {
    id: 4,
    title: "Garden Cottage",
    price: "R8,900 /month",
    type: "rental",
    location: "Parkhurst, Johannesburg",
    bedrooms: 1,
    bathrooms: 1,
    size: "65m²",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Garden+Cottage"
  }
];

const PropertyService = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [viewingDate, setViewingDate] = useState("");

  const handlePropertySelect = (propertyId: number) => {
    setSelectedProperty(propertyId);
    toast.success("Property selected", {
      description: "You can now schedule a viewing."
    });
  };

  const handleViewingRequest = () => {
    if (!viewingDate) {
      toast.error("Please select a viewing date");
      return;
    }

    toast.success("Viewing scheduled", {
      description: "A confirmation will be sent to your email shortly."
    });
    
    setViewingDate("");
  };

  const filteredProperties = properties.filter(property => {
    if (activeTab === "buy") return property.type === "sale";
    if (activeTab === "rent") return property.type === "rental";
    return true;
  });

  return (
    <ServicePageTemplate
      title="Property Listings"
      description="Exclusive property listings for sale and rental across South Africa"
      icon={Building}
      color="text-navyblue"
      ownershipNote="You own shares in 1 property development"
    >
      <Tabs defaultValue="buy" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="buy">
            <Home className="h-4 w-4 mr-2" />
            Buy
          </TabsTrigger>
          <TabsTrigger value="rent">
            <ArrowUpDown className="h-4 w-4 mr-2" />
            Rent
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab}>
          <div className="grid gap-6 sm:grid-cols-2 mb-6">
            {filteredProperties.map((property) => (
              <Card 
                key={property.id}
                className={`cursor-pointer transition-all hover:shadow-md overflow-hidden ${selectedProperty === property.id ? 'ring-2 ring-navyblue' : ''}`}
                onClick={() => handlePropertySelect(property.id)}
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
                  
                  {selectedProperty === property.id && (
                    <div className="mt-4 flex justify-end">
                      <Badge className="bg-navyblue text-white">
                        <Check className="h-3 w-3 mr-1" /> Selected
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {selectedProperty && (
            <div className="border-t pt-4 mt-4">
              <h3 className="font-medium mb-4">Schedule a viewing</h3>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-navyblue" />
                    <Select value={viewingDate} onValueChange={setViewingDate}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date and time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2025-05-05-10">May 5, 2025 - 10:00 AM</SelectItem>
                        <SelectItem value="2025-05-05-14">May 5, 2025 - 2:00 PM</SelectItem>
                        <SelectItem value="2025-05-06-09">May 6, 2025 - 9:00 AM</SelectItem>
                        <SelectItem value="2025-05-06-15">May 6, 2025 - 3:00 PM</SelectItem>
                        <SelectItem value="2025-05-07-11">May 7, 2025 - 11:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button 
                  className="bg-navyblue hover:bg-navyblue/90 text-white" 
                  onClick={handleViewingRequest}
                >
                  Request Viewing
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </ServicePageTemplate>
  );
};

export default PropertyService;
