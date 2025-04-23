import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from "@/components/ui/button";

interface BusinessCardProps {
  business: any;
  expanded: boolean;
  fundName: string;
  onToggle: (id: string) => void;
  onAddToCart: (business: any, fundName: string) => void;
}

const BusinessCard = ({ 
  business, 
  expanded, 
  fundName, 
  onToggle, 
  onAddToCart 
}: BusinessCardProps) => {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-navyblue">{business.title}</h3>
          <p className="text-sm text-muted-foreground">{business.region}</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={() => onToggle(business.id)}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <span className="mr-1 text-sm">View More</span>
                <ChevronDown 
                  className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to see more details about this business</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {expanded && (
        <div className="mt-4">
          <p className="text-sm text-gray-700 mb-3">{business.description}</p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Min. Investment: <span className="font-semibold">R {business.minInvestment.toLocaleString()}</span>
            </div>
            <Button size="sm" onClick={() => onAddToCart(business, fundName)}>
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessCard;
