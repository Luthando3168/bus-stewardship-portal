
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FundEducationalPage from "@/components/funds/FundEducationalPage";

const MyPropertyFund = () => {
  return (
    <FundEducationalPage
      fundName="MyProperty"
      description="Own property that makes you money every month - from affordable housing to student accommodation."
      bgGradient="from-blue-700 to-blue-900"
      image="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
      focus={[
        "Housing that people can afford",
        "Mixed-use property projects",
        "Student accommodation"
      ]}
      minInvestment="R 2,000"
      businessModel={{
        title: "How Your Property Makes You Money",
        description: "Your property investment brings in money in different ways:",
        steps: [
          {
            title: "Monthly Rent",
            description: "Get money every month from people and businesses renting your properties",
            icon: "briefcase"
          },
          {
            title: "Smart Business Mix",
            description: "Your properties can house our food shops and other businesses - double the income!",
            icon: "users"
          },
          {
            title: "Growing Value",
            description: "As areas develop, your properties become worth more over time",
            icon: "banknote"
          }
        ]
      }}
      professionalSupport={{
        title: "Your Property Management Team",
        description: "Expert support to handle everything:",
        services: [
          {
            title: "Property Care",
            description: "Professional managers handle tenants and keep your buildings in good shape",
            icon: "chartBar"
          },
          {
            title: "Money Management",
            description: "Regular checks to make sure your money is handled properly",
            icon: "fileText"
          }
        ]
      }}
      businessManagement={{
        title: "Business Management Services",
        description: "Our expert team handles all property operations:",
        services: [
          {
            title: "Tenant Management",
            description: "We handle all tenant selection, contracts, payments and relationship management",
            icon: "users"
          },
          {
            title: "Maintenance & Repairs",
            description: "Regular upkeep and immediate response to any property issues",
            icon: "briefcase"
          },
          {
            title: "Property Development",
            description: "Strategic improvements and expansions to maximize your property value",
            icon: "chartBar"
          }
        ]
      }}
      reporting={{
        frequency: "Every 6 months",
        reports: [
          "Professional money reports",
          "How full your properties are",
          "Maintenance updates",
          "What your properties are worth"
        ]
      }}
    >
      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-navyblue mb-3">Featured Investment Opportunity</h2>
          <h3 className="text-xl text-blue-700 mb-4">Balwin Properties Development Portfolio</h3>
          <p className="text-gray-600 mb-6">
            Invest in South Africa's premier residential developments by Balwin Properties. 
            These high-quality developments feature modern amenities, excellent locations,
            and strong rental demand - perfect for steady returns.
          </p>
          <Link to="/funds/property/balwin">
            <Button size="lg" className="bg-navyblue hover:bg-blue-800">
              View Balwin Developments
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-xl mb-1">R2,000</div>
            <p className="text-gray-600">Minimum investment</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-xl mb-1">13-15%</div>
            <p className="text-gray-600">Projected annual returns</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm text-center">
            <div className="text-blue-600 font-bold text-xl mb-1">7+ Locations</div>
            <p className="text-gray-600">Premium developments across SA</p>
          </div>
        </div>
      </div>
    </FundEducationalPage>
  );
};

export default MyPropertyFund;
