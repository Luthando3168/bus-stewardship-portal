
import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SearchForm = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ destination, checkIn, checkOut, guests });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-navyblue/5 p-6 rounded-xl">
      <div className="grid gap-4 md:grid-cols-4">
        <div>
          <label htmlFor="destination" className="block text-sm font-medium mb-1">
            Destination
          </label>
          <Input 
            id="destination"
            placeholder="Where are you going?" 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="check-in" className="block text-sm font-medium mb-1">
            Check-in
          </label>
          <div className="relative">
            <Input 
              id="check-in"
              type="date" 
              value={checkIn} 
              onChange={(e) => setCheckIn(e.target.value)}
              className="pl-9"
            />
            <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          </div>
        </div>
        
        <div>
          <label htmlFor="check-out" className="block text-sm font-medium mb-1">
            Check-out
          </label>
          <div className="relative">
            <Input 
              id="check-out"
              type="date" 
              value={checkOut} 
              onChange={(e) => setCheckOut(e.target.value)}
              className="pl-9"
            />
            <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          </div>
        </div>
        
        <div>
          <label htmlFor="guests" className="block text-sm font-medium mb-1">
            Guests
          </label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger>
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5">5+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-4 text-right">
        <Button type="submit" className="bg-gold hover:bg-gold/90 text-white">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
