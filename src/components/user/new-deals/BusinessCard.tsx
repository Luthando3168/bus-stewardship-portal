
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";

interface Business {
  id: string;
  title: string;
  region: string;
  description: string;
  minInvestment: number;
}

interface BusinessCardProps {
  business: Business;
  expanded: boolean;
  fundName: string;
  onToggle: (id: string) => void;
  onAddToCart: (business: Business, fundName: string) => void;
}

const BusinessCard = ({
  business,
  expanded,
  fundName,
  onToggle,
  onAddToCart,
}: BusinessCardProps) => (
  <Card className="overflow-hidden animate-fade-in hover:shadow-md transition-shadow">
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-lg text-navyblue">{business.title}</CardTitle>
          <CardDescription className="text-sm mt-1">{business.region}</CardDescription>
        </div>
        <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
          {fundName.replace(" Impact Fund", "")}
        </Badge>
      </div>
    </CardHeader>
    
    <CardContent className="pb-2 pt-0">
      {!expanded && (
        <p className="text-sm line-clamp-2 text-muted-foreground">
          {business.description}
        </p>
      )}
      
      {expanded && (
        <>
          <p className="text-sm mb-4">{business.description}</p>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Minimum Investment</p>
            <p className="font-medium text-navyblue">R {business.minInvestment.toLocaleString()}</p>
          </div>
        </>
      )}
    </CardContent>
    
    <CardFooter className="pt-2 flex justify-between items-center">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onToggle(business.id)}
        className="text-navyblue hover:text-navyblue/80"
      >
        {expanded ? (
          <span className="flex items-center gap-1">View Less <ChevronUp size={16} /></span>
        ) : (
          <span className="flex items-center gap-1">View More <ChevronDown size={16} /></span>
        )}
      </Button>
      
      {expanded && (
        <Button
          className="bg-gold hover:bg-lightgold text-white"
          size="sm"
          onClick={() => onAddToCart(business, fundName)}
        >
          <Plus size={14} className="mr-1" />
          Add to Cart
        </Button>
      )}
    </CardFooter>
  </Card>
);

export default BusinessCard;
