import React from "react";
import { Route, Routes } from "react-router-dom";
import ConciergeDashboard from "@/pages/concierge/ConciergeDashboard";
import BusinessService from "@/pages/concierge/BusinessService";
import { conciergeProfessionals } from "@/data/concierge-professionals";

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
];

const ConciergeRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<ConciergeDashboard />} />
      <Route
        path="business/:id"
        element={<BusinessService professional={conciergeProfessionals[0]} />}
      />
    </Routes>
  );
};

export default ConciergeRoutes;
