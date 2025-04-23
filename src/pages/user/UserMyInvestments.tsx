import React, { useRef } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, FileText, Lock, Shield } from "lucide-react";
import { toast } from "sonner";
import html2pdf from 'html2pdf.js';

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
    region: "Western Cape",
    certificateId: "SC-101-742"
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
    region: "National",
    certificateId: "SC-102-835"
  }
];

const UserMyInvestments = () => {
  const [showCertificate, setShowCertificate] = React.useState<number | null>(null);
  const certificateRef = useRef<HTMLDivElement>(null);

  const clientNumber = localStorage.getItem("clientNumber") || "N/A";
  const clientIdNumber = localStorage.getItem("clientId") || "N/A";
  const userName = localStorage.getItem("userName") || "Investor";
  const userSurname = localStorage.getItem("userSurname") || "";
  const clientAddress = localStorage.getItem("clientAddress") || "N/A";

  const handleDownloadStatement = (investmentId: number) => {
    toast.success("Financial statement is being downloaded");
  };

  const handleViewShareCertificate = (investmentId: number) => {
    setShowCertificate(investmentId);
  };

  const handleDownloadCertificate = () => {
    if (!certificateRef.current) return;

    const opt = {
      margin: 10,
      filename: `share_certificate_${selectedInvestment?.certificateId || 'certificate'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        putOnlyUsedFonts: true
      },
      pagebreak: { mode: 'avoid-all' }
    };

    const watermarkDiv = document.createElement('div');
    watermarkDiv.className = 'absolute inset-0 z-0 pointer-events-none opacity-10 flex items-center justify-center';
    watermarkDiv.innerHTML = '<img src="/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png" alt="Watermark" style="width: 40%; max-width: 200px; transform: rotate(-30deg);" />';
    certificateRef.current.appendChild(watermarkDiv);

    html2pdf().from(certificateRef.current).set(opt).save()
      .then(() => {
        certificateRef.current?.removeChild(watermarkDiv);
        toast.success("Share certificate downloaded successfully");
      });
  };

  const selectedInvestment = investments.find(inv => inv.id === showCertificate);

  const now = new Date();
  const timestamp = now.toLocaleString();

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-navyblue">My Investments</h2>
          <div className="text-sm text-muted-foreground">
            Client Number: <span className="font-medium">{clientNumber}</span>
          </div>
        </div>

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

        <Dialog open={showCertificate !== null} onOpenChange={() => setShowCertificate(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Shield size={16} /> 
                Share Certificate
                <span className="ml-auto text-xs text-muted-foreground">
                  Certificate ID: {selectedInvestment?.certificateId}
                </span>
              </DialogTitle>
            </DialogHeader>

            {selectedInvestment && (
              <>
                <div 
                  ref={certificateRef}
                  className="relative border-2 border-gray-300 p-6 rounded-md bg-white"
                  style={{
                    backgroundImage: "url('/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    backgroundSize: "100px",
                    opacity: 1
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png" 
                      alt="Firm Logo" 
                      className="h-14 w-auto object-contain"
                    />
                  </div>

                  <div className="absolute top-0 right-0 p-3 opacity-20 pointer-events-none">
                    <img 
                      src="/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png" 
                      alt="Watermark" 
                      className="h-16 w-16" 
                    />
                  </div>

                  <div className="text-center space-y-4">
                    <div className="border-b-2 border-navyblue pb-2">
                      <h3 className="text-lg font-bold uppercase text-navyblue">Republic of South Africa</h3>
                      <p className="text-xs text-muted-foreground">Companies Act, 2008 (Act 71 of 2008)</p>
                    </div>

                    <h3 className="text-xl font-bold uppercase text-navyblue pt-2">Certificate of Share Ownership</h3>

                    <div className="space-y-1">
                      <p className="font-semibold text-lg">{selectedInvestment.companyName}</p>
                      <p className="text-sm">Registration Number: {selectedInvestment.registrationNumber}</p>
                      <p className="text-sm text-muted-foreground">
                        Share certificate issued in terms of section 51(1)(a) of the Companies Act, 2008
                      </p>
                    </div>

                    <div className="my-6 border-t border-b border-gray-300 py-4">
                      <p>This is to certify that</p>
                      <p className="font-bold text-lg my-2">
                        {userName} {userSurname}
                      </p>
                      <p className="text-sm mb-2">Address: <span className="font-normal">{clientAddress}</span></p>
                      <p>
                        Client Number: {clientNumber} | ID Number: {clientIdNumber}
                      </p>
                      <p className="my-2">is the registered holder of</p>
                      <p className="font-bold text-xl my-2">
                        {selectedInvestment.shares} Ordinary Shares (Profit Participation Rights)
                      </p>
                      <p className="text-sm">with a nominal value of R{selectedInvestment.sharePrice} each, fully paid</p>
                      <p className="mt-2">
                        in the above-named Company, subject to the Memorandum and Articles of Association of the Company.<br/>
                        <span className="font-medium text-navyblue">These shares confer profit participation rights.</span>
                      </p>
                    </div>

                    <div className="text-sm">
                      <div className="flex justify-between">
                        <p>Issue Date: {new Date(selectedInvestment.purchaseDate).toLocaleDateString()}</p>
                        <p>Certificate No: {selectedInvestment.certificateId}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-300 relative">
                      <div className="flex flex-col items-center">
                        <div className="relative" style={{ userSelect: 'none' }}>
                          <img 
                            src="/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png" 
                            alt="Signature Background" 
                            className="absolute top-0 left-0 w-full h-full opacity-10 object-cover z-0"
                            style={{ pointerEvents: 'none' }}
                          />
                          <p className="font-semibold relative z-10">Luthando Maduna CA(SA)</p>
                          <p className="text-sm italic relative z-10">Director</p>
                        </div>
                      </div>
                      <div className="text-xs text-center mt-4 text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <Lock size={12} />
                          <span>Document secured with digital signature • Generated on {timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" onClick={() => setShowCertificate(null)}>
                    Close
                  </Button>
                  <Button 
                    className="bg-navyblue hover:bg-blue-800 flex gap-1"
                    onClick={handleDownloadCertificate}
                  >
                    <Download size={16} />
                    Download as PDF
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

export default UserMyInvestments;
