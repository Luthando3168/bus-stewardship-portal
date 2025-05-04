
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

// Product categories from Makro but adapted for Food Corner
const productCategories = [
  { id: 1, name: "Fresh Produce", icon: "🥕", count: 124 },
  { id: 2, name: "Meat & Poultry", icon: "🥩", count: 87 },
  { id: 3, name: "Dairy & Eggs", icon: "🥛", count: 56 },
  { id: 4, name: "Bakery", icon: "🍞", count: 42 },
  { id: 5, name: "Beverages", icon: "🥤", count: 98 },
  { id: 6, name: "Frozen Foods", icon: "❄️", count: 64 },
  { id: 7, name: "Pantry Items", icon: "🥫", count: 175 },
  { id: 8, name: "Snacks & Sweets", icon: "🍪", count: 113 },
  { id: 9, name: "Household", icon: "🧹", count: 79 },
  { id: 10, name: "Health & Beauty", icon: "💄", count: 92 },
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
                className="cursor-pointer transition-all hover:shadow-md hover:border-red-200"
                onClick={() => toast.success(`Browsing ${category.name}`)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-sm mb-1 text-red-700">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.count} items</p>
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
