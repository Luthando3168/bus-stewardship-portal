
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const InvestmentsTable = () => {
  // This is sample data - in a real app this would come from an API
  const investments = [
    // Initially empty, this would be populated with real data in your new app
  ];

  return (
    <div>
      {investments.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Investment</TableHead>
              <TableHead>Fund</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.id}>
                <TableCell className="font-medium">{investment.name}</TableCell>
                <TableCell>{investment.fund}</TableCell>
                <TableCell>R {investment.amount.toLocaleString()}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(investment.date).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <Badge className="bg-green-600">Active</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">You don't have any active investments yet.</p>
          <p className="text-sm text-muted-foreground mt-1">
            Browse our impact funds to start your investment journey.
          </p>
        </div>
      )}
    </div>
  );
};

export default InvestmentsTable;
