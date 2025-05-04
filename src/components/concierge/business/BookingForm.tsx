
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookingFormProps {
  professionalName: string;
  serviceCategory: string;
  onClose?: () => void;
}

const BookingForm = ({ professionalName, serviceCategory, onClose }: BookingFormProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [serviceName, setServiceName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = {
    consulting: ["Strategic Business Planning", "Market Research & Analysis", "Process Optimization"],
    legal: ["Business Registration", "Contract Development", "Regulatory Compliance"],
    accounting: ["Financial Statement Preparation", "Tax Planning & Filing", "Financial Forecasting"]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !serviceName) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Booking request sent", {
        description: `Your appointment with ${professionalName} has been requested for ${date.toDateString()} at ${timeSlot}.`
      });
      setIsSubmitting(false);
      if (onClose) onClose();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Book an Appointment</h3>
        <p className="text-sm text-gray-500">
          Select your preferred date and time to schedule a consultation with {professionalName}.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="service">Service Required</Label>
          <Select value={serviceName} onValueChange={setServiceName} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions[serviceCategory as keyof typeof serviceOptions]?.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label>Select Date</Label>
          <div className="border rounded-md mt-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => {
                // Disable past dates and weekends
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const day = date.getDay();
                return date < today || day === 0 || day === 6;
              }}
              className="rounded-md border"
            />
          </div>
        </div>
        
        <div>
          <Label>Select Time Slot</Label>
          <RadioGroup value={timeSlot} onValueChange={setTimeSlot} className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <RadioGroupItem value="9:00 AM" id="t1" className="peer sr-only" />
              <Label
                htmlFor="t1"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-navyblue [&:has([data-state=checked])]:border-navyblue"
              >
                9:00 AM
              </Label>
            </div>
            <div>
              <RadioGroupItem value="10:30 AM" id="t2" className="peer sr-only" />
              <Label
                htmlFor="t2"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-navyblue [&:has([data-state=checked])]:border-navyblue"
              >
                10:30 AM
              </Label>
            </div>
            <div>
              <RadioGroupItem value="1:00 PM" id="t3" className="peer sr-only" />
              <Label
                htmlFor="t3"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-navyblue [&:has([data-state=checked])]:border-navyblue"
              >
                1:00 PM
              </Label>
            </div>
            <div>
              <RadioGroupItem value="3:30 PM" id="t4" className="peer sr-only" />
              <Label
                htmlFor="t4"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-navyblue [&:has([data-state=checked])]:border-navyblue"
              >
                3:30 PM
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            placeholder="Provide any additional details about your requirements"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="resize-none"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        {onClose && (
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        )}
        <Button 
          type="submit"
          className="bg-navyblue hover:bg-blue-900" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Book Appointment"}
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;
