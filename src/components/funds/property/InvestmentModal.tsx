
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { InfoCircle, CheckCircle2 } from "lucide-react";
import { BalwinProperty } from "@/data/property/balwin-properties";
import SafeNoteModal from "./SafeNoteModal";

interface InvestmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: BalwinProperty;
  selectedUnitId: string | null;
  minInvestment: number;
}

const InvestmentModal: React.FC<InvestmentModalProps> = ({
  open,
  onOpenChange,
  property,
  selectedUnitId,
  minInvestment,
}) => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(minInvestment);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [investmentCompleted, setInvestmentCompleted] = useState<boolean>(false);
  const [safeNoteOpen, setSafeNoteOpen] = useState<boolean>(false);
  const [safeNoteData, setSafeNoteData] = useState<any>(null);

  const selectedUnit = selectedUnitId 
    ? property.availableUnits.find(unit => unit.id === selectedUnitId)
    : property.availableUnits[0];

  const handleInvestmentAmountChange = (value: number[]) => {
    setInvestmentAmount(value[0]);
  };

  const handleInvestmentSubmit = () => {
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setInvestmentCompleted(true);

      // Generate SAFE Note data
      const safeNote = {
        id: uuidv4(),
        referenceNumber: `SAFE-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
        investorName: "Current User", // This would come from auth context in a real app
        property: property.name,
        propertyUnit: selectedUnit?.type || "3-Bedroom Unit",
        investmentAmount,
        investmentDate: new Date().toISOString(),
        expectedReturn: property.returnRate,
        metadata: {
          propertyId: property.id,
          unitId: selectedUnit?.id,
          locationCoordinates: "Sample coordinates",
          propertyManager: "Balwin Properties",
          investmentTerm: "Open-ended"
        }
      };

      setSafeNoteData(safeNote);

      toast.success("Investment successful!", {
        description: `You've invested R${investmentAmount.toLocaleString()} in ${property.name}`,
      });
    }, 1500);
  };

  const viewSafeNote = () => {
    setSafeNoteOpen(true);
    onOpenChange(false);
  };

  const unitPrice = selectedUnit ? parseInt(selectedUnit.price.replace(/[^\d]/g, "")) : 2000000;
  const maxInvestment = Math.min(unitPrice, 500000); // Cap at either unit price or R500,000

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Invest in {property.name}</DialogTitle>
            <DialogDescription>
              {selectedUnit 
                ? `Invest in a ${selectedUnit.type} in ${property.location}` 
                : `Invest in ${property.name} development in ${property.location}`}
            </DialogDescription>
          </DialogHeader>

          {!investmentCompleted ? (
            <div className="space-y-6 py-4">
              <div className="space-y-2">
                <Label>Investment Amount</Label>
                <div className="flex items-center space-x-4">
                  <span>R</span>
                  <Input 
                    type="number" 
                    value={investmentAmount} 
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    min={minInvestment}
                    max={maxInvestment}
                  />
                </div>
                
                <div className="pt-4">
                  <Slider 
                    value={[investmentAmount]} 
                    min={minInvestment}
                    max={maxInvestment}
                    step={1000}
                    onValueChange={handleInvestmentAmountChange}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Min: R{minInvestment.toLocaleString()}</span>
                    <span>Max: R{maxInvestment.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-md">
                <div className="flex items-start space-x-2">
                  <InfoCircle size={18} className="text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-700">
                    <p className="font-semibold">Investment Information</p>
                    <p className="mt-1">Your investment will be part of a collective purchase of this property unit.</p>
                    <p className="mt-1">Expected returns: {property.returnRate} based on rental income and property appreciation.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Investment Complete!</h3>
              <p className="text-gray-500 mb-6">
                You've successfully invested R{investmentAmount.toLocaleString()} in {property.name}.
                A SAFE Note has been generated for your records.
              </p>
            </div>
          )}

          <DialogFooter>
            {!investmentCompleted ? (
              <>
                <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                <Button 
                  onClick={handleInvestmentSubmit} 
                  disabled={isProcessing || investmentAmount < minInvestment}
                >
                  {isProcessing ? "Processing..." : "Confirm Investment"}
                </Button>
              </>
            ) : (
              <Button onClick={viewSafeNote} className="w-full">View SAFE Note</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {safeNoteData && (
        <SafeNoteModal
          open={safeNoteOpen}
          onOpenChange={setSafeNoteOpen}
          safeNote={safeNoteData}
        />
      )}
    </>
  );
};

export default InvestmentModal;
