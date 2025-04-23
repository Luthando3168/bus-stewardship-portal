
import { impactFunds } from "@/data/impact-funds";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const InvestmentOpportunities = () => {
  const navigate = useNavigate();

  const handleFundClick = (fundId: string) => {
    navigate(`/user/new-deals?fund=${fundId}`);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Our Impact Funds</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {impactFunds.map((fund) => (
          <div
            key={fund.id}
            role="button"
            tabIndex={0}
            onClick={() => handleFundClick(fund.id)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleFundClick(fund.id);
            }}
            className={`rounded-lg text-white overflow-hidden shadow-lg ${fund.color} hover:-translate-y-1 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2`}
            style={{ transitionProperty: "box-shadow, transform" }}
            aria-label={`Browse ${fund.name} opportunities`}
          >
            <div className="p-5">
              <h3 className="font-bold text-xl mb-2">{fund.name}</h3>
              <p className="text-sm mb-4">Min Investment: {fund.minInvestment}</p>
              <p className="text-sm text-white/80 mb-4">
                {fund.count} investment opportunities available
              </p>
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white pointer-events-none">
                Browse Opportunities
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
