
import React, { useState } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// Dummy statement data for each fund and period
const dummyStatements: Record<string, Record<string, {
  revenue: string;
  expenses: string;
  netProfit: string;
  assets: string;
  liabilities: string;
}>> = {
  myfarm: {
    "Q1 2023": { revenue: "R 220,000", expenses: "R 61,000", netProfit: "R 159,000", assets: "R 800,000", liabilities: "R 85,000" },
    "Q2 2023": { revenue: "R 185,000", expenses: "R 59,000", netProfit: "R 126,000", assets: "R 810,000", liabilities: "R 87,000" },
    "Q3 2023": { revenue: "R 240,000", expenses: "R 65,000", netProfit: "R 175,000", assets: "R 850,000", liabilities: "R 90,000" },
    "Q4 2023": { revenue: "R 210,000", expenses: "R 54,000", netProfit: "R 156,000", assets: "R 900,000", liabilities: "R 88,000" },
    "Annual 2023": { revenue: "R 855,000", expenses: "R 239,000", netProfit: "R 616,000", assets: "R 900,000", liabilities: "R 88,000" }
  },
  myproperty: {
    "Q1 2023": { revenue: "R 400,000", expenses: "R 120,000", netProfit: "R 280,000", assets: "R 2,100,000", liabilities: "R 210,000" },
    "Q2 2023": { revenue: "R 390,000", expenses: "R 118,000", netProfit: "R 272,000", assets: "R 2,150,000", liabilities: "R 215,000" },
    "Q3 2023": { revenue: "R 410,000", expenses: "R 120,000", netProfit: "R 290,000", assets: "R 2,200,000", liabilities: "R 220,000" },
    "Q4 2023": { revenue: "R 430,000", expenses: "R 110,000", netProfit: "R 320,000", assets: "R 2,300,000", liabilities: "R 225,000" },
    "Annual 2023": { revenue: "R 1,630,000", expenses: "R 468,000", netProfit: "R 1,162,000", assets: "R 2,300,000", liabilities: "R 225,000" }
  },
  myfoodretail: {
    "Q1 2023": { revenue: "R 160,000", expenses: "R 45,000", netProfit: "R 115,000", assets: "R 560,000", liabilities: "R 68,000" },
    "Q2 2023": { revenue: "R 155,000", expenses: "R 43,000", netProfit: "R 112,000", assets: "R 580,000", liabilities: "R 65,000" },
    "Q3 2023": { revenue: "R 170,000", expenses: "R 40,000", netProfit: "R 130,000", assets: "R 600,000", liabilities: "R 70,000" },
    "Q4 2023": { revenue: "R 180,000", expenses: "R 47,000", netProfit: "R 133,000", assets: "R 630,000", liabilities: "R 75,000" },
    "Annual 2023": { revenue: "R 665,000", expenses: "R 175,000", netProfit: "R 490,000", assets: "R 630,000", liabilities: "R 75,000" }
  },
  myenergy: {
    "Q1 2023": { revenue: "R 320,000", expenses: "R 95,000", netProfit: "R 225,000", assets: "R 1,800,000", liabilities: "R 120,000" },
    "Q2 2023": { revenue: "R 318,000", expenses: "R 93,000", netProfit: "R 225,000", assets: "R 1,820,000", liabilities: "R 115,000" },
    "Q3 2023": { revenue: "R 300,000", expenses: "R 90,000", netProfit: "R 210,000", assets: "R 1,850,000", liabilities: "R 118,000" },
    "Q4 2023": { revenue: "R 335,000", expenses: "R 80,000", netProfit: "R 255,000", assets: "R 1,910,000", liabilities: "R 120,000" },
    "Annual 2023": { revenue: "R 1,273,000", expenses: "R 358,000", netProfit: "R 915,000", assets: "R 1,910,000", liabilities: "R 120,000" }
  },
  myenterprise: {
    "Q1 2023": { revenue: "R 125,000", expenses: "R 34,000", netProfit: "R 91,000", assets: "R 390,000", liabilities: "R 38,000" },
    "Q2 2023": { revenue: "R 130,000", expenses: "R 33,000", netProfit: "R 97,000", assets: "R 410,000", liabilities: "R 36,000" },
    "Q3 2023": { revenue: "R 124,000", expenses: "R 32,000", netProfit: "R 92,000", assets: "R 430,000", liabilities: "R 39,000" },
    "Q4 2023": { revenue: "R 139,000", expenses: "R 40,000", netProfit: "R 99,000", assets: "R 450,000", liabilities: "R 37,000" },
    "Annual 2023": { revenue: "R 518,000", expenses: "R 139,000", netProfit: "R 379,000", assets: "R 450,000", liabilities: "R 37,000" }
  },
  mytelco: {
    "Q1 2023": { revenue: "R 230,000", expenses: "R 59,000", netProfit: "R 171,000", assets: "R 700,000", liabilities: "R 91,000" },
    "Q2 2023": { revenue: "R 225,000", expenses: "R 61,000", netProfit: "R 164,000", assets: "R 720,000", liabilities: "R 89,000" },
    "Q3 2023": { revenue: "R 240,000", expenses: "R 58,000", netProfit: "R 182,000", assets: "R 750,000", liabilities: "R 90,000" },
    "Q4 2023": { revenue: "R 260,000", expenses: "R 63,000", netProfit: "R 197,000", assets: "R 790,000", liabilities: "R 96,000" },
    "Annual 2023": { revenue: "R 955,000", expenses: "R 241,000", netProfit: "R 714,000", assets: "R 790,000", liabilities: "R 96,000" }
  }
};

const fundsData = {
  myfarm: {
    title: "MyFarm",
    description: "Financial statements for your investments in the agricultural sector",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyFarm Investments"
  },
  myproperty: {
    title: "MyProperty",
    description: "Financial statements for your investments in the property sector",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyProperty Investments"
  },
  myfoodretail: {
    title: "MyFoodRetail",
    description: "Financial statements for your investments in food retail development",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyFoodRetail Fund"
  },
  myenergy: {
    title: "MyEnergy",
    description: "Financial statements for your investments in renewable energy",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyEnergy Solutions"
  },
  myenterprise: {
    title: "MyEnterprise",
    description: "Financial statements for your investments in enterprise development",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyEnterprise Fund"
  },
  mytelco: {
    title: "MyTelco",
    description: "Financial statements for your investments in telecommunications",
    accountant: "Luthando Maduna Chartered Accountants",
    company: "MyTelco Investments"
  }
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
  const statementData = dummyStatements[selectedFund];

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
        <Card className="p-0 w-full max-w-3xl mx-auto">
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
                  <TableHead className="min-w-[90px]">Period</TableHead>
                  <TableHead className="min-w-[120px]">Revenue</TableHead>
                  <TableHead className="min-w-[120px]">Expenses</TableHead>
                  <TableHead className="min-w-[120px]">Net Profit</TableHead>
                  <TableHead className="min-w-[120px]">Assets</TableHead>
                  <TableHead className="min-w-[120px]">Liabilities</TableHead>
                  <TableHead className="min-w-[200px]">Reporting Accountant</TableHead>
                  <TableHead className="min-w-[140px]">Company Name</TableHead>
                  <TableHead className="min-w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {periods.map((period, i) => (
                  <TableRow key={i}>
                    <TableCell>{period}</TableCell>
                    <TableCell>{statementData[period].revenue}</TableCell>
                    <TableCell>{statementData[period].expenses}</TableCell>
                    <TableCell>{statementData[period].netProfit}</TableCell>
                    <TableCell>{statementData[period].assets}</TableCell>
                    <TableCell>{statementData[period].liabilities}</TableCell>
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
