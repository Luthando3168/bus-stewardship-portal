
import React, { useState, useEffect } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";

// Investment opportunities data organized by impact funds as per the form
const impactFunds = [
  {
    id: "myfarm",
    name: "MyFarm Impact Fund",
    businesses: [
      {
        id: "urban-farming-ct",
        title: "Urban Farming - AgroUrban Oasis (Cape Town)",
        region: "Cape Town",
        description: "Invest in a sustainable hydroponic farm producing fresh produce for local supermarkets, restaurants, and communities. Focus on water-efficient and high-yield methods.",
        minInvestment: 5000,
      },
      {
        id: "organic-farm-kzn",
        title: "Organic Expansion (KwaZulu-Natal)",
        region: "KwaZulu-Natal",
        description: "Expansion of existing organic farm focusing on vegetables and herbs for major grocery chains. Certified organic and regenerative methods.",
        minInvestment: 5000,
      },
      {
        id: "mixed-crops-limpopo",
        title: "Mixed Crops Cultivation (Limpopo)",
        region: "Limpopo",
        description: "A project to cultivate and process diverse crops, supporting food security and market supply across the Limpopo region.",
        minInvestment: 5000,
      },
      {
        id: "urban-poultry-gauteng",
        title: "Urban Poultry Expansion (Gauteng)",
        region: "Gauteng",
        description: "A commercial poultry operation in urban areas, specializing in ethical practices and supplying to shops and restaurants.",
        minInvestment: 5000,
      },
      {
        id: "agri-processing-fs",
        title: "Agri Processing Plant (Free State)",
        region: "Free State",
        description: "A food processing facility focused on value-adding to raw agricultural products, creating shelf-stable food items.",
        minInvestment: 5000,
      }
    ],
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    businesses: [
      {
        id: "affordable-housing-jhb",
        title: "Affordable Housing - eKasi Mixed Use (Johannesburg)",
        region: "Johannesburg",
        description: "Modern residential and commercial development in township areas providing affordable apartments and retail opportunities.",
        minInvestment: 10000,
      },
      {
        id: "student-accommodation-pta",
        title: "Student Accommodation (Pretoria)",
        region: "Pretoria",
        description: "Purpose-built student accommodation near key tertiary institutions, with secure and modern facilities for young professionals.",
        minInvestment: 10000,
      },
      {
        id: "traditional-housing-ec",
        title: "Traditional Housing (Eastern Cape)",
        region: "Eastern Cape",
        description: "Development of culturally appropriate housing solutions that blend traditional designs with modern amenities and efficiency.",
        minInvestment: 10000,
      },
      {
        id: "backup-power-wc",
        title: "Back-up Power Solutions (Western Cape)",
        region: "Western Cape",
        description: "Installation of backup power systems for residential and commercial properties, focusing on reliable power during outages.",
        minInvestment: 10000,
      },
      {
        id: "security-systems-national",
        title: "Security Systems (National)",
        region: "National",
        description: "Implementation of comprehensive security solutions for properties nationwide, including monitoring and response services.",
        minInvestment: 10000,
      }
    ],
  },
  {
    id: "myfoodretail",
    name: "MyFoodRetail Impact Fund",
    businesses: [
      {
        id: "lifestyle-mini-complex",
        title: "Lifestyle Mini Complex (Western Cape)",
        region: "Western Cape",
        description: "A hub offering groceries (Food Corner), meat products (Meat Co), and fresh produce (Fruits & Veg) sourced from MyFarm, targeting diverse communities.",
        minInvestment: 5000,
      },
      {
        id: "myfranchise",
        title: "MyFranchise (National)",
        region: "National",
        description: "Invest in selected franchises, add to your portfolio, and benefit from operational support and steady returns.",
        minInvestment: 5000,
      },
      {
        id: "community-markets-gauteng",
        title: "Community Markets (Gauteng)",
        region: "Gauteng",
        description: "Pop-up and permanent market spaces offering local produce and goods directly to consumers in community settings.",
        minInvestment: 5000,
      },
      {
        id: "healthy-fast-food-kzn",
        title: "Healthy Fast Food Outlet (KZN)",
        region: "KwaZulu-Natal",
        description: "Quick-service restaurant focusing on nutritious, locally-sourced food options with affordable pricing for health-conscious consumers.",
        minInvestment: 5000,
      },
      {
        id: "food-delivery-urban",
        title: "Food Delivery Services (Urban Hubs)",
        region: "Urban Centers",
        description: "Specialized food delivery network focusing on fresh, local foods delivered quickly within urban areas.",
        minInvestment: 5000,
      }
    ]
  },
  {
    id: "myfranchise",
    name: "MyFranchise Impact Fund",
    businesses: [
      {
        id: "food-franchises-national",
        title: "Food Franchises (National)",
        region: "National",
        description: "Investment opportunities in established food franchise brands across South Africa.",
        minInvestment: 5000,
      },
      {
        id: "retail-franchises-urban",
        title: "Retail Franchises (Urban Centers)",
        region: "Urban Centers",
        description: "Opportunities to invest in retail franchise operations in key urban locations.",
        minInvestment: 5000,
      },
      {
        id: "service-franchises-national",
        title: "Service Franchises (National)",
        region: "National",
        description: "Investment in service-based franchise businesses with proven operational models.",
        minInvestment: 5000,
      }
    ],
  },
  {
    id: "myfuel",
    name: "MyFuel Impact Fund",
    businesses: [
      {
        id: "fuel-station-network",
        title: "Fuel Station Network (National)",
        region: "National",
        description: "Investment in strategically located fuel stations across South Africa.",
        minInvestment: 10000,
      },
      {
        id: "alternative-fuel-distribution",
        title: "Alternative Fuel Distribution (Urban Centers)",
        region: "Urban Centers",
        description: "Distribution networks for alternative and environmentally friendly fuel options.",
        minInvestment: 10000,
      },
      {
        id: "convenience-store-integration",
        title: "Convenience Store Integration (National)",
        region: "National",
        description: "Development of modern convenience stores integrated with fuel stations.",
        minInvestment: 10000,
      }
    ],
  },
  {
    id: "myschool",
    name: "MySchool Impact Fund",
    businesses: [
      {
        id: "pre-primary-schools",
        title: "Pre-primary Schools (Urban Areas)",
        region: "Urban Areas",
        description: "Development of quality pre-primary educational facilities in urban communities.",
        minInvestment: 5000,
      },
      {
        id: "primary-school-facilities",
        title: "Primary School Facilities (National)",
        region: "National",
        description: "Investment in primary school infrastructure and educational resources.",
        minInvestment: 5000,
      },
      {
        id: "educational-technology",
        title: "Educational Technology (National)",
        region: "National",
        description: "Implementation of educational technology solutions in schools across South Africa.",
        minInvestment: 5000,
      }
    ],
  },
  {
    id: "myhealth",
    name: "MyHealth Impact Fund",
    businesses: [
      {
        id: "community-clinics",
        title: "Community Clinics (Underserved Areas)",
        region: "Underserved Areas",
        description: "Establishment of accessible healthcare facilities in underserved communities.",
        minInvestment: 5000,
      },
      {
        id: "specialized-medical-services",
        title: "Specialized Medical Services (Urban Centers)",
        region: "Urban Centers",
        description: "Investment in specialized medical service providers in urban locations.",
        minInvestment: 5000,
      },
      {
        id: "mobile-health-solutions",
        title: "Mobile Health Solutions (National)",
        region: "National",
        description: "Development of mobile healthcare services reaching remote areas.",
        minInvestment: 5000,
      }
    ],
  },
  {
    id: "myeducation",
    name: "MyEducation Impact Fund",
    businesses: [
      {
        id: "skills-development-centers",
        title: "Skills Development Centers (National)",
        region: "National",
        description: "Establishment of centers focusing on practical skills training and development.",
        minInvestment: 5000,
      },
      {
        id: "educational-publishing",
        title: "Educational Publishing (National)",
        region: "National",
        description: "Production and distribution of educational materials across South Africa.",
        minInvestment: 5000,
      },
      {
        id: "online-learning-platforms",
        title: "Online Learning Platforms (National)",
        region: "National",
        description: "Development of accessible online learning resources and platforms.",
        minInvestment: 5000,
      }
    ],
  },
  {
    id: "mytelco",
    name: "MyTelco Impact Fund",
    businesses: [
      {
        id: "rural-connectivity",
        title: "Rural Connectivity Project (National)",
        region: "National",
        description: "Expanding internet and telecommunications access to underserved rural areas through innovative and cost-effective technologies.",
        minInvestment: 5000,
      },
      {
        id: "5g-urban-gauteng",
        title: "5G Urban Networks (Gauteng)",
        region: "Gauteng",
        description: "Development of high-speed 5G network infrastructure in urban centers, enabling advanced digital services and applications.",
        minInvestment: 5000,
      },
      {
        id: "telco-equipment-wc",
        title: "Telecom Equipment Production (Western Cape)",
        region: "Western Cape",
        description: "Manufacturing and assembly of telecommunications equipment and components for domestic and export markets.",
        minInvestment: 5000,
      },
      {
        id: "digital-inclusion-ec",
        title: "Digital Inclusion Initiative (Eastern Cape)",
        region: "Eastern Cape",
        description: "Comprehensive program combining hardware, connectivity, and digital skills training for underserved communities.",
        minInvestment: 5000,
      },
      {
        id: "satellite-broadband-national",
        title: "Satellite Broadband Services (National)",
        region: "National",
        description: "Deployment of satellite-based internet services to reach remote locations where traditional infrastructure is impractical.",
        minInvestment: 5000,
      }
    ]
  }
];

const UserNewDeals = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fundFromUrl = searchParams.get('fund');
  
  const [selectedBusiness, setSelectedBusiness] = useState<any | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number | ''>('');
  const [walletBalance, setWalletBalance] = useState(245000); // Mock wallet balance
  const [activeTab, setActiveTab] = useState(fundFromUrl || impactFunds[0].id);

  useEffect(() => {
    if (fundFromUrl) {
      // Find the fund that matches the URL parameter
      const matchingFund = impactFunds.find(
        fund => fund.id === fundFromUrl || fund.name.toLowerCase().includes(fundFromUrl)
      );
      
      if (matchingFund) {
        setActiveTab(matchingFund.id);
      }
    }
  }, [fundFromUrl]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleInvestmentInterest = () => {
    if (!investmentAmount) {
      toast.error("Please enter an investment amount");
      return;
    }

    if (Number(investmentAmount) < (selectedBusiness?.minInvestment || 0)) {
      toast.error(`Minimum investment amount is R${selectedBusiness?.minInvestment.toLocaleString()}`);
      return;
    }

    if (Number(investmentAmount) > walletBalance) {
      toast.error("Insufficient funds in your wallet. Please add funds before investing.");
      return;
    }

    toast.success("Your investment interest has been registered. An advisor will contact you shortly.");
    setSelectedBusiness(null);
    setInvestmentAmount('');
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">Investment Opportunities</h2>
        <p className="text-muted-foreground">
          Explore our diverse range of investment opportunities across various Impact Funds. 
          Select the fund category below to view available businesses for investment.
        </p>
        
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-10 overflow-x-auto">
            {impactFunds.map(fund => (
              <TabsTrigger key={fund.id} value={fund.id}>
                {fund.name.replace(" Impact Fund", "")}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {impactFunds.map(fund => (
            <TabsContent key={fund.id} value={fund.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fund.businesses.map(biz => (
                  <BusinessCard 
                    business={biz} 
                    fundName={fund.name} 
                    onClick={() => setSelectedBusiness({ ...biz, fund: fund.name })} 
                    key={biz.id}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Business Details Dialog */}
        <Dialog open={!!selectedBusiness} onOpenChange={(open) => !open && setSelectedBusiness(null)}>
          <DialogContent className="max-w-2xl">
            {selectedBusiness && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedBusiness.title}</DialogTitle>
                  <DialogDescription>
                    {selectedBusiness.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Fund</h5>
                      <p className="font-bold">{selectedBusiness.fund}</p>
                    </div>
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Region</h5>
                      <p className="font-bold">{selectedBusiness.region}</p>
                    </div>
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Minimum Investment</h5>
                      <p className="font-bold">R {selectedBusiness.minInvestment.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Your Wallet Balance</h5>
                      <p className="font-bold">R {walletBalance.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="investment-amount">Investment Amount (R)</Label>
                    <Input 
                      id="investment-amount" 
                      type="number" 
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder={`Minimum R ${selectedBusiness.minInvestment.toLocaleString()}`}
                      min={selectedBusiness.minInvestment}
                      className="w-full"
                    />
                    {Number(investmentAmount) < selectedBusiness.minInvestment && investmentAmount !== '' && (
                      <p className="text-sm text-red-500">
                        Minimum investment is R {selectedBusiness.minInvestment.toLocaleString()}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center border-t pt-4">
                    <p className="text-sm text-muted-foreground">
                      Review all information carefully before investing
                    </p>
                    <div className="space-x-3">
                      <Button variant="outline" onClick={() => setSelectedBusiness(null)}>
                        Close
                      </Button>
                      <Button 
                        className="bg-gold hover:bg-lightgold text-white" 
                        onClick={handleInvestmentInterest}
                        disabled={!investmentAmount || Number(investmentAmount) < selectedBusiness.minInvestment || Number(investmentAmount) > walletBalance}
                      >
                        Express Interest
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </UserLayout>
  );
};

interface BusinessCardProps {
  business: any;
  fundName: string;
  onClick: () => void;
}

const BusinessCard = ({ business, fundName, onClick }: BusinessCardProps) => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="text-lg">{business.title}</CardTitle>
        <Badge className="bg-blue-600">{fundName.replace(" Impact Fund", "")}</Badge>
      </div>
      <CardDescription>
        <span className="block">{business.region}</span>
        <span className="block line-clamp-2">{business.description}</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div>
        <p className="text-sm text-muted-foreground">Minimum Investment</p>
        <p className="font-medium text-lg">R {business.minInvestment.toLocaleString()}</p>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-navyblue hover:bg-deepblue" onClick={onClick}>
        View Details
      </Button>
    </CardFooter>
  </Card>
);

export default UserNewDeals;
