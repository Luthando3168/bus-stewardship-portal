
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Circle, User, Users, School, Home, CircleDollarSign, FileCheck, CreditCard, Building } from "lucide-react";

const HowWeWork = () => {
  const monthlyExpenses = [
    { item: "Daily Groceries", amount: 3500 },
    { item: "Meat & Fish", amount: 2000 },
    { item: "Fresh Produce", amount: 800 },
    { item: "Phone & Internet", amount: 1200 },
    { item: "Food Takeaways", amount: 1500 },
    { item: "Housing", amount: 5000 },
    { item: "Transport", amount: 2500 },
    { item: "Education", amount: 2500 },
    { item: "Healthcare", amount: 2000 },
    { item: "Other Needs", amount: 1000 },
  ];

  const totalExpenses = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = 22000 - totalExpenses;

  const steps = [
    {
      title: "Register & Get Screened",
      description: "Create your MCA Direct account and complete our screening process. We need to know you to serve you better.",
      icon: FileCheck
    },
    {
      title: "Open Your Business Account",
      description: "We'll help you set up a dedicated bank account where your R500 monthly investment is safely kept until you approve a deal.",
      icon: CreditCard
    },
    {
      title: "Choose Your Investments",
      description: "Browse through pre-vetted business opportunities that match your investment level and interests.",
      icon: Building
    },
    {
      title: "We Present Real Deals",
      description: "When a suitable business opportunity comes up, we'll present it to you. Your money only moves when you approve the deal.",
      icon: CircleDollarSign
    },
    {
      title: "Get Your Share Certificate",
      description: "Once you approve and join a business deal, you receive an official share certificate as proof of ownership.",
      icon: FileCheck
    }
  ];

  const faqs = [
    {
      question: "What happens to my R500 monthly investment?",
      answer: "Your R500 goes directly into your dedicated business bank account that we help set up. This money stays untouched in your account until you personally approve a specific business deal you want to join."
    },
    {
      question: "How long does it take to join a business?",
      answer: "The timing varies based on available opportunities and your investment preferences. We focus on finding genuine, profitable businesses, which can take anywhere from 3-12 months. Your money stays safe in your account until then."
    },
    {
      question: "Who runs the business once I invest?",
      answer: "Our professional team handles all day-to-day operations through our Business Under Stewardship (BUS) program. You own, we manage, and you get regular updates."
    },
    {
      question: "What types of businesses can I invest in?",
      answer: "We focus on essential businesses people use every day - from food shops and farms to schools and clinics. You can choose based on your interests and investment level."
    },
    {
      question: "How do I know my investment is safe?",
      answer: "Your money stays in your dedicated bank account until you approve a specific deal. Once invested, you receive official share certificates, and we're regulated by SAICA (ID: 20055210)."
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="How We Make Business Ownership Real"
            subtitle="Your journey from saving to owning - clear steps, real results"
            centered
          />

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-montserrat font-bold mb-4 text-navyblue text-center">The Problem We're Fixing</h2>
            <p className="mb-4 text-lg">
              Every month, we spend money at various businesses - but very few of us actually own these businesses. 
              We're changing this by making business ownership accessible to everyone.
            </p>
            
            <div className="bg-lightgray rounded-lg p-6 mb-10 text-center">
              <h3 className="text-xl font-medium mb-2">Our Promise to You</h3>
              <p className="text-lg font-semibold text-navyblue">
                "Your money stays in your account until you approve a real business deal. 
                No pressure, no rush - just real ownership opportunities when they're ready."
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-montserrat font-bold mb-6 text-navyblue text-center">Your Journey to Business Ownership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="border-l-4 border-gold">
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-gold rounded-full p-2 mr-4 text-white">
                      <step.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-montserrat font-bold mb-6 text-navyblue text-center">
              Frequently Asked Questions
            </h2>
            <Accordion 
              type="single" 
              collapsible 
              className="w-full space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-navyblue hover:text-gold transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-lightgray rounded-lg p-6 text-center">
              <p className="text-lg mb-4">
                Ready to start your business ownership journey? Join us with just R500 monthly.
              </p>
              <Link to="/register">
                <Button className="bg-navyblue hover:bg-blue-800 text-white">
                  Start Your Registration
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowWeWork;
