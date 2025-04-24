import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyFoodRetailFund = () => {
  return (
    <FundEducationalPage
      fundName="MyFoodRetail"
      description="Focus: Investing in food retail businesses to improve access to quality food in underserved communities."
      bgGradient="from-amber-600 to-amber-800"
      image="https://images.unsplash.com/photo-1604719312566-8912e9227c6a"
      focus={[
        "Grocery stores",
        "Food distribution",
        "Community markets"
      ]}
      minInvestment="R 5,000"
      businessModel={{
        title: "How Your Food Retail Business Makes Money",
        description: "Your investment in MyFoodRetail connects you to a complete food distribution network:",
        steps: [
          {
            title: "Retail Operations",
            description: "Your capital helps establish and run food retail outlets in various communities",
            icon: "briefcase"
          },
          {
            title: "Supply Chain",
            description: "Your stores get products directly from our MyFarm businesses, creating better prices and profits",
            icon: "users"
          },
          {
            title: "Customer Sales",
            description: "Every purchase at your stores generates income, and buying from our own farms means better profits",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Professional Business Support Team",
        description: "Every business owner gets full professional support:",
        services: [
          {
            title: "Financial Management",
            description: "Professional accountants handle daily finances and tax compliance",
            icon: "chartBar"
          },
          {
            title: "Business Audits",
            description: "Regular audits ensure your business is run according to best practices",
            icon: "fileText"
          }
        ]
      }}
      reporting={{
        frequency: "Every 6 months",
        reports: [
          "Audited financial statements",
          "Sales performance reports",
          "Customer growth metrics",
          "Community impact assessments"
        ]
      }}
    />
  );
};

export default MyFoodRetailFund;
