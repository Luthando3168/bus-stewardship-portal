
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
      description: "Comprehensive financial advisory services to help businesses make strategic investment decisions, secure funding, and optimize financial performance.",
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
