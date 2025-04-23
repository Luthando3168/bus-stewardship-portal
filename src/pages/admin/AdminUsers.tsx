import AdminLayout from "@/components/layout/AdminLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserPlus, Star, Search } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import UserDetailsDialog from "@/components/admin/users/UserDetailsDialog";

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
    phone: "+27 73 123 4567",
    dob: "1978-01-01",
    idNumber: "7801015387082",
    nationality: "South African",
    taxNumber: "12345678901",
    taxCountry: "South Africa",
    address: "123 Main Street, Sandton",
    postalCode: "2031",
    city: "Johannesburg",
    province: "Gauteng",
    sourceOfFunds: "Employment",
    employmentStatus: "Employed",
    employer: "ABC Corporation",
    occupation: "Financial Analyst",
    riskProfile: "Moderate",
    incomeBracket: "R500,000 - R750,000",
    pep: "No",
    investmentCount: 3,
    lastLogin: "2023-04-21",
  },
  {
    id: 2,
    fullName: "Sarah Nkosi",
    email: "sarah.n@example.com",
    phone: "+27 82 987 6543",
    dob: "1985-05-15",
    idNumber: "8505155387083",
    nationality: "South African",
    taxNumber: "98765432109",
    taxCountry: "South Africa",
    address: "456 Oak Avenue, Rosebank",
    postalCode: "2196",
    city: "Johannesburg",
    province: "Gauteng",
    sourceOfFunds: "Business",
    employmentStatus: "Self-Employed",
    employer: "",
    occupation: "Business Owner",
    riskProfile: "Aggressive",
    incomeBracket: "R750,000 - R1,000,000",
    pep: "No",
    investmentCount: 2,
    lastLogin: "2023-04-18",
  },
];

const mockBeneficiaries = [
  {
    id: 1,
    userId: 1,
    beneficiaryName: "Sarah Dlamini",
    relationship: "Spouse",
    phone: "073 123 4567",
    email: "sarah.d@example.com",
    type: "Primary",
    percentage: 60
  },
  {
    id: 2,
    userId: 1,
    beneficiaryName: "Thabo Dlamini",
    relationship: "Son",
    phone: "082 987 6543",
    email: "thabo.d@example.com",
    type: "Secondary",
    percentage: 40
  }
];

const RedStar = () => <Star size={13} className="text-red-500 inline ml-1 align-text-bottom" />;

const isMissing = (user: any, key: string, required?: boolean) => required && !user[key];

type SearchFormValues = {
  searchType: 'name' | 'email' | 'id';
  searchValue: string;
};

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  
  const form = useForm<SearchFormValues>({
    defaultValues: {
      searchType: 'name',
      searchValue: '',
    },
  });

  const filteredUsers = mockUsers.filter((user) => {
    if (!searchTerm) return true;
    
    return (
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.idNumber.includes(searchTerm)
    );
  });

  const getUserBeneficiaries = (userId: number) => {
    return mockBeneficiaries.filter(b => b.userId === userId);
  };

  const onSubmitAdvancedSearch = (data: SearchFormValues) => {
    if (data.searchType === 'name') {
      setSearchTerm(data.searchValue);
    } else if (data.searchType === 'email') {
      setSearchTerm(data.searchValue);
    } else if (data.searchType === 'id') {
      setSearchTerm(data.searchValue);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-navyblue">User Management</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
            >
              Advanced Search
            </Button>
            <Button className="bg-gold hover:bg-lightgold flex gap-2">
              <UserPlus className="h-4 w-4" />
              <span>Add New User</span>
            </Button>
          </div>
        </div>
        
        {showAdvancedSearch ? (
          <Card>
            <CardHeader>
              <CardTitle>Advanced Search</CardTitle>
              <CardDescription>
                Search for users by name, email, or ID/Passport number
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitAdvancedSearch)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="searchType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Search By</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="name" id="name" />
                              <Label htmlFor="name">Name</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email" />
                              <Label htmlFor="email">Email</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="id" id="id" />
                              <Label htmlFor="id">ID/Passport Number</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="searchValue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Search Term</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter search term..." {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end gap-2">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => {
                        form.reset({
                          searchType: 'name',
                          searchValue: '',
                        });
                        setSearchTerm("");
                      }}
                    >
                      Clear
                    </Button>
                    <Button type="submit" className="bg-navyblue hover:bg-blue-800">
                      Search
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>All Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="relative max-w-sm">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, email or ID number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 w-80"
                  />
                </div>
              </div>
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
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        {PROFILE_FIELDS.map(({ key, required }) => (
                          <TableCell key={key}>
                            {user[key as keyof typeof user] || <span className="text-gray-400">-</span>}
                            {isMissing(user, key, required) && <RedStar />}
                          </TableCell>
                        ))}
                        <TableCell>{user.investmentCount}</TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <UserDetailsDialog 
                              user={user} 
                              beneficiaries={getUserBeneficiaries(user.id)} 
                            />
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {filteredUsers.length === 0 && (
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
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
