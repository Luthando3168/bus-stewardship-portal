
export type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'deposit' | 'withdrawal';
};

export type BankStatement = {
  id: string;
  period: string;
  issue_date: string;
};

export type Investment = {
  id: string;
  fund_id: string;
  title: string;
  summary: string;
  min_investment: string;
  projected_return: string;
  status: 'Open' | 'Closed';
};
