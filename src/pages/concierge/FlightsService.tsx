
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { PlaneTakeoff, ArrowRight, Calendar, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const flights = [
  {
    id: 1,
    airline: "South African Airways",
    flightNumber: "SA 316",
    departure: "Johannesburg (JNB)",
    arrival: "Cape Town (CPT)",
    departureTime: "08:15",
    arrivalTime: "10:25",
    duration: "2h 10m",
    price: "R1,850",
    memberDiscount: true,
    ownershipDiscount: true
  },
  {
    id: 2,
    airline: "FlySafair",
    flightNumber: "FA 161",
    departure: "Johannesburg (JNB)",
    arrival: "Cape Town (CPT)",
    departureTime: "10:30",
    arrivalTime: "12:40",
    duration: "2h 10m",
    price: "R1,650",
    memberDiscount: true,
    ownershipDiscount: false
  },
  {
    id: 3,
    airline: "Airlink",
    flightNumber: "4Z 471",
    departure: "Johannesburg (JNB)",
    arrival: "Cape Town (CPT)",
    departureTime: "14:45",
    arrivalTime: "17:00",
    duration: "2h 15m",
    price: "R1,950",
    memberDiscount: false,
    ownershipDiscount: false
  }
];

const FlightsService = () => {
  const [tripType, setTripType] = useState("one-way");
  const [selectedFlight, setSelectedFlight] = useState<number | null>(null);
  const [searchData, setSearchData] = useState({
    from: "Johannesburg (JNB)",
    to: "Cape Town (CPT)",
    departDate: "2025-05-15",
    returnDate: "",
    passengers: "1"
  });

  const handleFlightSelect = (flightId: number) => {
    setSelectedFlight(flightId);
    toast.success("Flight selected", {
      description: "You can now proceed to booking."
    });
  };

  const handleBooking = () => {
    toast.success("Flight booked successfully", {
      description: "Your e-ticket will be sent to your email shortly."
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Searching for flights", {
      description: "Displaying available flights for your criteria."
    });
  };

  return (
    <ServicePageTemplate
      title="Flight Bookings"
      description="Book domestic and international flights with exclusive member discounts"
      icon={PlaneTakeoff}
      color="text-navyblue"
      ownershipNote="You own shares in SAA"
    >
      <form onSubmit={handleSearch} className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
        <div className="mb-4">
          <RadioGroup 
            defaultValue="one-way" 
            value={tripType}
            onValueChange={setTripType}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-way" id="one-way" />
              <Label htmlFor="one-way">One Way</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="round-trip" id="round-trip" />
              <Label htmlFor="round-trip">Round Trip</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Label htmlFor="from">From</Label>
            <Select defaultValue={searchData.from}>
              <SelectTrigger>
                <SelectValue placeholder="Departure Airport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Johannesburg (JNB)">Johannesburg (JNB)</SelectItem>
                <SelectItem value="Cape Town (CPT)">Cape Town (CPT)</SelectItem>
                <SelectItem value="Durban (DUR)">Durban (DUR)</SelectItem>
                <SelectItem value="Port Elizabeth (PLZ)">Gqeberha (PLZ)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="to">To</Label>
            <Select defaultValue={searchData.to}>
              <SelectTrigger>
                <SelectValue placeholder="Arrival Airport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Johannesburg (JNB)">Johannesburg (JNB)</SelectItem>
                <SelectItem value="Cape Town (CPT)">Cape Town (CPT)</SelectItem>
                <SelectItem value="Durban (DUR)">Durban (DUR)</SelectItem>
                <SelectItem value="Port Elizabeth (PLZ)">Gqeberha (PLZ)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="departDate">Departure Date</Label>
            <Input 
              id="departDate"
              name="departDate"
              type="date"
              value={searchData.departDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          
          {tripType === "round-trip" && (
            <div>
              <Label htmlFor="returnDate">Return Date</Label>
              <Input 
                id="returnDate"
                name="returnDate"
                type="date"
                value={searchData.returnDate}
                onChange={handleInputChange}
                min={searchData.departDate || new Date().toISOString().split('T')[0]}
                required={tripType === "round-trip"}
              />
            </div>
          )}
          
          <div className={tripType === "one-way" ? "sm:col-span-2 lg:col-span-1" : ""}>
            <Label htmlFor="passengers">Passengers</Label>
            <Select defaultValue="1">
              <SelectTrigger>
                <SelectValue placeholder="Number of Passengers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Passenger</SelectItem>
                <SelectItem value="2">2 Passengers</SelectItem>
                <SelectItem value="3">3 Passengers</SelectItem>
                <SelectItem value="4">4 Passengers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button type="submit" className="bg-navyblue hover:bg-navyblue/90 text-white">
            Search Flights
          </Button>
        </div>
      </form>

      <h2 className="text-lg font-medium mb-4 text-navyblue">Available Flights</h2>
      
      <div className="space-y-4">
        {flights.map((flight) => (
          <Card 
            key={flight.id} 
            className={`cursor-pointer transition-all hover:shadow-md ${selectedFlight === flight.id ? 'ring-2 ring-navyblue' : ''}`}
            onClick={() => handleFlightSelect(flight.id)}
          >
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="font-semibold text-navyblue">{flight.airline}</div>
                    <Badge variant="outline" className="ml-2 text-xs">{flight.flightNumber}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-xl font-bold">{flight.departureTime}</div>
                      <div className="text-xs text-gray-500">{flight.departure}</div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-full h-[1px] bg-gray-300 relative">
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                          {flight.duration}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 absolute top-1/2 right-0 -translate-y-1/2" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xl font-bold">{flight.arrivalTime}</div>
                      <div className="text-xs text-gray-500">{flight.arrival}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <div className="text-xl font-bold text-navyblue">{flight.price}</div>
                  <div className="flex flex-col items-end gap-1 mt-1">
                    {flight.memberDiscount && (
                      <Badge variant="outline" className="bg-navyblue/5 text-navyblue border-navyblue/20">
                        Member discount applied
                      </Badge>
                    )}
                    {flight.ownershipDiscount && (
                      <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                        Owner discount applied
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              {selectedFlight === flight.id && (
                <div className="mt-4 pt-4 border-t flex justify-end">
                  <Button 
                    onClick={handleBooking}
                    className="bg-navyblue hover:bg-navyblue/90 text-white"
                  >
                    Book This Flight
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </ServicePageTemplate>
  );
};

export default FlightsService;
