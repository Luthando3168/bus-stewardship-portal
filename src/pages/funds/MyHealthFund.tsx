
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const MyHealthFund = () => {
  return (
    <Layout>
      <Helmet>
        <title>MyHealth Impact Fund | LMCA</title>
        <meta name="description" content="Own clinics and healthcare businesses that help keep our communities healthy." />
      </Helmet>
      
      <FundEducationalPage
        fundName="MyHealth Impact Fund"
        description="Own clinics and healthcare businesses that help keep our communities healthy."
        bgGradient="from-pink-600 to-pink-900"
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
        focus={[
          "Local health centers",
          "Medical equipment",
          "Healthcare services"
        ]}
        minInvestment="R 2,500"
        businessModel={{
          title: "How Your Healthcare Business Makes Money",
          description: "Your healthcare investment works in several ways:",
          steps: [
            {
              title: "Health Services",
              description: "Your facilities earn by providing quality healthcare to people",
              icon: "briefcase"
            },
            {
              title: "Working Together",
              description: "Your clinics serve people from our other businesses too",
              icon: "users"
            },
            {
              title: "Equipment Income",
              description: "Make extra money by letting others use your medical equipment",
              icon: "banknote"
            }
          ]
        }}
        professionalSupport={{
          title: "Your Healthcare Team",
          description: "Expert help to run everything:",
          services: [
            {
              title: "Clinic Management",
              description: "Professional healthcare managers run daily operations",
              icon: "chartBar"
            },
            {
              title: "Money Management",
              description: "Healthcare finance experts handle all the money matters",
              icon: "fileText"
            }
          ]
        }}
        reporting={{
          frequency: "Every 3 months",
          reports: [
            "How many patients you've helped",
            "Money reports",
            "Service quality checks",
            "Community impact updates"
          ]
        }}
      />
    </Layout>
  );
};

export default MyHealthFund;

