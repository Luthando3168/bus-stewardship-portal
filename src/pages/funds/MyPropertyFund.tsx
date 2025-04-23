
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyPropertyFund = () => {
  return (
    <FundEducationalPage
      fundName="MyProperty Impact Fund"
      description="Focus: Investing in community-focused real estate, affordable housing and property businesses."
      bgGradient="from-blue-700 to-blue-900"
      image="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
      focus={[
        "Affordable & mixed-use housing",
        "Community property projects",
        "Student accommodation"
      ]}
      minInvestment="R 2,000"
    />
  );
};

export default MyPropertyFund;
