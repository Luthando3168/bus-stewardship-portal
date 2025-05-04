
import React, { useState } from "react";
import ServicePageTemplate from "@/components/concierge/ServicePageTemplate";
import { Utensils, Search, Filter, MapPin, Star, X, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  minOrder: string;
  image: string;
  featured: boolean;
  popular: boolean;
}

const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "R25",
    minOrder: "R100",
    image: "/placeholder.svg",
    featured: true,
    popular: true
  },
  {
    id: "r2",
    name: "Tokyo Sushi",
    cuisine: "Japanese",
    rating: 4.6,
    deliveryTime: "30-45 min",
    deliveryFee: "R30",
    minOrder: "R150",
    image: "/placeholder.svg",
    featured: true,
    popular: false
  },
  {
    id: "r3",
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.5,
    deliveryTime: "35-50 min",
    deliveryFee: "R20",
    minOrder: "R120",
    image: "/placeholder.svg",
    featured: false,
    popular: true
  },
  {
    id: "r4",
    name: "Green Harvest",
    cuisine: "Vegetarian",
    rating: 4.3,
    deliveryTime: "20-35 min",
    deliveryFee: "R15",
    minOrder: "R80",
    image: "/placeholder.svg",
    featured: false,
    popular: true
  },
  {
    id: "r5",
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: "15-25 min",
    deliveryFee: "R25",
    minOrder: "R90",
    image: "/placeholder.svg",
    featured: false,
    popular: false
  },
  {
    id: "r6",
    name: "Mediterranean Delight",
    cuisine: "Greek",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: "R35",
    minOrder: "R120",
    image: "/placeholder.svg",
    featured: true,
    popular: false
  }
];

const cuisineTypes = ["All", "Italian", "Japanese", "Indian", "American", "Greek", "Vegetarian"];

const RestaurantsService = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [activeTab, setActiveTab] = useState("all");

  const handleAddToCart = (restaurantName: string) => {
    toast.success(`Added items from ${restaurantName} to your order`, {
      description: "You can modify your order in the cart"
    });
  };

  const handleOrderNow = (restaurantName: string) => {
    toast.success(`Starting order from ${restaurantName}`, {
      description: "Please select your items"
    });
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    // Filter by search query
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by cuisine type
    const matchesCuisine = selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;
    
    // Filter by active tab
    const matchesTab = 
      (activeTab === "all") ||
      (activeTab === "featured" && restaurant.featured) ||
      (activeTab === "popular" && restaurant.popular);
    
    return matchesSearch && matchesCuisine && matchesTab;
  });

  return (
    <ServicePageTemplate
      title="Restaurant Takeaways"
      description="Order from a selection of fine dining and casual restaurants"
      icon={Utensils}
      color="text-amber-600"
    >
      <div className="space-y-8">
        {/* Hero section with background image */}
        <div className="relative rounded-xl overflow-hidden h-48 md:h-64 mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-red-500 opacity-90"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Premium Restaurant Delivery</h2>
            <p className="text-sm md:text-base max-w-md">
              Enjoy exclusive access to high-end restaurants and special menus, 
              delivered directly to your doorstep
            </p>
          </div>
        </div>

        {/* Search and filter bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search restaurants or cuisines..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
          </div>
          <div className="flex-shrink-0">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>
        </div>

        {/* Cuisine type filter pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cuisineTypes.map(cuisine => (
            <Badge 
              key={cuisine}
              variant={selectedCuisine === cuisine ? "default" : "outline"} 
              className={`px-3 py-1 cursor-pointer ${
                selectedCuisine === cuisine 
                  ? "bg-amber-600 hover:bg-amber-700" 
                  : "hover:bg-amber-50"
              }`}
              onClick={() => setSelectedCuisine(cuisine)}
            >
              {cuisine}
            </Badge>
          ))}
        </div>

        {/* Tabs for different views */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="all">All Restaurants</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4 focus:outline-none">
            {filteredRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRestaurants.map(restaurant => (
                  <Card key={restaurant.id} className="overflow-hidden transition-all hover:shadow-md">
                    <div className="relative h-40 bg-gray-100">
                      <img 
                        src={restaurant.image} 
                        alt={restaurant.name} 
                        className="w-full h-full object-cover"
                      />
                      {restaurant.featured && (
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-gold text-navyblue">Featured</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{restaurant.name}</h3>
                        <div className="flex items-center text-amber-500">
                          <Star className="fill-amber-500 h-4 w-4" />
                          <span className="ml-1 text-sm">{restaurant.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <Badge variant="outline" className="mr-2">{restaurant.cuisine}</Badge>
                        <div className="flex items-center">
                          <span className="mr-3">{restaurant.deliveryTime}</span>
                          <span>Min: {restaurant.minOrder}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-4">
                        <span className="text-gray-600">
                          Delivery: {restaurant.deliveryFee}
                        </span>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleAddToCart(restaurant.name)}
                          >
                            <ShoppingBag className="h-4 w-4 mr-1" />
                            <span>Add</span>
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-amber-600 hover:bg-amber-700"
                            onClick={() => handleOrderNow(restaurant.name)}
                          >
                            Order
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Utensils className="mx-auto h-12 w-12" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No restaurants found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </ServicePageTemplate>
  );
};

export default RestaurantsService;
