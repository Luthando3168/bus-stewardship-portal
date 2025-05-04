
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronLeft, 
  Star, 
  Calendar, 
  Clock, 
  Award, 
  BookOpen,
  Briefcase,
  MapPin,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import BookingForm from "@/components/concierge/business/BookingForm";
import { getProfessionalById } from "@/data/concierge/business/professionals";

const ProfessionalDetails = () => {
  const { professionalId } = useParams<{ professionalId: string }>();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const professional = getProfessionalById(professionalId || "");
  
  if (!professional) {
    return (
      <ServicePageTemplate
        title="Business Services"
        description="Accounting, legal and consulting services for your business needs"
        icon={Briefcase}
        color="text-navyblue"
      >
        <div className="text-center py-12">
          <h2 className="text-xl font-bold text-gray-700 mb-2">Professional Not Found</h2>
          <p className="text-gray-500 mb-6">The professional you're looking for doesn't exist or has been removed.</p>
          <Link to="/concierge/business">
            <Button className="bg-navyblue hover:bg-blue-900">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Business Services
            </Button>
          </Link>
        </div>
      </ServicePageTemplate>
    );
  }

  // Mock availability data
  const availabilityDates = [
    { date: "Monday, May 6", slots: ["9:00 AM", "1:00 PM", "3:30 PM"] },
    { date: "Tuesday, May 7", slots: ["9:00 AM", "10:30 AM"] },
    { date: "Thursday, May 9", slots: ["1:00 PM", "3:30 PM"] },
    { date: "Friday, May 10", slots: ["9:00 AM", "10:30 AM", "1:00 PM"] }
  ];

  return (
    <ServicePageTemplate
      title="Business Services"
      description="Accounting, legal and consulting services for your business needs"
      icon={Briefcase}
      color="text-navyblue"
    >
      {/* Breadcrumb navigation */}
      <div className="mb-6">
        <Link to="/concierge/business" className="text-sm text-navyblue hover:underline inline-flex items-center">
          <ChevronLeft className="h-3 w-3 mr-1" /> Back to Business Services
        </Link>
      </div>
      
      {/* Professional profile header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <Avatar className="h-28 w-28 border-2 border-gray-200">
          <AvatarImage src={professional.image} alt={professional.name} />
          <AvatarFallback className="text-2xl bg-navyblue text-white">
            {professional.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="space-y-3 flex-1">
          <div>
            <h1 className="text-2xl font-bold">{professional.name}</h1>
            <p className="text-gray-600">{professional.title}</p>
          </div>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
              <span className="ml-1 font-medium">{professional.rating}</span>
            </div>
            <span className="text-gray-500">({professional.reviewCount} reviews)</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {professional.specialties.map((specialty, index) => (
              <Badge key={index} variant="outline" className="bg-blue-50 text-navyblue border-blue-200">
                {specialty}
              </Badge>
            ))}
          </div>
          
          <div className="pt-2">
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-navyblue hover:bg-blue-900"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Professional profile content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Professional Background</h3>
                <p className="text-gray-600">
                  With over {professional.experience.split('+')[0]} years of experience in the field, 
                  {professional.name} has established a strong reputation for delivering exceptional
                  results for clients across various industries. Specializing in {professional.specialties.join(', ')},
                  they provide comprehensive solutions tailored to each client's unique needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center">
                      <Award className="h-5 w-5 mr-2 text-navyblue" /> Qualifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        <span>Master's Degree in Business Administration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        <span>Certified Business Consultant (CBC)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        <span>Project Management Professional (PMP)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-navyblue" /> Industry Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        <span>Financial Services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        <span>Technology & Software</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        <span>Retail & E-Commerce</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Strategic Business Planning</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Comprehensive business strategy development focusing on growth, market positioning,
                      and competitive advantage. Includes market analysis, goal setting, and implementation roadmaps.
                    </p>
                    <div className="flex items-baseline justify-between">
                      <Badge className="bg-navyblue">Most Popular</Badge>
                      <span className="font-semibold text-navyblue">From R5,000</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Market Research & Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      In-depth market research and competitor analysis to identify opportunities, trends,
                      and actionable insights for business growth and product development.
                    </p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-gray-500">Includes detailed reports</span>
                      <span className="font-semibold text-navyblue">From R3,500</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Process Optimization</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Streamline your business processes for maximum efficiency and productivity.
                      Identify bottlenecks, implement improvements, and establish monitoring systems.
                    </p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-gray-500">Customized to your business</span>
                      <span className="font-semibold text-navyblue">From R4,000</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <Card key={review}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-gray-200">
                              {["JD", "RM", "SK"][review - 1]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">
                              {["John Doe", "Rebecca Moloi", "Sarah Kekana"][review - 1]}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {["2 weeks ago", "1 month ago", "3 months ago"][review - 1]}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < (5 - review * 0.5) ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">
                        {[
                          "Exceptional service! The strategic planning session transformed our business approach completely. Highly recommend their expertise.",
                          "Very thorough market analysis with actionable insights. Would have appreciated more industry-specific recommendations.",
                          "Professional, knowledgeable, and efficient. The process optimization work delivered significant time and cost savings for our company."
                        ][review - 1]}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-green-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Available for bookings</span>
                </div>
                
                <div className="space-y-3">
                  {availabilityDates.map((day, idx) => (
                    <div key={idx} className="border rounded-md p-3">
                      <p className="font-medium text-sm mb-2">{day.date}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.slots.map((slot, slotIdx) => (
                          <Badge key={slotIdx} variant="outline" className="bg-green-50 border-green-200 text-green-700">
                            {slot}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => setIsBookingOpen(true)} 
                  className="w-full bg-navyblue hover:bg-blue-900 mt-2"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-navyblue mt-0.5" />
                <span>Sandton, Johannesburg</span>
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-4 w-4 mr-2 text-navyblue mt-0.5" />
                <Button variant="link" className="p-0 h-auto text-navyblue">
                  Send a message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Booking dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <BookingForm 
            professionalName={professional.name}
            serviceCategory={professional.serviceCategory}
            onClose={() => setIsBookingOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </ServicePageTemplate>
  );
};

export default ProfessionalDetails;
