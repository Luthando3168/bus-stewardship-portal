
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { formatDateForComparison, generateDates, AvailabilityEntry } from "@/utils/availabilityUtils";
import AvailabilityBadge from './AvailabilityBadge';

interface AvailabilityListViewProps {
  providerAvailability: AvailabilityEntry[];
}

const AvailabilityListView = ({ providerAvailability }: AvailabilityListViewProps) => {
  const dates = generateDates();

  return (
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
                    <AvailabilityBadge availability={availability.availability} /> : 
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
  );
};

export default AvailabilityListView;
