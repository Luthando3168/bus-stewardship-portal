
import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Import concierge pages
import GroceryService from "@/pages/concierge/GroceryService";
import AutoRepairsService from "@/pages/concierge/AutoRepairsService";
import PropertyService from "@/pages/concierge/PropertyService";
import DomesticService from "@/pages/concierge/DomesticService";
import FlightsService from "@/pages/concierge/FlightsService";
import HealthcareService from "@/pages/concierge/HealthcareService";
import Accommodation from "@/pages/Accommodation";
import WineService from "@/pages/concierge/WineService";

// Export routes as an array of JSX elements
export const conciergeRoutes = [
  // Concierge service subpages
  <Route 
    key="concierge-grocery"
    path="/concierge/grocery" 
    element={
      <ProtectedRoute>
        <GroceryService />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-auto-repairs"
    path="/concierge/auto-repairs" 
    element={
      <ProtectedRoute>
        <AutoRepairsService />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-property"
    path="/concierge/property" 
    element={
      <ProtectedRoute>
        <PropertyService />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-domestic"
    path="/concierge/domestic" 
    element={
      <ProtectedRoute>
        <DomesticService />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-flights"
    path="/concierge/flights" 
    element={
      <ProtectedRoute>
        <FlightsService />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-healthcare"
    path="/concierge/healthcare" 
    element={
      <ProtectedRoute>
        <HealthcareService />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-accommodation"
    path="/concierge/accommodation" 
    element={
      <ProtectedRoute>
        <Accommodation />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-wine"
    path="/concierge/wine" 
    element={
      <ProtectedRoute>
        <WineService />
      </ProtectedRoute>
    } 
  />
];

// Keep the component for backwards compatibility
const ConciergeRoutes = () => <>{conciergeRoutes}</>;
export default ConciergeRoutes;
