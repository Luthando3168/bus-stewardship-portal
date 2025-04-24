
import React from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const funds = [
  {
    id: "myfarm",
    name: "MyFarm",
    description: "Supporting sustainable agriculture and farming businesses across South Africa.",
    bgGradient: "from-green-700 to-green-900",
    image: "/lovable-uploads/4288eeba-c60b-42f1-a156-13a7ef6df992.png",
    focus: [
      "Sustainable farming operations",
      "Food security projects",
      "Mixed-crop ventures"
    ],
    minInvestment: "R 1,000",
    route: "/funds/myfarm"
  },
  {
    id: "myproperty",
    name: "MyProperty",
    description: "Investing in community-focused real estate, affordable housing and property businesses.",
    bgGradient: "from-blue-700 to-blue-900",
    image: "/lovable-uploads/3bf955d5-5ab4-48d1-be77-4c951cf953ca.png",
    focus: [
      "Affordable & mixed-use housing",
      "Community property projects",
      "Student accommodation"
    ],
    minInvestment: "R 2,000",
    route: "/funds/myproperty"
  },
  {
    id: "myfranchise",
    name: "MyFranchise",
    description: "Investing in franchise businesses with proven operational models, creating jobs and business skills.",
    bgGradient: "from-red-600 to-red-800",
    image: "/lovable-uploads/b37923d0-335b-46bc-9852-7d271458f2a9.png",
    focus: [
      "Food franchise outlets",
      "Retail and service franchises",
      "Entrepreneurship development"
    ],
    minInvestment: "R 1,500",
    route: "/funds/myfranchise"
  },
  {
    id: "myfoodretail",
    name: "MyFoodRetail",
    description: "Investing in food retail businesses to improve access to quality food in underserved communities.",
    bgGradient: "from-amber-600 to-amber-800",
    image: "/lovable-uploads/36f1e3ec-1682-4086-8e11-d7c4e572618b.png",
    focus: [
      "Grocery stores",
      "Food distribution",
      "Community markets"
    ],
    minInvestment: "R 5,000",
    route: "/funds/myfoodretail"
  },
  {
    id: "mytelco",
    name: "MyTelco",
    description: "Investing in telecommunications infrastructure and services to provide affordable connectivity solutions.",
    bgGradient: "from-blue-500 to-blue-800",
    image: "/lovable-uploads/402c56a2-5e59-41c1-8652-099f61ae559b.png",
    focus: [
      "Mobile network services",
      "Internet connectivity",
      "Digital infrastructure"
    ],
    minInvestment: "R 1,000",
    route: "/funds/mytelco"
  },
  {
    id: "myhealth",
    name: "MyHealth",
    description: "Investing in accessible healthcare solutions and medical facilities to improve community health outcomes.",
    bgGradient: "from-pink-600 to-pink-900",
    image: "/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png",
    focus: [
      "Community health centers",
      "Medical equipment",
      "Healthcare services"
    ],
    minInvestment: "R 5,000",
    route: "/funds/myhealth"
  },
  {
    id: "myeducation",
    name: "MySchool",
    description: "Investing in quality education infrastructure and learning institutions to enhance community development through education.",
    bgGradient: "from-indigo-700 to-indigo-900",
    image: "/lovable-uploads/aa792d14-7473-4673-89cf-c3f6e1d15711.png",
    focus: [
      "Educational facilities",
      "Learning resources",
      "Skills development centers"
    ],
    minInvestment: "R 5,000",
    route: "/funds/myschool"
  }
];

const ImpactFunds = () => {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Impact Funds" 
            subtitle="Own multiple businesses that make a difference in your community"
            centered
          />
          
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-navyblue mb-4">Business Ownership Made Simple</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    • Save up in your account to reach minimum investment amounts
                  </li>
                  <li className="flex items-center gap-2">
                    • Start with any amount and build your portfolio gradually
                  </li>
                  <li className="flex items-center gap-2">
                    • Professional team manages operations
                  </li>
                  <li className="flex items-center gap-2">
                    • Regular profit distributions based on funds available
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navyblue mb-4">Professional Support</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    • Expert financial management
                  </li>
                  <li className="flex items-center gap-2">
                    • Dedicated business managers
                  </li>
                  <li className="flex items-center gap-2">
                    • Regular performance updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {funds.map((fund, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={fund.image}
                    alt={fund.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${fund.bgGradient} opacity-60`}></div>
                  <h3 className="absolute bottom-0 left-0 right-0 p-4 text-xl font-bold text-white">
                    {fund.name}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{fund.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navyblue mb-2">Focus Areas:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {fund.focus.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Minimum investment:</span>
                        <span className="font-bold text-navyblue">{fund.minInvestment}</span>
                      </div>
                      
                      <Link 
                        to={fund.route}
                        className="block w-full text-center bg-navyblue text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/register" 
              className="inline-block bg-gold text-white font-medium py-3 px-8 rounded-md hover:bg-amber-500 transition-colors"
            >
              Start Your Investment Journey
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImpactFunds;
