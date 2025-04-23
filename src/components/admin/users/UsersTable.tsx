
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import UserDetailsDialog from "./UserDetailsDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const RedStar = () => <Star size={13} className="text-red-500 inline ml-1 align-text-bottom" />;

interface User {
  id: number;
  [key: string]: any;
}

interface UsersTableProps {
  users: User[];
  beneficiaries: any[];
}

const isMissing = (user: any, key: string, required?: boolean) => required && !user[key];

const getUserBeneficiaries = (userId: number, beneficiaries: any[]) => {
  return beneficiaries.filter(b => b.userId === userId);
};

const UsersTable = ({ users, beneficiaries }: UsersTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-x-auto">
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
              {users.length > 0 ? (
                users.map((user) => (
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
                        <UserDetailsDialog 
                          user={user} 
                          beneficiaries={getUserBeneficiaries(user.id, beneficiaries)} 
                        />
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={PROFILE_FIELDS.length + 3} className="text-center py-4">
                    No users found matching your search criteria
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersTable;
