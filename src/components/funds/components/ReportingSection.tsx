
import React from "react";

interface ReportingProps {
  frequency: string;
  reports: string[];
}

const ReportingSection = ({ frequency, reports }: ReportingProps) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h3 className="text-2xl font-bold text-navyblue mb-6">Regular Business Reports</h3>
      <p className="text-gray-700 mb-4">
        {frequency}, you receive professional reports about your business:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {reports.map((report, index) => (
          <li key={index}>{report}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReportingSection;
