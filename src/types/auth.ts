
// Basic auth types for your new project

export interface AuthUser {
  id: string;
  email: string;
  role?: string;
  metadata?: Record<string, any>;
}

export interface Session {
  access_token: string;
  user: AuthUser;
}

// This function can be used to map the user from your auth provider to your app's user type
export function mapSupabaseUser(user: any): AuthUser {
  if (!user) return null;
  
  return {
    id: user.id,
    email: user.email,
    role: user?.user_metadata?.role || 'user',
    metadata: user.user_metadata || {}
  };
}
