
import React, { useEffect, useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, FileText, ChartPie } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardSummaryCard from "@/components/user/dashboard/DashboardSummaryCard";
import InvestmentOpportunities from "@/components/user/dashboard/InvestmentOpportunities";
import InvestmentsTable from "@/components/user/dashboard/InvestmentsTable";
import PendingDealsTable from "@/components/user/dashboard/PendingDealsTable";

const UserDashboard = () => {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [clientNumber, setClientNumber] = useState("");

  useEffect(() => {
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

        <div className="bg-blue-100 px-4 py-3 rounded border border-blue-200 mb-3">
          <h3 className="text-navyblue text-lg font-semibold mb-1">Investment Opportunities</h3>
          <p className="text-muted-foreground text-sm">
            Choose from a wide selection of impact funds to grow your portfolio and support projects that drive positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardSummaryCard
            title="Wallet Balance"
            value="R 245,000.00"
            description="Available in your Standard Bank account"
            icon={Wallet}
          />
          <DashboardSummaryCard
            title="Active Investments"
            value="3"
            description="Across 2 impact funds"
            icon={FileText}
          />
          <DashboardSummaryCard
            title="Total Returns"
            value="8.7%"
            description="Year-to-date performance"
            icon={ChartPie}
          />
        </div>

        <div className="bg-blue-50 rounded-lg p-4 text-sm">
          <p className="font-medium text-navyblue">How it works:</p>
          <p className="text-muted-foreground">
            Select business deals from any impact fund below. Your selections are linked to their respective funds
            and consolidated at checkout. Payment is made through your Standard Bank wallet, and your investments
            will appear in the Pending Deals section.
          </p>
        </div>

        <InvestmentOpportunities />

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
                <InvestmentsTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Deals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <PendingDealsTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
