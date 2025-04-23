
import { FileText, Briefcase, ChartBar, Building, Users, Coins } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-gold" />,
      title: "Accounting & Bookkeeping",
      description: "Our comprehensive accounting and bookkeeping services ensure accurate financial records, timely reporting, and compliance with regulatory requirements. We handle everything from daily transactions to financial statements.",
      features: [
        "Monthly bookkeeping",
        "Financial statements preparation",
        "Management accounts",
        "Payroll management",
        "VAT returns"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-gold" />,
      title: "Tax Services",
      description: "Expert tax planning and compliance services for individuals and businesses. We ensure optimal tax efficiency while maintaining full compliance with SARS regulations.",
      features: [
        "Tax planning and strategy",
        "Tax returns preparation",
        "SARS compliance",
        "Tax dispute resolution",
        "International tax consulting"
      ]
    },
    {
      icon: <ChartBar className="w-12 h-12 text-gold" />,
      title: "Business Development",
      description: "Strategic guidance and support to help your business grow and thrive under our Business Under Stewardship (BUS) program.",
      features: [
        "Business strategy development",
        "Growth planning",
        "Market analysis",
        "Performance monitoring",
        "Business optimization"
      ]
    },
    {
      icon: <Coins className="w-12 h-12 text-gold" />,
      title: "Corporate Finance",
      description: "Comprehensive financial advisory services for corporate transactions, fundraising, and strategic investment decisions through Sankofa Capital Partners.",
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
      description: "Efficient company registration and secretarial services to establish and maintain your business entity in compliance with regulations.",
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
      description: "Specialized consulting services provided by our team of professional chartered accountants, working across various industries.",
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
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Our Professional Services"
            subtitle="Comprehensive financial and business solutions delivered by experienced chartered accountants"
            centered
          />

          <div className="mt-8 md:mt-16 space-y-6 md:space-y-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8 rounded-lg hover:bg-lightgray transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gold/10 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-montserrat font-bold text-navyblue">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-charcoal text-mobile-base md:text-base mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                  <h4 className="font-montserrat font-semibold text-lg mb-4 text-navyblue">
                    Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-charcoal text-mobile-base md:text-base">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-20 text-center">
            <p className="text-mobile-lg md:text-lg text-charcoal mb-6 md:mb-8 max-w-2xl mx-auto">
              As a registered accountable financial institution (FIC) operating under SAICA ID 20055210, 
              we maintain the highest standards of professional service and compliance.
            </p>
            <a 
              href="tel:0620193208"
              className="inline-flex items-center bg-gold text-navyblue px-6 py-3 md:px-8 md:py-4 rounded font-montserrat font-medium hover:bg-lightgold transition-colors text-mobile-base md:text-base"
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
