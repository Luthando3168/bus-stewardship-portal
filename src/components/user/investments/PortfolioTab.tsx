
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

interface Investment {
  id: string;
  name: string;
  fund: string;
  amount: string;
  investmentDate: string;
  term: string;
  currentValue: string;
  returnToDate: string;
  status: string;
  distributions: Array<{
    date: string;
    amount: string;
  }>;
  details: {
    description: string;
    location: string;
    projectManager: string;
    occupancyRate?: string;
    performanceRatio?: string;
    certifications?: string;
    lastValuation?: string;
    lastInspection?: string;
    harvestSeason?: string;
    highlights: string[];
  };
}

interface PortfolioTabProps {
  investments: Investment[];
  onSelectInvestment: (investment: Investment) => void;
}

const PortfolioTab: React.FC<PortfolioTabProps> = ({ investments, onSelectInvestment }) => {
  const totalInvested = investments.reduce((sum, inv) => {
    const amountStr = inv.amount.replace(/[^\d.]/g, '');
    return sum + parseFloat(amountStr);
  }, 0);

  const totalCurrent = investments.reduce((sum, inv) => {
    const valueStr = inv.currentValue.replace(/[^\d.]/g, '');
    return sum + parseFloat(valueStr);
  }, 0);

  // Calculate overall return percentage
  const overallReturn = totalInvested > 0 
    ? ((totalCurrent - totalInvested) / totalInvested * 100).toFixed(1) 
    : "0.0";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Summary</CardTitle>
        <CardDescription>
          Current status of your investments across all impact funds
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-lightgray rounded-lg">
            <h4 className="text-sm text-muted-foreground">Total Invested</h4>
            <p className="text-2xl font-bold">R {totalInvested.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-lightgray rounded-lg">
            <h4 className="text-sm text-muted-foreground">Current Value</h4>
            <p className="text-2xl font-bold">R {totalCurrent.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-lightgray rounded-lg">
            <h4 className="text-sm text-muted-foreground">Total Return</h4>
            <p className="text-2xl font-bold text-green-600">+{overallReturn}%</p>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Investment</TableHead>
              <TableHead>Fund</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Return</TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.id}>
                <TableCell className="font-medium">{investment.name}</TableCell>
                <TableCell>{investment.fund}</TableCell>
                <TableCell>{investment.amount}</TableCell>
                <TableCell className="hidden md:table-cell">{new Date(investment.investmentDate).toLocaleDateString()}</TableCell>
                <TableCell className="text-right text-green-600">{investment.returnToDate}</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <BadgeCheck className="mr-1 h-3 w-3" />
                    {investment.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onSelectInvestment(investment)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PortfolioTab;
