
import React, { useState, useEffect } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, CreditCard, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuthState } from "@/hooks/useAuthState";
import { toast } from "sonner";
import { Transaction, BankStatement } from '@/types/wallet';

const UserWallet = () => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [accountNumber, setAccountNumber] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [statements, setStatements] = useState<BankStatement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthState();

  useEffect(() => {
    const fetchWalletData = async () => {
      if (!user) return;
      
      try {
        setIsLoading(true);
        
        // Fetch wallet balance and account details
        const { data: clientData, error: clientError } = await supabase
          .from('clients')
          .select('wallet_balance, bank_account_number')
          .eq('id', user.id)
          .single();
        
        if (clientError) {
          console.error("Error fetching wallet data:", clientError);
          toast.error("Could not load wallet data");
          setWalletBalance(0);
          setAccountNumber('**** **** **** ####');
        } else {
          setWalletBalance(clientData?.wallet_balance || 0);
          const accNum = clientData?.bank_account_number || '';
          setAccountNumber(accNum ? 
            '**** **** **** ' + accNum.substring(Math.max(0, accNum.length - 4)) : 
            '**** **** **** ####');
        }
        
        // Fetch transaction history
        const { data: txData, error: txError } = await supabase
          .from('transactions')
          .select('*')
          .eq('user_id', user.id)
          .order('date', { ascending: false })
          .limit(10);
        
        if (txError) {
          console.error("Error fetching transactions:", txError);
          setTransactions([]);
        } else if (txData) {
          // Convert the DB data to match our Transaction type
          const typedTransactions: Transaction[] = txData.map(tx => ({
            id: tx.id,
            date: tx.date || new Date().toISOString(),
            description: tx.description,
            amount: Number(tx.amount),
            type: (tx.type === 'deposit' || tx.type === 'withdrawal') 
              ? tx.type as 'deposit' | 'withdrawal' 
              : 'deposit' // Default value to satisfy TypeScript
          }));
          setTransactions(typedTransactions);
        }
        
        // Fetch statements
        const { data: statementsData, error: statementsError } = await supabase
          .from('statements')
          .select('*')
          .eq('user_id', user.id)
          .order('issue_date', { ascending: false })
          .limit(5);
          
        if (statementsError) {
          console.error("Error fetching statements:", statementsError);
          setStatements([]);
        } else if (statementsData) {
          // Convert the DB data to match our BankStatement type
          const typedStatements: BankStatement[] = statementsData.map(stmt => ({
            id: stmt.id,
            period: stmt.period,
            issue_date: stmt.issue_date || new Date().toISOString()
          }));
          setStatements(typedStatements);
        }
      } catch (error) {
        console.error("Error in wallet data fetch:", error);
        toast.error("Could not load wallet data");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchWalletData();
  }, [user]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-ZA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    } catch (e) {
      return dateString;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">My Wallet</h2>
        
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

        <Card>
          <CardHeader>
            <CardTitle>Manage Your Beneficiaries</CardTitle>
            <CardDescription>
              Review and update your beneficiary information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Your beneficiary details are important for your investment accounts. Please keep them updated.</p>
            <Link to="/user/beneficiaries">
              <Button className="bg-navyblue hover:bg-blue-800 text-white">
                View & Manage Beneficiaries
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Tabs defaultValue="transactions">
          <TabsList>
            <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            <TabsTrigger value="statements">Bank Statements</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions">
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
          </TabsContent>
          <TabsContent value="statements">
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
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default UserWallet;
