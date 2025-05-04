
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Briefcase, UserSearch } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BusinessHero from "@/components/concierge/business/BusinessHero";
import BusinessSearchBar from "@/components/concierge/business/BusinessSearchBar";
import BusinessServicesTab from "@/components/concierge/business/BusinessServicesTab";
import BusinessProfessionalsTab from "@/components/concierge/business/BusinessProfessionalsTab";
import BusinessBenefits from "@/components/concierge/business/BusinessBenefits";
import { businessCategories } from "@/data/concierge/business/businessCategories";

const BusinessService = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("services");

  const handleServiceRequest = (serviceTitle: string) => {
    toast.success(`Service request submitted`, {
      description: `Your request for ${serviceTitle} has been received. We will contact you shortly.`
    });
  };

  const filteredCategories = businessCategories.map(category => {
    const filteredServices = category.services.filter(
      service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      services: filteredServices
    };
  }).filter(category => category.services.length > 0);

  return (
    <ServicePageTemplate
      title="Business Services"
      description="Accounting, legal and consulting services for your business needs"
      icon={Briefcase}
      color="text-navyblue"
    >
      <div className="space-y-8">
        {/* Hero section */}
        <BusinessHero />

        {/* Search bar */}
        <BusinessSearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        {/* Tabs for services and professionals */}
        <Tabs defaultValue="services" value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="services" className="px-6">
              <Briefcase className="h-4 w-4 mr-2" />
              Services
            </TabsTrigger>
            <TabsTrigger value="professionals" className="px-6">
              <UserSearch className="h-4 w-4 mr-2" />
              Professionals
            </TabsTrigger>
          </TabsList>

          {/* Services Tab Content */}
          <TabsContent value="services">
            <BusinessServicesTab 
              filteredCategories={filteredCategories}
              onRequestService={handleServiceRequest}
              onViewProfessionals={() => setActiveTab("professionals")}
            />
          </TabsContent>

          {/* Professionals Tab Content */}
          <TabsContent value="professionals">
            <BusinessProfessionalsTab 
              businessCategories={businessCategories}
              searchQuery={searchQuery}
            />
          </TabsContent>
        </Tabs>

        {/* Additional information */}
        <BusinessBenefits />
      </div>
    </ServicePageTemplate>
  );
};

export default BusinessService;
