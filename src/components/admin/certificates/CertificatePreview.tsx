
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Printer } from "lucide-react";
import { Certificate } from "@/types/certificate";

interface CertificatePreviewProps {
  certificate: Certificate;
}

export const CertificatePreview = ({ certificate }: CertificatePreviewProps) => {
  const handlePrint = () => {
    const printContent = document.getElementById('certificate-content');
    if (printContent) {
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload(); // Reload to restore React app state
    }
  };

  return (
    <div className="space-y-4">
      <div id="certificate-content" className="border-2 border-gray-300 p-6 rounded-md bg-white">
        <div className="text-center space-y-4">
          <div className="border-b-2 border-navyblue pb-2">
            <h3 className="text-lg font-bold uppercase text-navyblue">Republic of South Africa</h3>
            <p className="text-xs text-muted-foreground">Companies Act, 2008 (Act 71 of 2008)</p>
          </div>
          
          <h3 className="text-xl font-bold uppercase text-navyblue pt-2">Certificate of Share Ownership</h3>
          
          <div className="space-y-1">
            <p className="font-semibold text-lg">{certificate.companyName}</p>
            <p className="text-sm">Registration Number: {certificate.registrationNumber}</p>
            <p className="text-sm text-muted-foreground">Share certificate issued in terms of section 51(1)(a) of the Companies Act, 2008</p>
          </div>
          
          <div className="my-6 border-t border-b border-gray-300 py-4">
            <p>This is to certify that</p>
            <p className="font-bold text-lg my-2">{certificate.userName}</p>
            <p>Client Number: {certificate.clientNumber}</p>
            <p className="my-2">is the registered holder of</p>
            <p className="font-bold text-xl my-2">{certificate.shares} Ordinary Shares</p>
            <p className="text-sm">with a nominal value of R{certificate.sharePrice} each, fully paid</p>
            <p className="mt-2">in the above-named Company, subject to the Memorandum and Articles of Association of the Company.</p>
          </div>
          
          <div className="text-sm">
            <div className="flex justify-between">
              <p>Issue Date: {new Date(certificate.issueDate).toLocaleDateString()}</p>
              <p>Certificate No: {certificate.id}</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-300">
            <p className="font-semibold">Luthando Maduna CA(SA)</p>
            <p className="text-sm italic">Director</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge className={
            certificate.status === "active" ? "bg-green-600" :
            certificate.status === "revoked" ? "bg-red-600" :
            "bg-amber-600"
          }>
            {certificate.status.charAt(0).toUpperCase() + certificate.status.slice(1)}
          </Badge>
          <span className="text-sm text-muted-foreground">
            Certificate ID: {certificate.id}
          </span>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print PDF
          </Button>
        </div>
      </div>
    </div>
  );
};
