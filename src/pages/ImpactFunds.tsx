import React from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Link } from "react-router-dom";

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
    route: "/funds/myfarm"
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
    route: "/funds/myproperty"
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
    route: "/funds/myfranchise"
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
    route: "/funds/myfoodretail"
  }
];

const ImpactFunds = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Impact Funds" 
            subtitle="A simple way to own businesses that make a difference in your community"
            centered
          />
          
          <div className="max-w-3xl mx-auto mb-16 bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-navyblue mb-6">Understanding Business Ownership</h3>
            
            <div className="space-y-6 text-gray-700">
              <p>
                When you invest in our Impact Funds, you become a real business owner. This means:
              </p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>You own actual businesses, not just shares on an app</li>
                <li>You receive regular updates about how your businesses are performing</li>
                <li>Your money grows as the businesses grow</li>
                <li>You don't have to manage anything - we handle all the work</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium text-navyblue">
                  "Think of it like owning a house but having a trusted property manager handle everything for you."
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16 bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-navyblue mb-6">Professional Support at No Extra Cost</h3>
            
            <div className="space-y-6 text-gray-700">
              <p>
                As a business owner through our platform, you get access to:
              </p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>Professional accountants who manage your business finances</li>
                <li>Banking relationships that help your business grow</li>
                <li>Expert business managers who run daily operations</li>
                <li>Regular financial reports in simple, easy-to-understand language</li>
              </ul>

              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-medium text-navyblue">
                  We take our fees from the business operations, not from your pocket. Our success depends on making your businesses successful.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16 bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-navyblue mb-6">How You Make Money</h3>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Your businesses make money in simple, understandable ways:
              </p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>Food businesses make money from selling food and drinks</li>
                <li>Property businesses earn rent from tenants</li>
                <li>Franchise businesses profit from selling products and services</li>
                <li>You receive your share of these profits regularly</li>
              </ul>

              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-navyblue">
                  The more customers support these businesses, the more money you make as an owner. It's that simple.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16 bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-navyblue mb-6">Your Easy-to-Use Digital Platform</h3>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Our MCA Direct platform makes business ownership simple:
              </p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li>View your business performance anytime</li>
                <li>Receive important updates automatically</li>
                <li>Track your profits and growth</li>
                <li>Access educational resources about business ownership</li>
                <li>Connect with other business owners in your community</li>
              </ul>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium text-navyblue">
                  Everything you need to know about your businesses is available at your fingertips, 24/7.
                </p>
              </div>
            </div>
          </div>
          
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
                      <Link to={fund.route} className="text-white">
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Ready to become a business owner? Start by browsing our available businesses.
            </p>
            <a 
              href="/register" 
              className="inline-block bg-gold text-navyblue font-medium py-3 px-8 rounded-md hover:bg-amber-400 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImpactFunds;
