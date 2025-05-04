
import { Professional } from "@/components/concierge/business/ProfessionalCard";
import { businessProfessionals } from "@/data/concierge/business/professionals";

// Export the professionals from the business professionals data
export const conciergeProfessionals: Professional[] = businessProfessionals;

// Export helper functions
export const getProfessionalById = (id: string): Professional | undefined => {
  return conciergeProfessionals.find(professional => professional.id === id);
};

export const getProfessionalsByCategoryId = (categoryId: string): Professional[] => {
  return conciergeProfessionals.filter(professional => 
    professional.serviceCategory === categoryId
  );
};
