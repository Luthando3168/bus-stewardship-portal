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
    description: "Investing in mini shopping complexes and food retail businesses to improve access to quality food in underserved communities.",
    bgGradient: "from-amber-600 to-amber-800",
    image: "/lovable-uploads/0bf3e14d-cb74-4a37-b156-c269331b7a57.png",
    focus: [
      "Mini shopping complexes",
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
      
      <div className="bg-gradient-to-b from-lightgray to-white min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-navyblue mb-4 animate-fade-in">
              Business Types You Can Own
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-slow">
              Choose which businesses you want to own - we'll manage everything
            </p>
            <div className="h-1 w-32 bg-gold mx-auto mt-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-navyblue to-blue-900 rounded-2xl p-8 md:p-10 mb-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-gold" />
                How Your Money Stays Safe
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <h3 className="font-semibold text-xl mb-4 text-gold">Bank-Approved Platform</h3>
                  <p className="text-gray-100">
                    We work directly with banks. Your R500 stays in YOUR bank account until you 
                    say "YES" to a business deal.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <h3 className="font-semibold text-xl mb-4 text-gold">Anti-Fraud Checks</h3>
                  <p className="text-gray-100">
                    We check every business and person thoroughly. No chancers or 
                    skelm business allowed!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
              <h2 className="text-2xl font-bold text-navyblue mb-6">How This Works - In Simple Terms</h2>
              
              <div className="space-y-8">
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Through MCA Direct, you become part of the Luthando Maduna Foundation's Impact Investment Programme. 
                    This programme helps you own real businesses while creating positive change in our communities.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-xl border border-gold/20">
                  <h3 className="font-semibold text-xl mb-4 text-navyblue">Bank Partnership for Impact:</h3>
                  <p className="text-gray-700 mb-4">
                    Our foundation partners with a leading South African bank to ensure professional, transparent, 
                    and secure management of our Impact Investment Programme.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <span>Secure, dedicated account management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleDollarSign className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <span>Professional fund tracking</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-navyblue text-white p-6 rounded-xl">
                  <h3 className="font-semibold text-xl mb-4 text-gold">Making Money While Making a Difference:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Your businesses create jobs in communities",
                      "Young people get work experience and training",
                      "Communities get better access to services",
                      "As communities grow stronger, your businesses do better"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="bg-gold/20 p-2 rounded">
                          <HandCoins className="w-5 h-5 text-gold" />
                        </div>
                        <span className="text-gray-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Save your money",
                      content: "Every month, R500 goes into your dedicated bank account created by LMCA with our partner bank."
                    },
                    {
                      title: "Pick businesses",
                      content: "Choose from farms, shops, properties or other businesses that help build stronger communities."
                    },
                    {
                      title: "We handle everything",
                      content: "Our professional team manages the businesses and makes sure they benefit both you and the community."
                    },
                    {
                      title: "You get profits",
                      content: "When businesses make money, you get your share, while knowing you're helping create jobs and opportunities."
                    }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="bg-gold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-navyblue">{step.title}</h4>
                        <p className="text-gray-600">{step.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-navyblue to-blue-900 text-white p-8 rounded-2xl shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-4">Want to Learn More About Your Impact?</h3>
              <p className="mb-6">
                Visit our Foundation page to see how your business ownership helps create positive 
                change in communities across South Africa.
              </p>
              <Link 
                to="/foundation" 
                className="inline-flex items-center gap-2 bg-gold hover:bg-amber-500 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Learn About Our Impact
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navyblue mb-6">
                Meet Thembi: From Call Centre Agent to Business Owner
              </h3>
              <p className="text-gray-700 mb-6">
                Thembi works as a call centre agent in Johannesburg, earning R8,000 monthly. Like many South Africans, 
                she dreamed of owning businesses but thought it was out of reach. That's until she discovered MCA Direct.
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-navyblue mb-4">Here's How We Helped Thembi:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-gold" />
                    <div>
                      <span className="font-medium text-navyblue">Smart Planning:</span>
                      <p className="text-gray-600">
                        We created a 6-month investment plan where Thembi saves just R500 monthly in her bank account.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-gold" />
                    <div>
                      <span className="font-medium text-navyblue">Bank Partnership:</span>
                      <p className="text-gray-600">
                        We worked with her bank to set up a dedicated savings pocket, making it easy to track her 
                        progress towards business ownership.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CircleDollarSign className="w-6 h-6 text-gold" />
                    <div>
                      <span className="font-medium text-navyblue">Portfolio Building:</span>
                      <p className="text-gray-600">
                        After 6 months, Thembi had R3,000 saved. We helped her invest in:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                        <li>A mini food outlet in her community (MyFoodRetail)</li>
                        <li>A small share in a property trust (MyProperty)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg font-medium text-navyblue mt-6">
                Today, Thembi still works her regular job while earning extra income from her business 
                investments - all managed professionally by our team.
              </p>
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
