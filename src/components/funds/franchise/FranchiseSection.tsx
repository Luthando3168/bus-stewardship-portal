
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ChevronDown, Info, ShoppingBag } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter 
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger, 
  DialogFooter
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SafeNoteModal from "@/components/funds/property/SafeNoteModal";

interface Franchise {
  id: string;
  name: string;
  logo: string;
  description: string;
  fullCost: number;
  minInvestment: number;
  progress: number;
  locations: string[];
}

const franchises: Franchise[] = [
  {
    id: "steers",
    name: "Steers",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    description: "South Africa's leading burger chain with flame-grilled patties and handmade chips.",
    fullCost: 2500000,
    minInvestment: 25000, // 1% of full cost
    progress: 68,
    locations: ["Sandton", "Cape Town", "Durban"]
  },
  {
    id: "debonairs",
    name: "Debonairs Pizza",
    logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
    description: "Leading pizza delivery brand with innovative products and nationwide presence.",
    fullCost: 2000000,
    minInvestment: 20000,
    progress: 75,
    locations: ["Johannesburg", "Pretoria", "Port Elizabeth"]
  },
  {
    id: "wimpy",
    name: "Wimpy",
    logo: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop",
    description: "Family restaurant chain serving breakfast, burgers, and classic comfort food.",
    fullCost: 2200000,
    minInvestment: 22000,
    progress: 45,
    locations: ["Centurion", "Bloemfontein", "East London"]
  },
  {
    id: "burger-king",
    name: "Burger King",
    logo: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=200&fit=crop",
    description: "Global burger brand featuring the famous flame-grilled Whopper.",
    fullCost: 3500000,
    minInvestment: 35000,
    progress: 52,
    locations: ["Cape Town", "Durban North", "Menlyn Mall"]
  },
  {
    id: "pedros",
    name: "Pedro's",
    logo: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop",
    description: "Flame-grilled chicken restaurant offering affordable meals with a Portuguese twist.",
    fullCost: 1500000,
    minInvestment: 15000,
    progress: 38,
    locations: ["Soweto", "Midrand", "Pinetown"]
  },
  {
    id: "fish-and-co",
    name: "The Fish & Co",
    logo: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=200&fit=crop",
    description: "Seafood chain specializing in fish and chips and other seafood offerings.",
    fullCost: 1800000,
    minInvestment: 18000,
    progress: 29,
    locations: ["Sea Point", "Umhlanga", "Camps Bay"]
  },
  {
    id: "anat",
    name: "Anat",
    logo: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=200&fit=crop",
    description: "Middle Eastern cuisine featuring falafel, shawarma, and fresh salads.",
    fullCost: 1200000,
    minInvestment: 12000,
    progress: 65,
    locations: ["Sandton City", "Mall of Africa", "Gateway"]
  },
  {
    id: "spur",
    name: "Spur Steak Ranches",
    logo: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
    description: "Family-friendly steak house known for burgers, ribs, and signature onion rings.",
    fullCost: 2800000,
    minInvestment: 28000,
    progress: 82,
    locations: ["Nationwide", "Fourways", "Canal Walk"]
  },
  {
    id: "chicken-licken",
    name: "Chicken Licken",
    logo: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop",
    description: "South African chicken fast-food chain famous for hot wings and soul food.",
    fullCost: 2400000,
    minInvestment: 24000,
    progress: 71,
    locations: ["Nationwide", "Alexandra", "Soweto"]
  },
  {
    id: "kfc",
    name: "KFC",
    logo: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=300&h=200&fit=crop",
    description: "Global fried chicken chain with the Colonel's secret blend of herbs and spices.",
    fullCost: 4000000,
    minInvestment: 40000,
    progress: 90,
    locations: ["Nationwide", "Major Malls", "Townships"]
  },
  {
    id: "mcdonalds",
    name: "McDonald's",
    logo: "https://images.unsplash.com/photo-1552526881-721ce8509abe?w=300&h=200&fit=crop",
    description: "World's largest fast food chain, offering burgers, fries, and the iconic Big Mac.",
    fullCost: 4500000,
    minInvestment: 45000,
    progress: 86,
    locations: ["Nationwide", "Major Cities", "Tourist Areas"]
  },
  {
    id: "tiger-milk",
    name: "Tiger Milk",
    logo: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=200&fit=crop",
    description: "Trendy restaurant and bar concept with gourmet comfort food and craft cocktails.",
    fullCost: 3200000,
    minInvestment: 32000,
    progress: 42,
    locations: ["Cape Town", "Johannesburg", "Pretoria"]
  }
];

const FranchiseSection: React.FC = () => {
  const [selectedFranchise, setSelectedFranchise] = useState<Franchise | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [investment, setInvestment] = useState<string>("");
  const [safeNoteOpen, setSafeNoteOpen] = useState(false);
  const [safeNote, setSafeNote] = useState<any>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and validate against minimum investment
    if (value === "" || /^\d+$/.test(value)) {
      setInvestment(value);
    }
  };

  const handleInvestClick = (franchise: Franchise) => {
    setSelectedFranchise(franchise);
    setInvestment(franchise.minInvestment.toString());
    setIsDialogOpen(true);
  };

  const handleConfirmInvestment = () => {
    if (!selectedFranchise) return;
    
    const amount = Number(investment);
    
    if (amount < selectedFranchise.minInvestment) {
      toast.error(`Minimum investment for ${selectedFranchise.name} is R${selectedFranchise.minInvestment}`);
      return;
    }
    
    // Generate a SAFE Note
    const referenceNumber = `MCA-FR-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
    
    setSafeNote({
      id: referenceNumber,
      referenceNumber: referenceNumber,
      investorName: "Demo User",
      property: selectedFranchise.name,
      propertyUnit: "Franchise Investment",
      investmentAmount: amount,
      investmentDate: new Date().toISOString(),
      expectedReturn: "12-15% p.a.",
      metadata: {
        propertyId: selectedFranchise.id,
        locationCoordinates: selectedFranchise.locations.join(", "),
        propertyManager: "MCA Direct Franchise Management",
        investmentTerm: "5 years with option to extend"
      }
    });
    
    setIsDialogOpen(false);
    setSafeNoteOpen(true);
    
    // Update progress bar (in a real app, this would be saved to a database)
    toast.success(`Successfully invested R${amount} in ${selectedFranchise.name} franchise!`);
  };
  
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-8 mt-8">
      <div>
        <h2 className="text-2xl font-bold text-navyblue">Available Franchise Opportunities</h2>
        <p className="text-gray-600 mt-2">
          Invest in South Africa's most popular quick service restaurants with as little as 1% ownership.
          All franchises are professionally managed by our team.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {franchises.map((franchise) => (
          <Card key={franchise.id} className="overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img 
                src={franchise.logo} 
                alt={franchise.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{franchise.name}</CardTitle>
              <CardDescription>
                Full franchise cost: R{franchise.fullCost.toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Investment progress</span>
                  <span>{franchise.progress}%</span>
                </div>
                <Progress value={franchise.progress} className="h-2" />
              </div>
              
              <div className="text-sm">
                <p className="font-semibold">
                  Min investment: R{franchise.minInvestment.toLocaleString()}
                </p>
              </div>
              
              <div 
                className="cursor-pointer flex items-center text-sm text-blue-600 hover:text-blue-800"
                onClick={() => toggleExpand(franchise.id)}
              >
                <span>More details</span>
                <ChevronDown 
                  className={`ml-1 h-4 w-4 transition-transform ${expandedId === franchise.id ? 'rotate-180' : ''}`} 
                />
              </div>
              
              {expandedId === franchise.id && (
                <div className="pt-2 text-sm text-gray-600 space-y-2 border-t border-gray-100">
                  <p>{franchise.description}</p>
                  <div>
                    <span className="font-semibold block">Available locations:</span>
                    <p>{franchise.locations.join(", ")}</p>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={() => handleInvestClick(franchise)}
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Invest Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Invest in {selectedFranchise?.name}</DialogTitle>
            <DialogDescription>
              Enter the amount you wish to invest. Minimum investment is R{selectedFranchise?.minInvestment.toLocaleString()}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-2">
              <Info size={18} className="text-amber-500" />
              <p className="text-sm text-gray-500">
                This amount will be deducted from your available wallet balance.
              </p>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="investment" className="text-right">
                Amount
              </Label>
              <div className="col-span-3 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">R</span>
                <Input
                  id="investment"
                  value={investment}
                  onChange={handleInvestmentChange}
                  className="pl-8"
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="submit" onClick={handleConfirmInvestment}>Confirm Investment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* SAFE Note Modal */}
      {safeNote && (
        <SafeNoteModal
          open={safeNoteOpen}
          onOpenChange={setSafeNoteOpen}
          safeNote={safeNote}
        />
      )}
    </div>
  );
};

export default FranchiseSection;
