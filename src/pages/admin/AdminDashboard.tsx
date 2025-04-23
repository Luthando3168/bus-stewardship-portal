import React, { useState } from 'react';
import AdminLayout from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UsersIcon, FileChartLine, DollarSign, FilePdf, FileExcel } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const AdminDashboard = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const businesses = [
    {
      name: "City Property Development",
      fund: "MyProperty Impact Fund",
      nav: 2400000,
      investors: 18,
      status: "Active",
      investorsList: [
        { name: "John Dube", shares: 150, percentage: "15%" },
        { name: "Sarah Smith", shares: 100, percentage: "10%" },
        // ... additional investors would be fetched from actual data
      ]
    },
    // ... keep sample data structure for other businesses
  ];

  const exportInvestorsList = (format: 'pdf' | 'excel') => {
    // In a real implementation, this would generate and download the appropriate file
    console.log(`Exporting investors list in ${format} format`);
    // Add actual export logic here
  };

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
              <CardTitle className="text-sm font-medium">Active Businesses Under Management</CardTitle>
              <FileChartLine className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">
                +4 businesses added this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total AUM</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R 14.2M</div>
              <p className="text-xs text-muted-foreground">
                +5.2% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="businesses">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 md:grid-cols-3">
            <TabsTrigger value="businesses">Active Businesses</TabsTrigger>
            <TabsTrigger value="funds">Impact Funds</TabsTrigger>
            <TabsTrigger value="users">Recent Users</TabsTrigger>
          </TabsList>
          <TabsContent value="businesses">
            <Card>
              <CardHeader>
                <CardTitle>Active Businesses Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
                    <div>Company Name</div>
                    <div>Impact Fund</div>
                    <div>NAV</div>
                    <div>Shareholders</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y">
                    {businesses.map((business, index) => (
                      <Dialog key={index}>
                        <DialogTrigger asChild>
                          <div 
                            className="grid grid-cols-1 md:grid-cols-5 p-4 cursor-pointer hover:bg-gray-50"
                            onClick={() => setSelectedCompany(business.name)}
                          >
                            <div>{business.name}</div>
                            <div>{business.fund}</div>
                            <div>R {(business.nav / 1000000).toFixed(1)}M</div>
                            <div>{business.investors}</div>
                            <div className="text-green-600">{business.status}</div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>{business.name} - Shareholders List</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4">
                            <div className="flex justify-end space-x-2 mb-4">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => exportInvestorsList('pdf')}
                              >
                                <FilePdf className="h-4 w-4 mr-2" />
                                Export PDF
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => exportInvestorsList('excel')}
                              >
                                <FileExcel className="h-4 w-4 mr-2" />
                                Export Excel
                              </Button>
                            </div>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Shareholder Name</TableHead>
                                  <TableHead>Number of Shares</TableHead>
                                  <TableHead>Ownership Percentage</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {business.investorsList.map((investor, idx) => (
                                  <TableRow key={idx}>
                                    <TableCell>{investor.name}</TableCell>
                                    <TableCell>{investor.shares}</TableCell>
                                    <TableCell>{investor.percentage}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </DialogContent>
                      </Dialog>
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
