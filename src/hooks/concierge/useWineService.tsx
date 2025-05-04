
import { useState } from 'react';

// Define our data types
export interface WineProduct {
  name: string;
  price: string;
  type: string;
  image: string;
}

export interface WineCategory {
  name: string;
  count: number;
  image: string;
}

export const useWineService = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isViewingCategory, setIsViewingCategory] = useState(false);
  
  // Our category data
  const categories: Record<string, WineCategory> = {
    "Wine": { 
      name: "Wine", 
      count: 6,
      image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?q=80&w=300" 
    },
    "Spirits": { 
      name: "Spirits", 
      count: 6,
      image: "https://images.unsplash.com/photo-1583873483346-ac89dfff3619?q=80&w=300" 
    },
    "Beer & Cider": { 
      name: "Beer & Cider", 
      count: 6,
      image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=300" 
    },
    "Ready To Drink": { 
      name: "Ready To Drink", 
      count: 6,
      image: "https://images.unsplash.com/photo-1598811629267-feccfbc48fca?q=80&w=300" 
    },
    "Non-Alcoholic": { 
      name: "Non-Alcoholic", 
      count: 6,
      image: "https://images.unsplash.com/photo-1619635098438-4219561908ed?q=80&w=300" 
    }
  };
  
  // Product data by category
  const products: Record<string, WineProduct[]> = {
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
    setSelectedCategory(category);
    setIsViewingCategory(true);
  };

  const goBackToCategories = () => {
    setIsViewingCategory(false);
    setSelectedCategory(null);
  };

  const handleOrderClick = () => {
    console.log("Order button clicked");
    // Additional order processing logic would go here
  };

  return {
    selectedCategory,
    products,
    categories: Object.keys(categories).map(key => ({
      name: key,
      ...categories[key]
    })),
    handleCategoryClick,
    handleOrderClick,
    goBackToCategories,
    isViewingCategory,
    getProductsForCategory: (category: string) => products[category] || []
  };
};
