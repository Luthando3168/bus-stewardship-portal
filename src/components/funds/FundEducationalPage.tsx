
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "./components/PageHeader";
import BusinessModelSection from "./components/BusinessModelSection";
import SupportSection from "./components/SupportSection";
import ReportingSection from "./components/ReportingSection";
import InvestmentDetails from "./components/InvestmentDetails";
import { fundImages } from "@/data/impact-funds";

interface BusinessStep {
  title: string;
  description: string;
  icon: string;
}

interface ProfessionalService {
  title: string;
  description: string;
  icon: string;
}

interface ReportingInfo {
  frequency: string;
  reports: string[];
}

interface BusinessModel {
  title: string;
  description: string;
  steps: BusinessStep[];
}

interface ProfessionalSupport {
  title: string;
  description: string;
  services: ProfessionalService[];
}

interface FundEducationalPageProps {
  fundName: string;
  description: string;
  bgGradient: string;
  image: string;
  focus: string[];
  minInvestment: string;
  businessModel: BusinessModel;
  professionalSupport: ProfessionalSupport;
  reporting: ReportingInfo;
  businessManagement?: {
    title: string;
    description: string;
    services: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

const FundEducationalPage = ({
  fundName,
  description,
  bgGradient,
  image,
  minInvestment,
  businessModel,
  professionalSupport,
  businessManagement,
  reporting,
}: FundEducationalPageProps) => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <PageHeader 
              image={image} 
              bgGradient={bgGradient} 
              fundName={fundName} 
            />

            <div className="space-y-12">
              <BusinessModelSection
                title={businessModel.title}
                description={businessModel.description}
                steps={businessModel.steps}
              />

              <SupportSection
                title={professionalSupport.title}
                description={professionalSupport.description}
                services={professionalSupport.services}
              />

              {businessManagement && (
                <SupportSection
                  title={businessManagement.title}
                  description={businessManagement.description}
                  services={businessManagement.services}
                />
              )}

              <ReportingSection
                frequency={reporting.frequency}
                reports={reporting.reports}
              />

              <InvestmentDetails minInvestment={minInvestment} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FundEducationalPage;
