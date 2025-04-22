
import AdminLayout from "@/components/layout/AdminLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilePlus } from "lucide-react";

// Mock deal data
const mockDeals = [
  { 
    id: 1, 
    name: "Downtown Office Building", 
    fund: "Property Impact Fund", 
    value: 3500000, 
    investors: 12, 
    status: "Active", 
    location: "Cape Town" 
  },
  { 
    id: 2, 
    name: "Solar Farm Project", 
    fund: "Energy Impact Fund", 
    value: 2800000, 
    investors: 8, 
    status: "Active", 
    location: "Eastern Cape" 
  },
  { 
    id: 3, 
    name: "Organic Farm Expansion", 
    fund: "Agri Impact Fund", 
    value: 1750000, 
    investors: 14, 
    status: "Active", 
    location: "KZN" 
  },
  { 
    id: 4, 
    name: "Mixed-Use Development", 
    fund: "Property Impact Fund", 
    value: 5200000, 
    investors: 23, 
    status: "Pending", 
    location: "Johannesburg" 
  },
  { 
    id: 5, 
    name: "Wind Turbine Installation", 
    fund: "Energy Impact Fund", 
    value: 3100000, 
    investors: 19, 
    status: "Active", 
    location: "Western Cape" 
  },
];

const AdminDeals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter deals based on search term
  const filteredDeals = mockDeals.filter(
    (deal) =>
      deal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.fund.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold text-navyblue">Deal Management</h2>
          <Button className="bg-gold hover:bg-lightgold flex gap-2">
            <FilePlus className="h-4 w-4" />
            <span>Create New Deal</span>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <Input
                placeholder="Search deals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Deals</TabsTrigger>
                <TabsTrigger value="property">Property</TabsTrigger>
                <TabsTrigger value="energy">Energy</TabsTrigger>
                <TabsTrigger value="agri">Agriculture</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Fund</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Investors</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDeals.map((deal) => (
                        <TableRow key={deal.id}>
                          <TableCell className="font-medium">{deal.name}</TableCell>
                          <TableCell>{deal.fund}</TableCell>
                          <TableCell>R {deal.value.toLocaleString()}</TableCell>
                          <TableCell>{deal.investors}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              deal.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {deal.status}
                            </span>
                          </TableCell>
                          <TableCell>{deal.location}</TableCell>
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
              </TabsContent>
              <TabsContent value="property">
                {/* Property-specific content */}
                <div className="rounded-md border p-4">
                  <p>Property fund deals will be displayed here.</p>
                </div>
              </TabsContent>
              <TabsContent value="energy">
                {/* Energy-specific content */}
                <div className="rounded-md border p-4">
                  <p>Energy fund deals will be displayed here.</p>
                </div>
              </TabsContent>
              <TabsContent value="agri">
                {/* Agriculture-specific content */}
                <div className="rounded-md border p-4">
                  <p>Agriculture fund deals will be displayed here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDeals;
