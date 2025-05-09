
// Basic auth types for your new project
import { User as SupabaseUser } from '@supabase/supabase-js';

export interface AuthUser {
  id: string;
  email: string; // This is required in our type
  role?: string;
  metadata?: Record<string, any>;
}

export interface Session {
  access_token: string;
  user: AuthUser;
}

// This function can be used to map the user from your auth provider to your app's user type
export function mapSupabaseUser(user: SupabaseUser | null): AuthUser | null {
  if (!user) return null;
  
  return {
    id: user.id,
    email: user.email || '', // Ensure email is always a string, even if it's empty
    role: user?.user_metadata?.role || 'user',
    metadata: user.user_metadata || {}
  };
}
