
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ImpactFundsFilterProps {
  onFilterChange: (minAmount: number | null) => void;
  onSearch: (searchTerm: string) => void;
}

const ImpactFundsFilter: React.FC<ImpactFundsFilterProps> = ({
  onFilterChange,
  onSearch,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search funds..."
            className="pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => onFilterChange(null)}
            className="flex-1 sm:flex-none"
          >
            All
          </Button>
          <Button
            variant="outline"
            onClick={() => onFilterChange(2000)}
            className="flex-1 sm:flex-none"
          >
            Under R2,000
          </Button>
          <Button
            variant="outline"
            onClick={() => onFilterChange(5000)}
            className="flex-1 sm:flex-none"
          >
            Under R5,000
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImpactFundsFilter;
