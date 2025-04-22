import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Public pages
import About from "./pages/About";
import Bus from "./pages/Bus";
import ImpactFunds from "./pages/ImpactFunds";
import Foundation from "./pages/Foundation";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminDeals from "./pages/admin/AdminDeals";
import AdminNotifications from "./pages/admin/AdminNotifications";
import AdminBankAccounts from "./pages/admin/AdminBankAccounts";
import AdminConsultations from "./pages/admin/AdminConsultations";
import AdminBeneficiaries from "./pages/admin/AdminBeneficiaries";

// User pages
import UserDashboard from "./pages/user/UserDashboard";
import UserWallet from "./pages/user/UserWallet";
import UserProfile from "./pages/user/UserProfile";
import UserNewDeals from "./pages/user/UserNewDeals";
import UserInvestments from "./pages/user/UserInvestments";
import UserStatements from "./pages/user/UserStatements";
import UserBeneficiaries from "./pages/user/UserBeneficiaries";
import AdminReports from "./pages/admin/AdminReports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/impact-funds" element={<ImpactFunds />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin routes */}
          <Route path="/admin/dashboard" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute allowedRole="admin"><AdminUsers /></ProtectedRoute>} />
          <Route path="/admin/deals" element={<ProtectedRoute allowedRole="admin"><AdminDeals /></ProtectedRoute>} />
          <Route path="/admin/notifications" element={<ProtectedRoute allowedRole="admin"><AdminNotifications /></ProtectedRoute>} />
          <Route path="/admin/bank-accounts" element={<AdminBankAccounts />} />
          <Route path="/admin/consultations" element={<AdminConsultations />} />
          <Route path="/admin/beneficiaries" element={<AdminBeneficiaries />} />
          <Route path="/admin/reports" element={<ProtectedRoute allowedRole="admin">
            <AdminReports />
          </ProtectedRoute>} />

          {/* User routes */}
          <Route path="/user/dashboard" element={<ProtectedRoute allowedRole="user"><UserDashboard /></ProtectedRoute>} />
          <Route path="/user/new-deals" element={<ProtectedRoute allowedRole="user"><UserNewDeals /></ProtectedRoute>} />
          <Route path="/user/investments" element={<ProtectedRoute allowedRole="user"><UserInvestments /></ProtectedRoute>} />
          <Route path="/user/statements" element={<ProtectedRoute allowedRole="user"><UserStatements /></ProtectedRoute>} />
          <Route path="/user/beneficiaries" element={<ProtectedRoute allowedRole="user"><UserBeneficiaries /></ProtectedRoute>} />
          <Route path="/user/wallet" element={<ProtectedRoute allowedRole="user"><UserWallet /></ProtectedRoute>} />
          <Route path="/user/profile" element={<ProtectedRoute allowedRole="user"><UserProfile /></ProtectedRoute>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
