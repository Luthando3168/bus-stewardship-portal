
import React from "react";
import { Home, ArrowUpDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PropertyFilterTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: React.ReactNode;
}

const PropertyFilterTabs = ({ activeTab, setActiveTab, children }: PropertyFilterTabsProps) => {
  return (
    <Tabs defaultValue="buy" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="buy">
          <Home className="h-4 w-4 mr-2" />
          Buy
        </TabsTrigger>
        <TabsTrigger value="rent">
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Rent
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value={activeTab}>
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default PropertyFilterTabs;
