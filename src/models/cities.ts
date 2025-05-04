
export interface City {
  id: number;
  name: string;
  province: string;
  description: string;
  population: string;
  investmentRequired: string;
  progress: number;
  amenities: string[];
  image: string;
  jobs: JobSector[];
}

export interface JobSector {
  id: number;
  name: string;
  description: string;
  estimatedJobs: number;
  roles: JobRole[];
}

export interface JobRole {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  slots: number;
}

export interface FamilyRegistration {
  fullName: string;
  idNumber: string;
  phone: string;
  email: string;
  currentAddress: string;
  familySize: number;
  familyMembers: FamilyMember[];
  preferredCity: number;
  jobInterests: number[];
}

export interface FamilyMember {
  fullName: string;
  relationship: string;
  age: number;
  idNumber: string;
}

// Initial cities data
export const cities: City[] = [
  {
    id: 1,
    name: "Alexandra City",
    province: "Gauteng",
    description: "#ChangeAlexNow is our flagship project designed to transform Alexandra township into a modern sustainable city with affordable housing, quality education, healthcare, and economic opportunities.",
    population: "350,000",
    investmentRequired: "R5.2 billion",
    progress: 15,
    amenities: ["Schools", "Hospitals", "Shopping Centers", "Sports Facilities", "Parks", "Public Transport"],
    image: "/lovable-uploads/cefab7d3-58a2-43a5-a136-7cac22b5c286.png",
    jobs: [
      {
        id: 1,
        name: "Construction",
        description: "Building the infrastructure for the new city",
        estimatedJobs: 5000,
        roles: [
          {
            id: 1,
            title: "Project Manager",
            description: "Oversee construction projects from planning to completion",
            requirements: ["5+ years experience", "Engineering degree", "Project management certification"],
            slots: 25
          },
          {
            id: 2,
            title: "Civil Engineer",
            description: "Design and supervise construction of infrastructure",
            requirements: ["Engineering degree", "3+ years experience", "Professional registration"],
            slots: 50
          },
          {
            id: 3,
            title: "Construction Worker",
            description: "General construction duties",
            requirements: ["Physical fitness", "Basic construction knowledge", "Willingness to learn"],
            slots: 2000
          }
        ]
      },
      {
        id: 2,
        name: "Education",
        description: "Teaching and administration in schools and colleges",
        estimatedJobs: 1200,
        roles: [
          {
            id: 4,
            title: "Teacher",
            description: "Primary and secondary education",
            requirements: ["Teaching qualification", "Subject expertise", "SACE registration"],
            slots: 500
          },
          {
            id: 5,
            title: "School Administrator",
            description: "Manage administrative functions at educational institutions",
            requirements: ["Administrative experience", "Computer literacy", "People management"],
            slots: 100
          }
        ]
      },
      {
        id: 3,
        name: "Healthcare",
        description: "Medical services for the community",
        estimatedJobs: 800,
        roles: [
          {
            id: 6,
            title: "Nurse",
            description: "Provide patient care in community clinics",
            requirements: ["Nursing qualification", "SANC registration", "Patient care experience"],
            slots: 300
          },
          {
            id: 7,
            title: "Community Health Worker",
            description: "Preventative healthcare and education",
            requirements: ["Health education", "Community knowledge", "Communication skills"],
            slots: 200
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Soweto New City",
    province: "Gauteng",
    description: "Transforming South Africa's largest township into a self-sustainable urban center with modern amenities while preserving its rich cultural heritage.",
    population: "500,000",
    investmentRequired: "R7.8 billion",
    progress: 8,
    amenities: ["Cultural Centers", "Tech Hub", "Renewable Energy", "Business District", "Educational Campuses"],
    image: "/lovable-uploads/b37923d0-335b-46bc-9852-7d271458f2a9.png",
    jobs: [
      {
        id: 4,
        name: "Technology",
        description: "IT and innovation services",
        estimatedJobs: 1000,
        roles: [
          {
            id: 8,
            title: "Software Developer",
            description: "Create applications and systems for city management",
            requirements: ["Programming skills", "IT qualification", "Problem-solving ability"],
            slots: 200
          }
        ]
      },
      {
        id: 5,
        name: "Tourism & Culture",
        description: "Promoting local heritage and tourism",
        estimatedJobs: 600,
        roles: [
          {
            id: 9,
            title: "Tourism Officer",
            description: "Develop and promote tourism initiatives",
            requirements: ["Tourism qualification", "Marketing experience", "Cultural knowledge"],
            slots: 75
          }
        ]
      }
    ]
  },
  // Add more cities as needed to cover all nine provinces
  {
    id: 3,
    name: "Cape Flats Renewal",
    province: "Western Cape",
    description: "Transforming the Cape Flats area into a thriving urban center with sustainable housing and economic opportunities.",
    population: "280,000",
    investmentRequired: "R4.9 billion",
    progress: 5,
    amenities: ["Affordable Housing", "Business Incubators", "Community Centers", "Parks", "Schools"],
    image: "/lovable-uploads/e5869f22-682c-4c5c-bd33-5a19766a95cf.png",
    jobs: [
      {
        id: 6,
        name: "Retail & Hospitality",
        description: "Services for residents and visitors",
        estimatedJobs: 1500,
        roles: [
          {
            id: 10,
            title: "Retail Manager",
            description: "Manage retail operations in shopping centers",
            requirements: ["Retail experience", "Management skills", "Customer service"],
            slots: 120
          }
        ]
      }
    ]
  },
  // More cities for other provinces would be added here
];

// Function to get list of provinces and cities
export const getProvincesList = () => {
  const provinces = Array.from(new Set(cities.map(city => city.province)));
  return provinces.map(province => ({
    name: province,
    cities: cities.filter(city => city.province === province)
  }));
};

// Get total job count
export const getTotalJobCount = () => {
  return cities.reduce((total, city) => {
    return total + city.jobs.reduce((jobTotal, sector) => jobTotal + sector.estimatedJobs, 0);
  }, 0);
};

// Get all job sectors across all cities
export const getAllJobSectors = () => {
  const sectors: JobSector[] = [];
  cities.forEach(city => {
    city.jobs.forEach(sector => {
      if (!sectors.find(s => s.name === sector.name)) {
        sectors.push(sector);
      }
    });
  });
  return sectors;
};
