
import React from "react";

interface FundHeaderProps {
  name: string;
  minInvestment: number;
  returnRate: string;
}

const FundHeader = ({ name, minInvestment, returnRate }: FundHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-3">
      <div>
        <h3 className="text-lg font-semibold text-navyblue">{name}</h3>
        <p className="text-sm text-muted-foreground">
          Min. Investment: <span className="font-medium">R {minInvestment.toLocaleString()}</span>
        </p>
      </div>
      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium self-start">
        {returnRate}
      </div>
    </div>
  );
};

export default FundHeader;
