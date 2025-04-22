
import { useState } from "react";
import { AlertTriangle, Star } from "lucide-react";

interface FundDetails {
  name: string;
  description: string;
  currency: string;
  minInvestment: string;
  term: string;
  risk: string;
}

interface FundAccordionProps {
  funds: FundDetails[];
}

const FundAccordion = ({ funds }: FundAccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <div className="rounded-md border divide-y bg-white">
      {funds.map((fund, idx) => (
        <div key={fund.name}>
          <button
            className="w-full flex justify-between items-center px-4 py-3 text-left font-medium hover:bg-muted transition"
            onClick={() => toggleIndex(idx)}
            aria-expanded={openIndexes.includes(idx)}
          >
            <span>{fund.name}</span>
            <span>{openIndexes.includes(idx) ? "▲" : "▼"}</span>
          </button>
          {openIndexes.includes(idx) && (
            <div className="px-6 py-4 space-y-2 text-sm text-gray-700 bg-softgray">
              <div><span className="font-semibold">Description:</span> {fund.description}</div>
              <div><span className="font-semibold">Currency:</span> {fund.currency}</div>
              <div><span className="font-semibold">Minimum Investment:</span> {fund.minInvestment}</div>
              <div><span className="font-semibold">Term:</span> {fund.term}</div>
              <div><span className="font-semibold">Risk Profile:</span> {fund.risk}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FundAccordion;
