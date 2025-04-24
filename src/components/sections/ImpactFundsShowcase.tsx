
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Business Do You Want to Own?"
          subtitle="No experience needed - our team handles everything"
          centered
        />
        
        <div className="mt-8 mb-12 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-navyblue mb-4">How It Works (Simple!)</h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-2">
                <span className="text-gold">1.</span> Save R500 monthly in your account
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">2.</span> Pick which business you like
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">3.</span> We run it, you earn from it
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        
        <div className="mt-10 text-center">
          <Link 
            to="/impact-funds" 
            className="inline-block px-8 py-4 bg-navyblue text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors text-lg"
          >
            See All Business Types You Can Own
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsShowcase;
