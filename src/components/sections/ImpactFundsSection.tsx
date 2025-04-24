
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const funds = [
  {
    name: "MyFarm Impact Fund",
    description: "Focus: Supporting sustainable agriculture and farming businesses across South Africa.",
    color: "from-green-700 to-green-900",
    image: "/lovable-uploads/4288eeba-c60b-42f1-a156-13a7ef6df992.png",
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
    image: "/lovable-uploads/3bf955d5-5ab4-48d1-be77-4c951cf953ca.png",
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
    image: "/lovable-uploads/b37923d0-335b-46bc-9852-7d271458f2a9.png",
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
          title="Impact Funds" 
          subtitle="At LMCA, we assist clients to own multiple businesses using our in-house MCA Direct, where business deals are linked to impact funds. See some of the funds below."
          light
          centered
        />

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
                  className="w-full h-full object-cover brightness-110 contrast-110 hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${fund.color} opacity-20`}></div>
                <h3 className="absolute bottom-0 left-0 right-0 p-4 font-montserrat font-bold text-xl sm:text-2xl text-white">
                  {fund.name}
                </h3>
              </div>
              
              <div className={`bg-gradient-to-br ${fund.color} p-6 sm:p-8 flex-1 flex flex-col justify-between`}>
                <div>
                  <p className="font-lato text-gray-100 mb-2">{fund.description}</p>
                  <ul className="list-disc list-inside text-sm mb-3 text-gold space-y-1">
                    {fund.focus.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="font-medium mt-2">
                    <span className="text-white/90">Minimum investment: </span>
                    <span className="text-gold font-semibold">{fund.minInvestment}</span>
                  </div>
                </div>
                <Link 
                  to="/impact-funds"
                  className="font-montserrat inline-block px-4 sm:px-6 py-2 bg-white/20 text-white rounded font-medium hover:bg-white/30 transition-colors mt-5 text-center"
                >
                  Learn More / All Opportunities
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <span className="text-gray-300 font-lato">
            For full details and business deal selection, visit our <Link to="/impact-funds" className="text-gold underline">Impact Fund page</Link>.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsSection;
