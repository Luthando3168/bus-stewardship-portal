
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";

const BusSection = () => {
  const features = [
    {
      title: "Complete Business Management",
      description: "We take full responsibility for managing your businesses day-to-day operations, letting you focus on other priorities."
    },
    {
      title: "Professional Team",
      description: "Our chartered accountants handle everything from accounting and tax compliance to business strategy."
    },
    {
      title: "Digital Platform",
      description: "Access financial reports and track your business performance through our MCA Direct platform."
    },
    {
      title: "Regular Updates",
      description: "Receive quarterly financial statements and twice-yearly profit distributions directly to your account."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="Let Us Manage Your Business"
              subtitle="Professional management services through our Business Under Stewardship program"
            />

            <div className="bg-lightgray rounded-lg p-6 mb-8">
              <p className="font-semibold text-lg text-navyblue text-center">
                "Simply select the businesses you want to own through MCA Direct, and our team of chartered accountants will professionally manage them on your behalf."
              </p>
            </div>

            <p className="font-lato text-charcoal mb-8 text-lg">
              Through our Business Under Stewardship (BUS) program, you can own multiple businesses without the hassle of day-to-day management. We handle everything from operations and accounting to strategy and growth, while you receive regular updates and profit distributions through MCA Direct.
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

            <div className="text-center">
              <Link
                to="/bus"
                className="font-montserrat inline-block px-8 py-4 bg-gold text-white rounded-lg font-medium hover:bg-lightgold transition-colors"
              >
                Learn More About Business Management
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 relative z-10">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-gray-100">
                <img
                  src="/lovable-uploads/aa792d14-7473-4673-89cf-c3f6e1d15711.png"
                  alt="Business Under Stewardship"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png";
                  }}
                />
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
