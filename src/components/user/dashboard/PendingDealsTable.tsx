
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PendingDeal {
  deal: string;
  fund: string;
  amount: string;
  orderNumber: string;
  status: string;
}

const pendingDeals: PendingDeal[] = [
  {
    deal: "Urban Farming Project",
    fund: "MyFarm Impact Fund",
    amount: "R 10,000.00",
    orderNumber: "MCA-583921-0472",
    status: "Processing",
  },
  {
    deal: "Student Accommodation",
    fund: "MyProperty Impact Fund",
    amount: "R 15,000.00",
    orderNumber: "MCA-583546-2187",
    status: "Pending Approval",
  },
];

const PendingDealsTable = () => {
  return (
    <>
      <div className="rounded-md border">
        <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
          <div>Deal</div>
          <div>Fund</div>
          <div>Amount</div>
          <div>Order Number</div>
          <div>Status</div>
        </div>
        <div className="divide-y">
          {pendingDeals.map((deal, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-5 p-4">
              <div>{deal.deal}</div>
              <div>{deal.fund}</div>
              <div>{deal.amount}</div>
              <div className="font-mono text-sm">{deal.orderNumber}</div>
              <div>{deal.status}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center pt-2">
        <Link to="/user/pending-deals">
          <Button variant="outline">View All Pending Deals</Button>
        </Link>
      </div>
    </>
  );
};

export default PendingDealsTable;
