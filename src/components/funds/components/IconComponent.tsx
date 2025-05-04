
import React from "react";
import { Users, Briefcase, Banknote, FileText } from "lucide-react";

// We need to add the ChartBar icon since it's not directly available in lucide-react
// Creating a custom ChartBar icon component based on common chart bar icon styling
const ChartBar = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="12" width="4" height="8" />
      <rect x="10" y="8" width="4" height="12" />
      <rect x="17" y="4" width="4" height="16" />
    </svg>
  );
};

interface IconComponentProps {
  name: string;
}

const IconComponent = ({ name }: IconComponentProps) => {
  switch (name) {
    case "users":
      return <Users className="w-6 h-6" />;
    case "briefcase":
      return <Briefcase className="w-6 h-6" />;
    case "banknote":
      return <Banknote className="w-6 h-6" />;
    case "fileText":
      return <FileText className="w-6 h-6" />;
    case "chartBar":
      return <ChartBar className="w-6 h-6" />;
    default:
      return null;
  }
};

export default IconComponent;
