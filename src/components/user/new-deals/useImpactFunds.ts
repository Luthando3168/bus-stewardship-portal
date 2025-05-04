
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImpactFund } from './types/fundTypes';
import { impactFunds } from './data/impactFundsData';

export type { ImpactFund } from './types/fundTypes';
export { impactFunds } from './data/impactFundsData';

export function useImpactFunds() {
  const [searchParams] = useSearchParams();
  const fundFromUrl = searchParams.get('fund');
  const [activeTab, setActiveTab] = useState(fundFromUrl || impactFunds[0].id);

  useEffect(() => {
    if (fundFromUrl) {
      const matchingFund = impactFunds.find(
        fund => fund.id === fundFromUrl || fund.name.toLowerCase().includes(fundFromUrl)
      );
      if (matchingFund) {
        setActiveTab(matchingFund.id);
      }
    }
  }, [fundFromUrl]);

  const currentFund = impactFunds.find(fund => fund.id === activeTab);

  return {
    impactFunds,
    activeTab,
    setActiveTab,
    currentFund
  };
}
