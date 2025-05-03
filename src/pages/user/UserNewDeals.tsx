
import React, { useState } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import InvestmentCart from "@/components/user/new-deals/InvestmentCart";
import ImpactFundTabs from "@/components/user/new-deals/ImpactFundTabs";
import FundSelector from "@/components/user/new-deals/FundSelector";
import { useIsMobile } from "@/hooks/use-mobile";
import { useImpactFunds } from '@/components/user/new-deals/useImpactFunds';
import { useCart } from '@/components/user/new-deals/useCart';
import PageHeader from '@/components/user/new-deals/PageHeader';
import HowItWorks from '@/components/user/new-deals/HowItWorks';
import FundView from '@/components/user/new-deals/FundView';

const UserNewDeals = () => {
  const { impactFunds, activeTab, setActiveTab, currentFund } = useImpactFunds();
  const { 
    walletBalance, 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    orderNumber,
    totalInvestmentAmount,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateCartItemAmount,
    handleCheckout
  } = useCart();
  
  const [expandedBusinessId, setExpandedBusinessId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleBusinessExpansion = (businessId: string) => {
    setExpandedBusinessId(expandedBusinessId === businessId ? null : businessId);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        <PageHeader 
          walletBalance={walletBalance} 
          cartItemsCount={cartItems.length}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <HowItWorks />

        <div className="max-w-2xl mx-auto">
          {isMobile ? (
            <div className="mb-6">
              <FundSelector
                funds={impactFunds}
                value={activeTab}
                onChange={handleTabChange}
              />
            </div>
          ) : (
            <ImpactFundTabs
              impactFunds={impactFunds}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              className="mb-6"
            />
          )}

          {currentFund && (
            <FundView
              fund={currentFund}
              expandedBusinessId={expandedBusinessId}
              onToggleBusinessExpansion={toggleBusinessExpansion}
              onAddToCart={handleAddToCart}
            />
          )}
        </div>

        <InvestmentCart
          open={isCartOpen}
          onOpenChange={setIsCartOpen}
          cartItems={cartItems}
          walletBalance={walletBalance}
          totalInvestmentAmount={totalInvestmentAmount}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateCartItemAmount={handleUpdateCartItemAmount}
          onCheckout={handleCheckout}
          orderNumber={orderNumber}
        />
      </div>
    </UserLayout>
  );
};

export default UserNewDeals;
