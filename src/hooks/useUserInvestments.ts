
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Investment } from '@/types/wallet';
import { useAuthState } from './useAuthState';

export const useUserInvestments = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthState();

  useEffect(() => {
    const fetchInvestments = async () => {
      if (!user) return;

      try {
        setIsLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('investments')
          .select('*')
          .eq('user_id', user.id);

        if (fetchError) throw fetchError;

        setInvestments(data || []);
      } catch (err) {
        console.error('Error fetching investments:', err);
        setError('Failed to load investments');
        setInvestments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvestments();
  }, [user]);

  return { investments, isLoading, error };
};
