import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import { Users, Briefcase, Banknote, FileText, ChartBar } from "lucide-react";

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
      businessModel={{
        title: "How Your Property Business Makes Money",
        description: "Your investment in property creates multiple income streams:",
        steps: [
          {
            title: "Rental Income",
            description: "Your properties earn monthly rental income from residential and commercial tenants",
            icon: "briefcase"
          },
          {
            title: "Business Integration",
            description: "Your properties can house our MyFoodRetail stores and other franchise businesses",
            icon: "users"
          },
          {
            title: "Property Value Growth",
            description: "As communities develop, your property values increase over time",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Professional Business Support Team",
        description: "Expert property management and financial support:",
        services: [
          {
            title: "Property Management",
            description: "Professional property managers handle tenant relations and maintenance",
            icon: "chartBar"
          },
          {
            title: "Financial Oversight",
            description: "Regular audits and financial reports ensure transparency",
            icon: "fileText"
          }
        ]
      }}
      reporting={{
        frequency: "Every 6 months",
        reports: [
          "Audited financial statements",
          "Occupancy reports",
          "Maintenance records",
          "Property valuations"
        ]
      }}
    />
  );
};

export default MyPropertyFund;
