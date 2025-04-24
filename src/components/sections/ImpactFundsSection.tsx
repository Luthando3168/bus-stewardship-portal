import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { impactFunds } from "@/data/impact-funds";

const funds = [
  {
    name: "MyFarm Impact Fund",
    description: "Focus: Supporting sustainable agriculture and farming businesses across South Africa.",
    color: "from-green-700 to-green-900",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    focus: [
      "Sustainable farming operations",
      "Food security projects",
      "Organic and mixed-crop ventures"
    ],
    minInvestment: "R 1,000",
  },
  {
    name: "MyProperty Impact Fund",
    description: "Focus: Investing in community-focused real estate, affordable housing and property businesses.",
    color: "from-blue-700 to-blue-900",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    focus: [
      "Affordable & mixed-use housing",
      "Community property projects",
      "Student accommodation"
    ],
    minInvestment: "R 2,000",
  },
  {
    name: "MyFranchise Impact Fund",
    description: "Focus: Investing in franchise businesses with proven operational models, creating jobs and business skills.",
    color: "from-red-600 to-red-800",
    image: "/lovable-uploads/e5869f22-682c-4c5c-bd33-5a19766a95cf.png",
    focus: [
      "Food franchise outlets",
      "Retail and service franchises",
      "Entrepreneurship development"
    ],
    minInvestment: "R 1,500",
  }
];

const ImpactFundsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-navyblue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Choose Your Business Type" 
          subtitle="These are different types of real businesses you can own. Pick what you understand best."
          light
          centered
        />

        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-white/10 rounded-lg p-6">
            <p className="text-white text-lg mb-4">
              Think about it like shopping for clothes: Just like you choose between shoes, shirts, or pants - 
              here you choose between owning food shops, farms, or properties. We've grouped similar businesses 
              together to make it easier for you to pick what you know.
            </p>
            <p className="text-white/80 text-lg">
              For example: If you understand food, you might like owning a share in our food shops. 
              If you know about land, you might prefer our farming businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {funds.map((fund, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={fund.image}
                  alt={fund.name}
                  className="w-full h-full object-cover brightness-90 contrast-110 hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${fund.color} opacity-40`}></div>
                <h3 className="absolute bottom-0 left-0 right-0 p-4 font-montserrat font-bold text-lg text-white">
                  {fund.name}
                </h3>
              </div>
              
              <div className={`bg-gradient-to-br ${fund.color} p-6 flex-1 flex flex-col justify-between`}>
                <div>
                  <p className="font-lato text-base text-gray-100 mb-4">{fund.description}</p>
                  <ul className="list-disc list-inside text-sm mb-3 text-gold space-y-2">
                    {fund.focus.map((item, i) => (
                      <li key={i} className="text-white">{item}</li>
                    ))}
                  </ul>
                  <div className="font-medium mt-4 text-sm">
                    <span className="text-white/90">Start with: </span>
                    <span className="text-gold font-semibold">{fund.minInvestment}/month</span>
                  </div>
                </div>
                <Link 
                  to="/impact-funds"
                  className="font-montserrat inline-block px-4 py-2 bg-white/20 text-white rounded font-medium hover:bg-white/30 transition-colors mt-4 text-sm text-center"
                >
                  Learn More About This Business
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 bg-white/10 rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gold mb-3">Want to See All Business Types?</h3>
          <p className="text-white text-lg mb-4">
            We have 5 more business types not shown here. Each one is carefully chosen to help 
            build wealth in our communities. You can own part of any of these businesses.
          </p>
          <Link 
            to="/impact-funds" 
            className="inline-block px-6 py-3 bg-gold text-navyblue rounded-lg font-semibold hover:bg-lightgold transition-colors"
          >
            See All Business Types
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsSection;
