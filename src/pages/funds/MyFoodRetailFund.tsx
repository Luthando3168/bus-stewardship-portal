
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyFoodRetailFund = () => {
  return (
    <FundEducationalPage
      fundName="MyFoodRetail"
      description="Own your own food shops and supply your community with quality food they can afford."
      bgGradient="from-amber-600 to-amber-800"
      image="/lovable-uploads/0bf3e14d-cb74-4a37-b156-c269331b7a57.png"
      focus={[
        "Your own grocery stores",
        "Food supply network",
        "Community markets"
      ]}
      minInvestment="R 5,000"
      businessModel={{
        title: "How You Make Money From Your Food Business",
        description: "Your money works for you in a complete food supply system:",
        steps: [
          {
            title: "Running Your Shops",
            description: "Your money helps set up and run food shops in different areas",
            icon: "briefcase"
          },
          {
            title: "Smart Supply Chain",
            description: "Your shops get food straight from our MyFarm businesses - better prices mean more profit",
            icon: "users"
          },
          {
            title: "Daily Sales",
            description: "Every time someone buys from your shops, you make money. Plus, buying from our own farms means extra profit",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Team of Business Experts",
        description: "We handle everything for you:",
        services: [
          {
            title: "Money Management",
            description: "Professional accountants handle your money and taxes",
            icon: "chartBar"
          },
          {
            title: "Regular Checks",
            description: "We make sure your business follows all the rules and runs properly",
            icon: "fileText"
          }
        ]
      }}
      reporting={{
        frequency: "Every 6 months",
        reports: [
          "Full money reports (checked by professionals)",
          "How many people bought from your shops",
          "How your business is growing",
          "How you're helping the community"
        ]
      }}
    />
  );
};

export default MyFoodRetailFund;

