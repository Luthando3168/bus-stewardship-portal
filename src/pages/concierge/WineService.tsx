
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wine, Search, ShoppingCart } from 'lucide-react';
import ServicePageTemplate from '@/components/concierge/ServicePageTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const WineService = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    "Wine", "Spirits", "Beer & Cider", "Ready To Drink", "Non-Alcoholic"
  ];

  const products = {
    "Wine": [
      { name: "Nederburg Baronne", price: "R89.99", type: "Red Wine", image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?q=80&w=300" },
      { name: "Durbanville Hills Sauvignon Blanc", price: "R95.99", type: "White Wine", image: "https://images.unsplash.com/photo-1600320315123-1d1d62709929?q=80&w=300" },
      { name: "KWV Classic Collection Rosé", price: "R69.99", type: "Rosé Wine", image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=300" },
      { name: "Pongrácz Brut", price: "R159.99", type: "Sparkling Wine", image: "https://images.unsplash.com/photo-1594143637905-060b2f799071?q=80&w=300" },
      { name: "Allesverloren Port", price: "R199.99", type: "Dessert Wine", image: "https://images.unsplash.com/photo-1605494504452-d3531c843938?q=80&w=300" },
      { name: "Robertson Winery Chenin Blanc", price: "R59.99", type: "White Wine", image: "https://images.unsplash.com/photo-1507434965515-62e531e6bf77?q=80&w=300" },
    ],
    "Spirits": [
      { name: "Jameson Irish Whiskey", price: "R329.99", type: "Whiskey", image: "https://images.unsplash.com/photo-1583873483346-ac89dfff3619?q=80&w=300" },
      { name: "Russian Bear Vodka", price: "R159.99", type: "Vodka", image: "https://images.unsplash.com/photo-1613208602577-3803e7ddd785?q=80&w=300" },
      { name: "Bombay Sapphire Gin", price: "R289.99", type: "Gin", image: "https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?q=80&w=300" },
      { name: "Captain Morgan Spiced Gold", price: "R179.99", type: "Rum", image: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?q=80&w=300" },
      { name: "Olmeca Tequila Gold", price: "R269.99", type: "Tequila", image: "https://images.unsplash.com/photo-1605493725784-86eb987df3bc?q=80&w=300" },
      { name: "Amarula Cream Liqueur", price: "R149.99", type: "Liqueur", image: "https://images.unsplash.com/photo-1600985615923-511def53a847?q=80&w=300" },
    ],
    "Beer & Cider": [
      { name: "Castle Lager (6-pack)", price: "R89.99", type: "Beer", image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=300" },
      { name: "Heineken (6-pack)", price: "R109.99", type: "Beer", image: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?q=80&w=300" },
      { name: "Savanna Dry (6-pack)", price: "R99.99", type: "Cider", image: "https://images.unsplash.com/photo-1603394151770-b0bf7aacf233?q=80&w=300" },
      { name: "Hunter's Dry (6-pack)", price: "R94.99", type: "Cider", image: "https://images.unsplash.com/photo-1621873495852-186f9aa48d83?q=80&w=300" },
      { name: "CBC Craft Beer (4-pack)", price: "R119.99", type: "Craft Beer", image: "https://images.unsplash.com/photo-1624370233536-ca0dc3f24244?q=80&w=300" },
      { name: "Windhoek Draught (6-pack)", price: "R104.99", type: "Beer", image: "https://images.unsplash.com/photo-1532635248-cdd3d399f56c?q=80&w=300" },
    ],
    "Ready To Drink": [
      { name: "Brutal Fruit (6-pack)", price: "R89.99", type: "RTD", image: "https://images.unsplash.com/photo-1598811629267-feccfbc48fca?q=80&w=300" },
      { name: "Flying Fish (6-pack)", price: "R84.99", type: "RTD", image: "https://images.unsplash.com/photo-1561404926-c5a9214640dc?q=80&w=300" },
      { name: "Smirnoff Storm (6-pack)", price: "R99.99", type: "RTD", image: "https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?q=80&w=300" },
      { name: "Strongbow (4-pack)", price: "R94.99", type: "RTD", image: "https://images.unsplash.com/photo-1581873372796-635b67ca2008?q=80&w=300" },
      { name: "Red Square (6-pack)", price: "R119.99", type: "RTD", image: "https://images.unsplash.com/photo-1624264810038-50ef915e8ede?q=80&w=300" },
      { name: "Jack Daniel's & Cola (4-pack)", price: "R129.99", type: "RTD", image: "https://images.unsplash.com/photo-1606767517219-aeaff836c67e?q=80&w=300" },
    ],
    "Non-Alcoholic": [
      { name: "Castle Free (6-pack)", price: "R74.99", type: "Beer", image: "https://images.unsplash.com/photo-1619635098438-4219561908ed?q=80&w=300" },
      { name: "Savanna Non-Alcoholic (4-pack)", price: "R79.99", type: "Cider", image: "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?q=80&w=300" },
      { name: "Heineken 0.0 (6-pack)", price: "R94.99", type: "Beer", image: "https://images.unsplash.com/photo-1618019367629-206f6aeefdb9?q=80&w=300" },
      { name: "Robertson Virgin Chardonnay", price: "R69.99", type: "Wine", image: "https://images.unsplash.com/photo-1614350288817-b56bbc7d855f?q=80&w=300" },
      { name: "Martini Vibrante Non-Alcoholic", price: "R159.99", type: "Vermouth", image: "https://images.unsplash.com/photo-1567697655082-9a6eed60f10a?q=80&w=300" },
      { name: "The Duchess G&T (4-pack)", price: "R89.99", type: "Gin & Tonic", image: "https://images.unsplash.com/photo-1551734413-5943d61e002a?q=80&w=300" },
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
      description="Premium beverages delivered directly to your door. We offer a comprehensive selection of alcoholic and non-alcoholic options."
      icon={Wine}
      color="text-red-500"
    >
      <div className="space-y-8">
        {/* Hero Banner */}
        <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-r from-red-700 to-red-900">
          <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Premium Beverages</h1>
            <p className="text-lg mb-4 max-w-md">Delivered to your door, anywhere in South Africa.</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex h-full">
                      <div className="w-1/3 bg-gray-100">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full flex items-center justify-center">
                            <Wine className="h-12 w-12 text-gray-300" />
                          </div>
                        )}
                      </div>
                      <div className="w-2/3">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-medium">{product.name}</h3>
                              <Badge className="mt-1">{product.type}</Badge>
                            </div>
                            <span className="font-bold text-lg text-red-500">{product.price}</span>
                          </div>
                          <Button 
                            onClick={handleOrderClick}
                            className="bg-red-500 hover:bg-red-600 mt-3 w-full"
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
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

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={handleOrderClick}
            className="bg-red-500 hover:bg-red-600 py-6 px-8 text-lg"
          >
            <ShoppingCart className="h-5 w-5 mr-2" /> Place Your Order Now
          </Button>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default WineService;
