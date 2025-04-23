
import React from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Bus = () => {
  const benefits = [
    "Professional business management by qualified chartered accountants",
    "Complete accounting and financial oversight",
    "Tax planning and compliance",
    "Business strategy development and implementation",
    "Regular performance reporting and analysis",
    "Access to our network of business and investment opportunities",
    "Seamless integration with our impact fund investment opportunities",
    "Reduced operational burden while maintaining ownership"
  ];

  const features = [
    {
      title: "Comprehensive Management",
      description: "We take care of the day-to-day operations, financial management, and strategic planning of your business."
    },
    {
      title: "Owner Maintains Control",
      description: "You maintain ownership and strategic decision-making authority while we handle the operational complexities."
    },
    {
      title: "Transparent Reporting",
      description: "Quarterly financial statements delivered via MCA Direct and profit sharing twice yearly to keep you informed."
    },
    {
      title: "Multi-Business Integration",
      description: "Effectively manage multiple businesses under one professional stewardship umbrella."
    }
  ];

  const steps = [
    {
      step: "Initial Consultation",
      description: "We assess your business needs, goals, and current operational structure."
    },
    {
      step: "Business Selection",
      description: "Browse our Impact Funds and choose the businesses you want to own through MCA Direct."
    },
    {
      step: "Stewardship Agreement",
      description: "We establish a formal agreement outlining management responsibilities, reporting structures, and fee arrangements."
    },
    {
      step: "Transition to Management",
      description: "We implement systems and processes to ensure a smooth transition to professional management."
    },
    {
      step: "Ongoing Management & Reporting",
      description: "Our team manages day-to-day operations. You'll receive quarterly financial statements via MCA Direct and profit-sharing takes place twice yearly."
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Business Under Stewardship Program"
            subtitle="Professional management solutions for business owners"
            centered
          />

          {/* Centered key message below section title */}
          <div className="flex justify-center">
            <div className="bg-lightgray rounded-lg p-6 mt-4 mb-8 text-center max-w-3xl w-full">
              <p className="text-lg font-semibold text-navyblue">
                Under the BUS program, once you've selected the businesses you want to own, our team professionally manages these on your behalf. You'll receive regular updates and quarterly financial statements via MCA Direct. Profit sharing occurs twice a year, so you benefit directly from your business ownership while we handle the day-to-day management.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 space-y-16">
            {/* Introduction */}
            <div className="text-charcoal space-y-6">
              <p className="text-lg">
                The Business Under Stewardship (BUS) program is our flagship service that enables business owners to
                benefit from professional management while maintaining ownership of their companies. Our team of chartered
                accountants and business professionals takes on the operational management of your business, allowing you
                to focus on strategic growth or pursue other ventures.
              </p>
              <p>
                This innovative approach bridges the gap between complete ownership burden and selling your business,
                providing a "third way" that combines the benefits of professional management with the wealth creation
                potential of continued ownership. With regular reporting, quarterly financial statements via MCA Direct, and twice-yearly profit sharing, you can confidently build lasting wealth.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-navyblue mb-6 text-center">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-gold rounded-full flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h3 className="text-2xl font-bold text-navyblue mb-6 text-center">How It Works</h3>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navyblue text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-navyblue">{step.step}</h4>
                      <p className="text-charcoal">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-navyblue mb-6 text-center">Program Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-semibold text-navyblue mb-2">{feature.title}</h4>
                      <p className="text-charcoal">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact/Call to Action, centered */}
            <div className="flex justify-center">
              <div className="bg-lightgray p-8 rounded-lg text-center max-w-2xl w-full">
                <h3 className="text-2xl font-bold text-navyblue mb-4">Ready to transform your business management?</h3>
                <p className="mb-6">Contact us today to learn how the BUS program can benefit you with full professional management, quarterly financial reporting via MCA Direct, and twice-yearly profit-sharing opportunities.</p>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-gold text-white rounded font-medium hover:bg-lightgold transition-colors"
                >
                  Request a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bus;
