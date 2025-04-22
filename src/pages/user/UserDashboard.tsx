
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, FileText, ChartPie } from "lucide-react";

const UserDashboard = () => {
  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">Welcome, Client User</h2>
        
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

        <Tabs defaultValue="investments">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-2">
            <TabsTrigger value="investments">My Investments</TabsTrigger>
            <TabsTrigger value="opportunities">New Opportunities</TabsTrigger>
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
                      <div>Property Impact Fund</div>
                      <div>R 120,000.00</div>
                      <div className="text-green-600">+8.5%</div>
                      <div>Active</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                      <div>Solar Farm Project</div>
                      <div>Energy Impact Fund</div>
                      <div>R 85,000.00</div>
                      <div className="text-green-600">+11.2%</div>
                      <div>Active</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                      <div>Organic Farm Expansion</div>
                      <div>Agri Impact Fund</div>
                      <div>R 40,000.00</div>
                      <div className="text-green-600">+6.8%</div>
                      <div>Active</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="opportunities">
            <Card>
              <CardHeader>
                <CardTitle>New Investment Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div>Opportunity</div>
                    <div>Fund</div>
                    <div>Min Investment</div>
                    <div>Target Return</div>
                    <div>Action</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                      <div>Mixed-Use Development</div>
                      <div>Property Impact Fund</div>
                      <div>R 50,000.00</div>
                      <div>9.5%</div>
                      <div>
                        <button className="bg-gold hover:bg-lightgold text-white px-3 py-1 rounded">
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                      <div>Wind Turbine Installation</div>
                      <div>Energy Impact Fund</div>
                      <div>R 75,000.00</div>
                      <div>12.0%</div>
                      <div>
                        <button className="bg-gold hover:bg-lightgold text-white px-3 py-1 rounded">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
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
