
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { useState } from "react";

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
  onUpdateCartItemAmount: (id: string, amount: number) => void;
  onCheckout: () => void;
  orderNumber: string | null;
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
  orderNumber,
}: InvestmentCartProps) => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  
  // Group items by fund
  const itemsByFund: Record<string, CartItem[]> = {};
  cartItems.forEach(item => {
    if (!itemsByFund[item.fund]) {
      itemsByFund[item.fund] = [];
    }
    itemsByFund[item.fund].push(item);
  });

  const handleCheckout = () => {
    setPaymentSuccessful(true);
    onCheckout();
    
    // Reset success state after a few seconds
    setTimeout(() => {
      setPaymentSuccessful(false);
    }, 3000);
  };
  
  const insufficientFunds = totalInvestmentAmount > walletBalance;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Investment Cart</DialogTitle>
          <DialogDescription>
            Review your selected investment opportunities before proceeding.
          </DialogDescription>
        </DialogHeader>

        {cartItems.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">Your investment cart is empty.</p>
            <p className="text-sm mt-2">
              Browse our investment opportunities and add items to your cart.
            </p>
          </div>
        ) : (
          <>
            {Object.entries(itemsByFund).map(([fund, items]) => (
              <div key={fund} className="mb-4">
                <h3 className="font-semibold text-navyblue mb-2">{fund}</h3>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start justify-between gap-2">
                      <div className="flex-grow">
                        <p className="font-medium text-sm">{item.title}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-muted-foreground mr-2">Amount:</span>
                          <Input
                            type="number"
                            min={item.minInvestment}
                            value={item.amount}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (!isNaN(value) && value >= item.minInvestment) {
                                onUpdateCartItemAmount(item.id, value);
                              }
                            }}
                            className="h-8 w-28"
                          />
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
                <Separator className="my-3" />
              </div>
            ))}

            <div className="space-y-4 pt-2">
              <div className="flex justify-between">
                <span className="font-medium">Total Investment:</span>
                <span className="font-bold">R {totalInvestmentAmount.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="font-medium">Wallet Balance:</span>
                <span className={`font-bold ${insufficientFunds ? 'text-red-600' : 'text-green-600'}`}>
                  R {walletBalance.toLocaleString()}
                </span>
              </div>
              
              {insufficientFunds && (
                <div className="bg-red-50 text-red-800 p-3 rounded text-sm">
                  Insufficient funds in your wallet. Please add funds before proceeding.
                </div>
              )}
              
              {orderNumber && (
                <div className="bg-green-50 text-green-800 p-3 rounded text-sm">
                  <p className="font-medium">Order completed successfully!</p>
                  <p>Order Number: {orderNumber}</p>
                </div>
              )}
            </div>

            <DialogFooter>
              <Button 
                type="submit" 
                onClick={handleCheckout}
                disabled={cartItems.length === 0 || insufficientFunds || paymentSuccessful}
                className="w-full bg-gold hover:bg-lightgold"
              >
                {paymentSuccessful ? (
                  <span className="flex items-center">
                    <Check className="mr-2 h-4 w-4" /> Payment Complete
                  </span>
                ) : (
                  `Pay with Standard Bank Wallet - R ${totalInvestmentAmount.toLocaleString()}`
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InvestmentCart;
