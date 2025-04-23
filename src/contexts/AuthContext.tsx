
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { AuthUser, Session } from '@/types/auth';
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
      (event, session) => {
        if (session) {
          setSession(session);
          setUser({
            id: session.user.id,
            email: session.user.email!,
            role: session.user.role ?? 'user'
          });
        } else {
          setSession(null);
          setUser(null);
        }
        
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session);
        setUser({
          id: session.user.id,
          email: session.user.email!,
          role: session.user.role ?? 'user'
        });
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Add session refresh logic
  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      if (session) {
        supabase.auth.refreshSession().then(({ data }) => {
          if (data.session) {
            setSession(data.session);
          }
        });
      }
    }, 3600000); // Refresh token every hour
    
    return () => clearTimeout(refreshTimeout);
  }, [session]);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      
      if (data?.session) {
        setSession(data.session);
        setUser({
          id: data.user.id,
          email: data.user.email!,
          role: data.user.role ?? 'user'
        });
        navigate('/admin/dashboard');
        toast.success('Successfully signed in');
      }
    } catch (error: any) {
      console.error("Sign in error:", error);
      toast.error("Invalid email or password");
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      setUser(null);
      navigate('/login');
      toast.success('Successfully signed out');
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
