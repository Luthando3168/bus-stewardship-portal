
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Building, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Import our new components
import PropertyCard from "@/components/concierge/property/PropertyCard";
import ViewingScheduler from "@/components/concierge/property/ViewingScheduler";
import PartnershipSection from "@/components/concierge/property/PartnershipSection";
import PropertyFilterTabs from "@/components/concierge/property/PropertyFilterTabs";
import { properties } from "@/data/concierge/property/propertyData";

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

  const handleExternalLink = () => {
    window.open("https://www.privateproperty.co.za/", "_blank");
    toast.success("Redirecting to Private Property", {
      description: "You're being redirected to our property partner's website."
    });
  };

  const filteredProperties = properties.filter(property => {
    if (activeTab === "buy") return property.type === "sale";
    if (activeTab === "rent") return property.type === "rental";
    return true;
  });

  return (
    <ServicePageTemplate
      title="Property Listings"
      description="Exclusive property listings in partnership with Private Property"
      icon={Building}
      color="text-navyblue"
      ownershipNote="You own shares in 1 property development"
    >
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-lg font-medium text-navyblue">Featured Properties</h2>
        <Button 
          onClick={handleExternalLink}
          variant="outline" 
          className="border-gold text-gold hover:bg-gold hover:text-white flex items-center gap-2"
        >
          Browse All Listings on Private Property
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
      
      <PropertyFilterTabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <div className="grid gap-6 sm:grid-cols-2 mb-6">
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id}
              property={property}
              isSelected={selectedProperty === property.id}
              onSelect={handlePropertySelect}
            />
          ))}
        </div>
        
        {selectedProperty && (
          <ViewingScheduler 
            viewingDate={viewingDate}
            setViewingDate={setViewingDate}
            onRequestViewing={handleViewingRequest}
          />
        )}
      </PropertyFilterTabs>
      
      <PartnershipSection onExternalLinkClick={handleExternalLink} />
    </ServicePageTemplate>
  );
};

export default PropertyService;
