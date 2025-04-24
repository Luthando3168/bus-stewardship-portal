
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/card';

const fundCategories = [
  {
    id: "myfarm",
    name: "MyFarm",
    description: "Co-own sustainable farms and agricultural businesses",
    bgGradient: "from-green-700 to-green-900",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    route: "/funds/myfarm"
  },
  {
    id: "myproperty",
    name: "MyProperty",
    description: "Co-own community-focused real estate & housing",
    bgGradient: "from-blue-700 to-blue-900",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    route: "/funds/myproperty"
  },
  {
    id: "myfranchise",
    name: "MyFranchise",
    description: "Co-own franchise businesses with proven models",
    bgGradient: "from-red-600 to-red-800",
    image: "/lovable-uploads/e5869f22-682c-4c5c-bd33-5a19766a95cf.png",
    route: "/funds/myfranchise"
  },
  {
    id: "myfoodretail",
    name: "MyFoodRetail",
    description: "Co-own food shops serving your community",
    bgGradient: "from-amber-600 to-amber-800",
    image: "/lovable-uploads/0bf3e14d-cb74-4a37-b156-c269331b7a57.png",
    route: "/funds/myfoodretail"
  },
];

const ImpactFundsShowcase = () => {
  return (
    <section className="py-16 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Business Do You Want to Own?"
          subtitle="Browse our impact funds and choose where to invest your R500/month"
          centered
        />
        
        <div className="mt-8 mb-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-charcoal">
            Our BUS (Businesses Under Stewardship) program lets you co-own real businesses with other community members. 
            Choose the type of business that interests you most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fundCategories.map((fund) => (
            <Link 
              to={fund.route} 
              key={fund.id}
              className="group hover:scale-105 transition-all duration-300"
            >
              <Card className="overflow-hidden h-64 relative shadow-md">
                <img 
                  src={fund.image} 
                  alt={fund.name} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${fund.bgGradient} opacity-75 group-hover:opacity-85 transition-opacity`}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="text-white text-xl font-bold mb-1">{fund.name}</h3>
                  <p className="text-white/90 text-sm">{fund.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/impact-funds" 
            className="inline-block px-6 py-3 bg-navyblue text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
          >
            See All Business Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsShowcase;
