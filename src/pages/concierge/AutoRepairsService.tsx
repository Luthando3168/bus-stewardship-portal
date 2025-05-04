
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Wrench, Calendar, Check } from "lucide-react";
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

const mechanics = [
  {
    id: 1,
    name: "Premier Auto Repairs",
    logo: "PAR",
    services: ["Engine", "Transmission", "Brakes", "Electrical"],
    location: "Sandton",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Quick Fix Mechanics",
    logo: "QFM",
    services: ["Servicing", "Brakes", "Suspension", "Diagnostics"],
    location: "Rosebank",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Elite Auto Care",
    logo: "EAC",
    services: ["Full Service", "Engine", "Body Work", "Electrical"],
    location: "Fourways",
    rating: 4.7,
  }
];

const AutoRepairsService = () => {
  const [selectedMechanic, setSelectedMechanic] = useState<number | null>(null);
  const [serviceType, setServiceType] = useState("");
  const [carDetails, setCarDetails] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  const handleMechanicSelect = (mechanicId: number) => {
    setSelectedMechanic(mechanicId);
    toast.success("Mechanic selected", {
      description: "You can now specify your service requirements."
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Service booking submitted", {
      description: "A confirmation will be sent to your email shortly."
    });
  };

  return (
    <ServicePageTemplate
      title="Auto Repairs"
      description="Connect with our network of trusted mechanics and service centers"
      icon={Wrench}
      color="text-navyblue"
    >
      <h2 className="text-lg font-medium mb-4 text-navyblue">Select a Mechanic</h2>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {mechanics.map((mechanic) => (
          <Card 
            key={mechanic.id} 
            className={`cursor-pointer transition-all hover:shadow-md ${selectedMechanic === mechanic.id ? 'ring-2 ring-navyblue' : ''}`}
            onClick={() => handleMechanicSelect(mechanic.id)}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="h-12 w-12 bg-navyblue/10 text-navyblue rounded-md flex items-center justify-center font-bold text-lg">
                  {mechanic.logo}
                </div>
                <Badge variant="outline" className="bg-navyblue/5 text-navyblue border-navyblue/20">
                  {mechanic.rating} ★
                </Badge>
              </div>
              
              <h3 className="font-medium text-lg mb-1">{mechanic.name}</h3>
              <p className="text-gray-600 text-sm mb-2">Location: {mechanic.location}</p>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {mechanic.services.map((service, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100">
                    {service}
                  </Badge>
                ))}
              </div>
              
              {selectedMechanic === mechanic.id && (
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

      {selectedMechanic && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="service-type">Service Type</Label>
            <Select value={serviceType} onValueChange={setServiceType} required>
              <SelectTrigger id="service-type">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-service">Full Service</SelectItem>
                <SelectItem value="engine">Engine Repairs</SelectItem>
                <SelectItem value="transmission">Transmission</SelectItem>
                <SelectItem value="brakes">Brakes</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="bodywork">Body Work</SelectItem>
                <SelectItem value="diagnostics">Diagnostics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="car-details">Car Details</Label>
            <Textarea 
              id="car-details"
              placeholder="Make, model, year, and current issues"
              value={carDetails}
              onChange={(e) => setCarDetails(e.target.value)}
              className="resize-none"
              rows={4}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="preferred-date">Preferred Service Date</Label>
            <Input 
              id="preferred-date"
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          
          <div className="flex justify-end pt-4">
            <Button 
              type="submit" 
              className="bg-navyblue hover:bg-navyblue/90 text-white"
            >
              Request Service
            </Button>
          </div>
        </form>
      )}
    </ServicePageTemplate>
  );
};

export default AutoRepairsService;
