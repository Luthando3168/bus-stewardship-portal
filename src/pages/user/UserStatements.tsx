
import React, { useState } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const fundsData = {
  myfarm: {
    title: "MyFarm Impact Fund",
    description: "Financial statements for your investments in the agricultural sector",
    accountant: "James Smith CA(SA)",
    company: "MyFarm Investments"
  },
  myproperty: {
    title: "MyProperty Impact Fund",
    description: "Financial statements for your investments in the property sector",
    accountant: "Linda Johnson CA(SA)",
    company: "MyProperty Investments"
  },
  myfoodretail: {
    title: "MyFoodRetail Impact Fund",
    description: "Financial statements for your investments in food retail development",
    accountant: "Michael Thompson CA(SA)",
    company: "MyFoodRetail Fund"
  },
  myenergy: {
    title: "MyEnergy Impact Fund",
    description: "Financial statements for your investments in renewable energy",
    accountant: "Sarah Davis CA(SA)",
    company: "MyEnergy Solutions"
  },
  myenterprise: {
    title: "MyEnterprise Impact Fund",
    description: "Financial statements for your investments in enterprise development",
    accountant: "Daniel Ndlovu CA(SA)",
    company: "MyEnterprise Fund"
  },
  mytelco: {
    title: "MyTelco Impact Fund",
    description: "Financial statements for your investments in telecommunications",
    accountant: "Priya Patel CA(SA)",
    company: "MyTelco Investments"
  },
  myfranchise: {
    title: "MyFranchise Impact Fund",
    description: "Financial statements for your franchise investments",
    accountant: "Chris Williams CA(SA)",
    company: "MyFranchise Investments"
  },
  myfuel: {
    title: "MyFuel Impact Fund",
    description: "Financial statements for your investments in fuel stations",
    accountant: "Thabo Molefe CA(SA)",
    company: "MyFuel Stations"
  },
  myschool: {
    title: "MySchool Impact Fund",
    description: "Financial statements for your investments in education facilities",
    accountant: "Emily Johnson CA(SA)",
    company: "MySchool Investments"
  },
  myhealth: {
    title: "MyHealth Impact Fund",
    description: "Financial statements for your investments in healthcare sector",
    accountant: "Dr. Samuel Motau CA(SA)",
    company: "MyHealth Solutions"
  },
  myeducation: {
    title: "MyEducation Impact Fund",
    description: "Financial statements for your investments in educational development",
    accountant: "Rose Naidoo CA(SA)",
    company: "MyEducation Fund"
  }
};

const periods = [
  "Q1 2023", 
  "Q2 2023", 
  "Q3 2023", 
  "Q4 2023",
  "Annual 2023"
];

const UserStatements = () => {
  const [selectedFund, setSelectedFund] = useState<string>("myfarm");
  
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
        
        <div className="space-y-4">
          <div className="max-w-xs">
            <Select
              value={selectedFund}
              onValueChange={setSelectedFund}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fund" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(fundsData).map(([key, data]) => (
                  <SelectItem key={key} value={key}>{data.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>{fundsData[selectedFund as keyof typeof fundsData].title}</CardTitle>
              <CardDescription>
                {fundsData[selectedFund as keyof typeof fundsData].description}
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
                  {periods.map((period, i) => {
                    const fund = fundsData[selectedFund as keyof typeof fundsData];
                    return (
                      <TableRow key={i}>
                        <TableCell>{period}</TableCell>
                        <TableCell>{fund.accountant}</TableCell>
                        <TableCell>{fund.company}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(fund.title, period)}
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
        </div>
      </div>
    </UserLayout>
  );
};

export default UserStatements;
