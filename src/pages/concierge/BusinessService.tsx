
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Briefcase, Search, ChevronRight, Users, Building, FileText, UserSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Link } from "react-router-dom";

import ProfessionalsGrid from "@/components/concierge/business/ProfessionalsGrid";
import { getProfessionalsByCategoryId } from "@/data/concierge/business/professionals";

interface BusinessServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  services: BusinessServiceItem[];
}

interface BusinessServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
}

const BusinessService = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("services");

  const handleServiceRequest = (serviceTitle: string) => {
    toast.success(`Service request submitted`, {
      description: `Your request for ${serviceTitle} has been received. We will contact you shortly.`
    });
  };

  const businessCategories: BusinessServiceCategory[] = [
    {
      id: "consulting",
      title: "Business Consulting",
      description: "Professional consulting services for your business needs",
      icon: <Users className="h-10 w-10 text-navyblue" />,
      services: [
        {
          id: "bc1",
          title: "Strategic Business Planning",
          description: "Develop comprehensive business strategies for growth and market positioning",
          price: "From R5,000",
          featured: true
        },
        {
          id: "bc2",
          title: "Market Research & Analysis",
          description: "In-depth market research and competitor analysis to identify opportunities",
          price: "From R3,500"
        },
        {
          id: "bc3",
          title: "Process Optimization",
          description: "Streamline your business processes for maximum efficiency and productivity",
          price: "From R4,000"
        }
      ]
    },
    {
      id: "legal",
      title: "Legal & Compliance",
      description: "Essential legal services for business compliance and protection",
      icon: <Building className="h-10 w-10 text-navyblue" />,
      services: [
        {
          id: "lc1",
          title: "Business Registration",
          description: "Company registration and setup with all necessary legal documentation",
          price: "From R1,800",
          featured: true
        },
        {
          id: "lc2",
          title: "Contract Development",
          description: "Custom contract creation and review for all business requirements",
          price: "From R2,500"
        },
        {
          id: "lc3",
          title: "Regulatory Compliance",
          description: "Ensure your business meets all industry and government regulations",
          price: "From R3,000"
        }
      ]
    },
    {
      id: "accounting",
      title: "Accounting & Finance",
      description: "Professional financial services to keep your business thriving",
      icon: <FileText className="h-10 w-10 text-navyblue" />,
      services: [
        {
          id: "af1",
          title: "Financial Statement Preparation",
          description: "Professional preparation of financial statements and reports",
          price: "From R2,000",
          featured: true
        },
        {
          id: "af2",
          title: "Tax Planning & Filing",
          description: "Strategic tax planning and timely filing of all required tax returns",
          price: "From R1,500"
        },
        {
          id: "af3",
          title: "Financial Forecasting",
          description: "Data-driven financial projections to support decision making",
          price: "From R3,500"
        }
      ]
    }
  ];

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
        <div className="relative rounded-xl overflow-hidden h-48 md:h-60 mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-navyblue to-blue-700 opacity-90"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Professional Business Support</h2>
            <p className="text-sm md:text-base max-w-md">
              Access expert business services and professionals to help your company thrive in today's competitive landscape
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for business services or professionals..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

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
            {filteredCategories.length > 0 ? (
              <div className="space-y-12">
                {filteredCategories.map((category) => (
                  <div key={category.id} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-blue-50">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navyblue">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {category.services.map((service) => (
                        <Card key={service.id} className="overflow-hidden transition-all hover:shadow-md">
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
                                onClick={() => handleServiceRequest(service.title)}
                                className="bg-navyblue hover:bg-blue-900"
                              >
                                Request <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="pt-4 text-right">
                      <Button 
                        variant="outline" 
                        className="border-navyblue text-navyblue"
                        onClick={() => setActiveTab("professionals")}
                      >
                        View {category.title} Professionals <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg bg-gray-50">
                <div className="text-gray-400 mb-4">
                  <Briefcase className="mx-auto h-12 w-12" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No services found</h3>
                <p className="text-gray-500">Try adjusting your search query</p>
              </div>
            )}
          </TabsContent>

          {/* Professionals Tab Content */}
          <TabsContent value="professionals">
            <div className="space-y-12">
              {businessCategories.map((category) => {
                const professionals = getProfessionalsByCategoryId(category.id);
                
                if (professionals.length === 0) return null;
                
                return (
                  <div key={`prof-${category.id}`} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-blue-50">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navyblue">{category.title} Professionals</h3>
                        <p className="text-gray-600">Expert consultants specializing in {category.title.toLowerCase()}</p>
                      </div>
                    </div>
                    
                    <ProfessionalsGrid 
                      professionals={professionals}
                      searchQuery={searchQuery}
                    />
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional information */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-navyblue mb-3">Why Choose Our Business Services?</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Expert professionals with years of industry experience</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Tailored solutions designed for your specific business needs</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Competitive pricing with transparent fee structure</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>Ongoing support and advisory services</span>
            </li>
          </ul>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default BusinessService;
