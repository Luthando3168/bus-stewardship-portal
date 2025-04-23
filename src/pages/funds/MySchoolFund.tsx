
import React from "react";
import FundEducationalPage from "@/components/funds/FundEducationalPage";
import { Users, Briefcase, Banknote, FileText, ChartBar } from "lucide-react";

const MySchoolFund = () => {
  return (
    <FundEducationalPage
      fundName="MySchool Impact Fund"
      description="Focus: Investing in quality education infrastructure and learning institutions to enhance community development through education."
      bgGradient="from-indigo-700 to-indigo-900"
      image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
      focus={[
        "Educational facilities",
        "Learning resources",
        "Skills development centers"
      ]}
      minInvestment="R 1,500"
      businessModel={{
        title: "How Your Education Business Makes Money",
        description: "Your investment in education creates sustainable revenue through:",
        steps: [
          {
            title: "Education Services",
            description: "Your schools earn through providing quality education and training",
            icon: "briefcase"
          },
          {
            title: "Community Integration",
            description: "Your facilities can train workers for our other business ventures",
            icon: "users"
          },
          {
            title: "Resource Optimization",
            description: "Additional income through resource sharing and facility usage",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Professional Business Support Team",
        description: "Expert educational management support:",
        services: [
          {
            title: "Education Management",
            description: "Professional educators and administrators handle operations",
            icon: "chartBar"
          },
          {
            title: "Financial Control",
            description: "Education finance specialists manage accounting and reporting",
            icon: "fileText"
          }
        ]
      }}
      reporting={{
        frequency: "Quarterly",
        reports: [
          "Educational performance metrics",
          "Financial statements",
          "Student progress reports",
          "Community impact assessments"
        ]
      }}
    />
  );
};

export default MySchoolFund;
