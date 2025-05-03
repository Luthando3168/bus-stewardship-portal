
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PropertyProps } from "./PropertyCard";
import { ArrowRight } from "lucide-react";

interface PaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  selectedProperty: PropertyProps | null;
}

const PaymentDialog: React.FC<PaymentDialogProps> = ({
  isOpen,
  onClose,
  onSubmit,
  selectedProperty
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

  if (!selectedProperty) return null;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      onSubmit();
    }, 1500);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Booking</DialogTitle>
        </DialogHeader>
        
        <div className="mb-4 p-3 bg-gray-50 rounded-md">
          <div className="text-sm">
            <p className="font-medium">{selectedProperty.name}</p>
            <p className="text-gray-500">{selectedProperty.location}</p>
            <div className="flex justify-between mt-2 pt-2 border-t">
              <span>Total Payment:</span>
              <span className="font-semibold">R{selectedProperty.price}</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardName">Name on Card</Label>
              <Input 
                id="cardName"
                name="cardName"
                placeholder="John Doe" 
                value={formData.cardName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input 
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456" 
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input 
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY" 
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input 
                  id="cvv"
                  name="cvv"
                  placeholder="123" 
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold/90 text-white"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Complete Booking"}
              {!isProcessing && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
