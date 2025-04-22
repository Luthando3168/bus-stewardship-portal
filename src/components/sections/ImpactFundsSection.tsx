
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

// Each fund's details as per the form
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
      },
      {
        title: "Urban Poultry Expansion (Gauteng)",
        description: "A commercial poultry operation in urban areas, specializing in ethical practices and supplying to shops and restaurants.",
        minInvestment: "R 5,000",
      },
      {
        title: "Agri Processing Plant (Free State)",
        description: "A food processing facility focused on value-adding to raw agricultural products, creating shelf-stable food items.",
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
      },
      {
        title: "Back-up Power Solutions (Western Cape)",
        description: "Installation of backup power systems for residential and commercial properties, focusing on reliable power during outages.",
        minInvestment: "R 10,000",
      },
      {
        title: "Security Systems (National)",
        description: "Implementation of comprehensive security solutions for properties nationwide, including monitoring and response services.",
        minInvestment: "R 10,000",
      }
    ],
  },
  {
    name: "MyFoodRetail Impact Fund",
    description: "Investing in food retail businesses that provide access to quality nutrition. Minimum investment of R5,000.",
    color: "from-amber-500 to-amber-700",
    businesses: [
      {
        title: "Lifestyle Mini Complex (Western Cape)",
        description: "A hub offering groceries (Food Corner), meat products (Meat Co), and fresh produce (Fruits & Veg) sourced from MyFarm, targeting diverse communities.",
        minInvestment: "R 5,000",
      },
      {
        title: "MyFranchise (National)",
        description: "Invest in selected franchises, add to your portfolio, and benefit from operational support and steady returns.",
        minInvestment: "R 5,000",
      },
      {
        title: "Community Markets (Gauteng)",
        description: "Pop-up and permanent market spaces offering local produce and goods directly to consumers in community settings.",
        minInvestment: "R 5,000",
      },
      {
        title: "Healthy Fast Food Outlet (KZN)",
        description: "Quick-service restaurant focusing on nutritious, locally-sourced food options with affordable pricing for health-conscious consumers.",
        minInvestment: "R 5,000",
      },
      {
        title: "Food Delivery Services (Urban Hubs)",
        description: "Specialized food delivery network focusing on fresh, local foods delivered quickly within urban areas.",
        minInvestment: "R 5,000",
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
  },
  {
    name: "MyFuel Impact Fund",
    description: "Financing fuel retail and related energy distribution businesses. Minimum investment of R10,000.",
    color: "from-blue-600 to-blue-800",
    businesses: [
      {
        title: "Fuel Station Network (National)",
        description: "Investment in strategically located fuel stations across South Africa.",
        minInvestment: "R 10,000",
      },
      {
        title: "Alternative Fuel Distribution (Urban Centers)",
        description: "Distribution networks for alternative and environmentally friendly fuel options.",
        minInvestment: "R 10,000",
      },
      {
        title: "Convenience Store Integration (National)",
        description: "Development of modern convenience stores integrated with fuel stations.",
        minInvestment: "R 10,000",
      }
    ],
  },
  {
    name: "MySchool Impact Fund",
    description: "Supporting educational facilities and infrastructure. Minimum investment of R5,000.",
    color: "from-purple-600 to-purple-800",
    businesses: [
      {
        title: "Pre-primary Schools (Urban Areas)",
        description: "Development of quality pre-primary educational facilities in urban communities.",
        minInvestment: "R 5,000",
      },
      {
        title: "Primary School Facilities (National)",
        description: "Investment in primary school infrastructure and educational resources.",
        minInvestment: "R 5,000",
      },
      {
        title: "Educational Technology (National)",
        description: "Implementation of educational technology solutions in schools across South Africa.",
        minInvestment: "R 5,000",
      }
    ],
  },
  {
    name: "MyHealth Impact Fund",
    description: "Investing in healthcare facilities and services. Minimum investment of R5,000.",
    color: "from-green-600 to-green-800",
    businesses: [
      {
        title: "Community Clinics (Underserved Areas)",
        description: "Establishment of accessible healthcare facilities in underserved communities.",
        minInvestment: "R 5,000",
      },
      {
        title: "Specialized Medical Services (Urban Centers)",
        description: "Investment in specialized medical service providers in urban locations.",
        minInvestment: "R 5,000",
      },
      {
        title: "Mobile Health Solutions (National)",
        description: "Development of mobile healthcare services reaching remote areas.",
        minInvestment: "R 5,000",
      }
    ],
  },
  {
    name: "MyEducation Impact Fund",
    description: "Financing educational initiatives beyond traditional schooling. Minimum investment of R5,000.",
    color: "from-indigo-600 to-indigo-800",
    businesses: [
      {
        title: "Skills Development Centers (National)",
        description: "Establishment of centers focusing on practical skills training and development.",
        minInvestment: "R 5,000",
      },
      {
        title: "Educational Publishing (National)",
        description: "Production and distribution of educational materials across South Africa.",
        minInvestment: "R 5,000",
      },
      {
        title: "Online Learning Platforms (National)",
        description: "Development of accessible online learning resources and platforms.",
        minInvestment: "R 5,000",
      }
    ],
  },
  {
    name: "MyTelco Impact Fund",
    description: "Investing in telecommunications infrastructure and digital inclusion projects. Minimum investment of R5,000.",
    color: "from-indigo-600 to-indigo-800",
    businesses: [
      {
        title: "Rural Connectivity Project (National)",
        description: "Expanding internet and telecommunications access to underserved rural areas through innovative and cost-effective technologies.",
        minInvestment: "R 5,000",
      },
      {
        title: "5G Urban Networks (Gauteng)",
        description: "Development of high-speed 5G network infrastructure in urban centers, enabling advanced digital services and applications.",
        minInvestment: "R 5,000",
      },
      {
        title: "Telecom Equipment Production (Western Cape)",
        description: "Manufacturing and assembly of telecommunications equipment and components for domestic and export markets.",
        minInvestment: "R 5,000",
      },
      {
        title: "Digital Inclusion Initiative (Eastern Cape)",
        description: "Comprehensive program combining hardware, connectivity, and digital skills training for underserved communities.",
        minInvestment: "R 5,000",
      },
      {
        title: "Satellite Broadband Services (National)",
        description: "Deployment of satellite-based internet services to reach remote locations where traditional infrastructure is impractical.",
        minInvestment: "R 5,000",
      }
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
          Luthando Maduna Chartered Accountants assists clients to own multiple businesses, which we then manage for them. 
          Clients can customize their investment portfolio from various impact funds based on their interests and financial goals.
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
                to={`/user/new-deals?fund=${fund.name.toLowerCase().split(" ")[0]}`}
                className="font-montserrat inline-block px-4 sm:px-6 py-2 bg-white/10 text-white rounded font-medium hover:bg-white/20 transition-colors mt-auto text-center mt-4"
              >
                View Opportunities
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="p-6 bg-navyblue/40 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-bold text-xl mb-4">MCA Direct</h3>
            <p className="mb-4 text-gray-300">
              MCA Direct is our in-house platform that we use to assist clients in managing their investment portfolio and business holdings. 
              Register and login to get updates on your investments and available opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link
                to="/register"
                className="font-montserrat inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gold text-navyblue rounded font-medium hover:bg-lightgold transition-colors"
              >
                Register Now
              </Link>
              <Link
                to="/login" 
                className="font-montserrat inline-block px-6 sm:px-8 py-3 sm:py-4 border border-gold text-gold rounded font-medium hover:bg-gold/10 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactFundsSection;
