
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
        
        <Tabs defaultValue="myfarm">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="myfarm">MyFarm Impact Fund</TabsTrigger>
            <TabsTrigger value="myproperty">MyProperty Impact Fund</TabsTrigger>
            <TabsTrigger value="myfoodretail">MyFoodRetail Impact Fund</TabsTrigger>
            <TabsTrigger value="myenergy">MyEnergy Impact Fund</TabsTrigger>
            <TabsTrigger value="myenterprise">MyEnterprise Impact Fund</TabsTrigger>
            <TabsTrigger value="mytelco">MyTelco Impact Fund</TabsTrigger>
          </TabsList>
          
          <TabsContent value="myfarm">
            <Card>
              <CardHeader>
                <CardTitle>MyFarm Impact Fund</CardTitle>
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
                      { period: "Q1 2023", accountant: "James Smith CA(SA)", company: "MyFarm Investments" },
                      { period: "Q2 2023", accountant: "James Smith CA(SA)", company: "MyFarm Investments" },
                      { period: "Q3 2023", accountant: "James Smith CA(SA)", company: "MyFarm Investments" },
                      { period: "Q4 2023", accountant: "James Smith CA(SA)", company: "MyFarm Investments" },
                      { period: "Annual 2023", accountant: "James Smith CA(SA)", company: "MyFarm Investments" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('MyFarm Impact Fund', item.period)}
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
          
          <TabsContent value="myproperty">
            <Card>
              <CardHeader>
                <CardTitle>MyProperty Impact Fund</CardTitle>
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
                      { period: "Q1 2023", accountant: "Linda Johnson CA(SA)", company: "MyProperty Investments" },
                      { period: "Q2 2023", accountant: "Linda Johnson CA(SA)", company: "MyProperty Investments" },
                      { period: "Q3 2023", accountant: "Linda Johnson CA(SA)", company: "MyProperty Investments" },
                      { period: "Q4 2023", accountant: "Linda Johnson CA(SA)", company: "MyProperty Investments" },
                      { period: "Annual 2023", accountant: "Linda Johnson CA(SA)", company: "MyProperty Investments" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('MyProperty Impact Fund', item.period)}
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
          
          <TabsContent value="myfoodretail">
            <Card>
              <CardHeader>
                <CardTitle>MyFoodRetail Impact Fund</CardTitle>
                <CardDescription>
                  Financial statements for your investments in food retail development
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
                      { period: "Q1 2023", accountant: "Michael Thompson CA(SA)", company: "MyFoodRetail Fund" },
                      { period: "Q2 2023", accountant: "Michael Thompson CA(SA)", company: "MyFoodRetail Fund" },
                      { period: "Q3 2023", accountant: "Michael Thompson CA(SA)", company: "MyFoodRetail Fund" },
                      { period: "Q4 2023", accountant: "Michael Thompson CA(SA)", company: "MyFoodRetail Fund" },
                      { period: "Annual 2023", accountant: "Michael Thompson CA(SA)", company: "MyFoodRetail Fund" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('MyFoodRetail Impact Fund', item.period)}
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
          
          <TabsContent value="myenergy">
            <Card>
              <CardHeader>
                <CardTitle>MyEnergy Impact Fund</CardTitle>
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
                      { period: "Q1 2023", accountant: "Sarah Davis CA(SA)", company: "MyEnergy Solutions" },
                      { period: "Q2 2023", accountant: "Sarah Davis CA(SA)", company: "MyEnergy Solutions" },
                      { period: "Q3 2023", accountant: "Sarah Davis CA(SA)", company: "MyEnergy Solutions" },
                      { period: "Q4 2023", accountant: "Sarah Davis CA(SA)", company: "MyEnergy Solutions" },
                      { period: "Annual 2023", accountant: "Sarah Davis CA(SA)", company: "MyEnergy Solutions" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('MyEnergy Impact Fund', item.period)}
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
          
          <TabsContent value="myenterprise">
            <Card>
              <CardHeader>
                <CardTitle>MyEnterprise Impact Fund</CardTitle>
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
                      { period: "Q1 2023", accountant: "Daniel Ndlovu CA(SA)", company: "MyEnterprise Fund" },
                      { period: "Q2 2023", accountant: "Daniel Ndlovu CA(SA)", company: "MyEnterprise Fund" },
                      { period: "Q3 2023", accountant: "Daniel Ndlovu CA(SA)", company: "MyEnterprise Fund" },
                      { period: "Q4 2023", accountant: "Daniel Ndlovu CA(SA)", company: "MyEnterprise Fund" },
                      { period: "Annual 2023", accountant: "Daniel Ndlovu CA(SA)", company: "MyEnterprise Fund" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('MyEnterprise Impact Fund', item.period)}
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
          
          <TabsContent value="mytelco">
            <Card>
              <CardHeader>
                <CardTitle>MyTelco Impact Fund</CardTitle>
                <CardDescription>
                  Financial statements for your investments in telecommunications
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
                      { period: "Q1 2023", accountant: "Priya Patel CA(SA)", company: "MyTelco Investments" },
                      { period: "Q2 2023", accountant: "Priya Patel CA(SA)", company: "MyTelco Investments" },
                      { period: "Q3 2023", accountant: "Priya Patel CA(SA)", company: "MyTelco Investments" },
                      { period: "Q4 2023", accountant: "Priya Patel CA(SA)", company: "MyTelco Investments" },
                      { period: "Annual 2023", accountant: "Priya Patel CA(SA)", company: "MyTelco Investments" }
                    ].map((item, i) => (
                      <TableRow key={i}>
                        <TableCell>{item.period}</TableCell>
                        <TableCell>{item.accountant}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload('MyTelco Impact Fund', item.period)}
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
