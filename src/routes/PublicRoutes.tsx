
import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Import all public pages
import Index from "@/pages/Index";
import About from "@/pages/About";
import HowWeWork from "@/pages/HowWeWork";
import Services from "@/pages/Services";
import Bus from "@/pages/Bus";
import Foundation from "@/pages/Foundation";
import ImpactFunds from "@/pages/ImpactFunds";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ForgotPassword from "@/pages/ForgotPassword";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import WelcomeLetter from "@/pages/WelcomeLetter";
import CitiesProject from "@/pages/CitiesProject"; // Add import for new page

// Import fund pages
import MyFarmFund from "@/pages/funds/MyFarmFund";
import MyPropertyFund from "@/pages/funds/MyPropertyFund";
import MyFranchiseFund from "@/pages/funds/MyFranchiseFund";
import MyFoodRetailFund from "@/pages/funds/MyFoodRetailFund";
import MyEnergyFund from "@/pages/funds/MyEnergyFund";
import MyHealthFund from "@/pages/funds/MyHealthFund";
import MySchoolFund from "@/pages/funds/MySchoolFund";
import MyTelcoFund from "@/pages/funds/MyTelcoFund";

// Export routes as an array of JSX elements
export const publicRoutes = [
  // Public routes
  <Route key="home" path="/" element={<Index />} />,
  <Route key="about" path="/about" element={<About />} />,
  <Route key="how-we-work" path="/how-we-work" element={<HowWeWork />} />,
  <Route key="services" path="/services" element={<Services />} />,
  <Route key="bus" path="/bus" element={<Bus />} />,
  <Route key="foundation" path="/foundation" element={<Foundation />} />,
  <Route key="impact-funds" path="/impact-funds" element={<ImpactFunds />} />,
  <Route key="cities-project" path="/cities-project" element={<CitiesProject />} />, // Add route for 100 Cities Project
  <Route key="contact" path="/contact" element={<Contact />} />,
  <Route key="login" path="/login" element={<Login />} />,
  <Route key="register" path="/register" element={<Register />} />,
  <Route key="forgot-password" path="/forgot-password" element={<ForgotPassword />} />,
  <Route key="terms" path="/terms" element={<Terms />} />,
  <Route key="privacy" path="/privacy" element={<Privacy />} />,
  <Route key="welcome-letter" path="/welcome-letter" element={<WelcomeLetter />} />,
  
  // Fund routes
  <Route key="funds-myfarm" path="/funds/myfarm" element={<MyFarmFund />} />,
  <Route key="funds-myproperty" path="/funds/myproperty" element={<MyPropertyFund />} />,
  <Route key="funds-myfranchise" path="/funds/myfranchise" element={<MyFranchiseFund />} />,
  <Route key="funds-myfoodretail" path="/funds/myfoodretail" element={<MyFoodRetailFund />} />,
  <Route key="funds-myenergy" path="/funds/myenergy" element={<MyEnergyFund />} />,
  <Route key="funds-myhealth" path="/funds/myhealth" element={<MyHealthFund />} />,
  <Route key="funds-myschool" path="/funds/myschool" element={<MySchoolFund />} />,
  <Route key="funds-mytelco" path="/funds/mytelco" element={<MyTelcoFund />} />,
  <Route key="mca-direct" path="/mca-direct" element={<ImpactFunds />} />,
  
  // Redirects
  <Route key="redirect-new-deals" path="/user/new-deals" element={<Navigate to="/user/investments" replace />} />,
  <Route key="redirect-pending-deals" path="/user/pending-deals" element={<Navigate to="/user/investments?tab=pending" replace />} />,
  <Route key="redirect-my-investments" path="/user/my-investments" element={<Navigate to="/user/investments?tab=portfolio" replace />} />
];

// Keep the component for backwards compatibility
const PublicRoutes = () => <>{publicRoutes}</>;
export default PublicRoutes;
