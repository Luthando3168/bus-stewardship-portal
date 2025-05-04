
import React, { useEffect, useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, FileText, ChartPie, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import DashboardSummaryCard from "@/components/user/dashboard/DashboardSummaryCard";
import InvestmentOpportunities from "@/components/user/dashboard/InvestmentOpportunities";
import InvestmentsTable from "@/components/user/dashboard/InvestmentsTable";
import PendingDealsTable from "@/components/user/dashboard/PendingDealsTable";
import { useAuthState } from "@/hooks/useAuthState";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const { user } = useAuthState();
  
  useEffect(() => {
    // In your new project, you'll need to implement this logic based on your auth system
    const storedUserName = localStorage.getItem("userName") || "Guest";
    const storedUserSurname = localStorage.getItem("userSurname") || "User";
    const storedClientNumber = localStorage.getItem("clientNumber") || "MCAGUEST001";
    
    setUserName(storedUserName);
    setUserSurname(storedUserSurname);
    setClientNumber(storedClientNumber);
  }, []);

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="text-2xl font-bold text-navyblue">
            {user ? `Welcome, ${userName} ${userSurname}` : 'Welcome, Guest'}
          </h2>
          {user && (
            <div className="text-sm text-muted-foreground">
              Client Number: <span className="font-medium">{clientNumber}</span>
            </div>
          )}
        </div>

        {!user && (
          <Alert className="bg-amber-50 border-amber-200">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-800">Guest Preview Mode</AlertTitle>
            <AlertDescription className="text-amber-700">
              You're viewing MCA Direct in preview mode. To make investments or save your preferences,
              please <Link to="/register" className="font-medium text-amber-900 underline">register</Link> or <Link to="/login" className="font-medium text-amber-900 underline">sign in</Link>.
            </AlertDescription>
          </Alert>
        )}

        <div className="bg-blue-100 px-4 py-3 rounded border border-blue-200 mb-3">
          <h3 className="text-navyblue text-lg font-semibold mb-1">Investment Opportunities</h3>
          <p className="text-muted-foreground text-sm">
            Choose from a wide selection of impact funds to grow your portfolio and support projects that drive positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardSummaryCard
            title="Wallet Balance"
            value={user ? "R 0.00" : "Sign in to view"}
            description={user ? "Available in your Standard Bank account" : "Create an account to manage funds"}
            icon={Wallet}
          />
          <DashboardSummaryCard
            title="Active Investments"
            value={user ? "0" : "Sign in to invest"}
            description={user ? "Start investing today" : "Register to track investments"}
            icon={FileText}
          />
          <DashboardSummaryCard
            title="Total Returns"
            value={user ? "0.0%" : "---"}
            description={user ? "Year-to-date performance" : "Register to track performance"}
            icon={ChartPie}
          />
        </div>

        <div className="bg-blue-50 rounded-lg p-4 text-sm">
          <p className="font-medium text-navyblue">How it works:</p>
          <p className="text-muted-foreground">
            Select business deals from any impact fund below. {user ? 
              "Your selections are linked to their respective funds and consolidated at checkout. Payment is made through your Standard Bank wallet, and your investments will appear in the Pending Deals section." :
              "Create an account to link deals to funds and make investments through your Standard Bank wallet."}
          </p>
        </div>

        <InvestmentOpportunities isGuest={!user} />

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
                {user ? (
                  <InvestmentsTable />
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Sign in to view and manage your investments</p>
                    <Link to="/register" className="bg-gold text-navyblue px-6 py-2 rounded-md hover:bg-gold/90 font-semibold">Register Now</Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Deals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {user ? (
                  <PendingDealsTable />
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Sign in to track your pending deals</p>
                    <Link to="/register" className="bg-gold text-navyblue px-6 py-2 rounded-md hover:bg-gold/90 font-semibold">Register Now</Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
