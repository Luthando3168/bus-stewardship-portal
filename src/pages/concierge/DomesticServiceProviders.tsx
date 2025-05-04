
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Users, Filter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";
import { serviceProviders, ServiceProvider } from "@/data/concierge/domestic/serviceProviders";
import ServiceProviderProfile from "@/components/concierge/domestic/ServiceProviderProfile";

const DomesticServiceProviders = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const navigate = useNavigate();
  const [filteredProviders, setFilteredProviders] = useState<ServiceProvider[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("rating_high");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null);
  
  const serviceNames: { [key: string]: string } = {
    "housekeeping": "Housekeeping",
    "gardening": "Garden Services",
    "childcare": "Childcare"
  };
  
  // Filter and sort providers
  useEffect(() => {
    if (!serviceType) return;
    
    let providers = serviceProviders.filter(provider => provider.service === serviceType);
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      providers = providers.filter(provider => 
        provider.name.toLowerCase().includes(term) || 
        provider.bio.toLowerCase().includes(term) ||
        provider.skills.some(skill => skill.toLowerCase().includes(term))
      );
    }
    
    // Apply sorting
    switch (sortOrder) {
      case "rating_high":
        providers = [...providers].sort((a, b) => b.rating - a.rating);
        break;
      case "rating_low":
        providers = [...providers].sort((a, b) => a.rating - b.rating);
        break;
      case "price_high":
        providers = [...providers].sort((a, b) => 
          parseInt(b.hourlyRate.replace(/\D/g, '')) - parseInt(a.hourlyRate.replace(/\D/g, ''))
        );
        break;
      case "price_low":
        providers = [...providers].sort((a, b) => 
          parseInt(a.hourlyRate.replace(/\D/g, '')) - parseInt(b.hourlyRate.replace(/\D/g, ''))
        );
        break;
      case "experience_high":
        providers = [...providers].sort((a, b) => b.experience - a.experience);
        break;
    }
    
    setFilteredProviders(providers);
  }, [serviceType, sortOrder, searchTerm]);
  
  const handleProviderSelect = (provider: ServiceProvider) => {
    setSelectedProvider(provider);
    navigate(`/concierge/domestic/${serviceType}/provider/${provider.id}`);
  };
  
  if (!serviceType || !serviceNames[serviceType]) {
    return <div>Invalid service type</div>;
  }
  
  return (
    <ServicePageTemplate
      title={serviceNames[serviceType]}
      description={`Browse our vetted ${serviceNames[serviceType].toLowerCase()} professionals and select the perfect match for your needs`}
      icon={Users}
      color="text-lime-600"
    >
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="w-full md:w-auto">
          <Label htmlFor="search" className="sr-only">Search</Label>
          <Input
            id="search"
            placeholder="Search by name, skills or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-80"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="h-4 w-4 text-gray-500" />
          <Label htmlFor="sort-order" className="text-sm">Sort by:</Label>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px]" id="sort-order">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating_high">Highest rating</SelectItem>
              <SelectItem value="rating_low">Lowest rating</SelectItem>
              <SelectItem value="price_high">Highest price</SelectItem>
              <SelectItem value="price_low">Lowest price</SelectItem>
              <SelectItem value="experience_high">Most experienced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredProviders.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No service providers found. Try adjusting your search criteria.</p>
          </div>
        ) : (
          filteredProviders.map(provider => (
            <Card
              key={provider.id}
              className="cursor-pointer hover:shadow-md transition-all"
              onClick={() => handleProviderSelect(provider)}
            >
              <CardContent className="p-0">
                <ServiceProviderProfile
                  provider={provider}
                  isSelected={false}
                  onSelect={() => handleProviderSelect(provider)}
                />
              </CardContent>
            </Card>
          ))
        )}
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button 
          variant="outline" 
          onClick={() => navigate('/concierge/domestic')}
        >
          Back to Services
        </Button>
      </div>
    </ServicePageTemplate>
  );
};

export default DomesticServiceProviders;
