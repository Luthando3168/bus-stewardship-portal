
import React from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner";

// Mock investments data
const investments = [
  {
    id: 101,
    title: "Lifestyle Mini Complex",
    fund: "MyFoodRetail Impact Fund",
    amount: 25000,
    shares: 250,
    sharePrice: 100,
    purchaseDate: "2023-02-15",
    companyName: "Lifestyle Mini Complex (Pty) Ltd",
    registrationNumber: "2023/123456/07",
    region: "Western Cape"
  },
  {
    id: 102,
    title: "Rural Connectivity Project",
    fund: "MyTelco Impact Fund",
    amount: 15000,
    shares: 120,
    sharePrice: 125,
    purchaseDate: "2023-03-10",
    companyName: "Rural Connect Technologies (Pty) Ltd",
    registrationNumber: "2023/654321/07",
    region: "National"
  }
];

const UserMyInvestments = () => {
  const [showCertificate, setShowCertificate] = React.useState<number | null>(null);
  
  const handleDownloadStatement = (investmentId: number) => {
    toast.success("Financial statement is being downloaded");
    // In a real application, this would trigger an actual download
  };
  
  const handleViewShareCertificate = (investmentId: number) => {
    setShowCertificate(investmentId);
  };
  
  const selectedInvestment = investments.find(inv => inv.id === showCertificate);

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">My Investments</h2>
        <p className="text-muted-foreground">
          View and manage your active investments. Access your share certificates and financial statements.
        </p>
        
        {investments.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center">
              <p className="text-muted-foreground">
                You have no active investments yet. Browse our investment opportunities to get started.
              </p>
              <Button className="mt-4 bg-gold hover:bg-lightgold">
                Browse Opportunities
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-5">
            {investments.map(investment => (
              <Card key={investment.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{investment.title}</CardTitle>
                      <CardDescription>{investment.fund} | {investment.region}</CardDescription>
                    </div>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Investment Value</p>
                      <p className="font-medium">R {investment.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Shares</p>
                      <p className="font-medium">{investment.shares} @ R{investment.sharePrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Purchase Date</p>
                      <p className="font-medium">{new Date(investment.purchaseDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex gap-1"
                    onClick={() => handleViewShareCertificate(investment.id)}
                  >
                    <FileText size={16} />
                    Share Certificate
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex gap-1"
                    onClick={() => handleDownloadStatement(investment.id)}
                  >
                    <Download size={16} />
                    Financial Statement
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        {/* Share Certificate Dialog */}
        <Dialog open={showCertificate !== null} onOpenChange={() => setShowCertificate(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Share Certificate</DialogTitle>
            </DialogHeader>
            
            {selectedInvestment && (
              <div className="border-2 border-gray-300 p-6 rounded-md">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-bold uppercase text-navyblue">Certificate of Share Ownership</h3>
                  
                  <div className="space-y-1">
                    <p className="font-semibold">{selectedInvestment.companyName}</p>
                    <p className="text-sm">Registration No: {selectedInvestment.registrationNumber}</p>
                  </div>
                  
                  <div className="my-6 border-t border-b border-gray-300 py-4">
                    <p>This is to certify that</p>
                    <p className="font-bold text-lg my-2">{localStorage.getItem("userName") || "Investor"} {localStorage.getItem("userSurname") || ""}</p>
                    <p>is the registered holder of</p>
                    <p className="font-bold text-lg my-2">{selectedInvestment.shares} Ordinary Shares</p>
                    <p>in the above-named Company, subject to the Memorandum and Articles of Association of the Company.</p>
                  </div>
                  
                  <div className="text-sm">
                    <p>Issue Date: {new Date(selectedInvestment.purchaseDate).toLocaleDateString()}</p>
                    <p>Certificate No: SC-{selectedInvestment.id}-{Math.floor(Math.random() * 1000)}</p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-300">
                    <p className="font-semibold">Luthando Maduna</p>
                    <p className="text-sm italic">Director</p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </UserLayout>
  );
};

export default UserMyInvestments;
