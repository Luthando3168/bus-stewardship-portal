
import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Wheat, Home, ShoppingBag, GraduationCap, Zap, Phone, Stethoscope } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/card';

const fundCategories = [
  {
    id: "myfoodretail",
    name: "MyFoodRetail",
    icon: Store,
    description: "Own spaza shops, food outlets & grocery stores",
    color: "amber",
    route: "/funds/myfoodretail"
  },
  {
    id: "myfarm",
    name: "MyFarm",
    icon: Wheat,
    description: "Own farms that feed our communities",
    color: "green",
    route: "/funds/myfarm"
  },
  {
    id: "myproperty",
    name: "MyProperty",
    icon: Home,
    description: "Own property that makes money monthly",
    color: "blue",
    route: "/funds/myproperty"
  },
  {
    id: "myfranchise",
    name: "MyFranchise",
    icon: ShoppingBag,
    description: "Own famous brand store franchises",
    color: "red",
    route: "/funds/myfranchise"
  },
  {
    id: "myschool",
    name: "MySchool",
    icon: GraduationCap,
    description: "Own schools & educational centers",
    color: "indigo",
    route: "/funds/myschool"
  },
  {
    id: "myenergy",
    name: "MyEnergy",
    icon: Zap,
    description: "Own solar & power solutions",
    color: "yellow",
    route: "/funds/myenergy"
  },
  {
    id: "mytelco",
    name: "MyTelco",
    icon: Phone,
    description: "Own internet & phone businesses",
    color: "purple",
    route: "/funds/mytelco"
  },
  {
    id: "myhealth",
    name: "MyHealth",
    icon: Stethoscope,
    description: "Own clinics & healthcare businesses",
    color: "pink",
    route: "/funds/myhealth"
  }
];

const colorMap = {
  amber: "bg-amber-500 hover:bg-amber-600",
  green: "bg-green-500 hover:bg-green-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  red: "bg-red-500 hover:bg-red-600",
  indigo: "bg-indigo-500 hover:bg-indigo-600",
  yellow: "bg-yellow-500 hover:bg-yellow-600",
  purple: "bg-purple-500 hover:bg-purple-600",
  pink: "bg-pink-500 hover:bg-pink-600"
};

const ImpactFundsShowcase = () => {
  return (
    <section className="py-16 bg-lightgray">
      <div className="container max-w-[1400px] mx-auto px-4">
        <SectionTitle
          title="What Business Do You Want to Own?"
          subtitle="Complete registration to access our secure business ownership platform"
          centered
        />
        
        <div className="mt-8 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <h3 className="text-2xl font-bold text-navyblue">Required Documents for Registration</h3>
            <ul className="list-none space-y-4">
              <li className="flex items-center gap-3 text-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <span>Valid South African ID or Passport</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <span>Proof of Address (not older than 3 months)</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <span>3 Months Bank Statements</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <span>Latest Payslip or Proof of Income</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <h3 className="text-2xl font-bold text-navyblue">Registration Process</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold font-semibold">1</span>
                </div>
                <div>
                  <p className="text-lg">Register online and submit required documents</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold font-semibold">2</span>
                </div>
                <div>
                  <p className="text-lg">Our team verifies your information</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold font-semibold">3</span>
                </div>
                <div>
                  <p className="text-lg">Save R500 monthly in your secure bank account</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold font-semibold">4</span>
                </div>
                <div>
                  <p className="text-lg">Choose businesses you want to own when ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fundCategories.map((fund) => (
            <Link 
              to={fund.route} 
              key={fund.id}
              className="group"
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-full ${colorMap[fund.color]} flex items-center justify-center mb-4`}>
                  <fund.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navyblue">{fund.name}</h3>
                <p className="text-gray-600 flex-grow">{fund.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-gold flex items-center gap-1">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center space-y-6">
          <Link 
            to="/register" 
            className="inline-block px-8 py-4 bg-gold text-navyblue font-semibold rounded-lg hover:bg-lightgold transition-colors text-lg shadow-lg"
          >
            Start Registration Process
          </Link>
          <Link 
            to="/impact-funds" 
            className="block text-navyblue hover:text-gold transition-colors font-semibold"
          >
            See All Business Types
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsShowcase;
