
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProviderAvailabilityTable from "@/components/concierge/domestic/ProviderAvailabilityTable";
import ServiceItemsSelector from "@/components/concierge/domestic/ServiceItemsSelector";

interface BookingFormProps {
  form: any;
  provider: any;
  serviceType: string;
  providerId: string;
  onSubmit: (data: any) => void;
  onBack: () => void;
}

const BookingForm = ({ 
  form, 
  provider, 
  serviceType, 
  providerId, 
  onSubmit, 
  onBack 
}: BookingFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book {provider.name}</CardTitle>
        <CardDescription>
          Fill in the details below to book this service provider
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Provider Availability Calendar */}
          <div className="border rounded-md p-4 bg-gray-50">
            <h3 className="font-medium mb-3">Provider Availability</h3>
            <ProviderAvailabilityTable providerId={providerId} />
          </div>
          
          {/* Service Date Selection */}
          <div className="space-y-2">
            <Label htmlFor="serviceDate">Service Date</Label>
            <Input
              id="serviceDate"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              {...form.register("serviceDate")}
              required
            />
          </div>
          
          {/* Booking Type Selection */}
          <div className="space-y-2">
            <Label>Booking Type</Label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="full-day" 
                  value="full-day"
                  className="mr-2" 
                  {...form.register("bookingType")}
                  defaultChecked 
                />
                <Label htmlFor="full-day">Full Day (8 hours)</Label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="half-day" 
                  value="half-day" 
                  className="mr-2"
                  {...form.register("bookingType")}
                />
                <Label htmlFor="half-day">Half Day (4 hours)</Label>
              </div>
            </div>
          </div>
          
          {/* Start Time */}
          <div className="space-y-2">
            <Label htmlFor="startTime">Start Time</Label>
            <Input
              id="startTime"
              type="time"
              {...form.register("startTime")}
              required
            />
          </div>
          
          {/* Service items selection based on service type */}
          <div className="space-y-2">
            <Label>Service Items</Label>
            <ServiceItemsSelector serviceType={serviceType} form={form} />
          </div>
          
          {/* Service Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Additional Details</Label>
            <Textarea
              id="description"
              placeholder="Please provide any additional details about your request..."
              rows={4}
              {...form.register("description")}
              required
            />
          </div>
          
          {/* Price Calculation */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Price Estimate</h4>
            <div className="flex justify-between">
              <span>Rate</span>
              <span>{provider.hourlyRate}/hour</span>
            </div>
            <div className="flex justify-between">
              <span>Duration</span>
              <span>
                {form.watch("bookingType") === "full-day" ? "8" : "4"} hours
              </span>
            </div>
            <div className="border-t mt-2 pt-2 flex justify-between font-medium">
              <span>Total</span>
              <span>R{
                parseInt(provider.hourlyRate.replace(/\D/g, '')) * 
                (form.watch("bookingType") === "full-day" ? 8 : 4)
              }</span>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={onBack}
        >
          Back to Profile
        </Button>
        <Button 
          className="bg-lime-600 hover:bg-lime-700 text-white"
          onClick={form.handleSubmit(onSubmit)}
        >
          Submit Request
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookingForm;
