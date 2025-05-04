
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SearchForm from "@/components/concierge/accommodation/SearchForm";
import PropertyCard, { PropertyProps } from "@/components/concierge/accommodation/PropertyCard";
import PropertyDialog from "@/components/concierge/accommodation/PropertyDialog";
import PaymentDialog from "@/components/concierge/accommodation/PaymentDialog";
import WhyBookSection from "@/components/concierge/accommodation/WhyBookSection";
import { propertyData } from "@/components/concierge/accommodation/PropertyData";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

const Accommodation = () => {
  const [selectedProperty, setSelectedProperty] = useState<PropertyProps | null>(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const handleAvailabilityClick = (property: PropertyProps) => {
    setSelectedProperty(property);
  };

  const handleBookNow = () => {
    setShowPaymentDialog(true);
  };

  const handlePaymentSubmit = () => {
    setPaymentProcessing(true);
    setTimeout(() => {
      setPaymentProcessing(false);
      setShowPaymentDialog(false);
      setSelectedProperty(null);
      toast("Booking confirmed!", {
        description: "Your accommodation has been successfully booked.",
      });
    }, 1500);
  };

  return (
    <Layout showPreFooter={false}>
      <div className="space-y-10 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-navyblue">Find your next stay</h1>
          <div>
            <span className="text-sm text-gray-600 mr-2">Last Updated:</span>
            <span className="text-sm font-medium">May 1, 2025</span>
          </div>
        </div>

        <SearchForm />

        <div className="border-t border-b py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Top destinations</h2>
            <Button variant="outline" className="text-navyblue border-navyblue hover:bg-navyblue/10">
              View all
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {propertyData.map((property, index) => (
              <PropertyCard 
                key={index} 
                property={property}
                onAvailabilityClick={handleAvailabilityClick} 
              />
            ))}
          </div>
        </div>

        <WhyBookSection />
      </div>

      <PropertyDialog 
        property={selectedProperty}
        isOpen={!!selectedProperty && !showPaymentDialog}
        onClose={() => setSelectedProperty(null)}
        onBookNow={handleBookNow}
      />

      <PaymentDialog 
        isOpen={showPaymentDialog}
        onClose={() => setShowPaymentDialog(false)}
        onSubmit={handlePaymentSubmit}
        selectedProperty={selectedProperty}
      />
    </Layout>
  );
};

export default Accommodation;
