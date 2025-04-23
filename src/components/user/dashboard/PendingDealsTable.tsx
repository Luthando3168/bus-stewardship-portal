
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          <div className="text-center py-8 text-muted-foreground">
            No pending deals. Start investing by browsing our opportunities.
          </div>
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
