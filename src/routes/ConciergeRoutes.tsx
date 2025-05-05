
import React from "react";
import { Route, Routes } from "react-router-dom";
import ConciergeDashboard from "@/pages/concierge/ConciergeDashboard";
import BusinessService from "@/pages/concierge/BusinessService";
import { conciergeProfessionals } from "@/data/concierge-professionals";
import PropertyService from "@/pages/concierge/PropertyService";

// Export the component routes array for use in App.tsx
export const conciergeRoutes = [
  <Route key="concierge-dashboard" path="/concierge/dashboard" element={<ConciergeDashboard />} />,
  <Route 
    key="concierge-business-service" 
    path="/concierge/business/:id" 
    element={
      <BusinessService 
        professional={{
          name: "Default Professional",
          title: "Professional Title",
          company: "Company Name",
          description: "Professional description",
          services: ["Service 1", "Service 2"],
          category: "Default Category",
          image: "/placeholder.svg"
        }}
      />
    } 
  />,
  <Route key="concierge-property" path="/concierge/property" element={<PropertyService />} />,
];

const ConciergeRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<ConciergeDashboard />} />
      <Route
        path="business/:id"
        element={
          <BusinessService
            professional={{
              name: conciergeProfessionals[0]?.name || "Default Professional",
              title: conciergeProfessionals[0]?.title || "Professional Title",
              company: conciergeProfessionals[0]?.company || "Company Name",
              description: conciergeProfessionals[0]?.description || "Professional description",
              services: conciergeProfessionals[0]?.specialties?.map(s => s) || ["Service 1", "Service 2"],
              category: conciergeProfessionals[0]?.serviceCategory || "Default Category",
              image: conciergeProfessionals[0]?.image || "/placeholder.svg"
            }}
          />
        }
      />
      <Route path="property" element={<PropertyService />} />
    </Routes>
  );
};

export default ConciergeRoutes;
