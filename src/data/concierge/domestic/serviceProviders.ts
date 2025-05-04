
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
  completedJobs?: number;
  responseRate?: number;
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
    skills: ["Deep cleaning", "Organization", "Laundry care", "Kitchen maintenance"],
    completedJobs: 312,
    responseRate: 98
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
    skills: ["Native plant expertise", "Irrigation systems", "Seasonal maintenance", "Sustainable practices"],
    completedJobs: 215,
    responseRate: 95
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
    skills: ["Early education", "Special needs experience", "Multilingual (English, Zulu, Xhosa)", "First aid certified"],
    completedJobs: 278,
    responseRate: 99
  },
  {
    id: "provider4",
    name: "John Sibanda",
    role: "Professional Housekeeper",
    service: "housekeeping",
    bio: "With 7 years of experience working in high-end hotels and private homes, I deliver exceptional cleaning services with an eye for detail and efficiency. I specialize in eco-friendly cleaning methods.",
    experience: 7,
    rating: 4.7,
    reviews: 89,
    hourlyRate: "R200",
    availability: "Tue-Sat, 9am-6pm",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=John",
    skills: ["Eco-friendly cleaning", "Carpet care", "Surface restoration", "Window cleaning"],
    completedJobs: 174,
    responseRate: 96
  },
  {
    id: "provider5",
    name: "Lerato Khumalo",
    role: "Experienced Nanny",
    service: "childcare",
    bio: "I'm a loving and experienced nanny with 9 years of experience caring for children of all ages. I believe in creating a nurturing environment that encourages learning through play and exploration.",
    experience: 9,
    rating: 4.8,
    reviews: 112,
    hourlyRate: "R230",
    availability: "Mon-Fri, 7am-7pm",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Lerato",
    skills: ["Infant care", "Homework assistance", "Meal preparation", "Activities planning"],
    completedJobs: 203,
    responseRate: 97
  },
  {
    id: "provider6",
    name: "Samuel Ndlovu",
    role: "Garden Specialist",
    service: "gardening",
    bio: "I specialize in indigenous garden design and maintenance with 11 years of experience. My focus is on creating sustainable, water-wise gardens that flourish in the South African climate.",
    experience: 11,
    rating: 4.9,
    reviews: 132,
    hourlyRate: "R210",
    availability: "Mon-Sat, 6am-4pm",
    image: "https://placehold.co/400x400/e2e8f0/1e293b?text=Samuel",
    skills: ["Indigenous plants", "Garden design", "Pest management", "Water-wise gardening"],
    completedJobs: 267,
    responseRate: 98
  }
];
