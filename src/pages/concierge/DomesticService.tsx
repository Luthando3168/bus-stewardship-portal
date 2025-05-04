
import React, { useState, useEffect } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { serviceProviders } from "@/data/concierge/domestic/serviceProviders";
import ServiceProviderProfile from "@/components/concierge/domestic/ServiceProviderProfile";

const serviceTypes = [
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Professional home cleaning and organization services",
    features: ["Regular cleaning", "Deep cleaning", "Organizing", "Laundry assistance"],
    rates: "From R250 per session"
  },
  {
    id: "gardening",
    title: "Garden Services",
    description: "Lawn maintenance and garden care",
    features: ["Lawn mowing", "Garden maintenance", "Plant care", "Outdoor cleaning"],
    rates: "From R200 per session"
  },
  {
    id: "childcare",
    title: "Childcare",
    description: "Professional and vetted childcare professionals",
    features: ["Babysitting", "After-school care", "Educational support", "Child development"],
    rates: "From R180 per hour"
  }
];

const DomesticService = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    frequency: "",
    startDate: "",
    requirements: ""
  });

  // Filter providers based on selected service
  const filteredProviders = selectedService 
    ? serviceProviders.filter(provider => provider.service === selectedService)
    : [];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setSelectedProvider(null); // Reset provider selection when service changes
    toast.success("Service selected", {
      description: "Now you can choose a service provider."
    });
  };

  const handleProviderSelect = (providerId: string) => {
    setSelectedProvider(providerId);
    toast.success("Provider selected", {
      description: "You can now specify your requirements."
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Service request submitted", {
      description: "We'll confirm your booking soon."
    });
  };

  return (
    <ServicePageTemplate
      title="Domestic Staff"
      description="Vetted housekeepers, gardeners, and childcare professionals"
      icon={Users}
      color="text-lime-600"
    >
      <h2 className="text-lg font-medium mb-4 text-navyblue">Select a Service</h2>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {serviceTypes.map((service) => (
          <Card 
            key={service.id} 
            className={`cursor-pointer transition-all hover:shadow-md ${selectedService === service.id ? 'ring-2 ring-lime-600' : ''}`}
            onClick={() => handleServiceSelect(service.id)}
          >
            <CardContent className="p-6">
              <h3 className="font-medium text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              
              <ul className="text-sm text-gray-600 mb-3 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-600 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <p className="text-sm font-medium text-navyblue">{service.rates}</p>
              
              {selectedService === service.id && (
                <div className="mt-4 flex justify-end">
                  <Badge className="bg-lime-600 text-white">
                    <Check className="h-3 w-3 mr-1" /> Selected
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedService && (
        <>
          <div className="border-t pt-6 mb-6">
            <h2 className="text-lg font-medium mb-4 text-navyblue">Select a Service Provider</h2>
            <div className="grid gap-6 mb-8">
              {filteredProviders.map(provider => (
                <ServiceProviderProfile
                  key={provider.id}
                  provider={provider}
                  isSelected={selectedProvider === provider.id}
                  onSelect={handleProviderSelect}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {selectedProvider && (
        <form onSubmit={handleSubmit} className="space-y-4 border-t pt-6">
          <div>
            <Label htmlFor="frequency">Service Frequency</Label>
            <select 
              id="frequency" 
              name="frequency"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.frequency}
              onChange={handleInputChange}
              required
            >
              <option value="">Select frequency</option>
              <option value="once">One-time service</option>
              <option value="weekly">Weekly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input 
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="requirements">Specific Requirements</Label>
            <Textarea 
              id="requirements"
              name="requirements"
              placeholder="Describe your specific needs and preferences"
              value={formData.requirements}
              onChange={handleInputChange}
              className="resize-none"
              rows={4}
            />
          </div>
          
          <div className="flex justify-end pt-4">
            <Button 
              type="submit" 
              className="bg-lime-600 hover:bg-lime-700 text-white"
            >
              Request Domestic Staff
            </Button>
          </div>
        </form>
      )}
    </ServicePageTemplate>
  );
};

export default DomesticService;
