
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { User, Star, Clock, Award, Calendar, DollarSign, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { serviceProviders } from "@/data/concierge/domestic/serviceProviders";
import { serviceRequests, ServiceRequest } from "@/data/concierge/domestic/serviceRequests";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import ProviderAvailabilityTable from "@/components/concierge/domestic/ProviderAvailabilityTable";
import ServiceItemsSelector from "@/components/concierge/domestic/ServiceItemsSelector";

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

  const onSubmit = (data) => {
    // Create a new service request
    const today = new Date().toISOString().split('T')[0];
    const totalAmount = parseInt(provider.hourlyRate.replace(/\D/g, '')) * parseInt(data.duration);
    
    const newRequest: ServiceRequest = {
      id: uuidv4(),
      userId: "user1", // In a real app, this would be the logged-in user's ID
      providerId: providerId!,
      service: serviceType!,
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
            
            <TabsContent value="profile" className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="h-32 w-32 border-2 border-gray-200">
                  <AvatarImage src={provider.image} alt={provider.name} />
                  <AvatarFallback className="text-3xl bg-lime-600 text-white">
                    {provider.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-semibold">{provider.name}</h3>
                    <p className="text-gray-600">{provider.role}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-navyblue" />
                      <span>{provider.experience} years experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span>{provider.rating} rating ({provider.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span>Available: {provider.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-lime-700" />
                      <span>{provider.hourlyRate}/hour</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">{provider.bio}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {provider.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="bg-gray-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Service Details</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-1">Completed Jobs</h4>
                    <p className="text-lg font-medium">{provider.completedJobs || 0}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-1">Response Rate</h4>
                    <p className="text-lg font-medium">{provider.responseRate || 0}%</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-1">Service Area</h4>
                    <p>Greater Johannesburg Area</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-1">Languages</h4>
                    <p>English, Zulu, Xhosa</p>
                  </div>
                </CardContent>
              </Card>
                           
              <div className="flex justify-end">
                <Button 
                  onClick={() => setActiveTab("book")}
                  className="bg-lime-600 hover:bg-lime-700 text-white"
                >
                  Book This Provider
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Client & Provider Reviews</h3>
              </div>
              
              {reviews.length === 0 ? (
                <p className="text-center py-6 text-gray-500">No reviews yet.</p>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">
                              {review.date}
                            </span>
                          </div>
                          <Badge variant="outline" className={review.isProvider ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}>
                            {review.isProvider ? "Provider's feedback" : "Client's feedback"}
                          </Badge>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="book">
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
                      <ProviderAvailabilityTable providerId={providerId!} />
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
                      <ServiceItemsSelector serviceType={serviceType!} form={form} />
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
                    onClick={() => setActiveTab("profile")}
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
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="bg-lime-50">
              <CardTitle className="text-lg">Contact {provider.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder={`Ask ${provider.name.split(' ')[0]} a question...`}
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <Button className="w-full flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-2">Quick Questions</h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="h-3 w-3 mr-2" />
                    Are you available next Monday?
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="h-3 w-3 mr-2" />
                    What supplies do you bring?
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="h-3 w-3 mr-2" />
                    Do you have any references?
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => navigate(`/concierge/domestic/${serviceType}`)}
            >
              Back to Provider List
            </Button>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default DomesticProviderDetails;
