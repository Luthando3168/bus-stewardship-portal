
export interface Certificate {
  id: string;
  userId: number;
  userName: string;
  clientNumber: string;
  investmentId: number;
  investmentName: string;
  companyName: string;
  registrationNumber: string;
  shares: number;
  sharePrice: number;
  issueDate: string;
  status: string;
  sequentialNumber?: string;
}
