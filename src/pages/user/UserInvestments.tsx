
import React, { useState, useEffect } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { impactFunds } from "@/data/impact-funds";
import PortfolioTab from "@/components/user/investments/PortfolioTab";
import OpportunitiesTab from "@/components/user/investments/OpportunitiesTab";
import InvestmentDetailsDialog from "@/components/user/investments/InvestmentDetailsDialog";

const UserInvestments = () => {
  const [selectedInvestment, setSelectedInvestment] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<string>("portfolio");
  const [activeFundId, setActiveFundId] = useState<string>(impactFunds[0]?.id || "");
  
  // Scroll to the selected fund if the URL has a hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const fundExists = impactFunds.find(fund => fund.id === hash);
      if (fundExists) {
        setActiveFundId(hash);
        setActiveTab("opportunities");
      }
    }
  }, []);
  
  const investmentData = [
    {
      id: "inv1",
      name: "Downtown Office Building",
      fund: "MyProperty Impact Fund",
      amount: "R 120,000.00",
      investmentDate: "2023-05-15",
      term: "5 years",
      currentValue: "R 129,600.00",
      returnToDate: "+8.0%",
      status: "Active",
      distributions: [
        { date: "2023-08-15", amount: "R 2,400.00" },
        { date: "2023-11-15", amount: "R 2,400.00" },
        { date: "2024-02-15", amount: "R 2,400.00" }
      ],
      details: {
        description: "A 10-story office building in the heart of Johannesburg CBD with retail spaces on the ground floor.",
        location: "Johannesburg, Gauteng",
        projectManager: "Sarah Johnson",
        occupancyRate: "92%",
        lastValuation: "2024-01-15",
        highlights: [
          "Energy-efficient retrofits completed in 2023",
          "Secured new 3-year lease with major tenant",
          "Building awarded Green Star certification"
        ]
      }
    },
    {
      id: "inv2",
      name: "Solar Installation Network",
      fund: "MyEnergy Impact Fund",
      amount: "R 85,000.00",
      investmentDate: "2023-07-20",
      term: "7 years",
      currentValue: "R 94,350.00",
      returnToDate: "+11.0%",
      status: "Active",
      distributions: [
        { date: "2023-10-20", amount: "R 2,125.00" },
        { date: "2024-01-20", amount: "R 2,125.00" }
      ],
      details: {
        description: "A commercial solar installation providing clean energy to multiple businesses in Cape Town.",
        location: "Cape Town",
        projectManager: "David Mokoena",
        performanceRatio: "98.5%",
        lastInspection: "2024-02-10",
        highlights: [
          "Exceeded power generation targets by 5%",
          "Successfully weathered extreme summer conditions",
          "Local maintenance team fully trained and operational"
        ]
      }
    },
    {
      id: "inv3",
      name: "Organic Farm Expansion",
      fund: "MyFarm Impact Fund",
      amount: "R 40,000.00",
      investmentDate: "2023-09-05",
      term: "4 years",
      currentValue: "R 42,720.00",
      returnToDate: "+6.8%",
      status: "Active",
      distributions: [
        { date: "2023-12-05", amount: "R 800.00" },
        { date: "2024-03-05", amount: "R 800.00" }
      ],
      details: {
        description: "Expansion of a certified organic farm producing vegetables and herbs for local and export markets.",
        location: "KwaZulu-Natal",
        projectManager: "Thabo Nkosi",
        certifications: "Organic, Fair Trade",
        harvestSeason: "Year-round with seasonal peaks",
        highlights: [
          "New export contract secured with European distributor",
          "Irrigation system upgrade completed ahead of schedule",
          "Implemented advanced composting system reducing fertilizer costs"
        ]
      }
    }
  ];

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">My Investments</h2>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
            <TabsTrigger value="opportunities">Investment Opportunities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="portfolio">
            <PortfolioTab 
              investments={investmentData} 
              onSelectInvestment={setSelectedInvestment} 
            />
          </TabsContent>
          
          <TabsContent value="opportunities">
            <OpportunitiesTab 
              activeFundId={activeFundId} 
              setActiveFundId={setActiveFundId} 
            />
          </TabsContent>
        </Tabs>
        
        <InvestmentDetailsDialog 
          selectedInvestment={selectedInvestment} 
          setSelectedInvestment={setSelectedInvestment} 
        />
      </div>
    </UserLayout>
  );
};

export default UserInvestments;
