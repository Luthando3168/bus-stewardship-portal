
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

        // Using mock data for now as investments table doesn't exist yet
        // We'll return a structured empty array that matches the Investment type
        const mockInvestments: Investment[] = [];

        setInvestments(mockInvestments);
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
