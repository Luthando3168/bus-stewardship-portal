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
import NotFound from "@/pages/NotFound";
import MyFarmFund from "@/pages/funds/MyFarmFund";
import MyPropertyFund from "@/pages/funds/MyPropertyFund";
import MyFranchiseFund from "@/pages/funds/MyFranchiseFund";
import MyFoodRetailFund from "@/pages/funds/MyFoodRetailFund";
import MyEnergyFund from "@/pages/funds/MyEnergyFund";
import MyHealthFund from "@/pages/funds/MyHealthFund";
import MySchoolFund from "@/pages/funds/MySchoolFund";
import MyTelcoFund from "@/pages/funds/MyTelcoFund";

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
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/impact-funds" element={<ImpactFunds />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/funds/myfarm" element={<MyFarmFund />} />
        <Route path="/funds/myproperty" element={<MyPropertyFund />} />
        <Route path="/funds/myfranchise" element={<MyFranchiseFund />} />
        <Route path="/funds/myfoodretail" element={<MyFoodRetailFund />} />
        <Route path="/funds/myenergy" element={<MyEnergyFund />} />
        <Route path="/funds/myhealth" element={<MyHealthFund />} />
        <Route path="/funds/myschool" element={<MySchoolFund />} />
        <Route path="/funds/mytelco" element={<MyTelcoFund />} />
        <Route path="/mca-direct" element={<ImpactFunds />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
