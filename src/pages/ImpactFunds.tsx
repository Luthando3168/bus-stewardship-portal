
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
    brief: "Invest in sustainable agriculture and farming with a focus on food security projects and rural economy.",
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
    gradient: "from-green-700 to-green-900",
    headerBg: "bg-gradient-to-r from-green-700 to-green-900 text-white",
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    brief: "Invest in affordable housing and community-focused real estate for social and economic growth.",
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
    gradient: "from-blue-700 to-blue-900",
    headerBg: "bg-gradient-to-r from-blue-700 to-blue-900 text-white",
  },
  {
    id: "myfranchise",
    name: "MyFranchise Impact Fund",
    brief: "Back franchise businesses with proven models to create jobs, develop skills, and expand business ownership.",
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
    gradient: "from-red-600 to-red-800",
    headerBg: "bg-gradient-to-r from-red-600 to-red-800 text-white",
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
            subtitle="Invest in carefully curated funds targeting social impact—select your opportunities, add to your cart, and build your portfolio."
            centered
          />

          {/* Fund Cards - List with short summary, return, min invest, and button */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {funds.map(fund => (
                <div 
                  key={fund.id}
                  className="rounded-lg border bg-gradient-to-br p-6 flex flex-col justify-between from-white to-softgray shadow transition"
                  style={{
                    backgroundImage: undefined // Use Tailwind's classes, not inline
                  }}
                >
                  <div>
                    <h3 className="font-montserrat font-bold text-lg mb-2 text-navyblue">{fund.name}</h3>
                    <p className="font-lato text-gray-700 mb-3">{fund.brief}</p>
                    <div className="text-sm mb-2">
                      <span className="text-muted-foreground">Expected return: </span>
                      <span className="text-navyblue font-semibold">{fund.targetReturn}</span>
                    </div>
                    <div className="text-sm mb-2">
                      <span className="text-muted-foreground">Min investment: </span>
                      <span className="text-gold font-semibold">{fund.minimumInvestment}</span>
                    </div>
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
                Clients select the businesses they want and add them to their cart. You have full control over your impact portfolio!
              </span>
            </div>

            {/* Process Block (move here per user's request) */}
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
          </div>

          {/* Full Details for Each Fund - as in MyFarm block */}
          <div className="max-w-4xl mx-auto space-y-6">
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
      </section>
    </Layout>
  );
};

export default ImpactFunds;

