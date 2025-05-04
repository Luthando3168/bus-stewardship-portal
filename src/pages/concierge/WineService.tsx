
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Wine, Search } from 'lucide-react';
import ServicePageTemplate from '@/components/concierge/ServicePageTemplate';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const WineService = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    "Wine", "Spirits", "Beer & Cider", "Ready To Drink", "Non-Alcoholic"
  ];
  
  const features = [
    "Premium selection from Tops at Spar and Makro Liquor",
    "Nationwide delivery across South Africa",
    "Same-day delivery in select areas",
    "Expert recommendations from qualified sommeliers",
    "Special occasion packages and gift options",
    "Exclusive member discounts and loyalty rewards"
  ];

  const products = {
    "Wine": [
      { name: "Nederburg Baronne", price: "R89.99", type: "Red Wine" },
      { name: "Durbanville Hills Sauvignon Blanc", price: "R95.99", type: "White Wine" },
      { name: "KWV Classic Collection Rosé", price: "R69.99", type: "Rosé Wine" },
      { name: "Pongrácz Brut", price: "R159.99", type: "Sparkling Wine" },
      { name: "Allesverloren Port", price: "R199.99", type: "Dessert Wine" },
      { name: "Robertson Winery Chenin Blanc", price: "R59.99", type: "White Wine" },
    ],
    "Spirits": [
      { name: "Jameson Irish Whiskey", price: "R329.99", type: "Whiskey" },
      { name: "Russian Bear Vodka", price: "R159.99", type: "Vodka" },
      { name: "Bombay Sapphire Gin", price: "R289.99", type: "Gin" },
      { name: "Captain Morgan Spiced Gold", price: "R179.99", type: "Rum" },
      { name: "Olmeca Tequila Gold", price: "R269.99", type: "Tequila" },
      { name: "Amarula Cream Liqueur", price: "R149.99", type: "Liqueur" },
    ],
    "Beer & Cider": [
      { name: "Castle Lager (6-pack)", price: "R89.99", type: "Beer" },
      { name: "Heineken (6-pack)", price: "R109.99", type: "Beer" },
      { name: "Savanna Dry (6-pack)", price: "R99.99", type: "Cider" },
      { name: "Hunter's Dry (6-pack)", price: "R94.99", type: "Cider" },
      { name: "CBC Craft Beer (4-pack)", price: "R119.99", type: "Craft Beer" },
      { name: "Windhoek Draught (6-pack)", price: "R104.99", type: "Beer" },
    ],
    "Ready To Drink": [
      { name: "Brutal Fruit (6-pack)", price: "R89.99", type: "RTD" },
      { name: "Flying Fish (6-pack)", price: "R84.99", type: "RTD" },
      { name: "Smirnoff Storm (6-pack)", price: "R99.99", type: "RTD" },
      { name: "Strongbow (4-pack)", price: "R94.99", type: "RTD" },
      { name: "Red Square (6-pack)", price: "R119.99", type: "RTD" },
      { name: "Jack Daniel's & Cola (4-pack)", price: "R129.99", type: "RTD" },
    ],
    "Non-Alcoholic": [
      { name: "Castle Free (6-pack)", price: "R74.99", type: "Beer" },
      { name: "Savanna Non-Alcoholic (4-pack)", price: "R79.99", type: "Cider" },
      { name: "Heineken 0.0 (6-pack)", price: "R94.99", type: "Beer" },
      { name: "Robertson Virgin Chardonnay", price: "R69.99", type: "Wine" },
      { name: "Martini Vibrante Non-Alcoholic", price: "R159.99", type: "Vermouth" },
      { name: "The Duchess G&T (4-pack)", price: "R89.99", type: "Gin & Tonic" },
    ],
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
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
      title="Food Corner Bev. Co."
      description="Enjoy premium alcoholic and non-alcoholic beverages delivered directly to your door. We offer a comprehensive selection from trusted retailers like Tops at Spar and Makro Liquor."
      icon={Wine}
      color="text-red-500"
    >
      <div className="space-y-8">
        {/* Hero Banner */}
        <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-r from-red-700 to-red-900">
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Food Corner Bev. Co.</h1>
            <p className="text-lg mb-4 max-w-md">Premium beverages delivered to your door, anywhere in South Africa.</p>
            <Badge variant="secondary" className="bg-white text-red-700 hover:bg-white/90 w-fit">
              Tops at Spar & Makro Liquor Partner
            </Badge>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Category Cards */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Browse By Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card 
                key={category}
                className={`cursor-pointer transition-all ${
                  selectedCategory === category 
                    ? 'ring-2 ring-red-500 shadow-md' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Wine 
                    className={`h-12 w-12 mb-3 ${
                      selectedCategory === category ? 'text-red-500' : 'text-gray-400'
                    }`} 
                  />
                  <h3 className="font-semibold">{category}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {products[category as keyof typeof products].length} products
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Listings */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
            {searchQuery && ` - Search results for "${searchQuery}"`}
          </h2>
          
          {selectedCategory ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-medium">{product.name}</h3>
                        <Badge>{product.type}</Badge>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="font-bold text-lg text-red-500">{product.price}</span>
                        <Button 
                          onClick={handleOrderClick}
                          className="bg-red-500 hover:bg-red-600"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 p-8 text-center bg-gray-50 rounded-lg">
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

        {/* Features Section */}
        <div className="bg-red-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Why Choose Food Corner Bev. Co.?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {features.slice(3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={handleOrderClick}
            className="bg-red-500 hover:bg-red-600 py-6 px-8 text-lg"
          >
            Place Your Order Now
          </Button>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default WineService;
