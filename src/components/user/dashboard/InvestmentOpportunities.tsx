
import { useState } from "react";
import { impactFunds } from "@/data/impact-funds";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ImpactFundsFilter from "./ImpactFundsFilter";
import { Card, CardContent } from "@/components/ui/card";

const InvestmentOpportunities = () => {
  const navigate = useNavigate();
  const [maxAmount, setMaxAmount] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFundClick = (fundId: string) => {
    navigate(`/user/new-deals?fund=${fundId}`);
  };

  const filteredFunds = impactFunds.filter((fund) => {
    const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAmount = maxAmount ? parseInt(fund.minInvestment.replace(/[^0-9]/g, "")) <= maxAmount : true;
    return matchesSearch && matchesAmount;
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Our Impact Funds</h3>
        <p className="text-muted-foreground">
          Choose from our range of impact funds to start your investment journey
        </p>
      </div>

      <ImpactFundsFilter
        onFilterChange={setMaxAmount}
        onSearch={setSearchTerm}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFunds.map((fund) => (
          <Card
            key={fund.id}
            role="button"
            tabIndex={0}
            onClick={() => handleFundClick(fund.id)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleFundClick(fund.id);
            }}
            className="group overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            <div className={`h-2 ${fund.color}`} />
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4 group-hover:text-gold transition-colors">
                {fund.name}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Min Investment</span>
                  <span className="font-semibold">{fund.minInvestment}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Opportunities</span>
                  <span className="font-semibold">{fund.count}</span>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View Opportunities
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFunds.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No funds match your current filters.
        </div>
      )}
    </div>
  );
};

export default InvestmentOpportunities;
