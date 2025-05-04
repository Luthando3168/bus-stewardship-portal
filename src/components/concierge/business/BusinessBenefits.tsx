
import React from "react";

const BusinessBenefits = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-navyblue mb-3">Why Choose Our Business Services?</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
          <span>Expert professionals with years of industry experience</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
          <span>Tailored solutions designed for your specific business needs</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
          <span>Competitive pricing with transparent fee structure</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
          <span>Ongoing support and advisory services</span>
        </li>
      </ul>
    </div>
  );
};

export default BusinessBenefits;
