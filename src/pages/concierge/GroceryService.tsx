
import React, { useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { ShoppingCart, ArrowLeft, Check, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const groceryStores = [
  { 
    id: 1, 
    name: "Food Corner", 
    logo: "FC", 
    description: "Premium grocery selection with organic produce",
    isOwned: true,
    delivery: "Same day",
    fee: "R25"
  }
];

// Product categories from Makro adapted for Food Corner
const productCategories = [
  { 
    id: 1, 
    name: "Fresh Produce", 
    image: "/lovable-uploads/0bf3e14d-cb74-4a37-b156-c269331b7a57.png", 
    count: 124, 
    color: "#F2FCE2", 
    textColor: "#4CAF50" 
  },
  { 
    id: 2, 
    name: "Meat & Poultry", 
    image: "/lovable-uploads/36f1e3ec-1682-4086-8e11-d7c4e572618b.png", 
    count: 87, 
    color: "#FEE4E2", 
    textColor: "#E53935" 
  },
  { 
    id: 3, 
    name: "Dairy & Eggs", 
    image: "/lovable-uploads/3bf955d5-5ab4-48d1-be77-4c951cf953ca.png", 
    count: 56, 
    color: "#EFF6FF", 
    textColor: "#1E88E5" 
  },
  { 
    id: 4, 
    name: "Bakery", 
    image: "/lovable-uploads/402c56a2-5e59-41c1-8652-099f61ae559b.png", 
    count: 42, 
    color: "#FEF7CD", 
    textColor: "#FFA000" 
  },
  { 
    id: 5, 
    name: "Beverages", 
    image: "/lovable-uploads/4288eeba-c60b-42f1-a156-13a7ef6df992.png", 
    count: 98, 
    color: "#E8F5E9", 
    textColor: "#2E7D32" 
  },
  { 
    id: 6, 
    name: "Frozen Foods", 
    image: "/lovable-uploads/4f2d889e-ba23-463a-9efe-bc8453a5e5b2.png", 
    count: 64, 
    color: "#E3F2FD", 
    textColor: "#0277BD" 
  },
  { 
    id: 7, 
    name: "Pantry Items", 
    image: "/lovable-uploads/697f3367-6bf9-47c7-8610-d21869a0d029.png", 
    count: 175, 
    color: "#FEC6A1", 
    textColor: "#E64A19" 
  },
  { 
    id: 8, 
    name: "Snacks & Sweets", 
    image: "/lovable-uploads/98d6869e-a552-4731-9f0c-6dce07a2db48.png", 
    count: 113, 
    color: "#FCE4EC", 
    textColor: "#D81B60" 
  },
  { 
    id: 9, 
    name: "Household", 
    image: "/lovable-uploads/9c21e28f-36c0-493e-af52-6ae0e38e3712.png", 
    count: 79, 
    color: "#F3E5F5", 
    textColor: "#8E24AA" 
  },
  { 
    id: 10, 
    name: "Health & Beauty", 
    image: "/lovable-uploads/aa792d14-7473-4673-89cf-c3f6e1d15711.png", 
    count: 92, 
    color: "#E1F5FE", 
    textColor: "#0288D1" 
  },
];

const GroceryService = () => {
  const [selectedStore, setSelectedStore] = useState<number>(1); // Default to Food Corner
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = productCategories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Link to="/user/concierge">
            <Button variant="ghost" size="sm" className="text-red-700">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Concierge
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-red-700 mb-1">
              <ShoppingCart className="h-6 w-6 inline-block mr-2 text-red-600" />
              Food Corner Grocery Shopping
            </h1>
            <p className="text-gray-600 text-sm">
              Order fresh groceries from Food Corner with delivery right to your door.
            </p>
          </div>
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 py-1.5 px-3 self-start">
            You own shares in this store
          </Badge>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="mb-8">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-red-600 text-white rounded-md flex items-center justify-center font-bold text-lg">
                      FC
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-red-700">Food Corner</h3>
                      <p className="text-sm text-gray-600">Same day delivery • R25 fee</p>
                    </div>
                  </div>
                  <Badge className="bg-gold text-white">You own shares</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-lg font-medium mb-4 text-red-700">Browse Categories</h2>
          
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search categories..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredCategories.map((category) => (
              <Card 
                key={category.id} 
                className="cursor-pointer transition-all hover:shadow-md hover:border-red-200 overflow-hidden"
                onClick={() => toast.success(`Browsing ${category.name}`)}
                style={{ backgroundColor: category.color }}
              >
                <CardContent className="p-0">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 
                      className="font-medium text-sm mb-1" 
                      style={{ color: category.textColor }}
                    >
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500">{category.count} items</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default GroceryService;
