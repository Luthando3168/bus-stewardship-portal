
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
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
import Accommodation from "@/pages/Accommodation";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import NotFound from "@/pages/NotFound";

// Import fund pages
import MyFarmFund from "@/pages/funds/MyFarmFund";
import MyPropertyFund from "@/pages/funds/MyPropertyFund";
import MyFranchiseFund from "@/pages/funds/MyFranchiseFund";
import MyFoodRetailFund from "@/pages/funds/MyFoodRetailFund";
import MyEnergyFund from "@/pages/funds/MyEnergyFund";
import MyHealthFund from "@/pages/funds/MyHealthFund";
import MySchoolFund from "@/pages/funds/MySchoolFund";
import MyTelcoFund from "@/pages/funds/MyTelcoFund";

// Import route groups
import { publicRoutes } from "@/routes/PublicRoutes";
import { userRoutes } from "@/routes/UserRoutes";
import { adminRoutes } from "@/routes/AdminRoutes";
import { conciergeRoutes } from "@/routes/ConciergeRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userRole, setUserRole] = React.useState(localStorage.getItem("userRole"));

  React.useEffect(() => {
    if (isLoggedIn && !localStorage.getItem("clientNumber")) {
      const year = new Date().getFullYear();
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const clientNumber = `LM${year}${randomNum}`;
      localStorage.setItem("clientNumber", clientNumber);
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      setUserRole(localStorage.getItem("userRole"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AuthProvider>
      <Routes>
        {/* All routes from our route files */}
        {publicRoutes}
        {userRoutes}
        {adminRoutes}
        {conciergeRoutes}
        
        {/* 404 catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" />
    </AuthProvider>
  );
}

export default App;
