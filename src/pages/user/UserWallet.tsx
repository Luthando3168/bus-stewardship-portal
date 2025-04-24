import React, { useState, useEffect } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAuthState } from "@/hooks/useAuthState";
import { toast } from "sonner";
import { Transaction, BankStatement } from '@/types/wallet';
import WalletOverview from '@/components/user/wallet/WalletOverview';
import BeneficiariesCard from '@/components/user/wallet/BeneficiariesCard';
import TransactionHistory from '@/components/user/wallet/TransactionHistory';
import StatementsHistory from '@/components/user/wallet/StatementsHistory';

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
        
        <WalletOverview 
          walletBalance={walletBalance}
          accountNumber={accountNumber}
          isLoading={isLoading}
          formatCurrency={formatCurrency}
        />

        <BeneficiariesCard />

        <Tabs defaultValue="transactions">
          <TabsList>
            <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            <TabsTrigger value="statements">Bank Statements</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions">
            <TransactionHistory 
              transactions={transactions}
              isLoading={isLoading}
              formatDate={formatDate}
              formatCurrency={formatCurrency}
            />
          </TabsContent>
          <TabsContent value="statements">
            <StatementsHistory 
              statements={statements}
              isLoading={isLoading}
              formatDate={formatDate}
            />
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default UserWallet;
