import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import WelcomeLetter from "@/pages/WelcomeLetter";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import UserDashboard from "@/pages/user/UserDashboard";
import UserInvestments from "@/pages/user/UserInvestments";
import UserWallet from "@/pages/user/UserWallet";
import UserProfile from "@/pages/user/UserProfile";
import UserPendingDeals from "@/pages/user/UserPendingDeals";

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
        <Route path="/welcome-letter" element={<WelcomeLetter />} />
        <Route path="/funds/myfarm" element={<MyFarmFund />} />
        <Route path="/funds/myproperty" element={<MyPropertyFund />} />
        <Route path="/funds/myfranchise" element={<MyFranchiseFund />} />
        <Route path="/funds/myfoodretail" element={<MyFoodRetailFund />} />
        <Route path="/funds/myenergy" element={<MyEnergyFund />} />
        <Route path="/funds/myhealth" element={<MyHealthFund />} />
        <Route path="/funds/myschool" element={<MySchoolFund />} />
        <Route path="/funds/mytelco" element={<MyTelcoFund />} />
        <Route path="/mca-direct" element={<ImpactFunds />} />
        
        {/* Add redirect for the problematic route */}
        <Route path="/user/new-deals" element={<Navigate to="/user/investments" replace />} />
        <Route path="/user/pending-deals" element={<Navigate to="/user/investments?tab=pending" replace />} />
        <Route path="/user/my-investments" element={<Navigate to="/user/investments?tab=portfolio" replace />} />
        
        {/* Admin routes */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute requireAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* User routes */}
        <Route 
          path="/user/dashboard" 
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/user/investments" 
          element={
            <ProtectedRoute>
              <UserInvestments />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/user/wallet" 
          element={
            <ProtectedRoute>
              <UserWallet />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/user/profile" 
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } 
        />
        
        {/* Add route for user beneficiaries/statements */}
        <Route 
          path="/user/beneficiaries" 
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/user/statements" 
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* 404 catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" />
    </AuthProvider>
  );
}

export default App;
