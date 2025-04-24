
import { FileText, Briefcase, ChartBar, Building, Users, Coins } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-gold" />,
      title: "Accounting & Bookkeeping",
      description: "As qualified money experts, we ensure your business runs properly and legally. We handle all financial records, reporting, and compliance requirements - think of us as your business doctors keeping everything healthy.",
      features: [
        "Daily financial management",
        "Monthly bookkeeping and reconciliation",
        "Financial statements preparation",
        "Payroll processing and management",
        "Tax compliance and returns"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-gold" />,
      title: "Tax Services",
      description: "We make sure all money is counted correctly, taxes are handled properly, and everything is done according to SARS rules. Our expert team keeps you compliant while maximizing efficiency.",
      features: [
        "Strategic tax planning",
        "Tax returns preparation",
        "SARS compliance management",
        "Tax dispute resolution",
        "International tax consulting"
      ]
    },
    {
      icon: <ChartBar className="w-12 h-12 text-gold" />,
      title: "Business Development",
      description: "Our team works hard to make businesses bigger and more profitable. We create and implement strategic plans that help your investment grow over time through our Business Under Stewardship (BUS) program.",
      features: [
        "Growth strategy development",
        "Performance monitoring",
        "Market analysis and research",
        "Business process optimization",
        "Strategic partnership planning"
      ]
    },
    {
      icon: <Coins className="w-12 h-12 text-gold" />,
      title: "Corporate Finance",
      description: "When businesses need more money to grow, we work with banks and other professionals to make it happen safely. Our comprehensive advisory services help secure funding and optimize financial performance.",
      features: [
        "Investment analysis",
        "Fund structuring",
        "Financial modeling",
        "Due diligence",
        "Transaction advisory"
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-gold" />,
      title: "Company Registration",
      description: "We handle all the paperwork and ensure businesses follow all government rules. Our registration and compliance services keep your business legally sound so you don't have to worry about anything.",
      features: [
        "Company incorporation",
        "Statutory compliance",
        "Company secretarial services",
        "Business licensing",
        "Regulatory filings"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      title: "Consulting & Advisory",
      description: "When businesses face challenges, we use our experience as chartered accountants to solve problems and find new opportunities for growth. Our expert team provides guidance across various industries.",
      features: [
        "Strategic planning",
        "Risk management",
        "Business restructuring",
        "Governance advisory",
        "Industry-specific consulting"
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Professional Services Portfolio"
            subtitle="Comprehensive financial solutions tailored to drive your business success"
            centered
          />

          <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-10 rounded-lg hover:bg-lightgray/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 bg-navyblue/5 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="corporate-heading text-2xl md:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-charcoal/80 text-lg md:text-xl leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="corporate-subheading text-xl mb-6">
                    Key Features & Benefits
                  </h4>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-lg text-charcoal/90">
                        <div className="w-2 h-2 bg-gold rounded-full mr-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-24 text-center">
            <p className="text-xl md:text-2xl text-charcoal/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              As a registered accountable financial institution (FIC) operating under SAICA ID 20055210, 
              we maintain the highest standards of professional service and compliance.
            </p>
            <a 
              href="tel:0620193208"
              className="inline-flex items-center bg-gold hover:bg-lightgold text-navyblue px-8 py-4 rounded-lg font-heading font-semibold text-lg transition-colors"
            >
              Contact Us: 062 019 3208
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
