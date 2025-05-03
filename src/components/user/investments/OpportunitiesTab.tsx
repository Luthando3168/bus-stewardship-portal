
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { impactFunds } from "@/data/impact-funds";
import FundDetails from "./FundDetails";

interface OpportunitiesTabProps {
  activeFundId: string;
  setActiveFundId: (id: string) => void;
}

const OpportunitiesTab: React.FC<OpportunitiesTabProps> = ({
  activeFundId,
  setActiveFundId,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Opportunities</CardTitle>
        <CardDescription>
          Explore new investment opportunities across our impact funds
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Select an Impact Fund</h4>
          <div className="flex flex-wrap gap-2">
            {impactFunds.map((fund) => (
              <Button
                key={fund.id}
                onClick={() => setActiveFundId(fund.id)}
                variant={activeFundId === fund.id ? "default" : "outline"}
                className={`${activeFundId === fund.id ? 'bg-navyblue text-white' : ''}`}
              >
                {fund.name}
              </Button>
            ))}
          </div>
        </div>
        
        {activeFundId && <FundDetails activeFundId={activeFundId} />}
      </CardContent>
    </Card>
  );
};

export default OpportunitiesTab;
