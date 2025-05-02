
import React from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardSummaryCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

const DashboardSummaryCard = ({
  title,
  value,
  description,
  icon: Icon,
}: DashboardSummaryCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Icon size={18} className="text-navyblue" />
          </div>
        </div>
        <p className="mt-2 text-2xl font-bold">{value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};

export default DashboardSummaryCard;
