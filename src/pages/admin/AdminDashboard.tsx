
import AdminLayout from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UsersIcon, FileChartLine, Bank } from "lucide-react";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">Dashboard Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
              <FileChartLine className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">
                +4 deals added this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total AUM</CardTitle>
              <Bank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R 14.2M</div>
              <p className="text-xs text-muted-foreground">
                +5.2% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="deals">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 md:grid-cols-3">
            <TabsTrigger value="deals">Active Deals</TabsTrigger>
            <TabsTrigger value="funds">Impact Funds</TabsTrigger>
            <TabsTrigger value="users">Recent Users</TabsTrigger>
          </TabsList>
          <TabsContent value="deals">
            <Card>
              <CardHeader>
                <CardTitle>Active Deals Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div>Deal Name</div>
                    <div>Fund</div>
                    <div>Value</div>
                    <div>Investors</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="grid grid-cols-1 md:grid-cols-5 p-4">
                        <div>City Property Development</div>
                        <div>Property Impact Fund</div>
                        <div>R 2.4M</div>
                        <div>18</div>
                        <div className="text-green-600">Active</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="funds">
            <Card>
              <CardHeader>
                <CardTitle>Impact Funds Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-4 p-4 font-medium">
                    <div>Fund Name</div>
                    <div>AUM</div>
                    <div>Current Yield</div>
                    <div>Active Deals</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                      <div>Sankofa Agri Impact Fund</div>
                      <div>R 3.8M</div>
                      <div>8.2%</div>
                      <div>8</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                      <div>Sankofa Property Impact Fund</div>
                      <div>R 6.2M</div>
                      <div>9.5%</div>
                      <div>12</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                      <div>Sankofa Energy Impact Fund</div>
                      <div>R 4.2M</div>
                      <div>11.2%</div>
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Recent User Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-4 p-4 font-medium">
                    <div>User</div>
                    <div>Email</div>
                    <div>Last Login</div>
                    <div>Investments</div>
                  </div>
                  <div className="divide-y">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="grid grid-cols-1 md:grid-cols-4 p-4">
                        <div>John Dube</div>
                        <div>john.d@example.com</div>
                        <div>Today, 10:42 AM</div>
                        <div>3 Active</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
