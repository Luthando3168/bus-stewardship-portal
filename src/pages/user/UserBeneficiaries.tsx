
import React, { useState } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Printer, Edit } from "lucide-react";
import html2pdf from 'html2pdf.js';

type Beneficiary = {
  id: number;
  name: string;
  relationship: string;
  phone: string;
  email: string;
  type: string;
};

const initialBeneficiaries: Beneficiary[] = [
  {
    id: 1,
    name: "Sarah Dlamini",
    relationship: "Spouse",
    phone: "073 123 4567",
    email: "sarah.d@example.com",
    type: "Primary"
  },
  {
    id: 2,
    name: "Thabo Dlamini",
    relationship: "Son",
    phone: "082 987 6543",
    email: "thabo.d@example.com",
    type: "Secondary"
  }
];

const UserBeneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>(initialBeneficiaries);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingBeneficiary, setEditingBeneficiary] = useState<Beneficiary | null>(null);
  const [newBeneficiary, setNewBeneficiary] = useState<Omit<Beneficiary, 'id'>>({
    name: "",
    relationship: "",
    phone: "",
    email: "",
    type: "Secondary"
  });

  const handleEditDetails = (beneficiary: Beneficiary) => {
    setEditingBeneficiary(beneficiary);
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingBeneficiary) {
      setBeneficiaries(beneficiaries.map(b => 
        b.id === editingBeneficiary.id ? editingBeneficiary : b
      ));
      toast.success("Beneficiary details updated successfully");
      setIsEditDialogOpen(false);
    }
  };

  const handleAddBeneficiary = () => {
    setIsAddDialogOpen(true);
  };

  const handleSaveNew = () => {
    if (!newBeneficiary.name || !newBeneficiary.relationship || !newBeneficiary.phone || !newBeneficiary.email) {
      toast.error("Please fill all required fields");
      return;
    }
    
    const newId = Math.max(...beneficiaries.map(b => b.id), 0) + 1;
    setBeneficiaries([...beneficiaries, { ...newBeneficiary, id: newId }]);
    toast.success("Beneficiary added successfully");
    setIsAddDialogOpen(false);
    setNewBeneficiary({
      name: "",
      relationship: "",
      phone: "",
      email: "",
      type: "Secondary"
    });
  };

  const printBeneficiaryDetails = () => {
    const element = document.getElementById('beneficiary-details-to-print');
    if (!element) return;

    const opt = {
      margin: 10,
      filename: 'beneficiary-details.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
    toast.success("Printing beneficiary details");
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-navyblue">My Beneficiaries</h2>
          <Button 
            variant="outline" 
            onClick={printBeneficiaryDetails} 
            className="flex items-center gap-1"
          >
            <Printer className="h-4 w-4" /> Print Details
          </Button>
        </div>
        
        <p className="text-muted-foreground">
          Manage your beneficiary details for your investment accounts
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Beneficiary Details</CardTitle>
            <CardDescription>
              In case of emergency, these details will be used to contact your beneficiaries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4" id="beneficiary-details-to-print">
              {beneficiaries.map((beneficiary) => (
                <div key={beneficiary.id} className="rounded-md border p-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium mb-2">{beneficiary.type} Beneficiary</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEditDetails(beneficiary)}
                      className="flex items-center gap-1"
                    >
                      <Edit className="h-4 w-4" /> Edit
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p>{beneficiary.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Relationship</p>
                      <p>{beneficiary.relationship}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p>{beneficiary.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p>{beneficiary.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Add New Beneficiary</CardTitle>
            <CardDescription>
              You can add additional beneficiaries to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleAddBeneficiary}
              className="bg-gold hover:bg-lightgold text-white"
            >
              Add Beneficiary
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Edit Beneficiary Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Beneficiary Details</DialogTitle>
            <DialogDescription>
              Update the information for your beneficiary
            </DialogDescription>
          </DialogHeader>
          {editingBeneficiary && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input 
                  id="name" 
                  value={editingBeneficiary.name}
                  onChange={(e) => setEditingBeneficiary({...editingBeneficiary, name: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="relationship" className="text-right">Relationship</Label>
                <Input 
                  id="relationship" 
                  value={editingBeneficiary.relationship}
                  onChange={(e) => setEditingBeneficiary({...editingBeneficiary, relationship: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">Phone</Label>
                <Input 
                  id="phone" 
                  value={editingBeneficiary.phone}
                  onChange={(e) => setEditingBeneficiary({...editingBeneficiary, phone: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input 
                  id="email" 
                  value={editingBeneficiary.email}
                  onChange={(e) => setEditingBeneficiary({...editingBeneficiary, email: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveEdit} className="bg-gold hover:bg-lightgold text-white">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Beneficiary Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Beneficiary</DialogTitle>
            <DialogDescription>
              Enter the details for your new beneficiary
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-name" className="text-right">Name</Label>
              <Input 
                id="new-name" 
                value={newBeneficiary.name}
                onChange={(e) => setNewBeneficiary({...newBeneficiary, name: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-relationship" className="text-right">Relationship</Label>
              <Input 
                id="new-relationship" 
                value={newBeneficiary.relationship}
                onChange={(e) => setNewBeneficiary({...newBeneficiary, relationship: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-phone" className="text-right">Phone</Label>
              <Input 
                id="new-phone" 
                value={newBeneficiary.phone}
                onChange={(e) => setNewBeneficiary({...newBeneficiary, phone: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-email" className="text-right">Email</Label>
              <Input 
                id="new-email" 
                value={newBeneficiary.email}
                onChange={(e) => setNewBeneficiary({...newBeneficiary, email: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-type" className="text-right">Type</Label>
              <select
                id="new-type"
                value={newBeneficiary.type}
                onChange={(e) => setNewBeneficiary({...newBeneficiary, type: e.target.value})}
                className="col-span-3 border border-gray-300 p-2 rounded-md"
              >
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveNew} className="bg-gold hover:bg-lightgold text-white">Add Beneficiary</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </UserLayout>
  );
};

export default UserBeneficiaries;
