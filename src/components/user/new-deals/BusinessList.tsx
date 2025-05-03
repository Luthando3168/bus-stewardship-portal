
import React from "react";
import BusinessCard from "./BusinessCard";

interface Business {
  id: string;
  title: string;
  region: string;
  description: string;
  minInvestment: number;
}

interface BusinessListProps {
  businesses: Business[];
  expandedBusinessId: string | null;
  fundName: string;
  onToggleExpand: (businessId: string) => void;
  onAddToCart: (business: Business, fundName: string) => void;
}

const BusinessList = ({ 
  businesses, 
  expandedBusinessId, 
  fundName, 
  onToggleExpand, 
  onAddToCart 
}: BusinessListProps) => {
  if (businesses.length === 0) {
    return (
      <div className="px-2 py-6 text-gray-400 text-center italic border border-dashed border-gray-200 bg-gray-50 rounded">
        Currently No Opportunities
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {businesses.map(business => (
        <BusinessCard
          key={business.id}
          business={business}
          expanded={expandedBusinessId === business.id}
          fundName={fundName}
          onToggle={onToggleExpand}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default BusinessList;
