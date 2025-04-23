
export interface AdminUser {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  dob: string | null;
  id_number: string | null;
  nationality: string | null;
  tax_number: string | null;
  tax_country: string | null;
  address: string | null;
  postal_code: string | null;
  city: string | null;
  province: string | null;
  source_of_funds: string | null;
  employment_status: string | null;
  employer: string | null;
  occupation: string | null;
  risk_profile: string | null;
  income_bracket: string | null;
  pep: boolean;
  investment_count: number;
  last_login: string | null;
  created_at: string;
}

export interface Beneficiary {
  id: string;
  user_id: string;
  beneficiary_name: string;
  relationship: string | null;
  phone: string | null;
  email: string | null;
  type: string | null;
  percentage: number | null;
  created_at: string;
}
