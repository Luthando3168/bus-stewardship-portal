
import React from "react";
import IconComponent from "./IconComponent";

interface BusinessStep {
  title: string;
  description: string;
  icon: string;
}

interface BusinessModelSectionProps {
  title: string;
  description: string;
  steps: BusinessStep[];
}

const BusinessModelSection = ({ title, description, steps }: BusinessModelSectionProps) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h3 className="text-2xl font-bold text-navyblue mb-6">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="space-y-6">
        {steps.map((step, index) => (
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
  );
};

export default BusinessModelSection;
