
import React from "react";

const HowItWorksSection = () => {
  return (
    <div className="border-t pt-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">How It Works</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center mb-4">
              <span className="font-medium">1</span>
            </div>
            <h4 className="font-medium mb-2">Select a Service</h4>
            <p className="text-sm text-gray-600">Choose from our range of domestic services.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center mb-4">
              <span className="font-medium">2</span>
            </div>
            <h4 className="font-medium mb-2">Choose a Provider</h4>
            <p className="text-sm text-gray-600">Browse profiles and select your preferred professional.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center mb-4">
              <span className="font-medium">3</span>
            </div>
            <h4 className="font-medium mb-2">Secure Payment</h4>
            <p className="text-sm text-gray-600">Pay through our secure escrow system - money is only released once you're satisfied.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
