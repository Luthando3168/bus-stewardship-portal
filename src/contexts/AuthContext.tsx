
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { AuthUser, Session, mapSupabaseUser } from '@/types/auth';
import { toast } from "sonner";

interface AuthContextType {
  user: AuthUser | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async () => {},
  signOut: async () => {},
  loading: true
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log(`Auth event: ${event}`, currentSession?.user?.id || 'No user');
        
        if (currentSession) {
          setSession(currentSession);
          const authUser = mapSupabaseUser(currentSession.user);
          setUser(authUser);
          
          // Only show toast and redirect on specific auth events
          if (event === 'SIGNED_IN') {
            const isAdmin = authUser?.role === 'admin';
            
            // Only redirect if they're on auth pages
            const currentPath = window.location.pathname;
            if (currentPath === '/login' || currentPath === '/register' || currentPath === '/') {
              const redirectPath = isAdmin ? '/admin/dashboard' : '/user/dashboard';
              console.log(`Redirecting to ${redirectPath}`);
              setTimeout(() => {
                navigate(redirectPath);
                toast.success('Successfully signed in');
              }, 300);
            }
          } else if (event === 'TOKEN_REFRESHED') {
            console.log('Auth token refreshed successfully');
          }
        } else {
          setSession(null);
          setUser(null);
          
          if (event === 'SIGNED_OUT') {
            toast.success('Successfully signed out');
            navigate('/login');
          } else if (event === 'USER_DELETED') {
            toast.info('Your account has been deleted');
            navigate('/register');
          }
        }
        
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      console.log("Existing session check:", currentSession?.user?.id || 'No session');
      if (currentSession) {
        setSession(currentSession);
        const authUser = mapSupabaseUser(currentSession.user);
        setUser(authUser);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Add session refresh logic
  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      if (session) {
        console.log("Refreshing session token");
        supabase.auth.refreshSession().then(({ data }) => {
          if (data.session) {
            setSession(data.session);
            const authUser = mapSupabaseUser(data.session.user);
            setUser(authUser);
          }
        });
      }
    }, 3600000); // Refresh token every hour
    
    return () => clearTimeout(refreshTimeout);
  }, [session]);

  const signIn = async (email: string, password: string) => {
    try {
      console.log(`Attempting to sign in with email: ${email}`);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      
      // Don't need to navigate here - the onAuthStateChange will handle that
      console.log("Sign in successful", data.user?.id);
    } catch (error: any) {
      console.error("Sign in error:", error);
      toast.error("Invalid email or password");
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      // Don't need to navigate here - the onAuthStateChange will handle that
    } catch (error: any) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out");
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
