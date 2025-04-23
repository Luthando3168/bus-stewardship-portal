
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InvestmentsTable = () => {
  return (
    <div className="rounded-md border">
      <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium">
        <div>Investment</div>
        <div>Fund</div>
        <div>Amount</div>
        <div>Return</div>
        <div>Status</div>
      </div>
      <div className="divide-y">
        <div className="text-center py-8 text-muted-foreground">
          No investments yet. Browse our opportunities to start investing.
        </div>
      </div>
    </div>
  );
};

export default InvestmentsTable;
