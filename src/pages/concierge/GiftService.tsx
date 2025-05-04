
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Gift, Search, Heart, ShoppingCart, FlowerIcon as Flower, Package, Tag, Star } from 'lucide-react';
import ServicePageTemplate from '@/components/concierge/ServicePageTemplate';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const GiftService = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: "flowers", name: "Flowers", icon: Flower, count: 28 },
    { id: "gift-baskets", name: "Gift Baskets", icon: Package, count: 24 },
    { id: "cakes", name: "Cakes & Bakery", icon: Gift, count: 18 },
    { id: "chocolates", name: "Chocolates", icon: Heart, count: 22 },
    { id: "plants", name: "Plants", icon: Flower, count: 15 },
    { id: "personalized", name: "Personalized Gifts", icon: Tag, count: 19 }
  ];
  
  const occasions = [
    { name: "Birthday", image: "/placeholder.svg", color: "from-purple-500 to-purple-700" },
    { name: "Anniversary", image: "/placeholder.svg", color: "from-pink-500 to-red-500" },
    { name: "Congratulations", image: "/placeholder.svg", color: "from-amber-400 to-orange-500" },
    { name: "Thank You", image: "/placeholder.svg", color: "from-emerald-500 to-teal-600" },
    { name: "Sympathy", image: "/placeholder.svg", color: "from-blue-400 to-indigo-600" },
    { name: "Love & Romance", image: "/placeholder.svg", color: "from-rose-400 to-red-600" }
  ];
  
  const featuredProducts = [
    { name: "Simply Stunning", price: "R399", image: "/placeholder.svg", rating: 4.7, reviews: 124 },
    { name: "Pink Perfection", price: "R549", image: "/placeholder.svg", rating: 4.9, reviews: 89 },
    { name: "Luxe Celebration", price: "R799", image: "/placeholder.svg", rating: 4.8, reviews: 156 }
  ];

  const products = {
    "flowers": [
      { name: "Red Rose Bouquet", price: "R399", image: "/placeholder.svg", type: "Bouquet", rating: 4.8, reviews: 124, isBestseller: true },
      { name: "Mixed Spring Arrangement", price: "R499", image: "/placeholder.svg", type: "Arrangement", rating: 4.7, reviews: 98 },
      { name: "Sunflower Sunshine", price: "R349", image: "/placeholder.svg", type: "Bouquet", rating: 4.9, reviews: 156 },
      { name: "Orchid Elegance", price: "R699", image: "/placeholder.svg", type: "Potted", rating: 4.6, reviews: 87 },
      { name: "Lilies & Roses", price: "R459", image: "/placeholder.svg", type: "Arrangement", rating: 4.5, reviews: 76 },
      { name: "Romantic Red & Pink", price: "R429", image: "/placeholder.svg", type: "Bouquet", rating: 4.7, reviews: 112, isBestseller: true },
    ],
    "gift-baskets": [
      { name: "Luxury Gourmet Basket", price: "R899", image: "/placeholder.svg", type: "Food", rating: 4.8, reviews: 67 },
      { name: "Spa Treatment Hamper", price: "R599", image: "/placeholder.svg", type: "Wellness", rating: 4.9, reviews: 82, isBestseller: true },
      { name: "Wine & Chocolate Duo", price: "R499", image: "/placeholder.svg", type: "Alcohol", rating: 4.7, reviews: 93 },
      { name: "Fresh Fruit Selection", price: "R349", image: "/placeholder.svg", type: "Food", rating: 4.6, reviews: 58 },
      { name: "Coffee Lover's Basket", price: "R429", image: "/placeholder.svg", type: "Beverages", rating: 4.8, reviews: 43 },
      { name: "Sweet Tooth Hamper", price: "R379", image: "/placeholder.svg", type: "Confectionery", rating: 4.7, reviews: 61 },
    ],
    "cakes": [
      { name: "Chocolate Decadence Cake", price: "R329", image: "/placeholder.svg", type: "Chocolate", rating: 4.9, reviews: 128, isBestseller: true },
      { name: "Red Velvet Delight", price: "R299", image: "/placeholder.svg", type: "Specialty", rating: 4.7, reviews: 94 },
      { name: "Fresh Fruit Gateau", price: "R349", image: "/placeholder.svg", type: "Fruit", rating: 4.6, reviews: 83 },
      { name: "Cheesecake Classic", price: "R279", image: "/placeholder.svg", type: "Cheesecake", rating: 4.8, reviews: 106 },
      { name: "Carrot Cake", price: "R259", image: "/placeholder.svg", type: "Specialty", rating: 4.5, reviews: 72 },
      { name: "Birthday Celebration Cake", price: "R399", image: "/placeholder.svg", type: "Celebration", rating: 4.9, reviews: 143, isBestseller: true },
    ],
    "chocolates": [
      { name: "Lindt Selection Box", price: "R299", image: "/placeholder.svg", type: "Assorted", rating: 4.8, reviews: 87 },
      { name: "Ferrero Rocher Collection", price: "R249", image: "/placeholder.svg", type: "Pralines", rating: 4.9, reviews: 112, isBestseller: true },
      { name: "Belgian Chocolate Truffles", price: "R229", image: "/placeholder.svg", type: "Truffles", rating: 4.7, reviews: 76 },
      { name: "Chocolate Covered Strawberries", price: "R389", image: "/placeholder.svg", type: "Fruit", rating: 4.8, reviews: 94 },
      { name: "Dark Chocolate Selection", price: "R259", image: "/placeholder.svg", type: "Dark", rating: 4.6, reviews: 63 },
      { name: "Handcrafted Artisan Chocolates", price: "R349", image: "/placeholder.svg", type: "Artisan", rating: 4.9, reviews: 81, isBestseller: true },
    ],
    "plants": [
      { name: "Peace Lily", price: "R299", image: "/placeholder.svg", type: "Indoor", rating: 4.7, reviews: 94 },
      { name: "Bonsai Tree", price: "R599", image: "/placeholder.svg", type: "Specialty", rating: 4.9, reviews: 76, isBestseller: true },
      { name: "Succulent Garden", price: "R249", image: "/placeholder.svg", type: "Low-maintenance", rating: 4.8, reviews: 128 },
      { name: "Money Plant", price: "R199", image: "/placeholder.svg", type: "Indoor", rating: 4.6, reviews: 87 },
      { name: "Rose Bush", price: "R279", image: "/placeholder.svg", type: "Outdoor", rating: 4.7, reviews: 93 },
      { name: "Herb Garden Kit", price: "R329", image: "/placeholder.svg", type: "Edible", rating: 4.8, reviews: 79 },
    ],
    "personalized": [
      { name: "Custom Photo Frame", price: "R249", image: "/placeholder.svg", type: "Home Decor", rating: 4.7, reviews: 82 },
      { name: "Engraved Jewelry", price: "R499", image: "/placeholder.svg", type: "Accessories", rating: 4.9, reviews: 94, isBestseller: true },
      { name: "Monogrammed Towel Set", price: "R349", image: "/placeholder.svg", type: "Home", rating: 4.6, reviews: 67 },
      { name: "Custom Name Necklace", price: "R399", image: "/placeholder.svg", type: "Jewelry", rating: 4.8, reviews: 103 },
      { name: "Personalized Wine Glasses", price: "R299", image: "/placeholder.svg", type: "Drinkware", rating: 4.7, reviews: 76 },
      { name: "Custom Message Cookies", price: "R279", image: "/placeholder.svg", type: "Edible", rating: 4.8, reviews: 89, isBestseller: true },
    ],
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToCart = (product: any) => {
    console.log("Added to cart:", product);
    // Could implement cart functionality here
  };

  const handleWishlist = (product: any) => {
    console.log("Added to wishlist:", product);
    // Could implement wishlist functionality here
  };

  // Filter products based on search query
  const filteredProducts = selectedCategory && searchQuery 
    ? products[selectedCategory as keyof typeof products].filter(
        product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : selectedCategory 
      ? products[selectedCategory as keyof typeof products]
      : [];

  const getDisplayedCategoryName = () => {
    if (!selectedCategory) return "All Categories";
    const category = categories.find(cat => cat.id === selectedCategory);
    return category ? category.name : "Products";
  };

  return (
    <ServicePageTemplate 
      title="Petal & Parcel"
      description="South Africa's premium gift delivery service offering beautiful flowers, thoughtful gift baskets, delicious cakes, and more for every special occasion."
      icon={Gift}
      color="text-purple-600"
    >
      <div className="space-y-8">
        {/* Hero Banner */}
        <div className="relative rounded-xl overflow-hidden h-72 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Petal & Parcel</h1>
            <p className="text-lg mb-4 max-w-md">Beautiful gifts delivered with love across South Africa</p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-white text-purple-700 hover:bg-white/90 w-fit">
                Same Day Delivery Available
              </Badge>
              <Badge variant="secondary" className="bg-white text-purple-700 hover:bg-white/90 w-fit">
                Free Delivery on Orders Over R500
              </Badge>
            </div>
          </div>
        </div>

        {/* Search and Category Filter */}
        <div className="grid gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search flowers, gifts, cakes and more..."
              className="pl-10 py-6 text-base"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          
          {/* Category Cards */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Browse Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card 
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedCategory === category.id 
                      ? 'ring-2 ring-purple-500 shadow-md' 
                      : ''
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`mx-auto rounded-full p-3 w-14 h-14 mb-3 flex items-center justify-center ${
                      selectedCategory === category.id 
                        ? 'bg-purple-100 text-purple-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <category.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {category.count} items
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Products */}
        {!selectedCategory && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Featured Arrangements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map((product, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="h-60 bg-gray-100 relative overflow-hidden">
                    <div className="flex items-center justify-center h-full">
                      <Gift className="h-12 w-12 text-gray-300" />
                    </div>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                        onClick={() => handleWishlist(product)}
                      >
                        <Heart className="h-4 w-4 text-pink-600" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <span className="font-bold text-purple-700">{product.price}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-amber-400 mr-1 fill-amber-400" />
                        <span>{product.rating}</span>
                      </div>
                      <span className="mx-2">•</span>
                      <span>{product.reviews} reviews</span>
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700 mt-2 group-hover:bg-purple-700"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Product Display */}
        {selectedCategory && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {getDisplayedCategoryName()}
                {searchQuery && ` - Search results for "${searchQuery}"`}
              </h2>
              <span className="text-sm text-gray-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all group">
                    <div className="h-52 bg-gray-100 relative overflow-hidden">
                      <div className="flex items-center justify-center h-full">
                        <Gift className="h-12 w-12 text-gray-300" />
                      </div>
                      {product.isBestseller && (
                        <Badge className="absolute top-3 left-3 bg-amber-500">
                          Bestseller
                        </Badge>
                      )}
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Button 
                          variant="secondary" 
                          size="icon" 
                          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                          onClick={() => handleWishlist(product)}
                        >
                          <Heart className="h-4 w-4 text-pink-600" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <span className="font-bold text-purple-700">{product.price}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">{product.type}</span>
                        <div className="flex items-center text-sm">
                          <Star className="h-3.5 w-3.5 text-amber-400 mr-1 fill-amber-400" />
                          <span>{product.rating}</span>
                          <span className="text-gray-400 ml-1">({product.reviews})</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">No products found matching your search.</p>
              </div>
            )}
          </div>
        )}
        
        {/* Shop by Occasion */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Shop by Occasion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((occasion) => (
              <div 
                key={occasion.name} 
                className={`bg-gradient-to-br ${occasion.color} rounded-lg p-6 text-white text-center hover:shadow-md transition-all cursor-pointer h-36 flex flex-col items-center justify-center`}
              >
                <h3 className="font-medium text-lg">{occasion.name}</h3>
                <span className="text-sm text-white/80 mt-1">View Collection</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 bg-purple-50 p-8 rounded-lg">
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Gift className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg text-purple-800 mb-1">Same Day Delivery</h3>
            <p className="text-gray-600">Order by 12pm for same-day delivery in major cities</p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Flower className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg text-purple-800 mb-1">Fresh Guarantee</h3>
            <p className="text-gray-600">All our flowers are guaranteed to stay fresh for 7 days</p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Star className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg text-purple-800 mb-1">Quality Promise</h3>
            <p className="text-gray-600">Not satisfied? We'll refund or replace your order</p>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default GiftService;
