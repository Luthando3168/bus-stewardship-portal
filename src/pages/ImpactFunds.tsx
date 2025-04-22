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
    brief: "Invest in sustainable agriculture and farming across South Africa. Targeting food security and rural economic growth.",
    targetReturn: "8-12% p.a.",
    minimumInvestment: "R 5,000",
    gradient: "from-green-700 to-green-900",
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    brief: "Invest in affordable housing and community-focused property, supporting social and economic growth.",
    targetReturn: "9-14% p.a.",
    minimumInvestment: "R 10,000",
    gradient: "from-blue-700 to-blue-900",
  },
  {
    id: "myfranchise",
    name: "MyFranchise Impact Fund",
    brief: "Back franchise businesses to create jobs, develop skills, and expand business ownership.",
    targetReturn: "10-15% p.a.",
    minimumInvestment: "R 5,000",
    gradient: "from-red-600 to-red-800",
  },
  {
    id: "myhealth",
    name: "MyHealth Impact Fund",
    brief: "Invest in medical and healthcare ventures that improve access and promote wellness.",
    targetReturn: "7-10% p.a.",
    minimumInvestment: "R 7,500",
    gradient: "from-emerald-700 to-emerald-900",
  },
  {
    id: "myenergy",
    name: "MyEnergy Impact Fund",
    brief: "Invest in clean energy and renewables, supporting a sustainable energy future.",
    targetReturn: "9-13% p.a.",
    minimumInvestment: "R 8,000",
    gradient: "from-yellow-700 to-yellow-900",
  },
  {
    id: "mytelcom",
    name: "MyTelcom Impact Fund",
    brief: "Invest in telecommunications businesses expanding digital inclusion and connectivity.",
    targetReturn: "8-12% p.a.",
    minimumInvestment: "R 6,000",
    gradient: "from-indigo-700 to-indigo-900",
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
            subtitle="Select from our curated collection of impact funds—invest in the sectors you care about, add opportunities to your cart, and build your own diversified portfolio."
            centered
          />

          <div className="bg-lightgray rounded-lg p-6 mb-10 text-center">
            <h3 className="text-xl font-medium mb-2">How Our Investment Process Works</h3>
            <p className="mb-4">
              As you select business deals that interest you, they are automatically linked to their respective impact funds.
              Your selections are consolidated at checkout where you'll receive a unique order number.
              You can conveniently pay using your Standard Bank wallet, which should be funded in advance.
            </p>
            <Button
              className="bg-gold hover:bg-lightgold text-white"
              onClick={handleInvestClick}
            >
              Browse Investment Opportunities
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {funds.map(fund => (
                <div 
                  key={fund.id}
                  className={`rounded-lg border bg-gradient-to-br p-6 flex flex-col justify-between shadow transition ${fund.gradient} text-white`}
                >
                  <div>
                    <h3 className="font-montserrat font-bold text-lg mb-2">{fund.name}</h3>
                    <p className="font-lato mb-3">{fund.brief}</p>
                  </div>
                  <div className="text-sm mb-2">
                    <span className="text-white/80">Expected return: </span>
                    <span className="font-semibold">{fund.targetReturn}</span>
                  </div>
                  <div className="text-sm mb-2">
                    <span className="text-white/80">Min investment: </span>
                    <span className="font-semibold">{fund.minimumInvestment}</span>
                  </div>
                  <Link 
                    to={`/user/new-deals?fund=${fund.id}`}
                    className="mt-4 inline-block px-4 py-2 bg-gold text-white rounded font-medium hover:bg-lightgold transition-colors text-center"
                  >
                    View Opportunities
                  </Link>
                </div>
              ))}
            </div>

            <div className="mb-12 text-center">
              <span className="text-charcoal text-base">
                Clients select the businesses they want, add to their cart, and manage their own impact portfolio.
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpactFunds;
