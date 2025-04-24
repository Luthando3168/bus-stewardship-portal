
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const MyEnergyFund = () => {
  return (
    <Layout>
      <Helmet>
        <title>MyEnergy Impact Fund | LMCA</title>
        <meta name="description" content="Own solar and power businesses that light up our communities." />
      </Helmet>
      
      <FundEducationalPage
        fundName="MyEnergy Impact Fund"
        description="Own solar and power businesses that light up our communities."
        bgGradient="from-orange-600 to-amber-900"
        image="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d"
        focus={[
          "Solar power systems",
          "Energy saving solutions",
          "Power supply projects"
        ]}
        minInvestment="R 3,000"
        businessModel={{
          title: "How Your Energy Business Makes Money",
          description: "Your energy investment powers up profits in several ways:",
          steps: [
            {
              title: "Power Generation",
              description: "Your money helps set up solar systems that make electricity",
              icon: "briefcase"
            },
            {
              title: "Working Together",
              description: "Your energy systems can power our other businesses - everyone saves!",
              icon: "users"
            },
            {
              title: "Power Sales",
              description: "Make money by selling electricity and energy services",
              icon: "banknote"
            }
          ]
        }}
        professionalSupport={{
          title: "Your Energy Management Team",
          description: "Expert help to keep the lights on:",
          services: [
            {
              title: "Technical Team",
              description: "Professional engineers keep everything running smoothly",
              icon: "chartBar"
            },
            {
              title: "Money Management",
              description: "Regular checks to make sure your money is working hard",
              icon: "fileText"
            }
          ]
        }}
        reporting={{
          frequency: "Every 3 months",
          reports: [
            "How much power you've made",
            "Money reports",
            "How much carbon you've saved",
            "System performance updates"
          ]
        }}
      />
    </Layout>
  );
};

export default MyEnergyFund;

