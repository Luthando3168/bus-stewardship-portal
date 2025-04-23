import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export const useRoleCheck = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const checkRole = async () => {
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }
      
      try {
        // First try to get role from localStorage as fallback
        const cachedRole = localStorage.getItem("userRole");
        if (cachedRole === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }

        // Try to verify with database
        const { data, error } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .single();
        
        if (error) {
          console.error("Error checking role:", error);
          setError(error);
          // Keep using the cached role value
        } else if (data) {
          const isAdminRole = data.role === "admin";
          setIsAdmin(isAdminRole);
          localStorage.setItem("userRole", isAdminRole ? "admin" : "user");
        }
      } catch (err) {
        console.error("Error checking role:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

    checkRole();
  }, [user]);

  return { isAdmin, loading, error };
};
