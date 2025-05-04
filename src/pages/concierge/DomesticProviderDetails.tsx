
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { User } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { ServiceRequest } from "@/data/concierge/domestic/serviceRequests";
import { serviceProviders } from "@/data/concierge/domestic/serviceProviders";
import { serviceRequests } from "@/data/concierge/domestic/serviceRequests";
import ProviderProfileCard from "@/components/concierge/domestic/ProviderProfileCard";
import ReviewsList from "@/components/concierge/domestic/ReviewsList";
import BookingForm from "@/components/concierge/domestic/BookingForm";
import ContactSidebar from "@/components/concierge/domestic/ContactSidebar";

const DomesticProviderDetails = () => {
  const { serviceType, providerId } = useParams<{ serviceType: string; providerId: string }>();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [reviews, setReviews] = useState<{ rating: number; comment: string; date: string; isProvider: boolean }[]>([]);
  const [activeTab, setActiveTab] = useState("profile");

  const form = useForm({
    defaultValues: {
      description: "",
      serviceDate: "",
      duration: "4",
      startTime: "09:00",
      bookingType: "full-day",
      selectedItems: []
    }
  });

  // Find the provider and their reviews
  useEffect(() => {
    if (!providerId) return;
    
    const foundProvider = serviceProviders.find(p => p.id === providerId);
    if (foundProvider) {
      setProvider(foundProvider);
    }
    
    // Get all reviews for this provider
    const providerReviews = serviceRequests
      .filter(req => req.providerId === providerId && req.providerRating)
      .map(req => ({
        rating: req.providerRating!.rating,
        comment: req.providerRating!.comment,
        date: req.providerRating!.date,
        isProvider: false
      }));
      
    const clientReviews = serviceRequests
      .filter(req => req.providerId === providerId && req.userRating)
      .map(req => ({
        rating: req.userRating!.rating,
        comment: req.userRating!.comment,
        date: req.userRating!.date,
        isProvider: true
      }));
    
    setReviews([...providerReviews, ...clientReviews].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ));
  }, [providerId]);

  const onSubmit = (data: any) => {
    if (!providerId || !serviceType || !provider) return;
    
    // Create a new service request
    const today = new Date().toISOString().split('T')[0];
    const totalAmount = parseInt(provider.hourlyRate.replace(/\D/g, '')) * parseInt(data.duration);
    
    const newRequest: ServiceRequest = {
      id: uuidv4(),
      userId: "user1", // In a real app, this would be the logged-in user's ID
      providerId: providerId,
      service: serviceType,
      description: data.description,
      requestDate: today,
      serviceDate: data.serviceDate,
      duration: parseInt(data.duration),
      status: "pending",
      payment: {
        amount: totalAmount,
        status: "awaiting_payment"
      }
    };
    
    // In a real app, this would be saved to a database
    // For demo, we'll just show a success notification
    toast.success("Request submitted", {
      description: "Your service request has been sent to the provider."
    });
    
    // Navigate to booking confirmation or service requests page
    navigate("/concierge/domestic/requests");
  };

  const handleBackClick = () => {
    navigate(`/concierge/domestic/${serviceType}`);
  };
  
  if (!provider) {
    return <div>Loading...</div>;
  }
  
  return (
    <ServicePageTemplate
      title={provider.name}
      description={provider.role}
      icon={User}
      color="text-lime-600"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
              <TabsTrigger value="book">Book Service</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <ProviderProfileCard 
                provider={provider} 
                onBookClick={() => setActiveTab("book")} 
              />
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Client & Provider Reviews</h3>
              </div>
              
              <ReviewsList reviews={reviews} />
            </TabsContent>
            
            <TabsContent value="book">
              <BookingForm
                form={form}
                provider={provider}
                serviceType={serviceType!} 
                providerId={providerId!}
                onSubmit={onSubmit}
                onBack={() => setActiveTab("profile")}
              />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-1">
          <ContactSidebar provider={provider} onBackClick={handleBackClick} />
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default DomesticProviderDetails;
