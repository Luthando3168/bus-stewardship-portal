
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Farm as FarmIcon, Building2, Store, Landmark, Lightbulb, HeartPulse, GraduationCap, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface ImpactFundType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

interface InvestmentOpportunitiesProps {
  isGuest?: boolean;
}

const InvestmentOpportunities: React.FC<InvestmentOpportunitiesProps> = ({ isGuest = false }) => {
  const [activeTab, setActiveTab] = useState("all");
  
  const impactFunds: ImpactFundType[] = [
    {
      id: "farm",
      name: "MyFarm Fund",
      description: "Invest in sustainable farming operations across South Africa.",
      icon: <FarmIcon className="h-8 w-8 text-green-600" />,
      path: "/user/investments/farm",
      color: "bg-green-600"
    },
    {
      id: "property",
      name: "MyProperty Fund",
      description: "Access residential and commercial real estate investment opportunities.",
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      path: "/user/investments/property",
      color: "bg-blue-600"
    },
    {
      id: "franchise",
      name: "MyFranchise Fund",
      description: "Invest in established franchise businesses with proven track records.",
      icon: <Store className="h-8 w-8 text-purple-600" />,
      path: "/user/investments/franchise",
      color: "bg-purple-600"
    },
    {
      id: "food",
      name: "MyFood Retail Fund",
      description: "Support and invest in South Africa's growing food retail sector.",
      icon: <Store className="h-8 w-8 text-orange-500" />,
      path: "/user/investments/food-retail",
      color: "bg-orange-500"
    },
    {
      id: "energy",
      name: "MyEnergy Fund",
      description: "Participate in renewable energy projects across the country.",
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      path: "/user/investments/energy",
      color: "bg-yellow-500"
    },
    {
      id: "health",
      name: "MyHealth Fund",
      description: "Invest in healthcare facilities and medical practices.",
      icon: <HeartPulse className="h-8 w-8 text-red-500" />,
      path: "/user/investments/health",
      color: "bg-red-500"
    },
    {
      id: "school",
      name: "MySchool Fund",
      description: "Support educational infrastructure development across communities.",
      icon: <GraduationCap className="h-8 w-8 text-blue-400" />,
      path: "/user/investments/school",
      color: "bg-blue-400"
    },
    {
      id: "telco",
      name: "MyTelco Fund",
      description: "Invest in telecommunications infrastructure and services.",
      icon: <Phone className="h-8 w-8 text-indigo-600" />,
      path: "/user/investments/telco",
      color: "bg-indigo-600"
    }
  ];

  const filteredFunds = activeTab === "all" 
    ? impactFunds 
    : impactFunds.filter(fund => fund.id === activeTab);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 overflow-x-auto flex w-full sm:inline-flex sm:w-auto">
          <TabsTrigger value="all">All Funds</TabsTrigger>
          {impactFunds.map(fund => (
            <TabsTrigger key={fund.id} value={fund.id}>
              {fund.name.replace(" Fund", "")}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredFunds.map((fund) => (
              <Card key={fund.id} className="overflow-hidden">
                <div className={`h-2 w-full ${fund.color}`} />
                <CardContent className="p-6">
                  <div className="mb-4">{fund.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{fund.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{fund.description}</p>
                  <Link to={fund.path}>
                    <Button variant="outline" className="w-full border-gray-300">
                      {isGuest ? "View Opportunities" : "Explore & Invest"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InvestmentOpportunities;
