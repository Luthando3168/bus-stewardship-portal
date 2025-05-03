
import React from "react";
import { Button } from "@/components/ui/button";
import FundOpportunities from "@/components/user/FundOpportunities";
import { fundImages, impactFunds } from "@/data/impact-funds";

interface FundDetailsProps {
  activeFundId: string;
}

const FundDetails: React.FC<FundDetailsProps> = ({ activeFundId }) => {
  const activeImpactFund = impactFunds.find(fund => fund.id === activeFundId);

  return (
    <div>
      <div className="mb-5">
        <div 
          className="h-40 w-full rounded-lg bg-cover bg-center mb-4"
          style={{
            backgroundImage: `url(${fundImages[activeFundId as keyof typeof fundImages]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <h3 className="text-xl font-semibold text-navyblue mb-2">
          {activeImpactFund?.name} Impact Fund
        </h3>
        <p className="text-muted-foreground">
          Explore current investment opportunities in the {activeImpactFund?.name} sector.
        </p>
      </div>
      
      <FundOpportunities fundId={activeFundId} />
    </div>
  );
};

export default FundDetails;
