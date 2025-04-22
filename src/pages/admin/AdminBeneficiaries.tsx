
import { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, UserCheck } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { toast } from "sonner";

// Mock beneficiary data
const mockBeneficiaries = [
  {
    id: 1,
    userId: 1,
    userName: "John Dube",
    beneficiaryName: "Sarah Dlamini",
    relationship: "Spouse",
    phone: "073 123 4567",
    email: "sarah.d@example.com",
    idNumber: "8201015387083",
    type: "Primary",
    percentage: 60
  },
  {
    id: 2,
    userId: 1,
    userName: "John Dube",
    beneficiaryName: "Thabo Dlamini",
    relationship: "Son",
    phone: "082 987 6543",
    email: "thabo.d@example.com",
    idNumber: "1001015387083",
    type: "Secondary",
    percentage: 40
  },
  {
    id: 3,
    userId: 2,
    userName: "Sarah Nkosi",
    beneficiaryName: "Mandla Nkosi",
    relationship: "Husband",
    phone: "061 555 1234",
    email: "mandla.n@example.com",
    idNumber: "7805125387083",
    type: "Primary",
    percentage: 100
  }
];

// Group beneficiaries by user for the sidebar display
const groupBeneficiariesByUser = () => {
  const userMap = new Map();
  
  mockBeneficiaries.forEach(beneficiary => {
    if (!userMap.has(beneficiary.userId)) {
      userMap.set(beneficiary.userId, {
        id: beneficiary.userId,
        name: beneficiary.userName,
        beneficiaries: []
      });
    }
    
    userMap.get(beneficiary.userId).beneficiaries.push(beneficiary);
  });
  
  return Array.from(userMap.values());
};

const AdminBeneficiaries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<any>(null);
  
  const usersWithBeneficiaries = groupBeneficiariesByUser();
  
  const filteredUsers = usersWithBeneficiaries.filter(
    (user) => user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const selectedUserBeneficiaries = mockBeneficiaries.filter(
    (beneficiary) => beneficiary.userId === selectedUserId
  );
  
  const handleSelectUser = (userId: number) => {
    setSelectedUserId(userId);
  };
  
  const handleViewBeneficiary = (beneficiary: any) => {
    setSelectedBeneficiary(beneficiary);
    setIsDrawerOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">User Beneficiaries</h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                  Select a user to view their beneficiaries
                </CardDescription>
                <div className="relative mt-2">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {filteredUsers.map((user) => (
                    <div 
                      key={user.id}
                      className={`p-3 rounded-md cursor-pointer ${
                        selectedUserId === user.id 
                          ? "bg-navyblue text-white" 
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                      onClick={() => handleSelectUser(user.id)}
                    >
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm mt-1">
                        {selectedUserId === user.id 
                          ? <span className="text-white">
                              {user.beneficiaries.length} Beneficiaries
                            </span>
                          : <span className="text-muted-foreground">
                              {user.beneficiaries.length} Beneficiaries
                            </span>
                        }
                      </div>
                    </div>
                  ))}
                  
                  {filteredUsers.length === 0 && (
                    <div className="text-center py-4 text-muted-foreground">
                      No users found
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full md:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle>
                  {selectedUserId 
                    ? `Beneficiaries for ${usersWithBeneficiaries.find(u => u.id === selectedUserId)?.name}`
                    : "Beneficiary Information"
                  }
                </CardTitle>
                <CardDescription>
                  {selectedUserId 
                    ? "View and manage beneficiary details"
                    : "Select a user to view their beneficiaries"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!selectedUserId ? (
                  <div className="text-center py-12">
                    <UserCheck className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
                    <p className="mt-4 text-muted-foreground">
                      Please select a user from the list to view their beneficiaries
                    </p>
                  </div>
                ) : (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Relationship</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Percentage</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedUserBeneficiaries.map((beneficiary) => (
                          <TableRow key={beneficiary.id}>
                            <TableCell>{beneficiary.beneficiaryName}</TableCell>
                            <TableCell>{beneficiary.relationship}</TableCell>
                            <TableCell>
                              <div>{beneficiary.email}</div>
                              <div className="text-sm text-muted-foreground">{beneficiary.phone}</div>
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
                            <TableCell>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleViewBeneficiary(beneficiary)}
                              >
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                        
                        {selectedUserBeneficiaries.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-4">
                              No beneficiaries found for this user
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader className="border-b pb-4">
            <DrawerTitle>Beneficiary Details</DrawerTitle>
            <DrawerDescription>
              Full information about the beneficiary
            </DrawerDescription>
          </DrawerHeader>
          
          {selectedBeneficiary && (
            <div className="px-4 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-muted-foreground">Name</Label>
                  <p className="font-medium">{selectedBeneficiary.beneficiaryName}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Relationship</Label>
                  <p className="font-medium">{selectedBeneficiary.relationship}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Email</Label>
                  <p className="font-medium">{selectedBeneficiary.email}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Phone</Label>
                  <p className="font-medium">{selectedBeneficiary.phone}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">ID Number</Label>
                  <p className="font-medium">{selectedBeneficiary.idNumber}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Type</Label>
                  <p className="font-medium">{selectedBeneficiary.type}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Allocation Percentage</Label>
                  <p className="font-medium">{selectedBeneficiary.percentage}%</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">User</Label>
                  <p className="font-medium">{selectedBeneficiary.userName}</p>
                </div>
              </div>
            </div>
          )}
          
          <DrawerFooter className="border-t pt-4">
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
                Close
              </Button>
              <Button 
                className="bg-gold hover:bg-lightgold" 
                onClick={() => {
                  toast.success("Beneficiary details updated");
                  setIsDrawerOpen(false);
                }}
              >
                Edit Details
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </AdminLayout>
  );
};

export default AdminBeneficiaries;
