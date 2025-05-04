
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Wine } from 'lucide-react';
import ServicePageTemplate from '@/components/concierge/ServicePageTemplate';
import { Badge } from '@/components/ui/badge';

const WineService = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
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

  const handleOrderClick = () => {
    console.log("Order button clicked");
    // Additional order processing logic would go here
  };

  return (
    <ServicePageTemplate 
      title="Food Corner Bev. Co."
      description="Enjoy premium alcoholic and non-alcoholic beverages delivered directly to your door. We offer a comprehensive selection from trusted retailers like Tops at Spar and Makro Liquor."
      icon={Wine}
      color="text-red-500"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Selection</h2>
          <p className="text-gray-600 mb-6">
            Food Corner Bev. Co. provides a curated selection of premium beverages from Tops at Spar and Makro Liquor. 
            Whether you're looking for a fine wine for a special dinner, craft spirits for your 
            home bar, non-alcoholic alternatives, or simply want to try something new, we have options to suit every taste and budget.
          </p>
          
          <div className="bg-navyblue/5 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-2">Available across South Africa</h3>
            <p className="text-sm text-gray-600">
              We deliver to all major cities and towns across South Africa.
              Orders placed before 2PM are eligible for same-day delivery in select areas.
            </p>
          </div>
          
          <h3 className="font-semibold mb-3">What we offer:</h3>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Browse Our Products</h2>
          <p className="text-gray-600 mb-4">
            Explore our selection and have your favorite beverages delivered directly to your door.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"} 
                className={`cursor-pointer py-1.5 px-3 ${
                  selectedCategory === category ? 'bg-navyblue' : 'hover:bg-navyblue/10'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
            {selectedCategory ? (
              products[selectedCategory as keyof typeof products].map((product, idx) => (
                <div key={idx} className="p-3 bg-navyblue/5 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-medium">{product.price}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 bg-navyblue/5 rounded-lg text-center">
                <p className="text-gray-600">Select a category to see products</p>
              </div>
            )}
          </div>
          
          <Button 
            onClick={handleOrderClick}
            className="w-full bg-navyblue hover:bg-navyblue/90"
          >
            Place an Order
          </Button>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default WineService;
