
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
import { toast } from "sonner";

interface EditAccountDialogProps {
  accountNumber: string;
  clientNumber: string;
  userName: string;
  onEdit: () => void;
}

const EditAccountDialog = ({ 
  accountNumber, 
  clientNumber, 
  userName,
  onEdit 
}: EditAccountDialogProps) => {
  const [newAccountNumber, setNewAccountNumber] = useState(accountNumber);

  const handleEdit = () => {
    // This will be connected to APIs later
    toast.success("Bank account details updated successfully");
    onEdit();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Edit Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Bank Account</DialogTitle>
          <DialogDescription>
            Update bank account details for {userName} ({clientNumber})
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Current Account Number</Label>
            <Input disabled value={accountNumber} />
          </div>
          <div className="grid gap-2">
            <Label>New Account Number</Label>
            <Input 
              value={newAccountNumber}
              onChange={(e) => setNewAccountNumber(e.target.value)}
              placeholder="Enter new account number"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleEdit}>Update Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditAccountDialog;
