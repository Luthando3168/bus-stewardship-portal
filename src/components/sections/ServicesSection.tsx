
import { Briefcase, FileText, ChartBar, Building, Users, Coins } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import SectionTitle from "../ui/SectionTitle";

const ServicesSection = () => {
  const services = [
    {
      title: "What is a Chartered Accountant?",
      description: "We are money experts who make sure your business runs properly and legally. Think of us as your business doctors who keep everything healthy.",
      icon: <Briefcase />,
      link: "/services#accounting"
    },
    {
      title: "We Handle the Money",
      description: "We make sure all the money is counted correctly, bills are paid on time, and taxes are handled properly. Your investment is in safe hands.",
      icon: <FileText />,
      link: "/services#tax"
    },
    {
      title: "We Grow the Business",
      description: "Our team works hard to make the business bigger and more profitable. We create plans that help your investment grow over time.",
      icon: <ChartBar />,
      link: "/services#business"
    },
    {
      title: "We Get More Money",
      description: "When the business needs more money to grow, we work with banks and other professionals to make it happen safely.",
      icon: <Coins />,
      link: "/services#finance"
    },
    {
      title: "We Keep Things Legal",
      description: "We handle all the paperwork and make sure the business follows all government rules. You don't have to worry about anything.",
      icon: <Building />,
      link: "/services#company"
    },
    {
      title: "We Give Expert Advice",
      description: "When the business faces challenges, we use our experience to solve problems and find new opportunities for growth.",
      icon: <Users />,
      link: "/services#consulting"
    }
  ];

  return (
    <section className="py-20 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="What We Do For You as Chartered Accountants" 
          subtitle="We run the businesses you own. Our services are paid for by the business, not by you directly."
          centered
        />
        
        <div className="mb-8 max-w-3xl mx-auto text-center">
          <p className="text-charcoal text-lg">
            As Chartered Accountants, we're qualified to manage businesses properly. 
            The businesses you own pay us to run them, not you. 
            This way, you can focus on your life while we focus on growing your business.
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
