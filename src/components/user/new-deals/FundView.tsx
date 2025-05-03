
import React from "react";
import FundHeader from "./FundHeader";
import FundDescription from "./FundDescription";
import BusinessList from "./BusinessList";

interface Business {
  id: string;
  title: string;
  region: string;
  description: string;
  minInvestment: number;
}

interface FundViewProps {
  fund: {
    id: string;
    name: string;
    return: string;
    minInvestment: number;
    description?: string;
    businesses: Business[];
  };
  expandedBusinessId: string | null;
  onToggleBusinessExpansion: (id: string) => void;
  onAddToCart: (business: Business, fundName: string) => void;
}

const FundView = ({
  fund,
  expandedBusinessId,
  onToggleBusinessExpansion,
  onAddToCart,
}: FundViewProps) => {
  return (
    <div className="border border-navyblue/10 rounded-lg p-4 bg-white">
      <FundHeader 
        name={fund.name} 
        minInvestment={fund.minInvestment} 
        returnRate={fund.return} 
      />
      
      <FundDescription description={fund.description} />
      
      <BusinessList
        businesses={fund.businesses}
        expandedBusinessId={expandedBusinessId}
        fundName={fund.name}
        onToggleExpand={onToggleBusinessExpansion}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default FundView;
