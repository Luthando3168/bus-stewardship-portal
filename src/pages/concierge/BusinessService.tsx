
import React from 'react';
import Layout from "@/components/layout/Layout";

interface BusinessServiceProps {
  professional: {
    name: string;
    title: string;
    company: string;
    description: string;
    services: string[];
    category: string;
    image: string;
  };
}

const BusinessService: React.FC<BusinessServiceProps> = ({ professional }) => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src={professional.image}
              alt={professional.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{professional.name}</h3>
              <p className="text-gray-600">{professional.title}, {professional.company}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{professional.description}</p>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Services</h4>
            <ul className="list-disc list-inside text-gray-700">
              {professional.services?.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Category: {professional.category}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessService;
