import AdminLayout from "@/components/layout/AdminLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserPlus } from "lucide-react";
import { Star } from "lucide-react";

const mockUsers = [
  { id: 1, name: "John Dube", email: "john.d@example.com", role: "Client", investmentCount: 3, lastLogin: "2023-04-21" },
  { id: 2, name: "Sarah Nkosi", email: "sarah.n@example.com", role: "Client", investmentCount: 5, lastLogin: "2023-04-20" },
  { id: 3, name: "David Mokoena", email: "david.m@example.com", role: "Client", investmentCount: 2, lastLogin: "2023-04-19" },
  { id: 4, name: "Linda Zulu", email: "linda.z@example.com", role: "Client", investmentCount: 6, lastLogin: "2023-04-18" },
  { id: 5, name: "Robert Ndlovu", email: "robert.n@example.com", role: "Client", investmentCount: 1, lastLogin: "2023-04-17" },
  { id: 6, name: "Maria Sithole", email: "maria.s@example.com", role: "Client", investmentCount: 4, lastLogin: "2023-04-16" },
];

const REQUIRED_FIELDS = [
  { key: "name", label: "Full Name" },
  { key: "email", label: "Email Address" },
  { key: "idNumber", label: "ID Number" },
  { key: "taxNumber", label: "Tax Number" },
  { key: "address", label: "Physical Address" },
  { key: "occupation", label: "Occupation" },
  { key: "riskProfile", label: "Risk Profile" },
  { key: "sourceOfFunds", label: "Source of Funds" },
  { key: "dob", label: "Date of Birth" }
];

const detailedUsers = mockUsers.map((user, idx) => ({
  ...user,
  idNumber: idx === 3 ? "" : "7801015387082",
  taxNumber: idx % 2 === 0 ? "1234567890" : "",
  address: idx % 2 === 1 ? "123 Main Street" : "",
  occupation: "",
  riskProfile: idx % 3 === 0 ? "" : "Moderate",
  sourceOfFunds: "",
  dob: ""
}));

const RedStar = () => <Star size={13} className="text-red-500 inline ml-1 align-text-bottom" />;

const isMissing = (user: any, key: string) => !user[key];

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = detailedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-navyblue">User Management</h2>
          <Button className="bg-gold hover:bg-lightgold flex gap-2">
            <UserPlus className="h-4 w-4" />
            <span>Add New User</span>
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>ID Number</TableHead>
                    <TableHead>Tax Number</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Occupation</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Source of Funds</TableHead>
                    <TableHead>Date of Birth</TableHead>
                    <TableHead>Investments</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      {REQUIRED_FIELDS.map(({ key, label }) => (
                        <TableCell key={key}>
                          {user[key] || <span className="text-gray-400">-</span>}
                          {isMissing(user, key) && <RedStar />}
                        </TableCell>
                      ))}
                      <TableCell>{user.investmentCount}</TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
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

export default AdminUsers;
