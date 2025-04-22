
import React from 'react';
import UserLayout from "@/components/layout/UserLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock pending deals data
const pendingDeals = [
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

const UserPendingDeals = () => {
  return (
    <UserLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navyblue">Pending Deals</h2>
        <p className="text-muted-foreground">
          Track the status of your pending investments as they progress toward completion.
          Once a deal reaches 100% funding, it will move to the My Investments section.
        </p>
        
        {pendingDeals.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center">
              <p className="text-muted-foreground">You have no pending investment deals at this time.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-5">
            {pendingDeals.map(deal => (
              <Card key={deal.id}>
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
      </div>
    </UserLayout>
  );
};

export default UserPendingDeals;
