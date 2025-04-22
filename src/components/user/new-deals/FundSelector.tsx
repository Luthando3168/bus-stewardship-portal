
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FundSelectorProps {
  funds: { id: string; name: string }[];
  value: string;
  onChange: (id: string) => void;
}

const FundSelector = ({ funds, value, onChange }: FundSelectorProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Impact Fund" />
      </SelectTrigger>
      <SelectContent>
        {funds.map(fund => (
          <SelectItem key={fund.id} value={fund.id}>
            {fund.name.replace(" Impact Fund", "")}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default FundSelector;
