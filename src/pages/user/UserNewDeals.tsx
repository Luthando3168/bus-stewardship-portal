
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
        id: "lf-poultry",
        title: "LF Poultry",
        region: "Pretoria",
        description: "LF Poultry is a poultry farm business in Pretoria that supplies local communities.",
        minInvestment: 1000,
      },
      {
        id: "home-grown-with-love",
        title: "Home Grown With Love",
        region: "Fourways",
        description: "The company specialises in mass production of fish and supplies to a network of private businesses. It operates in Fourways.",
        minInvestment: 2000,
      },
      {
        id: "mayime-winery",
        title: "Mayime Winery",
        region: "Not specified",
        description: "Mayime Winery specialises in production and supply of wines.",
        minInvestment: 2000,
      },
      {
        id: "mixed-livestock-farm",
        title: "Mixed Livestock Farm",
        region: "Not specified",
        description: "Operates various livestock supplying meat and fresh produce to a network of Lifestyle Mini Complexes, eKasi Mix Use Developments, and other clients.",
        minInvestment: 1000,
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
      },
      {
        id: "the-reid-balwin",
        title: "The Reid - Balwin",
        region: "Sandton, Johannesburg",
        description: "The Reid is a modern lifestyle estate in Sandton offering 1, 2 and 3 bedroom apartments with quality finishes, fibre connectivity and a signature Lifestyle Centre packed with leisure, wellness and social facilities.",
        minInvestment: 2000,
      },
      {
        id: "the-whisken-balwin",
        title: "The Whisken - Balwin",
        region: "Kyalami, Midrand",
        description: "The Whisken’s apartments come standard with lifestyle-enhancing features and access to a world-class Lifestyle Centre with leisure, sporting and business facilities.",
        minInvestment: 2000,
      },
      {
        id: "munyaka-balwin",
        title: "Munyaka - Balwin",
        region: "Waterfall, Midrand",
        description: "Munyaka is an iconic lifestyle estate with a crystal-clear lagoon, luxurious apartments, and exceptional water-focused leisure facilities in Waterfall City.",
        minInvestment: 2000,
      },
      {
        id: "the-polofields-balwin",
        title: "The Polofields - Balwin",
        region: "Waterfall, Midrand",
        description: "The Polofields features ultra-modern, elegant apartments, pre-paid gas, fibre connectivity, and a signature Lifestyle Centre with exclusive amenities.",
        minInvestment: 2000,
      },
      {
        id: "paulshof-balwin",
        title: "The Cambridge - Balwin",
        region: "Paulshof, Sandton",
        description: "The Cambridge showcases top-quality 1, 2 and 3 bedroom apartments in Paulshof with a lifestyle centre, swimming pool, gym, restaurant, and spa facilities.",
        minInvestment: 2000,
      },
      {
        id: "the-blyde-balwin",
        title: "The Blyde - Balwin",
        region: "Pretoria East",
        description: "Home of South Africa’s first crystal-clear lagoon, The Blyde is an innovative lifestyle estate in Pretoria East offering 1, 2 and 3 bedroom apartments with modern finishes.",
        minInvestment: 2000,
      },
      {
        id: "greenpark-balwin",
        title: "Greenpark - Balwin",
        region: "Boksburg",
        description: "Located in Boksburg, Greenpark offers secure, affordable lifestyle apartments with green play areas, swimming pools, and convenient access to amenities.",
        minInvestment: 2000,
      },
      {
        id: "greenlee-balwin",
        title: "Greenlee - Balwin",
        region: "Linbro Park, Sandton",
        description: "Greenlee is a sleek, eco-friendly lifestyle estate with fibre-ready apartments, a lifestyle centre with gym, restaurant, pool, and numerous entertainment spaces.",
        minInvestment: 2000,
      },
      {
        id: "jackal-creek-balwin",
        title: "The Jones - Balwin",
        region: "Jackal Creek, Gauteng",
        description: "The Jones at Jackal Creek offers modern executive apartments in a golf estate setting, with security and lifestyle amenities on your doorstep.",
        minInvestment: 2000,
      },
      {
        id: "ballito-hills-balwin",
        title: "Ballito Hills - Balwin",
        region: "Ballito, KwaZulu-Natal",
        description: "Ballito Hills offers contemporary, eco-conscious apartments with exquisite finishes, communal amenities, and signature lifestyle features in Ballito.",
        minInvestment: 2000,
      },
      {
        id: "de-zicht-balwin",
        title: "De Zicht - Balwin",
        region: "Cape Town",
        description: "De Zicht is a secure lifestyle estate in Cape Town featuring fibre-ready apartments, a lifestyle centre, gym, pool, volleyball court and green open spaces.",
        minInvestment: 2000,
      },
      {
        id: "fynbos-balwin",
        title: "Fynbos - Balwin",
        region: "Cape Town",
        description: "Fynbos is a modern, eco-conscious estate in Cape Town, boasting well-appointed apartments, a vibrant lifestyle centre, and green open spaces.",
        minInvestment: 2000,
      },
      {
        id: "polofields-crossways-balwin",
        title: "Polofields Crossing - Balwin",
        region: "Waterfall, Midrand",
        description: "Polofields Crossing offers elegant apartments with upmarket finishes in Waterfall, and extensive lifestyle enhancements for residents.",
        minInvestment: 2000,
      },
      {
        id: "ijozi-balwin",
        title: "iJózi Apartments - Balwin",
        region: "Randburg, Johannesburg",
        description: "iJózi features modern apartments in Randburg with high-speed internet, secure living, and a state-of-the-art lifestyle centre.",
        minInvestment: 2000,
      },
      {
        id: "thaba-eco-village-balwin",
        title: "Thaba Eco Village - Balwin",
        region: "Johannesburg South",
        description: "Thaba Eco Village offers luxury apartments in Johannesburg South with eco-friendly amenities, a lifestyle centre and green parks.",
        minInvestment: 2000,
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
        id: "steers",
        title: "Steers",
        region: "National",
        description: "Steers is one of South Africa’s leading fast food brands, famous for flame-grilled burgers and chips. Franchisees benefit from a well-established brand, award-winning meals, and national reach. (Source: steers.co.za/franchising)",
        minInvestment: 1500,
      },
      {
        id: "debonairs",
        title: "Debonairs",
        region: "National",
        description: "Debonairs Pizza is a popular South African pizza franchise known for fresh, innovative pizzas and quick delivery. Franchisees enjoy brand support and an established loyal customer base. (Source: debonairspizza.co.za/franchising)",
        minInvestment: 3000,
      },
      {
        id: "wimpy",
        title: "Wimpy",
        region: "National",
        description: "Wimpy is a well-known South African family restaurant and fast-food brand. The franchise offers a friendly dining experience with a wide menu—including breakfast—all supported by strong marketing and operational support. (Source: wimpy.co.za/franchising)",
        minInvestment: 5000,
      },
      {
        id: "burger-king",
        title: "Burger King",
        region: "National",
        description: "Burger King is a globally recognized fast-food hamburger chain, offering flame-grilled burgers and signature sides. South African franchisees gain backing from international operations and strong national recognition. (Source: burgerking.co.za/franchising)",
        minInvestment: 6000,
      },
      {
        id: "pedros",
        title: "Pedros",
        region: "National",
        description: "Pedros is a dynamic South African flame-grilled chicken franchise known for fresh and affordable flame-grilled chicken and growing national footprint. Franchisees enjoy support in site selection and operations. (Source: pedroschicken.co.za/franchises)",
        minInvestment: 2500,
      },
      {
        id: "fish-and-co",
        title: "The Fish and Co",
        region: "National",
        description: "The Fish and Co. is a South African fast-food franchise specializing in a variety of delicious fresh seafood meals in a relaxed environment. Franchisees receive extensive support in business setup and daily operations. (Source: thefishco.co.za/franchise)",
        minInvestment: 2000,
      },
      {
        id: "spur",
        title: "Spur",
        region: "National",
        description: "Spur is South Africa’s very popular family restaurant franchise, known for great steaks, platters and a unique kids-friendly atmosphere. Franchisees benefit from national recognition and extensive franchise support. (Source: spurfranchise.co.za)",
        minInvestment: 5000,
      },
      {
        id: "tigermilk",
        title: "Tiger Milk",
        region: "National",
        description: "Tiger Milk is a leading restaurant and bar franchise brand offering a unique experience combining gourmet burgers, pizza, and signature cocktails, with trendy décor and urban atmosphere. Franchisees receive site selection and operational guidance. (Source: tigermilk.co.za/franchise)",
        minInvestment: 5000,
      },
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
    name: "MyTelecoms", // Changed from "MyTech"
    return: "16% p.a.",
    minInvestment: 4000,
    businesses: []
  },
  {
    id: "myeducation",
    name: "MySchool", // Changed from "MyEducation"
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

  const currentFund = impactFunds.find(fund => fund.id === activeTab);

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
              <ShoppingCart size={20} />
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

          {currentFund && (
            <div key={currentFund.id} className="border border-navyblue/10 rounded-lg p-4 bg-white">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-navyblue">{currentFund.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Min. Investment: <span className="font-medium">R {currentFund.minInvestment.toLocaleString()}</span>
                  </p>
                </div>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium self-start">
                  {currentFund.return}
                </div>
              </div>
              {currentFund.businesses.length > 0 ? (
                <div className="grid gap-6">
                  {currentFund.businesses.map(business => (
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
              ) : (
                <div className="px-2 py-6 text-gray-400 text-center italic border border-dashed border-gray-200 bg-gray-50 rounded">
                  Currently No Opportunities
                </div>
              )}
            </div>
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
