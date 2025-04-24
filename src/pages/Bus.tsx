
import React from 'react';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, FileText, Briefcase, BanknoteIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Bus = () => {
  const benefits = [
    "You own real registered businesses, not just shares in a company",
    "Your money stays in your account until you approve joining a business",
    "Professional chartered accountants manage everything day-to-day",
    "Regular updates and reports on your phone or computer",
    "All paperwork and legal matters handled by our team",
    "Support from banks and business experts",
    "Official share certificates for every business you own",
    "Monthly financial reports in simple language"
  ];

  const steps = [
    {
      step: "Check Available Businesses",
      description: "Browse through businesses you can own - from food shops to farms. No pressure to join until you're ready."
    },
    {
      step: "Join with R500 Monthly",
      description: "Your money goes to a special business bank account in your name. It stays there until you choose to join a business."
    },
    {
      step: "Get Professionally Screened",
      description: "We check your details to make sure we match you with the right business opportunities. Think of it like a business marriage - we want it to last!"
    },
    {
      step: "Choose Your Business",
      description: "Pick the type of business you want to own. We'll present real opportunities when they come up, and you decide if you want in."
    },
    {
      step: "We Run Everything",
      description: "Once you approve joining a business, our qualified team handles all the day-to-day work. You get your share certificate and regular updates."
    }
  ];

  const features = [
    {
      title: "Like Having a Business Partner",
      description: "We're like your business-savvy partner who handles all the hard work. You own it, we run it, and keep you informed.",
      icon: Handshake
    },
    {
      title: "Your Money Stays Safe",
      description: "Your R500 monthly investment stays in your business bank account. It only moves when you say yes to a specific business deal.",
      icon: BanknoteIcon
    },
    {
      title: "Professional Management",
      description: "Our team of chartered accountants and business experts handle everything from staff to suppliers to taxes.",
      icon: Users
    },
    {
      title: "Clear Communication",
      description: "Get simple, regular updates about your business. No complicated jargon - just straight talk about how things are going.",
      icon: FileText
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Business Under Stewardship (BUS)"
            subtitle="Like having a professional business partner who does all the work"
            centered
          />

          {/* Key Message */}
          <div className="flex justify-center mb-12">
            <div className="bg-lightgray rounded-lg p-6 md:p-8 mt-4 text-center max-w-3xl w-full">
              <p className="text-lg md:text-xl font-semibold text-navyblue">
                "Think of BUS like this: You own the business, but instead of running it yourself, 
                you have qualified accountants and banks as your partners who handle everything. 
                You get the benefits of ownership without the daily stress."
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-l-4 border-gold">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold rounded-full p-2 text-white">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navyblue mb-2">{feature.title}</h3>
                      <p className="text-charcoal">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navyblue mb-8 text-center">How BUS Works</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navyblue">{step.step}</h4>
                    <p className="text-charcoal">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navyblue mb-8 text-center">What You Get</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gold text-white flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-charcoal">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            <div className="bg-lightgray p-8 rounded-lg text-center max-w-2xl w-full">
              <h3 className="text-2xl font-bold text-navyblue mb-4">Ready to Own a Real Business?</h3>
              <p className="text-lg mb-6">Start your journey with just R500 monthly. Your money stays safe until you approve a business deal.</p>
              <div className="space-x-4">
                <Link
                  to="/how-we-work"
                  className="inline-block px-6 py-3 bg-navyblue text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  to="/register"
                  className="inline-block px-6 py-3 bg-gold text-white rounded-lg hover:bg-lightgold transition-colors"
                >
                  Start Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bus;
