
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { ShieldCheck, Heart, Star, Building, CheckCircle, ArrowRight, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Hospital Network Data
const hospitals = [
  {
    id: 1,
    name: "MCA Royal Hospital",
    location: "Sandton, Johannesburg",
    specialties: ["Cardiac Care", "Oncology", "Orthopedics", "Neurology"],
    bedCount: 450,
    shareholderDiscount: "15%",
    image: "/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png"
  },
  {
    id: 2,
    name: "Horizon Medical Center",
    location: "Cape Town",
    specialties: ["General Surgery", "Pediatrics", "Women's Health", "ICU"],
    bedCount: 320,
    shareholderDiscount: "12%",
    image: "/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png"
  },
  {
    id: 3,
    name: "MCA Premier Hospital",
    location: "Durban",
    specialties: ["Trauma Care", "Cardiology", "Gastroenterology", "Sports Medicine"],
    bedCount: 280,
    shareholderDiscount: "15%",
    image: "/lovable-uploads/697f3367-6bf9-47c7-8610-d21869a0d029.png"
  },
  {
    id: 4,
    name: "Unity Healthcare Facility",
    location: "Pretoria",
    specialties: ["Maternity", "Pediatrics", "Geriatrics", "Ophthalmology"],
    bedCount: 210,
    shareholderDiscount: "10%",
    image: "/lovable-uploads/c1492a4e-ca1c-4b86-866c-2945f7178765.png"
  }
];

// Plan Options
const planOptions = [
  {
    id: "essential",
    name: "Essential Plan",
    price: "R1,850 per month",
    benefits: [
      "Access to basic healthcare services",
      "Emergency medical care",
      "Limited specialist consultations",
      "Basic dental and optical cover",
      "Annual health check-up"
    ],
    shareholderBonus: "5% annual dividend on your investment"
  },
  {
    id: "comprehensive",
    name: "Comprehensive Plan",
    price: "R3,250 per month",
    benefits: [
      "Full hospital cover at MCA Network Hospitals",
      "Unlimited GP consultations",
      "Extended specialist cover",
      "Full dental and optical benefits",
      "International travel medical coverage",
      "Chronic medication coverage",
      "Maternity benefits"
    ],
    shareholderBonus: "8% annual dividend on your investment"
  },
  {
    id: "executive",
    name: "Executive Health Plan",
    price: "R5,950 per month",
    benefits: [
      "Private ward accommodation",
      "Premium hospital coverage worldwide",
      "Unlimited specialists and GP visits",
      "Comprehensive screening and preventive care",
      "Executive health assessment annually",
      "Emergency medical evacuation (local and international)",
      "Advanced dental and optical coverage",
      "Mental health support",
      "Full chronic and acute medication coverage"
    ],
    shareholderBonus: "12% annual dividend on your investment"
  }
];

const MedicalAidService = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    toast.success(`${planId.charAt(0).toUpperCase() + planId.slice(1)} plan selected`, {
      description: "You can now proceed with your application."
    });
  };

  const handleApply = () => {
    if (!selectedPlan) {
      toast.error("Please select a plan first");
      return;
    }

    toast.success("Application submitted successfully", {
      description: "Our healthcare team will contact you within 24 hours."
    });
  };

  return (
    <ServicePageTemplate
      title="MCA Health Shield"
      description="Premium medical aid with exclusive benefits and profit sharing for MCA members"
      icon={ShieldCheck}
      color="text-red-500"
      ownershipNote="Shareholder in 4 MCA Network Hospitals"
    >
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="overview">
            <Heart className="h-4 w-4 mr-1" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="plans">
            <Star className="h-4 w-4 mr-1" />
            Plan Options
          </TabsTrigger>
          <TabsTrigger value="hospitals">
            <Building className="h-4 w-4 mr-1" />
            Hospital Network
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="space-y-6">
            {/* Hero Banner */}
            <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-r from-red-700 to-red-900">
              <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                <h1 className="text-3xl font-bold mb-2">MCA Health Shield</h1>
                <p className="text-lg mb-4 max-w-md">Premium healthcare with shareholder benefits for MCA members.</p>
                <Button 
                  onClick={() => setActiveTab("plans")} 
                  className="bg-white hover:bg-gray-100 text-red-800 py-2 px-6 w-fit"
                >
                  View Plan Options <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Key Benefits */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Benefits of MCA Health Shield</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Profit Sharing</h3>
                    <p className="text-gray-600 text-sm">Earn annual dividends from your investment in our hospital network.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Premium Healthcare</h3>
                    <p className="text-gray-600 text-sm">Access to world-class medical facilities and specialists.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Shareholder Discounts</h3>
                    <p className="text-gray-600 text-sm">Enjoy exclusive discounts on medical services as an MCA member.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Comprehensive Coverage</h3>
                    <p className="text-gray-600 text-sm">From basic healthcare to specialized treatments, we've got you covered.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Digital Healthcare</h3>
                    <p className="text-gray-600 text-sm">Access telemedicine consultations and digital health records.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Wellness Programs</h3>
                    <p className="text-gray-600 text-sm">Preventive care and wellness initiatives to keep you healthy.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* About MCA Health Shield */}
            <div>
              <h2 className="text-xl font-semibold mb-4">About MCA Health Shield</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  MCA Health Shield is a premium medical aid offering exclusive to MCA Direct clients. Unlike traditional medical aids, 
                  our model combines excellent healthcare coverage with investment benefits, allowing members to share in the profits 
                  of our growing hospital network.
                </p>
                <p>
                  With four state-of-the-art hospitals across South Africa and plans to expand, MCA Health Shield provides both 
                  premium healthcare services and financial returns. Members benefit from shareholder discounts on medical services and 
                  annual dividends based on the performance of the hospital network.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="plans">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Choose Your Medical Aid Plan</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {planOptions.map((plan) => (
                <Card 
                  key={plan.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${selectedPlan === plan.id ? 'ring-2 ring-red-500' : ''}`}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{plan.name}</h3>
                    <div className="text-xl font-bold text-red-600 mb-4">{plan.price}</div>
                    
                    <div className="space-y-2 mb-4">
                      {plan.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <Coins className="h-4 w-4 text-gold mr-2" />
                        <span className="text-sm font-medium">{plan.shareholderBonus}</span>
                      </div>
                    </div>
                    
                    {selectedPlan === plan.id && (
                      <div className="mt-4 flex justify-end">
                        <Badge className="bg-red-500 text-white">
                          <CheckCircle className="h-3 w-3 mr-1" /> Selected
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                onClick={handleApply}
                disabled={!selectedPlan}
                className="bg-red-500 hover:bg-red-600 py-6 px-8 text-lg"
              >
                Apply for MCA Health Shield
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="hospitals">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">MCA Hospital Network</h2>
            <p className="mb-6">
              As an MCA Health Shield member, you have access to our exclusive network of premium hospitals across South Africa. 
              These state-of-the-art medical facilities offer comprehensive care and advanced medical treatments.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              {hospitals.map((hospital) => (
                <Card key={hospital.id} className="overflow-hidden">
                  <div className="h-48 bg-gray-100">
                    <img 
                      src={hospital.image} 
                      alt={hospital.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-1">{hospital.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{hospital.location}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Specialties</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {hospital.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-red-50 text-red-500">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Capacity</h4>
                        <p className="mt-1">{hospital.bedCount} beds</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded flex items-center">
                      <Coins className="h-5 w-5 text-gold mr-2" />
                      <span className="font-medium">
                        {hospital.shareholderDiscount} shareholder discount on all services
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="font-semibold mb-3">Expansion Plans</h3>
              <p>
                The MCA Hospital Network is continuously growing. We have plans to open three additional hospitals 
                in Bloemfontein, East London, and Nelspruit over the next five years. MCA Health Shield members 
                will have priority access to these new facilities and investment opportunities.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </ServicePageTemplate>
  );
};

export default MedicalAidService;
