
import React from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

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
              <DollarSign className="h-6 w-6 text-gold" />
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
            <CardTitle>Manage Your Beneficiaries</CardTitle>
            <CardDescription>
              Review and update your beneficiary information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Your beneficiary details are important for your investment accounts. Please keep them updated.</p>
            <Link to="/user/beneficiaries">
              <Button className="bg-navyblue hover:bg-blue-800 text-white">
                View & Manage Beneficiaries
              </Button>
            </Link>
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
