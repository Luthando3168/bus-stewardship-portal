
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import { Users, Briefcase, Banknote, FileText, ChartBar } from "lucide-react";

const MyTelcoFund = () => {
  return (
    <FundEducationalPage
      fundName="MyTelco Impact Fund"
      description="Focus: Investing in telecommunications infrastructure and services to provide affordable connectivity solutions."
      bgGradient="from-blue-500 to-blue-800"
      image="https://images.unsplash.com/photo-1563770660941-20978e870e26"
      focus={[
        "Mobile network services",
        "Internet connectivity",
        "Digital infrastructure"
      ]}
      minInvestment="R 2,500"
      businessModel={{
        title: "How Your Telco Business Makes Money",
        description: "Your investment in telecommunications creates multiple revenue streams:",
        steps: [
          {
            title: "Network Services",
            description: "Your MVNO business earns from selling airtime, data, and voice services",
            icon: "briefcase"
          },
          {
            title: "Ecosystem Integration",
            description: "Your telco services can be used across our other business ventures",
            icon: "users"
          },
          {
            title: "Digital Solutions",
            description: "Additional revenue through value-added services and digital solutions",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Professional Business Support Team",
        description: "Expert telecommunications and technical support:",
        services: [
          {
            title: "Technical Management",
            description: "Professional network operators handle service delivery and maintenance",
            icon: "chartBar"
          },
          {
            title: "Financial Control",
            description: "Regular audits and financial reporting ensure transparency",
            icon: "fileText"
          }
        ]
      }}
      reporting={{
        frequency: "Monthly",
        reports: [
          "Network performance metrics",
          "Customer growth statistics",
          "Revenue analysis",
          "Service quality reports"
        ]
      }}
    />
  );
};

export default MyTelcoFund;
