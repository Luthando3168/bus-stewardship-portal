import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import { Users, Briefcase, Banknote, FileText, ChartBar } from "lucide-react";

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
      businessModel={{
        title: "How Your Farm Business Makes Money",
        description: "When you invest in MyFarm, you're not just buying shares - you're becoming an owner in a complete farming ecosystem:",
        steps: [
          {
            title: "Farm Operations",
            description: "Your capital is used to invest in multiple agricultural farms that grow crops and raise livestock",
            icon: "briefcase"
          },
          {
            title: "Distribution Network",
            description: "Your farms sell products through our network of retail outlets (which you can also own through MyFoodRetail Fund)",
            icon: "users"
          },
          {
            title: "Profit Sharing",
            description: "When customers buy from our retail outlets, the money goes back to your farming business, creating a cycle of growth",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Professional Business Support Team",
        description: "As a business owner, you get the same professional support as large corporations:",
        services: [
          {
            title: "Professional Accounting",
            description: "Expert accountants handle all financial records and tax matters with SARS",
            icon: "chartBar"
          },
          {
            title: "Financial Audits",
            description: "Independent auditors verify our work and financial reports twice a year",
            icon: "fileText"
          }
        ]
      }}
      reporting={{
        frequency: "Every 6 months",
        reports: [
          "Audited financial statements",
          "Tax compliance reports",
          "Farm performance metrics",
          "Environmental impact assessments"
        ]
      }}
    />
  );
};

export default MyFarmFund;
