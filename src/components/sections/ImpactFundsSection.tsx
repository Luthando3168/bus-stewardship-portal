
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

// Each fund's trading businesses (simplified for this section)
const funds = [
  {
    name: "MyFarm Impact Fund",
    description:
      "Supporting sustainable agriculture and farming businesses with a minimum investment of R 5,000.",
    color: "from-green-700 to-green-900",
    businesses: [
      {
        title: "AgroUrban Oasis",
        description:
          "Urban farming initiative where clients can own trading companies or invest in the farm as a whole to earn profits. Minimum investment is R5,000.",
        link: "https://preview--agro-urban-oasis-invest.lovable.app/",
      },
    ],
  },
  {
    name: "MyProperty Impact Fund",
    description:
      "Investing in community-focused real estate and property businesses. Minimum investment of R5,000.",
    color: "from-blue-700 to-blue-900",
    businesses: [
      {
        title: "eKasi Mix Use",
        description:
          "Modern residential development in township areas with affordable housing and commercial spaces. Invest by owning a unit outright or co-own. Minimum investment R5,000.",
        link: "https://kasi-impact-hub.lovable.app/",
      },
    ],
  },
  {
    name: "MyEnergy Impact Fund",
    description:
      "Financing renewable energy and sustainable infrastructure projects. Minimum investment of R5,000.",
    color: "from-amber-600 to-amber-800",
    businesses: [],
  },
  {
    name: "MyEnterprise Impact Fund",
    description:
      "Empowering small and medium enterprises with capital and business development support. Minimum investment of R5,000.",
    color: "from-purple-700 to-purple-900",
    businesses: [
      {
        title: "Lifestyle Mini Complex",
        description:
          "Own the Lifestyle Mini Complex and three trading companies: Food Corner (groceries), Lifestyle Meat Co (meat & products), and Lifestyle Fruits & Veg (produce from MyFarm Impact Fund). Minimum investment of R5,000.",
        link: "https://franchise-flow-invest.lovable.app/",
      },
      {
        title: "MyFranchise",
        description:
          "Invest into multiple franchises. Select as advertised on the MyFranchise website and add to your portfolio. Minimum investment of R5,000.",
        link: "https://franchise-flow-invest.lovable.app/",
      },
    ],
  },
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
          Explore our impact funds, each dedicated to specific sectors and featuring unique businesses you can invest in as a client.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                    <h4 className="font-semibold text-base mb-2">Businesses:</h4>
                    <ul className="space-y-2">
                      {fund.businesses.map((biz, bizIdx) => (
                        <li key={bizIdx}>
                          <a
                            href={biz.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold underline hover:text-lightgold font-medium"
                          >
                            {biz.title}
                          </a>
                          <div className="text-xs text-gray-200 mt-1">{biz.description}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <Link 
                to={`/impact-funds#${fund.name.toLowerCase().split(" ")[0]}`}
                className="font-montserrat inline-block px-4 sm:px-6 py-2 bg-white/10 text-white rounded font-medium hover:bg-white/20 transition-colors mt-auto text-center mt-4"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://zfrmz.com/h9vLXQCT9CQUeMDGDhWM"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat inline-block px-6 sm:px-8 py-3 sm:py-4 border border-gold text-gold rounded font-medium hover:bg-gold/10 transition-colors"
          >
            Learn About Our Foundation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsSection;
