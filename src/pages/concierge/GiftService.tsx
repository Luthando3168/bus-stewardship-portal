
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Gift, Search } from 'lucide-react';
import ServicePageTemplate from '@/components/concierge/ServicePageTemplate';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const GiftService = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("Flowers");
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    "Flowers", "Gift Baskets", "Cakes", "Chocolates", "Plants", "Personalized Gifts"
  ];
  
  const features = [
    "Same-day delivery in major cities across South Africa",
    "Stunning floral arrangements created by professional florists",
    "Delicious cakes and chocolates from premium suppliers",
    "Personalized gifts for every occasion",
    "Corporate gifting solutions with bulk discounts",
    "Customer satisfaction guaranteed or your money back"
  ];

  const products = {
    "Flowers": [
      { name: "Red Rose Bouquet", price: "R399.99", image: "/placeholder.svg", type: "Bouquet" },
      { name: "Mixed Spring Arrangement", price: "R499.99", image: "/placeholder.svg", type: "Arrangement" },
      { name: "Sunflower Sunshine", price: "R349.99", image: "/placeholder.svg", type: "Bouquet" },
      { name: "Orchid Elegance", price: "R699.99", image: "/placeholder.svg", type: "Potted" },
      { name: "Lilies & Roses", price: "R459.99", image: "/placeholder.svg", type: "Arrangement" },
      { name: "Romantic Red & Pink", price: "R429.99", image: "/placeholder.svg", type: "Bouquet" },
    ],
    "Gift Baskets": [
      { name: "Luxury Gourmet Basket", price: "R899.99", image: "/placeholder.svg", type: "Food" },
      { name: "Spa Treatment Hamper", price: "R599.99", image: "/placeholder.svg", type: "Wellness" },
      { name: "Wine & Chocolate Duo", price: "R499.99", image: "/placeholder.svg", type: "Alcohol" },
      { name: "Fresh Fruit Selection", price: "R349.99", image: "/placeholder.svg", type: "Food" },
      { name: "Coffee Lover's Basket", price: "R429.99", image: "/placeholder.svg", type: "Beverages" },
      { name: "Sweet Tooth Hamper", price: "R379.99", image: "/placeholder.svg", type: "Confectionery" },
    ],
    "Cakes": [
      { name: "Chocolate Decadence Cake", price: "R329.99", image: "/placeholder.svg", type: "Chocolate" },
      { name: "Red Velvet Delight", price: "R299.99", image: "/placeholder.svg", type: "Specialty" },
      { name: "Fresh Fruit Gateau", price: "R349.99", image: "/placeholder.svg", type: "Fruit" },
      { name: "Cheesecake Classic", price: "R279.99", image: "/placeholder.svg", type: "Cheesecake" },
      { name: "Carrot Cake", price: "R259.99", image: "/placeholder.svg", type: "Specialty" },
      { name: "Birthday Celebration Cake", price: "R399.99", image: "/placeholder.svg", type: "Celebration" },
    ],
    "Chocolates": [
      { name: "Lindt Selection Box", price: "R299.99", image: "/placeholder.svg", type: "Assorted" },
      { name: "Ferrero Rocher Collection", price: "R249.99", image: "/placeholder.svg", type: "Pralines" },
      { name: "Belgian Chocolate Truffles", price: "R229.99", image: "/placeholder.svg", type: "Truffles" },
      { name: "Chocolate Covered Strawberries", price: "R389.99", image: "/placeholder.svg", type: "Fruit" },
      { name: "Dark Chocolate Selection", price: "R259.99", image: "/placeholder.svg", type: "Dark" },
      { name: "Handcrafted Artisan Chocolates", price: "R349.99", image: "/placeholder.svg", type: "Artisan" },
    ],
    "Plants": [
      { name: "Peace Lily", price: "R299.99", image: "/placeholder.svg", type: "Indoor" },
      { name: "Bonsai Tree", price: "R599.99", image: "/placeholder.svg", type: "Specialty" },
      { name: "Succulent Garden", price: "R249.99", image: "/placeholder.svg", type: "Low-maintenance" },
      { name: "Money Plant", price: "R199.99", image: "/placeholder.svg", type: "Indoor" },
      { name: "Rose Bush", price: "R279.99", image: "/placeholder.svg", type: "Outdoor" },
      { name: "Herb Garden Kit", price: "R329.99", image: "/placeholder.svg", type: "Edible" },
    ],
    "Personalized Gifts": [
      { name: "Custom Photo Frame", price: "R249.99", image: "/placeholder.svg", type: "Home Decor" },
      { name: "Engraved Jewelry", price: "R499.99", image: "/placeholder.svg", type: "Accessories" },
      { name: "Monogrammed Towel Set", price: "R349.99", image: "/placeholder.svg", type: "Home" },
      { name: "Custom Name Necklace", price: "R399.99", image: "/placeholder.svg", type: "Jewelry" },
      { name: "Personalized Wine Glasses", price: "R299.99", image: "/placeholder.svg", type: "Drinkware" },
      { name: "Custom Message Cookies", price: "R279.99", image: "/placeholder.svg", type: "Edible" },
    ],
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOrderClick = () => {
    console.log("Order button clicked");
    // Additional order processing logic would go here
  };

  // Filter products based on search query
  const filteredProducts = selectedCategory && searchQuery 
    ? products[selectedCategory as keyof typeof products].filter(
        product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : selectedCategory 
      ? products[selectedCategory as keyof typeof products]
      : [];

  return (
    <ServicePageTemplate 
      title="Petal & Parcel"
      description="South Africa's premium gift delivery service offering beautiful flowers, thoughtful gift baskets, delicious cakes, and more for every special occasion."
      icon={Gift}
      color="text-pink-500"
    >
      <div className="space-y-8">
        {/* Hero Banner */}
        <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-r from-pink-400 to-purple-500">
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Petal & Parcel</h1>
            <p className="text-lg mb-4 max-w-md">Beautiful gifts for every occasion, delivered with love across South Africa.</p>
            <Badge variant="secondary" className="bg-white text-pink-500 hover:bg-white/90 w-fit">
              Same Day Delivery Available
            </Badge>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Categories and Search */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Find the Perfect Gift</h2>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search gifts..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"} 
                    className={`justify-start ${selectedCategory === category ? 'bg-pink-500 hover:bg-pink-600' : 'hover:bg-pink-50'}`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Why choose Petal & Parcel?</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Display */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">
              {selectedCategory ? `${selectedCategory}` : 'All Products'}
              {searchQuery && ` - Search results for "${searchQuery}"`}
            </h2>
            
            {selectedCategory ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, idx) => (
                    <div key={idx} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-40 bg-gray-200 flex items-center justify-center">
                        <Gift className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{product.name}</h3>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-600">{product.type}</span>
                          <span className="font-bold text-pink-500">{product.price}</span>
                        </div>
                        <Button 
                          className="w-full mt-3 bg-pink-500 hover:bg-pink-600"
                          onClick={handleOrderClick}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 p-8 text-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No products found matching your search.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 text-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Please select a category to browse products.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Special Occasions Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Shop by Occasion</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Birthday", "Anniversary", "Congratulations", "Thank You"].map((occasion) => (
              <div 
                key={occasion} 
                className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg p-4 text-white text-center hover:shadow-md transition-all cursor-pointer"
              >
                <h3 className="font-medium">{occasion}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default GiftService;
