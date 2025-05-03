
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface PageHeaderProps {
  walletBalance: number;
  cartItemsCount: number;
  onOpenCart: () => void;
}

const PageHeader = ({ walletBalance, cartItemsCount, onOpenCart }: PageHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 className="text-2xl font-bold text-navyblue">Business Opportunities</h2>
        <p className="text-muted-foreground">Browse and select business deals from our impact funds</p>
      </div>
      <div className="flex items-center gap-4 self-end sm:self-auto">
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1">
          <span className="text-sm text-muted-foreground">Wallet Balance:</span>
          <span className="font-bold text-navyblue">R {walletBalance.toLocaleString()}</span>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={onOpenCart}
          className="relative"
        >
          <ShoppingCart size={20} />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItemsCount}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
