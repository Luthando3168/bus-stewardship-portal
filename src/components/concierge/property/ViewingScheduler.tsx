
import React from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ViewingSchedulerProps {
  viewingDate: string;
  setViewingDate: (date: string) => void;
  onRequestViewing: () => void;
}

const ViewingScheduler = ({ 
  viewingDate, 
  setViewingDate, 
  onRequestViewing 
}: ViewingSchedulerProps) => {
  return (
    <div className="border-t pt-4 mt-4">
      <h3 className="font-medium mb-4">Schedule a viewing</h3>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-navyblue" />
            <Select value={viewingDate} onValueChange={setViewingDate}>
              <SelectTrigger>
                <SelectValue placeholder="Select date and time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025-05-05-10">May 5, 2025 - 10:00 AM</SelectItem>
                <SelectItem value="2025-05-05-14">May 5, 2025 - 2:00 PM</SelectItem>
                <SelectItem value="2025-05-06-09">May 6, 2025 - 9:00 AM</SelectItem>
                <SelectItem value="2025-05-06-15">May 6, 2025 - 3:00 PM</SelectItem>
                <SelectItem value="2025-05-07-11">May 7, 2025 - 11:00 AM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button 
          className="bg-navyblue hover:bg-navyblue/90 text-white" 
          onClick={onRequestViewing}
        >
          Request Viewing
        </Button>
      </div>
    </div>
  );
};

export default ViewingScheduler;
