
import React from "react";
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CircleDollarSign, Award, ShieldCheck, ArrowRight, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// GIG Coop Bank Profile Component
const GIGCoopProfile = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center">
          <CircleDollarSign className="h-5 w-5 mr-2 text-navyblue" />
          <span>GIG Coop Bank</span>
        </CardTitle>
        <CardDescription>Your financial partner on MCA Direct</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm">
          <p className="mb-3">
            GIG Coop Bank partners with MCA Direct to provide exclusive financial services to our members. 
            All loans are provided directly by GIG Coop Bank with competitive rates based on your investment portfolio.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-start">
              <Award className="h-5 w-5 mr-2 text-navyblue flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-sm">Preferential Rates</h3>
                <p className="text-xs text-gray-500">Lower interest rates for MCA Direct investors</p>
              </div>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="h-5 w-5 mr-2 text-navyblue flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-sm">Investment-Backed</h3>
                <p className="text-xs text-gray-500">Use your investments as collateral</p>
              </div>
            </div>
            <div className="flex items-start">
              <CircleDollarSign className="h-5 w-5 mr-2 text-navyblue flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-sm">Fast Approval</h3>
                <p className="text-xs text-gray-500">Streamlined process for members</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Available Loan Products
const LoanProducts = () => {
  const loanTypes = [
    {
      title: "Investment-Backed Loan",
      description: "Use your MCA Direct portfolio as collateral for a low-interest loan",
      rate: "from 8.5% p.a.",
      term: "Up to 60 months",
      min: "R20,000",
      max: "Up to 70% of portfolio value"
    },
    {
      title: "Personal Loan",
      description: "Preferential rates for MCA Direct members with quick approval",
      rate: "from 11.5% p.a.",
      term: "Up to 48 months",
      min: "R5,000",
      max: "R100,000"
    },
    {
      title: "Business Development Loan",
      description: "Funding for entrepreneurs investing in our Impact Funds",
      rate: "from 10.0% p.a.",
      term: "Up to 72 months",
      min: "R50,000",
      max: "R500,000"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Available Loan Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {loanTypes.map((loan, index) => (
          <Card key={index} className="overflow-hidden border-t-4 border-t-gold">
            <CardHeader>
              <CardTitle className="text-lg">{loan.title}</CardTitle>
              <CardDescription>{loan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Interest Rate:</span>
                  <span className="text-sm font-medium">{loan.rate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Term:</span>
                  <span className="text-sm font-medium">{loan.term}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Min Amount:</span>
                  <span className="text-sm font-medium">{loan.min}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Max Amount:</span>
                  <span className="text-sm font-medium">{loan.max}</span>
                </div>
              </div>
              <Button className="w-full mt-2 bg-navyblue hover:bg-navyblue/90">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Application Process Component
const ApplicationProcess = () => {
  const steps = [
    {
      icon: CircleDollarSign,
      title: "Apply Online",
      description: "Complete a quick online application form"
    },
    {
      icon: ShieldCheck,
      title: "Verification",
      description: "We'll verify your MCA Direct membership and portfolio"
    },
    {
      icon: Award,
      title: "Approval",
      description: "Receive a decision within 24-48 hours"
    },
    {
      icon: Building,
      title: "Disbursement",
      description: "Funds deposited directly to your account"
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-6">How to Apply</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-navyblue text-white rounded-full p-3 mb-4">
              <step.icon className="h-6 w-6" />
            </div>
            <h3 className="font-medium mb-1">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
            {index < steps.length - 1 && (
              <ArrowRight className="h-4 w-4 text-gray-400 hidden md:block mt-4 rotate-90 md:rotate-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const UserLoans = () => {
  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto space-y-8 py-6">
        <h1 className="text-2xl font-bold text-navyblue">Loans & Financing</h1>
        <p className="text-gray-600">
          Access exclusive loan products designed specifically for MCA Direct members. Leverage your investments 
          for better rates and faster approvals.
        </p>
        
        <GIGCoopProfile />
        
        <LoanProducts />
        
        <div className="my-10">
          <ApplicationProcess />
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
          <h3 className="font-medium text-lg mb-2">Need Assistance?</h3>
          <p className="mb-4">Our financial advisors are ready to help you choose the best loan option for your needs</p>
          <Button variant="outline" className="border-navyblue text-navyblue hover:bg-navyblue hover:text-white">
            Schedule a Consultation <Calendar className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserLoans;
