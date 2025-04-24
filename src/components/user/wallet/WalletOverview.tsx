
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

interface WalletOverviewProps {
  walletBalance: number;
  accountNumber: string;
  isLoading: boolean;
  formatCurrency: (amount: number) => string;
}

const WalletOverview = ({ walletBalance, accountNumber, isLoading, formatCurrency }: WalletOverviewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Standard Bank Account</CardTitle>
            <CardDescription>Investment Account</CardDescription>
          </div>
          <DollarSign className="h-6 w-6 text-gold" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              {isLoading ? 'Loading...' : formatCurrency(walletBalance)}
            </div>
            <div className="text-sm text-muted-foreground">
              Account Number: {isLoading ? 'Loading...' : accountNumber}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Available to Invest</CardTitle>
            <CardDescription>From Wallet Balance</CardDescription>
          </div>
          <CreditCard className="h-6 w-6 text-gold" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              {isLoading ? 'Loading...' : formatCurrency(walletBalance)}
            </div>
            <Button className="bg-gold hover:bg-lightgold text-white mt-2">
              <Link to="/user/new-deals">Invest Now</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletOverview;
