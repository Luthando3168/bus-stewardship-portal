
// Generate the next 14 days for the table
export const generateDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  
  return dates;
};

// Format date as YYYY-MM-DD for comparison
export const formatDateForComparison = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export interface AvailabilityEntry {
  date: string;
  availability: 'full' | 'am' | 'pm';
  note: string;
}

// Mock data for provider availability
// In a real application, this would come from an API
export const mockAvailabilityData = {
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

export type ProviderAvailability = Record<string, AvailabilityEntry[]>;
