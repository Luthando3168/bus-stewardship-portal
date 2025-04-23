
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyFranchiseFund = () => {
  return (
    <FundEducationalPage
      fundName="MyFranchise Impact Fund"
      description="Focus: Investing in franchise businesses with proven operational models, creating jobs and business skills."
      bgGradient="from-red-600 to-red-800"
      image="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2"
      focus={[
        "Food franchise outlets",
        "Retail and service franchises", 
        "Entrepreneurship development"
      ]}
      minInvestment="R 1,500"
    />
  );
};

export default MyFranchiseFund;
