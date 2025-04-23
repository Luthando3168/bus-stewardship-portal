import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
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
import AdminShareCertificates from "@/pages/admin/AdminShareCertificates";
import AdminFinancialStatements from "@/pages/admin/AdminFinancialStatements";
import UserNewDeals from "@/pages/user/UserNewDeals";
import UserPendingDeals from "@/pages/user/UserPendingDeals";
import UserMyInvestments from "@/pages/user/UserMyInvestments";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import CompleteRegistration from "@/components/auth/CompleteRegistration";
import EmailPreview from "@/pages/EmailPreview";
import MyFarmFund from "@/pages/funds/MyFarmFund";
import MyPropertyFund from "@/pages/funds/MyPropertyFund";
import MyFranchiseFund from "@/pages/funds/MyFranchiseFund";
import MyFoodRetailFund from "@/pages/funds/MyFoodRetailFund";

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
    <BrowserRouter>
      <AuthProvider>
        <Routes>
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
          <Route path="/email-preview" element={<EmailPreview />} />
          <Route path="/complete-registration" element={<CompleteRegistration />} />
          <Route path="/funds/myfarm" element={<MyFarmFund />} />
          <Route path="/funds/myproperty" element={<MyPropertyFund />} />
          <Route path="/funds/myfranchise" element={<MyFranchiseFund />} />
          <Route path="/funds/myfoodretail" element={<MyFoodRetailFund />} />
          <Route path="/user" element={<ProtectedRoute allowedRole="user"><Outlet /></ProtectedRoute>}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="wallet" element={<UserWallet />} />
            <Route path="beneficiaries" element={<UserBeneficiaries />} />
            <Route path="statements" element={<UserStatements />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="investments" element={<UserInvestments />} />
            <Route path="new-deals" element={<UserNewDeals />} />
            <Route path="pending-deals" element={<UserPendingDeals />} />
            <Route path="my-investments" element={<UserMyInvestments />} />
          </Route>
          <Route path="/admin" element={<ProtectedRoute allowedRole="admin"><Outlet /></ProtectedRoute>}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="deals" element={<AdminDeals />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="consultations" element={<AdminConsultations />} />
            <Route path="bank-accounts" element={<AdminBankAccounts />} />
            <Route path="beneficiaries" element={<AdminBeneficiaries />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="share-certificates" element={<AdminShareCertificates />} />
            <Route path="financial-statements" element={<AdminFinancialStatements />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
