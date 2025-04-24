import React from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { ArrowRight, Calendar, HandCoins, HelpCircle, Phone, CircleDollarSign, Shield, ShieldCheck } from 'lucide-react';

const funds = [
  {
    id: "myfarm",
    name: "MyFarm",
    description: "Supporting sustainable agriculture and farming businesses across South Africa.",
    bgGradient: "from-green-700 to-green-900",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
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
    image: "/lovable-uploads/e5869f22-682c-4c5c-bd33-5a19766a95cf.png",
    focus: [
      "Food franchise outlets",
      "Retail and service franchises",
      "Entrepreneurship development"
    ],
    minInvestment: "R 5,000",
    route: "/funds/myfranchise"
  },
  {
    id: "myfoodretail",
    name: "MyFoodRetail",
    description: "Investing in food retail businesses to improve access to quality food in underserved communities.",
    bgGradient: "from-amber-600 to-amber-800",
    image: "/lovable-uploads/0bf3e14d-cb74-4a37-b156-c269331b7a57.png",
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
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
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
      <Helmet>
        <title>Business Types You Can Own | LMCA</title>
        <meta name="description" content="Whether you're a call center agent, teacher or gogo - join us! Own real businesses with R500/month. We handle everything, your money stays safe in the bank." />
      </Helmet>
      
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Business Types You Can Own" 
            subtitle="Choose which businesses you want to own - we'll manage everything"
            centered
          />
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-navyblue to-blue-900 text-white rounded-lg shadow-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Real Example: Meet Thembi</h2>
              <div className="space-y-4">
                <p className="text-lg">
                  Thembi works at a call center earning R7,000 monthly. She saves R500 every month 
                  in her bank account through our platform. After 6 months, she owned parts of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A spaza shop in Soweto (MyFoodRetail)</li>
                  <li>A small farm in Mpumalanga (MyFarm)</li>
                  <li>Student housing in Pretoria (MyProperty)</li>
                </ul>
                <p className="text-lg font-semibold mt-4">
                  Now she earns extra money from these businesses - all while keeping her call center job!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-navyblue mb-6">How Your Money Stays Safe</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold p-3 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bank-Approved Platform</h3>
                    <p className="text-gray-600">
                      We work directly with banks. Your R500 stays in YOUR bank account until you 
                      say "YES" to a business deal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-navyblue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Anti-Fraud Checks</h3>
                    <p className="text-gray-600">
                      We check every business and person thoroughly. No chancers or 
                      skelm business allowed!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-navyblue mb-6">How This Works - In Simple Terms</h2>
              
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Think of this like a shopping mall for businesses. Your R500/month gets saved in your personal 
                  account until you decide which business you want to own.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                  <h3 className="font-semibold text-xl mb-2">Example for a Taxi Owner:</h3>
                  <p>
                    As a taxi owner, you already understand business. But instead of buying one whole new taxi for 
                    R300,000, you can use just R500/month to own a small part of many different businesses.
                  </p>
                </div>
                
                <ol className="space-y-4 list-decimal pl-5">
                  <li>
                    <span className="font-medium">Save your money</span> - Every month, put R500 into your LMCA account
                  </li>
                  <li>
                    <span className="font-medium">Pick businesses</span> - Choose from farms, shops, properties or other businesses
                  </li>
                  <li>
                    <span className="font-medium">We handle everything</span> - Our professional team manages the businesses
                  </li>
                  <li>
                    <span className="font-medium">You get profits</span> - When businesses make money, you get your share
                  </li>
                </ol>
                
                <div className="flex items-center justify-center my-6">
                  <div className="bg-navyblue text-white p-5 rounded-lg max-w-2xl">
                    <h3 className="font-bold text-xl mb-3">Your Money Stays Safe Until You Decide</h3>
                    <p>
                      We don't touch your money until you say "YES" to a specific business. 
                      It stays in your account until you choose where to invest it.
                    </p>
                  </div>
                </div>
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
                      <h4 className="font-semibold text-navyblue mb-2">What You'll Own:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {fund.focus.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Start with:</span>
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
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-navyblue">Need Help Understanding?</h3>
                <p className="text-gray-700">
                  We know this might be new to you. Our team can explain everything in simple terms, 
                  in your language, and answer all your questions.
                </p>
                <div className="space-y-3 py-2">
                  <div className="flex items-center gap-3">
                    <Phone className="text-gold" size={20} />
                    <span>Call us: 087 624 3204</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gold" size={20} />
                    <Link 
                      to="/contact"
                      className="flex items-center gap-1 text-navyblue font-medium hover:text-blue-700 transition-colors"
                    >
                      Book a free consultation <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                
                <Link 
                  to="/register" 
                  className="inline-block bg-gold text-white font-medium py-3 px-8 rounded-md hover:bg-amber-500 transition-colors mt-4"
                >
                  Start With R500/Month
                </Link>
              </div>
              <div className="bg-navyblue p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium flex items-center gap-2">
                      <HelpCircle size={18} className="text-gold" /> 
                      Do I need business experience?
                    </h4>
                    <p className="text-white/80 ml-6">No, our professionals handle everything.</p>
                  </div>
                  <div>
                    <h4 className="font-medium flex items-center gap-2">
                      <HelpCircle size={18} className="text-gold" /> 
                      When do I get profits?
                    </h4>
                    <p className="text-white/80 ml-6">When the businesses make money, we share it with all co-owners.</p>
                  </div>
                  <div>
                    <h4 className="font-medium flex items-center gap-2">
                      <HelpCircle size={18} className="text-gold" /> 
                      What if I want to stop?
                    </h4>
                    <p className="text-white/80 ml-6">You can sell your ownership back to us or to other members.</p>
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

export default ImpactFunds;
