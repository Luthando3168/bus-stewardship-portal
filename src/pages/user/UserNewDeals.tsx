import React, { useState, useEffect } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import ImpactFundTabs from "@/components/user/new-deals/ImpactFundTabs";
import BusinessCard from "@/components/user/new-deals/BusinessCard";
import InvestmentCart from "@/components/user/new-deals/InvestmentCart";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";
import FundSelector from "@/components/user/new-deals/FundSelector";
import { useIsMobile } from "@/hooks/use-mobile";

const impactFunds = [
  {
    id: "myfarm",
    name: "MyFarm Impact Fund",
    return: "15% p.a.",
    minInvestment: 1000,
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
    return: "14% p.a.",
    minInvestment: 2000,
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
    return: "13% p.a.",
    minInvestment: 1500,
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
  },
  {
    id: "myenergy",
    name: "MyEnergy Impact Fund",
    return: "13% p.a.",
    minInvestment: 3000,
    businesses: []
  },
  {
    id: "myhealth",
    name: "MyHealth Impact Fund",
    return: "11% p.a.",
    minInvestment: 2500,
    businesses: []
  },
  {
    id: "mytech",
    name: "MyTech Impact Fund",
    return: "16% p.a.",
    minInvestment: 4000,
    businesses: []
  },
  {
    id: "myeducation",
    name: "MyEducation Impact Fund",
    return: "10% p.a.",
    minInvestment: 1500,
    businesses: []
  }
];

const generateOrderNumber = () => {
  const prefix = "MCA";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}-${timestamp}-${random}`;
};

const UserNewDeals = () => {
  const [searchParams] = useSearchParams();
  const fundFromUrl = searchParams.get('fund');
  
  const [selectedBusiness, setSelectedBusiness] = useState<any | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number | ''>('');
  const [walletBalance, setWalletBalance] = useState(245000);
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
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  
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
    setExpandedBusinessId(expandedBusinessId === businessId ? null : businessId);
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

    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    
    toast.success(`Order #${newOrderNumber} has been processed successfully!`);
    setWalletBalance(walletBalance - totalInvestmentAmount);
    
    const fundGroups = cartItems.reduce((acc: Record<string, number>, item) => {
      acc[item.fund] = (acc[item.fund] || 0) + 1;
      return acc;
    }, {});
    
    const fundSummary = Object.entries(fundGroups)
      .map(([fund, count]) => `${count} deal${count > 1 ? 's' : ''} from ${fund}`)
      .join(', ');
    
    toast.success(`Your investments (${fundSummary}) have been moved to Pending Deals`);
    
    setCartItems([]);
    setIsCartOpen(false);
  };

  const isMobile = useIsMobile();

  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-navyblue">Business Opportunities</h2>
            <p className="text-muted-foreground">Browse and select business deals from our impact funds</p>
          </div>
          
          <div className="flex items-center gap-4 self-end sm:self-auto">
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1">
              <span className="text-sm text-muted-foreground">Wallet Balance:</span>
              <span className="font-bold text-navyblue">R {walletBalance.toLocaleString()}</span>
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingCart size={20}/>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}  
            </Button>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-5 max-w-2xl mx-auto">
          <p className="font-medium text-navyblue mb-1">How it works:</p>
          <p className="text-muted-foreground">
            Select business deals that interest you from any impact fund. Your selections are linked to 
            their respective funds and consolidated at checkout. Payment is made through your Standard Bank 
            wallet after you receive a unique order number.
          </p>
        </div>

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
          
          <div className="space-y-10 max-w-3xl mx-auto">
            {impactFunds.map((fund) => (
              <div key={fund.id} className="border border-navyblue/10 rounded-lg p-4 bg-white">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-navyblue">{fund.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Min. Investment: <span className="font-medium">R {fund.minInvestment.toLocaleString()}</span>
                    </p>
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium self-start">
                    {fund.return}
                  </div>
                </div>
                {fund.businesses.length > 0 ? (
                  <div className="grid gap-6">
                    {fund.businesses.map(business => (
                      <BusinessCard
                        key={business.id}
                        business={business}
                        expanded={expandedBusinessId === business.id}
                        fundName={fund.name}
                        onToggle={toggleBusinessExpansion}
                        onAddToCart={(biz, fname) => handleAddToCart(biz, fname)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="px-2 py-6 text-gray-400 text-center italic border border-dashed border-gray-200 bg-gray-50 rounded">
                    Currently No Opportunities
                  </div>
                )}
              </div>
            ))}
          </div>
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
