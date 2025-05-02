
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const PendingDealsTable = () => {
  // This is sample data - in a real app this would come from an API
  const pendingDeals = [
    // Initially empty, this would be populated with real data in your new app
  ];

  return (
    <div>
      {pendingDeals.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Deal</TableHead>
              <TableHead>Fund</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="hidden md:table-cell">Progress</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingDeals.map((deal) => (
              <TableRow key={deal.id}>
                <TableCell className="font-medium">{deal.name}</TableCell>
                <TableCell>{deal.fund}</TableCell>
                <TableCell>R {deal.amount.toLocaleString()}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="space-y-1">
                    <Progress value={deal.progress} className="h-2" />
                    <div className="flex justify-between text-xs">
                      <span>Funding</span>
                      <span>{deal.progress}%</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Badge className="bg-amber-600">{deal.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">You don't have any pending investment deals.</p>
          <p className="text-sm text-muted-foreground mt-1">
            Selected deals will appear here until they are fully funded.
          </p>
        </div>
      )}
    </div>
  );
};

export default PendingDealsTable;
