
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserCheck, Printer } from "lucide-react";
import html2pdf from 'html2pdf.js';

interface UserDetailsDialogProps {
  user: any;
  beneficiaries: any[];
}

const UserDetailsDialog = ({ user, beneficiaries }: UserDetailsDialogProps) => {
  const handlePrint = () => {
    const content = document.getElementById('printableContent');
    if (content) {
      const opt = {
        margin: 1,
        filename: `user-details-${user.fullName}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(content).save();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">View Details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>User Details - {user.fullName}</span>
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Print Details
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div id="printableContent" className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(user)
                .filter(([key]) => key !== 'id')
                .map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <p className="text-sm text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="font-medium">{value as string || '-'}</p>
                  </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Beneficiaries</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Relationship</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beneficiaries.length > 0 ? (
                  beneficiaries.map((beneficiary) => (
                    <TableRow key={beneficiary.id}>
                      <TableCell>{beneficiary.beneficiaryName}</TableCell>
                      <TableCell>{beneficiary.relationship}</TableCell>
                      <TableCell>
                        <div>{beneficiary.email}</div>
                        <div className="text-sm text-muted-foreground">
                          {beneficiary.phone}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          beneficiary.type === 'Primary' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {beneficiary.type}
                        </span>
                      </TableCell>
                      <TableCell>{beneficiary.percentage}%</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4">
                      No beneficiaries found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailsDialog;
