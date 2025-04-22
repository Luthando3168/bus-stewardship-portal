import React, { useState, useEffect } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import ImpactFundTabs from "@/components/user/new-deals/ImpactFundTabs";
import BusinessCard from "@/components/user/new-deals/BusinessCard";
import InvestmentCart from "@/components/user/new-deals/InvestmentCart";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";

// Updated impact funds array to match ImpactFundsSection
const impactFunds = [
  {
    id: "myfarm",
    name: "MyFarm Impact Fund",
    businesses: [
      {
        id: "urban-farming-ct",
        title: "Urban Farming - AgroUrban Oasis (Cape Town)",
        region: "Cape Town",
        description: "Invest in a sustainable hydroponic farm producing fresh produce for local supermarkets, restaurants, and communities. Focus on water-efficient and high-yield methods.",
        minInvestment: 5000,
      },
      {
        id: "organic-farm-kzn",
        title: "Organic Expansion (KwaZulu-Natal)",
        region: "KwaZulu-Natal",
        description: "Expansion of existing organic farm focusing on vegetables and herbs for major grocery chains. Certified organic and regenerative methods.",
        minInvestment: 5000,
      },
      {
        id: "mixed-crops-limpopo",
        title: "Mixed Crops Cultivation (Limpopo)",
        region: "Limpopo",
        description: "A project to cultivate and process diverse crops, supporting food security and market supply across the Limpopo region.",
        minInvestment: 5000,
      }
    ],
  },
  {
    id: "myproperty",
    name: "MyProperty Impact Fund",
    businesses: [
      {
        id: "affordable-housing-jhb",
        title: "Affordable Housing - eKasi Mixed Use (Johannesburg)",
        region: "Johannesburg",
        description: "Modern residential and commercial development in township areas providing affordable apartments and retail opportunities.",
        minInvestment: 10000,
      },
      {
        id: "student-accommodation-pta",
        title: "Student Accommodation (Pretoria)",
        region: "Pretoria",
        description: "Purpose-built student accommodation near key tertiary institutions, with secure and modern facilities for young professionals.",
        minInvestment: 10000,
      },
      {
        id: "traditional-housing-ec",
        title: "Traditional Housing (Eastern Cape)",
        region: "Eastern Cape",
        description: "Development of culturally appropriate housing solutions that blend traditional designs with modern amenities and efficiency.",
        minInvestment: 10000,
      }
    ],
  },
  {
    id: "myfranchise",
    name: "MyFranchise Impact Fund",
    businesses: [
      {
        id: "food-franchises-national",
        title: "Food Franchises (National)",
        region: "National",
        description: "Investment opportunities in established food franchise brands across South Africa.",
        minInvestment: 5000,
      },
      {
        id: "retail-franchises-urban",
        title: "Retail Franchises (Urban Centers)",
        region: "Urban Centers",
        description: "Opportunities to invest in retail franchise operations in key urban locations.",
        minInvestment: 5000,
      },
      {
        id: "service-franchises-national",
        title: "Service Franchises (National)",
        region: "National",
        description: "Investment in service-based franchise businesses with proven operational models.",
        minInvestment: 5000,
      }
    ],
  }
];

const UserNewDeals = () => {
  const [searchParams] = useSearchParams();
  const fundFromUrl = searchParams.get('fund');
  
  const [selectedBusiness, setSelectedBusiness] = useState<any | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number | ''>('');
  const [walletBalance, setWalletBalance] = useState(245000); // Mock wallet balance
  const [activeTab, setActiveTab] = useState(fundFromUrl || impactFunds[0].id);
  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    title: string;
    fund: string;
    amount: number;
    minInvestment: number;
  }>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [expandedBusinessId, setExpandedBusinessId] = useState<string | null>(null);
  
  const totalInvestmentAmount = cartItems.reduce((total, item) => total + item.amount, 0);

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

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const toggleBusinessExpansion = (businessId: string) => {
    if (expandedBusinessId === businessId) {
      setExpandedBusinessId(null);
    } else {
      setExpandedBusinessId(businessId);
    }
  };

  const handleAddToCart = (business: any, fundName: string, amount = business.minInvestment) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === business.id);
    
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].amount = amount;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, {
        id: business.id,
        title: business.title,
        fund: fundName,
        amount: amount,
        minInvestment: business.minInvestment
      }]);
    }
    
    toast.success(`${business.title} added to your investment cart`);
    setSelectedBusiness(null);
  };

  const handleRemoveFromCart = (businessId: string) => {
    setCartItems(cartItems.filter(item => item.id !== businessId));
    toast.success("Item removed from cart");
  };

  const handleUpdateCartItemAmount = (businessId: string, amount: number) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === businessId) {
        return {...item, amount};
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    if (totalInvestmentAmount > walletBalance) {
      toast.error("Insufficient funds in your wallet. Please add funds before investing.");
      return;
    }

    toast.success("Your investments have been processed successfully!");
    
    setWalletBalance(walletBalance - totalInvestmentAmount);
    
    setCartItems([]);
    setIsCartOpen(false);
    
    toast.success("Your investments have been moved to Pending Deals");
  };

  const currentFund = impactFunds.find(fund => fund.id === activeTab);

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-navyblue">Investment Opportunities</h2>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setIsCartOpen(true)}
            className="relative"
          >
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </Button>
        </div>

        <p className="text-muted-foreground">
          Explore our diverse range of investment opportunities across various Impact Funds. 
          Select the fund category below to view available businesses for investment.
        </p>
        
        <ImpactFundTabs
          impactFunds={impactFunds}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <div className="space-y-4">
          {currentFund?.businesses.map(business => (
            <BusinessCard
              key={business.id}
              business={business}
              expanded={expandedBusinessId === business.id}
              fundName={currentFund.name}
              onToggle={toggleBusinessExpansion}
              onAddToCart={(biz, fname) => handleAddToCart(biz, fname)}
            />
          ))}
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
        />
      </div>
    </UserLayout>
  );
};

export default UserNewDeals;
