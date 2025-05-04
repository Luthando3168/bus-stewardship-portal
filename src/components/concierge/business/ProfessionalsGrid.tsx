
import React from "react";
import ProfessionalCard, { Professional } from "./ProfessionalCard";

interface ProfessionalsGridProps {
  professionals: Professional[];
  searchQuery: string;
}

const ProfessionalsGrid = ({ professionals, searchQuery }: ProfessionalsGridProps) => {
  const filteredProfessionals = professionals.filter(
    (professional) =>
      professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="space-y-4">
      {filteredProfessionals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProfessionals.map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 border rounded-lg bg-gray-50">
          <p className="text-gray-500">No professionals found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ProfessionalsGrid;
