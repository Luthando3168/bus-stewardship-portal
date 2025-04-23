
import React from "react";

interface ImpactFundTabsProps {
  impactFunds: Array<{id: string; name: string;}>;
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

const ImpactFundTabs = ({ impactFunds, activeTab, onTabChange, className = "" }: ImpactFundTabsProps) => (
  <div className={`w-full overflow-x-auto py-2 ${className}`}>
    <div className="flex space-x-4 min-w-max">
      {impactFunds.map((fund) => (
        <button
          key={fund.id}
          onClick={() => onTabChange(fund.id)}
          className={`whitespace-nowrap px-4 py-2 rounded-full transition 
                  text-sm font-medium 
                  ${activeTab === fund.id 
                    ? "bg-white border border-navyblue text-navyblue shadow-sm" 
                    : "bg-muted text-gray-700 hover:bg-gray-200 border border-transparent"}`}
          aria-selected={activeTab === fund.id}
        >
          {fund.name.replace(" Impact Fund", "")}
        </button>
      ))}
    </div>
  </div>
);

export default ImpactFundTabs;
