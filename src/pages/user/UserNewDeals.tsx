import React, { useState, useEffect } from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, ChevronUp, ShoppingCart, Plus, Minus, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

// Investment opportunities data organized by impact funds as per the form
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
      },
      {
        id: "urban-poultry-gauteng",
        title: "Urban Poultry Expansion (Gauteng)",
        region: "Gauteng",
        description: "A commercial poultry operation in urban areas, specializing in ethical practices and supplying to shops and restaurants.",
        minInvestment: 5000,
      },
      {
        id: "agri-processing-fs",
        title: "Agri Processing Plant (Free State)",
        region: "Free State",
        description: "A food processing facility focused on value-adding to raw agricultural products, creating shelf-stable food items.",
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
      },
      {
        id: "backup-power-wc",
        title: "Back-up Power Solutions (Western Cape)",
        region: "Western Cape",
        description: "Installation of backup power systems for residential and commercial properties, focusing on reliable power during outages.",
        minInvestment: 10000,
      },
      {
        id: "security-systems-national",
        title: "Security Systems (National)",
        region: "National",
        description: "Implementation of comprehensive security solutions for properties nationwide, including monitoring and response services.",
        minInvestment: 10000,
      }
    ],
  },
  {
    id: "myfoodretail",
    name: "MyFoodRetail Impact Fund",
    businesses: [
      {
        id: "lifestyle-mini-complex",
        title: "Lifestyle Mini Complex (Western Cape)",
        region: "Western Cape",
        description: "A hub offering groceries (Food Corner), meat products (Meat Co), and fresh produce (Fruits & Veg) sourced from MyFarm, targeting diverse communities.",
        minInvestment: 5000,
      },
      {
        id: "myfranchise",
        title: "MyFranchise (National)",
        region: "National",
        description: "Invest in selected franchises, add to your portfolio, and benefit from operational support and steady returns.",
        minInvestment: 5000,
      },
      {
        id: "community-markets-gauteng",
        title: "Community Markets (Gauteng)",
        region: "Gauteng",
        description: "Pop-up and permanent market spaces offering local produce and goods directly to consumers in community settings.",
        minInvestment: 5000,
      },
      {
        id: "healthy-fast-food-kzn",
        title: "Healthy Fast Food Outlet (KZN)",
        region: "KwaZulu-Natal",
        description: "Quick-service restaurant focusing on nutritious, locally-sourced food options with affordable pricing for health-conscious consumers.",
        minInvestment: 5000,
      },
      {
        id: "food-delivery-urban",
        title: "Food Delivery Services (Urban Hubs)",
        region: "Urban Centers",
        description: "Specialized food delivery network focusing on fresh, local foods delivered quickly within urban areas.",
        minInvestment: 5000,
      }
    ]
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
  },
  {
    id: "myfuel",
    name: "MyFuel Impact Fund",
    businesses: [
      {
        id: "fuel-station-network",
        title: "Fuel Station Network (National)",
        region: "National",
        description: "Investment in strategically located fuel stations across South Africa.",
        minInvestment: 10000,
      },
      {
        id: "alternative-fuel-distribution",
        title: "Alternative Fuel Distribution (Urban Centers)",
        region: "Urban Centers",
        description: "Distribution networks for alternative and environmentally friendly fuel options.",
        minInvestment: 10000,
      },
      {
        id: "convenience-store-integration",
        title: "Convenience Store Integration (National)",
        region: "National",
        description: "Development of modern convenience stores integrated with fuel stations.",
        minInvestment: 10000,
      }
    ],
  },
  {
    id: "myschool",
    name: "MySchool Impact Fund",
    businesses: [
      {
        id: "pre-primary-schools",
        title: "Pre-primary Schools (Urban Areas)",
        region: "Urban Areas",
        description: "Development of quality pre-primary educational facilities in urban communities.",
        minInvestment: 5000,
      },
      {
        id: "primary-school-facilities",
        title: "Primary School Facilities (National)",
        region: "National",
        description: "Investment in primary school infrastructure and educational resources.",
        minInvestment: 5000,
      },
      {
        id: "educational-technology",
        title: "Educational Technology (National)",
        region: "National",
        description: "Implementation of educational technology solutions in schools across South Africa.",
        minInvestment: 5000,
      }
    ],
  },
  {
    id: "myhealth",
    name: "MyHealth Impact Fund",
    businesses: [
      {
        id: "community-clinics",
        title: "Community Clinics (Underserved Areas)",
        region: "Underserved Areas",
        description: "Establishment of accessible healthcare facilities in underserved communities.",
        minInvestment: 5000,
      },
      {
        id: "specialized-medical-services",
        title: "Specialized Medical Services (Urban Centers)",
        region: "Urban Centers",
        description: "Investment in specialized medical service providers in urban locations.",
        minInvestment: 5000,
      },
      {
        id: "mobile-health-solutions",
        title: "Mobile Health Solutions (National)",
        region: "National",
        description: "Development of mobile healthcare services reaching remote areas.",
        minInvestment: 5000,
      }
    ],
  },
  {
    id: "myeducation",
    name: "MyEducation Impact Fund",
    businesses: [
      {
        id: "skills-development-centers",
        title: "Skills Development Centers (National)",
        region: "National",
        description: "Establishment of centers focusing on practical skills training and development.",
        minInvestment: 5000,
      },
      {
        id: "educational-publishing",
        title: "Educational Publishing (National)",
        region: "National",
        description: "Production and distribution of educational materials across South Africa.",
        minInvestment: 5000,
      },
      {
        id: "online-learning-platforms",
        title: "Online Learning Platforms (National)",
        region: "National",
        description: "Development of accessible online learning resources and platforms.",
        minInvestment: 5000,
      }
    ],
  },
  {
    id: "mytelco",
    name: "MyTelco Impact Fund",
    businesses: [
      {
        id: "rural-connectivity",
        title: "Rural Connectivity Project (National)",
        region: "National",
        description: "Expanding internet and telecommunications access to underserved rural areas through innovative and cost-effective technologies.",
        minInvestment: 5000,
      },
      {
        id: "5g-urban-gauteng",
        title: "5G Urban Networks (Gauteng)",
        region: "Gauteng",
        description: "Development of high-speed 5G network infrastructure in urban centers, enabling advanced digital services and applications.",
        minInvestment: 5000,
      },
      {
        id: "telco-equipment-wc",
        title: "Telecom Equipment Production (Western Cape)",
        region: "Western Cape",
        description: "Manufacturing and assembly of telecommunications equipment and components for domestic and export markets.",
        minInvestment: 5000,
      },
      {
        id: "digital-inclusion-ec",
        title: "Digital Inclusion Initiative (Eastern Cape)",
        region: "Eastern Cape",
        description: "Comprehensive program combining hardware, connectivity, and digital skills training for underserved communities.",
        minInvestment: 5000,
      },
      {
        id: "satellite-broadband-national",
        title: "Satellite Broadband Services (National)",
        region: "National",
        description: "Deployment of satellite-based internet services to reach remote locations where traditional infrastructure is impractical.",
        minInvestment: 5000,
      }
    ]
  }
];

const UserNewDeals = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
        
        <div className="w-full overflow-x-auto py-2">
          <div className="flex space-x-2 min-w-max">
            {impactFunds.map((fund) => (
              <button
                key={fund.id}
                onClick={() => handleTabChange(fund.id)}
                className={`whitespace-nowrap px-3 py-2 rounded-full transition 
                  text-sm font-medium shadow-none 
                  ${activeTab === fund.id 
                    ? "bg-white border border-navyblue text-navyblue" 
                    : "bg-muted text-gray-700 hover:bg-gray-200 border border-transparent"}`}
                style={{ minWidth: 120 }}
              >
                {fund.name.replace(" Impact Fund", "")}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {impactFunds
            .find(fund => fund.id === activeTab)
            ?.businesses.map(business => (
              <Card key={business.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{business.title}</CardTitle>
                      <CardDescription className="text-sm">{business.region}</CardDescription>
                    </div>
                    <Badge className="bg-blue-600">
                      {impactFunds.find(fund => fund.id === activeTab)?.name.replace(" Impact Fund", "")}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleBusinessExpansion(business.id)}
                    className="p-0 h-8 hover:bg-transparent"
                  >
                    {expandedBusinessId === business.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </Button>
                </CardHeader>

                {expandedBusinessId === business.id && (
                  <>
                    <CardContent className="pt-2">
                      <p className="text-sm">{business.description}</p>
                      
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground">Minimum Investment</p>
                        <p className="font-medium text-lg">R {business.minInvestment.toLocaleString()}</p>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex justify-end pt-2">
                      <Button 
                        className="w-full sm:w-auto bg-gold hover:bg-lightgold"
                        onClick={() => handleAddToCart(
                          business, 
                          impactFunds.find(fund => fund.id === activeTab)?.name || "Impact Fund"
                        )}
                      >
                        <Plus size={16} className="mr-1" />
                        Add to Investment Cart
                      </Button>
                    </CardFooter>
                  </>
                )}
              </Card>
            ))}
        </div>
        
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetContent className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="flex items-center">
                <ShoppingCart className="mr-2" size={18} /> 
                Your Investment Cart
              </SheetTitle>
            </SheetHeader>
            
            <div className="mt-6 space-y-5">
              {cartItems.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Your investment cart is empty.
                </p>
              ) : (
                <>
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex flex-col border rounded-md p-3">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.fund}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                        
                        <div className="mt-2">
                          <p className="text-xs text-muted-foreground">
                            Minimum investment: R {item.minInvestment.toLocaleString()}
                          </p>
                          <div className="flex items-center mt-2">
                            <Label htmlFor={`amount-${item.id}`} className="mr-2">Amount (R):</Label>
                            <div className="flex items-center">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="h-8 w-8 p-0"
                                onClick={() => {
                                  const newAmount = Math.max(item.minInvestment, (item.amount || 0) - 1000);
                                  handleUpdateCartItemAmount(item.id, newAmount);
                                }}
                              >
                                <Minus size={14} />
                              </Button>
                              <Input
                                id={`amount-${item.id}`}
                                type="number"
                                value={item.amount}
                                onChange={(e) => {
                                  const value = Number(e.target.value);
                                  if (value >= item.minInvestment) {
                                    handleUpdateCartItemAmount(item.id, value);
                                  }
                                }}
                                className="w-24 mx-2 text-right"
                                min={item.minInvestment}
                                step={1000}
                              />
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="h-8 w-8 p-0"
                                onClick={() => {
                                  handleUpdateCartItemAmount(item.id, (item.amount || 0) + 1000);
                                }}
                              >
                                <Plus size={14} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <p>Total Investment:</p>
                      <p className="font-bold">R {totalInvestmentAmount.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Your Wallet Balance:</p>
                      <p className="font-bold">R {walletBalance.toLocaleString()}</p>
                    </div>
                    {totalInvestmentAmount > walletBalance && (
                      <p className="text-red-500 text-sm">
                        Insufficient funds. Please add more funds to your wallet or reduce investment amount.
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>

            <SheetFooter className="mt-6">
              <div className="flex w-full flex-col space-y-3">
                <Button 
                  disabled={cartItems.length === 0 || totalInvestmentAmount > walletBalance} 
                  className="w-full bg-gold hover:bg-lightgold"
                  onClick={handleCheckout}
                >
                  Checkout (R {totalInvestmentAmount.toLocaleString()})
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </UserLayout>
  );
};

export default UserNewDeals;
