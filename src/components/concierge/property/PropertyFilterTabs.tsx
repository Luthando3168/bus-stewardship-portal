
import React from "react";
import { Home, ArrowUpDown, ArrowDownUp, SortAsc } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PropertyFilterTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  children: React.ReactNode;
}

const PropertyFilterTabs = ({ 
  activeTab, 
  setActiveTab, 
  sortOption,
  setSortOption,
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

        <div className="mt-4 sm:mt-0 flex items-center">
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
      
      <TabsContent value={activeTab}>
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default PropertyFilterTabs;
