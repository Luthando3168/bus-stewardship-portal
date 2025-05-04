
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  link: string;
  ownershipNote?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  link,
  ownershipNote,
}) => {
  return (
    <Link to={link}>
      <Card className="overflow-hidden transition-all hover:shadow-md hover:scale-[1.02] duration-300">
        <div className={cn("p-6", bgColor)}>
          <div className="flex justify-between items-start">
            <Icon className={cn("h-8 w-8", color)} />
            {ownershipNote && (
              <Badge variant="secondary" className="ml-2 bg-gold/10 text-gold border-gold/20">
                {ownershipNote}
              </Badge>
            )}
          </div>
          <h3 className="mt-3 font-medium text-lg text-navyblue">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <CardContent className="p-4 bg-white">
          <div className="text-sm font-medium text-navyblue flex items-center justify-end">
            View details <span className="ml-1">→</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
