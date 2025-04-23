
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
