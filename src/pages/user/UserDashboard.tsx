
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, FileText, ChartPie } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Simplified impact funds for the dashboard
const impactFunds = [
  {
    id: "myfarm",
    name: "MyFarm Impact Fund",
    color: "bg-gradient-to-br from-green-700 to-green-900",
    minInvestment: "R 5,000",
    count: 3,
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    color: "bg-gradient-to-br from-blue-700 to-blue-900",
    minInvestment: "R 10,000",
    count: 3,
  },
  {
    id: "myfranchise",
    name: "MyFranchise Impact Fund",
    color: "bg-gradient-to-br from-red-600 to-red-800",
    minInvestment: "R 5,000",
    count: 3,
  }
];

const UserDashboard = () => {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  
  useEffect(() => {
    // Get user details from localStorage
    const storedName = localStorage.getItem("userName") || "";
    const storedSurname = localStorage.getItem("userSurname") || "";
    setUserName(storedName);
    setUserSurname(storedSurname);
  }, []);

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">
          Welcome, {userName} {userSurname}
        </h2>
        
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
