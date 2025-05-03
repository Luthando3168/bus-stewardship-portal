
import React from "react";

interface FundDescriptionProps {
  description?: string;
}

const FundDescription = ({ description }: FundDescriptionProps) => {
  if (!description) return null;
  
  return (
    <div className="bg-blue-50 rounded-lg p-4 mb-4">
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FundDescription;
