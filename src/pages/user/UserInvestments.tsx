
import React, { useState } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BadgeCheck, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const UserInvestments = () => {
  const [selectedInvestment, setSelectedInvestment] = useState<any | null>(null);
  
  const investmentData = [
    {
      id: "inv1",
      name: "Downtown Office Building",
      fund: "Property Impact Fund",
      amount: "R 120,000.00",
      investmentDate: "2023-05-15",
      term: "5 years",
      currentValue: "R 129,600.00",
      returnToDate: "+8.0%",
      status: "Active",
      distributions: [
        { date: "2023-08-15", amount: "R 2,400.00" },
        { date: "2023-11-15", amount: "R 2,400.00" },
        { date: "2024-02-15", amount: "R 2,400.00" }
      ],
      details: {
        description: "A 10-story office building in the heart of Johannesburg CBD with retail spaces on the ground floor.",
        location: "Johannesburg, Gauteng",
        projectManager: "Sarah Johnson",
        occupancyRate: "92%",
        lastValuation: "2024-01-15",
        highlights: [
          "Energy-efficient retrofits completed in 2023",
          "Secured new 3-year lease with major tenant",
          "Building awarded Green Star certification"
        ]
      }
    },
    {
      id: "inv2",
      name: "Solar Farm Project",
      fund: "Energy Impact Fund",
      amount: "R 85,000.00",
      investmentDate: "2023-07-20",
      term: "7 years",
      currentValue: "R 94,350.00",
      returnToDate: "+11.0%",
      status: "Active",
      distributions: [
        { date: "2023-10-20", amount: "R 2,125.00" },
        { date: "2024-01-20", amount: "R 2,125.00" }
      ],
      details: {
        description: "A 5 MW solar installation providing clean energy to approximately 3,000 households.",
        location: "Northern Cape",
        projectManager: "David Mokoena",
        performanceRatio: "98.5%",
        lastInspection: "2024-02-10",
        highlights: [
          "Exceeded power generation targets by 5%",
          "Successfully weathered extreme summer conditions",
          "Local maintenance team fully trained and operational"
        ]
      }
    },
    {
      id: "inv3",
      name: "Organic Farm Expansion",
      fund: "Agri Impact Fund",
      amount: "R 40,000.00",
      investmentDate: "2023-09-05",
      term: "4 years",
      currentValue: "R 42,720.00",
      returnToDate: "+6.8%",
      status: "Active",
      distributions: [
        { date: "2023-12-05", amount: "R 800.00" },
        { date: "2024-03-05", amount: "R 800.00" }
      ],
      details: {
        description: "Expansion of a certified organic farm producing vegetables and herbs for local and export markets.",
        location: "KwaZulu-Natal",
        projectManager: "Thabo Nkosi",
        certifications: "Organic, Fair Trade",
        harvestSeason: "Year-round with seasonal peaks",
        highlights: [
          "New export contract secured with European distributor",
          "Irrigation system upgrade completed ahead of schedule",
          "Implemented advanced composting system reducing fertilizer costs"
        ]
      }
    }
  ];

  const handleDownloadStatement = (type: string) => {
    toast.success(`Downloading ${type} statement for ${selectedInvestment?.name}`);
    // In a real app, this would trigger a document download
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">My Investments</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Investment Portfolio Summary</CardTitle>
            <CardDescription>
              Current status of your investments across all impact funds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-lightgray rounded-lg">
                <h4 className="text-sm text-muted-foreground">Total Invested</h4>
                <p className="text-2xl font-bold">R 245,000.00</p>
              </div>
              <div className="p-4 bg-lightgray rounded-lg">
                <h4 className="text-sm text-muted-foreground">Current Value</h4>
                <p className="text-2xl font-bold">R 266,670.00</p>
              </div>
              <div className="p-4 bg-lightgray rounded-lg">
                <h4 className="text-sm text-muted-foreground">Total Return</h4>
                <p className="text-2xl font-bold text-green-600">+8.8%</p>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Investment</TableHead>
                  <TableHead>Fund</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Return</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {investmentData.map((investment) => (
                  <TableRow key={investment.id}>
                    <TableCell className="font-medium">{investment.name}</TableCell>
                    <TableCell>{investment.fund}</TableCell>
                    <TableCell>{investment.amount}</TableCell>
                    <TableCell className="hidden md:table-cell">{new Date(investment.investmentDate).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right text-green-600">{investment.returnToDate}</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <BadgeCheck className="mr-1 h-3 w-3" />
                        {investment.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedInvestment(investment)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        {/* Investment Details Dialog */}
        <Dialog open={!!selectedInvestment} onOpenChange={(open) => !open && setSelectedInvestment(null)}>
          <DialogContent className="max-w-3xl">
            {selectedInvestment && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedInvestment.name}</DialogTitle>
                  <DialogDescription>{selectedInvestment.fund}</DialogDescription>
                </DialogHeader>
                
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="distributions">Distributions</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Investment Details</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="p-3 bg-lightgray rounded-lg">
                          <p className="text-xs text-muted-foreground">Amount Invested</p>
                          <p className="font-medium">{selectedInvestment.amount}</p>
                        </div>
                        <div className="p-3 bg-lightgray rounded-lg">
                          <p className="text-xs text-muted-foreground">Current Value</p>
                          <p className="font-medium">{selectedInvestment.currentValue}</p>
                        </div>
                        <div className="p-3 bg-lightgray rounded-lg">
                          <p className="text-xs text-muted-foreground">Return to Date</p>
                          <p className="font-medium text-green-600">{selectedInvestment.returnToDate}</p>
                        </div>
                        <div className="p-3 bg-lightgray rounded-lg">
                          <p className="text-xs text-muted-foreground">Investment Date</p>
                          <p className="font-medium">{new Date(selectedInvestment.investmentDate).toLocaleDateString()}</p>
                        </div>
                        <div className="p-3 bg-lightgray rounded-lg">
                          <p className="text-xs text-muted-foreground">Term</p>
                          <p className="font-medium">{selectedInvestment.term}</p>
                        </div>
                        <div className="p-3 bg-lightgray rounded-lg">
                          <p className="text-xs text-muted-foreground">Status</p>
                          <p className="font-medium inline-flex items-center text-green-600">
                            <BadgeCheck className="mr-1 h-3 w-3" />
                            {selectedInvestment.status}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">About this Investment</h4>
                      <p className="mb-4">{selectedInvestment.details.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p>{selectedInvestment.details.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Project Manager</p>
                          <p>{selectedInvestment.details.projectManager}</p>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold mb-2">Recent Highlights</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedInvestment.details.highlights.map((highlight: string, i: number) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="distributions">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Distribution History</h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="text-right">Type</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedInvestment.distributions.map((dist: any, i: number) => (
                            <TableRow key={i}>
                              <TableCell>{new Date(dist.date).toLocaleDateString()}</TableCell>
                              <TableCell className="text-green-600">{dist.amount}</TableCell>
                              <TableCell className="text-right">Quarterly Distribution</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      
                      <div className="p-4 bg-lightgray rounded-lg">
                        <h5 className="font-semibold mb-2">Next Distribution</h5>
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Estimated Date</p>
                            <p>May 15, 2024</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Estimated Amount</p>
                            <p className="text-green-600">R 2,400.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="documents">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Investment Documents</h4>
                      <div className="rounded-md border divide-y">
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">Investment Certificate</p>
                            <p className="text-sm text-muted-foreground">Issued on investment date</p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownloadStatement('Investment Certificate')}
                            className="flex items-center gap-1"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">Latest Quarterly Report</p>
                            <p className="text-sm text-muted-foreground">January-March 2024</p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownloadStatement('Quarterly Report')}
                            className="flex items-center gap-1"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">Tax Statement</p>
                            <p className="text-sm text-muted-foreground">2023 Tax Year</p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDownloadStatement('Tax Statement')}
                            className="flex items-center gap-1"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="flex justify-end pt-4 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setSelectedInvestment(null)}
                  >
                    Close
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </UserLayout>
  );
};

export default UserInvestments;
