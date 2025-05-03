
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const funds = [
  {
    id: "myfarm",
    name: "MyFarm Impact Fund",
    description: "Agricultural investments with high impact potential",
    deals: 5,
    minInvestment: 10000,
    returns: "12-15%",
    image: "farm.jpg",
    badge: "Popular"
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    description: "Commercial and residential property investments",
    deals: 3,
    minInvestment: 25000,
    returns: "8-10%",
    image: "property.jpg"
  },
  {
    id: "myenergy",
    name: "MyEnergy Impact Fund",
    description: "Renewable energy projects and infrastructure",
    deals: 2,
    minInvestment: 15000,
    returns: "10-13%",
    image: "energy.jpg",
    badge: "New"
  },
];

const InvestmentOpportunities = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Featured Impact Funds</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {funds.map((fund) => (
          <Card key={fund.id} className="overflow-hidden">
            <div className="h-32 bg-gray-200 relative">
              {/* In a real implementation, you would use actual images */}
              <div className="absolute inset-0 bg-gradient-to-r from-navyblue/90 to-navyblue/70 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{fund.name}</span>
              </div>
              {fund.badge && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-gold">{fund.badge}</Badge>
                </div>
              )}
            </div>
            <CardHeader>
              <CardTitle className="text-base">{fund.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{fund.description}</p>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Min Investment</p>
                  <p className="font-medium">R{fund.minInvestment.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Expected Returns</p>
                  <p className="font-medium text-green-600">{fund.returns}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Available Deals</p>
                  <p className="font-medium">{fund.deals}</p>
                </div>
              </div>
              
              <Button asChild className="w-full mt-4 bg-gold hover:bg-gold/80 text-navyblue">
                <Link to={`/user/investments#${fund.id}`}>
                  View Opportunities
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center pt-2">
        <Button variant="outline" asChild>
          <Link to="/user/investments">
            View All Impact Funds
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
