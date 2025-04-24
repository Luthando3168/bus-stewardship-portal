
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle } from "lucide-react";
import { Transaction } from '@/types/wallet';

interface TransactionHistoryProps {
  transactions: Transaction[];
  isLoading: boolean;
  formatDate: (date: string) => string;
  formatCurrency: (amount: number) => string;
}

const TransactionHistory = ({ transactions, isLoading, formatDate, formatCurrency }: TransactionHistoryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-center py-4">Loading transactions...</p>
        ) : transactions.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{formatDate(transaction.date)}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className={
                    transaction.type === 'deposit' 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }>
                    {transaction.type === 'deposit' ? '+ ' : '- '}
                    {formatCurrency(Math.abs(transaction.amount))}
                  </TableCell>
                  <TableCell>
                    {transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-8 bg-gray-50 rounded-md border">
            <AlertCircle className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-muted-foreground">No transactions found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Transactions will appear here when you make deposits or investments
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
