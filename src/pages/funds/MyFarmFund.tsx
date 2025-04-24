
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyFarmFund = () => {
  return (
    <FundEducationalPage
      fundName="MyFarm"
      description="Own farms that feed our communities and make you money - all professionally managed."
      bgGradient="from-green-700 to-green-900"
      image="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8"
      focus={[
        "Smart farming operations",
        "Growing food for communities",
        "Mixed farming projects"
      ]}
      minInvestment="R 1,000"
      businessModel={{
        title: "How Your Farm Makes Money",
        description: "When you invest in MyFarm, you're not just buying a piece of land - you're joining a whole farming business system:",
        steps: [
          {
            title: "Growing Food",
            description: "Your money helps run farms that grow food and raise animals",
            icon: "briefcase"
          },
          {
            title: "Selling Smart",
            description: "Your farms sell food through our own shops (which you can also own through MyFoodRetail)",
            icon: "users"
          },
          {
            title: "Extra Profit",
            description: "When people buy from our shops, money goes back to your farming business - it all works together!",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Farm Management Team",
        description: "You get the same professional help as big farming companies:",
        services: [
          {
            title: "Money Management",
            description: "Expert accountants handle your books and SARS matters",
            icon: "chartBar"
          },
          {
            title: "Regular Checks",
            description: "Independent experts check your farm's books twice a year",
            icon: "fileText"
          }
        ]
      }}
      reporting={{
        frequency: "Every 6 months",
        reports: [
          "Professional money reports",
          "Tax paperwork",
          "How well your farms are doing",
          "How you're helping the environment"
        ]
      }}
    />
  );
};

export default MyFarmFund;

