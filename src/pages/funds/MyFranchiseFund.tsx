
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyFranchiseFund = () => {
  return (
    <FundEducationalPage
      fundName="MyFranchise"
      description="Own famous brand stores like Steers or Debonairs - we handle everything while you earn."
      bgGradient="from-red-600 to-red-800"
      image="/lovable-uploads/e5869f22-682c-4c5c-bd33-5a19766a95cf.png"
      focus={[
        "Well-known food franchises",
        "Retail store franchises",
        "Job creation"
      ]}
      minInvestment="R 1,500"
      businessModel={{
        title: "How Your Franchise Makes Money",
        description: "Your franchise investment works in proven ways:",
        steps: [
          {
            title: "Multiple Stores",
            description: "Your money helps open franchise stores in busy areas",
            icon: "briefcase"
          },
          {
            title: "Smart Business Mix",
            description: "Your franchises can be in our MyProperty buildings and get food from MyFarm",
            icon: "users"
          },
          {
            title: "Daily Sales",
            description: "Every customer that buys means money for you - and these are trusted brands people love",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Franchise Support Team",
        description: "We handle all the daily work:",
        services: [
          {
            title: "Store Management",
            description: "Professional managers run the stores and train staff",
            icon: "chartBar"
          },
          {
            title: "Money Management",
            description: "Expert accountants make sure your money is handled properly",
            icon: "fileText"
          }
        ]
      }}
      businessManagement={{
        title: "Business Management Services",
        description: "Our franchise experts handle all operational aspects:",
        services: [
          {
            title: "Brand Compliance",
            description: "Ensuring all stores meet franchise standards and requirements",
            icon: "fileText"
          },
          {
            title: "Staff Training & Management",
            description: "Recruiting, training and managing all store personnel",
            icon: "users"
          },
          {
            title: "Inventory & Supply Chain",
            description: "Managing stock levels and relationships with suppliers",
            icon: "briefcase"
          }
        ]
      }}
      reporting={{
        frequency: "Every 6 months",
        reports: [
          "Professional money reports",
          "How well your stores are doing",
          "What customers think",
          "Plans to grow bigger"
        ]
      }}
    />
  );
};

export default MyFranchiseFund;
