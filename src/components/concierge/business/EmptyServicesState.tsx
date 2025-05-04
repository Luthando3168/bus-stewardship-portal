
import React from "react";
import { Briefcase } from "lucide-react";

const EmptyServicesState = () => {
  return (
    <div className="text-center py-12 border rounded-lg bg-gray-50">
      <div className="text-gray-400 mb-4">
        <Briefcase className="mx-auto h-12 w-12" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No services found</h3>
      <p className="text-gray-500">Try adjusting your search query</p>
    </div>
  );
};

export default EmptyServicesState;
