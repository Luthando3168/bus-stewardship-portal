
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const ImpactFundsSection = () => {
  const funds = [
    {
      name: "Agri Impact Fund",
      description: "Supporting sustainable agricultural initiatives and rural development projects.",
      color: "from-green-700 to-green-900"
    },
    {
      name: "Property Impact Fund",
      description: "Investing in community-focused real estate and housing development projects.",
      color: "from-blue-700 to-blue-900"
    },
    {
      name: "Energy Impact Fund",
      description: "Financing renewable energy and sustainable infrastructure projects.",
      color: "from-amber-600 to-amber-800"
    },
    {
      name: "Enterprise Impact Fund",
      description: "Empowering small and medium enterprises with capital and business development support.",
      color: "from-purple-700 to-purple-900"
    }
  ];

  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-navyblue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Sankofa Capital Partners" 
          subtitle="Impactful investment funds that deliver both financial returns and positive social outcomes"
          light
          centered
        />
        
        <p className="font-lato text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Through our investment management company, Sankofa Capital Partners, we operate impact funds designed to generate 
          sustainable returns while contributing to socioeconomic development.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {funds.map((fund, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-lg bg-gradient-to-br ${fund.color} p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300`}
            >
              <div>
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-4">Sankofa {fund.name}</h3>
                <p className="font-lato text-gray-200 mb-6">{fund.description}</p>
              </div>
              
              <Link 
                to={`/impact-funds#${fund.name.toLowerCase().split(" ")[0]}`}
                className="font-montserrat inline-block px-4 sm:px-6 py-2 bg-white/10 text-white rounded font-medium hover:bg-white/20 transition-colors mt-auto text-center"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/foundation"
            className="font-montserrat inline-block px-6 sm:px-8 py-3 sm:py-4 border border-gold text-gold rounded font-medium hover:bg-gold/10 transition-colors"
          >
            Learn About Our Foundation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsSection;
