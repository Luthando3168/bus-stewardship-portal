
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
    { item: "Groceries", amount: 3500 },
    { item: "Meat", amount: 2000 },
    { item: "Vegetables", amount: 800 },
    { item: "Airtime & Data", amount: 1200 },
    { item: "Takeaways", amount: 1500 },
    { item: "Rent/Bond", amount: 5000 },
    { item: "Fuel/Transport", amount: 2500 },
    { item: "School fees", amount: 2500 },
    { item: "Medical aid", amount: 2000 },
    { item: "Clothing & other", amount: 1000 },
  ];

  const totalExpenses = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = 22000 - totalExpenses;

  const steps = [
    {
      title: "Register",
      description: "Sign up to become a client of Luthando Maduna by creating an account on our platform.",
      icon: User
    },
    {
      title: "Select Businesses",
      description: "Browse our Impact Funds and choose the businesses you want to invest in through MCA Direct.",
      icon: CircleDollarSign
    },
    {
      title: "Fund Your Account",
      description: "Deposit funds to your wallet using your Standard Bank account to participate in deals.",
      icon: Circle
    },
    {
      title: "Earn Returns",
      description: "Receive your share of profits as a business owner and build sustainable wealth over time.",
      icon: Circle
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="How We Work"
            subtitle="Understanding the Luthando Maduna Chartered Accountants approach to inclusive business ownership"
            centered
          />

          {/* Introduction and Why We Exist */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-montserrat font-bold mb-4 text-navyblue">Why We Exist</h2>
            <p className="mb-4">
              At Luthando Maduna Chartered Accountants, we exist to solve a fundamental economic imbalance: <strong>the majority of our population does not own the businesses they consume services from monthly</strong>.
            </p>
            <p className="mb-4">
              Think about it – grocery shops, butcheries, private schools, private hospitals, petrol stations, and takeaway shops are all businesses that we spend our money on regularly, but very few of us actually own these establishments or share in their profits.
            </p>
            <p className="mb-8">
              This is the key realization that drives our mission: to create pathways for everyday South Africans to become owners in the businesses they support daily, allowing them to build wealth through shared business ownership.
            </p>
            
            <div className="bg-lightgray rounded-lg p-6 mb-10 text-center">
              <h3 className="text-xl font-medium mb-2">Our Key Insight</h3>
              <p className="mb-4 text-lg font-semibold text-navyblue">
                "A majority of the population does not own businesses that we consume their services monthly such as grocery shops, butcheries, private schools, private hospitals, petrol stations and takeaway shops."
              </p>
            </div>
          </div>

          {/* Example of Monthly Expenses */}
          <div className="max-w-4xl mx-auto mb-16 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-montserrat font-bold mb-2 text-navyblue">The Reality of Monthly Income</h2>
              <p className="mb-4">
                Consider an ordinary person living in Tsakane taking home R22,000 per month. Here's how their money is typically spent:
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Expense Item</TableHead>
                  <TableHead className="text-right">Monthly Amount (R)</TableHead>
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
                  <TableCell>Total Expenses</TableCell>
                  <TableCell className="text-right">R {totalExpenses.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow className="font-bold bg-lightgray">
                  <TableCell>Monthly Income</TableCell>
                  <TableCell className="text-right">R 22,000</TableCell>
                </TableRow>
                <TableRow className={`font-bold ${remaining <= 0 ? 'text-red-600' : 'text-green-600'}`}>
                  <TableCell>Remaining for Savings/Investment</TableCell>
                  <TableCell className="text-right">R {remaining.toLocaleString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="p-6 bg-lightgray">
              <p className="mb-2 font-semibold">
                As you can see, after all monthly expenses, there's virtually nothing left for wealth building or investments.
              </p>
              <p>
                This cycle keeps many South Africans in a perpetual state of consumption without ownership, limiting their ability to build lasting wealth.
              </p>
            </div>
          </div>

          {/* Our Solution */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-montserrat font-bold mb-4 text-navyblue">Our Solution: MCA Direct</h2>
            <p className="mb-4">
              Luthando Maduna Chartered Accountants has developed a groundbreaking approach called <strong>MCA Direct</strong> that allows everyday people to invest in businesses they regularly support.
            </p>
            <p className="mb-4">
              By pooling small investments from many individuals into our Impact Funds, we enable clients to:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 pl-4">
              <li>Invest with just a small minimum amount into various established businesses</li>
              <li>Share in the profits of these businesses as partial owners</li>
              <li>Build wealth through passive income streams from business ownership</li>
              <li>Diversify investments across multiple sectors and business types</li>
            </ul>
            
            <p className="mb-8">
              This approach transforms consumers into owners, allowing them to benefit from the very businesses they spend their money at. The profits generated can then be used to build wealth, create financial security, and eventually achieve financial freedom.
            </p>
          </div>

          {/* How It Works Steps */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-montserrat font-bold mb-6 text-navyblue text-center">How to Get Started</h2>
            
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
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>

          {/* Who Is This For? */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-montserrat font-bold mb-6 text-navyblue text-center">Who MCA Direct Is Designed For</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 text-center">
                <School size={40} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">Parents of School Learners</h3>
                <p className="text-sm">Looking to build additional income sources while managing family expenses</p>
              </div>
              
              <div className="flex flex-col items-center p-4 text-center">
                <Home size={40} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">Domestic Workers</h3>
                <p className="text-sm">Seeking wealth-building opportunities with minimal starting capital</p>
              </div>
              
              <div className="flex flex-col items-center p-4 text-center">
                <Users size={40} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">Low & Middle Income Families</h3>
                <p className="text-sm">Looking to break the consumption cycle and start building assets</p>
              </div>
              
              <div className="flex flex-col items-center p-4 text-center">
                <Car size={40} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">Taxi & Train Commuters</h3>
                <p className="text-sm">Regular passengers who could benefit from owning shares in their transport</p>
              </div>
              
              <div className="flex flex-col items-center p-4 text-center">
                <TrainFront size={40} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sports Fans & Community Members</h3>
                <p className="text-sm">Who want to invest in local businesses and community development</p>
              </div>
              
              <div className="flex flex-col items-center p-4 text-center">
                <User size={40} className="text-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">Entrepreneurs & SASSA Beneficiaries</h3>
                <p className="text-sm">Looking for passive income opportunities to supplement earnings</p>
              </div>
            </div>
            
            <div className="bg-lightgray rounded-lg p-6 mt-8 text-center">
              <p className="text-lg mb-4">
                Each investor must register as a client of Luthando Maduna Chartered Accountants to participate.
              </p>
              <Link to="/register">
                <Button className="bg-navyblue hover:bg-blue-800 text-white">
                  Register as a Client
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
