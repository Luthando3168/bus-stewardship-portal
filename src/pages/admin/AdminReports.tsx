
import AdminLayout from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileChartLine } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { month: "Jan", value: 2400 },
  { month: "Feb", value: 1398 },
  { month: "Mar", value: 9800 },
  { month: "Apr", value: 3908 },
  { month: "May", value: 4800 },
  { month: "Jun", value: 3800 },
];

const AdminReports = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-navyblue">Reports</h2>
          <div className="flex items-center space-x-2">
            <FileChartLine className="h-5 w-5 text-navyblue" />
          </div>
        </div>

        <Tabs defaultValue="financial">
          <TabsList>
            <TabsTrigger value="financial">Financial Reports</TabsTrigger>
            <TabsTrigger value="investment">Investment Reports</TabsTrigger>
            <TabsTrigger value="user">User Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="space-y-4">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Fund Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#0f172a" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Fund</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>TR-2024-001</TableCell>
                      <TableCell>Property Impact Fund</TableCell>
                      <TableCell>R 250,000</TableCell>
                      <TableCell>2024-04-20</TableCell>
                      <TableCell className="text-green-600">Completed</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TR-2024-002</TableCell>
                      <TableCell>Enterprise Impact Fund</TableCell>
                      <TableCell>R 180,000</TableCell>
                      <TableCell>2024-04-19</TableCell>
                      <TableCell className="text-green-600">Completed</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Investment Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fund Name</TableHead>
                      <TableHead>Total Investment</TableHead>
                      <TableHead>Active Deals</TableHead>
                      <TableHead>Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Property Impact Fund</TableCell>
                      <TableCell>R 5.2M</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell className="text-green-600">+8.5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Enterprise Impact Fund</TableCell>
                      <TableCell>R 3.8M</TableCell>
                      <TableCell>8</TableCell>
                      <TableCell className="text-green-600">+7.2%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="user" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Activity Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Total Investments</TableHead>
                      <TableHead>Last Activity</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Dube</TableCell>
                      <TableCell>R 450,000</TableCell>
                      <TableCell>2024-04-20</TableCell>
                      <TableCell className="text-green-600">Active</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sarah Smith</TableCell>
                      <TableCell>R 280,000</TableCell>
                      <TableCell>2024-04-19</TableCell>
                      <TableCell className="text-green-600">Active</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminReports;
