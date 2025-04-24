
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { BankStatement } from '@/types/wallet';

interface StatementsHistoryProps {
  statements: BankStatement[];
  isLoading: boolean;
  formatDate: (date: string) => string;
}

const StatementsHistory = ({ statements, isLoading, formatDate }: StatementsHistoryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Statements</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-center py-4">Loading statements...</p>
        ) : statements.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {statements.map((statement) => (
                <TableRow key={statement.id}>
                  <TableCell>{statement.period}</TableCell>
                  <TableCell>{formatDate(statement.issue_date)}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Download</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-md border">
            <AlertCircle className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-muted-foreground">No statements available yet</p>
            <p className="text-sm text-muted-foreground mt-1">
              Statements will be available here after your first complete month
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatementsHistory;
