
import React, { useEffect, useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, FileText, ChartPie } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Extended impact funds for the dashboard (up to mytelco)
const impactFunds = [
  {
    id: "myfarm",
    name: "MyFarm", // Removed "Impact Fund"
    color: "bg-gradient-to-br from-green-700 to-green-900",
    minInvestment: "R 5,000",
    count: 3,
  },
  {
    id: "myproperty",
    name: "MyProperty", // Removed "Impact Fund"
    color: "bg-gradient-to-br from-blue-700 to-blue-900",
    minInvestment: "R 10,000",
    count: 3,
  },
  {
    id: "myfranchise",
    name: "MyFranchise", // Removed "Impact Fund"
    color: "bg-gradient-to-br from-red-600 to-red-800",
    minInvestment: "R 5,000",
    count: 3,
  },
  {
    id: "myfoodretail",
    name: "MyFoodRetail", // Removed "Impact Fund"
    color: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    minInvestment: "R 5,000",
    count: 2,
  },
  {
    id: "myenergy",
    name: "MyEnergy", // Removed "Impact Fund"
    color: "bg-gradient-to-br from-orange-600 to-amber-900",
    minInvestment: "R 3,000",
    count: 2,
  },
  {
    id: "myhealth",
    name: "MyHealth", // Removed "Impact Fund"
    color: "bg-gradient-to-br from-pink-600 to-pink-900",
    minInvestment: "R 2,500",
    count: 2,
  },
  {
    id: "mytech",
    name: "MyTech", // Removed "Impact Fund"
    color: "bg-gradient-to-br from-purple-600 to-violet-900",
    minInvestment: "R 4,000",
    count: 2,
  },
  {
    id: "myeducation",
    name: "MyEducation", // Removed "Impact Fund"
    color: "bg-gradient-to-br from-indigo-700 to-indigo-900",
    minInvestment: "R 1,500",
    count: 2,
  },
  {
    id: "mytelco",
    name: "MyTelco", // Removed "Impact Fund"
    color: "bg-gradient-to-br from-blue-500 to-blue-800",
    minInvestment: "R 2,500",
    count: 2,
  }
];

const UserDashboard = () => {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [clientNumber, setClientNumber] = useState("");

  useEffect(() => {
    // Get user details from localStorage
    const storedName = localStorage.getItem("userName") || "";
    const storedSurname = localStorage.getItem("userSurname") || "";
    setUserName(storedName);
    setUserSurname(storedSurname);

    const storedClientNumber = localStorage.getItem("clientNumber") || "N/A";
    setClientNumber(storedClientNumber);
  }, []);

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="text-2xl font-bold text-navyblue">
            Welcome, {userName} {userSurname}
          </h2>
          <div className="text-sm text-muted-foreground">
            Client Number: <span className="font-medium">{clientNumber}</span>
          </div>
        </div>

        {/* Intro title + explanation */}
        <div className="bg-blue-100 px-4 py-3 rounded border border-blue-200 mb-3">
          <h3 className="text-navyblue text-lg font-semibold mb-1">Investment Opportunities</h3>
          <p className="text-muted-foreground text-sm">
            Choose from a wide selection of impact funds to grow your portfolio and support projects that drive positive change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R 245,000.00</div>
              <p className="text-xs text-muted-foreground">
                Available in your Standard Bank account
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                Across 2 impact funds
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
              <ChartPie className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.7%</div>
              <p className="text-xs text-muted-foreground">
                Year-to-date performance
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 text-sm">
          <p className="font-medium text-navyblue">How it works:</p>
          <p className="text-muted-foreground">
            Select business deals from any impact fund below. Your selections are linked to their respective funds
            and consolidated at checkout. Payment is made through your Standard Bank wallet, and your investments
            will appear in the Pending Deals section.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Impact Funds</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {impactFunds.map((fund) => (
              <div
                key={fund.id}
                className={`rounded-lg text-white overflow-hidden shadow-lg ${fund.color} hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2">{fund.name}</h3>
                  <p className="text-sm mb-4">Min Investment: {fund.minInvestment}</p>
                  <p className="text-sm text-white/80 mb-4">{fund.count} investment opportunities available</p>
                  <Link to={`/user/new-deals?fund=${fund.id}`}>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white">
                      Browse Opportunities
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Tabs defaultValue="investments">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-2">
            <TabsTrigger value="investments">My Investments</TabsTrigger>
            <TabsTrigger value="pending">Pending Deals</TabsTrigger>
          </TabsList>
          <TabsContent value="investments">
            <Card>
              <CardHeader>
                <CardTitle>Your Current Investments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div>Investment</div>
                    <div>Fund</div>
                    <div>Amount</div>
                    <div>Return</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                      <div>Downtown Office Building</div>
                      <div>MyProperty Impact Fund</div>
                      <div>R 120,000.00</div>
                      <div className="text-green-600">+8.5%</div>
                      <div>Active</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                      <div>Solar Farm Project</div>
                      <div>MyEnergy Impact Fund</div>
                      <div>R 85,000.00</div>
                      <div className="text-green-600">+11.2%</div>
                      <div>Active</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                      <div>Organic Farm Expansion</div>
                      <div>MyFarm Impact Fund</div>
                      <div>R 40,000.00</div>
                      <div className="text-green-600">+6.8%</div>
                      <div>Active</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Deals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div>Deal</div>
                    <div>Fund</div>
                    <div>Amount</div>
                    <div>Order Number</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                      <div>Urban Farming Project</div>
                      <div>MyFarm Impact Fund</div>
                      <div>R 10,000.00</div>
                      <div className="font-mono text-sm">MCA-583921-0472</div>
                      <div>Processing</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                      <div>Student Accommodation</div>
                      <div>MyProperty Impact Fund</div>
                      <div>R 15,000.00</div>
                      <div className="font-mono text-sm">MCA-583546-2187</div>
                      <div>Pending Approval</div>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-2">
                  <Link to="/user/pending-deals">
                    <Button variant="outline">View All Pending Deals</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;

// IMPORTANT: This file is now quite long (over 220 lines). Please consider asking me to refactor it into smaller focused files for easier maintenance.
