
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";

const BusSection = () => {
  const features = [
    {
      title: "Professional Management",
      description: "Our team of chartered accountants manages daily operations, ensuring your business runs efficiently."
    },
    {
      title: "Financial Oversight",
      description: "Comprehensive financial management including accounting, bookkeeping, and tax compliance."
    },
    {
      title: "Business Development",
      description: "Strategic guidance to help your business grow and expand into new markets."
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring your business meets all legal and regulatory requirements."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="Business Under Stewardship Program"
              subtitle="Our innovative program to help you own and grow multiple businesses with professional management"
            />

            <p className="font-lato text-charcoal mb-6">
              The Business Under Stewardship (BUS) program is our flagship service where we manage the daily operations of your businesses while providing comprehensive professional services.
            </p>

            <ul className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 h-6 w-6 bg-gold rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-montserrat font-semibold text-lg text-navyblue">{feature.title}</h3>
                    <p className="font-lato text-charcoal">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/bus"
              className="font-montserrat inline-block px-6 py-3 bg-navyblue text-white rounded font-medium hover:bg-deepblue transition-colors"
            >
              Learn More About BUS Program
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 relative z-10">
              <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-r from-navyblue to-deepblue flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-gold text-5xl font-bold">BUS</span>
                    <p className="text-white mt-4 font-montserrat">Business Under Stewardship</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-gold rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusSection;
