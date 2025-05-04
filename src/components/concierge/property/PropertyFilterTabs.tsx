
import React from "react";
import { Home, ArrowUpDown, ArrowDownUp, SortAsc, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface PropertyFilterTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  showFavoritesOnly: boolean;
  toggleFavoritesFilter: () => void;
  favoritesCount: number;
  children: React.ReactNode;
}

const PropertyFilterTabs = ({ 
  activeTab, 
  setActiveTab, 
  sortOption,
  setSortOption,
  showFavoritesOnly,
  toggleFavoritesFilter,
  favoritesCount,
  children 
}: PropertyFilterTabsProps) => {
  return (
    <Tabs defaultValue="buy" value={activeTab} onValueChange={setActiveTab}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <TabsList>
          <TabsTrigger value="buy">
            <Home className="h-4 w-4 mr-2" />
            Buy
          </TabsTrigger>
          <TabsTrigger value="rent">
            <ArrowUpDown className="h-4 w-4 mr-2" />
            Rent
          </TabsTrigger>
        </TabsList>

        <div className="mt-4 sm:mt-0 flex items-center gap-3">
          <button 
            onClick={toggleFavoritesFilter}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm transition-colors ${
              showFavoritesOnly 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Heart className={`h-3.5 w-3.5 ${showFavoritesOnly ? 'fill-white' : ''}`} />
            Favorites
            {favoritesCount > 0 && (
              <Badge className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-white text-red-500 text-xs">
                {favoritesCount}
              </Badge>
            )}
          </button>
          
          <div className="flex items-center">
            <SortAsc className="h-4 w-4 mr-2 text-navyblue" />
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px] border-gold focus:ring-gold">
                <SelectValue placeholder="Sort properties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default sorting</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="size-asc">Size: Small to Large</SelectItem>
                <SelectItem value="size-desc">Size: Large to Small</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <TabsContent value={activeTab}>
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default PropertyFilterTabs;
