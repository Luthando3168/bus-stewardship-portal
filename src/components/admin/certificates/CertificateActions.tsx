import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ArrowRight } from "lucide-react";

interface CertificateActionsProps {
  certificateId: string;
  status: string;
  onStatusChange: (id: string, newStatus: string) => void;
}

export const CertificateActions: React.FC<CertificateActionsProps> = ({
  certificateId,
  status,
  onStatusChange
}) => {
  const [showTransferDialog, setShowTransferDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [actionType, setActionType] = useState<"cancel" | "revoke" | null>(null);
  const [newHolder, setNewHolder] = useState("");

  const handleTransfer = () => {
    console.log(`Transferring certificate ${certificateId} to ${newHolder}`);
    onStatusChange(certificateId, "transferred");
    setShowTransferDialog(false);
  };

  const handleStatusChange = () => {
    if (actionType) {
      console.log(`${actionType}ing certificate ${certificateId}`);
      onStatusChange(certificateId, actionType + "d");
      setShowConfirmDialog(false);
      setActionType(null);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="w-24">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem 
            onClick={() => setShowTransferDialog(true)}
            disabled={status !== "active"}
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Transfer
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => {
              setActionType("cancel");
              setShowConfirmDialog(true);
            }}
            disabled={status !== "active"}
          >
            Cancel
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => {
              setActionType("revoke");
              setShowConfirmDialog(true);
            }}
            disabled={status !== "active"}
            className="text-red-600"
          >
            Revoke
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={showTransferDialog} onOpenChange={setShowTransferDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transfer Certificate</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="newHolder" className="text-sm font-medium">New Certificate Holder</label>
              <Input
                id="newHolder"
                placeholder="Enter new holder details"
                value={newHolder}
                onChange={(e) => setNewHolder(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTransferDialog(false)}>Cancel</Button>
            <Button onClick={handleTransfer} disabled={!newHolder}>Transfer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {actionType === "cancel" ? "Cancel Certificate" : "Revoke Certificate"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to {actionType} this certificate? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleStatusChange}>
              {actionType === "cancel" ? "Yes, Cancel Certificate" : "Yes, Revoke Certificate"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
