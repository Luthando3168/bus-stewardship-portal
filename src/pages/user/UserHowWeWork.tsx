
import React from "react";
import UserLayout from "@/components/layout/UserLayout";
import { 
  ShoppingCart, 
  Building, 
  Wallet, 
  ChartBar, 
  Utensils, 
  Bed, 
  Hospital, 
  BookOpen, 
  HandCoins, 
  PiggyBank,
  TrendingUp,
  PieChart,
  Coins,
  Users,
  Building2,
  Briefcase,
  BadgeCheck,
  CircleDollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UserHowWeWork = () => {
  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto space-y-12 py-8">
        {/* Hero Section */}
        <section className="text-center px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navyblue mb-6">
            How We Work at <span className="text-gold">Luthando Maduna</span> Chartered Accountants
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We help our clients build wealth by owning shares in the businesses they use every day.
          </p>
        </section>
        
        {/* Main Concept */}
        <section className="bg-gray-50 rounded-xl p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-6">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Luthando Maduna Chartered Accountants, we believe in a simple yet powerful principle: 
              <span className="font-medium"> Why only be a customer when you can be an owner too?</span>
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We help our clients invest in businesses that supply their everyday needs - from groceries and 
              accommodation to healthcare and education. This means you not only spend money on these essentials,
              but you also share in the profits they generate.
            </p>
            <div className="bg-blue-50 border-l-4 border-navyblue p-4 rounded-r-md">
              <p className="text-navyblue font-medium">
                "We don't just help you manage money; we help you own the businesses where you spend it."
              </p>
            </div>
          </div>
        </section>
        
        {/* Investment Categories */}
        <section className="px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-6 text-center">
            Business Categories You Can Own
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Utensils, name: "Food Retail", color: "bg-amber-50 text-amber-700" },
              { icon: Building, name: "Property", color: "bg-blue-50 text-blue-700" },
              { icon: Hospital, name: "Healthcare", color: "bg-green-50 text-green-700" },
              { icon: BookOpen, name: "Education", color: "bg-purple-50 text-purple-700" },
              { icon: Building2, name: "Franchise", color: "bg-pink-50 text-pink-700" },
              { icon: PieChart, name: "Energy", color: "bg-orange-50 text-orange-700" },
              { icon: Briefcase, name: "Telecom", color: "bg-indigo-50 text-indigo-700" },
              { icon: HandCoins, name: "Finance", color: "bg-emerald-50 text-emerald-700" },
            ].map((category, index) => (
              <div key={index} className={`${category.color} rounded-xl p-4 text-center`}>
                <category.icon className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-medium">{category.name}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/user/investments?tab=opportunities">
              <Button className="bg-gold hover:bg-gold/90 text-white">
                Browse Investment Opportunities
              </Button>
            </Link>
          </div>
        </section>
        
        {/* How It Works Process */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-6 text-center">
            Our Investment Process
          </h2>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: CircleDollarSign,
                title: "Start with R500/month",
                description: "Begin your investment journey with just R500 per month into your dedicated account."
              },
              {
                icon: Briefcase,
                title: "Choose Your Business",
                description: "Select from pre-vetted businesses that match your investment goals and interests."
              },
              {
                icon: BadgeCheck,
                title: "Receive Share Certificate",
                description: "Get official documentation of your business ownership and start earning returns."
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="bg-navyblue rounded-full p-3 text-white mb-4">
                  <step.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-navyblue mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/user/wallet">
              <Button className="bg-navyblue hover:bg-navyblue/90 text-white">
                Manage Your Investments
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </UserLayout>
  );
};

export default UserHowWeWork;
