
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from "../ui/SectionTitle";
import { Progress } from "../ui/progress";
import { ArrowRight } from 'lucide-react';

const FeaturedInvestmentsSection = () => {
  const featuredInvestments = [
    {
      id: "ekasi-mix",
      title: "eKasi Mix Use",
      fund: "Sankofa Property Impact Fund",
      fundId: "property",
      description: "Modern residential development in township areas offering affordable housing with commercial spaces. Invest by owning a unit outright or co-own with other clients.",
      minInvestment: "R 5,000",
      currentProgress: 68,
      targetAmount: "R 5,000,000",
      raisedAmount: "R 3,400,000",
      image: "/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png",
      color: "from-blue-700 to-blue-900"
    },
    {
      id: "lifestyle-complex",
      title: "Lifestyle Mini Complex",
      fund: "Sankofa Enterprise Impact Fund",
      fundId: "enterprise",
      description: "Commercial complex with three trading companies: Food Corner, Lifestyle Meat Co, and Lifestyle Fruits & Veg, sourcing produce from our Agri Impact Fund farms.",
      minInvestment: "R 5,000",
      currentProgress: 42,
      targetAmount: "R 3,500,000",
      raisedAmount: "R 1,470,000",
      image: "/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png",
      color: "from-purple-700 to-purple-900"
    },
    {
      id: "agrourban-oasis",
      title: "AgroUrban Oasis",
      fund: "Sankofa Agri Impact Fund",
      fundId: "agri",
      description: "Urban farming initiative combining agriculture with residential spaces. Invest in the entire farm operation or specific trading companies within the development.",
      minInvestment: "R 5,000",
      currentProgress: 75,
      targetAmount: "R 4,000,000",
      raisedAmount: "R 3,000,000",
      image: "/lovable-uploads/98d6869e-a552-4731-9f0c-6dce07a2db48.png",
      color: "from-green-700 to-green-900"
    },
    {
      id: "my-franchise",
      title: "MyFranchise",
      fund: "Sankofa Enterprise Impact Fund",
      fundId: "enterprise",
      description: "Investment opportunity across multiple franchise businesses. Select from various franchise options and build a diversified investment portfolio.",
      minInvestment: "R 5,000",
      currentProgress: 32,
      targetAmount: "R 7,500,000",
      raisedAmount: "R 2,400,000",
      image: "/lovable-uploads/aa792d14-7473-4673-89cf-c3f6e1d15711.png",
      color: "from-purple-700 to-purple-900"
    }
  ];

  const handleInvestClick = () => {
    // If not logged in, redirect to register
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
      // This would normally be handled by a toast or modal, but for simplicity
      // we'll just alert and redirect
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
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{investment.raisedAmount} raised</span>
                    <span className="text-gray-500">Goal: {investment.targetAmount}</span>
                  </div>
                  <Progress value={investment.currentProgress} className="h-2" />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">{investment.currentProgress}% funded</span>
                    <span className="text-sm font-semibold">Min: {investment.minInvestment}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <button 
                    onClick={handleInvestClick}
                    className="bg-gold hover:bg-lightgold text-white py-2 px-4 rounded transition-colors font-medium"
                  >
                    Invest Now
                  </button>
                  <Link 
                    to={`/impact-funds#${investment.fundId}`} 
                    className="text-navyblue hover:text-gold transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
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
