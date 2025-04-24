import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
}

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case "users":
      return <Users className="w-6 h-6" />;
    case "briefcase":
      return <Briefcase className="w-6 h-6" />;
    case "banknote":
      return <Banknote className="w-6 h-6" />;
    case "fileText":
      return <FileText className="w-6 h-6" />;
    case "chartBar":
      return <ChartBar className="w-6 h-6" />;
    default:
      return null;
  }
};

const FundEducationalPage = ({
  fundName,
  description,
  bgGradient,
  image,
  focus,
  minInvestment,
  businessModel,
  professionalSupport,
  reporting
}: FundEducationalPageProps) => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link 
                to="/impact-funds" 
                className="inline-flex items-center text-navyblue hover:text-blue-700 transition-colors mb-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Impact Funds
              </Link>
            </div>

            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8">
              <img
                src={image}
                alt={fundName}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-60`}></div>
              <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
                {fundName}
              </h1>
            </div>

            <div className="space-y-12">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navyblue mb-6">{businessModel.title}</h3>
                <p className="text-gray-700 mb-6">{businessModel.description}</p>
                <div className="space-y-6">
                  {businessModel.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gray-100 rounded-lg">
                        <IconComponent name={step.icon} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">{step.title}</h4>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navyblue mb-6">{professionalSupport.title}</h3>
                <p className="text-gray-700 mb-6">{professionalSupport.description}</p>
                <div className="space-y-6">
                  {professionalSupport.services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gray-100 rounded-lg">
                        <IconComponent name={service.icon} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">{service.title}</h4>
                        <p className="text-gray-700">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navyblue mb-6">Regular Business Reports</h3>
                <p className="text-gray-700 mb-4">
                  Every {reporting.frequency}, you receive professional reports about your business:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {reporting.reports.map((report, index) => (
                    <li key={index}>{report}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navyblue mb-6">Investment Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Minimum investment:</span>
                    <span className="font-bold text-navyblue text-xl">{minInvestment}</span>
                  </div>
                  <div className="text-center mt-8">
                    <Link
                      to="/register"
                      className="inline-block bg-gold text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-500 transition-colors"
                    >
                      Start Your Journey
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FundEducationalPage;
