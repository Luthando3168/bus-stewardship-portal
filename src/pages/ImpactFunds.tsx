
import React from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const funds = [
  {
    id: "myfarm",
    name: "MyFarm Impact Fund",
    brief: "Sustainable agriculture and farming for food security and rural economic growth.",
    image: "https://images.unsplash.com/photo-1516706578602-8acb51c21ba5?auto=format&fit=crop&w=1200&q=80", // Detailed farm scene with crops and machinery
    returnPercentage: 12,
    minInvestment: 1000,
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    brief: "Affordable housing and community-focused property for social development.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", // Modern affordable housing complex
    returnPercentage: 10,
    minInvestment: 2000,
  },
  {
    id: "myfoodretail",
    name: "MyFoodRetail Impact Fund",
    brief: "Investing in food retail businesses to improve food distribution and access.",
    image: "https://images.unsplash.com/photo-1665686306574-1ace09918ffd?auto=format&fit=crop&w=1200&q=80", // Modern grocery store interior with fresh produce
    returnPercentage: 15,
    minInvestment: 5000,
  },
  {
    id: "myfranchise",
    name: "MyFranchise Impact Fund",
    brief: "Backing franchises to create jobs and support business ownership.",
    image: "https://images.unsplash.com/photo-1661686645638-7131fd68a724?auto=format&fit=crop&w=1200&q=80", // Business people shaking hands, franchise concept
    returnPercentage: 14,
    minInvestment: 1500,
  },
  // Additional Funds
  {
    id: "myenergy",
    name: "MyEnergy Impact Fund",
    brief: "Renewable energy investments driving sustainable power solutions.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03672?auto=format&fit=crop&w=1200&q=80", // Solar panels or wind turbines
    returnPercentage: 13,
    minInvestment: 3000,
  },
  {
    id: "myhealth",
    name: "MyHealth Impact Fund",
    brief: "Healthcare and medical technology investments improving community wellness.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7cedf7?auto=format&fit=crop&w=1200&q=80", // Modern medical facility or healthcare technology
    returnPercentage: 11,
    minInvestment: 2500,
  },
  {
    id: "mytech",
    name: "MyTech Impact Fund",
    brief: "Innovative technology solutions driving digital transformation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", // Tech startup or innovation lab
    returnPercentage: 16,
    minInvestment: 4000,
  },
  {
    id: "myeducation",
    name: "MyEducation Impact Fund",
    brief: "Educational initiatives and skill development programs.",
    image: "https://images.unsplash.com/photo-1541692641319-81bc2bdf9f2a?auto=format&fit=crop&w=1200&q=80", // Modern classroom or educational technology
    returnPercentage: 10,
    minInvestment: 1500,
  }
];

const ImpactFunds = () => {
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
            subtitle="Choose from a comprehensive selection of impact funds and invest in opportunities that drive positive change."
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
            {funds.map(fund => (
              <div
                key={fund.id}
                className="flex flex-col items-center bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={fund.image}
                  alt={fund.name}
                  className="w-full h-44 object-cover"
                  style={{ borderBottom: '2px solid #144671' }}
                />
                <div className="p-6 flex-1 flex flex-col justify-between w-full">
                  <div>
                    <h3 className="font-montserrat font-bold text-2xl text-white mb-1">{fund.name}</h3>
                    <p className="font-lato text-gray-200 mb-3">{fund.brief}</p>
                    <div className="flex flex-wrap gap-x-8 text-sm text-blue-100 mb-1">
                      <span>Return: <span className="font-semibold">{fund.returnPercentage}%</span></span>
                      <span>Min. Investment: <span className="font-semibold">R {fund.minInvestment}</span></span>
                    </div>
                  </div>
                  <Link
                    to={`/user/new-deals?fund=${fund.id}`}
                    className="mt-4 inline-block px-4 py-2 bg-gold text-navyblue rounded font-semibold hover:bg-lightgold transition-colors text-center"
                  >
                    View Opportunities
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 text-center">
            <Link
              to="/impact-funds"
              className="inline-block px-6 py-3 bg-navyblue text-white rounded hover:bg-blue-800 font-semibold transition"
            >
              Explore All Impact Funds
            </Link>
            <Link
              to="/foundation"
              className="inline-block px-6 py-3 bg-gold text-navyblue rounded hover:bg-lightgold font-semibold transition"
            >
              Foundation
            </Link>
          </div>
          <div className="text-center mt-6 text-gray-500 font-lato">
            For enquiries: <a className="text-blue-800 underline" href="mailto:info@madunacas.com">info@madunacas.com</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpactFunds;
