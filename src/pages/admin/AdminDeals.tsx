import React, { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FilePlus, FileText, Users, Check, AlertCircle, ChevronDown, ChevronUp, Printer } from "lucide-react";
import { toast } from "sonner";

const mockDeals = [
  { 
    id: 1, 
    name: "Downtown Office Building", 
    fund: "MyProperty Impact Fund", 
    value: 3500000, 
    investors: 12, 
    status: "Active", 
    location: "Cape Town",
    progress: 100,
    companyRegistered: true,
    prospectusIssued: true,
    companyDetails: {
      regNumber: "2023/123456/07",
      directors: "John Smith, Sarah Johnson",
      address: "123 Main Street, Cape Town, 8001",
      shareCount: 10000,
      sharePrice: 350
    }
  },
  { 
    id: 2, 
    name: "Solar Farm Project", 
    fund: "MyEnergy Impact Fund", 
    value: 2800000, 
    investors: 8, 
    status: "Active", 
    location: "Eastern Cape",
    progress: 100,
    companyRegistered: true,
    prospectusIssued: true
  },
  { 
    id: 3, 
    name: "Organic Farm Expansion", 
    fund: "MyFarm Impact Fund", 
    value: 1750000, 
    investors: 14, 
    status: "Active", 
    location: "KZN",
    progress: 100,
    companyRegistered: true,
    prospectusIssued: true
  },
  { 
    id: 4, 
    name: "Mixed-Use Development", 
    fund: "MyProperty Impact Fund", 
    value: 5200000, 
    investors: 23, 
    status: "Pending", 
    location: "Johannesburg",
    progress: 78,
    companyRegistered: true,
    prospectusIssued: false
  },
  { 
    id: 5, 
    name: "Wind Turbine Installation", 
    fund: "MyEnergy Impact Fund", 
    value: 3100000, 
    investors: 19, 
    status: "Active", 
    location: "Western Cape",
    progress: 100,
    companyRegistered: true,
    prospectusIssued: true
  },
  {
    id: 6,
    name: "Lifestyle Mini Complex",
    fund: "MyFoodRetail Impact Fund",
    value: 2500000,
    investors: 16,
    status: "Pending",
    location: "Western Cape",
    progress: 65,
    companyRegistered: false,
    prospectusIssued: false
  },
  {
    id: 7,
    name: "Tech Startup Accelerator",
    fund: "MyEnterprise Impact Fund",
    value: 1800000,
    investors: 25,
    status: "Pending",
    location: "National",
    progress: 82,
    companyRegistered: true,
    prospectusIssued: false
  },
  {
    id: 8,
    name: "Rural Connectivity Project",
    fund: "MyTelco Impact Fund",
    value: 3200000,
    investors: 18,
    status: "Pending",
    location: "National",
    progress: 45,
    companyRegistered: false,
    prospectusIssued: false
  }
];

const funds = [
  "MyFarm Impact Fund",
  "MyProperty Impact Fund",
  "MyFoodRetail Impact Fund",
  "MyEnergy Impact Fund",
  "MyEnterprise Impact Fund",
  "MyTelco Impact Fund",
  "MyFranchise Impact Fund",
  "MyFuel Impact Fund",
  "MySchool Impact Fund",
  "MyHealth Impact Fund",
  "MyEducation Impact Fund",
];

const AdminDeals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deals, setDeals] = useState(mockDeals);
  const [selectedDeal, setSelectedDeal] = useState<any | null>(null);
  const [showNewDealDialog, setShowNewDealDialog] = useState(false);
  const [showCompanyRegistrationDialog, setShowCompanyRegistrationDialog] = useState(false);
  const [showProspectusDialog, setShowProspectusDialog] = useState(false);
  const [expandedDealId, setExpandedDealId] = useState<number | null>(null);
  
  const [newDeal, setNewDeal] = useState({
    name: "",
    fund: "",
    value: "",
    location: "",
    description: ""
  });
  
  const [companyRegistration, setCompanyRegistration] = useState({
    companyName: "",
    regNumber: "",
    directors: "",
    shareCount: "",
    sharePrice: ""
  });
  
  const [prospectus, setProspectus] = useState({
    title: "",
    summary: "",
    riskDisclosures: "",
    financialProjections: ""
  });
  
  const filteredDeals = deals.filter(
    (deal) =>
      deal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.fund.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const checkDealProgress = (deal) => {
    if (deal.progress === 100 && (!deal.companyRegistered || !deal.prospectusIssued)) {
      const emailContent = `Deal "${deal.name}" has reached 100% completion and requires further processing:
      ${!deal.companyRegistered ? '- Company registration needed\n' : ''}
      ${!deal.prospectusIssued ? '- Prospectus lodgement needed\n' : ''}`;

      toast.info("Notification emails will be sent to administrators and users");
      console.log("Would send email to:", "info@madunacas.com");
      console.log("Would send email to user accounts");
      console.log("Email content:", emailContent);
    }
  };

  const handleNewDealSubmit = () => {
    if (!newDeal.name || !newDeal.fund || !newDeal.value || !newDeal.location || !newDeal.description) {
      toast.error("Please fill all fields");
      return;
    }

    const id = deals.length > 0 ? Math.max(...deals.map(d => d.id)) + 1 : 1;
    const deal = {
      id,
      name: newDeal.name,
      fund: newDeal.fund,
      value: parseInt(newDeal.value),
      investors: 0,
      status: "New",
      location: newDeal.location,
      progress: 0,
      companyRegistered: false,
      prospectusIssued: false
    };
    
    setDeals([...deals, deal]);
    setShowNewDealDialog(false);
    toast.success("New business opportunity created");
    
    checkDealProgress(deal);
    
    setNewDeal({
      name: "",
      fund: "",
      value: "",
      location: "",
      description: ""
    });
  };

  const handleRegisterCompany = () => {
    if (!companyRegistration.companyName || !companyRegistration.regNumber || 
        !companyRegistration.directors || !companyRegistration.shareCount || 
        !companyRegistration.sharePrice) {
      toast.error("Please fill all required fields");
      return;
    }
    
    if (selectedDeal) {
      const updatedDeals = deals.map(deal => {
        if (deal.id === selectedDeal.id) {
          return { ...deal, companyRegistered: true, companyDetails: companyRegistration };
        }
        return deal;
      });
      
      setDeals(updatedDeals);
      setShowCompanyRegistrationDialog(false);
      toast.success(`Company "${companyRegistration.companyName}" registered for ${selectedDeal.name}`);
      
      setCompanyRegistration({
        companyName: "",
        regNumber: "",
        directors: "",
        shareCount: "",
        sharePrice: ""
      });
      setSelectedDeal(null);
    }
  };

  const handleIssueProspectus = () => {
    if (!prospectus.title || !prospectus.summary || !prospectus.riskDisclosures) {
      toast.error("Please fill all required fields");
      return;
    }
    
    if (selectedDeal) {
      const updatedDeals = deals.map(deal => {
        if (deal.id === selectedDeal.id) {
          return { ...deal, prospectusIssued: true, prospectusDetails: prospectus };
        }
        return deal;
      });
      
      setDeals(updatedDeals);
      setShowProspectusDialog(false);
      toast.success(`Prospectus issued for ${selectedDeal.name}`);
      toast.success("Investors notified about the prospectus");
      
      setProspectus({
        title: "",
        summary: "",
        riskDisclosures: "",
        financialProjections: ""
      });
      setSelectedDeal(null);
    }
  };

  const toggleDealExpansion = (dealId: number) => {
    if (expandedDealId === dealId) {
      setExpandedDealId(null);
    } else {
      setExpandedDealId(dealId);
    }
  };

  const handlePrintDetails = (deal) => {
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="padding: 20px;">
        <h2 style="text-align: center;">${deal.name} - Company Details</h2>
        <p style="text-align: center;">Generated on ${new Date().toLocaleDateString()}</p>
        
        <div style="margin-top: 20px;">
          <h3 style="color: #333;">Company Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Registration Number</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${deal.companyDetails?.regNumber || 'Not registered'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Directors</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${deal.companyDetails?.directors || 'Not registered'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Address</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${deal.companyDetails?.address || 'Not registered'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Total Shares</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${deal.companyDetails?.shareCount?.toLocaleString() || 'Not registered'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Share Price</td>
              <td style="padding: 8px; border: 1px solid #ddd;">R ${deal.companyDetails?.sharePrice?.toLocaleString() || 'Not registered'}</td>
            </tr>
          </table>
        </div>

        <div style="margin-top: 20px;">
          <h3 style="color: #333;">Investment Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Fund</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${deal.fund}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Total Value</td>
              <td style="padding: 8px; border: 1px solid #ddd;">R ${deal.value.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Location</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${deal.location}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Number of Investors</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${deal.investors}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Status</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${deal.status}</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    const opt = {
      margin: 1,
      filename: `${deal.name}_company_details.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save().then(() => {
      toast.success("Company details exported successfully");
    }).catch((error) => {
      console.error("PDF export error:", error);
      toast.error("Failed to export company details");
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-navyblue">Business Management</h2>
          <Button 
            className="bg-gold hover:bg-lightgold flex gap-2"
            onClick={() => setShowNewDealDialog(true)}
          >
            <FilePlus className="h-4 w-4" />
            <span>Create New Business</span>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Business Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <Input
                placeholder="Search deals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Business Opportunities</TabsTrigger>
                <TabsTrigger value="pending">Pending Businesses</TabsTrigger>
                <TabsTrigger value="active">Active Businesses</TabsTrigger>
                <TabsTrigger value="needsAction">Needs Action</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-4">
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Fund</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Investors</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDeals.map((deal) => (
                        <React.Fragment key={deal.id}>
                          <TableRow className="cursor-pointer" onClick={() => toggleDealExpansion(deal.id)}>
                            <TableCell className="font-medium">
                              <div className="flex items-center space-x-2">
                                {expandedDealId === deal.id ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                                <span>{deal.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{deal.fund}</TableCell>
                            <TableCell>R {deal.value.toLocaleString()}</TableCell>
                            <TableCell>{deal.investors}</TableCell>
                            <TableCell>{deal.progress}%</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                deal.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                              }`}>
                                {deal.status}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm" onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedDeal(deal);
                                  setShowCompanyRegistrationDialog(true);
                                }} disabled={deal.companyRegistered}>
                                  Register
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedDeal(deal);
                                    setShowProspectusDialog(true);
                                  }}
                                  disabled={!deal.companyRegistered || deal.prospectusIssued}
                                >
                                  Prospectus
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                          
                          {expandedDealId === deal.id && (
                            <TableRow>
                              <TableCell colSpan={7}>
                                <div className="bg-gray-50 p-4 rounded-md">
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                      <h4 className="font-semibold text-sm mb-1">Location</h4>
                                      <p>{deal.location}</p>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold text-sm mb-1">Company Status</h4>
                                      <div className="flex items-center gap-2">
                                        {deal.companyRegistered ? (
                                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center">
                                            <Check size={12} className="mr-1" /> Registered
                                          </span>
                                        ) : (
                                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs flex items-center">
                                            <AlertCircle size={12} className="mr-1" /> Not Registered
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold text-sm mb-1">Prospectus Status</h4>
                                      <div className="flex items-center gap-2">
                                        {deal.prospectusIssued ? (
                                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center">
                                            <Check size={12} className="mr-1" /> Issued
                                          </span>
                                        ) : (
                                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs flex items-center">
                                            <AlertCircle size={12} className="mr-1" /> Not Issued
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {deal.investors > 0 && (
                                    <div className="mt-4">
                                      <Button size="sm" className="bg-navyblue hover:bg-deepblue">
                                        <Users size={16} className="mr-2" />
                                        View {deal.investors} Investors
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          )}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="pending">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Fund</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDeals.filter(d => d.status === "Pending").map(deal => (
                        <TableRow key={deal.id}>
                          <TableCell className="font-medium">{deal.name}</TableCell>
                          <TableCell>{deal.fund}</TableCell>
                          <TableCell>{deal.progress}%</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" onClick={() => {
                                setSelectedDeal(deal);
                                setShowCompanyRegistrationDialog(true);
                              }} disabled={deal.companyRegistered}>
                                Register
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => {
                                  setSelectedDeal(deal);
                                  setShowProspectusDialog(true);
                                }}
                                disabled={!deal.companyRegistered || deal.prospectusIssued}
                              >
                                Prospectus
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="active">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Businesses Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Fund</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Investors</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredDeals.filter(d => d.status === "Active").map(deal => (
                            <TableRow key={deal.id}>
                              <TableCell className="font-medium">{deal.name}</TableCell>
                              <TableCell>{deal.fund}</TableCell>
                              <TableCell>R {deal.value.toLocaleString()}</TableCell>
                              <TableCell>{deal.investors}</TableCell>
                              <TableCell>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handlePrintDetails(deal)}
                                  className="flex items-center gap-2"
                                >
                                  <Printer className="h-4 w-4" />
                                  Print Details
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="needsAction">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Fund</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Action Required</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDeals
                        .filter(d => (!d.companyRegistered && d.progress >= 50) || (d.companyRegistered && !d.prospectusIssued && d.progress >= 70))
                        .map(deal => (
                          <TableRow key={deal.id}>
                            <TableCell className="font-medium">{deal.name}</TableCell>
                            <TableCell>{deal.fund}</TableCell>
                            <TableCell>{deal.progress}%</TableCell>
                            <TableCell>
                              {!deal.companyRegistered ? (
                                <span className="text-red-600 font-medium">Company Registration</span>
                              ) : (
                                <span className="text-amber-600 font-medium">Prospectus Issuance</span>
                              )}
                            </TableCell>
                            <TableCell>
                              {!deal.companyRegistered ? (
                                <Button variant="outline" size="sm" onClick={() => {
                                  setSelectedDeal(deal);
                                  setShowCompanyRegistrationDialog(true);
                                }}>
                                  Register Company
                                </Button>
                              ) : (
                                <Button variant="outline" size="sm" onClick={() => {
                                  setSelectedDeal(deal);
                                  setShowProspectusDialog(true);
                                }}>
                                  Issue Prospectus
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <Dialog open={showNewDealDialog} onOpenChange={setShowNewDealDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Business Opportunity</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="deal-name">Opportunity Name</Label>
              <Input 
                id="deal-name" 
                placeholder="E.g. Urban Farming Project"
                value={newDeal.name}
                onChange={(e) => setNewDeal({...newDeal, name: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deal-fund">Impact Fund</Label>
              <Select 
                value={newDeal.fund} 
                onValueChange={(value) => setNewDeal({...newDeal, fund: value})}
              >
                <SelectTrigger id="deal-fund">
                  <SelectValue placeholder="Select a fund" />
                </SelectTrigger>
                <SelectContent>
                  {funds.map(fund => (
                    <SelectItem key={fund} value={fund}>{fund}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deal-value">Target Value (R)</Label>
              <Input 
                id="deal-value" 
                placeholder="E.g. 2500000"
                type="number"
                value={newDeal.value}
                onChange={(e) => setNewDeal({...newDeal, value: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deal-location">Location</Label>
              <Input 
                id="deal-location" 
                placeholder="E.g. Cape Town"
                value={newDeal.location}
                onChange={(e) => setNewDeal({...newDeal, location: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deal-description">Description</Label>
              <Textarea 
                id="deal-description" 
                placeholder="Enter opportunity description"
                value={newDeal.description}
                onChange={(e) => setNewDeal({...newDeal, description: e.target.value})}
                className="min-h-[100px]"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewDealDialog(false)}>Cancel</Button>
            <Button className="bg-gold hover:bg-lightgold" onClick={handleNewDealSubmit}>Create Opportunity</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Dialog open={showCompanyRegistrationDialog} onOpenChange={setShowCompanyRegistrationDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Company Registration</DialogTitle>
            {selectedDeal && (
              <DialogDescription>
                For: {selectedDeal.name} - {selectedDeal.fund}
              </DialogDescription>
            )}
          </DialogHeader>
          
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input 
                id="company-name" 
                placeholder="E.g. AgroUrban Oasis (Pty) Ltd"
                value={companyRegistration.companyName}
                onChange={(e) => setCompanyRegistration({...companyRegistration, companyName: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="registration-number">Registration Number</Label>
              <Input 
                id="registration-number" 
                placeholder="E.g. 2023/123456/07"
                value={companyRegistration.regNumber}
                onChange={(e) => setCompanyRegistration({...companyRegistration, regNumber: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="directors">Directors (comma separated)</Label>
              <Textarea 
                id="directors" 
                placeholder="E.g. Jane Smith, John Doe"
                value={companyRegistration.directors}
                onChange={(e) => setCompanyRegistration({...companyRegistration, directors: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="share-count">Total Shares</Label>
                <Input 
                  id="share-count" 
                  placeholder="E.g. 10000"
                  type="number"
                  value={companyRegistration.shareCount}
                  onChange={(e) => setCompanyRegistration({...companyRegistration, shareCount: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="share-price">Share Price (R)</Label>
                <Input 
                  id="share-price" 
                  placeholder="E.g. 100"
                  type="number"
                  value={companyRegistration.sharePrice}
                  onChange={(e) => setCompanyRegistration({...companyRegistration, sharePrice: e.target.value})}
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCompanyRegistrationDialog(false)}>Cancel</Button>
            <Button className="bg-gold hover:bg-lightgold" onClick={handleRegisterCompany}>Register Company</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Dialog open={showProspectusDialog} onOpenChange={setShowProspectusDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Issue Prospectus</DialogTitle>
            {selectedDeal && (
              <DialogDescription>
                For: {selectedDeal.name} - {selectedDeal.fund}
              </DialogDescription>
            )}
          </DialogHeader>
          
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="prospectus-title">Prospectus Title</Label>
              <Input 
                id="prospectus-title" 
                placeholder="E.g. Investment Prospectus for AgroUrban Oasis"
                value={prospectus.title}
                onChange={(e) => setProspectus({...prospectus, title: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="prospectus-summary">Executive Summary</Label>
              <Textarea 
                id="prospectus-summary" 
                placeholder="Enter summary of the investment opportunity"
                value={prospectus.summary}
                onChange={(e) => setProspectus({...prospectus, summary: e.target.value})}
                className="min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="risk-disclosures">Risk Disclosures</Label>
              <Textarea 
                id="risk-disclosures" 
                placeholder="Enter risk disclosures"
                value={prospectus.riskDisclosures}
                onChange={(e) => setProspectus({...prospectus, riskDisclosures: e.target.value})}
                className="min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="financial-projections">Financial Projections</Label>
              <Textarea 
                id="financial-projections" 
                placeholder="Enter financial projections"
                value={prospectus.financialProjections}
                onChange={(e) => setProspectus({...prospectus, financialProjections: e.target.value})}
                className="min-h-[100px]"
              />
            </div>
          </div>
          
          <DialogFooter className="flex-col space-y-2 sm:space-y-0 sm:flex-row">
            <Button variant="outline" onClick={() => setShowProspectusDialog(false)}>Cancel</Button>
            <Button className="bg-gold hover:bg-lightgold" onClick={handleIssueProspectus}>
              Issue Prospectus & Notify Investors
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminDeals;
