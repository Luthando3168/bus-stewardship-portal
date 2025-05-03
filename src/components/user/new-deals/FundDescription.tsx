
import React from "react";

interface FundDescriptionProps {
  description?: string;
}

const FundDescription = ({ description }: FundDescriptionProps) => {
  if (!description) return null;
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg p-5 mb-6 border border-blue-200/50 shadow-sm">
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FundDescription;
