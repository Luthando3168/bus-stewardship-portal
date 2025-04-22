
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from "../ui/SectionTitle";
import { ArrowRight } from 'lucide-react';

const FeaturedInvestmentsSection = () => {
  const featuredInvestments = [
    {
      id: "ekasi-mix",
      title: "eKasi Mix Use",
      fund: "Sankofa Property Impact Fund",
      website: "https://your-ekasi-mix-website.com", // <-- Placeholder, replace with actual URL
      description: "Modern residential development in township areas offering affordable housing with commercial spaces. Invest by owning a unit outright or co-own with other clients. Minimum investment is R5,000, and clients can pay in instalments in their Standard Bank accounts.",
      image: "/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png",
      color: "from-blue-700 to-blue-900"
    },
    {
      id: "lifestyle-complex",
      title: "Lifestyle Mini Complex",
      fund: "Sankofa Enterprise Impact Fund",
      website: "https://your-lifestyle-mini-complex-website.com", // <-- Placeholder
      description: "Own the Lifestyle Mini Complex and three trading companies: Food Corner (groceries), Lifestyle Meat Co (meat & products), and Lifestyle Fruits & Veg (produce from client-owned farms under the Agri Impact Fund). Minimum investment of R5,000. Clients can pay in instalments.",
      image: "/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png",
      color: "from-purple-700 to-purple-900"
    },
    {
      id: "agrourban-oasis",
      title: "AgroUrban Oasis",
      fund: "Sankofa Agri Impact Fund",
      website: "https://your-agrourban-oasis-website.com", // <-- Placeholder
      description: "Urban farming initiative where clients can own trading companies on the AgroUrban Oasis or invest in the farm as a whole to earn profits. Minimum investment is R5,000.",
      image: "/lovable-uploads/98d6869e-a552-4731-9f0c-6dce07a2db48.png",
      color: "from-green-700 to-green-900"
    },
    {
      id: "my-franchise",
      title: "MyFranchise",
      fund: "Sankofa Enterprise Impact Fund",
      website: "https://your-myfranchise-website.com", // <-- Placeholder
      description: "Invest into multiple franchises under the Sankofa Enterprise Impact Fund. Select various franchises as advertised on the MyFranchise website and easily add to your portfolio.",
      image: "/lovable-uploads/aa792d14-7473-4673-89cf-c3f6e1d15711.png",
      color: "from-purple-700 to-purple-900"
    }
  ];

  const handleInvestClick = () => {
    // If not logged in, redirect to register
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
      alert("Please register or login to invest in this opportunity");
      window.location.href = "/register";
      return;
    }
    // If logged in, redirect to the user dashboard
    window.location.href = "/user/new-deals";
  };

  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Investment Opportunities" 
          subtitle="Exclusive investment products to build your portfolio with impact"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {featuredInvestments.map((investment) => (
            <div 
              key={investment.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={investment.image} 
                  alt={investment.title} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-0 right-0 py-1 px-3 m-2 rounded-full bg-gradient-to-r ${investment.color} text-white text-xs font-medium`}>
                  {investment.fund.replace('Sankofa ', '')}
                </div>
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-montserrat font-bold text-xl text-navyblue">{investment.title}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-grow">{investment.description}</p>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={investment.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold hover:text-navyblue font-medium underline text-sm"
                  >
                    Visit Website <ArrowRight size={16} />
                  </a>
                  <button 
                    onClick={handleInvestClick}
                    className="bg-gold hover:bg-lightgold text-white py-2 px-4 rounded transition-colors font-medium mt-2"
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/impact-funds"
            className="font-montserrat inline-flex items-center gap-2 px-6 py-3 bg-navyblue text-white rounded font-medium hover:bg-deepblue transition-colors"
          >
            View All Investment Opportunities <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInvestmentsSection;
