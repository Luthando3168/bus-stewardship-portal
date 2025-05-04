
import React, { useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const groceryStores = [
  { 
    id: 1, 
    name: "Fresh Market", 
    logo: "FM", 
    description: "Premium grocery selection with organic produce",
    isOwned: true,
    delivery: "Same day",
    fee: "R25"
  },
  { 
    id: 2, 
    name: "Daily Grocer", 
    logo: "DG", 
    description: "Everyday essentials at competitive prices",
    isOwned: true,
    delivery: "Next day",
    fee: "R15"
  },
  { 
    id: 3, 
    name: "Health Haven", 
    logo: "HH", 
    description: "Specializing in health and wellness products",
    isOwned: true,
    delivery: "1-2 days",
    fee: "R30"
  },
  { 
    id: 4, 
    name: "Urban Pantry", 
    logo: "UP", 
    description: "Gourmet and specialty food items",
    isOwned: false,
    delivery: "Same day",
    fee: "R35"
  },
  { 
    id: 5, 
    name: "Family Foods", 
    logo: "FF", 
    description: "Budget-friendly family essentials",
    isOwned: false,
    delivery: "Next day",
    fee: "R20"
  }
];

const GroceryService = () => {
  const [selectedStore, setSelectedStore] = useState<number | null>(null);

  const handleStoreSelect = (storeId: number) => {
    setSelectedStore(storeId);
    toast.success("Store selected", {
      description: "You can now browse products from this store."
    });
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Link to="/user/concierge">
            <Button variant="ghost" size="sm" className="text-navyblue">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Concierge
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-navyblue mb-1">
              <ShoppingCart className="h-6 w-6 inline-block mr-2 text-green-600" />
              Grocery Shopping
            </h1>
            <p className="text-gray-600 text-sm">
              Order fresh groceries from our partnered stores with delivery right to your door.
            </p>
          </div>
          <Badge variant="outline" className="bg-navyblue/5 text-navyblue border-navyblue/20 py-1.5 px-3 self-start">
            You own shares in 3 stores
          </Badge>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-medium mb-4 text-navyblue">Select a Store</h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groceryStores.map((store) => (
              <Card 
                key={store.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${selectedStore === store.id ? 'ring-2 ring-navyblue' : ''}`}
                onClick={() => handleStoreSelect(store.id)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-12 w-12 bg-navyblue/10 text-navyblue rounded-md flex items-center justify-center font-bold text-lg">
                      {store.logo}
                    </div>
                    {store.isOwned && (
                      <Badge variant="outline" className="bg-gold/10 text-gold border-gold/20">
                        You own shares
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="font-medium text-lg mb-1">{store.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{store.description}</p>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Delivery: {store.delivery}</span>
                    <span>Fee: {store.fee}</span>
                  </div>
                  
                  {selectedStore === store.id && (
                    <div className="mt-4 flex justify-end">
                      <Badge className="bg-navyblue text-white">
                        <Check className="h-3 w-3 mr-1" /> Selected
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button 
              className="bg-navyblue hover:bg-navyblue/90 text-white" 
              disabled={selectedStore === null}
            >
              Continue to Shop
            </Button>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default GroceryService;
