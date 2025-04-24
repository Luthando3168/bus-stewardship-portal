
import React from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Bus = () => {
  const benefits = [
    "24/7 access to our digital platform for business management",
    "Complete accounting and financial oversight through MCA Direct",
    "Automated tax planning and compliance monitoring",
    "Digital business strategy tools and dashboards",
    "Real-time performance reporting and analysis",
    "Online access to our network of business opportunities",
    "Digital integration with our impact fund investments",
    "Streamlined operations with minimal manual intervention"
  ];

  const steps = [
    {
      step: "Browse Impact Funds",
      description: "Start by exploring our Impact Funds section to view available business opportunities - no registration required."
    },
    {
      step: "Digital Registration",
      description: "Create your account on our platform to access detailed business information and investment opportunities."
    },
    {
      step: "Select Businesses",
      description: "Once registered, browse and select the businesses you're interested in through our user-friendly MCA Direct platform."
    },
    {
      step: "Engagement Letter",
      description: "Sign a professional engagement letter that outlines our services, fee structure, and business management approach."
    },
    {
      step: "Automated Management",
      description: "Access your business dashboard, view reports, and track performance through MCA Direct. Receive automated quarterly statements and bi-annual profit distributions."
    }
  ];

  const features = [
    {
      title: "Self-Service Platform",
      description: "Our digital platform allows you to manage your business investments entirely online, at your own pace."
    },
    {
      title: "User-Friendly Interface",
      description: "Simple, intuitive design makes it easy for everyone, regardless of technical expertise, to navigate and manage their investments."
    },
    {
      title: "Digital Reporting",
      description: "Access real-time reports, financial statements, and profit distributions directly through your personalized dashboard."
    },
    {
      title: "Guided Experience",
      description: "Step-by-step guidance and tooltips throughout the platform help you make informed decisions with confidence."
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Digital Business Management Platform"
            subtitle="Your self-service portal for business ownership and management"
            centered
          />

          {/* Key Message */}
          <div className="flex justify-center">
            <div className="bg-lightgray rounded-lg p-4 md:p-6 mt-4 mb-6 md:mb-8 text-center max-w-3xl w-full">
              <p className="text-mobile-base md:text-lg font-semibold text-navyblue">
                Start by exploring our Impact Funds to view available businesses. Register online to access our digital platform and begin your journey to business ownership - no initial consultation required.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 md:mt-12 space-y-12 md:space-y-16">
            {/* Digital Process */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="text-charcoal space-y-4">
                <p className="text-mobile-base md:text-lg">
                  Our digital platform enables you to browse, select, and manage businesses entirely online. View all available opportunities in our Impact Funds section before registering.
                </p>
              </div>
              <div>
                <p className="text-mobile-base md:text-lg mb-4">
                  Once registered, our automated systems and professional team handle all operational aspects while you maintain full visibility through your personalized dashboard.
                </p>
                <Link 
                  to="/impact-funds" 
                  className="inline-block px-6 py-3 bg-gold text-white rounded-lg hover:bg-lightgold transition-colors"
                >
                  View Impact Funds
                </Link>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-mobile-xl md:text-2xl font-bold text-navyblue mb-6 text-center">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-gold rounded-full flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-mobile-base md:text-base">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h3 className="text-mobile-xl md:text-2xl font-bold text-navyblue mb-6 text-center">Digital Onboarding Process</h3>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-navyblue text-white flex items-center justify-center font-bold text-mobile-base">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-mobile-lg md:text-lg font-semibold text-navyblue">{step.step}</h4>
                      <p className="text-mobile-base md:text-base text-charcoal">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-mobile-xl md:text-2xl font-bold text-navyblue mb-6 text-center">Program Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h4 className="text-mobile-lg md:text-lg font-semibold text-navyblue mb-2">{feature.title}</h4>
                      <p className="text-mobile-base md:text-base text-charcoal">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center">
              <div className="bg-lightgray p-6 md:p-8 rounded-lg text-center max-w-2xl w-full">
                <h3 className="text-mobile-xl md:text-2xl font-bold text-navyblue mb-4">Ready to explore business ownership?</h3>
                <p className="text-mobile-base md:text-lg mb-6">Start by browsing our Impact Funds - no registration required.</p>
                <div className="space-x-4">
                  <Link
                    to="/impact-funds"
                    className="inline-block px-6 py-3 bg-gold text-white rounded font-medium hover:bg-lightgold transition-colors text-mobile-base md:text-base"
                  >
                    Browse Impact Funds
                  </Link>
                  <Link
                    to="/register"
                    className="inline-block px-6 py-3 bg-navyblue text-white rounded font-medium hover:bg-blue-900 transition-colors text-mobile-base md:text-base"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bus;
