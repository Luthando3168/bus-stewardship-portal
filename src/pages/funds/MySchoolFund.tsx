
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const MySchoolFund = () => {
  return (
    <Layout>
      <Helmet>
        <title>MySchool Impact Fund | LMCA</title>
        <meta name="description" content="Own schools and training centers that help our communities grow through education." />
      </Helmet>
      
      <FundEducationalPage
        fundName="MySchool Impact Fund"
        description="Own schools and training centers that help our communities grow through education."
        bgGradient="from-indigo-700 to-indigo-900"
        image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
        focus={[
          "Schools and learning centers",
          "Teaching resources",
          "Skills training centers"
        ]}
        minInvestment="R 1,500"
        businessModel={{
          title: "How Your School Makes Money",
          description: "Your education business brings in money while helping people learn:",
          steps: [
            {
              title: "Teaching Services",
              description: "Your schools earn by providing quality education and training",
              icon: "briefcase"
            },
            {
              title: "Working Together",
              description: "Your centers can train workers for our other businesses - everyone wins!",
              icon: "users"
            },
            {
              title: "Smart Use",
              description: "Extra money comes from sharing resources and using facilities wisely",
              icon: "banknote"
            }
          ]
        }}
        professionalSupport={{
          title: "Your School Management Team",
          description: "Expert help to run everything smoothly:",
          services: [
            {
              title: "School Management",
              description: "Professional educators and managers handle daily operations",
              icon: "chartBar"
            },
            {
              title: "Money Management",
              description: "Education finance experts handle the money side",
              icon: "fileText"
            }
          ]
        }}
        reporting={{
          frequency: "Every 3 months",
          reports: [
            "How well students are doing",
            "Money reports",
            "School progress updates",
            "How you're helping the community"
          ]
        }}
      />
    </Layout>
  );
};

export default MySchoolFund;

