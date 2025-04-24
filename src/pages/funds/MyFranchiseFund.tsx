
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyFranchiseFund = () => {
  return (
    <FundEducationalPage
      fundName="MyFranchise"
      description="Focus: Investing in franchise businesses with proven operational models, creating jobs and business skills."
      bgGradient="from-red-600 to-red-800"
      image="https://images.unsplash.com/photo-1572874449137-d9f290d5b9a7" // New hamburger ad image
      focus={[
        "Food franchise outlets",
        "Retail and service franchises",
        "Entrepreneurship development"
      ]}
      minInvestment="R 5,000"
      businessModel={{
        title: "How Your Franchise Business Makes Money",
        description: "Your investment in franchises creates a network of proven businesses:",
        steps: [
          {
            title: "Multiple Locations",
            description: "Your capital is used to establish franchise outlets in strategic locations",
            icon: "briefcase"
          },
          {
            title: "Ecosystem Integration",
            description: "Your franchises can be located in our MyProperty buildings and source from MyFarm",
            icon: "users"
          },
          {
            title: "Daily Operations",
            description: "Every customer transaction generates income, with proven business models reducing risk",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Professional Business Support Team",
        description: "Comprehensive franchise management support:",
        services: [
          {
            title: "Operations Management",
            description: "Professional managers handle daily operations and staff training",
            icon: "chartBar"
          },
          {
            title: "Financial Control",
            description: "Expert accountants and auditors ensure proper financial management",
            icon: "fileText"
          }
        ]
      }}
      reporting={{
        frequency: "Every 6 months",
        reports: [
          "Audited financial statements",
          "Franchise performance metrics",
          "Customer satisfaction surveys",
          "Growth and expansion plans"
        ]
      }}
    />
  );
};

export default MyFranchiseFund;
