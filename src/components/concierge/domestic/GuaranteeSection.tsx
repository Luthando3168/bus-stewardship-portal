
import React from "react";
import { Check } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <div className="border-t border-b py-6 my-6">
      <h3 className="text-lg font-medium mb-4">Our Guarantee</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
            <Check className="h-3.5 w-3.5" />
          </div>
          <div>
            <h4 className="font-medium text-sm">Verified Professionals</h4>
            <p className="text-sm text-gray-600">All service providers undergo rigorous background checks.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
            <Check className="h-3.5 w-3.5" />
          </div>
          <div>
            <h4 className="font-medium text-sm">Secure Payments</h4>
            <p className="text-sm text-gray-600">Our escrow system ensures you only pay for satisfactory service.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
            <Check className="h-3.5 w-3.5" />
          </div>
          <div>
            <h4 className="font-medium text-sm">Dispute Resolution</h4>
            <p className="text-sm text-gray-600">Our support team helps resolve any issues that may arise.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center flex-shrink-0">
            <Check className="h-3.5 w-3.5" />
          </div>
          <div>
            <h4 className="font-medium text-sm">Easy Rescheduling</h4>
            <p className="text-sm text-gray-600">Flexibility to change appointments with 24-hour notice.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
