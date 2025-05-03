
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { opportunities, Opportunity } from "@/data/impact-funds";

interface FundOpportunitiesProps {
  fundId: string; // selected fund ID
}

const FundOpportunities: React.FC<FundOpportunitiesProps> = ({ fundId }) => {
  // Filter opportunities that match exactly the selected fundId
  const fundOpportunities = opportunities.filter(
    (op) => op.fundId === fundId
  );
  
  // If no opportunities found for this fund
  if (fundOpportunities.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No opportunities available for this fund currently.
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      {fundOpportunities.map((opportunity) => (
        <Card key={opportunity.id} className="border bg-white shadow">
          <CardHeader>
            <CardTitle>{opportunity.title}</CardTitle>
            <CardDescription>{opportunity.summary}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between py-2">
              <div>
                <span className="text-sm text-muted-foreground">Min Investment:</span>
                <span className="ml-1 font-medium">{opportunity.minInvestment}</span>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Return:</span>
                <span className="ml-1 font-medium">{opportunity.projectedReturn}</span>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <Button disabled={opportunity.status !== "Open"}>
                {opportunity.status === "Open" ? "View Opportunity" : "Closed"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FundOpportunities;
