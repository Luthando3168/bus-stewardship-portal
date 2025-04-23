
import { Session as SupabaseSession, User as SupabaseUser } from '@supabase/supabase-js';

export type AuthUser = {
  id: string;
  email: string;
  role: string;
};

// Update our Session type to extend the Supabase Session type
export type Session = SupabaseSession;

// Create a utility function to convert Supabase User to AuthUser
export const mapSupabaseUser = (user: SupabaseUser | null): AuthUser | null => {
  if (!user || !user.email) return null;
  
  return {
    id: user.id,
    email: user.email,
    role: (user.user_metadata?.role || user.app_metadata?.role || 'user') as string
  };
};

export interface ClientData {
  id: string;
  status: string;
  id_number: string | null;
  address: string | null;
  postal_code: string | null;
  city: string | null;
  province: string | null;
  nationality: string | null;
  tax_number: string | null;
  tax_country: string | null;
  source_of_funds: string | null;
  employment_status: string | null;
  occupation: string | null;
  employer: string | null;
  risk_profile: string | null;
  income_bracket: string | null;
  pep: boolean | null;
  documents_submitted: boolean | null;
  kyc_complete: boolean | null;
  dob: string | null;
}
