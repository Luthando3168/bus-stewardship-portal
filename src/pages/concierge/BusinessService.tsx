
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import { Users } from "lucide-react";
import BusinessServicesTab from "@/components/concierge/business/BusinessServicesTab";
import BusinessProfessionalsTab from "@/components/concierge/business/BusinessProfessionalsTab";
import BusinessSearchBar from "@/components/concierge/business/BusinessSearchBar";
import BusinessBenefits from "@/components/concierge/business/BusinessBenefits";
import { businessCategories } from "@/data/concierge/business/businessCategories";
import { professionals } from "@/data/concierge/business/professionals";
import PurchaseDisclaimer from "@/components/concierge/PurchaseDisclaimer";

const BusinessService = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Simple search filter for categories and professionals
  const filteredCategories = searchQuery
    ? businessCategories.filter(cat => 
        cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.services.some(service => 
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : businessCategories;
  
  const filteredProfessionals = searchQuery
    ? professionals.filter(pro => 
        pro.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        pro.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pro.company.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : professionals;

  return (
    <ServicePageTemplate
      title="Business Services"
      description="Connect with expert business professionals across South Africa"
      icon={Users}
      color="text-blue-700"
    >
      <PurchaseDisclaimer serviceName="business services" />
      
      <BusinessSearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <Tabs defaultValue="services" className="w-full">
        <TabsList className="mb-6 grid grid-cols-2 w-full max-w-sm">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="professionals">Professionals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="services">
          <BusinessServicesTab categories={filteredCategories} />
        </TabsContent>
        
        <TabsContent value="professionals">
          <BusinessProfessionalsTab professionals={filteredProfessionals} />
        </TabsContent>
      </Tabs>
      
      <BusinessBenefits />
    </ServicePageTemplate>
  );
};

export default BusinessService;
