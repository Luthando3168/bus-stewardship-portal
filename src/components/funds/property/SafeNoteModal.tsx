
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, Printer } from "lucide-react";

interface SafeNoteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  safeNote: {
    id: string;
    referenceNumber: string;
    investorName: string;
    property: string;
    propertyUnit: string;
    investmentAmount: number;
    investmentDate: string;
    expectedReturn: string;
    metadata: {
      propertyId: string;
      unitId?: string;
      locationCoordinates: string;
      propertyManager: string;
      investmentTerm: string;
    };
  };
}

const SafeNoteModal: React.FC<SafeNoteProps> = ({
  open,
  onOpenChange,
  safeNote,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-ZA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const downloadSafeNote = () => {
    // In a real implementation, this would generate a PDF for download
    alert("Download functionality would be implemented here");
  };

  const printSafeNote = () => {
    window.print();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>SAFE Note</DialogTitle>
        </DialogHeader>

        <div className="border rounded-md p-6 bg-gray-50">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-navyblue">Simple Agreement for Future Equity</h2>
            <p className="text-gray-500">Reference: {safeNote.referenceNumber}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Investor Details</h3>
              <p><span className="text-gray-500">Name:</span> {safeNote.investorName}</p>
              <p><span className="text-gray-500">Date:</span> {formatDate(safeNote.investmentDate)}</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Investment Details</h3>
              <p><span className="text-gray-500">Property:</span> {safeNote.property}</p>
              <p><span className="text-gray-500">Unit Type:</span> {safeNote.propertyUnit}</p>
              <p><span className="text-gray-500">Amount Invested:</span> R{safeNote.investmentAmount.toLocaleString()}</p>
              <p><span className="text-gray-500">Expected Return:</span> {safeNote.expectedReturn}</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Terms</h3>
              <p>This Simple Agreement for Future Equity (SAFE) represents a legally binding investment agreement between the investor and the property investment collective.</p>
              <p className="mt-2">The investor is entitled to returns proportional to their investment amount in the form of rental income and property value appreciation, as determined by the collective management structure.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Metadata</h3>
              <div className="text-xs font-mono bg-gray-100 p-3 rounded overflow-x-auto">
                <pre>{JSON.stringify(safeNote.metadata, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={downloadSafeNote} className="flex items-center gap-2">
            <Download size={16} />
            Download
          </Button>
          <Button variant="outline" onClick={printSafeNote} className="flex items-center gap-2">
            <Printer size={16} />
            Print
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SafeNoteModal;
