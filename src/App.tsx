
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Bus from "@/pages/Bus";
import Foundation from "@/pages/Foundation";
import ImpactFunds from "@/pages/ImpactFunds";
import HowWeWork from "@/pages/HowWeWork";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";
import UserDashboard from "@/pages/user/UserDashboard";
import UserWallet from "@/pages/user/UserWallet";
import UserBeneficiaries from "@/pages/user/UserBeneficiaries";
import UserStatements from "@/pages/user/UserStatements";
import UserProfile from "@/pages/user/UserProfile";
import UserInvestments from "@/pages/user/UserInvestments";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminUsers from "@/pages/admin/AdminUsers";
import AdminDeals from "@/pages/admin/AdminDeals";
import AdminReports from "@/pages/admin/AdminReports";
import AdminConsultations from "@/pages/admin/AdminConsultations";
import AdminBankAccounts from "@/pages/admin/AdminBankAccounts";
import AdminBeneficiaries from "@/pages/admin/AdminBeneficiaries";
import AdminNotifications from "@/pages/admin/AdminNotifications";
import UserNewDeals from "@/pages/user/UserNewDeals";
import UserPendingDeals from "@/pages/user/UserPendingDeals";
import UserMyInvestments from "@/pages/user/UserMyInvestments";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  allowedRole: string;
}

const ProtectedRoute = ({ allowedRole, children }: ProtectedRouteProps) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (allowedRole !== userRole) {
    return <Navigate to="/not-authorized" />;
  }

  return children ? <>{children}</> : null;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));

  useEffect(() => {
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
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/impact-funds" element={<ImpactFunds />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* User Routes */}
        <Route element={<ProtectedRoute allowedRole="user" />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/wallet" element={<UserWallet />} />
          <Route path="/user/beneficiaries" element={<UserBeneficiaries />} />
          <Route path="/user/statements" element={<UserStatements />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/investments" element={<UserInvestments />} />
          <Route path="/user/new-deals" element={<UserNewDeals />} />
          <Route path="/user/pending-deals" element={<UserPendingDeals />} />
          <Route path="/user/my-investments" element={<UserMyInvestments />} />
        </Route>
        
        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/deals" element={<AdminDeals />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/consultations" element={<AdminConsultations />} />
          <Route path="/admin/bank-accounts" element={<AdminBankAccounts />} />
          <Route path="/admin/beneficiaries" element={<AdminBeneficiaries />} />
          <Route path="/admin/notifications" element={<AdminNotifications />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
