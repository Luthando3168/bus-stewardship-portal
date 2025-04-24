
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyPropertyFund = () => {
  return (
    <FundEducationalPage
      fundName="MyProperty"
      description="Own property that makes you money every month - from affordable housing to student accommodation."
      bgGradient="from-blue-700 to-blue-900"
      image="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
      focus={[
        "Housing that people can afford",
        "Mixed-use property projects",
        "Student accommodation"
      ]}
      minInvestment="R 2,000"
      businessModel={{
        title: "How Your Property Makes You Money",
        description: "Your property investment brings in money in different ways:",
        steps: [
          {
            title: "Monthly Rent",
            description: "Get money every month from people and businesses renting your properties",
            icon: "briefcase"
          },
          {
            title: "Smart Business Mix",
            description: "Your properties can house our food shops and other businesses - double the income!",
            icon: "users"
          },
          {
            title: "Growing Value",
            description: "As areas develop, your properties become worth more over time",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Property Management Team",
        description: "Expert support to handle everything:",
        services: [
          {
            title: "Property Care",
            description: "Professional managers handle tenants and keep your buildings in good shape",
            icon: "chartBar"
          },
          {
            title: "Money Management",
            description: "Regular checks to make sure your money is handled properly",
            icon: "fileText"
          }
        ]
      }}
      reporting={{
        frequency: "Every 6 months",
        reports: [
          "Professional money reports",
          "How full your properties are",
          "Maintenance updates",
          "What your properties are worth"
        ]
      }}
    />
  );
};

export default MyPropertyFund;

