
import { ServiceType } from "@/components/concierge/domestic/ServiceTypesList";

export const serviceTypes: ServiceType[] = [
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Professional home cleaning and organization services",
    features: ["Regular cleaning", "Deep cleaning", "Organizing", "Laundry assistance"],
    rates: "From R220 per session"
  },
  {
    id: "gardening",
    title: "Garden Services",
    description: "Lawn maintenance and garden care",
    features: ["Lawn mowing", "Garden maintenance", "Plant care", "Outdoor cleaning"],
    rates: "From R180 per session"
  },
  {
    id: "childcare",
    title: "Childcare",
    description: "Professional and vetted childcare professionals",
    features: ["Babysitting", "After-school care", "Educational support", "Child development"],
    rates: "From R230 per hour"
  }
];
