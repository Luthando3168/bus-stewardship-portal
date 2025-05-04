
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const MyTelcoFund = () => {
  return (
    <Layout>
      <Helmet>
        <title>MyTelco Impact Fund | LMCA</title>
        <meta name="description" content="Own internet and phone businesses that connect our communities." />
      </Helmet>
      
      <FundEducationalPage
        fundName="MyTelco Impact Fund"
        description="Own internet and phone businesses that connect our communities."
        bgGradient="from-blue-500 to-blue-800"
        image="https://images.unsplash.com/photo-1563770660941-20978e870e26"
        focus={[
          "Mobile network services",
          "Internet connections",
          "Digital solutions"
        ]}
        minInvestment="R 2,500"
        businessModel={{
          title: "How Your Telco Business Makes Money",
          description: "Your telecom investment brings in money in different ways:",
          steps: [
            {
              title: "Network Services",
              description: "Your business makes money selling airtime, data, and calls",
              icon: "briefcase"
            },
            {
              title: "Working Together",
              description: "Your services can be used by all our other businesses too",
              icon: "users"
            },
            {
              title: "Extra Services",
              description: "Make more money through special digital services",
              icon: "banknote"
            }
          ]
        }}
        professionalSupport={{
          title: "Your Telco Management Team",
          description: "Expert help at your service:",
          services: [
            {
              title: "Technical Support",
              description: "Professional network operators keep everything running smoothly",
              icon: "chartBar"
            },
            {
              title: "Money Management",
              description: "Regular checks to make sure your money is handled properly",
              icon: "fileText"
            }
          ]
        }}
        businessManagement={{
          title: "Business Management Services",
          description: "Our expert team manages your telecom business operations:",
          services: [
            {
              title: "Network Operations",
              description: "24/7 monitoring and maintenance of all network infrastructure",
              icon: "chartBar"
            },
            {
              title: "Customer Service",
              description: "Professional call center and customer support teams handle all client interactions",
              icon: "users"
            },
            {
              title: "Technology Updates",
              description: "Regular upgrades to your network equipment and software systems",
              icon: "briefcase"
            }
          ]
        }}
        reporting={{
          frequency: "Monthly",
          reports: [
            "How well the network is running",
            "New customer numbers",
            "Money reports",
            "Service quality updates"
          ]
        }}
      />
    </Layout>
  );
};

export default MyTelcoFund;
