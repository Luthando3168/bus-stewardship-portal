
import AdminLayout from "@/components/layout/AdminLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserPlus } from "lucide-react";

// Mock user data
const mockUsers = [
  { id: 1, name: "John Dube", email: "john.d@example.com", role: "Client", investmentCount: 3, lastLogin: "2023-04-21" },
  { id: 2, name: "Sarah Nkosi", email: "sarah.n@example.com", role: "Client", investmentCount: 5, lastLogin: "2023-04-20" },
  { id: 3, name: "David Mokoena", email: "david.m@example.com", role: "Client", investmentCount: 2, lastLogin: "2023-04-19" },
  { id: 4, name: "Linda Zulu", email: "linda.z@example.com", role: "Client", investmentCount: 6, lastLogin: "2023-04-18" },
  { id: 5, name: "Robert Ndlovu", email: "robert.n@example.com", role: "Client", investmentCount: 1, lastLogin: "2023-04-17" },
  { id: 6, name: "Maria Sithole", email: "maria.s@example.com", role: "Client", investmentCount: 4, lastLogin: "2023-04-16" },
];

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter users based on search term
  const filteredUsers = mockUsers.filter(
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
                    <TableHead>Role</TableHead>
                    <TableHead>Investments</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
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
