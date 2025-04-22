
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
  <Card className="overflow-hidden animate-fade-in">
    <CardHeader className="pb-3">
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-lg">{business.title}</CardTitle>
          <CardDescription className="text-sm">{business.region}</CardDescription>
        </div>
        <Badge className="bg-blue-600">
          {fundName.replace(" Impact Fund", "")}
        </Badge>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onToggle(business.id)}
        className="p-0 h-8 hover:bg-transparent"
        aria-label={expanded ? "Collapse" : "Expand"}
      >
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </Button>
    </CardHeader>
    {expanded && (
      <>
        <CardContent className="pt-2">
          <p className="text-sm">{business.description}</p>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Minimum Investment</p>
            <p className="font-medium text-lg">R {business.minInvestment.toLocaleString()}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end pt-2">
          <Button
            className="w-full sm:w-auto bg-gold hover:bg-lightgold"
            onClick={() => onAddToCart(business, fundName)}
          >
            <Plus size={16} className="mr-1" />
            Add to Investment Cart
          </Button>
        </CardFooter>
      </>
    )}
  </Card>
);

export default BusinessCard;
