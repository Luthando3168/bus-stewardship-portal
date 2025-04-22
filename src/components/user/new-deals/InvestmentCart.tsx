
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";

interface CartItem {
  id: string;
  title: string;
  fund: string;
  amount: number;
  minInvestment: number;
}
interface InvestmentCartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems: CartItem[];
  walletBalance: number;
  totalInvestmentAmount: number;
  onRemoveFromCart: (id: string) => void;
  onUpdateCartItemAmount: (id: string, newAmount: number) => void;
  onCheckout: () => void;
}
const InvestmentCart = ({
  open,
  onOpenChange,
  cartItems,
  walletBalance,
  totalInvestmentAmount,
  onRemoveFromCart,
  onUpdateCartItemAmount,
  onCheckout,
}: InvestmentCartProps) => (
  <Sheet open={open} onOpenChange={onOpenChange}>
    <SheetContent className="w-full sm:max-w-md">
      <SheetHeader>
        <SheetTitle className="flex items-center">
          <ShoppingCart className="mr-2" size={18} />
          Your Investment Cart
        </SheetTitle>
      </SheetHeader>
      <div className="mt-6 space-y-5">
        {cartItems.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            Your investment cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col border rounded-md p-3">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.fund}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => onRemoveFromCart(item.id)}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground">
                      Minimum investment: R {item.minInvestment.toLocaleString()}
                    </p>
                    <div className="flex items-center mt-2">
                      <Label htmlFor={`amount-${item.id}`} className="mr-2">
                        Amount (R):
                      </Label>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => {
                            const newAmount = Math.max(item.minInvestment, (item.amount || 0) - 1000);
                            onUpdateCartItemAmount(item.id, newAmount);
                          }}
                        >
                          <Minus size={14} />
                        </Button>
                        <Input
                          id={`amount-${item.id}`}
                          type="number"
                          value={item.amount}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= item.minInvestment) {
                              onUpdateCartItemAmount(item.id, value);
                            }
                          }}
                          className="w-24 mx-2 text-right"
                          min={item.minInvestment}
                          step={1000}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => {
                            onUpdateCartItemAmount(item.id, (item.amount || 0) + 1000);
                          }}
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-3">
              <div className="flex justify-between">
                <p>Total Investment:</p>
                <p className="font-bold">R {totalInvestmentAmount.toLocaleString()}</p>
              </div>
              <div className="flex justify-between">
                <p>Your Wallet Balance:</p>
                <p className="font-bold">R {walletBalance.toLocaleString()}</p>
              </div>
              {totalInvestmentAmount > walletBalance && (
                <p className="text-red-500 text-sm">
                  Insufficient funds. Please add more funds to your wallet or reduce investment amount.
                </p>
              )}
            </div>
          </>
        )}
      </div>
      <SheetFooter className="mt-6">
        <div className="flex w-full flex-col space-y-3">
          <Button
            disabled={cartItems.length === 0 || totalInvestmentAmount > walletBalance}
            className="w-full bg-gold hover:bg-lightgold"
            onClick={onCheckout}
          >
            Checkout (R {totalInvestmentAmount.toLocaleString()})
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onOpenChange(false)}
          >
            Continue Shopping
          </Button>
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default InvestmentCart;
