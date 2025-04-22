
import React from "react";

interface ImpactFundTabsProps {
  impactFunds: Array<{id: string; name: string;}>;
  activeTab: string;
  onTabChange: (id: string) => void;
}
const ImpactFundTabs = ({ impactFunds, activeTab, onTabChange }: ImpactFundTabsProps) => (
  <div className="w-full overflow-x-auto py-2">
    <div className="flex space-x-2 min-w-max">
      {impactFunds.map((fund) => (
        <button
          key={fund.id}
          onClick={() => onTabChange(fund.id)}
          className={`whitespace-nowrap px-3 py-2 rounded-full transition 
                  text-sm font-medium shadow-none 
                  ${activeTab === fund.id 
                    ? "bg-white border border-navyblue text-navyblue" 
                    : "bg-muted text-gray-700 hover:bg-gray-200 border border-transparent"}`}
          style={{ minWidth: 120 }}
        >
          {fund.name.replace(" Impact Fund", "")}
        </button>
      ))}
    </div>
  </div>
);

export default ImpactFundTabs;
