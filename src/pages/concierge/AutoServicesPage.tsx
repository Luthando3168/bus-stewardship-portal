
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Car, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const carRentalCompanies = [
  {
    id: 1,
    name: "Premium Car Rentals",
    logo: "PCR",
    services: ["Luxury", "SUVs", "Sedans"],
    location: "Nationwide",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Executive Chauffeurs",
    logo: "EC",
    services: ["Airport Transfers", "Events", "Corporate"],
    location: "Major Cities",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Easy Drive Rentals",
    logo: "EDR",
    services: ["Economy", "Affordable", "Long-term"],
    location: "Nationwide",
    rating: 4.6,
  }
];

const AutoServicesPage = () => {
  const [activeTab, setActiveTab] = useState("rentals");
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [carType, setCarType] = useState("");

  const handleCompanySelect = (companyId: number) => {
    setSelectedCompany(companyId);
    toast.success("Company selected", {
      description: "You can now specify your rental details."
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted", {
      description: "A confirmation will be sent to your email shortly."
    });
  };

  return (
    <ServicePageTemplate
      title="Auto Services"
      description="Car rentals and chauffeur services for your transportation needs"
      icon={Car}
      color="text-navyblue"
    >
      <Tabs defaultValue="rentals" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="rentals">Car Rentals</TabsTrigger>
          <TabsTrigger value="chauffeur">Chauffeur Services</TabsTrigger>
        </TabsList>
        
        <TabsContent value="rentals" className="space-y-6">
          <h2 className="text-lg font-medium mb-4 text-navyblue">Select a Rental Company</h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {carRentalCompanies.filter(company => company.services.some(s => 
              ["Luxury", "SUVs", "Sedans", "Economy", "Affordable", "Long-term"].includes(s)
            )).map((company) => (
              <Card 
                key={company.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${selectedCompany === company.id ? 'ring-2 ring-navyblue' : ''}`}
                onClick={() => handleCompanySelect(company.id)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-12 w-12 bg-navyblue/10 text-navyblue rounded-md flex items-center justify-center font-bold text-lg">
                      {company.logo}
                    </div>
                    <Badge variant="outline" className="bg-navyblue/5 text-navyblue border-navyblue/20">
                      {company.rating} ★
                    </Badge>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-1">{company.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">Coverage: {company.location}</p>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {company.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedCompany && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="pickup-location">Pickup Location</Label>
                  <Input 
                    id="pickup-location"
                    type="text"
                    placeholder="Enter city or airport"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="dropoff-location">Drop-off Location</Label>
                  <Input 
                    id="dropoff-location"
                    type="text"
                    placeholder="Same as pickup location"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="pickup-date">Pickup Date</Label>
                  <Input 
                    id="pickup-date"
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="return-date">Return Date</Label>
                  <Input 
                    id="return-date"
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={pickupDate || new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="car-type">Car Type</Label>
                <Select value={carType} onValueChange={setCarType} required>
                  <SelectTrigger id="car-type">
                    <SelectValue placeholder="Select car type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="midsize">Midsize Sedan</SelectItem>
                    <SelectItem value="full-size">Full-size Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  className="bg-navyblue hover:bg-navyblue/90 text-white"
                >
                  Search Available Cars
                </Button>
              </div>
            </form>
          )}
        </TabsContent>
        
        <TabsContent value="chauffeur" className="space-y-6">
          <h2 className="text-lg font-medium mb-4 text-navyblue">Select a Chauffeur Service</h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {carRentalCompanies.filter(company => company.services.some(s => 
              ["Airport Transfers", "Events", "Corporate"].includes(s)
            )).map((company) => (
              <Card 
                key={company.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${selectedCompany === company.id ? 'ring-2 ring-navyblue' : ''}`}
                onClick={() => handleCompanySelect(company.id)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-12 w-12 bg-navyblue/10 text-navyblue rounded-md flex items-center justify-center font-bold text-lg">
                      {company.logo}
                    </div>
                    <Badge variant="outline" className="bg-navyblue/5 text-navyblue border-navyblue/20">
                      {company.rating} ★
                    </Badge>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-1">{company.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">Coverage: {company.location}</p>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {company.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedCompany && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="service-type">Service Type</Label>
                <Select required>
                  <SelectTrigger id="service-type">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airport">Airport Transfer</SelectItem>
                    <SelectItem value="hourly">Hourly Charter</SelectItem>
                    <SelectItem value="event">Event Transportation</SelectItem>
                    <SelectItem value="corporate">Corporate Travel</SelectItem>
                    <SelectItem value="day">Full-day Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="pickup-address">Pickup Address</Label>
                  <Input 
                    id="pickup-address"
                    type="text"
                    placeholder="Enter full address"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input 
                    id="destination"
                    type="text"
                    placeholder="Enter destination"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="c-pickup-date">Pickup Date</Label>
                  <Input 
                    id="c-pickup-date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="pickup-time">Pickup Time</Label>
                  <Input 
                    id="pickup-time"
                    type="time"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="passengers">Number of Passengers</Label>
                <Select required>
                  <SelectTrigger id="passengers">
                    <SelectValue placeholder="Select number of passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2</SelectItem>
                    <SelectItem value="3-4">3-4</SelectItem>
                    <SelectItem value="5-6">5-6</SelectItem>
                    <SelectItem value="7+">7+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="special-instructions">Special Instructions</Label>
                <Textarea 
                  id="special-instructions"
                  placeholder="Any special requirements or instructions"
                  className="resize-none"
                  rows={3}
                />
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  className="bg-navyblue hover:bg-navyblue/90 text-white"
                >
                  Request Chauffeur Service
                </Button>
              </div>
            </form>
          )}
        </TabsContent>
      </Tabs>
    </ServicePageTemplate>
  );
};

export default AutoServicesPage;
