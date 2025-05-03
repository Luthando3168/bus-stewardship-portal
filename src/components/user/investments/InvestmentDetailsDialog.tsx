
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { BadgeCheck, Download } from "lucide-react";
import { toast } from "sonner";

interface InvestmentDetailsDialogProps {
  selectedInvestment: any | null;
  setSelectedInvestment: (investment: any | null) => void;
}

const InvestmentDetailsDialog: React.FC<InvestmentDetailsDialogProps> = ({
  selectedInvestment,
  setSelectedInvestment
}) => {
  const handleDownloadStatement = (type: string) => {
    toast.success(`Downloading ${type} statement for ${selectedInvestment?.name}`);
    // In a real app, this would trigger a document download
  };

  return (
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
  );
};

export default InvestmentDetailsDialog;
