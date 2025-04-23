
import React from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";

// Define the impact funds data structure
const funds = [
  {
    name: "MyFarm Impact Fund",
    description: "Focus: Supporting sustainable agriculture and farming businesses across South Africa.",
    bgGradient: "from-green-700 to-green-900",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8",
    focus: [
      "Sustainable farming operations",
      "Food security projects",
      "Organic and mixed-crop ventures"
    ],
    minInvestment: "R 1,000",
  },
  {
    name: "MyProperty Impact Fund",
    description: "Focus: Investing in community-focused real estate, affordable housing and property businesses.",
    bgGradient: "from-blue-700 to-blue-900",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11",
    focus: [
      "Affordable & mixed-use housing",
      "Community property projects",
      "Student accommodation"
    ],
    minInvestment: "R 2,000",
  },
  {
    name: "MyFranchise Impact Fund",
    description: "Focus: Investing in franchise businesses with proven operational models, creating jobs and business skills.",
    bgGradient: "from-red-600 to-red-800",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2",
    focus: [
      "Food franchise outlets",
      "Retail and service franchises",
      "Entrepreneurship development"
    ],
    minInvestment: "R 1,500",
  },
  {
    name: "MyFoodRetail Impact Fund",
    description: "Focus: Investing in food retail businesses to improve access to quality food in underserved communities.",
    bgGradient: "from-amber-600 to-amber-800",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a",
    focus: [
      "Grocery stores",
      "Food distribution",
      "Community markets"
    ],
    minInvestment: "R 1,800",
  }
];

const ImpactFunds = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Impact Funds" 
            subtitle="Explore our curated selection of impact funds designed to create meaningful change while delivering returns."
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funds.map((fund, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-48">
                  <img
                    src={fund.image}
                    alt={fund.name}
                    className="w-full h-full object-cover brightness-110 contrast-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${fund.bgGradient} opacity-40`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{fund.name}</h3>
                  <p className="text-gray-600 mb-4">{fund.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mt-4 mb-2">Focus Areas:</h4>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    {fund.focus.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Minimum investment:</span>
                      <span className="font-bold text-blue-800">{fund.minInvestment}</span>
                    </div>
                    
                    <button className="w-full mt-4 bg-navyblue text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Interested in investing in these impact funds? Contact our team for more information.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gold text-navyblue font-medium py-3 px-8 rounded-md hover:bg-amber-400 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImpactFunds;
