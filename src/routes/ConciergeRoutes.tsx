import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Import concierge pages
import GroceryService from "@/pages/concierge/GroceryService";
import AutoRepairsService from "@/pages/concierge/AutoRepairsService";
import PropertyService from "@/pages/concierge/PropertyService";
import DomesticService from "@/pages/concierge/DomesticService";
import DomesticServiceProviders from "@/pages/concierge/DomesticServiceProviders";
import DomesticProviderDetails from "@/pages/concierge/DomesticProviderDetails";
import DomesticServiceRequests from "@/pages/concierge/DomesticServiceRequests";
import FlightsService from "@/pages/concierge/FlightsService";
import HealthcareService from "@/pages/concierge/HealthcareService";
import Accommodation from "@/pages/Accommodation";
import WineService from "@/pages/concierge/WineService";
import GiftService from "@/pages/concierge/GiftService";
import MedicalAidService from "@/pages/concierge/MedicalAidService";
import FinancialService from "@/pages/concierge/FinancialService";
import AutoServicesPage from "@/pages/concierge/AutoServicesPage";
import RestaurantsService from "@/pages/concierge/RestaurantsService";

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
  // New domestic service routes
  <Route 
    key="concierge-domestic-service-type"
    path="/concierge/domestic/:serviceType" 
    element={
      <ProtectedRoute>
        <DomesticServiceProviders />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-domestic-provider-details"
    path="/concierge/domestic/:serviceType/provider/:providerId" 
    element={
      <ProtectedRoute>
        <DomesticProviderDetails />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-domestic-requests"
    path="/concierge/domestic/requests" 
    element={
      <ProtectedRoute>
        <DomesticServiceRequests />
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
    key="concierge-restaurants"
    path="/concierge/restaurants" 
    element={
      <ProtectedRoute>
        <RestaurantsService />
      </ProtectedRoute>
    } 
  />,
  
  <Route 
    key="concierge-doctors"
    path="/concierge/doctors" 
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
  />,
  <Route 
    key="concierge-gifts"
    path="/concierge/gifts" 
    element={
      <ProtectedRoute>
        <GiftService />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-medical-aid"
    path="/concierge/medical-aid" 
    element={
      <ProtectedRoute>
        <MedicalAidService />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-financial"
    path="/concierge/financial" 
    element={
      <ProtectedRoute>
        <FinancialService />
      </ProtectedRoute>
    } 
  />,
  <Route 
    key="concierge-auto-services"
    path="/concierge/auto-services" 
    element={
      <ProtectedRoute>
        <AutoServicesPage />
      </ProtectedRoute>
    } 
  />
];

// Keep the component for backwards compatibility
const ConciergeRoutes = () => <>{conciergeRoutes}</>;
export default ConciergeRoutes;
