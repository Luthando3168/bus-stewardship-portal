import { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Plus, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const saBanks = [
  "ABSA Bank",
  "Capitec Bank",
  "First National Bank",
  "Investec Bank",
  "Nedbank",
  "Standard Bank",
  "African Bank",
  "Discovery Bank",
  "TymeBank"
];

const mockBankAccounts = [
  {
    id: 1,
    userId: 1,
    userName: "John Dube",
    clientNumber: "LM202412345",
    accountNumber: "123456789012",
    bankName: "Standard Bank",
    accountType: "Investment Account",
    branch: "Sandton",
    branchCode: "051001",
    dateAssigned: "2024-01-15",
    status: "Active",
    balance: "R 245,000.00",
  },
  {
    id: 2,
    userId: 2,
    userName: "Sarah Nkosi",
    clientNumber: "LM202467890",
    accountNumber: "987654321098",
    bankName: "ABSA Bank",
    accountType: "Investment Account",
    branch: "Rosebank",
    branchCode: "051002",
    dateAssigned: "2024-02-20",
    status: "Active",
    balance: "R 120,500.00",
  },
];

const AdminBankAccounts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newAccount, setNewAccount] = useState({
    userId: "",
    userName: "",
    clientNumber: "",
    accountNumber: "",
    bankName: "",
    accountType: "Investment Account",
    branch: "",
    branchCode: "",
  });

  const filteredAccounts = mockBankAccounts.filter(
    (account) =>
      account.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.accountNumber.includes(searchTerm) ||
      account.clientNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Bank account assigned successfully");
    setShowForm(false);
    setNewAccount({
      userId: "",
      userName: "",
      clientNumber: "",
      accountNumber: "",
      bankName: "",
      accountType: "Investment Account",
      branch: "",
      branchCode: "",
    });
  };

  const handleAccountUpdate = () => {
    window.location.reload();
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-navyblue">Bank Account Management</h2>
          <Button 
            className="bg-gold hover:bg-lightgold flex gap-2"
            onClick={() => setShowForm(!showForm)}
          >
            <Plus className="h-4 w-4" />
            <span>Assign New Account</span>
          </Button>
        </div>

        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>Assign New Bank Account</CardTitle>
              <CardDescription>
                Create a new bank account for a verified user
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="userName">User Name</Label>
                    <Input 
                      id="userName" 
                      value={newAccount.userName}
                      onChange={(e) => setNewAccount({...newAccount, userName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="userId">User ID</Label>
                    <Input 
                      id="userId" 
                      value={newAccount.userId}
                      onChange={(e) => setNewAccount({...newAccount, userId: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clientNumber">Client Number</Label>
                    <Input 
                      id="clientNumber" 
                      value={newAccount.clientNumber}
                      onChange={(e) => setNewAccount({...newAccount, clientNumber: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input 
                      id="accountNumber" 
                      value={newAccount.accountNumber}
                      onChange={(e) => setNewAccount({...newAccount, accountNumber: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Select
                      value={newAccount.bankName}
                      onValueChange={(value) => setNewAccount({...newAccount, bankName: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a bank" />
                      </SelectTrigger>
                      <SelectContent>
                        {saBanks.map((bank) => (
                          <SelectItem key={bank} value={bank}>
                            {bank}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountType">Account Type</Label>
                    <Input 
                      id="accountType" 
                      value={newAccount.accountType}
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch</Label>
                    <Input 
                      id="branch" 
                      value={newAccount.branch}
                      onChange={(e) => setNewAccount({...newAccount, branch: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branchCode">Branch Code</Label>
                    <Input 
                      id="branchCode" 
                      value={newAccount.branchCode}
                      onChange={(e) => setNewAccount({...newAccount, branchCode: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-gold hover:bg-lightgold">
                    Assign Account
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>All Bank Accounts</CardTitle>
            <CardDescription>
              View and manage all assigned bank accounts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <div className="relative max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search accounts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User Name</TableHead>
                    <TableHead>Client Number</TableHead>
                    <TableHead>Account Number</TableHead>
                    <TableHead>Bank</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Branch</TableHead>
                    <TableHead>Date Assigned</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAccounts.map((account) => (
                    <TableRow key={account.id}>
                      <TableCell>{account.userName}</TableCell>
                      <TableCell>{account.clientNumber}</TableCell>
                      <TableCell>{account.accountNumber}</TableCell>
                      <TableCell>{account.bankName}</TableCell>
                      <TableCell>{account.accountType}</TableCell>
                      <TableCell>{account.branch} ({account.branchCode})</TableCell>
                      <TableCell>{account.dateAssigned}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          account.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {account.status}
                        </span>
                      </TableCell>
                      <TableCell>{account.balance}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <EditAccountDialog
                            accountNumber={account.accountNumber}
                            clientNumber={account.clientNumber}
                            userName={account.userName}
                            onEdit={handleAccountUpdate}
                          />
                          <ManualTransactionDialog
                            accountNumber={account.accountNumber}
                            clientNumber={account.clientNumber}
                            userName={account.userName}
                            onTransactionComplete={handleAccountUpdate}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminBankAccounts;
