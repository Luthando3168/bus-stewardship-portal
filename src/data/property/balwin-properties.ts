
import { v4 as uuidv4 } from "uuid";

export interface BalwinProperty {
  id: string;
  name: string;
  location: string;
  description: string;
  features: string[];
  amenities: string[];
  priceRange: string;
  returnRate: string;
  image: string;
  minInvestment: number;
  availableUnits: {
    id: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
    price: string;
    status: "available" | "in-progress" | "sold";
  }[];
}

export const balwinProperties: BalwinProperty[] = [
  {
    id: "the-reid",
    name: "The Reid",
    location: "Sandton, Johannesburg",
    description: "The Reid is a modern lifestyle estate in Sandton offering 1, 2 and 3 bedroom apartments with quality finishes, fibre connectivity and a signature Lifestyle Centre packed with leisure, wellness and social facilities.",
    features: [
      "Lifestyle Centre with restaurant and coffee shop",
      "24-hour security with biometric access",
      "Fitness centre with heated pools",
      "Pre-paid electricity and water meters",
      "Free eco-friendly appliances"
    ],
    amenities: [
      "Swimming pools",
      "Spa & wellness centre",
      "Tennis courts",
      "Laundromat",
      "Kids play area"
    ],
    priceRange: "R1,599,900 - R2,699,900",
    returnRate: "14% p.a. projected",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    minInvestment: 2000,
    availableUnits: [
      {
        id: uuidv4(),
        type: "3-Bedroom Apartment",
        bedrooms: 3,
        bathrooms: 2,
        size: "110m²",
        price: "R2,399,900",
        status: "available"
      },
      {
        id: uuidv4(),
        type: "3-Bedroom Penthouse",
        bedrooms: 3,
        bathrooms: 2.5,
        size: "125m²",
        price: "R2,699,900",
        status: "available"
      }
    ]
  },
  {
    id: "the-whisken",
    name: "The Whisken",
    location: "Kyalami, Midrand",
    description: "The Whisken's apartments come standard with lifestyle-enhancing features and access to a world-class Lifestyle Centre with leisure, sporting and business facilities.",
    features: [
      "High-speed fibre connectivity",
      "Energy-efficient LED lighting",
      "Balwin Smart technology ready",
      "Pre-paid utility meters",
      "Solar supplemented electricity"
    ],
    amenities: [
      "Resort-style pools",
      "State-of-the-art gym",
      "Restaurant and coffee shop",
      "Concierge services",
      "Co-working spaces"
    ],
    priceRange: "R1,699,900 - R2,899,900",
    returnRate: "13.5% p.a. projected",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    minInvestment: 2000,
    availableUnits: [
      {
        id: uuidv4(),
        type: "3-Bedroom Garden Apartment",
        bedrooms: 3,
        bathrooms: 2,
        size: "115m²",
        price: "R2,499,900",
        status: "available"
      },
      {
        id: uuidv4(),
        type: "4-Bedroom Duplex",
        bedrooms: 4,
        bathrooms: 3,
        size: "160m²",
        price: "R2,899,900",
        status: "available"
      }
    ]
  },
  {
    id: "munyaka",
    name: "Munyaka",
    location: "Waterfall, Midrand",
    description: "Munyaka is an iconic lifestyle estate with a crystal-clear lagoon, luxurious apartments, and exceptional water-focused leisure facilities in Waterfall City.",
    features: [
      "Crystal-clear lagoon",
      "Beach-style shoreline",
      "Luxury finishes throughout",
      "Smart home technology",
      "Double glazed windows"
    ],
    amenities: [
      "Beach-club restaurant",
      "Water sports facilities",
      "Olympic-sized training pool",
      "Beach volleyball courts",
      "Fully equipped gym"
    ],
    priceRange: "R2,199,900 - R3,599,900",
    returnRate: "15% p.a. projected",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    minInvestment: 2000,
    availableUnits: [
      {
        id: uuidv4(),
        type: "3-Bedroom Premium Apartment",
        bedrooms: 3,
        bathrooms: 2,
        size: "130m²",
        price: "R2,899,900",
        status: "available"
      },
      {
        id: uuidv4(),
        type: "4-Bedroom Waterfront Villa",
        bedrooms: 4,
        bathrooms: 3.5,
        size: "180m²",
        price: "R3,599,900",
        status: "available"
      }
    ]
  },
  {
    id: "the-polofields",
    name: "The Polofields",
    location: "Waterfall, Midrand",
    description: "The Polofields features ultra-modern, elegant apartments, pre-paid gas, fibre connectivity, and a signature Lifestyle Centre with exclusive amenities.",
    features: [
      "Designer kitchens",
      "Engineered stone countertops",
      "Full fibre connectivity",
      "Energy-efficient design",
      "100% backup power"
    ],
    amenities: [
      "Heated swimming pools",
      "Wellness centre",
      "Padel tennis courts",
      "Business centre",
      "Gourmet restaurant"
    ],
    priceRange: "R1,999,900 - R3,099,900",
    returnRate: "14.2% p.a. projected",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    minInvestment: 2000,
    availableUnits: [
      {
        id: uuidv4(),
        type: "3-Bedroom Luxury Apartment",
        bedrooms: 3,
        bathrooms: 2,
        size: "120m²",
        price: "R2,599,900",
        status: "available"
      },
      {
        id: uuidv4(),
        type: "3-Bedroom Penthouse",
        bedrooms: 3,
        bathrooms: 2,
        size: "140m²",
        price: "R3,099,900",
        status: "available"
      }
    ]
  },
  {
    id: "the-cambridge",
    name: "The Cambridge",
    location: "Paulshof, Sandton",
    description: "The Cambridge showcases top-quality 1, 2 and 3 bedroom apartments in Paulshof with a lifestyle centre, swimming pool, gym, restaurant, and spa facilities.",
    features: [
      "Upmarket finishes",
      "Built-in kitchen appliances",
      "Smart-ready apartments",
      "Energy-efficient heat pumps",
      "24-hour security"
    ],
    amenities: [
      "Landscaped gardens",
      "Lifestyle centre",
      "Fitness studio",
      "Outdoor recreation areas",
      "Business hub"
    ],
    priceRange: "R1,499,900 - R2,499,900",
    returnRate: "13.8% p.a. projected",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    minInvestment: 2000,
    availableUnits: [
      {
        id: uuidv4(),
        type: "3-Bedroom Standard",
        bedrooms: 3,
        bathrooms: 2,
        size: "105m²",
        price: "R2,199,900",
        status: "available"
      },
      {
        id: uuidv4(),
        type: "3-Bedroom Premium",
        bedrooms: 3,
        bathrooms: 2,
        size: "115m²",
        price: "R2,499,900",
        status: "available"
      }
    ]
  },
  {
    id: "the-blyde",
    name: "The Blyde",
    location: "Pretoria East",
    description: "Home of South Africa's first crystal-clear lagoon, The Blyde is an innovative lifestyle estate in Pretoria East offering 1, 2 and 3 bedroom apartments with modern finishes.",
    features: [
      "Crystal-clear lagoon",
      "White sand beaches",
      "Renewable energy solutions",
      "Energy-efficient appliances",
      "Smart home features"
    ],
    amenities: [
      "Water sports equipment",
      "Beach club restaurant",
      "Wellness centre",
      "Outdoor cinema",
      "Water slides and kids pool"
    ],
    priceRange: "R1,699,900 - R2,899,900",
    returnRate: "14.5% p.a. projected",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    minInvestment: 2000,
    availableUnits: [
      {
        id: uuidv4(),
        type: "3-Bedroom Lagoon View",
        bedrooms: 3,
        bathrooms: 2,
        size: "120m²",
        price: "R2,599,900",
        status: "available"
      },
      {
        id: uuidv4(),
        type: "4-Bedroom Beach Villa",
        bedrooms: 4,
        bathrooms: 3,
        size: "160m²",
        price: "R2,899,900",
        status: "available"
      }
    ]
  },
  {
    id: "greenpark",
    name: "Greenpark",
    location: "Boksburg",
    description: "Located in Boksburg, Greenpark offers secure, affordable lifestyle apartments with green play areas, swimming pools, and convenient access to amenities.",
    features: [
      "Eco-friendly design",
      "Solar-supplemented power",
      "Water-saving fixtures",
      "Energy-efficient lighting",
      "Modern security systems"
    ],
    amenities: [
      "Family-friendly play areas",
      "Community swimming pools",
      "Walking and jogging trails",
      "Outdoor exercise stations",
      "BBQ and picnic areas"
    ],
    priceRange: "R1,299,900 - R2,199,900",
    returnRate: "13% p.a. projected",
    image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5",
    minInvestment: 2000,
    availableUnits: [
      {
        id: uuidv4(),
        type: "3-Bedroom Family Unit",
        bedrooms: 3,
        bathrooms: 2,
        size: "100m²",
        price: "R1,899,900",
        status: "available"
      },
      {
        id: uuidv4(),
        type: "3-Bedroom Garden Unit",
        bedrooms: 3,
        bathrooms: 2,
        size: "110m²",
        price: "R2,199,900",
        status: "available"
      }
    ]
  }
];
