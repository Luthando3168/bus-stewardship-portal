
import React, { useState } from 'react';
import { Calendar } from "lucide-react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock data for provider availability
// In a real application, this would come from an API
const mockAvailabilityData = {
  provider1: [
    { date: '2025-05-12', availability: 'full', note: 'Available all day' },
    { date: '2025-05-13', availability: 'am', note: 'Available morning only' },
    { date: '2025-05-14', availability: 'pm', note: 'Available afternoon only' },
    { date: '2025-05-15', availability: 'full', note: '' },
    { date: '2025-05-16', availability: 'full', note: '' },
    { date: '2025-05-19', availability: 'full', note: '' },
    { date: '2025-05-20', availability: 'am', note: 'Available morning only' },
  ],
  provider2: [
    { date: '2025-05-12', availability: 'pm', note: 'Available afternoon only' },
    { date: '2025-05-14', availability: 'full', note: '' },
    { date: '2025-05-15', availability: 'full', note: '' },
    { date: '2025-05-16', availability: 'am', note: 'Available morning only' },
    { date: '2025-05-19', availability: 'full', note: '' },
    { date: '2025-05-21', availability: 'full', note: '' },
  ],
  provider3: [
    { date: '2025-05-13', availability: 'full', note: '' },
    { date: '2025-05-14', availability: 'full', note: '' },
    { date: '2025-05-17', availability: 'am', note: 'Available morning only' },
    { date: '2025-05-18', availability: 'pm', note: 'Available afternoon only' },
    { date: '2025-05-20', availability: 'full', note: '' },
    { date: '2025-05-21', availability: 'full', note: '' },
  ],
  provider4: [
    { date: '2025-05-12', availability: 'full', note: '' },
    { date: '2025-05-15', availability: 'full', note: '' },
    { date: '2025-05-16', availability: 'full', note: '' },
    { date: '2025-05-19', availability: 'am', note: 'Available morning only' },
    { date: '2025-05-20', availability: 'pm', note: 'Available afternoon only' },
    { date: '2025-05-21', availability: 'full', note: '' },
  ],
  provider5: [
    { date: '2025-05-12', availability: 'full', note: '' },
    { date: '2025-05-13', availability: 'full', note: '' },
    { date: '2025-05-14', availability: 'pm', note: 'Available afternoon only' },
    { date: '2025-05-18', availability: 'full', note: '' },
    { date: '2025-05-19', availability: 'full', note: '' },
    { date: '2025-05-20', availability: 'am', note: 'Available morning only' },
  ],
  provider6: [
    { date: '2025-05-13', availability: 'am', note: 'Available morning only' },
    { date: '2025-05-14', availability: 'full', note: '' },
    { date: '2025-05-15', availability: 'pm', note: 'Available afternoon only' },
    { date: '2025-05-16', availability: 'full', note: '' },
    { date: '2025-05-19', availability: 'full', note: '' },
    { date: '2025-05-21', availability: 'full', note: '' },
  ],
};

// Generate the next 14 days for the table
const generateDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  
  return dates;
};

interface ProviderAvailabilityTableProps {
  providerId: string;
}

const ProviderAvailabilityTable = ({ providerId }: ProviderAvailabilityTableProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const dates = generateDates();
  
  // Get provider availability data
  const providerAvailability = mockAvailabilityData[providerId] || [];
  
  // Format date as YYYY-MM-DD for comparison
  const formatDateForComparison = (date: Date) => {
    return date.toISOString().split('T')[0];
  };
  
  // Check if a date has availability
  const checkAvailability = (date: Date) => {
    const dateString = formatDateForComparison(date);
    return providerAvailability.find(a => a.date === dateString);
  };
  
  // Get availability badge color
  const getAvailabilityBadge = (availability: string) => {
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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-medium">Available Dates</h3>
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'list' ? "default" : "outline"} 
            size="sm" 
            onClick={() => setViewMode('list')}
          >
            List View
          </Button>
          <Button 
            variant={viewMode === 'calendar' ? "default" : "outline"} 
            size="sm" 
            onClick={() => setViewMode('calendar')}
          >
            Calendar View
          </Button>
        </div>
      </div>
      
      {viewMode === 'list' ? (
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Date</TableHead>
                <TableHead>Day</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead className="hidden md:table-cell">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dates.map((date, index) => {
                const dateString = formatDateForComparison(date);
                const availability = providerAvailability.find(a => a.date === dateString);
                
                return (
                  <TableRow key={index} className={availability ? "" : "opacity-50"}>
                    <TableCell className="font-medium">{date.toLocaleDateString('en-ZA')}</TableCell>
                    <TableCell>{date.toLocaleDateString('en-ZA', { weekday: 'short' })}</TableCell>
                    <TableCell>
                      {availability ? 
                        getAvailabilityBadge(availability.availability) : 
                        <Badge variant="outline" className="text-gray-400">Unavailable</Badge>
                      }
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {availability?.note || ''}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      ) : (
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
                      {getAvailabilityBadge(availability.availability)}
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
      )}
    </div>
  );
};

export default ProviderAvailabilityTable;
