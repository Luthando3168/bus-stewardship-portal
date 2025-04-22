
import AdminLayout from "@/components/layout/AdminLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserPlus, Star } from "lucide-react";

// Profile fields based on Jaltech reference and user side
const PROFILE_FIELDS = [
  { key: "fullName", label: "Full Name", required: true },
  { key: "email", label: "Email Address", required: true },
  { key: "phone", label: "Phone Number", required: true },
  { key: "dob", label: "Date of Birth", required: true },
  { key: "idNumber", label: "ID Number", required: true },
  { key: "nationality", label: "Nationality", required: true },
  { key: "taxNumber", label: "Tax Number", required: true },
  { key: "taxCountry", label: "Tax Country", required: true },
  { key: "address", label: "Physical Address", required: true },
  { key: "postalCode", label: "Postal Code", required: true },
  { key: "city", label: "City", required: true },
  { key: "province", label: "Province", required: true },
  { key: "sourceOfFunds", label: "Source of Funds", required: true },
  { key: "employmentStatus", label: "Employment Status", required: true },
  { key: "employer", label: "Employer", required: false },
  { key: "occupation", label: "Occupation", required: true },
  { key: "riskProfile", label: "Risk Profile", required: true },
  { key: "incomeBracket", label: "Annual Income Bracket", required: true },
  { key: "pep", label: "Are you a PEP?", required: true }
];

const mockUsers = [
  {
    id: 1,
    fullName: "John Dube",
    email: "john.d@example.com",
    phone: "",
    dob: "",
    idNumber: "7801015387082",
    nationality: "",
    taxNumber: "",
    taxCountry: "",
    address: "",
    postalCode: "",
    city: "",
    province: "",
    sourceOfFunds: "",
    employmentStatus: "",
    employer: "",
    occupation: "",
    riskProfile: "",
    incomeBracket: "",
    pep: "",
    investmentCount: 3,
    lastLogin: "2023-04-21",
  },
  // ... add more mock users or fetch from your source
];

const RedStar = () => <Star size={13} className="text-red-500 inline ml-1 align-text-bottom" />;

const isMissing = (user: any, key: string, required?: boolean) => required && !user[key];

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                    {PROFILE_FIELDS.map(({ key, label }) => (
                      <TableHead key={key}>{label}</TableHead>
                    ))}
                    <TableHead>Investments</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      {PROFILE_FIELDS.map(({ key, required }) => (
                        <TableCell key={key}>
                          {user[key] || <span className="text-gray-400">-</span>}
                          {isMissing(user, key, required) && <RedStar />}
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
