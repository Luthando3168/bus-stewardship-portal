
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyFoodRetailFund = () => {
  return (
    <FundEducationalPage
      fundName="MyFoodRetail Impact Fund"
      description="Focus: Investing in food retail businesses to improve access to quality food in underserved communities."
      bgGradient="from-amber-600 to-amber-800"
      image="https://images.unsplash.com/photo-1604719312566-8912e9227c6a"
      focus={[
        "Grocery stores",
        "Food distribution",
        "Community markets"
      ]}
      minInvestment="R 1,800"
    />
  );
};

export default MyFoodRetailFund;
