
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Farm, Building, ShoppingBag, ShoppingCart, Zap, Stethoscope, GraduationCap, Smartphone } from "lucide-react";

interface InvestmentOpportunitiesProps {
  isGuest?: boolean;
}

const InvestmentOpportunities = ({ isGuest = false }: InvestmentOpportunitiesProps) => {
  const funds = [
    {
      id: "myfarm",
      name: "My Farm Fund",
      icon: <Farm className="h-8 w-8 text-green-600" />,
      color: "bg-green-100 border-green-300",
      description: "Agricultural projects across South Africa",
      link: "/funds/myfarm"
    },
    {
      id: "myproperty",
      name: "My Property Fund",
      icon: <Building className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-300",
      description: "Real estate development and property investment",
      link: "/funds/myproperty"
    },
    {
      id: "myfranchise",
      name: "My Franchise Fund",
      icon: <ShoppingBag className="h-8 w-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-300",
      description: "Franchise business opportunities",
      link: "/funds/myfranchise"
    },
    {
      id: "myfoodretail",
      name: "My Food Retail Fund",
      icon: <ShoppingCart className="h-8 w-8 text-red-600" />,
      color: "bg-red-50 border-red-300",
      description: "Food retail and distribution chains",
      link: "/funds/myfoodretail"
    },
    {
      id: "myenergy",
      name: "My Energy Fund",
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      color: "bg-yellow-50 border-yellow-300",
      description: "Renewable energy and sustainable solutions",
      link: "/funds/myenergy"
    },
    {
      id: "myhealth",
      name: "My Health Fund",
      icon: <Stethoscope className="h-8 w-8 text-teal-600" />,
      color: "bg-teal-50 border-teal-300",
      description: "Healthcare facilities and services",
      link: "/funds/myhealth"
    },
    {
      id: "myschool",
      name: "My School Fund",
      icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
      color: "bg-indigo-50 border-indigo-300",
      description: "Educational institutions and initiatives",
      link: "/funds/myschool"
    },
    {
      id: "mytelco",
      name: "My Telco Fund",
      icon: <Smartphone className="h-8 w-8 text-orange-600" />,
      color: "bg-orange-50 border-orange-300",
      description: "Telecommunications infrastructure and services",
      link: "/funds/mytelco"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-navyblue">Impact Funds</h3>
        <Link to="/user/investments" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
          View all opportunities <ArrowRight className="h-3.5 w-3.5 ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {funds.map((fund) => (
          <Card 
            key={fund.id} 
            className={`border hover:shadow-md transition-shadow ${fund.color}`}
          >
            <CardContent className="flex flex-col items-center p-4 text-center">
              <div className="mb-2">
                {fund.icon}
              </div>
              <h4 className="font-semibold text-sm mb-1 text-gray-900">{fund.name}</h4>
              <p className="text-xs text-gray-500 mb-3">{fund.description}</p>
              {isGuest ? (
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="mt-auto w-full text-xs"
                >
                  <Link to={fund.link}>View Details</Link>
                </Button>
              ) : (
                <Button 
                  asChild 
                  variant="default" 
                  size="sm" 
                  className="mt-auto w-full text-xs"
                >
                  <Link to={fund.link}>Invest</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
