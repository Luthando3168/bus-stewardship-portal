
import React, { useState } from 'react';
import AdminLayout from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FileUpload, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fundsData = {
  myfarm: {
    title: "MyFarm",
    description: "Financial statements for investments in the agricultural sector",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyFarm Investments"
  },
  myproperty: {
    title: "MyProperty",
    description: "Financial statements for investments in the property sector",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyProperty Investments"
  },
  myfoodretail: {
    title: "MyFoodRetail",
    description: "Financial statements for investments in food retail development",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyFoodRetail Fund"
  },
  myenergy: {
    title: "MyEnergy",
    description: "Financial statements for investments in renewable energy",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyEnergy Solutions"
  },
  myenterprise: {
    title: "MyEnterprise",
    description: "Financial statements for investments in enterprise development",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyEnterprise Fund"
  },
  mytelco: {
    title: "MyTelco",
    description: "Financial statements for investments in telecommunications",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyTelco Investments"
  }
};

const periods = [
  "Q1 2023", 
  "Q2 2023", 
  "Q3 2023", 
  "Q4 2023",
  "Annual 2023",
  "Q1 2024"
];

// Mock uploaded statements data
const uploadedStatements = [
  { id: 1, fund: "myfarm", period: "Annual 2023", uploadDate: "2024-03-20", notified: true },
  { id: 2, fund: "myproperty", period: "Annual 2023", uploadDate: "2024-03-15", notified: true },
  { id: 3, fund: "myfoodretail", period: "Annual 2023", uploadDate: "2024-03-22", notified: true },
  { id: 4, fund: "myenergy", period: "Annual 2023", uploadDate: "2024-03-25", notified: true },
  { id: 5, fund: "myenterprise", period: "Annual 2023", uploadDate: "2024-03-18", notified: true },
  { id: 6, fund: "mytelco", period: "Annual 2023", uploadDate: "2024-03-21", notified: true },
  { id: 7, fund: "myfarm", period: "Q4 2023", uploadDate: "2023-12-15", notified: true },
  { id: 8, fund: "myproperty", period: "Q4 2023", uploadDate: "2023-12-10", notified: true },
  { id: 9, fund: "myfoodretail", period: "Q4 2023", uploadDate: "2023-12-18", notified: true }
];

const fundKeys = Object.keys(fundsData);

const AdminFinancialStatements = () => {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [statements, setStatements] = useState(uploadedStatements);
  const [selectedTab, setSelectedTab] = useState("uploaded");
  
  // Form state for new statement
  const [newStatement, setNewStatement] = useState({
    fund: "",
    period: "",
    revenue: "",
    expenses: "",
    netProfit: "",
    assets: "",
    liabilities: "",
    notes: "",
    file: null as File | null
  });
  
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setNewStatement({ ...newStatement, file: files[0] });
      setFileUploaded(true);
      
      // Auto-calculate profit if revenue and expenses are set
      if (newStatement.revenue && newStatement.expenses) {
        const revenue = parseFloat(newStatement.revenue.replace(/[^\d.-]/g, ''));
        const expenses = parseFloat(newStatement.expenses.replace(/[^\d.-]/g, ''));
        if (!isNaN(revenue) && !isNaN(expenses)) {
          const profit = revenue - expenses;
          setNewStatement({
            ...newStatement,
            file: files[0],
            netProfit: `R ${profit.toLocaleString()}`
          });
        }
      }
    }
  };
  
  const calculateNetProfit = () => {
    const revenue = parseFloat(newStatement.revenue.replace(/[^\d.-]/g, ''));
    const expenses = parseFloat(newStatement.expenses.replace(/[^\d.-]/g, ''));
    if (!isNaN(revenue) && !isNaN(expenses)) {
      const profit = revenue - expenses;
      setNewStatement({
        ...newStatement,
        netProfit: `R ${profit.toLocaleString()}`
      });
    }
  };

  const handleUploadStatement = () => {
    if (!newStatement.fund || !newStatement.period || !newStatement.revenue || 
        !newStatement.expenses || !newStatement.assets || !newStatement.liabilities || !fileUploaded) {
      toast.error("Please fill in all required fields and upload a file");
      return;
    }
    
    // Format values with R and commas
    const formatCurrency = (value: string) => {
      if (value.startsWith('R')) return value;
      const numberVal = parseFloat(value.replace(/[^\d.-]/g, ''));
      return `R ${numberVal.toLocaleString()}`;
    };
    
    const statementToAdd = {
      id: statements.length + 1,
      fund: newStatement.fund,
      period: newStatement.period,
      uploadDate: new Date().toISOString().split('T')[0],
      notified: false,
      revenue: formatCurrency(newStatement.revenue),
      expenses: formatCurrency(newStatement.expenses),
      netProfit: formatCurrency(newStatement.netProfit),
      assets: formatCurrency(newStatement.assets),
      liabilities: formatCurrency(newStatement.liabilities)
    };
    
    setStatements([statementToAdd, ...statements]);
    setUploadDialogOpen(false);
    
    toast.success("Financial statement uploaded successfully");
    toast.success("Notification sent to all investors in the fund");
    
    // Reset form
    setNewStatement({
      fund: "",
      period: "",
      revenue: "",
      expenses: "",
      netProfit: "",
      assets: "",
      liabilities: "",
      notes: "",
      file: null
    });
    setFileUploaded(false);
  };
  
  const sendNotifications = (statementId: number) => {
    const updatedStatements = statements.map(statement => 
      statement.id === statementId ? { ...statement, notified: true } : statement
    );
    setStatements(updatedStatements);
    
    const statement = statements.find(s => s.id === statementId);
    if (statement) {
      const fundTitle = fundsData[statement.fund as keyof typeof fundsData]?.title;
      toast.success(`Notifications sent to all investors in ${fundTitle} for ${statement.period}`);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-navyblue">Financial Statements Management</h2>
          <Button 
            className="bg-gold hover:bg-lightgold flex gap-2"
            onClick={() => setUploadDialogOpen(true)}
          >
            <FileUpload className="h-4 w-4" />
            <span>Upload New Statement</span>
          </Button>
        </div>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="uploaded">Uploaded Statements</TabsTrigger>
            <TabsTrigger value="pending">Pending Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="uploaded">
            <Card>
              <CardHeader>
                <CardTitle>All Financial Statements</CardTitle>
                <CardDescription>
                  Review all financial statements uploaded to the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fund</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Upload Date</TableHead>
                      <TableHead>Notification Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {statements.map((statement) => (
                      <TableRow key={statement.id}>
                        <TableCell>
                          {fundsData[statement.fund as keyof typeof fundsData]?.title}
                        </TableCell>
                        <TableCell>{statement.period}</TableCell>
                        <TableCell>{statement.uploadDate}</TableCell>
                        <TableCell>
                          {statement.notified ? (
                            <div className="flex items-center text-green-600">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              <span>Sent</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-amber-600">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              <span>Pending</span>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                toast.success(`Viewing statement for ${fundsData[statement.fund as keyof typeof fundsData]?.title} - ${statement.period}`);
                              }}
                            >
                              View
                            </Button>
                            {!statement.notified && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => sendNotifications(statement.id)}
                              >
                                Notify Investors
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {statements.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          No statements have been uploaded yet
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Statements Pending Notification</CardTitle>
                <CardDescription>
                  Statements that have been uploaded but investors have not been notified
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fund</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Upload Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {statements.filter(s => !s.notified).map((statement) => (
                      <TableRow key={statement.id}>
                        <TableCell>
                          {fundsData[statement.fund as keyof typeof fundsData]?.title}
                        </TableCell>
                        <TableCell>{statement.period}</TableCell>
                        <TableCell>{statement.uploadDate}</TableCell>
                        <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => sendNotifications(statement.id)}
                          >
                            Send Notifications
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {statements.filter(s => !s.notified).length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-4">
                          No pending notifications at this time
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Upload Dialog */}
      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Financial Statement</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fund-select">Fund</Label>
                <Select 
                  value={newStatement.fund}
                  onValueChange={value => setNewStatement({...newStatement, fund: value})}
                >
                  <SelectTrigger id="fund-select">
                    <SelectValue placeholder="Select Fund" />
                  </SelectTrigger>
                  <SelectContent>
                    {fundKeys.map(key => (
                      <SelectItem key={key} value={key}>
                        {fundsData[key as keyof typeof fundsData].title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="period-select">Period</Label>
                <Select 
                  value={newStatement.period}
                  onValueChange={value => setNewStatement({...newStatement, period: value})}
                >
                  <SelectTrigger id="period-select">
                    <SelectValue placeholder="Select Period" />
                  </SelectTrigger>
                  <SelectContent>
                    {periods.map(period => (
                      <SelectItem key={period} value={period}>
                        {period}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="revenue-input">Revenue (R)</Label>
                <Input 
                  id="revenue-input"
                  value={newStatement.revenue}
                  onChange={e => {
                    setNewStatement({...newStatement, revenue: e.target.value});
                  }}
                  onBlur={calculateNetProfit}
                  placeholder="e.g. 250000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expenses-input">Expenses (R)</Label>
                <Input 
                  id="expenses-input"
                  value={newStatement.expenses}
                  onChange={e => {
                    setNewStatement({...newStatement, expenses: e.target.value});
                  }}
                  onBlur={calculateNetProfit}
                  placeholder="e.g. 80000"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="netprofit-input">Net Profit (R)</Label>
              <Input 
                id="netprofit-input"
                value={newStatement.netProfit}
                readOnly
                className="bg-gray-50"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="assets-input">Assets (R)</Label>
                <Input 
                  id="assets-input"
                  value={newStatement.assets}
                  onChange={e => setNewStatement({...newStatement, assets: e.target.value})}
                  placeholder="e.g. 1500000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="liabilities-input">Liabilities (R)</Label>
                <Input 
                  id="liabilities-input"
                  value={newStatement.liabilities}
                  onChange={e => setNewStatement({...newStatement, liabilities: e.target.value})}
                  placeholder="e.g. 200000"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes-input">Notes (Optional)</Label>
              <Textarea 
                id="notes-input"
                value={newStatement.notes}
                onChange={e => setNewStatement({...newStatement, notes: e.target.value})}
                placeholder="Additional notes for the financial statement..."
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="file-upload">Upload Statement PDF</Label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                {fileUploaded ? (
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="text-sm font-medium">{newStatement.file?.name}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setNewStatement({ ...newStatement, file: null });
                        setFileUploaded(false);
                      }}
                      className="mt-2"
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF up to 10MB
                    </p>
                    <Input
                      id="file-upload"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById('file-upload')?.click()}
                      className="mt-2"
                    >
                      Browse Files
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setUploadDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleUploadStatement}
              className="bg-gold hover:bg-lightgold"
            >
              Upload & Notify Investors
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminFinancialStatements;
