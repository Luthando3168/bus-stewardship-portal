
import { Briefcase, FileText, ChartBar, Building, Users, Coins } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import SectionTitle from "../ui/SectionTitle";

const ServicesSection = () => {
  const services = [
    {
      title: "Accounting & Bookkeeping",
      description: "We keep all the money records for your business correct and legal. This means counting all money coming in and going out.",
      icon: <FileText />,
      link: "/services#accounting"
    },
    {
      title: "Tax Services",
      description: "We handle all tax matters so your business stays legal. We make sure the business pays the right amount of tax to government.",
      icon: <Briefcase />,
      link: "/services#tax"
    },
    {
      title: "Business Development",
      description: "We help your business grow bigger and make more money. We create plans that work for the future of your business.",
      icon: <ChartBar />,
      link: "/services#business"
    },
    {
      title: "Corporate Finance",
      description: "We manage the money side of your business. We help get more money when needed and make smart money choices.",
      icon: <Coins />,
      link: "/services#finance"
    },
    {
      title: "Company Registration",
      description: "We set up your business properly with government. We complete all the paperwork to make your business legal.",
      icon: <Building />,
      link: "/services#company"
    },
    {
      title: "Consulting & Advisory",
      description: "We give expert advice when your business faces challenges. We help solve problems and find new opportunities.",
      icon: <Users />,
      link: "/services#consulting"
    }
  ];

  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="What Does A Chartered Accountant Do For You?" 
          subtitle="We are money experts who manage the finances for the businesses you own. We charge a small fee to the businesses, not to you directly."
          centered
        />
        
        <div className="mb-8 max-w-3xl mx-auto text-center">
          <p className="text-charcoal text-lg">
            A Chartered Accountant is a money expert with special training. We make sure your business follows the law, 
            saves money on taxes, and grows bigger over time. The businesses you own pay us, not you directly.
            Your business can be passed down to your children as a lasting legacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
