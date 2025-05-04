
import React, { useState } from 'react';
import { Calendar } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from '@/lib/utils';
import { formatDateForComparison, AvailabilityEntry } from "@/utils/availabilityUtils";
import AvailabilityBadge from './AvailabilityBadge';

interface AvailabilityCalendarViewProps {
  providerAvailability: AvailabilityEntry[];
}

const AvailabilityCalendarView = ({ providerAvailability }: AvailabilityCalendarViewProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  
  // Check if a date has availability
  const checkAvailability = (date: Date) => {
    const dateString = formatDateForComparison(date);
    return providerAvailability.find(a => a.date === dateString);
  };

  return (
    <div className="border rounded-md p-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !selectedDate && "text-muted-foreground"
            )}
          >
            <Calendar className="mr-2 h-4 w-4" />
            {selectedDate ? (
              selectedDate.toLocaleDateString('en-ZA')
            ) : (
              <span>Select a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <CalendarComponent
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
            modifiers={{
              available: (date) => {
                const availability = checkAvailability(date);
                return !!availability;
              }
            }}
            modifiersStyles={{
              available: { backgroundColor: '#ecfdf5', color: '#047857', fontWeight: 'bold' }
            }}
          />
        </PopoverContent>
      </Popover>
      
      {selectedDate && (
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <h4 className="text-sm font-medium mb-2">Availability for {selectedDate.toLocaleDateString('en-ZA')}</h4>
          {(() => {
            const availability = checkAvailability(selectedDate);
            
            if (!availability) {
              return <p className="text-gray-500 text-sm">Provider is not available on this date</p>;
            }
            
            return (
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <span className="text-sm">Status:</span>
                  <AvailabilityBadge availability={availability.availability} />
                </div>
                {availability.note && (
                  <div>
                    <span className="text-sm text-gray-500">{availability.note}</span>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default AvailabilityCalendarView;
