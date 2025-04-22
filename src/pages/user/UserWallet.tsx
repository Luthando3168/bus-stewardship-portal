
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bank, CreditCard } from "lucide-react";

const UserWallet = () => {
  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">My Wallet</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Standard Bank Account</CardTitle>
                <CardDescription>Investment Account</CardDescription>
              </div>
              <Bank className="h-6 w-6 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-3xl font-bold">R 245,000.00</div>
                <div className="text-sm text-muted-foreground">
                  Account Number: **** **** **** 1234
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Available to Invest</CardTitle>
                <CardDescription>From Wallet Balance</CardDescription>
              </div>
              <CreditCard className="h-6 w-6 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-3xl font-bold">R 245,000.00</div>
                <Button className="bg-gold hover:bg-lightgold text-white mt-2">
                  Invest Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Beneficiary Details</CardTitle>
            <CardDescription>
              In case of emergency, these details will be used to contact your beneficiaries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Primary Beneficiary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p>Sarah Dlamini</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Relationship</p>
                    <p>Spouse</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>073 123 4567</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>sarah.d@example.com</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">Edit Details</Button>
              </div>
              
              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Secondary Beneficiary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p>Thabo Dlamini</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Relationship</p>
                    <p>Son</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>082 987 6543</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>thabo.d@example.com</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">Edit Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="transactions">
          <TabsList>
            <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            <TabsTrigger value="statements">Bank Statements</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2023-04-15</TableCell>
                      <TableCell>Investment Distribution</TableCell>
                      <TableCell className="text-green-600">+ R 12,500.00</TableCell>
                      <TableCell>Deposit</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-04-01</TableCell>
                      <TableCell>Solar Farm Project Investment</TableCell>
                      <TableCell className="text-red-600">- R 85,000.00</TableCell>
                      <TableCell>Withdrawal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-03-15</TableCell>
                      <TableCell>Investment Distribution</TableCell>
                      <TableCell className="text-green-600">+ R 11,200.00</TableCell>
                      <TableCell>Deposit</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="statements">
            <Card>
              <CardHeader>
                <CardTitle>Available Statements</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Issue Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>April 2023</TableCell>
                      <TableCell>May 1, 2023</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Download</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>March 2023</TableCell>
                      <TableCell>April 1, 2023</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Download</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>February 2023</TableCell>
                      <TableCell>March 1, 2023</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Download</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default UserWallet;
