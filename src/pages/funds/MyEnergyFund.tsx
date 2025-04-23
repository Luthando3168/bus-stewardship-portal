
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const MyEnergyFund = () => {
  return (
    <Layout>
      <Helmet>
        <title>MyEnergy Impact Fund | LMCA</title>
        <meta name="description" content="Investing in renewable energy solutions to provide clean power and energy efficiency for communities." />
      </Helmet>
      
      <FundEducationalPage
        fundName="MyEnergy Impact Fund"
        description="Focus: Investing in renewable energy solutions to provide clean power and energy efficiency for communities."
        bgGradient="from-orange-600 to-amber-900"
        image="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d"
        focus={[
          "Solar power installations",
          "Energy efficiency solutions",
          "Alternative energy infrastructure"
        ]}
        minInvestment="R 3,000"
        businessModel={{
          title: "How Your Energy Business Makes Money",
          description: "Your investment in energy creates sustainable revenue through:",
          steps: [
            {
              title: "Energy Production",
              description: "Your capital is used to set up renewable energy installations that generate electricity",
              icon: "briefcase"
            },
            {
              title: "Community Integration",
              description: "Your energy systems can power our other business ventures, creating an ecosystem",
              icon: "users"
            },
            {
              title: "Energy Sales",
              description: "Income is generated through the sale of electricity and energy services to customers",
              icon: "banknote"
            }
          ]
        }}
        professionalSupport={{
          title: "Your Professional Business Support Team",
          description: "Expert energy management support:",
          services: [
            {
              title: "Technical Management",
              description: "Professional engineers and technicians manage installation and maintenance",
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
          frequency: "Quarterly",
          reports: [
            "Energy production metrics",
            "Financial statements",
            "Carbon offset calculations",
            "System efficiency reports"
          ]
        }}
      />
    </Layout>
  );
};

export default MyEnergyFund;
