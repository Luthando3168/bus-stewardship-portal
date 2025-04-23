
import React, { useRef } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, Printer } from "lucide-react"; // Only allowed icons used here
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

// Certificate body as its own component (no icons/logos, address after client name)
const CertificateContent = React.forwardRef(
  (
    {
      investment,
      clientNumber,
      clientIdNumber,
      userName,
      userSurname,
      clientAddress,
      timestamp
    }: {
      investment: typeof investments[0];
      clientNumber: string;
      clientIdNumber: string;
      userName: string;
      userSurname: string;
      clientAddress: string;
      timestamp: string;
    },
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className="relative border-4 border-gray-300 p-8 rounded-md bg-white text-black shadow-lg"
      style={{
        background: "white",
        opacity: 1,
        maxWidth: 700,
        margin: "0 auto"
      }}
    >
      <div className="text-center space-y-4">
        <div className="border-b-2 border-navyblue pb-2 mb-2">
          <h3 className="text-lg font-bold uppercase text-navyblue">Republic of South Africa</h3>
          <p className="text-xs text-muted-foreground">
            Companies Act, 2008 (Act 71 of 2008)
          </p>
        </div>

        <h3 className="text-xl font-bold uppercase text-navyblue">Certificate of Share Ownership</h3>

        <div className="space-y-1">
          <p className="font-semibold text-lg">{investment.companyName}</p>
          <p className="text-sm">Registration Number: {investment.registrationNumber}</p>
          <p className="text-xs text-muted-foreground">
            Share certificate issued in terms of section 51(1)(a) of the Companies Act, 2008
          </p>
        </div>

        <div className="my-6 border-t border-b border-gray-300 py-4 space-y-1">
          <p>This is to certify that</p>
          <p className="font-bold text-lg my-1">
            {userName} {userSurname}
          </p>
          {/* Address appears right after client name */}
          <div className="border border-gray-200 bg-gray-50 px-4 py-2 rounded-md mb-2">
            <p className="font-medium text-navyblue text-sm mb-0">Address:</p>
            <p className="text-sm">{clientAddress}</p>
          </div>
          <div className="mb-2 text-sm">
            Client Number: {clientNumber} &nbsp;|&nbsp; ID Number: {clientIdNumber}
          </div>
          <p className="my-2">is the registered holder of</p>
          <p className="font-bold text-xl my-2">
            {investment.shares} Ordinary Shares (Profit Participation Rights)
          </p>
          <p className="text-sm mb-1">with a nominal value of R{investment.sharePrice} each, fully paid</p>
          <p className="mt-2">
            in the above-named Company, subject to the Memorandum and Articles of Association of the Company.<br/>
            <span className="font-medium text-navyblue">These shares confer profit participation rights.</span>
          </p>
        </div>

        <div className="flex justify-between text-sm mb-6">
          <div>
            Issue Date: {new Date(investment.purchaseDate).toLocaleDateString()}
          </div>
          <div>
            Certificate No: {investment.certificateId}
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-300">
          <p className="font-semibold mt-8">Luthando Maduna CA(SA)</p>
          <p className="text-sm italic text-navyblue">Company Director</p>
          <div className="text-xs text-center mt-4 text-muted-foreground">
            <span>
              Generated on {timestamp}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
);

CertificateContent.displayName = "CertificateContent";

const UserMyInvestments = () => {
  const [showCertificate, setShowCertificate] = React.useState<number | null>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const printAllRef = useRef<HTMLDivElement>(null);

  const clientNumber = localStorage.getItem("clientNumber") || "N/A";
  const clientIdNumber = localStorage.getItem("clientId") || "N/A";
  const userName = localStorage.getItem("userName") || "Investor";
  const userSurname = localStorage.getItem("userSurname") || "";
  const clientAddress = localStorage.getItem("clientAddress") || "N/A";

  const handleDownloadStatement = (investmentId: number) => {
    toast.success("Financial statement is being downloaded");
  };

  // Download as PDF (single certificate)
  const handleViewShareCertificate = (investmentId: number) => {
    setShowCertificate(investmentId);
    setTimeout(() => {
      handleDownloadCertificate(investmentId);
    }, 400);
  };

  const handleDownloadCertificate = (investmentId?: number) => {
    if (!certificateRef.current) return;

    const selectedInvestmentLocal = investments.find(inv => inv.id === (investmentId ?? showCertificate));

    const opt = {
      margin: 12,
      filename: `share_certificate_${selectedInvestmentLocal?.certificateId || 'certificate'}.pdf`,
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

    html2pdf().from(certificateRef.current).set(opt).save().then(() => {
      toast.success("Share certificate downloaded successfully");
    });
  };

  // Print all certificates
  const [showPrintAll, setShowPrintAll] = React.useState(false);

  const handlePrintAllCertificates = () => {
    setShowPrintAll(true);
    setTimeout(() => {
      if (printAllRef.current) {
        const printContents = printAllRef.current.innerHTML;
        const printWindow = window.open('', '_blank', 'width=900,height=1200');
        if (printWindow) {
          printWindow.document.write(`
            <html>
                <head>
                    <title>All Share Certificates</title>
                    <style>
                        body { font-family: Inter, Arial, sans-serif; background: #fff; color: #222; }
                        .certificate-content { page-break-after: always; border: 2px solid #d1d5db; padding: 40px; max-width: 700px; margin: 0 auto 40px; border-radius: 8px; }
                        h3, .font-bold { color: #172554 !important; }
                        .text-navyblue { color: #172554 !important; }
                        .border-gray-300 { border-color: #d1d5db !important; }
                        .border-navyblue { border-color: #172554 !important; }
                    </style>
                </head>
                <body>${printContents}</body>
            </html>
          `);
          printWindow.document.close();
          printWindow.focus();
          setTimeout(() => {
            printWindow.print();
            printWindow.close();
            setShowPrintAll(false);
          }, 500);
        }
      }
    }, 500);
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
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
            onClick={handlePrintAllCertificates}
          >
            <Printer size={16} />
            Print All Share Certificates
          </Button>
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
                    {/* No Download icon (not allowed), just text */}
                    Financial Statement
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* The Printable Certificates section, rendered only when showPrintAll is true */}
        {showPrintAll && (
          <div style={{ position: 'fixed', left: -9999, top: 0 }}>
            <div ref={printAllRef}>
              {investments.map((investment) => (
                <div style={{ marginBottom: 40 }} className="certificate-content" key={investment.id}>
                  <CertificateContent
                    investment={investment}
                    clientNumber={clientNumber}
                    clientIdNumber={clientIdNumber}
                    userName={userName}
                    userSurname={userSurname}
                    clientAddress={clientAddress}
                    timestamp={timestamp}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <Dialog open={showCertificate !== null} onOpenChange={() => setShowCertificate(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                Share Certificate
                <span className="ml-auto text-xs text-muted-foreground">
                  Certificate ID: {selectedInvestment?.certificateId}
                </span>
              </DialogTitle>
            </DialogHeader>

            {selectedInvestment && (
              <CertificateContent
                ref={certificateRef}
                investment={selectedInvestment}
                clientNumber={clientNumber}
                clientIdNumber={clientIdNumber}
                userName={userName}
                userSurname={userSurname}
                clientAddress={clientAddress}
                timestamp={timestamp}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </UserLayout>
  );
};

export default UserMyInvestments;

