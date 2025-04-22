
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
    gradient: "from-green-700 to-green-900",
    headerBg: "bg-gradient-to-r from-green-700 to-green-900 text-white",
    description:
      "The MyFarm Impact Fund invests in sustainable agricultural businesses and ventures, driving positive change in food security and rural economy.",
    focus: [
      "Sustainable farming operations",
      "Agricultural technology innovations",
      "Food processing and distribution",
      "Rural agricultural infrastructure",
    ],
    impact: [
      "Enhance food security",
      "Create rural employment",
      "Promote sustainable practices",
      "Support smallholder farmers",
    ],
    targetReturn: "8-12% p.a.",
    minimumInvestment: "R 5,000",
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    gradient: "from-blue-700 to-blue-900",
    headerBg: "bg-gradient-to-r from-blue-700 to-blue-900 text-white",
    description:
      "The MyProperty Impact Fund invests in property businesses and developments focused on affordable housing and community growth.",
    focus: [
      "Affordable housing developments",
      "Mixed-use community projects",
      "Energy-efficient building retrofits",
      "Community-centered commercial spaces",
    ],
    impact: [
      "Increase housing access",
      "Revitalize communities",
      "Reduce building environmental footprint",
      "Support local economic development",
    ],
    targetReturn: "9-14% p.a.",
    minimumInvestment: "R 10,000",
  },
  {
    id: "myfranchise",
    name: "MyFranchise Impact Fund",
    gradient: "from-red-600 to-red-800",
    headerBg: "bg-gradient-to-r from-red-600 to-red-800 text-white",
    description:
      "The MyFranchise Impact Fund invests in franchise businesses with established operational models.",
    focus: [
      "Food franchise outlets",
      "Retail franchise businesses",
      "Service franchise operations",
      "Franchise development opportunities",
    ],
    impact: [
      "Create employment opportunities",
      "Support entrepreneurship",
      "Develop business skills",
      "Expand successful business models",
    ],
    targetReturn: "10-15% p.a.",
    minimumInvestment: "R 5,000",
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
            subtitle="Investment vehicles driving positive social and environmental impact while generating competitive returns"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="text-center space-y-6 mb-12">
              <p className="text-lg text-charcoal">
                At Luthando Maduna Chartered Accountants, we assist clients to own multiple businesses, which we then manage for them. 
                Clients can customize their investment portfolio from various impact funds based on their interests and financial goals.
              </p>
            </div>
            
            <div className="bg-lightgray rounded-lg p-6 mb-12 text-center">
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

            <div className="space-y-6 mb-12">
              {funds.map((fund) => (
                <div key={fund.id} className="border rounded-lg overflow-hidden">
                  <div className={`p-6 ${fund.headerBg}`}>
                    <h3 className="text-xl font-bold">{fund.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="mb-4">{fund.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Investment Focus:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {fund.focus.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navyblue mb-2">Impact Objectives:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {fund.impact.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Target Return</h5>
                        <p className="text-xl font-bold text-navyblue">{fund.targetReturn}</p>
                      </div>
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-medium text-sm text-muted-foreground">Minimum Investment</h5>
                        <p className="text-xl font-bold text-navyblue">{fund.minimumInvestment}</p>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Link 
                        to={`/user/new-deals?fund=${fund.id}`}
                        className="inline-block px-6 py-3 bg-gold text-white rounded font-medium hover:bg-lightgold transition-colors"
                      >
                        View Opportunities
                      </Link>
                    </div>
                  </div>
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
