
import React from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Link } from "react-router-dom";

interface FundEducationalPageProps {
  fundName: string;
  description: string;
  bgGradient: string;
  image: string;
  focus: string[];
  minInvestment: string;
}

const FundEducationalPage = ({ 
  fundName, 
  description, 
  bgGradient,
  image,
  focus,
  minInvestment 
}: FundEducationalPageProps) => {
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8">
              <img
                src={image}
                alt={fundName}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-60`}></div>
              <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
                {fundName}
              </h1>
            </div>

            <div className="space-y-12">
              {/* Understanding Business Ownership */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navyblue mb-6">Real Business Ownership Made Simple</h3>
                <div className="space-y-4 text-gray-700">
                  <p>When you invest with us, you become a real business owner. Think of it like this:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Instead of just buying numbers on an app, you own actual businesses that serve real customers</li>
                    <li>You get regular updates about how your businesses are doing, written in simple language</li>
                    <li>As your businesses grow and serve more customers, you make more money</li>
                    <li>We handle all the day-to-day work, just like having a trusted manager run your shop</li>
                  </ul>
                </div>
              </div>

              {/* Professional Support */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navyblue mb-6">Your Professional Support Team</h3>
                <div className="space-y-4 text-gray-700">
                  <p>As a business owner through our platform, you get:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Professional accountants who keep your business finances in order</li>
                    <li>Banking relationships that help your business grow</li>
                    <li>Expert managers who run daily operations</li>
                    <li>Regular updates in simple, easy-to-understand language</li>
                  </ul>
                  <div className="bg-amber-50 p-4 rounded-lg mt-4">
                    <p className="font-medium text-navyblue">
                      We take our fees from the business operations, not from your pocket. When your business succeeds, we succeed.
                    </p>
                  </div>
                </div>
              </div>

              {/* How Your Business Makes Money */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navyblue mb-6">How Your Business Makes Money</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="font-medium">Focus Areas:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    {focus.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="bg-green-50 p-4 rounded-lg mt-4">
                    <p className="font-medium text-navyblue">
                      The more customers support these businesses, the more money you make as an owner. It's that simple.
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Platform */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navyblue mb-6">Your Easy-to-Use Digital Platform</h3>
                <div className="space-y-4 text-gray-700">
                  <p>Our MCA Direct platform makes business ownership simple:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>See how your business is doing anytime</li>
                    <li>Get important updates automatically</li>
                    <li>Track your profits and growth</li>
                    <li>Learn about business ownership</li>
                    <li>Connect with other business owners in your community</li>
                  </ul>
                </div>
              </div>

              {/* Investment Details */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-navyblue mb-6">Investment Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Minimum investment:</span>
                    <span className="font-bold text-navyblue text-xl">{minInvestment}</span>
                  </div>
                  <div className="text-center mt-8">
                    <Link
                      to="/register"
                      className="inline-block bg-gold text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-500 transition-colors"
                    >
                      Start Your Journey
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FundEducationalPage;
