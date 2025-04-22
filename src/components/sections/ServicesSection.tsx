
import { Briefcase, FileText, ChartBar, Building, Users, Coins } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import SectionTitle from "../ui/SectionTitle";

const ServicesSection = () => {
  const services = [
    {
      title: "Accounting & Bookkeeping",
      description: "Comprehensive accounting and bookkeeping services to keep your financial records accurate and compliant.",
      icon: <FileText />,
      link: "/services#accounting"
    },
    {
      title: "Tax Services",
      description: "Professional tax planning, preparation, and compliance services for individuals and businesses.",
      icon: <Briefcase />,
      link: "/services#tax"
    },
    {
      title: "Business Development",
      description: "Strategic guidance and support to help your business grow and achieve its objectives.",
      icon: <ChartBar />,
      link: "/services#business"
    },
    {
      title: "Corporate Finance",
      description: "Expert financial advisory services for corporate transactions, fundraising, and investment decisions.",
      icon: <Coins />,
      link: "/services#finance"
    },
    {
      title: "Company Registration",
      description: "Efficient company registration services to help you establish your business legally.",
      icon: <Building />,
      link: "/services#company"
    },
    {
      title: "Consulting & Advisory",
      description: "Specialized consulting services to address specific challenges and opportunities in your business.",
      icon: <Users />,
      link: "/services#consulting"
    }
  ];

  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Professional Services" 
          subtitle="Comprehensive financial and business management solutions to help your business thrive"
          centered
        />
        
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
