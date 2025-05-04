
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
    { id: "flowers", name: "Flowers", icon: Flower, count: 28, 
      image: "https://images.unsplash.com/photo-1561181286-d5c60ad e5c67?q=80&w=300" },
    { id: "gift-baskets", name: "Gift Baskets", icon: Package, count: 24,
      image: "https://images.unsplash.com/photo-1607545282030-badcb0553f27?q=80&w=300" },
    { id: "cakes", name: "Cakes & Bakery", icon: Gift, count: 18,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300" },
    { id: "chocolates", name: "Chocolates", icon: Heart, count: 22,
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=300" },
    { id: "plants", name: "Plants", icon: Flower, count: 15,
      image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=300" },
    { id: "personalized", name: "Personalized Gifts", icon: Tag, count: 19,
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=300" }
  ];
  
  const occasions = [
    { name: "Birthday", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=300", color: "from-purple-500 to-purple-700" },
    { name: "Anniversary", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=300", color: "from-pink-500 to-red-500" },
    { name: "Congratulations", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=300", color: "from-amber-400 to-orange-500" },
    { name: "Thank You", image: "https://images.unsplash.com/photo-1550603800-583f3a8ed8a1?q=80&w=300", color: "from-emerald-500 to-teal-600" },
    { name: "Sympathy", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=300", color: "from-blue-400 to-indigo-600" },
    { name: "Love & Romance", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=300", color: "from-rose-400 to-red-600" }
  ];
  
  const featuredProducts = [
    { name: "Simply Stunning", price: "R399", image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=300", rating: 4.7, reviews: 124 },
    { name: "Pink Perfection", price: "R549", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=300", rating: 4.9, reviews: 89 },
    { name: "Luxe Celebration", price: "R799", image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=300", rating: 4.8, reviews: 156 }
  ];

  const products = {
    "flowers": [
      { name: "Red Rose Bouquet", price: "R399", image: "https://images.unsplash.com/photo-1561181286-d5c60ade5c67?q=80&w=300", type: "Bouquet", rating: 4.8, reviews: 124, isBestseller: true },
      { name: "Mixed Spring Arrangement", price: "R499", image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?q=80&w=300", type: "Arrangement", rating: 4.7, reviews: 98 },
      { name: "Sunflower Sunshine", price: "R349", image: "https://images.unsplash.com/photo-1551130311-a549b12ba149?q=80&w=300", type: "Bouquet", rating: 4.9, reviews: 156 },
      { name: "Orchid Elegance", price: "R699", image: "https://images.unsplash.com/photo-1566983649966-0cd2dbe95df1?q=80&w=300", type: "Potted", rating: 4.6, reviews: 87 },
      { name: "Lilies & Roses", price: "R459", image: "https://images.unsplash.com/photo-1557090495-fc9312e77b28?q=80&w=300", type: "Arrangement", rating: 4.5, reviews: 76 },
      { name: "Romantic Red & Pink", price: "R429", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=300", type: "Bouquet", rating: 4.7, reviews: 112, isBestseller: true },
    ],
    "gift-baskets": [
      { name: "Luxury Gourmet Basket", price: "R899", image: "https://images.unsplash.com/photo-1607545282030-badcb0553f27?q=80&w=300", type: "Food", rating: 4.8, reviews: 67 },
      { name: "Spa Treatment Hamper", price: "R599", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=300", type: "Wellness", rating: 4.9, reviews: 82, isBestseller: true },
      { name: "Wine & Chocolate Duo", price: "R499", image: "https://images.unsplash.com/photo-1536260583471-329cd0ceec0e?q=80&w=300", type: "Alcohol", rating: 4.7, reviews: 93 },
      { name: "Fresh Fruit Selection", price: "R349", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=300", type: "Food", rating: 4.6, reviews: 58 },
      { name: "Coffee Lover's Basket", price: "R429", image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=300", type: "Beverages", rating: 4.8, reviews: 43 },
      { name: "Sweet Tooth Hamper", price: "R379", image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=300", type: "Confectionery", rating: 4.7, reviews: 61 },
    ],
    "cakes": [
      { name: "Chocolate Decadence Cake", price: "R329", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300", type: "Chocolate", rating: 4.9, reviews: 128, isBestseller: true },
      { name: "Red Velvet Delight", price: "R299", image: "https://images.unsplash.com/photo-1586788680399-d7c825886019?q=80&w=300", type: "Specialty", rating: 4.7, reviews: 94 },
      { name: "Fresh Fruit Gateau", price: "R349", image: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?q=80&w=300", type: "Fruit", rating: 4.6, reviews: 83 },
      { name: "Cheesecake Classic", price: "R279", image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=300", type: "Cheesecake", rating: 4.8, reviews: 106 },
      { name: "Carrot Cake", price: "R259", image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300", type: "Specialty", rating: 4.5, reviews: 72 },
      { name: "Birthday Celebration Cake", price: "R399", image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=300", type: "Celebration", rating: 4.9, reviews: 143, isBestseller: true },
    ],
    "chocolates": [
      { name: "Lindt Selection Box", price: "R299", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=300", type: "Assorted", rating: 4.8, reviews: 87 },
      { name: "Ferrero Rocher Collection", price: "R249", image: "https://images.unsplash.com/photo-1526081347598-7201ce6d42ab?q=80&w=300", type: "Pralines", rating: 4.9, reviews: 112, isBestseller: true },
      { name: "Belgian Chocolate Truffles", price: "R229", image: "https://images.unsplash.com/photo-1548907040-4d42bea34b56?q=80&w=300", type: "Truffles", rating: 4.7, reviews: 76 },
      { name: "Chocolate Covered Strawberries", price: "R389", image: "https://images.unsplash.com/photo-1582041148887-67274b989ae3?q=80&w=300", type: "Fruit", rating: 4.8, reviews: 94 },
      { name: "Dark Chocolate Selection", price: "R259", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=300", type: "Dark", rating: 4.6, reviews: 63 },
      { name: "Handcrafted Artisan Chocolates", price: "R349", image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=300", type: "Artisan", rating: 4.9, reviews: 81, isBestseller: true },
    ],
    "plants": [
      { name: "Peace Lily", price: "R299", image: "https://images.unsplash.com/photo-1620803366004-107f4248071f?q=80&w=300", type: "Indoor", rating: 4.7, reviews: 94 },
      { name: "Bonsai Tree", price: "R599", image: "https://images.unsplash.com/photo-1604509869344-954282adecd2?q=80&w=300", type: "Specialty", rating: 4.9, reviews: 76, isBestseller: true },
      { name: "Succulent Garden", price: "R249", image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=300", type: "Low-maintenance", rating: 4.8, reviews: 128 },
      { name: "Money Plant", price: "R199", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=300", type: "Indoor", rating: 4.6, reviews: 87 },
      { name: "Rose Bush", price: "R279", image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=300", type: "Outdoor", rating: 4.7, reviews: 93 },
      { name: "Herb Garden Kit", price: "R329", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300", type: "Edible", rating: 4.8, reviews: 79 },
    ],
    "personalized": [
      { name: "Custom Photo Frame", price: "R249", image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=300", type: "Home Decor", rating: 4.7, reviews: 82 },
      { name: "Engraved Jewelry", price: "R499", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=300", type: "Accessories", rating: 4.9, reviews: 94, isBestseller: true },
      { name: "Monogrammed Towel Set", price: "R349", image: "https://images.unsplash.com/photo-1584992236310-6ded3f846ef6?q=80&w=300", type: "Home", rating: 4.6, reviews: 67 },
      { name: "Custom Name Necklace", price: "R399", image: "https://images.unsplash.com/photo-1533407411655-dcce1534c1a6?q=80&w=300", type: "Jewelry", rating: 4.8, reviews: 103 },
      { name: "Personalized Wine Glasses", price: "R299", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=300", type: "Drinkware", rating: 4.7, reviews: 76 },
      { name: "Custom Message Cookies", price: "R279", image: "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?q=80&w=300", type: "Edible", rating: 4.8, reviews: 89, isBestseller: true },
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
          
          {/* Category Cards - Updated with real images */}
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
                  <div className="h-36 bg-gray-100 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
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
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
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
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
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
                className={`bg-gradient-to-br ${occasion.color} rounded-lg overflow-hidden h-36 relative group cursor-pointer hover:shadow-md transition-all`}
              >
                <img 
                  src={occasion.image}
                  alt={occasion.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="font-medium text-lg">{occasion.name}</h3>
                  <span className="text-sm text-white/80 mt-1">View Collection</span>
                </div>
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
