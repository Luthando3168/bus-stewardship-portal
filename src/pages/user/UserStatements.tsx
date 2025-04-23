
import React, { useState } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// Modified fund metadata with display names without 'Impact Fund'
const fundsData = {
  myfarm: {
    title: "MyFarm",
    description: "Financial statements for your investments in the agricultural sector",
    accountant: "James Smith CA(SA)",
    company: "MyFarm Investments"
  },
  myproperty: {
    title: "MyProperty",
    description: "Financial statements for your investments in the property sector",
    accountant: "Linda Johnson CA(SA)",
    company: "MyProperty Investments"
  },
  myfoodretail: {
    title: "MyFoodRetail",
    description: "Financial statements for your investments in food retail development",
    accountant: "Michael Thompson CA(SA)",
    company: "MyFoodRetail Fund"
  },
  myenergy: {
    title: "MyEnergy",
    description: "Financial statements for your investments in renewable energy",
    accountant: "Sarah Davis CA(SA)",
    company: "MyEnergy Solutions"
  },
  myenterprise: {
    title: "MyEnterprise",
    description: "Financial statements for your investments in enterprise development",
    accountant: "Daniel Ndlovu CA(SA)",
    company: "MyEnterprise Fund"
  },
  mytelco: {
    title: "MyTelco",
    description: "Financial statements for your investments in telecommunications",
    accountant: "Priya Patel CA(SA)",
    company: "MyTelco Investments"
  }
  // Funds beyond MyTelco removed for dropdown (per user request)
};

const periods = [
  "Q1 2023", 
  "Q2 2023", 
  "Q3 2023", 
  "Q4 2023",
  "Annual 2023"
];

const fundKeys = Object.keys(fundsData);

const UserStatements = () => {
  const [selectedFund, setSelectedFund] = useState<string>("myfarm");

  const handleDownload = (fund: string, period: string) => {
    toast.success(`Downloading ${fund} statement for ${period}`);
    // Real download logic would go here
  };

  const fund = fundsData[selectedFund as keyof typeof fundsData];

  return (
    <UserLayout>
      <div className="space-y-4 md:space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">Financial Statements</h2>
        <p className="text-muted-foreground text-base">
          Access all your financial statements and documents related to your investments in our funds.
        </p>
        {/* Dropdown menu for fund selection */}
        <div className="w-full max-w-xs py-2">
          <Select value={selectedFund} onValueChange={setSelectedFund}>
            <SelectTrigger>
              <SelectValue placeholder="Select Fund" />
            </SelectTrigger>
            <SelectContent>
              {fundKeys.map((key) => (
                <SelectItem key={key} value={key}>
                  {fundsData[key as keyof typeof fundsData].title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Card className="p-0 w-full max-w-2xl mx-auto">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="!text-lg !font-bold">
              {fund.title}
            </CardTitle>
            <CardDescription className="mt-1 text-sm">
              {fund.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto px-2 pb-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[100px]">Period</TableHead>
                  <TableHead className="min-w-[170px]">Reporting Accountant</TableHead>
                  <TableHead className="min-w-[140px]">Company Name</TableHead>
                  <TableHead className="min-w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {periods.map((period, i) => (
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
    </UserLayout>
  );
};

export default UserStatements;

