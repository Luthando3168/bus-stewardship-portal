
import React from "react";

interface FundHeaderProps {
  name: string;
  minInvestment: number;
  returnRate: string;
}

const FundHeader = ({ name, minInvestment, returnRate }: FundHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-5 bg-white/50 p-4 rounded-lg shadow-sm border border-gray-100">
      <div>
        <h3 className="text-xl font-semibold text-navyblue">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Min. Investment: <span className="font-medium text-navyblue">R {minInvestment.toLocaleString()}</span>
        </p>
      </div>
      <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium self-start flex items-center justify-center">
        <span className="mr-1">Expected Returns:</span>
        <span className="font-bold">{returnRate}</span>
      </div>
    </div>
  );
};

export default FundHeader;
