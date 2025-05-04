
import { ServiceProvider } from "./serviceProviders";

export type RequestStatus = 
  | 'pending' 
  | 'accepted' 
  | 'completed' 
  | 'cancelled' 
  | 'dispute';

export type PaymentStatus = 
  | 'awaiting_payment' 
  | 'in_escrow' 
  | 'released' 
  | 'refunded';

export interface ServiceRequest {
  id: string;
  userId: string;
  providerId: string;
  service: string;
  description: string;
  requestDate: string;
  serviceDate: string;
  duration: number; // in hours
  status: RequestStatus;
  payment: {
    amount: number;
    status: PaymentStatus;
  };
  providerRating?: {
    rating: number;
    comment: string;
    date: string;
  };
  userRating?: {
    rating: number;
    comment: string;
    date: string;
  };
  dispute?: {
    id: string;
    reason: string;
    description: string;
    status: 'open' | 'in_mediation' | 'resolved';
    resolution?: string;
  };
}

// Sample data for service requests
export const serviceRequests: ServiceRequest[] = [
  {
    id: "req1",
    userId: "user1",
    providerId: "provider1",
    service: "housekeeping",
    description: "Weekly cleaning of a 3-bedroom house.",
    requestDate: "2025-05-01",
    serviceDate: "2025-05-10",
    duration: 4,
    status: "completed",
    payment: {
      amount: 880,
      status: "released"
    },
    providerRating: {
      rating: 5,
      comment: "Maria did an excellent job! The house is spotless.",
      date: "2025-05-10"
    },
    userRating: {
      rating: 5,
      comment: "Great client, clear instructions and respectful.",
      date: "2025-05-10"
    }
  },
  {
    id: "req2",
    userId: "user1",
    providerId: "provider2",
    service: "gardening",
    description: "Monthly garden maintenance including lawn mowing and plant care.",
    requestDate: "2025-05-02",
    serviceDate: "2025-05-15",
    duration: 5,
    status: "accepted",
    payment: {
      amount: 900,
      status: "in_escrow"
    }
  },
  {
    id: "req3",
    userId: "user1",
    providerId: "provider3",
    service: "childcare",
    description: "Childcare for 2 children (ages 4 and 6) while parents are out for dinner.",
    requestDate: "2025-05-03",
    serviceDate: "2025-05-20",
    duration: 4,
    status: "pending",
    payment: {
      amount: 1000,
      status: "awaiting_payment"
    }
  },
  {
    id: "req4",
    userId: "user2",
    providerId: "provider1",
    service: "housekeeping",
    description: "Deep cleaning of kitchen and bathrooms.",
    requestDate: "2025-04-28",
    serviceDate: "2025-05-08",
    duration: 3,
    status: "dispute",
    payment: {
      amount: 660,
      status: "in_escrow"
    },
    dispute: {
      id: "disp1",
      reason: "service_quality",
      description: "The bathroom wasn't properly cleaned as agreed.",
      status: "in_mediation"
    }
  }
];
