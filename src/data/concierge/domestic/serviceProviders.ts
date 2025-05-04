
import { Avatar } from "lucide-react";

export interface ServiceProvider {
  id: string;
  name: string;
  role: string;
  service: string; // matches serviceTypes.id in DomesticService.tsx
  bio: string;
  experience: number;
  rating: number;
  reviews: number;
  hourlyRate: string;
  availability: string;
  image: string;
  skills: string[];
}

export const serviceProviders: ServiceProvider[] = [
  {
    id: "provider1",
    name: "Maria Nkomo",
    role: "Professional Housekeeper",
    service: "housekeeping",
    bio: "With over 10 years of experience in premium home cleaning services, I specialize in maintaining pristine environments for busy professionals and families. My approach combines thorough attention to detail with efficient time management.",
    experience: 10,
    rating: 4.9,
    reviews: 124,
    hourlyRate: "R220",
    availability: "Mon-Fri, 8am-5pm",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Maria",
    skills: ["Deep cleaning", "Organization", "Laundry care", "Kitchen maintenance"]
  },
  {
    id: "provider2",
    name: "Thabo Mokoena",
    role: "Expert Gardener",
    service: "gardening",
    bio: "I've been transforming residential and commercial outdoor spaces for 8 years. My passion lies in sustainable gardening practices and creating beautiful, low-maintenance gardens that thrive in South Africa's diverse climate.",
    experience: 8,
    rating: 4.8,
    reviews: 97,
    hourlyRate: "R180",
    availability: "Mon-Sat, 7am-4pm",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Thabo",
    skills: ["Native plant expertise", "Irrigation systems", "Seasonal maintenance", "Sustainable practices"]
  },
  {
    id: "provider3",
    name: "Nomsa Dlamini",
    role: "Certified Childcare Professional",
    service: "childcare",
    bio: "I am a certified childcare professional with 12 years of experience and a background in early childhood education. I create nurturing, educational environments that support children's development while providing parents with peace of mind.",
    experience: 12,
    rating: 4.9,
    reviews: 156,
    hourlyRate: "R250",
    availability: "Mon-Sun, flexible hours",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Nomsa",
    skills: ["Early education", "Special needs experience", "Multilingual (English, Zulu, Xhosa)", "First aid certified"]
  }
];
