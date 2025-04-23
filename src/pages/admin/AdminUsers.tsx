
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";
import SearchForm from "@/components/admin/users/SearchForm";
import UsersTable from "@/components/admin/users/UsersTable";
import { mockUsers, mockBeneficiaries } from "@/components/admin/users/mockData";

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const filteredUsers = mockUsers.filter((user) => {
    if (!searchTerm) return true;
    
    return (
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.idNumber.includes(searchTerm)
    );
  });

  const handleAdvancedSearch = (data: { searchType: string; searchValue: string }) => {
    setSearchTerm(data.searchValue);
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
          <SearchForm 
            onSubmit={handleAdvancedSearch}
            onClear={() => setSearchTerm("")}
          />
        ) : (
          <div className="relative max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email or ID number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-80"
            />
          </div>
        )}

        <UsersTable users={filteredUsers} beneficiaries={mockBeneficiaries} />
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
