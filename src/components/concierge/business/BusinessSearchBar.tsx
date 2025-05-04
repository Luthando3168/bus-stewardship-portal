
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface BusinessSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BusinessSearchBar = ({ searchQuery, setSearchQuery }: BusinessSearchBarProps) => {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        type="text"
        placeholder="Search for business services or professionals..."
        className="pl-10"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default BusinessSearchBar;
