
// Wallet related types for your new project

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'deposit' | 'withdrawal';
}

export interface BankStatement {
  id: string;
  period: string;
  issue_date: string;
}
