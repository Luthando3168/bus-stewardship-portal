
import React, { useState } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner";

const UserStatements = () => {
  const handleDownload = (type: string, period: string) => {
    toast.success(`Downloading ${type} statement for ${period}`);
    // In a real app, this would trigger an actual download
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">Financial Statements</h2>
        <p className="text-muted-foreground">
          Access all your financial statements and documents related to your investments.
        </p>
        
        <Tabs defaultValue="income">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="income">Income Statements</TabsTrigger>
            <TabsTrigger value="balance">Balance Sheets</TabsTrigger>
            <TabsTrigger value="cash">Cash Flow Statements</TabsTrigger>
            <TabsTrigger value="other">Other Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="income">
            <Card>
              <CardHeader>
                <CardTitle>Income Statements</CardTitle>
                <CardDescription>
                  Quarterly and annual statements showing your investment income
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Date Issued</TableHead>
                      <TableHead>Investment Fund</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { period: "Q1 2023", date: "April 15, 2023", fund: "Property Impact Fund" },
                      { period: "Q2 2023", date: "July 15, 2023", fund: "Property Impact Fund" },
                      { period: "Q3 2023", date: "October 15, 2023", fund: "Property Impact Fund" },
                      { period: "Q4 2023", date: "January 15, 2024", fund: "Property Impact Fund" },
                      { period: "Annual 2023", date: "February 28, 2024", fund: "All Investments" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.fund}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('Income', item.period)}
                            className="flex items-center gap-1"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="balance">
            <Card>
              <CardHeader>
                <CardTitle>Balance Sheets</CardTitle>
                <CardDescription>
                  Statements showing your assets, liabilities, and equity in investments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Date Issued</TableHead>
                      <TableHead>Investment Fund</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { period: "Q1 2023", date: "April 15, 2023", fund: "All Investments" },
                      { period: "Q2 2023", date: "July 15, 2023", fund: "All Investments" },
                      { period: "Q3 2023", date: "October 15, 2023", fund: "All Investments" },
                      { period: "Q4 2023", date: "January 15, 2024", fund: "All Investments" },
                      { period: "Annual 2023", date: "February 28, 2024", fund: "All Investments" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.fund}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('Balance', item.period)}
                            className="flex items-center gap-1"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="cash">
            <Card>
              <CardHeader>
                <CardTitle>Cash Flow Statements</CardTitle>
                <CardDescription>
                  Statements showing the flow of cash from your investments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Date Issued</TableHead>
                      <TableHead>Investment Fund</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { period: "Q1 2023", date: "April 15, 2023", fund: "All Investments" },
                      { period: "Q2 2023", date: "July 15, 2023", fund: "All Investments" },
                      { period: "Q3 2023", date: "October 15, 2023", fund: "All Investments" },
                      { period: "Q4 2023", date: "January 15, 2024", fund: "All Investments" },
                      { period: "Annual 2023", date: "February 28, 2024", fund: "All Investments" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.fund}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('Cash Flow', item.period)}
                            className="flex items-center gap-1"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="other">
            <Card>
              <CardHeader>
                <CardTitle>Other Financial Documents</CardTitle>
                <CardDescription>
                  Tax certificates, investment confirmations, and other important documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document</TableHead>
                      <TableHead>Date Issued</TableHead>
                      <TableHead>Related To</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { document: "Tax Certificate - 2023", date: "February 28, 2024", related: "All Investments" },
                      { document: "Investment Confirmation", date: "March 10, 2023", related: "Property Impact Fund" },
                      { document: "Annual Investment Summary", date: "January 15, 2024", related: "All Investments" },
                      { document: "Dividend Statement", date: "December 15, 2023", related: "Energy Impact Fund" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.document}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.related}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(item.document, '')}
                            className="flex items-center gap-1"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
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

export default UserStatements;
