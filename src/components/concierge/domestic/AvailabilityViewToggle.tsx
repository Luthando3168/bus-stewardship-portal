
import React from 'react';
import { Button } from '@/components/ui/button';

interface AvailabilityViewToggleProps {
  viewMode: 'list' | 'calendar';
  onViewModeChange: (mode: 'list' | 'calendar') => void;
}

const AvailabilityViewToggle = ({ viewMode, onViewModeChange }: AvailabilityViewToggleProps) => {
  return (
    <div className="flex gap-2">
      <Button 
        variant={viewMode === 'list' ? "default" : "outline"} 
        size="sm" 
        onClick={() => onViewModeChange('list')}
      >
        List View
      </Button>
      <Button 
        variant={viewMode === 'calendar' ? "default" : "outline"} 
        size="sm" 
        onClick={() => onViewModeChange('calendar')}
      >
        Calendar View
      </Button>
    </div>
  );
};

export default AvailabilityViewToggle;
