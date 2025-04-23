
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Investment {
  name: string;
  fund: string;
  amount: string;
  return: string;
  status: string;
}

const investments: Investment[] = [
  {
    name: "Downtown Office Building",
    fund: "MyProperty Impact Fund",
    amount: "R 120,000.00",
    return: "+8.5%",
    status: "Active",
  },
  {
    name: "Solar Farm Project",
    fund: "MyEnergy Impact Fund",
    amount: "R 85,000.00",
    return: "+11.2%",
    status: "Active",
  },
  {
    name: "Organic Farm Expansion",
    fund: "MyFarm Impact Fund",
    amount: "R 40,000.00",
    return: "+6.8%",
    status: "Active",
  },
];

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
        {investments.map((investment, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-5 p-4">
            <div>{investment.name}</div>
            <div>{investment.fund}</div>
            <div>{investment.amount}</div>
            <div className="text-green-600">{investment.return}</div>
            <div>{investment.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentsTable;
