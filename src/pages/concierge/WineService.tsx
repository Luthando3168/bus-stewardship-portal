
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Wine } from 'lucide-react';
import ServicePageTemplate from '@/components/concierge/ServicePageTemplate';

const WineService = () => {
  const features = [
    "Premium wine and spirits selection",
    "Local and international brands",
    "Fast delivery to your location",
    "Expert recommendations",
    "Special occasion packages",
    "Exclusive member discounts"
  ];

  const handleOrderClick = () => {
    console.log("Order button clicked");
    // Additional order processing logic would go here
  };

  return (
    <ServicePageTemplate 
      title="Wine & Spirits Delivery"
      description="Enjoy premium alcoholic beverages delivered directly to your door. Food Corner Bev. Co. offers an extensive selection of wine, spirits, and craft beverages."
      icon={Wine}
      color="text-red-500"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Selection</h2>
          <p className="text-gray-600 mb-6">
            Food Corner Bev. Co. provides a curated selection of premium alcoholic beverages. 
            Whether you're looking for a fine wine for a special dinner, craft spirits for your 
            home bar, or simply want to try something new, we have options to suit every taste and budget.
          </p>
          
          <div className="bg-navyblue/5 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-2">Available in your area</h3>
            <p className="text-sm text-gray-600">
              We currently deliver to all residential areas within the city limits.
              Orders placed before 2PM are eligible for same-day delivery.
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
          <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>
          <p className="text-gray-600 mb-4">
            Browse our selection and have your favorite beverages delivered directly to your door.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-navyblue/5 rounded-lg">
              <h3 className="font-medium">Wine Categories</h3>
              <p className="text-sm text-gray-600 mt-1">
                Red, White, Rosé, Sparkling, Dessert, and more
              </p>
            </div>
            
            <div className="p-4 bg-navyblue/5 rounded-lg">
              <h3 className="font-medium">Spirits</h3>
              <p className="text-sm text-gray-600 mt-1">
                Whiskey, Vodka, Gin, Rum, Tequila, Brandy, and Liqueurs
              </p>
            </div>
            
            <div className="p-4 bg-navyblue/5 rounded-lg">
              <h3 className="font-medium">Craft & Special</h3>
              <p className="text-sm text-gray-600 mt-1">
                Craft beers, Artisanal spirits, and Limited editions
              </p>
            </div>
          </div>
          
          <Button 
            onClick={handleOrderClick}
            className="w-full bg-navyblue hover:bg-navyblue/90"
          >
            Browse Full Selection
          </Button>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default WineService;
