
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Circle, User, Users, School, Home, Car, TrainFront, CircleDollarSign } from "lucide-react";

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
      title: "Join Us",
      description: "Create your free LMCA account - it's as easy as signing up for WhatsApp.",
      icon: User
    },
    {
      title: "Pick Your Business",
      description: "Choose businesses you understand - like if you buy takeaways often, why not own shares in food shops?",
      icon: CircleDollarSign
    },
    {
      title: "We Run Everything (BUS Program)",
      description: "Just like how you trust mechanics with your car, trust our professional team to run your business. We handle everything while you get updates on your phone.",
      icon: Circle
    },
    {
      title: "Start Small, Grow Big",
      description: "Begin with just R500 monthly - it goes straight to your business account at a trusted bank.",
      icon: Circle
    },
    {
      title: "Build Your Legacy",
      description: "These aren't just investments - they're businesses you can pass down to your children.",
      icon: Circle
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="How We Make Business Ownership Simple"
            subtitle="Think of us as your business partners - we do the work, you build the wealth"
            centered
          />

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-montserrat font-bold mb-4 text-navyblue text-center">The Problem We're Solving</h2>
            <p className="mb-4 text-lg">
              Think about it: Every month, we spend money at shops, schools, and clinics - 
              but very few of us actually own these businesses. We're helping change that.
            </p>
            
            <div className="bg-lightgray rounded-lg p-6 mb-10 text-center">
              <h3 className="text-xl font-medium mb-2">Our Simple Truth</h3>
              <p className="text-lg font-semibold text-navyblue">
                "If you're spending money at a business every month, 
                wouldn't you rather be one of its owners?"
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-montserrat font-bold mb-2 text-navyblue text-center">Real Life Example</h2>
              <p className="mb-4 text-center">
                Let's look at how someone earning R22,000 monthly typically spends their money:
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>What We Spend On</TableHead>
                  <TableHead className="text-right">Monthly Cost (R)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthlyExpenses.map((expense, index) => (
                  <TableRow key={index}>
                    <TableCell>{expense.item}</TableCell>
                    <TableCell className="text-right">R {expense.amount.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-bold">
                  <TableCell>Total Going Out</TableCell>
                  <TableCell className="text-right">R {totalExpenses.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow className="font-bold bg-lightgray">
                  <TableCell>Money Coming In</TableCell>
                  <TableCell className="text-right">R 22,000</TableCell>
                </TableRow>
                <TableRow className={`font-bold ${remaining <= 0 ? 'text-red-600' : 'text-green-600'}`}>
                  <TableCell>Left for Saving</TableCell>
                  <TableCell className="text-right">R {remaining.toLocaleString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-montserrat font-bold mb-6 text-navyblue text-center">How It Works</h2>
            
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
            
            <div className="text-center mt-8">
              <Link to="/register">
                <Button className="bg-gold hover:bg-lightgold text-white px-8">
                  Start Your Business Journey
                </Button>
              </Link>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-montserrat font-bold mb-6 text-navyblue text-center">This Is For You If You're...</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 text-center">
                <Home size={40} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">Working Hard</h3>
                <p className="text-sm">And want your money to work hard for you too</p>
              </div>
              
              <div className="flex flex-col items-center p-4 text-center">
                <Users size={40} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">Supporting Family</h3>
                <p className="text-sm">Looking to build something to pass down to your children</p>
              </div>
              
              <div className="flex flex-col items-center p-4 text-center">
                <School size={40} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">Planning Ahead</h3>
                <p className="text-sm">Ready to start building real wealth, one step at a time</p>
              </div>
            </div>
            
            <div className="bg-lightgray rounded-lg p-6 mt-8 text-center">
              <p className="text-lg mb-4">
                Remember: You don't need millions to start. Just R500 monthly gets you going.
              </p>
              <Link to="/register">
                <Button className="bg-navyblue hover:bg-blue-800 text-white">
                  Join Us Today
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
