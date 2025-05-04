
export interface Business {
  id: string;
  title: string;
  region: string;
  description: string;
  minInvestment: number;
}

export interface ImpactFund {
  id: string;
  name: string;
  return: string;
  minInvestment: number;
  description?: string;
  businesses: Business[];
}
