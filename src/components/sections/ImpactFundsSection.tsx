
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const funds = [
  {
    name: "MyFarm Impact Fund",
    description: "Supporting sustainable agriculture and farming businesses with a minimum investment of R 5,000.",
    color: "from-green-700 to-green-900",
    businesses: [
      {
        title: "Urban Farming - AgroUrban Oasis (Cape Town)",
        description: "Invest in a sustainable hydroponic farm producing fresh produce for local supermarkets, restaurants, and communities. Focus on water-efficient and high-yield methods.",
        minInvestment: "R 5,000",
      },
      {
        title: "Organic Expansion (KwaZulu-Natal)",
        description: "Expansion of existing organic farm focusing on vegetables and herbs for major grocery chains. Certified organic and regenerative methods.",
        minInvestment: "R 5,000",
      },
      {
        title: "Mixed Crops Cultivation (Limpopo)",
        description: "A project to cultivate and process diverse crops, supporting food security and market supply across the Limpopo region.",
        minInvestment: "R 5,000",
      }
    ],
  },
  {
    name: "MyProperty Impact Fund",
    description: "Investing in community-focused real estate and property businesses. Minimum investment of R10,000.",
    color: "from-blue-700 to-blue-900",
    businesses: [
      {
        title: "Affordable Housing - eKasi Mixed Use (Johannesburg)",
        description: "Modern residential and commercial development in township areas providing affordable apartments and retail opportunities.",
        minInvestment: "R 10,000",
      },
      {
        title: "Student Accommodation (Pretoria)",
        description: "Purpose-built student accommodation near key tertiary institutions, with secure and modern facilities for young professionals.",
        minInvestment: "R 10,000",
      },
      {
        title: "Traditional Housing (Eastern Cape)",
        description: "Development of culturally appropriate housing solutions that blend traditional designs with modern amenities and efficiency.",
        minInvestment: "R 10,000",
      }
    ],
  },
  {
    name: "MyFranchise Impact Fund",
    description: "Investing in franchise businesses with established operational models. Minimum investment of R5,000.",
    color: "from-red-600 to-red-800",
    businesses: [
      {
        title: "Food Franchises (National)",
        description: "Investment opportunities in established food franchise brands across South Africa.",
        minInvestment: "R 5,000",
      },
      {
        title: "Retail Franchises (Urban Centers)",
        description: "Opportunities to invest in retail franchise operations in key urban locations.",
        minInvestment: "R 5,000",
      },
      {
        title: "Service Franchises (National)",
        description: "Investment in service-based franchise businesses with proven operational models.",
        minInvestment: "R 5,000",
      }
    ],
  }
];

const ImpactFundsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-navyblue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Impact Funds" 
          subtitle="Impactful investment funds that deliver both financial returns and positive social outcomes"
          light
          centered
        />
        
        <p className="font-lato text-center text-gray-300 max-w-3xl mx-auto mb-12">
          At Luthando Maduna Chartered Accountants, we assist clients to own multiple businesses using the in-house MCA Direct where the actual business deals are linked to impact funds. See some of the funds below.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {funds.map((fund, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-lg bg-gradient-to-br ${fund.color} p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300`}
            >
              <div>
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl mb-4">{fund.name}</h3>
                <p className="font-lato text-gray-200 mb-4">{fund.description}</p>
                {fund.businesses.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-base mb-2">Investment Opportunities:</h4>
                    <ul className="space-y-2">
                      {fund.businesses.slice(0, 2).map((biz, bizIdx) => (
                        <li key={bizIdx} className="text-sm">
                          <div className="font-medium text-gold">{biz.title}</div>
                          <div className="text-xs text-gray-200 mt-1">Min: {biz.minInvestment}</div>
                        </li>
                      ))}
                      {fund.businesses.length > 2 && (
                        <li className="text-sm text-gray-300">
                          +{fund.businesses.length - 2} more opportunities
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              
              <Link 
                to={`/impact-funds`}
                className="font-montserrat inline-block px-4 sm:px-6 py-2 bg-white/10 text-white rounded font-medium hover:bg-white/20 transition-colors mt-auto text-center mt-4"
              >
                View Opportunities
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsSection;
