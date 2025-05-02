
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

// Adding the missing Investment interface
export interface Investment {
  id: string;
  name: string;
  fund: string;
  amount: number;
  date: string;
  status: 'active' | 'pending' | 'completed' | 'cancelled';
}
