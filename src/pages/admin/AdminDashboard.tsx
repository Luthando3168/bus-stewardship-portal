import React, { useState, useMemo } from 'react';
import AdminLayout from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UsersIcon, FileChartLine, DollarSign, FileText, Download } from "lucide-react";
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
import { toast } from "sonner";
import html2pdf from "html2pdf.js";

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
      ]
    },
    {
      name: "Urban Farming Initiative",
      fund: "MyFarm Impact Fund",
      nav: 1800000,
      investors: 12,
      status: "Active",
      investorsList: [
        { name: "Peter Jones", shares: 120, percentage: "12%" },
        { name: "Mary Johnson", shares: 80, percentage: "8%" },
      ]
    },
    {
      name: "Solar Power Plant",
      fund: "MyEnergy Impact Fund",
      nav: 3200000,
      investors: 22,
      status: "Active",
      investorsList: [
        { name: "David Brown", shares: 200, percentage: "20%" },
        { name: "Lisa Anderson", shares: 150, percentage: "15%" },
      ]
    }
  ];

  const impactFunds = [
    {
      name: "MyFarm Impact Fund",
      aum: 1800000,
      yield: "8.2%",
      activeBusinesses: 1
    },
    {
      name: "MyProperty Impact Fund",
      aum: 2400000,
      yield: "9.5%",
      activeBusinesses: 1
    },
    {
      name: "MyEnergy Impact Fund",
      aum: 3200000,
      yield: "11.2%",
      activeBusinesses: 1
    }
  ];
  
  // Calculate total NAV/AUM
  const totalAUM = useMemo(() => {
    return businesses.reduce((sum, business) => sum + business.nav, 0);
  }, [businesses]);
  
  const totalActiveBusinesses = businesses.length;
  
  // Format currency to millions with one decimal place
  const formatInMillions = (amount: number) => {
    return `R ${(amount / 1000000).toFixed(1)}M`;
  };

  // Function to export investors list in PDF or Excel format
  const exportInvestorsList = (format: 'pdf' | 'excel') => {
    // Find the selected business
    const business = businesses.find(b => b.name === selectedCompany);
    
    if (!business) {
      toast.error("No business selected for export");
      return;
    }

    if (format === 'pdf') {
      // Create a temporary div to render the content
      const element = document.createElement('div');
      element.innerHTML = `
        <div style="padding: 20px;">
          <h2 style="text-align: center;">${business.name} - Shareholders List</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f3f4f6;">
                <th style="border: 1px solid #e5e7eb; padding: 8px; text-align: left;">Shareholder Name</th>
                <th style="border: 1px solid #e5e7eb; padding: 8px; text-align: left;">Number of Shares</th>
                <th style="border: 1px solid #e5e7eb; padding: 8px; text-align: left;">Ownership Percentage</th>
              </tr>
            </thead>
            <tbody>
              ${business.investorsList.map(investor => `
                <tr>
                  <td style="border: 1px solid #e5e7eb; padding: 8px;">${investor.name}</td>
                  <td style="border: 1px solid #e5e7eb; padding: 8px;">${investor.shares}</td>
                  <td style="border: 1px solid #e5e7eb; padding: 8px;">${investor.percentage}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

      // Use html2pdf to convert the element to PDF
      const opt = {
        margin: 1,
        filename: `${business.name}_shareholders.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().from(element).set(opt).save().then(() => {
        toast.success("PDF export successful");
      }).catch((error) => {
        console.error("PDF export error:", error);
        toast.error("Failed to export PDF");
      });
      
      console.log(`Exporting investors list in ${format} format`);
    } else if (format === 'excel') {
      // Create CSV content
      let csvContent = "Shareholder Name,Number of Shares,Ownership Percentage\n";
      
      business.investorsList.forEach(investor => {
        csvContent += `${investor.name},${investor.shares},${investor.percentage}\n`;
      });
      
      // Create a Blob with the CSV content
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      
      // Create a link to download the CSV
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${business.name}_shareholders.csv`);
      document.body.appendChild(link);
      
      // Trigger the download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success("Excel export successful");
      console.log(`Exporting investors list in ${format} format`);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">MCA Direct Admin</h2>
        
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
              <div className="text-2xl font-bold">{totalActiveBusinesses}</div>
              <p className="text-xs text-muted-foreground">
                Across {impactFunds.length} impact funds
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total AUM</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatInMillions(totalAUM)}</div>
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
                            <div>{formatInMillions(business.nav)}</div>
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
                                <FileText className="h-4 w-4 mr-2" />
                                Export PDF
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => exportInvestorsList('excel')}
                              >
                                <Download className="h-4 w-4 mr-2" />
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
                    <div>Active Businesses</div>
                  </div>
                  <div className="divide-y">
                    {impactFunds.map((fund) => (
                      <div key={fund.name} className="grid grid-cols-1 md:grid-cols-4 p-4">
                        <div>{fund.name}</div>
                        <div>{formatInMillions(fund.aum)}</div>
                        <div>{fund.yield}</div>
                        <div>{fund.activeBusinesses}</div>
                      </div>
                    ))}
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
