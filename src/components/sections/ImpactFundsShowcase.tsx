
import React from 'react';
import { Link } from "react-router-dom";
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
          title="Build Your Business Empire"
          subtitle="Browse our selection of professionally managed businesses and choose what interests you"
          centered
        />
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center mb-12">
            <h3 className="text-2xl font-bold text-navyblue mb-6">How to Get Started</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="text-gold text-xl font-bold">1.</div>
                <h4 className="font-semibold text-lg">Choose Businesses</h4>
                <p className="text-gray-600">Pick from our range of business types below. You can own multiple!</p>
              </div>
              <div className="space-y-2">
                <div className="text-gold text-xl font-bold">2.</div>
                <h4 className="font-semibold text-lg">Quick Registration</h4>
                <p className="text-gray-600">Simple registration process with basic documents needed</p>
              </div>
              <div className="space-y-2">
                <div className="text-gold text-xl font-bold">3.</div>
                <h4 className="font-semibold text-lg">Start With R500</h4>
                <p className="text-gray-600">Begin your business ownership journey with just R500 monthly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fundCategories.map((fund) => (
            <Link 
              to={fund.route} 
              key={fund.id}
              className="group"
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-full ${colorMap[fund.color]} flex items-center justify-center mb-4`}>
                    <fund.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-navyblue">{fund.name}</h3>
                  <p className="text-gray-600">{fund.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-navyblue text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="mb-6">Register now and start building your business portfolio with just R500 monthly</p>
            <Link 
              to="/register" 
              className="inline-block px-8 py-4 bg-gold text-navyblue font-semibold rounded-lg hover:bg-lightgold transition-colors text-lg"
            >
              Begin Registration
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsShowcase;
