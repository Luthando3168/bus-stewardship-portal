
import React, { useState } from 'react';
import { mockAvailabilityData } from '@/utils/availabilityUtils';
import AvailabilityViewToggle from './AvailabilityViewToggle';
import AvailabilityListView from './AvailabilityListView';
import AvailabilityCalendarView from './AvailabilityCalendarView';

interface ProviderAvailabilityTableProps {
  providerId: string;
}

const ProviderAvailabilityTable = ({ providerId }: ProviderAvailabilityTableProps) => {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  
  // Get provider availability data
  const providerAvailability = mockAvailabilityData[providerId as keyof typeof mockAvailabilityData] || [];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-medium">Available Dates</h3>
        <AvailabilityViewToggle 
          viewMode={viewMode} 
          onViewModeChange={setViewMode}
        />
      </div>
      
      {viewMode === 'list' ? (
        <AvailabilityListView providerAvailability={providerAvailability} />
      ) : (
        <AvailabilityCalendarView providerAvailability={providerAvailability} />
      )}
    </div>
  );
};

export default ProviderAvailabilityTable;
