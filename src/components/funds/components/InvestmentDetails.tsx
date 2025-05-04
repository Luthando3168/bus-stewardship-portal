
import React from "react";
import { Link } from "react-router-dom";

interface InvestmentDetailsProps {
  minInvestment: string;
}

const InvestmentDetails = ({ minInvestment }: InvestmentDetailsProps) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h3 className="text-2xl font-bold text-navyblue mb-6">Investment Details</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <span className="text-gray-700">Minimum investment:</span>
          <span className="font-bold text-navyblue text-xl">{minInvestment}</span>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/register"
            className="inline-block bg-gold text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-500 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
