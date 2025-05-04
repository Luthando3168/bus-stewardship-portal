
import React from "react";
import { Badge } from "@/components/ui/badge";

interface AvailabilityBadgeProps {
  availability: 'full' | 'am' | 'pm' | string;
}

const AvailabilityBadge = ({ availability }: AvailabilityBadgeProps) => {
  switch (availability) {
    case 'full':
      return <Badge className="bg-green-100 text-green-800 border-green-300">Full Day</Badge>;
    case 'am':
      return <Badge className="bg-blue-100 text-blue-800 border-blue-300">Morning</Badge>;
    case 'pm':
      return <Badge className="bg-amber-100 text-amber-800 border-amber-300">Afternoon</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800 border-gray-300">Unavailable</Badge>;
  }
};

export default AvailabilityBadge;
