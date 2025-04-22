
import React from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const funds = [
  {
    id: "myfarm",
    name: "MyFarm Impact Fund",
    brief: "Sustainable agriculture and farming for food security and rural economic growth.",
    gradient: "from-green-700 to-green-900",
    returnPercentage: 12,
    minInvestment: 1000,
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    brief: "Affordable housing and community-focused property for social development.",
    gradient: "from-blue-700 to-blue-900",
    returnPercentage: 10,
    minInvestment: 2000,
  },
  {
    id: "myfoodretail",
    name: "MyFoodRetail Impact Fund",
    brief: "Investing in food retail businesses to improve food distribution and access.",
    gradient: "from-orange-700 to-orange-900",
    returnPercentage: 15,
    minInvestment: 5000,
  },
  {
    id: "myfranchise",
    name: "MyFranchise Impact Fund",
    brief: "Backing franchises to create jobs and support business ownership.",
    gradient: "from-red-600 to-red-800",
    returnPercentage: 14,
    minInvestment: 1500,
  },
  {
    id: "myenergy",
    name: "MyEnergy Impact Fund",
    brief: "Supporting clean energy and renewables for a sustainable future.",
    gradient: "from-yellow-700 to-yellow-900",
    returnPercentage: 16,
    minInvestment: 5000,
  },
  {
    id: "myeducation",
    name: "MySchool Impact Fund",
    brief: "Supporting quality education and school infrastructure development.",
    gradient: "from-cyan-700 to-cyan-900",
    returnPercentage: 13,
    minInvestment: 5000,
  },
  {
    id: "myhealth",
    name: "MyHealth Impact Fund",
    brief: "Investing in ventures that improve access to medical and healthcare services.",
    gradient: "from-emerald-700 to-emerald-900",
    returnPercentage: 11,
    minInvestment: 5000,
  },
  {
    id: "mytelcom",
    name: "MyTelcom Impact Fund",
    brief: "Expanding digital connectivity and telecommunications access.",
    gradient: "from-indigo-700 to-indigo-900",
    returnPercentage: 12,
    minInvestment: 1000,
  }
];

const ImpactFunds = () => {
  const isMobile = useIsMobile();

  const handleInvestClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      toast.error("Please register or login to invest in these opportunities");
      setTimeout(() => {
        window.location.href = "/register";
      }, 2000);
      return;
    }
    window.location.href = `/user/new-deals`;
  };

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Impact Funds"
            subtitle="Choose from a selection of impact funds and invest in opportunities that matter to you."
            centered
          />

          <div className="bg-lightgray rounded-lg p-6 mb-10 text-center">
            <h3 className="text-xl font-medium mb-2">How Our Investment Process Works</h3>
            <p className="mb-4">
              Select business deals to add to your impact portfolio. At checkout, you'll get a unique order number and complete your purchase using your Standard Bank wallet.
            </p>
            <Button
              className="bg-gold hover:bg-lightgold text-white"
              onClick={handleInvestClick}
            >
              Browse Investment Opportunities
            </Button>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funds.map(fund => (
                <div 
                  key={fund.id}
                  className={`rounded-lg border bg-gradient-to-br p-6 flex flex-col justify-between shadow transition ${fund.gradient} text-white`}
                >
                  <div>
                    <h3 className="font-montserrat font-bold text-lg mb-2">{fund.name}</h3>
                    <p className="font-lato mb-2">{fund.brief}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-sm">Return: {fund.returnPercentage}%</span>
                      <span className="text-sm">Min. Investment: R {fund.minInvestment}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/user/new-deals?fund=${fund.id}`}
                    className="mt-3 inline-block px-4 py-2 bg-gold text-white rounded font-medium hover:bg-lightgold transition-colors text-center"
                  >
                    View Opportunities
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpactFunds;
