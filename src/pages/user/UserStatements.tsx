
import React from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner";

const UserStatements = () => {
  const handleDownload = (fund: string, period: string) => {
    toast.success(`Downloading ${fund} statement for ${period}`);
    // In a real app, this would trigger an actual download
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">Financial Statements</h2>
        <p className="text-muted-foreground">
          Access all your financial statements and documents related to your investments in our impact funds.
        </p>
        
        <Tabs defaultValue="agri">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="agri">Sankofa Agri Impact Fund</TabsTrigger>
            <TabsTrigger value="property">Sankofa Property Impact Fund</TabsTrigger>
            <TabsTrigger value="enterprise">Sankofa Enterprise Impact Fund</TabsTrigger>
            <TabsTrigger value="energy">Sankofa Energy Impact Fund</TabsTrigger>
          </TabsList>
          
          <TabsContent value="agri">
            <Card>
              <CardHeader>
                <CardTitle>Sankofa Agri Impact Fund</CardTitle>
                <CardDescription>
                  Financial statements for your investments in the agricultural sector
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Reporting Accountant</TableHead>
                      <TableHead>Company Name</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { period: "Q1 2023", accountant: "James Smith CA(SA)", company: "Sankofa Agri Investments" },
                      { period: "Q2 2023", accountant: "James Smith CA(SA)", company: "Sankofa Agri Investments" },
                      { period: "Q3 2023", accountant: "James Smith CA(SA)", company: "Sankofa Agri Investments" },
                      { period: "Q4 2023", accountant: "James Smith CA(SA)", company: "Sankofa Agri Investments" },
                      { period: "Annual 2023", accountant: "James Smith CA(SA)", company: "Sankofa Agri Investments" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('Sankofa Agri Impact Fund', item.period)}
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
          
          <TabsContent value="property">
            <Card>
              <CardHeader>
                <CardTitle>Sankofa Property Impact Fund</CardTitle>
                <CardDescription>
                  Financial statements for your investments in the property sector
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Reporting Accountant</TableHead>
                      <TableHead>Company Name</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { period: "Q1 2023", accountant: "Linda Johnson CA(SA)", company: "Sankofa Property Investments" },
                      { period: "Q2 2023", accountant: "Linda Johnson CA(SA)", company: "Sankofa Property Investments" },
                      { period: "Q3 2023", accountant: "Linda Johnson CA(SA)", company: "Sankofa Property Investments" },
                      { period: "Q4 2023", accountant: "Linda Johnson CA(SA)", company: "Sankofa Property Investments" },
                      { period: "Annual 2023", accountant: "Linda Johnson CA(SA)", company: "Sankofa Property Investments" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('Sankofa Property Impact Fund', item.period)}
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
          
          <TabsContent value="enterprise">
            <Card>
              <CardHeader>
                <CardTitle>Sankofa Enterprise Impact Fund</CardTitle>
                <CardDescription>
                  Financial statements for your investments in enterprise development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Reporting Accountant</TableHead>
                      <TableHead>Company Name</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { period: "Q1 2023", accountant: "Michael Thompson CA(SA)", company: "Sankofa Enterprise Fund" },
                      { period: "Q2 2023", accountant: "Michael Thompson CA(SA)", company: "Sankofa Enterprise Fund" },
                      { period: "Q3 2023", accountant: "Michael Thompson CA(SA)", company: "Sankofa Enterprise Fund" },
                      { period: "Q4 2023", accountant: "Michael Thompson CA(SA)", company: "Sankofa Enterprise Fund" },
                      { period: "Annual 2023", accountant: "Michael Thompson CA(SA)", company: "Sankofa Enterprise Fund" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('Sankofa Enterprise Impact Fund', item.period)}
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
          
          <TabsContent value="energy">
            <Card>
              <CardHeader>
                <CardTitle>Sankofa Energy Impact Fund</CardTitle>
                <CardDescription>
                  Financial statements for your investments in renewable energy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Reporting Accountant</TableHead>
                      <TableHead>Company Name</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { period: "Q1 2023", accountant: "Sarah Davis CA(SA)", company: "Sankofa Energy Solutions" },
                      { period: "Q2 2023", accountant: "Sarah Davis CA(SA)", company: "Sankofa Energy Solutions" },
                      { period: "Q3 2023", accountant: "Sarah Davis CA(SA)", company: "Sankofa Energy Solutions" },
                      { period: "Q4 2023", accountant: "Sarah Davis CA(SA)", company: "Sankofa Energy Solutions" },
                      { period: "Annual 2023", accountant: "Sarah Davis CA(SA)", company: "Sankofa Energy Solutions" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('Sankofa Energy Impact Fund', item.period)}
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
