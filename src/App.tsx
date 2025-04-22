
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminDeals from "./pages/admin/AdminDeals";
import AdminNotifications from "./pages/admin/AdminNotifications";

// User pages
import UserDashboard from "./pages/user/UserDashboard";
import UserWallet from "./pages/user/UserWallet";
import UserProfile from "./pages/user/UserProfile";

// Creating placeholders for the future/remaining pages
const About = () => <div className="min-h-screen pt-16">About Page Coming Soon</div>;
const Bus = () => <div className="min-h-screen pt-16">BUS Program Page Coming Soon</div>;
const ImpactFunds = () => <div className="min-h-screen pt-16">Impact Funds Page Coming Soon</div>;
const Foundation = () => <div className="min-h-screen pt-16">Foundation Page Coming Soon</div>;
const Contact = () => <div className="min-h-screen pt-16">Contact Page Coming Soon</div>;
const Privacy = () => <div className="min-h-screen pt-16">Privacy Policy Coming Soon</div>;
const Terms = () => <div className="min-h-screen pt-16">Terms of Service Coming Soon</div>;
const UserNewDeals = () => <div className="min-h-screen pt-16">User New Deals Coming Soon</div>;
const UserInvestments = () => <div className="min-h-screen pt-16">User Investments Coming Soon</div>;
const UserStatements = () => <div className="min-h-screen pt-16">User Financial Statements Coming Soon</div>;
const AdminReports = () => <div className="min-h-screen pt-16">Admin Reports Coming Soon</div>;

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

          {/* Admin routes */}
          <Route path="/admin/dashboard" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute allowedRole="admin"><AdminUsers /></ProtectedRoute>} />
          <Route path="/admin/deals" element={<ProtectedRoute allowedRole="admin"><AdminDeals /></ProtectedRoute>} />
          <Route path="/admin/notifications" element={<ProtectedRoute allowedRole="admin"><AdminNotifications /></ProtectedRoute>} />
          <Route path="/admin/reports" element={<ProtectedRoute allowedRole="admin"><AdminReports /></ProtectedRoute>} />

          {/* User routes */}
          <Route path="/user/dashboard" element={<ProtectedRoute allowedRole="user"><UserDashboard /></ProtectedRoute>} />
          <Route path="/user/new-deals" element={<ProtectedRoute allowedRole="user"><UserNewDeals /></ProtectedRoute>} />
          <Route path="/user/investments" element={<ProtectedRoute allowedRole="user"><UserInvestments /></ProtectedRoute>} />
          <Route path="/user/statements" element={<ProtectedRoute allowedRole="user"><UserStatements /></ProtectedRoute>} />
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
