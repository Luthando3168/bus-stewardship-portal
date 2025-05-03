
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useNotifications } from "@/hooks/useNotifications";
import { toast } from "sonner";

// Mock pending deals data
const initialPendingDeals = [
  {
    id: 1,
    title: "Urban Farming - AgroUrban Oasis",
    fund: "MyFarm Impact Fund",
    amount: 10000,
    percentage: 65,
    date: "2023-04-15",
    status: "Awaiting Prospectus",
    region: "Cape Town"
  },
  {
    id: 2,
    title: "Student Accommodation",
    fund: "MyProperty Impact Fund",
    amount: 15000,
    percentage: 82,
    date: "2023-04-10",
    status: "Prospectus Issued",
    region: "Pretoria"
  },
  {
    id: 3,
    title: "Healthy Fast Food Outlet",
    fund: "MyFoodRetail Impact Fund",
    amount: 7500,
    percentage: 45,
    date: "2023-04-18",
    status: "Awaiting Prospectus",
    region: "KwaZulu-Natal"
  }
];

// Mock user data
const currentUser = {
  fullName: "John Smith",
  email: "john.smith@example.com",
  phone: "+27123456789"
};

const PendingDealsTab = () => {
  const [deals, setDeals] = useState(initialPendingDeals);
  const { notifyDealStatus } = useNotifications();
  
  // Simulate a deal status update
  const handleDealUpdate = async (dealId: number, newStatus: "Awaiting Prospectus" | "Prospectus Issued" | "Completed") => {
    // Update the deal in the UI
    setDeals(prevDeals => 
      prevDeals.map(deal => 
        deal.id === dealId 
          ? { ...deal, status: newStatus } 
          : deal
      )
    );
    
    // Get the deal info for the notification
    const deal = deals.find(d => d.id === dealId);
    if (!deal) return;
    
    // Determine notification type based on status
    let statusType: "pending" | "approved" | "completed";
    
    switch (newStatus) {
      case "Prospectus Issued":
        statusType = "approved";
        break;
      case "Completed":
        statusType = "completed";
        break;
      default:
        statusType = "pending";
    }
    
    // Send notification
    try {
      await notifyDealStatus(
        currentUser,
        statusType,
        deal.title
      );
      toast.success(`Deal status updated and notification sent`);
    } catch (error) {
      console.error("Failed to send notification:", error);
      toast.error("Deal status updated but failed to send notification");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Deals</CardTitle>
        <CardDescription>
          Track the status of your pending investments as they progress toward completion
        </CardDescription>
      </CardHeader>
      <CardContent>
        {deals.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-muted-foreground">You have no pending investment deals at this time.</p>
          </div>
        ) : (
          <div className="space-y-5">
            {deals.map(deal => (
              <Card key={deal.id} className="overflow-hidden border-t-4 border-t-amber-500">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{deal.title}</CardTitle>
                      <CardDescription>{deal.fund} | {deal.region}</CardDescription>
                    </div>
                    <Badge className={deal.status === "Prospectus Issued" ? "bg-green-600" : "bg-amber-600"}>
                      {deal.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Funding Progress</span>
                        <span>{deal.percentage}%</span>
                      </div>
                      <Progress value={deal.percentage} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Your Investment</p>
                        <p className="font-medium">R {deal.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Investment Date</p>
                        <p className="font-medium">{new Date(deal.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    {deal.status === "Awaiting Prospectus" && (
                      <div className="pt-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDealUpdate(deal.id, "Prospectus Issued")}
                        >
                          Demo: Issue Prospectus
                        </Button>
                      </div>
                    )}
                    
                    {deal.status === "Prospectus Issued" && deal.percentage >= 80 && (
                      <div className="pt-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDealUpdate(deal.id, "Completed")}
                        >
                          Demo: Mark as Completed
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 text-sm text-muted-foreground">
                  {deal.status === "Awaiting Prospectus" ? 
                    "You'll receive a notification when the prospectus is issued." : 
                    "Prospectus has been issued. Your investment will be automatically processed."}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PendingDealsTab;
