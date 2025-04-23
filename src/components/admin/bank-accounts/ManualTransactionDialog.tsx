
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface ManualTransactionDialogProps {
  accountNumber: string;
  clientNumber: string;
  userName: string;
  onTransactionComplete: () => void;
}

const ManualTransactionDialog = ({ 
  accountNumber, 
  clientNumber, 
  userName,
  onTransactionComplete 
}: ManualTransactionDialogProps) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("deposit");
  const [reference, setReference] = useState("");

  const handleTransaction = () => {
    // This will be connected to APIs later
    const transactionAmount = type === "deposit" ? amount : `-${amount}`;
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} of R${amount} processed successfully`);
    onTransactionComplete();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Process Transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Process Manual Transaction</DialogTitle>
          <DialogDescription>
            Process a manual transaction for {userName} ({clientNumber})
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Account Number</Label>
            <Input disabled value={accountNumber} />
          </div>
          <div className="grid gap-2">
            <Label>Transaction Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deposit">Deposit</SelectItem>
                <SelectItem value="withdrawal">Withdrawal</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Amount (R)</Label>
            <Input 
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <div className="grid gap-2">
            <Label>Reference</Label>
            <Input 
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="Enter transaction reference"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleTransaction}>Process Transaction</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ManualTransactionDialog;
