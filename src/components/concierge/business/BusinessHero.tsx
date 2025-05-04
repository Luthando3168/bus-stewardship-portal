
import React from "react";

const BusinessHero = () => {
  return (
    <div className="relative rounded-xl overflow-hidden h-48 md:h-60 mb-6">
      <div className="absolute inset-0 bg-gradient-to-r from-navyblue to-blue-700 opacity-90"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Professional Business Support</h2>
        <p className="text-sm md:text-base max-w-md">
          Access expert business services and professionals to help your company thrive in today's competitive landscape
        </p>
      </div>
    </div>
  );
};

export default BusinessHero;
