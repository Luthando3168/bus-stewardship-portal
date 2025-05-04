
import { useState } from 'react';
import { toast } from "sonner";
import { Business } from './types/fundTypes';

export interface CartItem {
  id: string;
  title: string;
  fund: string;
  amount: number;
  minInvestment: number;
}

const generateOrderNumber = () => {
  const prefix = "MCA";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}-${timestamp}-${random}`;
};

export function useCart(initialWalletBalance = 245000) {
  const [walletBalance, setWalletBalance] = useState(initialWalletBalance);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  
  const totalInvestmentAmount = cartItems.reduce((total, item) => total + item.amount, 0);

  const handleAddToCart = (business: Business, fundName: string, amount = business.minInvestment) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === business.id);
    
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].amount = amount;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, {
        id: business.id,
        title: business.title,
        fund: fundName,
        amount: amount,
        minInvestment: business.minInvestment
      }]);
    }
    
    toast.success(`${business.title} added to your investment cart`);
  };

  const handleRemoveFromCart = (businessId: string) => {
    setCartItems(cartItems.filter(item => item.id !== businessId));
    toast.success("Item removed from cart");
  };

  const handleUpdateCartItemAmount = (businessId: string, amount: number) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === businessId) {
        return {...item, amount};
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    if (totalInvestmentAmount > walletBalance) {
      toast.error("Insufficient funds in your wallet. Please add funds before investing.");
      return;
    }

    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    
    toast.success(`Order #${newOrderNumber} has been processed successfully!`);
    setWalletBalance(walletBalance - totalInvestmentAmount);
    
    const fundGroups = cartItems.reduce((acc: Record<string, number>, item) => {
      acc[item.fund] = (acc[item.fund] || 0) + 1;
      return acc;
    }, {});
    
    const fundSummary = Object.entries(fundGroups)
      .map(([fund, count]) => `${count} deal${count > 1 ? 's' : ''} from ${fund}`)
      .join(', ');
    
    toast.success(`Your investments (${fundSummary}) have been moved to Pending Deals`);
    
    setCartItems([]);
    setIsCartOpen(false);
  };

  return {
    walletBalance,
    cartItems,
    isCartOpen,
    setIsCartOpen,
    orderNumber,
    totalInvestmentAmount,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateCartItemAmount,
    handleCheckout
  };
}
