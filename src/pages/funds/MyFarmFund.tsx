
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyFarmFund = () => {
  return (
    <FundEducationalPage
      fundName="MyFarm Impact Fund"
      description="Focus: Supporting sustainable agriculture and farming businesses across South Africa."
      bgGradient="from-green-700 to-green-900"
      image="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8"
      focus={[
        "Sustainable farming operations",
        "Food security projects",
        "Organic and mixed-crop ventures"
      ]}
      minInvestment="R 1,000"
    />
  );
};

export default MyFarmFund;
