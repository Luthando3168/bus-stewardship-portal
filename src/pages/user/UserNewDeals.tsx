import React, { useState } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

const UserNewDeals = () => {
  const [selectedDealId, setSelectedDealId] = useState<string | null>(null);
  
  const funds = [
    { id: "agri", name: "Agri Impact Fund", color: "bg-green-600" },
    { id: "property", name: "Property Impact Fund", color: "bg-blue-600" },
    { id: "energy", name: "Energy Impact Fund", color: "bg-amber-600" },
    { id: "enterprise", name: "Enterprise Impact Fund", color: "bg-purple-600" }
  ];
  
  const deals = [
    {
      id: "deal1",
      title: "Organic Farm Expansion",
      fund: "Agri Impact Fund",
      fundId: "agri",
      minInvestment: "R 5,000",
      targetReturn: "8.5%",
      term: "5 years",
      closingDate: "May 30, 2025",
      status: "Open",
      description: "Expansion of an existing organic farm in KwaZulu-Natal, focusing on vegetables and herbs for local markets.",
      highlights: [
        "Established operation with 3 years of profitable history",
        "Expanding from 10 to 25 hectares of cultivated land",
        "Supply contracts with major grocery chains",
        "Certified organic practices and regenerative farming methods"
      ],
      riskLevel: "Moderate"
    },
    {
      id: "deal2",
      title: "Mixed-Use Development",
      fund: "Property Impact Fund",
      fundId: "property",
      minInvestment: "R 5,000",
      targetReturn: "11.2%",
      term: "7 years",
      closingDate: "June 15, 2025",
      status: "Open",
      description: "Urban renewal project in Johannesburg CBD, converting an old warehouse into affordable apartments with ground-floor retail spaces.",
      highlights: [
        "Prime location with excellent transport links",
        "40 residential units and 8 retail spaces",
        "Energy-efficient design and solar power integration",
        "Community engagement plan for local employment"
      ],
      riskLevel: "Moderate-High"
    },
    {
      id: "deal3",
      title: "Solar Installation Network",
      fund: "Energy Impact Fund",
      fundId: "energy",
      minInvestment: "R 5,000",
      targetReturn: "12.8%",
      term: "6 years",
      closingDate: "May 15, 2025",
      status: "Open",
      description: "Deployment of solar installations across multiple commercial properties in Cape Town and surrounding areas.",
      highlights: [
        "Portfolio of 15 pre-secured commercial sites",
        "Power purchase agreements already negotiated",
        "Experienced installation and maintenance team",
        "Battery storage component for consistent energy supply"
      ],
      riskLevel: "Moderate"
    },
    {
      id: "deal4",
      title: "Tech Startup Accelerator",
      fund: "Enterprise Impact Fund",
      fundId: "enterprise",
      minInvestment: "R 5,000",
      targetReturn: "15.5%",
      term: "5 years",
      closingDate: "July 1, 2025",
      status: "Open",
      description: "Investment in a portfolio of 10 early-stage technology startups focused on solving African challenges.",
      highlights: [
        "Diversified portfolio across multiple sectors",
        "Experienced management team with prior exits",
        "Comprehensive support structure for portfolio companies",
        "Focus on solutions addressing African challenges"
      ],
      riskLevel: "High"
    },
    {
      id: "deal5",
      title: "Affordable Housing Project",
      fund: "Property Impact Fund",
      fundId: "property",
      minInvestment: "R 5,000",
      targetReturn: "9.8%",
      term: "8 years",
      closingDate: "June 30, 2025",
      status: "Open",
      description: "Development of 120 affordable housing units in growing township area with strong demand for quality housing.",
      highlights: [
        "Partnership with local government for land access",
        "Innovative construction methods reducing costs",
        "Community facilities including daycare and small business spaces",
        "Sustainable water and energy systems"
      ],
      riskLevel: "Moderate"
    },
    {
      id: "deal6",
      title: "Wind Farm Project",
      fund: "Energy Impact Fund",
      fundId: "energy",
      minInvestment: "R 5,000",
      targetReturn: "13.5%",
      term: "10 years",
      closingDate: "August 15, 2025",
      status: "Open",
      description: "Construction of a new wind farm in the Eastern Cape with capacity to power 15,000 homes.",
      highlights: [
        "Environmental approvals already secured",
        "Power purchase agreement with major utility",
        "Latest turbine technology for maximum efficiency",
        "Local community ownership component"
      ],
      riskLevel: "Moderate-High"
    }
  ];

  const handleInvestmentInterest = () => {
    toast.success("Your investment interest has been registered. An advisor will contact you shortly.");
    setSelectedDealId(null);
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">New Investment Opportunities</h2>
        <p className="text-muted-foreground">
          Explore our latest investment opportunities across different impact funds.
        </p>
        
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="all">All Deals</TabsTrigger>
            {funds.map(fund => (
              <TabsTrigger key={fund.id} value={fund.id}>
                {fund.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deals.map((deal) => (
                <DealCard key={deal.id} deal={deal} onClick={() => setSelectedDealId(deal.id)} />
              ))}
            </div>
          </TabsContent>
          
          {funds.map(fund => (
            <TabsContent key={fund.id} value={fund.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deals
                  .filter(deal => deal.fundId === fund.id)
                  .map((deal) => (
                    <DealCard key={deal.id} deal={deal} onClick={() => setSelectedDealId(deal.id)} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Deal Details Dialog */}
        <Dialog open={!!selectedDealId} onOpenChange={(open) => !open && setSelectedDealId(null)}>
          <DialogContent className="max-w-3xl">
            {selectedDealId && (
              <>
                <DialogHeader>
                  <DialogTitle>{deals.find(d => d.id === selectedDealId)?.title}</DialogTitle>
                  <DialogDescription>
                    {deals.find(d => d.id === selectedDealId)?.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Investment Highlights</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {deals.find(d => d.id === selectedDealId)?.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Minimum Investment</h5>
                      <p className="font-bold">{deals.find(d => d.id === selectedDealId)?.minInvestment}</p>
                    </div>
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Target Return</h5>
                      <p className="font-bold">{deals.find(d => d.id === selectedDealId)?.targetReturn}</p>
                    </div>
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Investment Term</h5>
                      <p className="font-bold">{deals.find(d => d.id === selectedDealId)?.term}</p>
                    </div>
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Closing Date</h5>
                      <p className="font-bold">{deals.find(d => d.id === selectedDealId)?.closingDate}</p>
                    </div>
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Risk Level</h5>
                      <p className="font-bold">{deals.find(d => d.id === selectedDealId)?.riskLevel}</p>
                    </div>
                    <div className="p-4 bg-lightgray rounded-lg">
                      <h5 className="text-sm text-muted-foreground">Fund</h5>
                      <p className="font-bold">{deals.find(d => d.id === selectedDealId)?.fund}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center border-t pt-4">
                    <p className="text-sm text-muted-foreground">
                      Review all documents carefully before investing
                    </p>
                    <div className="space-x-3">
                      <Button variant="outline" onClick={() => setSelectedDealId(null)}>
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

interface DealCardProps {
  deal: any;
  onClick: () => void;
}

const DealCard = ({ deal, onClick }: DealCardProps) => {
  const getFundColor = (fundId: string) => {
    switch (fundId) {
      case 'agri': return 'bg-green-600';
      case 'property': return 'bg-blue-600';
      case 'energy': return 'bg-amber-600';
      case 'enterprise': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{deal.title}</CardTitle>
          <Badge className={`${getFundColor(deal.fundId)} hover:opacity-90`}>{deal.fund}</Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {deal.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Minimum</p>
            <p className="font-medium">{deal.minInvestment}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Target Return</p>
            <p className="font-medium">{deal.targetReturn}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Term</p>
            <p className="font-medium">{deal.term}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Closing</p>
            <p className="font-medium">{deal.closingDate}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-navyblue hover:bg-deepblue" onClick={onClick}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserNewDeals;
