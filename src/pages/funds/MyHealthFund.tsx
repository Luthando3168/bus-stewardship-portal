
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import Layout from "@/components/layout/Layout";

const MyHealthFund = () => {
  return (
    <Layout>
      <FundEducationalPage
        fundName="MyHealth Impact Fund"
        description="Focus: Investing in accessible healthcare solutions and medical facilities to improve community health outcomes."
        bgGradient="from-pink-600 to-pink-900"
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
        focus={[
          "Community health centers",
          "Medical equipment",
          "Healthcare services"
        ]}
        minInvestment="R 2,500"
        businessModel={{
          title: "How Your Healthcare Business Makes Money",
          description: "Your investment in healthcare creates sustainable income through:",
          steps: [
            {
              title: "Medical Services",
              description: "Your facilities earn from providing quality healthcare services",
              icon: "briefcase"
            },
            {
              title: "Community Integration",
              description: "Your healthcare centers serve our other business communities",
              icon: "users"
            },
            {
              title: "Equipment Leasing",
              description: "Additional income through medical equipment leasing",
              icon: "banknote"
            }
          ]
        }}
        professionalSupport={{
          title: "Your Professional Business Support Team",
          description: "Expert healthcare management support:",
          services: [
            {
              title: "Operations Management",
              description: "Professional healthcare administrators manage daily operations",
              icon: "chartBar"
            },
            {
              title: "Financial Oversight",
              description: "Specialized healthcare accountants handle financial management",
              icon: "fileText"
            }
          ]
        }}
        reporting={{
          frequency: "Quarterly",
          reports: [
            "Patient care metrics",
            "Financial statements",
            "Service quality assessments",
            "Community impact reports"
          ]
        }}
      />
    </Layout>
  );
};

export default MyHealthFund;
