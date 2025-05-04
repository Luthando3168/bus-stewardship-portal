
export interface Property {
  id: number;
  title: string;
  price: string;
  type: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  image: string;
  featured?: boolean;
  isFavorite?: boolean;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Apartment in Sandton",
    price: "R2,850,000",
    type: "sale",
    location: "Sandton, Johannesburg",
    bedrooms: 2,
    bathrooms: 2,
    size: "115m²",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Luxury+Apartment",
    featured: true,
    isFavorite: false
  },
  {
    id: 2,
    title: "Modern Family Home",
    price: "R4,500,000",
    type: "sale",
    location: "Bryanston, Johannesburg",
    bedrooms: 4,
    bathrooms: 3,
    size: "280m²",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Family+Home",
    isFavorite: false
  },
  {
    id: 3,
    title: "Waterfront Apartment",
    price: "R18,500 /month",
    type: "rental",
    location: "V&A Waterfront, Cape Town",
    bedrooms: 2,
    bathrooms: 2,
    size: "95m²",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Waterfront+Apartment",
    featured: true,
    isFavorite: false
  },
  {
    id: 4,
    title: "Garden Cottage",
    price: "R8,900 /month",
    type: "rental",
    location: "Parkhurst, Johannesburg",
    bedrooms: 1,
    bathrooms: 1,
    size: "65m²",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Garden+Cottage",
    isFavorite: false
  }
];
