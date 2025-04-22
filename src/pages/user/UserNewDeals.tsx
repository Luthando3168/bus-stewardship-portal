
import React, { useState } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

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
        minInvestment: "R 5,000",
      },
      {
        id: "organic-farm-kzn",
        title: "Organic Expansion (KwaZulu-Natal)",
        region: "KwaZulu-Natal",
        description: "Expansion of existing organic farm focusing on vegetables and herbs for major grocery chains. Certified organic and regenerative methods.",
        minInvestment: "R 5,000",
      },
      {
        id: "mixed-crops-limpopo",
        title: "Mixed Crops Cultivation (Limpopo)",
        region: "Limpopo",
        description: "A project to cultivate and process diverse crops, supporting food security and market supply across the Limpopo region.",
        minInvestment: "R 5,000",
      },
      {
        id: "urban-poultry-gauteng",
        title: "Urban Poultry Expansion (Gauteng)",
        region: "Gauteng",
        description: "A commercial poultry operation in urban areas, specializing in ethical practices and supplying to shops and restaurants.",
        minInvestment: "R 5,000",
      },
      {
        id: "agri-processing-fs",
        title: "Agri Processing Plant (Free State)",
        region: "Free State",
        description: "A food processing facility focused on value-adding to raw agricultural products, creating shelf-stable food items.",
        minInvestment: "R 5,000",
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
        minInvestment: "R 10,000",
      },
      {
        id: "student-accommodation-pta",
        title: "Student Accommodation (Pretoria)",
        region: "Pretoria",
        description: "Purpose-built student accommodation near key tertiary institutions, with secure and modern facilities for young professionals.",
        minInvestment: "R 10,000",
      },
      {
        id: "traditional-housing-ec",
        title: "Traditional Housing (Eastern Cape)",
        region: "Eastern Cape",
        description: "Development of culturally appropriate housing solutions that blend traditional designs with modern amenities and efficiency.",
        minInvestment: "R 10,000",
      },
      {
        id: "backup-power-wc",
        title: "Back-up Power Solutions (Western Cape)",
        region: "Western Cape",
        description: "Installation of backup power systems for residential and commercial properties, focusing on reliable power during outages.",
        minInvestment: "R 10,000",
      },
      {
        id: "security-systems-national",
        title: "Security Systems (National)",
        region: "National",
        description: "Implementation of comprehensive security solutions for properties nationwide, including monitoring and response services.",
        minInvestment: "R 10,000",
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
        minInvestment: "R 5,000",
      },
      {
        id: "myfranchise",
        title: "MyFranchise (National)",
        region: "National",
        description: "Invest in selected franchises, add to your portfolio, and benefit from operational support and steady returns.",
        minInvestment: "R 5,000",
      },
      {
        id: "community-markets-gauteng",
        title: "Community Markets (Gauteng)",
        region: "Gauteng",
        description: "Pop-up and permanent market spaces offering local produce and goods directly to consumers in community settings.",
        minInvestment: "R 5,000",
      },
      {
        id: "healthy-fast-food-kzn",
        title: "Healthy Fast Food Outlet (KZN)",
        region: "KwaZulu-Natal",
        description: "Quick-service restaurant focusing on nutritious, locally-sourced food options with affordable pricing for health-conscious consumers.",
        minInvestment: "R 5,000",
      },
      {
        id: "food-delivery-urban",
        title: "Food Delivery Services (Urban Hubs)",
        region: "Urban Centers",
        description: "Specialized food delivery network focusing on fresh, local foods delivered quickly within urban areas.",
        minInvestment: "R 5,000",
      }
    ]
  },
  {
    id: "myenergy",
    name: "MyEnergy Impact Fund",
    businesses: [
      {
        id: "solar-installation-network",
        title: "Solar Installation Network (Cape Town)",
        region: "Cape Town",
        description: "Deploy commercial solar installations for businesses, including battery storage for energy consistency. Revenue from power purchase agreements.",
        minInvestment: "R 5,000",
      },
      {
        id: "wind-farm-project",
        title: "Wind Farm Project (Eastern Cape)",
        region: "Eastern Cape",
        description: "Invest in the construction of a wind farm project, generating renewable power for over 15,000 homes.",
        minInvestment: "R 5,000",
      },
      {
        id: "energy-storage-gauteng",
        title: "Energy Storage Solutions (Gauteng)",
        region: "Gauteng",
        description: "Development of battery and alternative storage technologies to improve energy reliability and efficiency for businesses.",
        minInvestment: "R 5,000",
      },
      {
        id: "hydro-power-kzn",
        title: "Small-scale Hydro Power (KwaZulu-Natal)",
        region: "KwaZulu-Natal",
        description: "Implementation of small-scale hydroelectric systems in suitable water-rich locations, providing local power generation.",
        minInvestment: "R 5,000",
      },
      {
        id: "solar-maintenance-national",
        title: "Solar Maintenance Services (National)",
        region: "National",
        description: "Providing maintenance, monitoring, and optimization services for existing solar installations across the country.",
        minInvestment: "R 5,000",
      }
    ]
  },
  {
    id: "myenterprise",
    name: "MyEnterprise Impact Fund",
    businesses: [
      {
        id: "tech-accelerator",
        title: "Tech Startup Accelerator (National)",
        region: "National",
        description: "Diversified portfolio of early-stage tech startups solving African challenges, offering investor exposure across sectors.",
        minInvestment: "R 5,000",
      },
      {
        id: "sme-advancement",
        title: "SME Advancement (Gauteng)",
        region: "Gauteng",
        description: "Support for small and medium enterprises with capital investment and business incubation for sustainable impact.",
        minInvestment: "R 5,000",
      },
      {
        id: "artisan-development",
        title: "Artisan Development (Western Cape)",
        region: "Western Cape",
        description: "Training and business support for skilled artisans, helping them establish sustainable businesses and create employment.",
        minInvestment: "R 5,000",
      },
      {
        id: "rural-entrepreneurship-ec",
        title: "Rural Entrepreneurship (Eastern Cape)",
        region: "Eastern Cape",
        description: "Focused support for rural entrepreneurs developing businesses that address local needs and create community wealth.",
        minInvestment: "R 5,000",
      },
      {
        id: "youth-business-kzn",
        title: "Youth Business Network (KZN)",
        region: "KwaZulu-Natal",
        description: "Mentoring and funding platform specifically for young entrepreneurs building innovative businesses with growth potential.",
        minInvestment: "R 5,000",
      }
    ]
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
        minInvestment: "R 5,000",
      },
      {
        id: "5g-urban-gauteng",
        title: "5G Urban Networks (Gauteng)",
        region: "Gauteng",
        description: "Development of high-speed 5G network infrastructure in urban centers, enabling advanced digital services and applications.",
        minInvestment: "R 5,000",
      },
      {
        id: "telco-equipment-wc",
        title: "Telecom Equipment Production (Western Cape)",
        region: "Western Cape",
        description: "Manufacturing and assembly of telecommunications equipment and components for domestic and export markets.",
        minInvestment: "R 5,000",
      },
      {
        id: "digital-inclusion-ec",
        title: "Digital Inclusion Initiative (Eastern Cape)",
        region: "Eastern Cape",
        description: "Comprehensive program combining hardware, connectivity, and digital skills training for underserved communities.",
        minInvestment: "R 5,000",
      },
      {
        id: "satellite-broadband-national",
        title: "Satellite Broadband Services (National)",
        region: "National",
        description: "Deployment of satellite-based internet services to reach remote locations where traditional infrastructure is impractical.",
        minInvestment: "R 5,000",
      }
    ]
  }
];

const UserNewDeals = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<any | null>(null);

  const handleInvestmentInterest = () => {
    toast.success("Your investment interest has been registered. An advisor will contact you shortly.");
    setSelectedBusiness(null);
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">New Investment Opportunities</h2>
        <p className="text-muted-foreground">
          Explore our latest investment opportunities under each Impact Fund. Select a business to view details and express your interest.
        </p>
        
        <Tabs defaultValue={impactFunds[0].id}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
            {impactFunds.map(fund => (
              <TabsTrigger key={fund.id} value={fund.id}>
                {fund.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {impactFunds.map(fund => (
            <TabsContent key={fund.id} value={fund.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fund.businesses.map(biz => (
                  <BusinessCard business={biz} fundName={fund.name} onClick={() => setSelectedBusiness({ ...biz, fund: fund.name })} key={biz.id}/>
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
                    <div className="p-4 bg-lightgray rounded-lg col-span-2">
                      <h5 className="text-sm text-muted-foreground">Minimum Investment</h5>
                      <p className="font-bold">{selectedBusiness.minInvestment}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <p className="text-sm text-muted-foreground">
                      Review all documents carefully before investing
                    </p>
                    <div className="space-x-3">
                      <Button variant="outline" onClick={() => setSelectedBusiness(null)}>
                        Close
                      </Button>
                      <Button className="bg-gold hover:bg-lightgold text-white" onClick={handleInvestmentInterest}>
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
        <Badge className="bg-blue-600">{fundName}</Badge>
      </div>
      <CardDescription>
        <span className="block">{business.region}</span>
        <span className="block line-clamp-2">{business.description}</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div>
        <p className="text-sm text-muted-foreground">Minimum Investment</p>
        <p className="font-medium">{business.minInvestment}</p>
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
