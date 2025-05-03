
import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { ArrowRight, Calendar, HandCoins, HelpCircle, Phone, CircleDollarSign, Shield, ShieldCheck } from 'lucide-react';

const funds = [{
  id: "myfarm",
  name: "MyFarm",
  description: "Supporting sustainable agriculture and farming businesses across South Africa.",
  bgGradient: "from-green-700 to-green-900",
  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  focus: ["Sustainable farming operations", "Food security projects", "Mixed-crop ventures"],
  minInvestment: "R 1,000",
  route: "/funds/myfarm"
}, {
  id: "myproperty",
  name: "MyProperty",
  description: "Investing in community-focused real estate, affordable housing and property businesses.",
  bgGradient: "from-blue-700 to-blue-900",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  focus: ["Affordable & mixed-use housing", "Community property projects", "Student accommodation"],
  minInvestment: "R 2,000",
  route: "/funds/myproperty"
}, {
  id: "myfranchise",
  name: "MyFranchise",
  description: "Investing in franchise businesses with proven operational models, creating jobs and business skills.",
  bgGradient: "from-red-600 to-red-800",
  image: "/lovable-uploads/e5869f22-682c-4c5c-bd33-5a19766a95cf.png",
  focus: ["Food franchise outlets", "Retail and service franchises", "Entrepreneurship development"],
  minInvestment: "R 5,000",
  route: "/funds/myfranchise"
}, {
  id: "myfoodretail",
  name: "MyFoodRetail",
  description: "Investing in mini shopping complexes and food retail businesses to improve access to quality food in underserved communities.",
  bgGradient: "from-amber-600 to-amber-800",
  image: "/lovable-uploads/0bf3e14d-cb74-4a37-b156-c269331b7a57.png",
  focus: ["Mini shopping complexes", "Food distribution", "Community markets"],
  minInvestment: "R 5,000",
  route: "/funds/myfoodretail"
}, {
  id: "mytelco",
  name: "MyTelco",
  description: "Investing in telecommunications infrastructure and services to provide affordable connectivity solutions.",
  bgGradient: "from-blue-500 to-blue-800",
  image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  focus: ["Mobile network services", "Internet connectivity", "Digital infrastructure"],
  minInvestment: "R 1,000",
  route: "/funds/mytelco"
}, {
  id: "myhealth",
  name: "MyHealth",
  description: "Investing in accessible healthcare solutions and medical facilities to improve community health outcomes.",
  bgGradient: "from-pink-600 to-pink-900",
  image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  focus: ["Community health centers", "Medical equipment", "Healthcare services"],
  minInvestment: "R 5,000",
  route: "/funds/myhealth"
}, {
  id: "myeducation",
  name: "MySchool",
  description: "Investing in quality education infrastructure and learning institutions to enhance community development through education.",
  bgGradient: "from-indigo-700 to-indigo-900",
  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  focus: ["Educational facilities", "Learning resources", "Skills development centers"],
  minInvestment: "R 5,000",
  route: "/funds/myschool"
}];

const ImpactFunds = () => {
  return <Layout>
      <Helmet>
        <title>Business Types You Can Own | LMCA</title>
        <meta name="description" content="Whether you're a call center agent, teacher or gogo - join us! Own real businesses with R500/month. We handle everything, your money stays safe in the bank." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-lightgray to-white min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-navyblue mb-4 animate-fade-in">
              Impact Investment Funds
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-slow">
              Join our mission to transform communities through strategic business ownership
            </p>
            <div className="h-1 w-32 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-navyblue to-blue-900 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Your Gateway to Business Ownership</h2>
              
              <div className="bg-white/10 p-6 rounded-xl mb-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="bg-gold/20 p-4 rounded-lg">
                      <h3 className="text-xl font-bold text-gold mb-2">What is an Impact Fund?</h3>
                      <HandCoins className="h-16 w-16 text-gold mx-auto my-3" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg leading-relaxed mb-6">
                      Think of an Impact Fund like this: It's your money working for both your pocket AND your community. 
                      Unlike regular investments that only care about making money, these funds put your money into businesses 
                      that help solve problems in your community while still giving you returns.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      With our funds, you can own parts of real businesses that professionals run for you. 
                      You pick what kind of business you want to own, we handle all the work, and you get 
                      a share of the profits while helping make South African communities better.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 p-6 rounded-xl text-center transform transition-transform hover:scale-105">
                  <CircleDollarSign className="h-10 w-10 mx-auto mb-4 text-gold" />
                  <div className="text-gold text-2xl font-bold mb-2">R500</div>
                  <p className="text-white/90">Monthly minimum investment to start building your portfolio</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl text-center transform transition-transform hover:scale-105">
                  <ShieldCheck className="h-10 w-10 mx-auto mb-4 text-gold" />
                  <div className="text-gold text-2xl font-bold mb-2">7+</div>
                  <p className="text-white/90">Different business sectors to choose from</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl text-center transform transition-transform hover:scale-105">
                  <Shield className="h-10 w-10 mx-auto mb-4 text-gold" />
                  <div className="text-gold text-2xl font-bold mb-2">100%</div>
                  <p className="text-white/90">Professional management of your investments</p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navyblue mb-4">Choose Your Investment Focus</h2>
            <p className="text-lg text-gray-600 mb-8">
              Each fund represents a different sector of the economy, allowing you to invest 
              in businesses that align with your interests and values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {funds.map((fund, index) => <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img src={fund.image} alt={fund.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
                        {fund.focus.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Start with:</span>
                        <span className="font-bold text-navyblue">{fund.minInvestment}</span>
                      </div>
                      
                      <Link to={fund.route} className="block w-full text-center bg-navyblue text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center bg-gradient-to-r from-navyblue to-blue-900 text-white p-8 rounded-2xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Want to Learn More About Your Impact?</h3>
            <p className="mb-6">
              Visit our Foundation page to see how your business ownership helps create positive 
              change in communities across South Africa.
            </p>
            <Link to="/foundation" className="inline-flex items-center gap-2 bg-gold hover:bg-amber-500 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
              Learn About Our Impact
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="max-w-4xl mx-auto mb-16 mt-24">
            <div className="bg-gradient-to-br from-navyblue to-blue-900 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gold">Meet Thembi: Planning Her Journey to Business Ownership</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Thembi is a dedicated call centre agent in Johannesburg, earning R8,000 monthly. Like many South Africans, 
                    she wants to build additional income streams and create long-term financial security. Our innovative MCA Direct 
                    program offers her a path to business ownership without the complexity of managing day-to-day operations.
                  </p>
                  <img 
                    src="/lovable-uploads/697f3367-6bf9-47c7-8610-d21869a0d029.png" 
                    alt="Call centre agent with headset smiling" 
                    className="rounded-lg w-full shadow-lg object-cover h-[400px]" 
                  />
                </div>

                <div className="bg-white/10 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-6 text-gold">Our Plan for Thembi:</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Calendar className="w-6 h-6 text-gold shrink-0 mt-1" />
                      <div>
                        <span className="font-medium block mb-2">6-Month Savings Plan</span>
                        <p className="text-white/90">
                          We've created a plan where Thembi will save R500 monthly in a dedicated bank account, 
                          building her investment fund step by step.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-gold shrink-0 mt-1" />
                      <div>
                        <span className="font-medium block mb-2">Professional Management</span>
                        <p className="text-white/90">
                          Once she's ready to invest, our team will handle all operations, taxes, and management - 
                          letting Thembi focus on her career while building wealth.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CircleDollarSign className="w-6 h-6 text-gold shrink-0 mt-1" />
                      <div>
                        <span className="font-medium block mb-2">Future Investment Options</span>
                        <p className="text-white/90 mb-2">
                          With R3,000 saved, Thembi will be able to invest in:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-white/90">
                          <li>A share in community food retail businesses</li>
                          <li>Property investment opportunities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    <span>062 019 3208</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gold" size={20} />
                    <Link to="/contact" className="flex items-center gap-1 text-navyblue font-medium hover:text-blue-700 transition-colors">
                      Book a free consultation <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                
                <Link to="/register" className="inline-block bg-gold text-white font-medium py-3 px-8 rounded-md hover:bg-amber-500 transition-colors mt-4">
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
    </Layout>;
};

export default ImpactFunds;
